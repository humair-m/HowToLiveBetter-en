// Statistics sync: run once after editing entries. Four steps in order:
// ① Recompute the book-wide statistics and write them back into README.md, index.html, and tools/og.html;
// ② Call check-refs.mjs to regenerate docs/引用对照.md;
// ③ Call check-plain.mjs to check the plain-language summaries; failures are warnings, not blocking;
// ④ Use headless Chrome to re-snapshot tools/og.html into og.png.
//
//   node tools/sync-stats.mjs                   # run all four
//   node tools/sync-stats.mjs --no-screenshot   # skip the screenshot
//   node tools/sync-stats.mjs --check           # only compare ① without writing; exit code 1 on stale numbers (for CI)
//
// Chrome is looked up at common install locations; if it is installed elsewhere, point the CHROME
// environment variable at the executable. og.html uses Microsoft YaHei, which is absent on Linux
// and falls back to another font, so the screenshot will differ from the Windows one; CI only runs
// --check without a screenshot for this reason.
//
// Ported from sync-stats.ps1 on 2026-09-29; the ps1 has been deleted: it only ran on Windows, so
// external PRs merged directly on the web could not pass through it, and stale numbers would not
// turn any check red.
// ① Only replaces the numbers themselves, leaving all surrounding text untouched.
// Number definitions: entries = count of ### headings in book/*.md; sections = file count of book/*.md;
// A/B/C = first letter of the evidence-grade line (lines with a "争议" (disputed) suffix still count);
// disputed = number of entries whose Note starts with "争议"; TODO = line count in the body containing
// "待核实" (to be verified) or "TODO"; links = total http(s) URLs in "- 来源：" and "- 备注：" lines;
// the three cost-effectiveness tiers follow the rules copied from index.html.
// Lines are split with /\r?\n/ for the same reason as in check-refs.mjs (see file header).
import { readFileSync, writeFileSync, readdirSync, existsSync, mkdtempSync, rmSync, statSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { spawnSync } from 'node:child_process';
import { tmpdir } from 'node:os';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const CHECK = process.argv.includes('--check');
const read = f => readFileSync(join(ROOT, f), 'utf8');

// Tier rules match the COST_W and e.ratio lines in index.html; if those two lines change, this
// script must follow, so a sanity check is done first.
const indexText = read('index.html');
const COST_W_LINE = "const COST_W = { money:{'0':0,'少':1,'多':2}, time:{'少':0,'中':1,'多':2}, will:{'否':0,'些':1,'是':2} };";
const RATIO_LINE = "e.ratio = e.level === '大' ? (e.cs === 0 ? '极高' : (e.cs <= 2 ? '高' : '一般'))";
if (!indexText.includes(COST_W_LINE)) throw new Error('The COST_W line in index.html has changed; please sync the cost weights in this script');
if (!indexText.includes(RATIO_LINE)) throw new Error('The e.ratio line in index.html has changed; please sync the tier rules in this script');

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
if (tagged !== entries) console.warn(`Warning: ${entries - tagged} entries are missing cost labels; the three cost-effectiveness tiers do not add up to the entry count`);
if (grade.A + grade.B + grade.C !== entries) console.warn('Warning: the count of evidence-grade lines does not match the entry count; check whether any entry is missing its evidence grade');

// Tier percentages use the largest-remainder method: round down first, then distribute the
// remaining percentage points by largest fractional part. Rounding each of the three numbers
// independently can yield 99 or 101 (this happened on 2026-09-21 when Section 33 was added); this
// method guarantees the total is exactly 100.
const ORDER = ['极高', '高', '一般'];
const pct = {}, rem = {};
for (const k of ORDER) {
  const exact = ratio[k] * 100 / entries;
  pct[k] = Math.floor(exact);
  rem[k] = exact - pct[k];
}
const short = 100 - ORDER.reduce((s, k) => s + pct[k], 0);
for (const k of [...ORDER].sort((a, b) => rem[b] - rem[a]).slice(0, Math.max(short, 0))) pct[k]++;

console.log(`Entries ${entries} | Sections ${sections} | A ${grade.A} B ${grade.B} C ${grade.C} | Disputed ${dispute} | TODO ${todo} | Links ${links}`);
console.log(`Cost-effectiveness  极高 ${ratio['极高']} (${pct['极高']}%)  高 ${ratio['高']} (${pct['高']}%)  一般 ${ratio['一般']} (${pct['一般']}%)`);
console.log('');

const EDITS = [
  ['README.md', 'front-page entry count', /(\d+) 条建议/g, `${entries} 条建议`],
  ['README.md', 'entry badge', /%E6%9D%A1%E7%9B%AE-(\d+)%20%E6%9D%A1/g, `%E6%9D%A1%E7%9B%AE-${entries}%20%E6%9D%A1`],
  ['README.md', 'evidence-grade badge', /A%20(\d+)%20%C2%B7%20B%20\d+%20%C2%B7%20C%20\d+/g, `A%20${grade.A}%20%C2%B7%20B%20${grade.B}%20%C2%B7%20C%20${grade.C}`],
  ['README.md', 'literature-link badge', /-(\d+)%20%E6%9D%A1%E9%93%BE%E6%8E%A5/g, `-${links}%20%E6%9D%A1%E9%93%BE%E6%8E%A5`],
  ['README.md', 'A-grade count in "how to read"', /大型试验的 (\d+) 条/g, `大型试验的 ${grade.A} 条`],
  ['README.md', '极高 count in "how to read"', /勾选性价比「极高」，得到 (\d+) 条/g, `勾选性价比「极高」，得到 ${ratio['极高']} 条`],
  ['README.md', 'evidence-grade paragraph', /全书 (\d+) 条中 A 级 \d+ 条、B 级 \d+ 条、C 级 \d+ 条，另有 \d+ 条标注了争议、\d+ 处/g,
    `全书 ${entries} 条中 A 级 ${grade.A} 条、B 级 ${grade.B} 条、C 级 ${grade.C} 条，另有 ${dispute} 条标注了争议、${todo} 处`],
  ['README.md', 'cost-effectiveness paragraph', /全书 (\d+) 条中性价比极高 \d+ 条（\d+%）、高 \d+ 条（\d+%）、一般 \d+ 条（\d+%）/g,
    `全书 ${entries} 条中性价比极高 ${ratio['极高']} 条（${pct['极高']}%）、高 ${ratio['高']} 条（${pct['高']}%）、一般 ${ratio['一般']} 条（${pct['一般']}%）`],
  ['README.md', 'body file count', /正文按节拆成 (\d+) 个文件/g, `正文按节拆成 ${sections} 个文件`],
  ['index.html', 'five descriptions', /(\d+) 条建议/g, `${entries} 条建议`],
  ['index.html', 'numberOfPages', /numberOfPages":(\d+)/g, `numberOfPages":${entries}`],
  ['index.html', 'header entry count', /\d+ 节 (\d+) 条/g, `${sections} 节 ${entries} 条`],
  ['index.html', 'footer file count', /下的 (\d+) 个文件/g, `下的 ${sections} 个文件`],
  ['tools/og.html', 'og entry count', /<b>(\d+)<\/b> 条建议/g, `<b>${entries}</b> 条建议`],
  ['tools/og.html', 'og A-grade count', /A 级证据 <b>(\d+)<\/b> 条/g, `A 级证据 <b>${grade.A}</b> 条`],
  ['tools/og.html', 'og link count', /<b>(\d+)<\/b> 条原始文献链接/g, `<b>${links}</b> 条原始文献链接`],
];

const texts = new Map();
const stale = [];
for (const [file, label, pattern, repl] of EDITS) {
  const text = texts.get(file) ?? read(file);
  const found = [...text.matchAll(pattern)];
  if (found.length === 0) throw new Error(`Could not find "${label}" in ${file}; pattern: ${pattern}`);
  const old = found[0][1];
  // Use a function as the replacement value so $ in the replacement string is not interpreted as a group reference
  const updated = text.replace(pattern, () => repl);
  texts.set(file, updated);
  if (updated === text) {
    console.log(`  ${file} ${label}: ${old} (unchanged)`);
    continue;
  }
  stale.push(`${file} ${label}`);
  console.log(`  ${file} ${label}: ${old} -> ${CHECK ? 'stale' : `updated (${found.length} places)`}`);
}

if (CHECK) {
  if (stale.length === 0) {
    console.log('\nStatistics check passed');
    process.exit(0);
  }
  console.log(`\n${stale.length} statistics are stale. Run "node tools/sync-stats.mjs" locally (it also regenerates og.png), then commit.`);
  process.exit(1);
}

for (const [file, text] of texts) if (text !== read(file)) writeFileSync(join(ROOT, file), text);

// ② Regenerate the cross-reference table: inserting or deleting entries shifts every following
// "Entry X" en masse, and after a shift the entry numbers usually still fall in a valid range
// (the six places in Section 7 on 2026-09-19 are exactly that case). Only by laying out
// "reference → target title" and checking it into the repo can the diff reveal them. Run before
// the screenshot; also runs under --no-screenshot.
const runTool = name => spawnSync(process.execPath, [join(ROOT, 'tools', name)], { stdio: 'inherit' }).status;
console.log('');
if (runTool('check-refs.mjs') !== 0) throw new Error('check-refs.mjs failed');
console.log('Before committing, glance at the diff of docs/引用对照.md: any line where the entry number is unchanged but the "Pointed-to entry" changed is a reference that was shifted.');

// ③ The plain-language summary check is non-blocking: the numbers are already synced, and failing
// here would make people think the stats were not updated. In CI it would still go red.
console.log('');
if (runTool('check-plain.mjs') !== 0) console.log('The non-conforming plain-language summaries listed above should be fixed before committing (rules are in the file header of tools/check-plain.mjs).');

if (process.argv.includes('--no-screenshot')) process.exit(0);

// ④ Snapshot og.png
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
if (!chrome) throw new Error('Chrome not found; set the CHROME environment variable to point at it, or pass --no-screenshot to skip the snapshot');

// Use a fresh user-data-dir every time: otherwise Chrome renders the cached old og.html and the
// snapshot still shows the old numbers. --screenshot requires an absolute path: a relative path
// makes Chrome silently write nothing while still returning 0.
const profile = mkdtempSync(join(tmpdir(), 'og-shot-'));
const target = join(ROOT, 'og.png');
const startedAt = Date.now();
// Chrome writes "xxx bytes written" type messages to stderr, not as errors; ignore them.
spawnSync(chrome, [
  '--headless', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1',
  '--window-size=1200,630', `--user-data-dir=${profile}`, `--screenshot=${target}`,
  pathToFileURL(join(ROOT, 'tools', 'og.html')).href,
], { stdio: 'ignore' });
rmSync(profile, { recursive: true, force: true });

// Self-check: the file was written by this run and is in the normal size range. Passing both
// checks means there is no need to open the image, saving one image read.
const png = statSync(target);
if (png.mtimeMs < startedAt - 1000) throw new Error('og.png was not written by this run; the screenshot failed');
if (png.size < 120 * 1024 || png.size > 400 * 1024) throw new Error(`og.png size is abnormal (${png.size} bytes; normal range is 120KB to 400KB). Open it to see whether the rendering broke.`);
console.log(`\nog.png regenerated: ${png.size} bytes; self-check passed. You only need to open the image to confirm if the layout of tools/og.html was changed.`);
