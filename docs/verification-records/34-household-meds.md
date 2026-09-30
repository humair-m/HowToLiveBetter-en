# Section 34: Don't Get Into Trouble with Household Medicines

2026-09-29. Prompted by issue #43, a reader proposed adding a "guide to over-the-counter drug use," hoping the book would answer three areas: antipyretics and analgesics, gastrointestinal medicines, and cold remedies.

First checked existing coverage: the entire book only mentions OTC drugs in two places. Section 2's smoking-cessation entry mentions that nicotine replacement products are OTC, and Section 28 explains the classification and sales rules for prescription vs. OTC drugs. Not a single entry explains how to take these drugs safely when bought for self-use. After confirming with the user, Section 34 was opened.

Positioning: not a drug manual; does not say which drug for which illness. Only entries where "one action avoids a severe outcome" are accepted, 9 entries total. Metric is uniformly mortality (including endpoints such as liver failure, gastric bleeding, neonatal renal failure).

## Source-by-Source Verification

### Chinese Official Documents (all text extracted verbatim)

On nmpa.gov.cn, Invoke-WebRequest still returns 412, but **headless Chrome with a proxy can retrieve the rendered body text**, and attached .docx files can be downloaded directly via curl with a proxy, browser UA, and Referer.

| File | How obtained | Used in | Key points verified against the original |
| --- | --- | --- | --- |
| NMPA 2020 Announcement No. 15 (paracetamol label revision) | Reposted page from Hunan Provincial Medical Products Administration + .doc attachment 2, full text via antiword | Entry 1 | Attachment 2 (OTC) Precautions item 3: "It is recommended that the maximum daily oral dose of paracetamol not exceed 2 grams"; item 4: "Concomitant use with preparations containing paracetamol or other antipyretic and analgesic drugs should be avoided to prevent drug overdose or toxic synergy"; adverse reactions: "Overuse of paracetamol can cause severe liver injury." **The attachment contains no rule on alcohol consumption** — the alcohol sentence is quoted instead from US regulation. |
| Guoshiyaojianan [2011] No. 209 (management of oral nimesulide preparations) | NMPA original page, headless Chrome | Entry 2 | "Oral nimesulide preparations are prohibited for children under 12"; second-line use, max single dose 100 mg, treatment course no longer than 15 days |
| NMPA 2020 Announcement No. 34 (label revision for metamizole-related products) | NMPA original page + attachments 1–3 .docx | Entry 2 | All three revision requirements for metamizole tablets, compound artemisinin metamizole tablets, and Zhongganling tablets (capsules) contain "This product is contraindicated in adolescents and children under 18"; metamizole tablet warning language: "This product is generally not a first-choice drug and should only be used in acute and severe conditions when no other effective drug treatment is available"; adverse reactions include agranulocytosis, aplastic anemia, anaphylactic shock |
| NMPA 2021 Announcement No. 57 (label revision for 14 products including paracetamol-mephenteramine-codeine oral solution, etc.) | NMPA original page + attachment .doc | Entry 4 | List of 14 products verbatim; warning language: "Parents or guardians are not recommended to use this product on their own for infants under 2 years old; it should be used under the guidance of a physician or pharmacist"; precautions added: "Use strictly according to the dosage and usage in the package insert to avoid overdose", and old wording changed to: "Avoid concomitant use of cold remedies containing the same or similar active ingredients" |
| NMPA 2022 Announcement No. 68 (omeprazole enteric-coated tablets converted to OTC) and attachment 2 label template | NMPA original page + attachment .docx | Entry 6 | Indications: "For short-term relief of heartburn and acid reflux symptoms caused by excessive gastric acid"; precautions item 1 "Use for no more than 7 days", item 2 "Do not take again within two months", item 3 do not use if difficulty or pain swallowing, hematemesis, bloody stool or melena; item 13 alarm symptoms and exclusion of malignancy; item 18 avoid concomitant use with clopidogrel; item 29 those 55 and older with new or changing symptoms should consult a physician |

The widely circulated "from 2025, antitussives containing codeine and dextromethorphan are banned for children under 2" was only seen in secondhand restatements; the NMPA original was not found, so it was **not written**. The Jilin Provincial Medical Products Administration science page (reposted from a WeChat public account) lists "aspirin use with caution under 16, lysine aspirin banned under 3 months" and "Bupleuri injection contraindicated in children" — same reason, only public-account reposts, **not written**.

### US Regulations and Regulatory Documents

| File | Used in | Original text verified |
| --- | --- | --- |
| 21 CFR 201.326(a)(1)(iii)(A), current eCFR version | Entry 1 | Liver warning for adult OTC acetaminophen, must be the first item under Warnings; three scenarios: exceeding the maximum dose over 24 hours, with other drugs containing acetaminophen, 3 or more alcoholic drinks every day |
| 21 CFR 201.326(a)(2)(iii)(A) | Entry 3 | Six scenarios for the stomach bleeding warning: age 60 or older; stomach ulcers or bleeding problems; blood thinning (anticoagulant) or steroid drug; other drugs containing NSAIDs; 3 or more alcoholic drinks every day; take more or for a longer time than directed |
| FDA Drug Safety Communication 2020-10-15 (NSAIDs and pregnancy at 20 weeks) | Entry 5 | After 20 weeks can cause fetal renal problems and oligohydramnios; covers both prescription and OTC; FAERS as of 2017-07-21 has 35 cases, all serious, 5 neonatal deaths all with neonatal renal failure; most recover within 72 hours to 6 days after discontinuation; 81 mg low-dose aspirin excepted; OTC labels previously only warned about the last 3 months; "Many OTC medicines contain NSAIDs, including those used for pain, colds, flu, and insomnia"; "Other medicines, such as acetaminophen, are available" |

