// Lays out README + book/*.md + docs/*.md into a PDF: pandoc converts Markdown to typst, typst does the layout.
// Usage: node tools/pdf/build.mjs [output path]   Default output: dist/HowToLiveBetter.pdf
// Requires pandoc (≥3.1, with typst output) and typst (≥0.13) on PATH, or point at them via the PANDOC and TYPST environment variables.
// The layout lives in tools/pdf/template.typ; the body text is not modified at all — only three things happen:
// strip the "← back to top" link, attach an anchor to each section's heading, and rewrite in-repository links as in-book jumps or GitHub URLs.
import { writeFileSync, mkdirSync, statSync } from 'node:fs';
import { resolve, dirname, posix, basename } from 'node:path';
import { execFileSync } from 'node:child_process';
import { ROOT, REPO, SITE, TITLE, read, readBook, gitCommit, buildStamp, stripBackLink } from '../lib/book.mjs';

const OUT = resolve(ROOT, process.argv[2] ?? 'dist/HowToLiveBetter.pdf');
const WORK = resolve(ROOT, 'dist/pdf-build.md');
const PANDOC = process.env.PANDOC ?? 'pandoc';
const TYPST = process.env.TYPST ?? 'typst';
const STAMP = buildStamp();          // "(Beijing time)" appears in the template and version notes; the value passed to pandoc stays pure ASCII
const COMMIT = gitCommit();

const { description, frontMd, contentsMd, bookFiles, docFiles } = readBook();

// ---------- Pages (one top-level heading per page; level-1 headings start a new page in typst) ----------
const anchorOf = new Map();
bookFiles.forEach(f => anchorOf.set(f, 'sec-' + (basename(f).match(/^\d+/)?.[0] ?? anchorOf.size + 1)));
docFiles.forEach((f, i) => anchorOf.set(f, `doc-${i + 1}`));

const pages = [
  { src: 'README.md', md: `# Preface\n\n${description}\n\n${frontMd}`, anchor: 'front' },
  { src: 'README.md', md: contentsMd.replace(/^## 目录/, '# Section overviews'), anchor: 'contents' },
  ...[...bookFiles, ...docFiles].map(src => ({ src, md: stripBackLink(read(src)), anchor: anchorOf.get(src) })),
  { src: 'README.md', md: aboutMd(), anchor: 'about' },
];

function aboutMd() {
  const commitLine = COMMIT ? `- Corresponding commit: ${COMMIT.slice(0, 7)}\n` : '';
  return `# Version notes

This PDF is typeset automatically from the Markdown body in the repository; any change to the body regenerates a new copy. This copy's version:

- Generated at: ${STAMP} (Beijing time)
${commitLine}- Latest release download, online search, issue tracker: ${REPO}
- Online search page (filter by keyword, section, evidence grade, and cost; can also be saved as a single offline file): ${SITE}

In-body links pointing to other sections of the book have been rewritten as in-book jumps; links pointing to files not typeset into the book (verification records, licenses, etc.) have been rewritten as GitHub URLs.

The body text is released under CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/). You may redistribute, adapt, and use it commercially, provided you credit "How To Live Better" and include a link to the repository; if you modify the content, you must note that you have done so.`;
}

// ---------- Links: in-book ones become anchors, external ones become absolute URLs ----------
function rewriteLinks(md, src) {
  return md.replace(/\]\(([^)\s]+)(\s+"[^"]*")?\)/g, (all, href, title) => {
    if (/^(https?:|mailto:)/.test(href)) return all;
    // Anchor links pointing to the README's own sections (e.g., #目录) may not exist in the book;
    // point them back at the README on GitHub.
    if (href.startsWith('#')) return `](${REPO}/blob/main/README.md${href}${title ?? ''})`;
    const [path] = href.split('#');
    const target = posix.normalize(posix.join(posix.dirname(src), path));
    const anchor = anchorOf.get(target);
    if (anchor) return `](#${anchor}${title ?? ''})`;
    const kind = target.endsWith('/') ? 'tree' : 'blob';
    return `](${REPO}/${kind}/main/${target}${title ?? ''})`;
  });
}

const body = pages.map(p => {
  const md = rewriteLinks(p.md, p.src)
    .replace(/<!--[\s\S]*?-->/g, '')                       // HTML comments such as cost labels do not go into the PDF
    .replace(/^(# .+?)\s*$/m, `$1 {#${p.anchor}}`);        // Attach an anchor to this page's level-1 heading
  if (!md.includes(`{#${p.anchor}}`)) throw new Error(`No level-1 heading found in ${p.src}; cannot attach an anchor`);
  return md.trim();
}).join('\n\n');

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(WORK, body);

// ---------- pandoc → typst → pdf ----------
const run = (cmd, args) => {
  try {
    return execFileSync(cmd, args, { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
  } catch (err) {
    if (err.code === 'ENOENT') throw new Error(`Could not find ${cmd}; install it or point the environment variable ${cmd === PANDOC ? 'PANDOC' : 'TYPST'} at the executable`);
    throw new Error(`${cmd} failed:\n${err.stderr || err.stdout || err.message}`);
  }
};

const typFile = resolve(ROOT, 'dist/pdf-build.typ');
run(PANDOC, [
  '--from=gfm+attributes', '--to=typst', '--wrap=none',
  `--template=${resolve(ROOT, 'tools/pdf/template.typ')}`,
  '-V', `booktitle=${TITLE}`, '-V', `subtitle=${description}`,
  '-V', `builddate=${STAMP}`, '-V', `commit=${COMMIT.slice(0, 7) || 'unknown'}`,
  '-V', `site=${SITE}`, '-V', `repo=${REPO}`,
  '-o', typFile, WORK,
]);
const log = run(TYPST, ['compile', typFile, OUT, '--root', ROOT]);
if (log.trim()) console.log(log.trim());

const entries = pages.filter(p => bookFiles.includes(p.src))
  .reduce((n, p) => n + p.md.split('\n').filter(l => l.startsWith('### ')).length, 0);
console.log(`Generated ${OUT}: ${bookFiles.length} sections, ${entries} entries, ${docFiles.length} appendices, ${(statSync(OUT).size / 1048576).toFixed(1)} MB`);
