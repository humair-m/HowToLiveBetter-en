# Metric Change: Beneficiary in Four Tiers · Record (2026-09-09)

Task source: After Section 13, Entry 38 (stumbling on a brawl) was written, a reader asked, "That person on the ground has zero relation to me and zero impact on my life — why should I get involved?" The question pointed at the book's own metric: the book claims "each entry states what it costs and what it gains," defaulting to the reader as the subject, but a batch of entries in Section 13 actually wrote the "Benefit" field as the survival rate of the person being rescued — the subject was switched. The author accordingly established the beneficiary metric.

## New Rule

Beneficiaries are divided into four tiers, ranked from high to low by "the expected likelihood that this benefit will eventually return to the reader": ① the reader themselves; ② spouse and immediate family (parents, children, grandparents on both sides, grandchildren on both sides); ③ friends, colleagues, and other relatives — reciprocal relationships, where what you give out may come back; ④ strangers — the lowest tier but not zero: low probability of return, and the other party's character is unknown, with an additional downside of being falsely accused, counter-sued, or retaliated against. Different tiers are not pooled in calculations; when writing a ④-tier entry, the risk profile must be written alongside the benefit. The beneficiary tier does not change the benefit magnitude (magnitude is still derived mechanically from the "Benefit" field) — it only affects whether the entry is worth its cost, and is written in the Note. The rule was also written into CLAUDE.md (new section "Who benefits (beneficiary metric)," including a three-step write-up for other-regarding entries) and into the README (two paragraphs after "How to Read"). The index.html search page was synchronized in two places: the `<noscript>` fallback block (visible only with JS and crawlers off) and the actually-visible doc-head subtitle. On the first pass only the noscript block was updated; the author pointed out "the page only shows 'each entry answers two questions'," so the doc-head was also updated. Per convention, the doc-head sentence carries no numbers.

The first draft read "only count yourself and immediate family; friends, colleagues, and strangers are not counted at all" — a misreading of the author's words, corrected the same day to the four-tier version above. Traces of the misreading were cleaned from CLAUDE.md, README, index.html, the Section 13 introduction, and Notes in Entries 2 and 15; Entry 38's title had "call 110" removed during the misreading period, and this round restored it to "if you call the police, retreat to a safe distance and call 110." The Note sentence "what you're protecting is that person on the ground, not you" was rewritten as "this falls into the lowest beneficiary tier — whether you want to spend that time is your call."

## Whole-Book Audit Results

Scanned all 471 titles with "someone|others|another person|stranger|passerby|other side|colleague|friend|neighbor|Good Samaritan|rescue|people around you"; 37 hits, of which, after item-by-item review, only 9 needed changes:

- Most hits were already pure self-interest calculations, the main line being to keep the reader from being penalized or scammed (not secretly filming, not lending ID, not carrying things for strangers, not taking candy from strangers, not running programs on others' machines, leaving when something is handed around in a venue, etc.) — left unchanged.
- Children's entries (safety seat, window restrictor, children near water) and the eldercare, parenting, and pregnancy sections have children and parents as beneficiaries — already in tier two, untouched.
- Section 13, Entry 40 (financial matters after being injured while rescuing) is about how the reader recovers money after being injured themselves — a self-interest entry, untouched.

The 9 changes:

| Location | Change |
|---|---|
| Section 13 introduction | Added a sentence on the beneficiary metric: the main line is self and spouse/immediate family, secondary for friends/colleagues, and for strangers not zero benefit but lowest tier with an additional downside of false accusation and being dragged into a case |
| Section 13, Entry 1 (CPR) | Plain-language summary opening changed to "the person you're most likely to press on is a family member"; Benefit field added the in-home occurrence rate |
| Section 13, Entry 2 (someone collapses, elderly fall) | Note states that this judgment is used first for an elderly family member; for a stranger, what remains is the immunity clause and "don't move them around" |
| Section 13, Entry 15 (seizure) | Note states the main line is having a person with epilepsy at home; doing the same for a stranger drops the benefit one tier but does not incur liability |
| Section 13, Entry 16 (hypoglycemia) | Note states the default subject is self or a diabetic family member |
| Section 13, Entry 17 (electric shock) | Note points out "cut power first, then touch the person" is a pure self-interest rule |
| Section 13, Entry 26 (drowning) | Note points out "don't enter the water" is a self-interest rule, and the person you actually need to save is most likely your own child |
| Section 13, Entry 27 (choking) | Note points out this most often happens at the family dinner table |
| Section 13, Entry 38 (stumbling on a brawl) | Title changed to "back away and leave…; if you call the police, retreat to a safe distance and call 110"; body text makes calling the police optional and leaves the trade-off to the reader; Note states the benefit of calling the police falls into the lowest tier |
| Section 8, Entry 14 (a person close to you making threats) | Note states the calculation is for co-resident spouse/parents/children, and that the legal power to commit someone to treatment is granted only to close relatives |

## Newly Added Verification

The in-home occurrence rate for cardiac arrest was taken from a paper already cited; this round pulled the numbers: Zheng J et al. (2023), BASIC-OHCA registry, The Lancet Public Health, <https://doi.org/10.1016/S2468-2667(23)00173-1> — of 38,227 non-traumatic out-of-hospital cardiac arrests, "30 282 (79.2%) had a cardiac arrest at home," same paper "7121 (20.3%) received bystander cardiopulmonary resuscitation," "441 (1.2%) of 38 227 survived." The PubMed page returned only a cookie prompt this round; numbers were verified from the abstractText returned by the Europe PMC REST interface.

## What Was Not Done

No "beneficiary" filterable dimension was added to entries (that would require changes to the cost-label format and to index.html's parsing and filter panel), and no entries were deleted: the lowest of the four tiers is still not zero benefit, so there was no basis for deletion. Entry count and all statistics are unchanged: still 471 entries, A 299 / B 123 / C 49, cost-effectiveness very high 83 / high 236 / medium 152.
