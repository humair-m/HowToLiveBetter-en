# Section 32 Study Abroad: Status, Work, Insurance, and Returning-Country Credential Recognition · Verification Record (2026-09-18)

Task origin: Repository issue #8, where a reader asked "Is there advice for international students in common study-abroad countries, such as the US, Canada, the UK, Australia — what rights students have and how to protect them as international students".

Existing coverage: Section 21 covers going abroad and overseas safety (Ministry of Foreign Affairs safety alerts, 12308, limits of consular protection, overseas medical and evacuation insurance, overseas high-salary recruitment traps), but does not cover international student status or academics. Section 23 covers returns on education, but not foreign credential recognition. So a new section was opened; it does not duplicate either of those two sections, and the body cross-references both.

Landing point: New file `book/32-出国留学.md`, 10 entries. Coverage is limited per the reader's question to the US, Canada, the UK, and Australia, with numbers given per country. **All foreign-policy numbers in this section are marked as of September 2026; the body and section head both tell the reader to verify against the source links themselves, and that long-term maintenance is not provided.**

Source-fetching tools: Local curl segfaulted; `Invoke-WebRequest` timed out or disconnected on canada.ca and cscse.edu.cn; a headless Chrome `--dump-dom` was used instead to capture the rendered DOM (jsj.moe.gov.cn and immi.homeaffairs.gov.au are front-end rendered and must go this route). All 17 external links in this section were run for reachability on 2026-09-18; all returned 200 except canada.ca, which the local PowerShell could not fetch but headless Chrome could, and the content has been verified verbatim.

## Entry 1 (Recognized Institution List)

| URL | Verification | Basis |
|---|---|---|
| <http://yxcx.cscse.edu.cn/> (Chinese Service Center for Scholarly Exchange "Recognized Institution Query" entry, obtained from the cscse.edu.cn homepage anchor) | Yes | The page is a search entry by country and institution name |
| <https://jsj.moe.gov.cn/> (Ministry of Education Education Foreign-related Supervision Information Network homepage) | Yes | Columns include document policies, alert information, and cooperative education |
| <http://rzzccx.crs.jsj.edu.cn/> (Chinese-Foreign Cooperative Education Certificate Authentication Registration Information Query) | Yes | "For students enrolled since 2008, the registration number of a foreign academic degree certificate authentication can be queried by name and ID number" |

Graded A: both the query entry and the institutional arrangements can be verified verbatim on official pages. Benefit magnitude "large" — money metric is tiered at the ten-thousand-yuan level; tuition and one to two years of time are an order of magnitude above ten thousand yuan. The "lists change, check annually" in the Notes is operational advice, not document original text.

## Entry 2 (US Fixed Admission Period and 30-Day Departure Window)

| URL | Verification | Key points of original text |
|---|---|---|
| <https://www.ecfr.gov/current/title-8/chapter-I/subchapter-B/part-214/section-214.2> (eCFR current text 8 CFR 214.2(f)) | Yes | For F-1 students who have completed their program and approved practical training, "an additional 30-day period" from the program end date, the four-year maximum admission period, or the end of OPT/STEM OPT authorization, to prepare for departure or seek other lawful status; those who end their program or training early must depart within 30 days of the end date or seek other lawful status |
| <https://www.federalregister.gov/documents/2026/07/17/2026-14439/establishing-a-fixed-time-period-of-admission-and-an-extension-of-stay-procedure-for-nonimmigrant> (Federal Register Final Rule) | Yes | publication_date 2026-07-17, effective_on 2026-09-15 (verified via the federalregister.gov API field) |

