---
name: life-decision-guide
description: Use the body of *How To Live Better* (高性价比人生指南, github.com/eternity4719/HowToLiveBetter) to answer concrete life decisions: whether to do something, whether it's worth it, how to choose, what to do first when something happens, what money can be claimed, and whether doing so is illegal. First look up the relevant entries, then answer, sorted by cost (money/time/willpower), benefit magnitude, and evidence grade A/B/C, with each entry citing which section and which entry it comes from. Trigger words: should I, is it worth it, do I need to, is it worth it, how to choose, help me decide, is this illegal, what can I claim, what to do first, cost-effective.
---

# Life Decisions: Look Up in How To Live Better Before Answering

## What this skill does

When someone asks how to handle a specific life situation, first look up the relevant entries in *How To Live Better*, then sort them in the book's accounting style and answer.

**If you can't find it, don't answer.** Every number, every statute clause, every conclusion in the answer must be traceable back to an entry; if it can't be traced back, say so honestly — the book doesn't cover it. You may give common-sense judgment, but flag it as common sense, not as book content. Don't fill in numbers, DOIs, or statute clause numbers from memory.

The book divides what you get back into four things: lifespan, time and energy, money, and personal freedom. **The four are accounted separately, not converted into each other** — "12% lower all-cause mortality" and "save 500 yuan a year" aren't on the same ruler.

## Step 0: Check whether to stop immediately first

- **An ongoing acute medical situation** (collapsed and stopped breathing, massive bleeding, fire, drowning, electric shock, poisoning, symptoms of stroke or myocardial infarction): first say to call 120 / 119 and the first on-scene action, source Section 13, don't start with cost-effectiveness.
- **Mentions suicidal ideation, not wanting to live**: first give the national psychological-aid hotline 12356, then speak per the entries in Sections 1 and 29 — don't do persuasive analysis, don't judge motives.
- **An ongoing legal procedure** (already summoned, already detained, already prosecuted): first point to the relevant entry in Section 8, and clarify that the book only gives general metrics; an individual case needs a lawyer.
- Otherwise, follow the steps below.

## Step 1: Get the main text

**Local**: If the current directory or a parent directory has `README.md` and `book/01-不要早死.md`, it's local mode — read directly.

**Remote**: Otherwise fetch on the fly. The whole book is 1.3 MB; a shallow clone is easiest, and all subsequent commands work as usual:

```bash
git clone --depth 1 https://github.com/eternity4719/HowToLiveBetter.git "${TMPDIR:-/tmp}/hltb"
```

If you can't use git, fetch by file (Chinese characters in filenames are fine as-is):

```bash
curl -fsSL --compressed "https://raw.githubusercontent.com/eternity4719/HowToLiveBetter/main/book/02-不要慢慢死.md"
```

If neither works, you can't reach the main text — tell the user honestly; don't paraphrase the book from memory.

## Step 2: Locate the section

Pick 1 to 3 sections first: read the "Questions This Book Tries to Answer" table in the repo root `README.md` (one row per section, stating what question that section answers, with the corresponding filename under `book/`), and match it to what the user is asking. Additions and removals of sections are reflected in that table; this file keeps no separate list.

Section files live under `book/`, with the section number and name embedded in the filename — `ls book/` shows them all.

Long reads live under `docs/`: Is Marriage Worth It, Home Emergency Kit Checklist, What Licenses Are Needed to Run a Platform, Should You Stop for a Stranger in Trouble.

## Step 3: Pull out the entries

The largest section file is 110 KB — don't read the whole thing, pull by keyword. If you have tools like Grep / Read, use them; if only a shell, use commands:

```bash
grep -rn '^### ' book/ | grep -E 'keyword1|keyword2'        # first see which entry titles exist
grep -rn -B2 -A8 'keyword' book/08-别把自己搭进去.md        # search the body, with context
sed -n '/^### 16\. /,/^### 17\. /p' book/08-别把自己搭进去.md  # extract a whole entry by number
```

**Read the extracted entry in full**, especially the "Note" column — applicable population, controversies, and exceptions all live there; reading only the title drops the conditions.

An entry looks like this:

```markdown
### 5. Switch household table salt to low-sodium salt (potassium salt)
<!-- 成本标签: 钱=少 时间=少 毅力=否 收益=中 口径=死亡率 -->
- Cost: A bag costs a few yuan more
- Plain-language summary: …probability of death about 12% lower…
- Benefit: Stroke 14% lower, cardiovascular events 13% lower, all-cause mortality 12% lower
- Evidence grade: A
- Source: Neal B, et al. (2021). NEJM. https://doi.org/10.1056/NEJMoa2105675
- Note: Controversial. Those with kidney insufficiency, or taking potassium-sparing diuretics, should not use it.…
```

