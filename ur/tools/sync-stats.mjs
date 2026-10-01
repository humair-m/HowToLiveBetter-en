// شماریات کا سنک: انداراجوں کو ایڈٹ کرنے کے بعد ایک بار چلائیں۔ چار مراحل ترتیب وار:
// ① کتاب کی سطح کی شماریات دوبارہ کمpute کر کے README.md، index.html، اور tools/og.html میں لکھیں؛
// ② docs/引用对照.md دوبارہ بنانے کے لیے check-refs.mjs کو کال کریں؛
// ③ آسان خلاصوں کی جانچ کے لیے check-plain.mjs کو کال کریں؛ ناکامی وارننگ ہے، بلاک نہیں کرتی؛
// ④ tools/og.html کو headless Chrome میں دوبارہ اسکرین شاٹ کر کے og.png بنائیں۔
//
//   node tools/sync-stats.mjs                   # چاروں چلائیں
//   node tools/sync-stats.mjs --no-screenshot   # اسکرین شاٹ چھوڑیں
//   node tools/sync-stats.mjs --check           # صرف ① کا موازنہ کریں بغیر لکھے؛ پرانی شماریات پر خروج کوڈ 1 (CI کے لیے)
//
// Chrome عام انسٹالیشن جگہوں پر تلاش کیا جاتا ہے؛ اگر یہ کسی اور جگہ انسٹال ہے، تو CHROME
// ماحولیاتی متغیر کو executable کی طرف اشارہ کریں۔ og.html Microsoft YaHei استعمال کرتا ہے، جو Linux پر موجود نہیں ہے
// اور دوسرے فونٹ پر واپس چلا جاتا ہے، اس لیے اسکرین شاٹ Windows والے سے مختلف ہوگی؛ CI اسی وجہ سے صرف
// --check چلاتا ہے بغیر اسکرین شاٹ کے۔
//
// 2026-09-29 کو sync-stats.ps1 سے پورٹ کیا گیا؛ ps1 حذف کر دیا گیا: یہ صرف Windows پر چلتا تھا، اس لیے
// ویب پر براہ راست ضم کیے گئے بیرونی PRs اس سے نہیں گزر سکتے تھے، اور پرانی شماریات کسی بھی چیک کو
// سرخ نہیں کرتی تھی۔
// ① صرف نمبرز کو خود بدلتا ہے، ارد گرد کا تمام متن چھوڑ دیتا ہے۔
// نمبر کی تعریفیں: entries = book/*.md میں ### ہیڈنگز کی گنتی؛ sections = book/*.md کی فائل گنتی؛
// A/B/C = ثبوت کے درجے والی سطر کا پہلا حرف (iffin "争议" (متنازعہ) suffix والی سطریں بھی شمار ہوتی ہیں)؛
// disputed = ان انداراجوں کی تعداد جن کا نوٹ "争议" سے شروع ہوتا ہے؛ TODO = متن میں ان سطروں کی گنتی جن میں
// "待核实" (تصدیق کیا جانا ہے) یا "TODO" ہے؛ links = "- 来源：" اور "- 备注：" سطروں میں کل http(s) URLs؛
// تین لاگت موثریت درجے index.html سے نقل کردہ اصولوں کی پیروی کرتے ہیں۔
// سطروں کو /\r?\n/ سے الگ کیا جاتا ہے check-refs.mjs کی وجہ سے جیسے (فائل ہیڈر دیکھیں)۔
import { readFileSync, writeFileSync, readdirSync, existsSync, mkdtempSync, rmSync, statSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { spawnSync } from 'node:child_process';
import { tmpdir } from 'node:os';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const CHECK = process.argv.includes('--check');
const read = f => readFileSync(join(ROOT, f), 'utf8');

// درجے کے اصول index.html میں COST_W اور e.ratio سطروں سے ملتے ہیں؛ اگر یہ دو سطریں بدلیں، تو یہ
// اسکرپٹ کو بھی اپنانا ہوگا، اس لیے پہلے ایک sanity چیک کیا جاتا ہے۔
const indexText = read('index.html');
const COST_W_LINE = "const COST_W = { money:{'0':0,'少':1,'多':2}, time:{'少':0,'中':1,'多':2}, will:{'否':0,'些':1,'是':2} };";
const RATIO_LINE = "e.ratio = e.level === '大' ? (e.cs === 0 ? '极高' : (e.cs <= 2 ? '高' : '一般'))";
if (!indexText.includes(COST_W_LINE)) throw new Error('index.html میں COST_W سطر بدل گئی ہے؛ براہ کرم اس اسکرپٹ میں لاگت وزنوں کا سنک کریں');
if (!indexText.includes(RATIO_LINE)) throw new Error('index.html میں e.ratio سطر بدل گئی ہے؛ براہ کرم اس اسکرپٹ میں درجے کے اصولوں کا سنک کریں');

const W = {
  money: { '0': 0, '少': 1, '多': 2 },
  time: { '少': 0, '中': 1, '多': 2 },
  will: { '否': 0, '些': 1, '是': 2 },
};

function ratioOf(cost, level) {
  if (level === '大') return cost === 0 ? '极高' : cost <= 2 ? '高' : '一般';
  return level === '中' && cost === 0 ? '高' : '一般';
}

const bookFiles = readdirSync(join(ROOT, 'book')).filter(f => f.endsWith('.md')).sort();
const sections = bookFiles.length;
let entries = 0, dispute = 0, todo = 0, links = 0;
const grade = { A: 0, B: 0, C: 0 };
const ratio = { '极高': 0, '高': 0, '一般': 0 };

for (const f of bookFiles) {
  for (const line of read(join('book', f)).split(/\r?\n/)) {
    if (line.startsWith('### ')) entries++;
    const g = line.match(/^- 证据等级：([ABC])/);
    if (g) grade[g[1]]++;
    if (line.startsWith('- 备注：争议')) dispute++;
    if (/待核实|TODO/.test(line)) todo++;
    if (/^- (来源|备注)：/.test(line)) links += (line.match(/https?:\/\//g) ?? []).length;
    const t = line.match(/<!--\s*成本标签:\s*钱=(\S+)\s+时间=(\S+)\s+毅力=(\S+)\s+收益=(\S+)\s+口径=/);
    if (t) ratio[ratioOf(W.money[t[1]] + W.time[t[2]] + W.will[t[3]], t[4])]++;
  }
}

const tagged = ratio['极高'] + ratio['高'] + ratio['一般'];
if (tagged !== entries) console.warn(`وارننگ: ${entries - tagged} انداراجوں کے پاس لاگت لیبلز نہیں ہیں؛ تین لاگت موثریت درجے انداراجہ گنتی کے برابر نہیں ہوتے`);
if (grade.A + grade.B + grade.C !== entries) console.warn('وارننگ: ثبوت درجے والی سطروں کی گنتی انداراجہ گنتی سے مطابقت نہیں رکھتی؛ چیک کریں کہ کیا کسی انداراجے میں اس کا ثبوت درجہ غائب ہے');

// درجے کی فیصدیں largest-remainder method استعمال کرتی ہیں: پہلے نیچے round کریں، پھر باقی
// فیصد پوائنٹس کو سب سے بڑے fractional part کے لحاظ سے تقسیم کریں۔ تینوں نمبروں کو آزادانہ طور پر round کرنا
// 99 یا 101 دے سکتا ہے (یہ 2026-09-21 کو ہوا جب سیکشن 33 شامل کیا گیا)؛ یہ
// طریقہ یقینی بناتا ہے کہ کل بالکل 100 ہے۔
const ORDER = ['极高', '高', '一般'];
const pct = {}, rem = {};
for (const k of ORDER) {
  const exact = ratio[k] * 100 / entries;
  pct[k] = Math.floor(exact);
  rem[k] = exact - pct[k];
}
const short = 100 - ORDER.reduce((s, k) => s + pct[k], 0);
for (const k of [...ORDER].sort((a, b) => rem[b] - rem[a]).slice(0, Math.max(short, 0))) pct[k]++;

console.log(`انداراجے ${entries} | سیکشنز ${sections} | A ${grade.A} B ${grade.B} C ${grade.C} | متنازعہ ${dispute} | TODO ${todo} | لنکس ${links}`);
console.log(`لاگت موثریت  极高 ${ratio['极高']} (${pct['极高']}%)  高 ${ratio['高']} (${pct['高']}%)  一般 ${ratio['一般']} (${pct['一般']}%)`);
console.log('');

const EDITS = [
  ['README.md', 'فرنٹ پیج انداراجہ گنتی', /(\d+) 条建议/g, `${entries} 条建议`],
  ['README.md', 'انداراجہ بیج', /%E6%9D%A1%E7%9B%AE-(\d+)%20%E6%9D%A1/g, `%E6%9D%A1%E7%9B%AE-${entries}%20%E6%9D%A1`],
  ['README.md', 'ثبوت درجہ بیج', /A%20(\d+)%20%C2%B7%20B%20\d+%20%C2%B7%20C%20\d+/g, `A%20${grade.A}%20%C2%B7%20B%20${grade.B}%20%C2%B7%20C%20${grade.C}`],
  ['README.md', 'ادبی لنک بیج', /-(\d+)%20%E6%9D%A1%E9%93%BE%E6%8E%A5/g, `-${links}%20%E6%9D%A1%E9%93%BE%E6%8E%A5`],
  ['README.md', '"ک_fwd پڑھیں" میں A درجہ گنتی', /大型试验的 (\d+) 条/g, `大型试验的 ${grade.A} 条`],
  ['README.md', '"ک_fwd پڑھیں" میں 极高 گنتی', /勾选性价比「极高」，得到 (\d+) 条/g, `勾选性价比「极高」，得到 ${ratio['极高']} 条`],
  ['README.md', 'ثبوت درجہ پیراگراف', /全书 (\d+) 条中 A 级 \d+ 条、B 级 \d+ 条、C 级 \d+ 条，另有 \d+ 条标注了争议、\d+ 处/g,
    `全书 ${entries} 条中 A 级 ${grade.A} 条、B 级 ${grade.B} 条、C 级 ${grade.C} 条，另有 ${dispute} 条标注了争议、${todo} 处`],
  ['README.md', 'لاگت موثریت پیراگراف', /全书 (\d+) 条中性价比极高 \d+ 条（\d+%）、高 \d+ 条（\d+%）、一般 \d+ 条（\d+%）/g,
    `全书 ${entries} 条中性价比极高 ${ratio['极高']} 条（${pct['极高']}%）、高 ${ratio['高']} 条（${pct['高']}%）、一般 ${ratio['一般']} 条（${pct['一般']}%）`],
  ['README.md', 'متن فائل گنتی', /正文按节拆成 (\d+) 个文件/g, `正文按节拆成 ${sections} 个文件`],
  ['index.html', 'پانچ تفصیل', /(\d+) 条建议/g, `${entries} 条建议`],
  ['index.html', 'numberOfPages', /numberOfPages":(\d+)/g, `numberOfPages":${entries}`],
  ['index.html', 'ہیڈر انداراجہ گنتی', /\d+ 节 (\d+) 条/g, `${sections} 节 ${entries} 条`],
  ['index.html', 'فوٹر فائل گنتی', /下的 (\d+) 个文件/g, `下的 ${sections} 个文件`],
  ['tools/og.html', 'og انداراجہ گنتی', /<b>(\d+)<\/b> 条建议/g, `<b>${entries}</b> 条建议`],
  ['tools/og.html', 'og A درجہ گنتی', /A 级证据 <b>(\d+)<\/b> 条/g, `A 级证据 <b>${grade.A}</b> 条`],
  ['tools/og.html', 'og لنک گنتی', /<b>(\d+)<\/b> 条原始文献链接/g, `<b>${links}</b> 条原始文献链接`],
];

const texts = new Map();
const stale = [];
for (const [file, label, pattern, repl] of EDITS) {
  const text = texts.get(file) ?? read(file);
  const found = [...text.matchAll(pattern)];
  if (found.length === 0) throw new Error(`${file} میں "${label}" نہیں مل سکا؛ پیٹرن: ${pattern}`);
  const old = found[0][1];
  // تبدیلی کی قدر کے طور پر فنکشن استعمال کریں تاکہ تبدیل کی سٹرنگ میں $ کو group reference کے طور پر سمجھا نہ جائے
  const updated = text.replace(pattern, () => repl);
  texts.set(file, updated);
  if (updated === text) {
    console.log(`  ${file} ${label}: ${old} (تبدیلی نہیں)`);
    continue;
  }
  stale.push(`${file} ${label}`);
  console.log(`  ${file} ${label}: ${old} -> ${CHECK ? 'پرانا' : `اپ ڈیٹ (${found.length} جگہیں)`}`);
}

if (CHECK) {
  if (stale.length === 0) {
    console.log('\nشماریات چیک پاس ہو گیا');
    process.exit(0);
  }
  console.log(`\n${stale.length} شماریات پرانی ہیں۔ مقامی طور پر "node tools/sync-stats.mjs" چلائیں (یہ og.png بھی دوبارہ بناتا ہے)، پھر commit کریں۔`);
  process.exit(1);
}

for (const [file, text] of texts) if (text !== read(file)) writeFileSync(join(ROOT, file), text);

// ② کراس ریفرنس ٹیبل دوبارہ بنائیں: انداراجے داخل کرنے یا حذف کرنے سے ہر اگلا
// "انداراجہ X" اجتماعی طور پر بدل جاتا ہے، اور تبدیلی کے بعد انداراجہ نمبر عموماً اب بھی درست حد کے اندر رہتے ہیں
// (2026-09-19 کو سیکشن 7 کی چھ جگہیں بالکل وہی کیس ہیں)۔ صرف
// "حوالہ → ہدف عنوان" بچھا کر اور اسے repo میں چیک اِن کر کے ہی diff انہیں ظاہر کر سکتا ہے۔ اسکرین شاٹ سے پہلے چلائیں؛
// --no-screenshot کے تحت بھی چلتی ہے۔
const runTool = name => spawnSync(process.execPath, [join(ROOT, 'tools', name)], { stdio: 'inherit' }).status;
console.log('');
if (runTool('check-refs.mjs') !== 0) throw new Error('check-refs.mjs ناکام ہوا');
console.log('commit کرنے سے پہلے، docs/引用对照.md کے diff پر ایک نظر ڈالیں: کوئی بھی سطر جس میں انداراجہ نمبر وہی ہو مگر "جس انداراجے کی طرف اشارہ ہے" بدل گیا ہو، وہ حوالہ ہے جو بدل گیا تھا۔');

// ③ آسان خلاصہ چیک non-blocking ہے: نمبرز پہلے ہی سنک ہو چکے ہیں، اور یہاں ناکام ہونا
// لوگوں کو یہ سمجھنے پر مجبور کرے گا کہ شماریات اپ ڈیٹ نہیں ہوئیں۔ CI میں یہ اب بھی سرخ ہو جائے گا۔
console.log('');
if (runTool('check-plain.mjs') !== 0) console.log('اوپر درج غیر مطابق آسان خلاصے commit کرنے سے پہلے ٹھک کیے جانے چاہئیں (اصول tools/check-plain.mjs کے فائل ہیڈر میں ہیں)۔');

if (process.argv.includes('--no-screenshot')) process.exit(0);

// ④ og.png اسکرین شاٹ
const CHROME_PATHS = [
  process.env.CHROME,
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/google-chrome-stable',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
];
const chrome = CHROME_PATHS.find(p => p && existsSync(p));
if (!chrome) throw new Error('Chrome نہیں ملا؛ CHROME ماحولیاتی متغیر کو اس کی طرف اشارہ کرنے کے لیے سیٹ کریں، یا اسکرین شاٹ چھوڑنے کے لیے --no-screenshot پاس کریں');

// ہر بار ایک نیا user-data-dir استعمال کریں: ورنہ Chrome cached پرانا og.html رینڈر کرتا ہے اور
// اسکرین شاٹ اب بھی پرانے نمبر دکھاتا ہے۔ --screenshot کو absolute path درکار ہے: relative path
// Chrome کو خاموشی سے کچھ نہیں لکھنے دیتا جبکہ وہ اب بھی 0 لوٹاتا ہے۔
const profile = mkdtempSync(join(tmpdir(), 'og-shot-'));
const target = join(ROOT, 'og.png');
const startedAt = Date.now();
// Chrome "xxx bytes written" جیسی پیغامات stderr پر لکھتا ہے، errors کے طور پر نہیں؛ انہیں نظر انداز کریں۔
spawnSync(chrome, [
  '--headless', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1',
  '--window-size=1200,630', `--user-data-dir=${profile}`, `--screenshot=${target}`,
  pathToFileURL(join(ROOT, 'tools', 'og.html')).href,
], { stdio: 'ignore' });
rmSync(profile, { recursive: true, force: true });

// خود چیک: فائل اس رن کے ذریعے لکھی گئی ہے اور normal سائز کی حد میں ہے۔ دونوں
// چیکس پاس ہونے کا مطلب ہے کہ image کھولنے کی ضرورت نہیں، ایک image read بچ جاتی ہے۔
const png = statSync(target);
if (png.mtimeMs < startedAt - 1000) throw new Error('og.png اس رن کے ذریعے نہیں لکھا گیا؛ اسکرین شاٹ ناکام ہو گئی');
if (png.size < 120 * 1024 || png.size > 400 * 1024) throw new Error(`og.png کا سائز غیر معمولی ہے (${png.size} bytes؛ normal حد 120KB سے 400KB ہے)۔ image کھول کر دیکھیں کہ آیا رینڈرنگ ٹوٹ گئی۔`);
console.log(`\nog.png دوبارہ بنایا گیا: ${png.size} bytes؛ خود چیک پاس ہو گیا۔ آپ کو صرف image اس صورت میں کھولنے کی ضرورت ہے اگر tools/og.html کا layout بدلا گیا ہو۔`);
