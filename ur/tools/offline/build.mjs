// index.html + README + book/*.md کو ایک self-contained HTML فائل میں پیک کرتا ہے: کھولنے کے لیے ڈبل کلک کریں، کوئی server نہیں، کوئی network نہیں۔
// استعمال: node tools/offline/build.mjs [آؤٹ پٹ پاتھ]   طے شدہ آؤٹ پٹ: dist/HowToLiveBetter.html
// متن کو window.__CORPUS__ میں inline کیا جاتا ہے، جسے index.html میں init() پہچانتا ہے اور اب
// network درخواستیں نہیں کرتا؛ سائٹ کے relative links کو آن لائن URL میں دوبارہ لکھا جاتا ہے، sidebar
// images کو data URIs میں تبدیل کیا جاتا ہے، اور باقی سب کچھ چھوڑ دیا جاتا ہے۔
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { ROOT, REPO, SITE, read, gitCommit, buildStamp } from '../lib/book.mjs';

const OUT = resolve(ROOT, process.argv[2] ?? 'dist/HowToLiveBetter.html');
const STAMP = buildStamp();
const COMMIT = gitCommit();

// ---------- متن ----------
const readme = read('README.md');
const files = [...new Set([...readme.matchAll(/\]\((book\/[^)]+\.md)\)/g)].map(m => m[1]))].sort();
if (!files.length) throw new Error('README کی ٹیبل آف کنٹینٹس میں کوئی book/ فائلیں نہیں ملیں؛ offline کاپی خالی ہو گی');
// لمبی پڑھائیاں (docs/*.md) بھی شامل ہونی چاہئیں: سرچ پیج انہیں لمبی پڑھائی کے
// modal میں جگہ پر رینڈر کرتا ہے، اور ان کے بغیر offline کاپی میں صرف ایک مردہ GitHub link ہوگا۔ فہرست
// README سے scrape کی جاتی ہے، وہی جگہ جو EPUB اور PDF builds استعمال کرتے ہیں۔
const docs = [...new Set([...readme.matchAll(/\]\((docs\/[^)#/]+\.md)\)/g)].map(m => m[1]))].sort();
const corpus = {
  readme,
  parts: Object.fromEntries(files.map(f => [f, read(f)])),
  docs: Object.fromEntries(docs.map(f => [f, read(f)])),
};
// </script script tag کو جلد بند کر دے گا؛ \/ ایک JS string میں صرف / ہے، مواد کو تبدیل کیے بغیر
const corpusJson = JSON.stringify(corpus).replace(/<\/script/gi, '<\\/script');

// ---------- صفحہ ----------
let html = read('index.html');
const must = (needle, label) => {
  if (!html.includes(needle)) throw new Error(`index.html میں ${label} نہیں مل سکا؛ offline-build اسکرپٹ کو اپنانا ہوگا: ${needle}`);
};

// analytics اسکرپٹ کو offline کاپی میں نہیں لے جانا چاہیے: ڈبل کلک کی گئی کاپی کوئی
// outbound درخواست نہیں کرنی چاہیے، اور ٹوٹے network پر صارف timeout کا انتظار کرے گا۔
const GA_START = '<!-- ga:start', GA_END = '<!-- ga:end -->';
must(GA_START, ' GA بلاک کا آغاز نشان');
must(GA_END, ' GA بلاک کا اختتام نشان');
html = html.slice(0, html.indexOf(GA_START)) + html.slice(html.indexOf(GA_END) + GA_END.length);
// صرف outbound analytics ڈومینز کے لیے چیک کریں: main اسکرپٹ میں track() میں typeof guard ہے اور
// gtag کے بغیر ٹھیک چلتی ہے، اس لیے یہ leftover شمار نہیں ہوتی۔
if (/googletagmanager|google-analytics/.test(html)) throw new Error('نشانیوں کے درمیان مواد ہٹانے کے بعد، ایک analytics ڈومین اب بھی موجود ہے؛ offline کاپی outbound درخواستیں کرے گی');

// Relative links مقامی طور پر کھولنے پر مردہ ہیں؛ انہیں آن لائن URL میں دوبارہ لکھیں
must('href="README.md"', ' README.md link');
must('href="book/"', ' book/ link');
html = html
  .replaceAll('href="README.md"', `href="${REPO}/blob/main/README.md"`)
  .replaceAll('href="book/"', `href="${REPO}/tree/main/book"`)
  .replaceAll('<a class="title" href="./"', `<a class="title" href="${SITE}"`);

// sidebar ad image اور reward-QR code کو data URIs میں تبدیل کیا جاتا ہے؛ ورنہ offline کاپی ٹوٹی images دکھاتی ہے
for (const [img, mime] of [['ads/mcyyy-side.webp', 'image/webp'], ['ads/wechat-reward.png', 'image/png']]) {
  must(`src="${img}"`, ` image ${img}`);
  const data = readFileSync(resolve(ROOT, img)).toString('base64');
  html = html.replace(`src="${img}"`, `src="data:${mime};base64,${data}"`);
}

// فوٹر نوٹ کرتا ہے کہ یہ offline کاپی کون سے ورژن کی ہے
const foot = '<div class="foot">';
must(foot, ' فوٹر');
const commitNote = COMMIT ? `, body-text commit ${COMMIT.slice(0, 7)}` : '';
html = html.replace(foot, `${foot}آف لائن کاپی، تیار شدہ وقت ${STAMP} (بیجنگ وقت)${commitNote}؛ متن اپ ڈیٹ ہوتا رہتا ہے؛ <a href="${SITE}">آن لائن ورژن</a> معتبر ہے۔<br>`);

// متن کو main اسکرپٹ کے چلنے سے پہلے ہونا چاہیے
const mainScript = '\n<script>\n/* ---------- 调试面板';
must(mainScript, ' main اسکرپٹ کا آغاز');
html = html.replace(mainScript, `\n<script>window.__CORPUS__=${corpusJson}</script>${mainScript}`);

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, html);
const kb = n => (n / 1024 | 0) + ' KB';
console.log(`${OUT} بنایا گیا: ${files.length} body فائلیں، ${docs.length} لمبی پڑھائیاں، ${kb(Buffer.byteLength(html))} (ان میں سے body متن ${kb(Buffer.byteLength(corpusJson))})`);
