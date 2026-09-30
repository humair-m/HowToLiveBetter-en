// Packs index.html + README + book/*.md into a self-contained HTML file: double-click to open, no server, no network.
// Usage: node tools/offline/build.mjs [output path]   Default output: dist/HowToLiveBetter.html
// The body text is inlined into window.__CORPUS__, which the init() in index.html recognizes and no
// longer makes network requests for; in-site relative links are rewritten to the online URL, sidebar
// images are converted to data URIs, and everything else is left untouched.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { ROOT, REPO, SITE, read, gitCommit, buildStamp } from '../lib/book.mjs';

const OUT = resolve(ROOT, process.argv[2] ?? 'dist/HowToLiveBetter.html');
const STAMP = buildStamp();
const COMMIT = gitCommit();

// ---------- Body text ----------
const readme = read('README.md');
const files = [...new Set([...readme.matchAll(/\]\((book\/[^)]+\.md)\)/g)].map(m => m[1]))].sort();
if (!files.length) throw new Error('No book/ files found in the README table of contents; the offline copy would be empty');
// Long reads (docs/*.md) must also be included: the search page renders them in-place in the long-read
// modal, and without them the offline copy would just have a dead GitHub link. The list is scraped
// from the README, the same place the EPUB and PDF builds use.
const docs = [...new Set([...readme.matchAll(/\]\((docs\/[^)#/]+\.md)\)/g)].map(m => m[1]))].sort();
const corpus = {
  readme,
  parts: Object.fromEntries(files.map(f => [f, read(f)])),
  docs: Object.fromEntries(docs.map(f => [f, read(f)])),
};
// </script would close the script tag prematurely; \/ in a JS string is just /, leaving the content unchanged
const corpusJson = JSON.stringify(corpus).replace(/<\/script/gi, '<\\/script');

// ---------- Page ----------
let html = read('index.html');
const must = (needle, label) => {
  if (!html.includes(needle)) throw new Error(`Could not find ${label} in index.html; the offline-build script needs to follow: ${needle}`);
};

// The analytics script must not be carried into the offline copy: a double-clicked copy should not
// make any outbound request, and on a broken network the user would have to wait for timeouts.
const GA_START = '<!-- ga:start', GA_END = '<!-- ga:end -->';
must(GA_START, ' the start marker of the GA block');
must(GA_END, ' the end marker of the GA block');
html = html.slice(0, html.indexOf(GA_START)) + html.slice(html.indexOf(GA_END) + GA_END.length);
// Only check for outbound analytics domains: the track() in the main script has a typeof guard and
// runs fine without gtag, so it does not count as leftover.
if (/googletagmanager|google-analytics/.test(html)) throw new Error('After stripping the content between the markers, an analytics domain is still present; the offline copy would make outbound requests');

// Relative links are dead when opened locally; rewrite them to the online URL
must('href="README.md"', ' the README.md link');
must('href="book/"', ' the book/ link');
html = html
  .replaceAll('href="README.md"', `href="${REPO}/blob/main/README.md"`)
  .replaceAll('href="book/"', `href="${REPO}/tree/main/book"`)
  .replaceAll('<a class="title" href="./"', `<a class="title" href="${SITE}"`);

// The sidebar ad image and the reward-QR code are converted to data URIs; otherwise the offline copy shows broken images
for (const [img, mime] of [['ads/mcyyy-side.webp', 'image/webp'], ['ads/wechat-reward.png', 'image/png']]) {
  must(`src="${img}"`, ` image ${img}`);
  const data = readFileSync(resolve(ROOT, img)).toString('base64');
  html = html.replace(`src="${img}"`, `src="data:${mime};base64,${data}"`);
}

// Footer notes which version this offline copy is
const foot = '<div class="foot">';
must(foot, ' the footer');
const commitNote = COMMIT ? `, body-text commit ${COMMIT.slice(0, 7)}` : '';
html = html.replace(foot, `${foot}Offline copy, generated at ${STAMP} (Beijing time)${commitNote}; the body text continues to be updated; the <a href="${SITE}">online version</a> is authoritative.<br>`);

// The body text must be in place before the main script runs
const mainScript = '\n<script>\n/* ---------- 调试面板';
must(mainScript, ' the start of the main script');
html = html.replace(mainScript, `\n<script>window.__CORPUS__=${corpusJson}</script>${mainScript}`);

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, html);
const kb = n => (n / 1024 | 0) + ' KB';
console.log(`Generated ${OUT}: ${files.length} body files, ${docs.length} long reads, ${kb(Buffer.byteLength(html))} (body text ${kb(Buffer.byteLength(corpusJson))} of that)`);
