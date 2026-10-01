// README ڈھانچے کی parsing اور فائل فہرست: EPUB (tools/epub) اور PDF (tools/pdf) builds کے درمیان مشترک۔
// صرف README ڈھانچہ پہچانا جاتا ہے؛ کوئی فائل فہرست برقرار نہیں رکھی جاتی — ایک سیکشن یا لمبی
// پڑھائی شامل کرنا دونوں builds کے ذریعے خود کار طور پر pick ہو جاتا ہے۔
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

export const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
export const REPO = 'https://github.com/eternity4719/HowToLiveBetter';
export const SITE = 'https://eternity4719.github.io/HowToLiveBetter/';
export const TITLE = 'How To Live Better';
export const RELEASE = `${REPO}/releases/download/epub-latest`;

// ہمیشہ ہر build کو لائن endings LF کے طور پر دیں: Windows پر core.autocrlf=true کے ساتھ checkout
// CRLF ہوتا ہے، اور index.html میں '\n' پر مبنی سوئیاں تلاش کرنے والا offline-build اسکرپٹ کچھ نہیں
// پائے گا اور مقامی طور پر "main اسکرپٹ کا آغاز نہیں مل سکا" پر ناکام ہو جائے گا (CI Linux پر ہے اور
// کبھی اس سے نہیں گزرا)۔ Body parsing کو بھی \r علیحدہ سے نمٹنے کی ضرورت نہیں۔
export const read = p => readFileSync(resolve(ROOT, p), 'utf8').replace(/\r\n/g, '\n');
export const unique = arr => [...new Set(arr)];

export function gitCommit() {
  try {
    return execSync('git rev-parse HEAD', { cwd: ROOT, stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim();
  } catch {
    return process.env.GITHUB_SHA ?? '';
  }
}

// متن میں ایک دن میں کئی بار نظر ثانی ہو سکتی ہے، اس لیے صرف تاریخ یہ نہیں بتا سکتی کہ یہ کون سی
// ورژن ہے؛ درستگی منٹ تک جاتی ہے۔
// CI UTC پر چلتا ہے؛ ڈاؤن لوڈ کرنے والے اپنی مقامی تاریخوں کے ساتھ موازنہ کرنے پر الجھن سے بچنے کے
// لیے یکساں طور پر بیجنگ وقت میں ڈسپلے کریں۔
export function buildStamp() {
  return new Intl.DateTimeFormat('sv-SE', { timeZone: 'Asia/Shanghai', dateStyle: 'short', timeStyle: 'short' }).format(new Date());
}

export function stripBackLink(md) {
  return md.replace(/^\[← 回总目录\]\([^)]*\)\s*\n/, '');
}

// README میں ایک ہیڈنگ سے اگلی ہیڈنگ تک کا حصہ
export function readBook() {
  const readme = read('README.md');
  const lines = readme.split('\n');
  const between = (from, to) => {
    const a = lines.findIndex(l => l.startsWith(from));
    const b = lines.findIndex((l, i) => i > a && l.startsWith(to));
    if (a < 0 || b < 0) throw new Error(`README میں "${from}" سے "${to}" تک کا حصہ نہیں مل سکا`);
    return lines.slice(a, b).join('\n');
  };
  const description = between('# 高性价比人生指南', '[![')
    .split('\n').slice(1).map(l => l.replace(/<[^>]+>/g, '').trim()).filter(Boolean).join('');
  const frontMd = between('## 这本书想回答的问题', '## 目录');
  const contentsMd = between('## 目录', '## 正文')
    .split('\n\n').filter(p => !p.includes('index.html')).join('\n\n');
  const bookFiles = unique([...contentsMd.matchAll(/\]\((book\/[^)#]+\.md)\)/g)].map(m => m[1]));
  const docFiles = unique([...readme.matchAll(/\]\((docs\/[^)#/]+\.md)\)/g)].map(m => m[1]));
  if (bookFiles.length === 0) throw new Error('README کی ٹیبل آف کنٹینٹس میں کوئی book/ فائلیں نہیں ملیں');
  return { readme, description, frontMd, contentsMd, bookFiles, docFiles };
}
