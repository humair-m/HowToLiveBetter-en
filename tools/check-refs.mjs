// Cross-reference table: resolves every "Entry X" reference in the body text to the entry title
// it actually points to, and writes the result to docs/引用对照.md. That file is checked into
// git, so when inserting or deleting entries shifts what a reference points to, the git diff
// shows it directly — if the entry number is unchanged but the title changed, that's a misalignment.
//
//   node tools/check-refs.mjs            # Regenerate the table (sync-stats.mjs calls this automatically)
//   node tools/check-refs.mjs --check    # Validate only, do not write the file; exit code 1 on broken references (for CI)
//   node tools/check-refs.mjs --suspect  # Also list references whose wording does not match the target title; many false positives, used for historical cleanup
//
// Why this is needed: entry numbers are position-dependent, and references in the body text only
// record position, not content. On 2026-09-19, six misalignments were found in Section 7
// (medical assistance pointing to dibao, relief-station entry pointing to the wrong entry), all
// within the valid entry-number range, so the out-of-range check caught none of them.
// Note: always split lines with /\r?\n/, never '\n'. Files under book/ have inconsistent line
// endings (mix of CRLF and LF), and the JS regex . does not match \r (CR also counts as a line
// terminator in JS, unlike in Python and Perl). Leaving \r in means /^### (\d+)\. (.*)$/ would
// match nothing on a CRLF file.
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { resolve, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const CHECK_ONLY = process.argv.includes('--check');

// Bare references inside a section ("see Entry 8") are only looked for in these fields: in the
// Source field, "Entry N" almost always refers to a statute article, so including it would be all noise.
const FIELDS = /^- (说人话|收益|备注|成本)：/;
// Cross-section references with a section number ("see Section 11, Entry 16") do not collide with
// statute articles, so the Source field is also scanned here.
// In book/26 entry 103, "log retention see Section 11, Entry 16" is written in the Source field
// and would have been missed without this.
const CROSS_FIELDS = /^- (说人话|收益|备注|成本|来源)：/;

const files = readdirSync(resolve(ROOT, 'book')).filter(f => /^\d\d-.*\.md$/.test(f)).sort();
// Long-read articles under docs/ are also scanned. Like the section-opening introductions, they
// were long outside the scan scope: when entry numbers got shifted, --check still reported pass,
// and the cross-reference table diff could not surface these references either. On 2026-09-21
// audit, the three long reads contained 23 "Section X, Entry Y" references, none of which had
// ever been checked.
// Only take .md files directly under docs/. The subdirectory docs/核实记录/ is excluded: those
// files record the verification process at a point in time, and the entry numbers in them are
// historical state and should not follow the body text. The cross-reference table itself is also excluded.
const docs = readdirSync(resolve(ROOT, 'docs')).filter(f => f.endsWith('.md') && f !== '引用对照.md').sort();

// First read the entry titles of each section: sections[section number] = { file, titles: { entry number: title } }
const sections = new Map();
for (const f of files) {
  const num = Number(f.slice(0, 2));
  const titles = new Map();
  for (const line of readFileSync(resolve(ROOT, 'book', f), 'utf8').split(/\r?\n/)) {
    const m = /^### (\d+)\. (.*)$/.exec(line);
    if (m) titles.set(Number(m[1]), m[2].trim());
  }
  sections.set(num, { file: f, titles });
}

// A single reference may be written as "Entries 3, 10, 11", split into multiple entry numbers.
// Range notation is also recognized: "Entries 11 to 14" / "Entries 5 to 10". Such phrasing
// previously failed to match at all and was effectively unscanned; the book has 5 such places.
const RANGE = /^\s*(\d+)\s*(?:到|至)\s*第?\s*(\d+)\s*$/;
// Returns [entry number, isFromRange]. Range means a contiguous block of entries (e.g., "the
// anger-vent entries", "the platform-obligation entries"), where each entry in the block cannot
// be assigned its own anchor, so range-expanded entry numbers skip anchor verification — they
// still go into the table, and shifts are caught by title changes in the diff.
const nums = s => {
  const out = [];
  for (const part of s.split(/[、,]/)) {
    const r = RANGE.exec(part);
    if (r) {
      const [a, b] = [Number(r[1]), Number(r[2])];
      if (b >= a && b - a <= 30) for (let i = a; i <= b; i++) out.push([i, true]);
      continue;
    }
    const n = Number(part.trim());
    if (Number.isFinite(n)) out.push([n, false]);
  }
  return out;
};
// Pattern for the entry-number segment: "3", "3,10", "11 to 14", "5 to 10"
const SPEC = '[\\d、,\\s]+?(?:(?:到|至)\\s*第?\\s*\\d+)?';

const out = [];
const problems = [];
const suspects = [];
const weak = [];
let total = 0;

// Scan units: one per section under book/, one per long read under docs/.
const targets = [
  ...files.map(f => ({ f, dir: 'book', isDoc: false })),
  ...docs.map(f => ({ f, dir: 'docs', isDoc: true })),
];

for (const { f, dir, isDoc } of targets) {
  const num = isDoc ? 0 : Number(f.slice(0, 2));
  const self = isDoc ? null : sections.get(num);
  const lines = readFileSync(resolve(ROOT, dir, f), 'utf8').split(/\r?\n/);
  const rows = [];
  // cur is the entry number of the current entry; 0 means we have not entered an entry yet
  // (book section-opening introduction, or any position in docs).
  // unit is the name shown in the "Source" column: entries are labeled "Entry N", section
  // openings are labeled "节首" (section opener), long reads use the most recent subheading.
  let cur = 0;
  let unit = isDoc ? '开头' : '节首';

  // The sentence before a reference often states what it points to ("medical assistance (see
  // Entry 11)"); the entire clause is included so a human reviewing the table can judge whether
  // the reference is correct without flipping back to the body text.
  // Cut to the most recent punctuation mark rather than a fixed character count — a fixed 14
  // characters once made several correct references look suspicious ("一氧化碳见第 18 条，烧烫伤
  // 见第 13 条" was truncated to "氧化碳" facing "烫伤").
  const ctxOf = (line, idx) => {
    const before = line.slice(0, idx);
    let start = -1;
    for (const p of ['。', '；', '！', '？', '：']) start = Math.max(start, before.lastIndexOf(p));
    return before.slice(start + 1).slice(-44).replace(/\|/g, '｜');
  };
  // The window used for anchor verification is narrower than the one above: only the comma-delimited
  // clause that contains the reference. In a window as wide as a full sentence, common words like
  // "自己" (self) and "公司" (company) easily coincide with other entry titles by chance, producing
  // fake anchors — on 2026-09-20 a Section 31 entry was inserted and "…的贷款见本节第 15 条" in
  // Entry 1's Note was shifted onto the new entry "在家给境外公司远程干活……个税自己报"
  // (working remotely for an overseas company, filing your own income tax). In the full-sentence
  // window, "你自己还" outside two commas collided with "个税自己报" in the title, and --check reported pass.
  // When the clause is too short ("……, see Entry 11" with the window reduced to a single "see"),
  // step back one more clause; otherwise a correct reference would be misjudged as a bare entry number.
  // Punctuation marks that do NOT count as clause boundaries: 顿号 (the Chinese enumeration comma "、"),
  // quotation marks, parentheses. The anchor in "含糖饮料、加工肉（本节第 3 条）" sits across a 顿号;
  // the anchor in "为『比别人强一档』而加的预算见本节第 24 条" is inside quotation marks; cutting there
  // would cause false positives.
  const CLAUSE = ['。', '；', '！', '？', '：', '，'];
  const narrowOf = (line, idx) => {
    const before = line.slice(0, idx);
    const cut = s => {
      let start = -1;
      for (const p of CLAUSE) start = Math.max(start, s.lastIndexOf(p));
      return { head: s.slice(0, start + 1), tail: s.slice(start + 1) };
    };
    const last = cut(before);
    if (last.tail.replace(/[见按同和依据参照的在]/g, '').length >= 4) return last.tail.slice(-24);
    return (cut(last.head.slice(0, -1)).tail + last.tail).slice(-24);
  };
  // Text after the reference also counts as an anchor: "Entry 16 (IOU and guarantee)" puts the
  // keyword after the entry number. Take up to the first punctuation mark after the reference
  // (at most 40 characters). A fixed character count cannot be used: "see Section 1, Entries 7, 8,
  // 14, 17, 18, 19, 23, 24, 29 (blood pressure, blood sugar, …)" — such long entry-number lists
  // push the annotation out of the window.
  const afterOf = (line, idx) => {
    const rest = line.slice(idx).replace(new RegExp(`^第\\s*\\d+\\s*节?第?\\s*(?:${SPEC})?\\s*条`), '');
    const end = rest.search(/[。；！？]/);
    return (end === -1 ? rest : rest.slice(0, end)).slice(0, 40).replace(/\|/g, '｜');
  };

  lines.forEach((line, i) => {
    if (isDoc) {
      const h = /^#{1,6}\s+(.+?)\s*$/.exec(line);
      if (h) { unit = h[1].slice(0, 24); return; }
    } else {
      const t = /^### (\d+)\. (.*)$/.exec(line);
      if (t) { cur = Number(t[1]); unit = `第 ${cur} 条`; return; }
    }
    // Entry bodies are scanned only in those specific fields (the "Entry N" mentions in the
    // Source field are mostly statute article numbers). Section-opening introductions and long-read
    // body text are ordinary paragraphs that do not match the field prefix, so the whole line is
    // released — that is how they were silently skipped before.
    const inEntry = !isDoc && cur > 0;
    if (inEntry ? !CROSS_FIELDS.test(line) : !line.trim()) return;

    // Relative pointers ("see next entry", "penalty see previous entry") are forbidden entirely:
    // they carry no entry number, so inserting an entry slides them along with everything else,
    // the diff in the cross-reference table cannot detect a shift, and --check's bare-entry-number
    // check cannot scan them either. A single scan on 2026-09-20 caught three that had been wrong
    // for a long time: the HPV-vaccine entry's "see next entry" pointed to breast-cancer screening
    // (it should point to cervical-cancer screening), the threat entry's "penalty see previous
    // entry" pointed to the念头条 (obsessive-thoughts entry), and the unemployment-registration
    // entry's "previous entry: do not sign a voluntary resignation" pointed to the evidence-preservation
    // entry. Exclude false hits like "最后一条" (the last entry), "之后一条腿" (one leg afterwards).
    for (const m of line.matchAll(/(?<![最之以])(上一条|下一条|前一条|后一条|上面那条|上面这条|前面那条)/g)) {
      problems.push(`${f}:${i + 1} ${unit} used a relative pointer "${m[1]}" — change to "Entry N (anchor word)"`);
    }

    // Cross-section: Section N, Entry X
    for (const m of line.matchAll(new RegExp(`第\\s*(\\d+)\\s*节第\\s*(${SPEC})\\s*条`, 'g'))) {
      const target = sections.get(Number(m[1]));
      for (const [x, range] of nums(m[2])) {
        const title = target?.titles.get(x);
        rows.push({ from: unit, range, ref: `第 ${m[1]} 节第 ${x} 条`, title, line: i + 1, ctx: ctxOf(line, m.index), narrow: narrowOf(line, m.index), after: afterOf(line, m.index) });
        if (!title) problems.push(`${f}:${i + 1} ${unit} references "第 ${m[1]} 节第 ${x} 条" — that section has no such entry`);
      }
    }

    // Long reads have no concept of "this section"; a bare "Entry N" in a long read refers to a
    // statute article, so it is not scanned.
    if (isDoc) return;

    // Within-section: scan all "Entry X" mentions regardless of introductory word — the body uses
    // far more than "see Entry X", e.g., "press chest per Entry 1", "judgment method same as Entry 4",
    // "first check against Entry 8", "choose one of Entry 4". Earlier versions only recognized
    // three introductory words and missed all of these. The Source field is not scanned at all
    // (it is full of statute article numbers).
    // Section-opening introductions are not subject to the field restriction: "Entry N" there is
    // reading guidance ("Entry 9 is about money", "Entry 2 is about reading and lifespan"), and
    // can be shifted by inserts the same way; it goes into the table too.
    if (inEntry && !FIELDS.test(line)) return;
    const stripped = line.replace(new RegExp(`第\\s*\\d+\\s*节第\\s*${SPEC}\\s*条`, 'g'), '');
    for (const m of stripped.matchAll(new RegExp(`第\\s*(${SPEC})\\s*条`, 'g'))) {
      // Decide whether this is a statute article or an entry reference. Before 2026-09-21 the
      // method was to check whether the preceding 16 characters contained "法" (law), but "办法"
      // (measure), "查法" (way of checking), "法律援助" (legal aid), and "违法解除" (illegal
      // termination) all contain "法", and a large batch of genuine references were skipped as
      // collateral damage. Worse, the skip was silent: such references never entered the table at
      // all, so --check had nothing to check and reported "pass"; only a dip in the total reference
      // count would reveal it. A full scan once caught 12 such references.
      // The current logic skips based on two explicit criteria:
      //   ① Immediately adjacent to "Entry N" is a citation marker — 《…》, 〔…〕, "14 号" (No. 14),
      //      "该解释" (this interpretation), or a string ending in a statute name (e.g.,
      //      "治安管理处罚法第 26 条" (Article 26 of the Public Security Administration Punishment Law));
      // Only "immediately adjacent" is recognized, not a fuzzy window of the preceding N characters,
      // and "is it at sentence start" is not used as a criterion either — entry references also
      // appear at sentence start ("Entry 4's relief station gives free food and shelter", "the
      // 'go to the hospital right now' list in Entry 7"). The cost is that statute citations must
      // carry their own statute name: when listing one statute per line, write "该解释第 11 条"
      // (Article 11 of this interpretation), not "… court order. Article 11 is about evidence
      // gathering" leaning on the previous sentence. This was already a self-sufficiency
      // requirement of the body text anyway.
      const tail = stripped.slice(0, m.index).replace(/\s+$/, '');
      const CITE = /(《[^》]*》|〔[^〕]*〕|\d+\s*号|该(?:解释|意见|办法|规定|条例|通知|法)|[^\s，。；：、（）「」]{0,8}(?:法|条例|办法|规定|准则|细则|公约))$/;
      if (CITE.test(tail)) continue;
      for (const [x, range] of nums(m[1])) {
        const title = self.titles.get(x);
        rows.push({ from: unit, range, ref: `本节第 ${x} 条`, title, line: i + 1, ctx: ctxOf(stripped, m.index), narrow: narrowOf(stripped, m.index), after: afterOf(stripped, m.index) });
        // Within-section references that exceed the section's entry count are usually statute
        // article numbers misidentified as entry references; list them for manual review.
        if (!title) problems.push(`${f}:${i + 1} ${unit} references "第 ${x} 条" — this section has only ${self.titles.size} entries (likely a statute article number)`);
        if (inEntry && x === cur) problems.push(`${f}:${i + 1} Entry ${cur} references itself`);
      }
    }
  });

  // Can this reference be auto-verified as correct: in the text before and after the reference,
  // is there a span that also appears in the target entry's title? Yes → the reference carries an
  // anchor and a misalignment will be noticed; No → it is a bare entry number ("the actual
  // algorithm can be found in Entry 34"), and a misalignment cannot be detected — an explicit
  // annotation is needed.
  // A two-character coincidence is too easy to come by ("自己" (self), "公司" (company), "时间"
  // (time)), so anchor strength is tiered by length and distance:
  // Three consecutive characters matching in the full sentence ("含糖饮料" (sugary drinks), "居民医保"
  // (resident medical insurance)) counts as a strong anchor; for two-character matches, they must
  // land inside the comma-delimited clause containing the reference. "你自己还" sitting across two
  // commas colliding with "个税自己报" in the title was exactly what let the 2026-09-20 shift slip past.
  const longest = (text, title) => {
    let best = 0;
    for (let i = 0; i < text.length; i++) {
      for (let n = 1; i + n <= text.length; n++) {
        const seg = text.slice(i, i + n);
        if (!/^[一-龥]+$/.test(seg)) break;
        if (!title.includes(seg)) break;
        best = Math.max(best, n);
      }
    }
    return best;
  };
  // Digit and Latin letter runs also count as anchors: 12356, AED, CT, BMI, LPR are often exactly
  // what the reference is pointing to.
  const token = (text, title) => (text.match(/[0-9A-Za-z]{2,}/g) ?? []).some(t => title.includes(t));
  for (const r of rows) {
    if (!r.title || r.range) continue;
    const wide = r.ctx + r.after;
    if (token(wide, r.title) || longest(wide, r.title) >= 3) continue;
    if (longest(r.narrow + r.after, r.title) >= 2) continue;
    // Two-character matches only outside the clause: listed separately as weak anchors; the fix
    // is the same as for bare entry numbers — add an explicit annotation.
    const list = longest(wide, r.title) >= 2 ? weak : suspects;
    list.push(`${f}:${r.line} ${r.from} → "${r.ref}" ${r.title.slice(0, 20)}…　…${r.ctx}【${r.ref}】${r.after}…`);
  }

  if (!rows.length) continue;
  total += rows.length;
  out.push(`## ${isDoc ? 'docs/' : ''}${basename(f, '.md')}\n`);
  out.push('| Source | Reference | Pointed-to entry | Context at the reference |');
  out.push('| --- | --- | --- | --- |');
  for (const r of rows) {
    const title = r.title ? r.title : '**points to a nonexistent entry**';
    out.push(`| ${r.from} | ${r.ref} | ${title} | …${r.ctx}… |`);
  }
  out.push('');
}

const body = [
  '# Cross-reference table',
  '',
  'This file is generated by `node tools/check-refs.mjs`; do not edit it by hand.',
  '',
  'The "Entry X" mentions in the body text record only the entry number, not the content, so '
  + 'inserting or deleting entries shifts every following reference en masse. After a shift the '
  + 'entry numbers usually still fall in a valid range, so an out-of-range check cannot catch '
  + 'them. That is why each reference\'s **actual target title** is laid out here and checked '
  + 'into the repository: regenerate after editing entries, and any line in the `git diff` '
  + 'where the entry number is unchanged but the title changed is a reference that was shifted.',
  '',
  'Scan scope: every entry body and section-opening introduction under `book/`, plus the long '
  + 'reads under `docs/`. Long reads have no concept of "this section", so a bare "Entry N" in '
  + 'a long read is always treated as a statute article and skipped; long-read references must '
  + 'therefore be written in full as "Section X, Entry Y". In the "Source" column, entries are '
  + 'labeled "Entry N", section openings are labeled "节首" (section opener), and long reads use '
  + 'the most recent subheading.',
  '',
  'A second safety net is **anchors**: every reference must carry a word in its surrounding '
  + 'context that matches the target entry\'s title (the "medical assistance" in "medical '
  + 'assistance see Entry 11", or an explicit form like "see Entry 16 (IOU and guarantee)"). '
  + '`node tools/check-refs.mjs --check` fails on bare entry numbers without anchors — once such '
  + 'a reference is shifted, the cross-reference table diff shows nothing wrong, and only the '
  + 'anchor can hold. Range references ("see Section 8, Entries 11 to 14") are an exception: they '
  + 'point to a contiguous block of entries and cannot carry an anchor per entry inside the '
  + 'block, so they rely on the diff alone.',
  '',
  'Whether an anchor counts is judged by length and distance: three consecutive characters '
  + 'matching in the full sentence ("含糖饮料" (sugary drinks), "居民医保" (resident medical '
  + 'insurance)), or two characters matching inside the comma-delimited clause that contains '
  + 'the reference, count as a strong anchor. A two-character match only outside the clause '
  + '("自己" (self), "公司" (company)) is treated as having no anchor. This tightening was added '
  + 'on 2026-09-20: when an entry was inserted into Section 31, "…的贷款见本节第 15 条" got '
  + 'shifted onto the new entry "在家给境外公司远程干活……个税自己报", and the "你自己还" sitting '
  + 'across two commas passed as an anchor — `--check` reported pass at the time.',
  '',
  `${total} references in total.`,
  '',
  ...out,
].join('\n');

if (problems.length) {
  console.log('Needs manual confirmation:');
  for (const p of problems) console.log('  ' + p);
  console.log('');
}

// This heuristic used to have a very high false-positive rate ("未遂之后的长期结局见第 30 条" (the
// long-term outcome after an attempted act pointing to Entry 30) — pointing at "念头一冒出来先告
// 诉身边的一个人" — was completely correct yet shared no characters); of 288 references it flagged
// 159. Later, all 345 references in the book were given anchors one by one, so under normal
// circumstances both lists should be 0, and any item flagged is a real spot that needs an annotation.
// It only guarantees "a misalignment can be noticed", not "a misalignment is always caught":
// simulating a shift of every in-section reference by one entry, about 70% are caught on the spot,
// and the rest (adjacent entries on the same topic, titles sharing words) still rely on the
// cross-reference table diff.
if (process.argv.includes('--suspect') && suspects.length) {
  console.log(`Reference wording does not match the target title (${suspects.length} places, many false positives, for manual review only):`);
  for (const s of suspects) console.log('  ' + s);
  console.log('');
}

if (process.argv.includes('--suspect') && weak.length) {
  console.log(`Anchor only matches outside the clause (${weak.length} places, usually common words coinciding, equivalent to no anchor):`);
  for (const s of weak) console.log('  ' + s);
  console.log('');
}

if (CHECK_ONLY) {
  const fatal = problems.filter(p => p.includes('该节没有这一条') || p.includes('references itself') || p.includes('relative pointer'));
  for (const p of fatal) console.log('  ' + p);
  // Bare entry numbers (no word before or after the reference that matches the target title) also
  // count as failure: once such a reference is shifted by an entry insert, nobody can tell. The
  // fix is to add an anchor — "see Entry 16 (IOU and guarantee)"; the parenthetical word can be
  // taken from the target entry's title.
  if (suspects.length) {
    console.log(`${suspects.length} references are bare entry numbers — a misalignment would be invisible. Please add anchors (run with --suspect to see the list):`);
    for (const s of suspects.slice(0, 10)) console.log('  ' + s.split('　')[0]);
    if (suspects.length > 10) console.log(`  …and ${suspects.length - 10} more`);
  }
  // Weak anchors also count as failure: a match on two common characters only in the full sentence,
  // separated from the reference by clause boundaries, is equivalent to no anchor.
  if (weak.length) {
    console.log(`${weak.length} references have anchors that only match outside the clause, equivalent to no anchor. Please add an explicit annotation (run with --suspect to see the list):`);
    for (const s of weak.slice(0, 10)) console.log('  ' + s.split('　')[0]);
    if (weak.length > 10) console.log(`  …and ${weak.length - 10} more`);
  }
  const bad = fatal.length + suspects.length + weak.length;
  console.log(bad ? `${bad} places to fix` : `Reference check passed: all ${total} references point to the right place and carry anchors`);
  process.exit(bad ? 1 : 0);
}

writeFileSync(resolve(ROOT, 'docs/引用对照.md'), body, 'utf8');
console.log(`Wrote docs/引用对照.md, ${total} references in total.`);