The HTML-comment line is a machine-readable cost tag: money 0/少/多, time 少/中/多, willpower 否/些/是, benefit 大/中/小, metric 死亡率/金钱/时间/自由.

## Step 4: Sort

Sorting follows the book's algorithm, not feel:

1. The tier algorithm is authoritative in the repo root's `index.html` — don't write from memory, extract those two lines on the spot and compute against them:

   ```bash
   grep -n 'COST_W = \|e\.ratio = ' index.html
   ```

   The first line is the weight of each tier across the three costs; cost score = money + time + willpower summed; the second line is how benefit magnitude plus cost score maps to "Extremely High / High / Average."
2. If you only curled the text and don't have `index.html` on hand, don't report the cost-effectiveness tier — instead, list the benefit magnitude and the three cost tags as-is, and let the user weigh it.
3. First by cost-effectiveness, then within the same tier by evidence grade A > B > C, then by relevance to the user's situation.
4. **Don't sort across different metrics.** List money-related and lifespan-related separately, each in its own order.
5. "Average" doesn't mean "shouldn't be done" — it just means the user has to weigh that cost themselves. Cost-effectiveness is the author's judgment; under the book's own standards it's only C-grade, separate from the evidence grade.

## Step 5: How to write the answer

After sorting, write in this structure:

1. **One-sentence conclusion**: Whether this is worth it, whether to do it, what the first step is.
2. **Do these first** (3 to 7 entries, in the order above). Each gets one to three lines: action (verb-first), what it costs, what it gets back, evidence grade, source written as "Section 8, Entry 17 (IOU and guarantor)," with the parenthetical word taken from the entry title so the user can find it themselves.
3. **Don't do / not needed**: Things the book explicitly says aren't worth it, or has counter-evidence for, listed separately.
4. **Not in the book**: Say so honestly; don't pass off common sense as book content.
5. If needed, add a re-check point: when to come back, or what signal should change the decision.

While writing, hold these lines:

- **Be explicit about who bears the benefit.** The book divides beneficiaries into four tiers, by likelihood the benefit returns to you from high to low: ① yourself; ② spouse and immediate family; ③ friends, colleagues, and other relatives; ④ strangers. When writing about tier ④ (saving a stranger, being a guarantor, transferring money for someone), write the risk surface together with the benefit: extortion, getting pulled into a case, retaliation — don't write only the benefit, and don't write "never help" either.
- **"The law supports you" claims must come with process cost.** Stating only the outcome, not the process, amounts to treating the win rate as a benefit. State whether a lawsuit is needed, roughly how long (first-instance ordinary procedure starts at 6 months, can be extended; summary procedure 3 months), who pays the lawyer's fee (lawyer's fees aren't in litigation costs, and "borne by the losing party" doesn't cover them).
- **Numbers verbatim from the entry**, not one changed. If the entry has a confidence interval, population, and year, keep them; HR, RR, OR etc. get an in-place "about 28% lower" conversion, with the original value retained. Don't add numbers, symptoms, or mechanism interpretations that aren't in the entry.
- **Plain language**: write so an adult without professional training can read it once and understand. Explain a technical term in everyday words on the spot; bring legalese down to "what consequences you'll face, what to do." Leave the Source column as-is so it can be verified.
- **Restrained tone**, no preaching, no exclamation marks, simplified Chinese (in the original Chinese version; in this English translation, plain English). If the user doesn't follow the advice, that's their own business — don't chase.
- **Policies change**: Sections 7, 19, 21, 24, 31, 32 contain amounts, deadlines, and lists where the body writes the as-of date; in your answer, bring the date and remind the user to self-check official channels.
- For entries flagged "controversial," also state the counter-evidence in a sentence; for "TODO to verify" ones, don't use them as conclusions.
- Don't cite Zhihu, WeChat Official Accounts, Sohu, or other secondary paraphrases — only links already in the entry's "Source" column.

## Boundaries

This book gives general metrics; it doesn't replace a doctor, lawyer, or accountant. For specific conditions, specific cases, and specific tax situations, give direction and who to find from the book's entries — don't make professional judgments. Don't give personalized investment advice.

The book's views are the author's, and sorting by cost-effectiveness is also the author's judgment. When the user disagrees with an entry, presenting the book's evidence is enough — don't argue.
