// "Plain-language summary" check: this line is the most prominent piece of text on the search-page
// card, and most readers only read it. Issue #42 (2026-09-28) complained about AI-flavored writing,
// citing a line in Section 1 Entry 33 that crammed in hospital count, case count, and grouping, and
// used phrases like "另一头" (the other side), "产出" (output), "干净的结局" (clean endpoint) that
// make the reader translate them. All of these are forbidden by CLAUDE.md, but without machine
// checking they crept back in over time.
//
//   node tools/check-plain.mjs          # list every non-conforming plain-language summary; exit code 1 if any (for CI)
//   node tools/check-plain.mjs --stat     # only count by rule
//   node tools/check-plain.mjs --numbers  # also run check ③ for manual review
//
// By default checks ①②④; check ③ requires --numbers. It has too many false positives and is not
// in CI: hotline numbers (120, 12356) and example amounts in legal/money entries ("borrow 1000 yuan")
// would be flagged as new numbers, but those are legitimate writing.
// Four checks:
// ① Length: at most 120 characters (spaces do not count).
// ② Research jargon: statistical abbreviations, study designs, sample sizes. Readers care about
//    direction and magnitude, not who did the study or how many were enrolled.
// ③ New numbers: every Arabic numeral in the plain-language summary must have appeared in the
//    same entry's title, Cost, or Benefit field. The plain-language summary only paraphrases the
//    Benefit field and may not add numbers. Chinese-character number forms like "四成多" (over four
//    tenths) and "四分之一" (one quarter) are not checked.
// ④ Abstract tone: metaphors and boilerplate that require the reader to translate them; the list
//    is in VAGUE. Only words that have actually caused problems are included; false negatives are
//    preferred over false positives — too many false positives and people stop reading.
// Lines are split with /\r?\n/ for the same reason as in check-refs.mjs (see file header).
import { readFileSync, readdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const STAT = process.argv.includes('--stat');
const NUMBERS = process.argv.includes('--numbers');
const MAX = 120;

const JARGON = [
  [/\b(HR|RR|OR|CI|RCT|OR值)\b/, 'Statistical abbreviation'],
  [/队列|荟萃|综述|随机|对照组|安慰剂组|双盲|样本/, 'Study design'],
  [/\d[\d,.]*\s*(例|名受试者|名参与者|家医院|项研究|篇研究|个国家)/, 'Sample size'],
  [/那组|两组|各组|组的人/, 'Grouping'],
];
const VAGUE = ['另一头', '产出', '干净的结局', '这条路没有', '说到底', '本质上', '换句话说'];

// Compare numbers by value, not by literal form: ".28" and "0.28", "11,523" and "1.15 万" are the same number.
function numbers(s) {
  return [...s.replace(/(\d),(\d{3})/g, '$1$2').matchAll(/(\d*\.?\d+)\s*(万)?/g)]
    .map(m => Number(m[1]) * (m[2] ? 10000 : 1));
}
// Whether the n in the plain-language summary is derived from the p in the Benefit field: rounding
// (45.6 → 46, 5801 → 5800), or converting a risk ratio to a reduction (0.72 → 28% lower, 0.53 → 47%
// lower). A difference within 5% counts as a match.
function derived(n, p) {
  const near = (a, b) => a === b || Math.abs(a - b) <= 0.05 * Math.max(Math.abs(a), Math.abs(b));
  return near(n, p) || near(n / 100, p) || (p < 1 && near(n / 100, 1 - p)) || (p > 1 && p < 100 && near(n, 100 - p));
}

const bad = [];
const count = { 长度: 0, 行话: 0, 新数字: 0, 抽象腔: 0 };
let total = 0;

const files = readdirSync(resolve(ROOT, 'book')).filter(f => /^\d\d-.*\.md$/.test(f)).sort();
for (const f of files) {
  const sec = Number(f.slice(0, 2));
  const lines = readFileSync(resolve(ROOT, 'book', f), 'utf8').split(/\r?\n/);
  let no = 0, title = '', fields = {};
  const flush = () => {
    const plain = fields['说人话'];
    if (!no || plain == null) return;
    total++;
    const where = `Section ${sec}, Entry ${no}`;
    const problems = [];
    const len = [...plain.replace(/\s/g, '')].length;
    if (len > MAX) { problems.push(`${len} characters, exceeds ${MAX}`); count.长度++; }
    const jar = JARGON.filter(([re]) => re.test(plain)).map(([re, name]) => `${name} 「${plain.match(re)[0]}」`);
    if (jar.length) { problems.push(...jar); count.行话++; }
    if (NUMBERS) {
      const pool = numbers([title, fields['成本'] ?? '', fields['收益'] ?? ''].join(' '));
      const fresh = [...new Set(numbers(plain))].filter(n => !pool.some(p => derived(n, p)));
      if (fresh.length) { problems.push(`Numbers not in the Benefit field: ${fresh.join('、')}`); count.新数字++; }
    }
    const vague = VAGUE.filter(w => plain.includes(w));
    if (vague.length) { problems.push(`Abstract phrasing 「${vague.join('」「')}」`); count.抽象腔++; }
    if (problems.length) bad.push(`${f}  ${where}: ${problems.join('; ')}`);
  };
  for (const line of lines) {
    const h = line.match(/^### (\d+)\. (.*)$/);
    if (h) { flush(); no = Number(h[1]); title = h[2]; fields = {}; continue; }
    const m = line.match(/^- (说人话|成本|收益)：(.*)$/);
    if (m && no) fields[m[1]] = m[2];
  }
  flush();
}

if (!STAT) for (const b of bad) console.log(b);
console.log(`\n${total} plain-language summaries in total, ${bad.length} not up to standard: ` +
  Object.entries(count).map(([k, v]) => `${k} ${v}`).join(', '));
if (bad.length && !STAT) process.exit(1);
