# Verification Record: Section 19 Add 4 Entries (Workplace Injury)

Verification date: 2026-09-07. Section 19 went from 6 to 10 entries; the section title changed from "Being Laid Off and Voluntarily Resigning" to "Being Laid Off, Resigning, and Workplace Injury"; the book went from 318 to 322 entries.

Workplace injury was previously the largest single-point gap in the entire book: Section 7, Entry 3 mentioned that workplace injury cases are within the scope of legal aid, but "how it is recognized, what the time limits are, how much is paid" was entirely absent. This money is an order of magnitude larger than the N for layoffs, and the deadlines are harder.

Method: `Invoke-WebRequest` was used to fetch the original bytes of the gov.cn gazette page, decode them as GB18030, strip tags, and compare article-by-article with the original legal text.

---

## I. Per-Entry Verified Original Text

All sources are the China Government Network gazette full text of the "Regulations on Work-Related Injury Insurance" (State Council Order No. 586, 2010 Revision) <https://www.gov.cn/gongbao/content/2011/content_1778064.htm>.

| Article | Verified original text | Used in |
| --- | --- | --- |
| Article 14 | Seven circumstances that "shall be recognized as a workplace injury", of which item (6) is the post-2010 revision wording: "Injured in a traffic accident or urban rail transit, passenger ferry, or train accident on the way to or from work for which the person is not principally responsible" | Entry 7 (being hit on the commute also counts) |
| Article 15 | "(1) Sudden death at work during working hours and in the workplace, or death within 48 hours after rescue proves ineffective" and two other circumstances "deemed a workplace injury" | Entry 7 Notes |
| Article 16 | "(1) Intentional crime; (2) drunkenness or drug use; (3) self-mutilation or suicide" may not be recognized | Entry 7 Notes |
| Article 17 | "The unit shall, within 30 days from the date of the accident injury or the diagnosis or appraisal of an occupational disease... submit an application for recognition of a workplace injury"; "Where the employer does not submit an application for recognition of a workplace injury in accordance with the preceding paragraph, the injured employee or a close relative, or a trade union organization may, within 1 year from the date of the accident injury or the diagnosis or appraisal of an occupational disease, directly submit an application for recognition of a workplace injury to the social insurance administrative department in the coordinating region where the employer is located"; "Where the employer fails to submit the application for recognition of a workplace injury within the time limit specified in the first paragraph of this Article, the workplace-injury benefits and other relevant costs incurred during that period in accordance with these Regulations shall be borne by the employer" | Entry 7's two time limits |
| Article 18 | Three application materials: the workplace injury recognition application form, the labor relationship proof, and the medical diagnosis certificate or occupational disease diagnosis certificate | Entry 7 Cost field |
| Article 19 | "Where the employee or a close relative considers it a workplace injury and the employer does not, the employer bears the burden of proof." | Entry 7 |
| Article 20 | "The social insurance administrative department shall make a decision on recognition of a workplace injury within 60 days from the date of accepting the application for recognition" | Entry 7 Source field |
| Articles 21 and 22 | "Where, after treatment, the condition is relatively stable and there is a disability affecting labor capacity, a labor capacity appraisal shall be conducted"; "Labor dysfunction is divided into ten disability grades, the most severe being Grade I and the least severe being Grade X" | Entry 9 |
| Article 36 | Grades 5 and 6: one-time disability allowance of 18 months and 16 months of the employee's own wages; if work cannot be arranged, a monthly disability allowance of 70% and 60% of the employee's own wages | Entry 9 |
| Article 37 | Grades 7 to 10: one-time disability allowance of 13, 11, 9, and 7 months of the employee's own wages; when the contract expires and is terminated or the employee requests termination, the fund pays a one-time workplace-injury medical allowance and the unit pays a one-time disability employment allowance, with the standards set by the provincial government | Entry 9 |
| Article 39 | "(1) Funeral allowance of 6 months of the average monthly wage of employees in the coordinating region for the previous year; (2) Survivor pension... spouse 40% per month, other relatives 30% per person per month, with an additional 10% on the above standard for orphans and elderly living alone... (3) One-time workplace-death allowance equal to 20 times the national urban residents' per capita disposable income for the previous year." | Entry 10 |
| Article 62 | Paragraph 2: "Where an employee of an employer that should participate in workplace-injury insurance according to the provisions of these Regulations but does not participate suffers a workplace injury, the employer shall pay the costs according to the workplace-injury benefits and standards provided in these Regulations." Paragraph 1: order to participate within a time limit, make up the arrears, "a late fee of five ten-thousandths per day; if still unpaid by the deadline, a fine of not less than one time and not more than three times the underpaid amount" | Entry 8 |

## II. Not Obtained / Not Adopted

| What we wanted | Result | Treatment |
| --- | --- | --- |
| The specific amount of the one-time workplace-death allowance for the current year | The 2025 national urban residents' per capita disposable income is needed. The State Council policy document library does not contain the statistical communiqué itself; the gov.cn interpretive articles only give "per capita disposable income actually grew by 5.0% year-on-year" without an absolute value; the latest release list on stats.gov.cn does not contain this entry | Entry 10 only writes the multiplier formula; the amount is marked TODO |
| Materials on controversies surrounding the 48-hour clause in practice | Only a large volume of second-hand commentary was found; no citable judgment documents or official positions were obtained | The body only states the article's original text and does not elaborate evaluatively |

## III. Metrics and Benefit Magnitude

All four entries have a money metric. The benefit magnitude is set per the money thresholds established since Section 8: the one-time disability allowance is converted based on monthly wages; even the lowest grade (Grade 10) is 7 months of wages; the workplace-death allowance is "20 times the national urban residents' per capita disposable income for the previous year", all above the ten-thousand-yuan level, so all are set to "large". On the cost side, recognition and appraisal themselves cost no money but require running the process and waiting for conclusions, so time is recorded as "medium"; Entry 8 (employer uninsured) additionally records "willpower=some", because the other side will most likely deny it and you have to push through to arbitration.