### English Literature (abstract original text retrieved from Europe PMC)

| Literature | Used in | Numbers verified |
| --- | --- | --- |
| Larson 2005, Hepatology 42(6):1364-1372, doi:10.1002/hep.20948 | Entry 1 | 22 centers, 6 years, 662 cases of acute liver failure; 275 (42%) were acetaminophen; median dose 24 g; 131 unintentional (48%); 38% of the unintentional group took two or more preparations simultaneously; 65% survived, 27% died without transplant, 8% transplanted |
| Belay 1999, NEJM 340(18):1377-1382, doi:10.1056/NEJM199905063401801 | Entry 2 | 1,207 cases under age 18 from 1981–1997; peak 555 cases in 1980, no more than 36 cases per year since 1987; 82% had measurable blood salicylate; case-fatality rate 31%; salicylate-class drug warnings began in 1980 |
| CNT Collaboration 2013, Lancet 382(9894):769-779, doi:10.1016/S0140-6736(13)60900-9 | Entry 3 | 280 NSAID-vs-placebo trials, 124,513 people; upper gastrointestinal complications ibuprofen 3.97 (2.22–7.10), naproxen 4.22 (2.71–6.56), diclofenac 1.89 (1.16–3.09); all NSAIDs roughly double heart-failure risk; conclusion refers to high-dose |
| Smith 2014, Cochrane CD001831.pub5 | Entry 4 | 29 trials (19 adult, 10 pediatric); in children, antitussives, antihistamines, antihistamine-decongestant combinations, and antitussive-bronchodilator combinations were all no better than placebo; 21 trials reported adverse reactions, more with antihistamines and dextromethorphan; one trial found honey better than placebo; not pooled |
| Kenealy 2025, Cochrane CD000247.pub4 | Entry 7 | Abstract reads "For this 2013 update"; 6 common-cold trials, 1147 people, RR 0.83 (0.60–1.14); adverse reactions 1.8 (1.01–3.21), adults 2.62 (1.32–5.18), children 0.91 (0.51–1.63); purulent rhinitis 0.73 (0.47–1.13), adverse reactions 1.46 (1.10–1.94) |
| Hahn 2002, Cochrane CD002847 | Entry 8 | 8 trials, planned intravenous fluids for low-osmolarity vs. standard oral rehydration salts OR 0.59 (0.45–0.79) |
| ICHD-3 (Cephalalgia 2018, doi:10.1177/0333102417738202) online version 8.2, 8.2.3, 8.2.5 | Entry 9 | 8.2 headache ≥15 days/month, overuse >3 months; 8.2.3 non-opioid analgesics ≥15 days/month, multiple non-opioid analgesics counted cumulatively; 8.2.5 combination analgesics ≥10 days/month, combination defined to include adjuvant ingredients such as caffeine; "more than half of people with headache on 15 or more days/month have" MOH; most improve after discontinuation, with better response to prophylactic treatment |

### World Health Organization

WHO (2005) The treatment of diarrhoea, 4th revision. iris.who.int is front-end rendered; retrieved the text layer of both English and Chinese versions via the DSpace API (`/server/api/pid/find?id=hdl:10665/43209` to get the uuid, then query bundles). Section 2.6 and Section 10.2: "antidiarrhoeal" drugs and antiemetics have no real benefit for acute or persistent diarrhea in children and must never be given to children under 5; antimotility drugs (loperamide, etc.) can cause severe paralytic ileus, can be fatal, and may prolong infection. Section 4.5.1: drinks with too much sugar (soft drinks, commercially available juice drinks) can cause hypernatremic dehydration. Total osmolarity of the low-osmolarity formula is 245 mOsm/l; planned intravenous fluids are 33% lower than the standard formula (311). Section 6: most bloody stools in children are caused by Shigella and require antibiotics.

## How Evidence Grade and Benefit Magnitude Were Determined

- A: Entry 3 (individual-patient-data meta-analysis, with RR), Entry 7 (Cochrane, with RR), Entry 8 (WHO manual + Cochrane with OR).
- B: Entries 1, 2, 5 use numbers from case registries, surveillance, or adverse-event reports, without controls; Entry 4 Cochrane did not pool; Entry 6 is a label requirement; Entry 9 is a diagnostic criterion.
- Benefit magnitude: Entry 1 set to large (acute liver failure, nearly 30% mortality); Entry 2 set to large (cases dropped from 555 to ≤36 after the warning, a reduction of more than 90%); Entry 3 set to large (upper GI complications about 4×, relative reduction far exceeds 20%). The remaining six entries' numbers cannot be directly converted into "how many percent fewer cases if you do this," so they are judged medium based on the severity of the outcome, with the reason given in each entry's Note. Entry 8 is explained in particular: the numbers on hand compare two rehydration-salt formulations, not drinking vs. not drinking, so the ≥20% mechanical threshold does not apply.

## What Was Not Written

- "2025 new rule" banning antitussives containing codeine and dextromethorphan for children under 2: only secondhand restatements; original not found.
- Specific weight-based doses for pediatric antipyretics, alternating ibuprofen and acetaminophen: package inserts differ; this section only points readers to physicians and pharmacists.
- Expired drugs, household medicine cabinet checklist: low consequence, poor cost-effectiveness.
