// "آسان الفاظ میں خلاصہ" چیک: یہ سطر سرچ پیج کے کارڈ پر سب سے نمایاں متن ہے،
// اور اکثر قاری صرف یہی پڑھتا ہے۔ اشاریہ #42 (2026-09-28) نے AI انداز کی تحریر پر شکایت کی،
// جس میں سیکشن 1 انداراجہ 33 کی ایک سطر کا حوالہ تھا جس میں ہسپتالوں کی گنتی، کیسز کی گنتی، اور گروہ بندی ٹھونسی گئی تھی، اور
// "另一头" (دوسری طرف)، "产出" (آؤٹ پٹ)، "干净的结局" (صاف نتیجہ) جیسے فقرے استعمال ہوئے جو
// قاری کو ان کا ترجمہ کرنے پر مجبور کرتے ہیں۔ یہ سب CLAUDE.md کے ذریعے ممنوع ہیں، مگر مشین چیک کے بغیر
// یہ وقت کے ساتھ واپس آ گئے۔
//
//   node tools/check-plain.mjs          # ہر غیر مطابق آسان خلاصہ فہرست کریں؛ اگر کوئی ہو تو خروج کوڈ 1 (CI کے لیے)
//   node tools/check-plain.mjs --stat     # صرف اصول کے لحاظ سے گنتی کریں
//   node tools/check-plain.mjs --numbers  # انسانی جائزے کے لیے چیک ③ بھی چلائیں
//
// طے شدہ طور پر ①②④ چیک کرتا ہے؛ چیک ③ کو --numbers درکار ہے۔ اس میں بہت زیادہ غلط مثبتیات ہیں اور یہ
// CI میں نہیں ہے: ہاٹ لائن نمبر (120، 12356) اور قانونی/پیسہ انداراجوں میں مثال کی رقم ("1000 یوآن قرض لیں")
// نئے نمبروں کے طور پر نشان زد ہوں گے، مگر یہ جائز تحریر ہے۔
// چار چیکس:
// ① لمبائی: زیادہ سے زیادہ 120 کریکٹرز (اسپیس شمار نہیں ہوتی)۔
// ② ریسرچ اصطلاحات: شماریاتی مخففات، مطالعہ کے ڈیزائن، نمونے کا حجم۔ قاری رجحان اور شدت کا خیال رکھتا ہے، نہ کہ
//    اس بات پر کہ تحقیق کس نے کی یا کتنے لوگ شامل ہوئے۔
// ③ نئے نمبر: آسان خلاصے میں ہر عربی ہندسے کا ہونا اسی انداراجے کے عنوان، لاگت یا فائدہ فیلڈ میں ظاہر ہوا ہونا چاہیے۔ آسان خلاصہ
//    صرف فائدہ فیلڈ کو paraphrase کرتا ہے اور نمبر شامل نہیں کر سکتا۔ چینی کریکٹر نمبر فارم جیسے "四成多" (چار دہائی سے زیادہ)
//    اور "四分之一" (ایک چوتھائی) چیک نہیں ہوتے۔
// ④ مبہم لہجہ: استعارے اور کلیشیے جنہیں قاری کے ترجمہ کرنے کی ضرورت ہے؛ فہرست
//    VAGUE میں ہے۔ صرف وہ الفاظ شامل ہیں جن سے واقعی مسائل ہوئے ہیں؛ غلط منفیوں کو غلط مثبتوں پر ترجیح دی گئی ہے —
//    بہت زیادہ غلط مثبتیات ہوں تو لوگ پڑھنا چھوڑ دیتے ہیں۔
// سطروں کو /\r?\n/ سے الگ کیا جاتا ہے check-refs.mjs کی وجہ سے جیسے (فائل ہیڈر دیکھیں)۔
import { readFileSync, readdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const STAT = process.argv.includes('--stat');
const NUMBERS = process.argv.includes('--numbers');
const MAX = 120;

const JARGON = [
  [/\b(HR|RR|OR|CI|RCT|OR值)\b/, 'شماریاتی مخفف'],
  [/队列|荟萃|综述|随机|对照组|安慰剂组|双盲|样本/, 'مطالعہ کا ڈیزائن'],
  [/\d[\d,.]*\s*(例|名受试者|名参与者|家医院|项研究|篇研究|个国家)/, 'نمونے کا حجم'],
  [/那组|两组|各组|组的人/, 'گروہ بندی'],
];
const VAGUE = ['另一头', '产出', '干净的结局', '这条路没有', '说到底', '本质上', '换句话说'];

// نمبروں کا موازنہ قدر کے لحاظ سے کریں، لفظی شکل سے نہیں: ".28" اور "0.28"، "11,523" اور "1.15 万" ایک ہی نمبر ہیں۔
function numbers(s) {
  return [...s.replace(/(\d),(\d{3})/g, '$1$2').matchAll(/(\d*\.?\d+)\s*(万)?/g)]
    .map(m => Number(m[1]) * (m[2] ? 10000 : 1));
}
// کیا آسان خلاصے میں n، فائدہ فیلڈ میں p سے اخذ کیا گیا ہے: rounding
// (45.6 → 46، 5801 → 5800)، یا risk ratio کو کمی میں تبدیل کرنا (0.72 → 28% کم، 0.53 → 47%
// کم)۔ 5% کے اندر فرق میچ شمار ہوتا ہے۔
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
    const where = `سیکشن ${sec}، انداراجہ ${no}`;
    const problems = [];
    const len = [...plain.replace(/\s/g, '')].length;
    if (len > MAX) { problems.push(`${len} کریکٹرز، ${MAX} سے تجاوز کرتا ہے`); count.长度++; }
    const jar = JARGON.filter(([re]) => re.test(plain)).map(([re, name]) => `${name} 「${plain.match(re)[0]}」`);
    if (jar.length) { problems.push(...jar); count.行话++; }
    if (NUMBERS) {
      const pool = numbers([title, fields['成本'] ?? '', fields['收益'] ?? ''].join(' '));
      const fresh = [...new Set(numbers(plain))].filter(n => !pool.some(p => derived(n, p)));
      if (fresh.length) { problems.push(`فائدہ فیلڈ میں نہ ہونے والے نمبر: ${fresh.join('、')}`); count.新数字++; }
    }
    const vague = VAGUE.filter(w => plain.includes(w));
    if (vague.length) { problems.push(`مبہم عبارت 「${vague.join('」「')}」`); count.抽象腔++; }
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
console.log(`\nکل ${total} آسان خلاصے، ${bad.length} معیار کے مطابق نہیں: ` +
  Object.entries(count).map(([k, v]) => `${k} ${v}`).join('، '));
if (bad.length && !STAT) process.exit(1);
