// README + book/*.md + docs/*.md کو PDF میں layout کرتا ہے: pandoc Markdown کو typst میں تبدیل کرتا ہے، typst layout کرتا ہے۔
// استعمال: node tools/pdf/build.mjs [آؤٹ پٹ پاتھ]   طے شدہ آؤٹ پٹ: dist/HowToLiveBetter.pdf
// PATH پر pandoc (≥3.1، typst آؤٹ پٹ کے ساتھ) اور typst (≥0.13) درکار ہیں، یا ان کی طرف PANDOC اور TYPST ماحولیاتی متغیرات کے ذریعے اشارہ کریں۔
// layout tools/pdf/template.typ میں ہے؛ متن میں بالکل کوئی ترمیم نہیں ہوتی — صرف تین چیزیں ہوتی ہیں:
// "← top پر واپس" link ہٹائیں، ہر سیکشن کے ہیڈنگ کے ساتھ ایک anchor منسلک کریں، اور repository کے اندر کے links کو بک کے اندر jumps یا GitHub URLs کے طور پر دوبارہ لکھیں۔
import { writeFileSync, mkdirSync, statSync } from 'node:fs';
import { resolve, dirname, posix, basename } from 'node:path';
import { execFileSync } from 'node:child_process';
import { ROOT, REPO, SITE, TITLE, read, readBook, gitCommit, buildStamp, stripBackLink } from '../lib/book.mjs';

const OUT = resolve(ROOT, process.argv[2] ?? 'dist/HowToLiveBetter.pdf');
const WORK = resolve(ROOT, 'dist/pdf-build.md');
const PANDOC = process.env.PANDOC ?? 'pandoc';
const TYPST = process.env.TYPST ?? 'typst';
const STAMP = buildStamp();          // "(بیجنگ وقت)" template اور ورژن نوٹس میں ظاہر ہوتا ہے؛ pandoc کو پاس قدر خالص ASCII رہتی ہے
const COMMIT = gitCommit();

const { description, frontMd, contentsMd, bookFiles, docFiles } = readBook();

// ---------- صفحات (ہر صفحے پر ایک top-level ہیڈنگ؛ level-1 ہیڈنگز typst میں نئے صفحے کا آغاز کرتی ہیں) ----------
const anchorOf = new Map();
bookFiles.forEach(f => anchorOf.set(f, 'sec-' + (basename(f).match(/^\d+/)?.[0] ?? anchorOf.size + 1)));
docFiles.forEach((f, i) => anchorOf.set(f, `doc-${i + 1}`));

const pages = [
  { src: 'README.md', md: `# تمہید\n\n${description}\n\n${frontMd}`, anchor: 'front' },
  { src: 'README.md', md: contentsMd.replace(/^## 目录/, '# سیکشن جائزے'), anchor: 'contents' },
  ...[...bookFiles, ...docFiles].map(src => ({ src, md: stripBackLink(read(src)), anchor: anchorOf.get(src) })),
  { src: 'README.md', md: aboutMd(), anchor: 'about' },
];

function aboutMd() {
  const commitLine = COMMIT ? `- متعلقہ commit: ${COMMIT.slice(0, 7)}\n` : '';
  return `# ورژن نوٹس

یہ PDF ریپوزیٹری میں Markdown body سے خود کار طور پر typeset ہوتی ہے؛ body میں کوئی بھی تبدیلی ایک نئی کاپی دوبارہ بناتی ہے۔ اس کاپی کا ورژن:

- تیار کردہ وقت: ${STAMP} (بیجنگ وقت)
${commitLine}- تازہ ترین release ڈاؤن لوڈ، آن لائن سرچ، مسئلہ ٹریکر: ${REPO}
- آن لائن سرچ پیج (کلیدی لفظ، سیکشن، ثبوت درجہ، اور لاگت کے لحاظ سے filter؛ ایک single offline فائل کے طور پر بھی محفوظ کیا جا سکتا ہے): ${SITE}

بک کے دوسرے سیکشنز کی طرف اشارہ کرنے والے body links کو بک کے اندر jumps کے طور پر دوبارہ لکھا گیا ہے؛ بک میں typeset نہ ہونے والی فائلوں (تصدیقی ریکارڈز، لائسنسز، وغیرہ) کی طرف اشارہ کرنے والے links کو GitHub URLs کے طور پر دوبارہ لکھا گیا ہے۔

متن CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/) کے تحت جاری کیا گیا ہے۔ آپ اسے دوبارہ تقسیم، ڈھال، اور تجارتی طور پر استعمال کر سکتے ہیں، بشرطیکہ آپ "How To Live Better" کا ذکر کریں اور ریپوزیٹری کا link شامل کریں؛ اگر آپ مواد میں ترمیم کرتے ہیں، تو آپ کو یہ نوٹ کرنا ہوگا کہ آپ نے ایسا کیا ہے۔`;
}

// ---------- links: بک کے اندر والے anchors بن جاتے ہیں، بیرونی والے absolute URLs بن جاتے ہیں ----------
function rewriteLinks(md, src) {
  return md.replace(/\]\(([^)\s]+)(\s+"[^"]*")?\)/g, (all, href, title) => {
    if (/^(https?:|mailto:)/.test(href)) return all;
    // README کے اپنے سیکشنز کی طرف anchor links (مثلاً، #目录) بک میں موجود نہیں ہو سکتیں؛
    // انہیں GitHub پر README کی طرف واپس اشارہ کریں۔
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
    .replace(/<!--[\s\S]*?-->/g, '')                       // HTML comments جیسے cost labels PDF میں نہیں جاتے
    .replace(/^(# .+?)\s*$/m, `$1 {#${p.anchor}}`);        // اس صفحے کی level-1 ہیڈنگ کے ساتھ anchor منسلک کریں
  if (!md.includes(`{#${p.anchor}}`)) throw new Error(`${p.src} میں کوئی level-1 ہیڈنگ نہیں ملی؛ anchor منسلک نہیں ہو سکتا`);
  return md.trim();
}).join('\n\n');

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(WORK, body);

// ---------- pandoc → typst → pdf ----------
const run = (cmd, args) => {
  try {
    return execFileSync(cmd, args, { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
  } catch (err) {
    if (err.code === 'ENOENT') throw new Error(`${cmd} نہیں مل سکا؛ اسے انسٹال کریں یا ماحولیاتی متغیر ${cmd === PANDOC ? 'PANDOC' : 'TYPST'} کو executable کی طرف اشارہ کریں`);
    throw new Error(`${cmd} ناکام ہوا:\n${err.stderr || err.stdout || err.message}`);
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
console.log(`${OUT} بنایا گیا: ${bookFiles.length} سیکشنز، ${entries} انداراجے، ${docFiles.length} ضمیمے، ${(statSync(OUT).size / 1048576).toFixed(1)} MB`);
