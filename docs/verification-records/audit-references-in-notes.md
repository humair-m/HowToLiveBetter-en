# Audit: References in Notes · Record (2026-09-21)

Task source: A user reading the search page saw the Note in Section 2, Entry 1 (smoking cessation) — which embedded a long string of English citations — and said: "Why is this still here? Readers are Chinese; you've left this long string of these sitting around."

Two entries had been handled the same day (Section 2, Entry 41 night shift; Section 6, Entry 26 breakfast); at that time only the two with the most links were fixed, and no whole-book scan was done. This round completed the sweep.

## Criterion and Metric

- **Literature links always go in the Source field, never the Note.** The Note may keep at most one link, and only a relative link pointing to a docs/ long-read.
- Basis: CLAUDE.md's plain-language rule explicitly says "**except the Source field**, citations and clause numbers are kept as-is so they can be verified" — meaning the only proper home for English citations is the Source field. The Note is Chinese body text for Chinese readers; stuffing in a string of English titles and DOIs is neither readable nor appropriate.
- Scan command: `grep -c http` across all `- Note:` lines in the book.

## Before and After

| | Before | After |
|---|---|---|
| Entries with links in the Note | 19 (11 of which had a full string of English citations embedded in Chinese) | **0** |
| Maximum links in a single Note | 3 | 0 |
| Total literature links in the book | 1234 | **1234 (unchanged)** |

The total-link count not changing is the core invariant of this round: **citations were moved from the Note to the Source field, not deleted.** When moving them into Source, each was tagged with a short Chinese tail note explaining which claim it supports ("(the dissenting side)," "(the high-purity prescription fish-oil trial in the Note)," etc.), so the Source field wouldn't become a string of citations with no clear purpose.

## Item-by-Item List

Section 1: Entry 20 (influenza vaccine Cochrane), Entry 28 (PrEP, Fonner 2016), Entry 29 (window period, Guangdong CDC page).
Section 2: Entry 1 (secondhand smoke, Oberg 2011), Entry 9 (low-sodium salt dissent, PURE), Entry 19 (processed meat dissent, NutriRECS guideline), Entry 20 (alcohol dissent, Di Castelnuovo 2006), Entry 34 (BMI dissent, Flegal 2013), Entry 41 (night-shift cancer, two papers + light exposure, Czeisler, already handled in the prior round).
Section 3: Entry 9 (two dissenting papers, Grubbs 2018, Prause & Pfaus 2015).
Section 5: Entry 17 (index-fund dissent, Harvey & Liu 2022).
Section 6: Entry 1 (multivitamin, Gaziano 2012), Entry 2 (fish oil, Bhatt 2019 REDUCE-IT), Entry 26 (breakfast, three papers, already handled in the prior round).
Section 10: Entry 3 (Perilloux & Kurzban 2015), Entry 6 (Dargie 2015).
Section 20: Entry 12 (general-infant trial EAT, Perkin 2016).
Section 29: Entry 4 (Kristensen 2012), Entry 9 (Stroebe 2007).

## Completed Titles

Five entries originally had only abbreviated forms in the Note (author, year, journal); moving them into the Source field required filling in titles. **Nothing was written from memory** — each was retrieved by DOI via Crossref:

| DOI | Retrieved title |
|---|---|
| 10.1097/QAD.0000000000001145 | Effectiveness and safety of oral HIV preexposure prophylaxis for all populations (AIDS, 2016) |
| 10.1001/jama.2012.14641 | Multivitamins in the Prevention of Cancer in Men (JAMA, 2012) |
| 10.1056/NEJMoa1812792 | Cardiovascular Risk Reduction with Icosapent Ethyl for Hypertriglyceridemia (NEJM, 2019) |
| 10.1007/s10508-018-1248-x | Pornography Problems Due to Moral Incongruence: An Integrative Model with a Systematic Review and Meta-Analysis (Arch Sex Behav, **Crossref's recorded year is 2018, not 2019 as written in the original**; written as 2018) |
| 10.1002/sm2.58 | Viewing Sexual Stimuli Associated with Greater Sexual Responsiveness, Not Erectile Dysfunction (Sexual Medicine, 2015) |

## Verification

- Number of entries where the `- Note:` line contains http across the whole book: **0**.
- After deleting citations, scanned punctuation; no double periods, empty parentheses, or orphaned "。" left behind.
- `node tools/check-refs.mjs --check`: all 454 references point to correct targets with anchors; entry count unchanged.
- `sync-stats.ps1`: entries 600, A 404, links 1234; all eight statistics positions unchanged.
