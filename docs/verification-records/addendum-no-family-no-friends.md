# Addendum: How to Make "Don't Be Alone" Land When You Have No Family and No Friends · Verification Record (2026-09-18)

Task origin: A user asked about Section 29, Entry 1—"In the first days after a loved one dies, don't be alone; if you have no family and no friends, how do you do that?"

This is the third time the same class of question has come up (the first two were "only-prohibition-no-path" and "exemption-clause-overreach"): the entry's action assumes the reader has someone available nearby. A full-section scan found four places with this assumption:

| Entry | Where it assumed "someone is there" |
|---|---|
| Entry 1 (first days of bereavement) | "Don't be alone", "hand the pill box to someone else to manage" |
| Entry 2 (first week after a serious diagnosis) | "Bring someone along on the day you get the report" |
| Entry 5 (six months after losing a spouse) | "Find a specific person (child, sibling, friend) to visit or call regularly" |
| Entry 12 (postpone big decisions) | "First talk it over with someone who has no stake in the matter" |

Landing: Section 29 adds new Entry 6 (inserted after the surviving-spouse care window); old Entries 6 to 12 are renumbered 7 to 13; within-section references (the title of old Entry 8, the plain-language, and the "Entry 7" in the note) are synchronized to "Entry 8", and the two "this section, Entry 4" references are unaffected. The four entries above each had a sentence added pointing to the new entry as an exit; Entry 12 also gives the substitute when there is no one to talk to (call 12356, or write it down and re-read in three days).

## How the new entry was written

Splitting "having someone present" into two separately replaceable things forms the entry's backbone:

1. **Someone discovers you when something happens**—this half must be replaced, with three things: give a neighbor or property management a spare key / temporary door-lock code and tell them "I am alone these days"; tell the neighborhood committee that you live alone and ask whether you can be put on a visit-care list and whether there is a free smart-call device or smart water meter locally; set up an emergency contact and medical emergency card on your phone, do not mute it, do not turn it off.
2. **Someone keeps an eye on your medications and meals**—this half was always something you had to do yourself; replace it with a written list and an alarm clock, not memory.

## Source verification

- **Udell JA, et al. (2012). Living alone and cardiovascular risk in outpatients at risk of or with atherothrombosis. Arch Intern Med. <https://doi.org/10.1001/archinternmed.2012.2782>**: Europe PMC retrieved the core record and full abstract, verified word-for-word. 44,573 people, 8,594 (19%) living alone, 4-year all-cause mortality 14.1% vs 11.1%, cardiovascular mortality 8.6% vs 6.8% (log-rank P<.01), interaction P=.03, ages 45–65 7.7% vs 5.7% HR 1.24 (1.01–1.51), ages 66–80 13.2% vs 12.3% HR 1.12 (1.01–1.26), age >80 24.6% vs 28.4% HR 0.92 (0.79–1.06) all from the original abstract; the conclusion states "although this observation warrants confirmation", and the note accordingly states "the original authors themselves write that this finding awaits confirmation".
- **Ministry of Civil Affairs and nine other departments (2022). Guidance Opinions on Carrying Out Visit and Care Services for Special-Need Elderly (民发〔2022〕73 号). <https://www.gov.cn/zhengce/zhengceku/2022-10/13/content_5718017.htm>**: Hit in gov.cn policy document library; full text scraped and verified word-for-word. Service recipients "elderly who live alone, are empty-nesters, left-behind, disabled, severely disabled, or in special family-planning circumstances"; methods "regular in-home visits, phone/video calls, remote monitoring"; the body responsible for screening (township/street + village/resident committee assistance); "willingness to accept visit and care services"; by end of 2025 "ensure the monthly visit rate for special-need elderly reaches 100%"; "for special-need elderly who are disabled, visit and care at least once a month"; smart-call systems / smart electricity and water meters / health-monitoring products / elderly-care monitoring devices, and "once monitoring detects an anomaly, timely warning can be issued and a notification sent synchronously to the emergency contact", "shall assist in dialing the emergency call at the first opportunity" are all original text. The ten departments are the Ministry of Civil Affairs, the Central Political and Legal Affairs Commission, the Central Commission for Guiding Cultural and Ethical Progress, the Ministry of Education, the Ministry of Finance, the Ministry of Housing and Urban-Rural Development, the Ministry of Agriculture and Rural Affairs, the National Health Commission, the China Disabled Persons' Federation, and the China National Committee on Ageing.
- Three places already verified in the book are reused, no new sources added: Section 13, Entry 1 (out-of-hospital cardiac arrest 79.2% occurs at home, bystander CPR 16.1% vs 3.9%), Section 22, Entry 10 (odds ratio for solitary-death 1.32), and the 25-department 2026 plan referenced in Section 29, Entry 11 (grid workers and social workers "promptly detect family changes, unemployment, dropout, and other psychological-crisis risks").

Not retrieved / not adopted: sought another primary source on "solitary-dwellers have longer delays in seeking care for acute MI or stroke"; Europe PMC was persistently 502/503 this round, not retrieved; therefore the body does not write the care-delay mechanism, only the causal chain that can be directly derived from the Section 13 data: "no one present means no one to do CPR".

## How evidence grade and benefit magnitude were set

- **Evidence grade B**: The association between living alone and mortality is observational; reverse causation (those in poorer health or worse circumstances are more likely to live alone) cannot be removed; the visit-and-care document covers only the elderly, and readers under 60 have no dedicated system, so they can only point to the active-detection requirement for grid workers in the 25-department plan. The actions themselves (keys, lists, emergency contacts) have no controlled trials.
- **Benefit magnitude "medium", not mechanical threshold**: Mechanical application would take HR 1.24 or 4-year mortality 14.1% vs 11.1% (relative excess about 27%), landing as "large". But this entry's actions do not eliminate living alone itself; they only substitute for the "being discovered" part, so the overall association between living alone and mortality cannot be taken directly as this entry's benefit. Set to "medium".
- Cost tag: money=0 (neighborhood committee registration and hotlines are free; smart devices are installed free for solitary-dwellers in many places, not a required item), time=few, willpower=some (you have to take the initiative to say "I live alone"), benefit=medium, metric=mortality.

## Synchronization

- Entry count +1, grade B +1, links +2 (Udell DOI and gov.cn policy link). Ran `tools\sync-stats.ps1` to rewrite README, index.html, tools/og.html, and regenerate og.png.
- Manual changes: this project's CLAUDE.md Section 29 directory description (added the new entry; metric wording changed from "the last three entries are money" to "the four entries on money and benefits are money"), the README Section 29 guide line, and the section opener (added metric description and a sentence pointing to Entry 6).
- "Section 29, Entry 8" and "Section 29, Entry 12" appearing in old verification records refer to entries before renumbering, corresponding to current Entries 9 and 13; historical records are not retroactively corrected.