**2026-09-25 Correction (issue #32)**: This rule **did not** take effect on 2026-09-15. On 2026-09-14, Judge Saylor of the US District Court for the District of Massachusetts, in Presidents' Alliance on Higher Education and Immigration v. DHS (No. 1:26-cv-13799-FDS), postponed the entire rule's effective date under 5 U.S.C. § 705, with effect nationwide; the vacatur and summary judgment requests were dismissed without prejudice, allowing renewal. The entry has been rewritten to reflect this as "the new rule has been suspended; the current framework remains D/S and the 60-day grace period".

| URL | Verification | Key points of original text |
|---|---|---|
| <https://oiss.yale.edu/news/important-update-court-action-on-the-ds-rule> (Yale Office of International Students and Scholars, 2026-09-14) | Yes | "issued an order preliminarily enjoining DHS from implementing this rule" "the current D/S framework remains in place for now" "You do not currently need to apply for an Extension of Stay" "The administration may appeal" |
| <https://www.aila.org/blog/think-immigration-one-day-before-taking-effect-federal-court-postpones-the-f-j-and-i-fixed-admission-period-rule> (American Immigration Lawyers Association) | Yes | "The relief is nationwide, and it reaches the whole rule" "The rule is postponed, not vacated" "the 60-day grace period stands, and there is no new I-539 requirement" "denying the vacatur and summary judgment requests without prejudice to renewal" "the government may seek review in the First Circuit" |
| <https://www.courtlistener.com/docket/74661796/presidents-alliance-on-higher-education-and-immigration-v-united-states/> (Court docket) | Yes | Item 50 (2026-09-14) MEMORANDUM AND ORDER: "GRANTED to the extent that it seeks to postpone the effective date of the Final Rule pursuant to … 5 U.S.C. § 705. To the extent that plaintiffs seek vacatur of the Final Rule, summary judgment, or other relief, the motion is DENIED without prejudice to its renewal"; Item 51 (2026-09-14) "PRELIMINARY INJUNCTION ORDER POSTPONING EFFECTIVE DATE OF FINAL RULE"; same-day notice "Status Conference set for 10/2/2026 12:00 PM". Direct connection 403, accessible via local proxy |

The original grading note (below) is retained as a historical record; the sentence "from 2026-09-15 onward has been replaced by the fixed-period rule" is no longer valid.

Graded A: the article and effective date can be verified verbatim. **This entry is the most important update in this section**: the eCFR current text reads 30 days; the widely circulated "60-day grace period" and "duration of status to graduation" are both under the old regime and have been replaced by the fixed-period rule since 2026-09-15, only three days before this writing. Benefit magnitude "large" — freedom metric, with the consequence being unlawful presence and deportation, by analogy to the "avoid criminal liability — large" tier. The extension-of-stay procedure is in (f)(7) and is only referenced, not elaborated, in the body.

## Entry 3 (Working Hours in the Four Countries)

| URL | Verification | Key points of original text |
|---|---|---|
| <https://www.ecfr.gov/current/title-8/chapter-I/subchapter-B/part-214/section-214.2> (8 CFR 214.2(f)(9)) | Yes | On-campus employment "must not exceed 20 hours a week while school is in session"; approved off-campus part-time work "limited to no more than 20 hours a week when school is in session", full-time during breaks |
| <https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-student> (Immigration Rules Appendix Student, Table ST26.1) | Yes | Degree and above with sponsor compliance: 20 hours per week during term; below degree: 10 hours; all other including all part-time: no employment. ST26.5 also prohibits self-employment, professional athlete and coach, and entertainer |
| <https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/work-off-campus.html> (IRCC) | Yes | "You can work up to 24 hours per week"; those whose old permit shows 20 hours may still work up to 24 hours if eligible; the basis is IRPR section 186(v) |
| <https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500> (Department of Home Affairs Student visa 500) | Yes | "work up to 48 hours a fortnight when your course of study or training is in session"; research master's and PhD students and dependents have no work-hour cap |

Graded A: All four countries' sources are current immigration-authority pages or written rules, with numbers verifiable verbatim. Benefit magnitude "large" — freedom metric; working beyond the limit violates visa conditions and can lead to visa cancellation and deportation.

## Entry 4 (Full-Time Enrollment Is the Root of Work Eligibility)

| URL | Verification | Key points of original text |
|---|---|---|
| <https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/work-off-campus.html> | Yes | During an approved leave of absence, or during a transfer while not studying, off-campus work is not permitted; resumption of studies restores the right to work |
| <https://studyinthestates.dhs.gov/students/work/working-in-the-united-states> (DHS Study in the States) | Yes | On-campus employment is limited to F-1 students whose SEVIS status is Active; off-campus employment requires prior approval; cannot begin work while the I-765 is pending |
| <https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-student> (ST26.1) | Yes | Work permission is granted by course type; part-time courses do not permit employment |

Graded A. The Canada page states this most explicitly; the US and UK corroborate with their respective rules. Benefit magnitude "large", for the same reason as Entry 3.

## Entry 5 (US Address Change Report Within 10 Days)

| URL | Verification | Key points of original text |
|---|---|---|
| <https://www.ecfr.gov/current/title-8/chapter-I/subchapter-B/part-265/section-265.1> | Yes | Those subject to registration requirements must "within 10 days of such change" report the address change and new address to USCIS as required |
| <https://www.uscis.gov/ar-11> | Yes | AR-11 form page, explaining that address changes should be reported promptly to avoid missing documents |

Graded A: The 10-day limit is explicit in the regulation. Benefit magnitude "medium" — freedom metric, by the "avoid administrative penalty" tier; the actual consequence of missing documents is mostly procedural disadvantage, not at the criminal-liability level.

## Entry 6 (Ministry of Education Study-Abroad Alerts)

| URL | Verification | Key points of original text |
|---|---|---|
| <https://jsj.moe.gov.cn/n2/2/2/2001.shtml> | Yes | No. 1 of 2025 (2025-04-09), state-level higher education laws in the relevant US state contain negative clauses regarding China |
| <https://jsj.moe.gov.cn/n2/2/2/2030.shtml> | Yes | No. 2 (2025-07-18), the Philippines has poor public security and frequent crimes targeting Chinese citizens |
| <https://jsj.moe.gov.cn/n2/2/2/2035.shtml> | Yes | No. 3 (2025-08-30), reiterating the Philippines alert |
| <https://jsj.moe.gov.cn/n2/2/2/2060.shtml> | Yes | No. 4 (2025-11-16), Japan's security situation and study environment are unfavorable; careful planning of study in Japan is recommended |

Graded A: All four alerts' numbers, dates, and target countries are verified entry by entry. The body's Source field lists only No. 4 and No. 1 plus the column homepage, to keep the source line from being too long. Benefit magnitude "medium" — alerts are risk notices, not prohibitions, and do not directly correspond to a quantifiable consequence. **The alert list changes with circumstances; per the same convention as Section 21 in CLAUDE.md, this section is not maintained long-term.**

## Entry 7 (Australia OSHC)

| URL | Verification | Key points of original text |
|---|---|---|
| <https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500> | Yes | Must hold and continuously maintain OSHC, unless exempt; there may be no gap between the previous visa's insurance; those unable to prove insurance at entry may be refused entry; for those entering before the course begins, the insurance start date is the date of arrival in Australia |

Graded A. Benefit magnitude "medium" — money metric; the premium is in the thousands-to-tens-of-thousands-of-yuan range, on the boundary between "hundreds to thousands" and tens-of-thousands, set to medium. Cost label money=much (one-time payment over the visa term).

## Entry 8 (UK Visa Fee and Health Surcharge)

| URL | Verification | Key points of original text |
|---|---|---|
| <https://www.gov.uk/student-visa> | Yes | Both overseas applications and in-country extensions or switches are £558; those aged 18+ studying at degree level or above are typically allowed to stay up to 5 years; below degree, 2 years |
| <https://www.gov.uk/healthcare-immigration-application> | Yes | Students and their dependents £776 per year (a 2-year visa is £1,552); other applicants £1,035 per year; for stays over 6 months but less than 1 year, a full year is charged |

Graded A: The amounts are taken verbatim from current gov.uk pages. Benefit magnitude "medium" — money metric; the two together are on the order of thousands of RMB. The body does not convert to a specific RMB amount, only stating the order of magnitude "around ten-odd thousand yuan at current exchange rates" to avoid the figure becoming invalid with exchange-rate changes.

## Entry 9 (CSCSE Authentication Processing Time)

| URL | Verification | Key points of original text |
|---|---|---|
| <http://zwfw.cscse.edu.cn/> (CSCSE Online Service Hall) | Yes | The credential authentication process is real-name registration and authentication, submitting the application and materials, online payment, and evaluation and review; "authentication processing time 10–20 working days"; application materials include the diploma, passport or travel permit, residence card or visa endorsement, ID photo, and authorization declaration; entry-exit records are obtained by the system |

Graded A: The processing time and materials list are stated on the page. Benefit magnitude "medium", metric time — what's saved is the risk of missing a deadline, not daily time; by "one-time" this should be small, but the consequence of missing autumn recruitment or civil-service exam registration is calculated by the window, set to medium; this is a judgment call, not a mechanical application of the threshold, and is stated here per CLAUDE.md.

## Entry 10 (Enhanced Authentication Review List)

| URL | Verification | Key points of original text |
|---|---|---|
| <https://www.cscse.edu.cn/cscse/sy/tzgg/2025102809225023345/index.html> | Yes | "Announcement on Enhanced Authentication Review of Academic Degree Authentication for Certain Foreign Institutions (IX)", released 2025-10-28 |
| <https://www.cscse.edu.cn/> | Yes | The Notice column also lists "Important reminder on guarding against fraud conducted in the name of foreign academic degree authentication", "Announcement on the Handling of Invalid Foreign Academic Degree Authentication Certificates", and "Announcement on Suspending Acceptance of Academic Degree Authentication Applications for Phrom Khiri University, Thailand" |

Graded A: The announcement's title, number, and date can be verified verbatim. Benefit magnitude "medium" — money metric; the consequence is blocked or delayed authentication, not necessarily full loss of tuition, so "large" is not taken. The body does not name any specific institution (other than the one already named in the cited announcement title), to avoid inaccuracy as the list changes.

## What This Section Did Not Write

- The tax-filing obligations of each country (such as the US F-1 needing to file forms even with no income) — no verbatim verifiable official page was obtained this round; not written.
- The address-change reporting deadlines of Canada, the UK, and Australia differ; the original texts were not obtained country by country. Entry 5 only writes the US, with a note that the other three countries each have their own rules.
- The remedy procedures after a student visa is denied or status is lost (US reinstatement, etc.) were not written; these are specialized procedures that exceed this section's "lose out if you don't know" scope.
- Other study-abroad destination countries such as Japan, New Zealand, and Singapore were not within the scope of the reader's question and were not included.
