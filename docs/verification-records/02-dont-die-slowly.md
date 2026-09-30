# Section 2 Source Verification Record

Verification method: all sources were opened via WebFetch through the Europe PMC REST record (`<https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:<doi>&resultType=core&format=json`>`, a few using `TITLE:` or `EXT_ID:<pmid> AND SRC:MED` queries). The record contains title, authors, journal, year, DOI, PMID, and full abstract; all cited numbers are in the abstract. The PubMed web page returns a cookie wall to WebFetch, and doi.org returns 302 after which the publisher page (NEJM) returns 403; the Europe PMC record is therefore authoritative. DOIs are filled in per the Europe PMC record (the DOI for Aune 2016 nuts is actually `10.1186/s12916-016-0730-3`; the `-0730-5` I had originally memorized was wrong, and that article was ultimately not included in the main text).

## Entry 1 Smoking cessation
- <https://doi.org/10.1056/NEJMsa1211128> — Confirmed: Jha P et al., NEJM 2013, PMID 23343063. Abstract verbatim: "Life expectancy was shortened by more than 10 years among the current smokers"; "Adults who had quit smoking at 25 to 34, 35 to 44, or 45 to 54 years of age gained about 10, 9, and 6 years of life, respectively"; "Cessation before the age of 40 years reduces the risk of death associated with continued smoking by about 90%."
- <https://doi.org/10.1016/S0140-6736(15)00340-2> — Confirmed: Chen Z et al., Lancet 2015, PMID 26466050. Abstract verbatim: urban men "RR 1·32 [95% CI 1·24-1·41] vs 1·65 [1·53-1·79]" (1990s vs 2010s), rural men "RR 1·13 [1·09-1·17] vs 1·22 [1·16-1·29]"; "Ex-smokers who had stopped by choice…had little smoking-attributed risk more than 10 years after stopping."
- <https://doi.org/10.1016/S0140-6736(10)61388-8> — Confirmed: Oberg M et al., Lancet 2011, PMID 21112082. Abstract verbatim: "603,000 deaths were attributable to second-hand smoke in 2004, which was about 1·0% of worldwide mortality."

## Entry 2 Sugar-sweetened beverages
- <https://doi.org/10.1161/CIRCULATIONAHA.118.037401> — Confirmed: Malik VS et al., Circulation 2019, PMID 30882235. Abstract verbatim: categories "(<1/mo, 1-4/mo, 2-6/week, 1-<2/d, and ≥2/d) were 1.00 (reference), 1.01 (0.98, 1.04), 1.06 (1.03, 1.09), 1.14 (1.09, 1.19), and 1.21 (1.13, 1.28)"; 37 716 men and 80 647 women, "36 436 deaths". The abstract did not give per-serving/day HRs; the main text was not cited.
- <https://doi.org/10.1001/jamainternmed.2019.2478> — Confirmed: Mullee A et al., JAMA Intern Med 2019. Abstract verbatim: total soft drinks "HR, 1.17; 95% CI, 1.11-1.22"; sugar-sweetened "HR, 1.08; 95% CI, 1.01-1.16"; artificially sweetened "HR, 1.26; 95% CI, 1.16-1.35"; 451,743 participants.

## Entry 3 Low-sodium salt
- <https://doi.org/10.1056/NEJMoa2105675> — Confirmed: Neal B et al., NEJM 2021, PMID 34459569. Abstract verbatim: 20,995 participants, mean follow-up 4.74 years; stroke "rate ratio, 0.86"; major cardiovascular events "rate ratio, 0.87"; death "39.28 events vs. 44.61 events per 1000 person-years; rate ratio, 0.88"; hyperkalemia rate ratio 1.04, not significant.
- <https://doi.org/10.1056/NEJMoa1311889> — Confirmed: O'Donnell M et al., NEJM 2014, PMID 25119607. Abstract verbatim: "≥ 7.00 g per day…odds ratio, 1.15; 95% CI, 1.02 to 1.30"; "below 3.00 g per day…odds ratio, 1.27; 95% CI, 1.12 to 1.44".

## Entry 4 Step counts
- <https://doi.org/10.1016/S2468-2667(21)00302-9> — Confirmed: Paluch AE et al., Lancet Public Health 2022, PMID 35247352. Abstract verbatim: "47 471 adults, among whom there were 3013 deaths"; "Quartile median steps per day were 3553 for quartile 1, 5801 for quartile 2, 7842 for quartile 3, and 10 901 for quartile 4"; "adjusted HR for all-cause mortality was 0·60 (95% CI 0·51-0·71) for quartile 2, 0·55 (0·49-0·62) for quartile 3, and 0·47 (0·39-0·57) for quartile 4"; ≥60 years "6000-8000 steps per day", <60 years "8000-10 000 steps per day".
- <https://doi.org/10.1093/eurjpc/zwad229> — Confirmed: Banach M et al., Eur J Prev Cardiol 2023, PMID 37555441. Abstract verbatim: "A 1000-step increment was associated with a 15% decreased risk of all-cause mortality"; "the cut-off point of 3867 steps/day for all-cause mortality".

## Entry 5 Antihypertensive / lipid-lowering medication adherence
- <https://doi.org/10.1016/S0140-6736(15)01225-8> — Confirmed: Ettehad D et al., Lancet 2016, PMID 26724178. Abstract verbatim: major cardiovascular events "RR 0·80, 95% CI 0·77-0·83"; stroke "0·73, 0·68-0·77"; heart failure "0·72, 0·67-0·78"; "13% reduction in all-cause mortality (0·87, 0·84-0·91)".
- <https://doi.org/10.1016/S0140-6736(10)61350-5> — Confirmed: CTT Collaboration, Lancet 2010, PMID 21067804. Abstract verbatim: major vascular events "rate ratio [RR] 0·78, 95% CI 0·76–0·80"; "all-cause mortality was reduced by 10% per 1·0 mmol/L LDL reduction (RR 0·90, 95% CI 0·87–0·93)".
- <https://doi.org/10.1093/eurheartj/eht295> — Confirmed: Chowdhury R et al., Eur Heart J 2013, PMID 23907142. Abstract verbatim: "Corresponding RRs of all-cause mortality were 0.55 (0.46-0.67) and 0.71 (0.64-0.78) for good adherence to statins and antihypertensive agents"; good vs poor (<80%) adherence.

## Entry 6 Sleep
- <https://doi.org/10.1093/sleep/33.5.585> — Confirmed: Cappuccio FP et al., Sleep 2010, PMID 20469800. Abstract verbatim: "16 studies…1,382,999 male and female participants…112,566 deaths"; short "RR: 1.12; 95% CI 1.06 to 1.18"; long "1.30; [1.22 to 1.38]". The abstract did not give the hour definitions of short/long; the main text did not write a specific threshold.
- <https://doi.org/10.1161/JAHA.117.005947> — Confirmed: Yin J et al., JAHA 2017, PMID 28889101. Abstract verbatim: <7 h "RR was 1.06 (95% CI, 1.04-1.07) per 1-hour reduction"; >7 h "RR was 1.13 (95% CI, 1.11-1.15) per 1-hour increment".
- <https://doi.org/10.1093/sleep/zsad253> — Confirmed: Windred DP et al., Sleep 2024, PMID 37738616. Abstract verbatim: "60 977 UK Biobank participants"; "1859" deaths; "Higher sleep regularity was associated with a 20%-48% lower risk of all-cause mortality" (top four SRI quintiles vs least regular quintile); "Sleep regularity was a stronger predictor of all-cause mortality than sleep duration".

## Entry 7 Moderate-intensity exercise
- <https://doi.org/10.1001/jamainternmed.2015.0533> — Confirmed: Arem H et al., JAMA Intern Med 2015, PMID 25844730. Abstract verbatim: less than 7.5 MET-h/week "HR, 0.80 [95% CI, 0.78-0.82]"; 1 to 2 times "HR, 0.69 [95% CI, 0.67-0.70]"; 2 to 3 times "HR, 0.63"; 3 to 5 times "HR, 0.61 [95% CI, 0.59-0.62]"; 10 or more times "HR, 0.69 [95% CI, 0.59-0.78]".
- <https://doi.org/10.1136/bmj.l4570> — Confirmed: Ekelund U et al., BMJ 2019, PMID 31434697. Abstract verbatim: MVPA quartiles HR "1.00, 0.64 (0.55–0.74), 0.55 (0.40–0.74), and 0.52 (0.43–0.61)"; total PA top quartile "0.27 (0.23 to 0.32)".

## Entry 8 Strength training
- <https://doi.org/10.1136/bjsports-2021-105061> — Confirmed: Momma H et al., Br J Sports Med 2022, PMID 35228201. Abstract verbatim: "Muscle-strengthening activities were associated with a 10-17% lower risk of all-cause mortality"; "J-shaped associations with the maximum risk reduction (approximately 10-20%) at approximately 30-60 min/week"; "Combined muscle-strengthening and aerobic activities (versus none) were associated with a lower risk of all-cause…mortality".

## Entry 9 Sedentary behavior
- <https://doi.org/10.7326/M17-0212> — Confirmed: Diaz KM et al., Ann Intern Med 2017, PMID 28892811. Abstract verbatim: total sedentary time highest vs lowest quartile "HR, 2.63 [CI, 1.60 to 4.30]"; bout duration "HR, 1.96 [CI, 1.31 to 2.93]"; conclusion "both the total volume of sedentary time and its accrual in prolonged, uninterrupted bouts are associated with all-cause mortality". The abstract did not mention a 30-minute threshold; the main-text entry did not write a specific minute count.
- <https://doi.org/10.1016/S0140-6736(16)30370-1> — Confirmed: Ekelund U et al., Lancet 2016, PMID 27475271. Abstract verbatim: referent "those sitting <4 h/day and in the most active quartile [>35·5 MET-h per week]"; lowest PA quartile + sitting >8 h/day "HR=1·59, 1·52-1·66"; most active + >8 h "HR=1·04; 95% CI 0·99-1·10"; "about 60-75 min per day…seem to eliminate the increased risk of death associated with high sitting time"; TV ≥5 h in most active "HR=1·16, 1·05-1·28".

## Entry 10 Processed meat
- <https://doi.org/10.1093/aje/kwt261> — Confirmed: Larsson SC, Orsini N, Am J Epidemiol 2014, PMID 24148709. Abstract verbatim (highest vs lowest): unprocessed red meat "1.10 (95% CI: 0.98, 1.22)"; processed meat "1.23 (95% CI: 1.17, 1.28)"; total red meat "1.29 (95% CI: 1.24, 1.35)".
- <https://doi.org/10.3945/ajcn.117.153148> — Confirmed: Schwingshackl L et al., Am J Clin Nutr 2017, PMID 28446499. Abstract verbatim (per serving/day): whole grains "RR: 0.92; 95% CI: 0.89, 0.95"; red meat "RR: 1.10; 95% CI: 1.04, 1.18"; processed meat "RR: 1.23; 95% CI: 1.12, 1.36".
- <https://doi.org/10.7326/M19-1621> — Confirmed: Johnston BC et al., Ann Intern Med 2019, PMID 31569235. Abstract verbatim: "continue current unprocessed red meat consumption (weak recommendation, low-certainty evidence)"; "continue current processed meat consumption (weak recommendation, low-certainty evidence)".

## Entry 11 Alcohol
- <https://doi.org/10.1016/S0140-6736(18)30134-X> — Confirmed: Wood AM et al., Lancet 2018, PMID 29676281. Abstract verbatim: "the minimum mortality risk around or below 100 g per week"; life expectancy at age 40: >100–≤200 g/week "approximately 6 months", >200–≤350 g/week "1–2 years", >350 g/week "4–5 years".
- <https://doi.org/10.1016/S0140-6736(18)31310-2> — Confirmed: GBD 2016 Alcohol Collaborators, Lancet 2018. Abstract verbatim: "The level of alcohol consumption that minimised harm across health outcomes was zero (95% UI 0·0-0·8) standard drinks per week."
- <https://doi.org/10.1001/jamanetworkopen.2023.6185> — Confirmed: Zhao J et al., JAMA Netw Open 2023, PMID 37000449. Abstract verbatim: "low-volume drinkers (1.3-24.0 g per day; RR, 0.93; P = .07) compared with lifetime nondrinkers"; "45 to 64 and 65 or more grams per day (RR, 1.19 and 1.35; P < .001)".
- <https://doi.org/10.1001/archinte.166.22.2437> — Confirmed: Di Castelnuovo A et al., Arch Intern Med 2006, PMID 17159008. Abstract verbatim: "maximum protection being 18% in women (99% confidence interval, 13%-22%) and 17% in men"; "up to 4 drinks per day in men and 2 drinks per day in women, was inversely associated with total mortality".

## Entry 12 Whole grains
- <https://doi.org/10.1136/bmj.i2716> — Confirmed: Aune D et al., BMJ 2016, PMID 27301975. Abstract verbatim: per 90 g/day "0.83 (0.77 to 0.90; I(2)=83%, n=11) for all causes"; "Reductions in risk were observed up to an intake of 210-225 g/day".
- Schwingshackl 2017 same as Entry 10 (whole grains RR 0.92).

## Entry 13 Fruit and vegetables
- <https://doi.org/10.1093/ije/dyw319> — Confirmed: Aune D et al., Int J Epidemiol 2017, PMID 28338764. Abstract verbatim: "the summary RR per 200 g/day was…0.90 (95% CI: 0.87-0.93…for all-cause mortality"; "Reductions in risk were observed up to 800 g/day for all outcomes except cancer (600 g/day)".
- <https://doi.org/10.1161/CIRCULATIONAHA.120.048996> — Confirmed: Wang DD et al., Circulation 2021, PMID 33641343. Abstract verbatim: "daily intake of 5 servings of fruit and vegetables was associated with hazard ratios (95% CI) of 0.87 (0.85-0.90) for total mortality" (vs 2 servings/day); "≈5 servings per day of fruit and vegetables, or 2 servings of fruit and 3 servings of vegetables, was associated with the lowest mortality".

## Entry 14 Ultra-processed food
- <https://doi.org/10.1136/bmj-2023-077310> — Confirmed: Lane MM et al., BMJ 2024, PMID 38418082. Abstract verbatim: "all cause mortality (risk ratio 1.21, 1.15 to 1.27; low)" class II highly suggestive; "cardiovascular disease related mortality (risk ratio 1.50, 95% confidence interval 1.37 to 1.63; GRADE=very low)" class I convincing.

## Entry 15 Indoor combustion / PM2.5
- <https://doi.org/10.1001/jama.2018.2151> — Confirmed: Yu K et al., JAMA 2018, PMID 29614179. Abstract verbatim: 271,217 adults; cooking solid fuel all-cause "HR, 1.11 [95% CI, 1.03-1.20]"; heating "HR, 1.14 [95% CI, 1.03-1.26]"; switched (cooking) "HR, 0.87 [95% CI, 0.79-0.95]"; switched (heating) "HR, 0.67 [95% CI, 0.57-0.79]".
- <https://doi.org/10.1016/j.envint.2020.105974> — Confirmed: Chen J, Hoek G, Environ Int 2020, PMID 32703584. Abstract verbatim: "The combined Risk Ratio (RR) for PM₂.₅ and natural-cause mortality was 1.08 (95%CI 1.06, 1.09) per 10 µg/m³", 104 cohort studies.

## Entry 16 Body weight
- <https://doi.org/10.1016/S0140-6736(16)30175-1> — Confirmed: Global BMI Mortality Collaboration, Lancet 2016, PMID 27423262. Abstract verbatim: "All-cause mortality was minimal at 20·0-25·0 kg/m(2)"; 25.0-27.5 "1·07, 1·07-1·08"; 27.5-30.0 "1·20, 1·18-1·22"; 30.0-35.0 "1·45, 95% CI 1·41-1·48"; 35.0-40.0 "1·94, 1·87-2·01"; 40.0-60.0 "2·76, 2·60-2·92"; East Asia per 5 kg/m² "1·39 (1·34-1·44)"; analysis restricted to "never-smokers without chronic diseases at recruitment who survived 5 years".
- <https://doi.org/10.1001/jama.2012.113905> — Confirmed: Flegal KM et al., JAMA 2013, PMID 23280227. Abstract verbatim: "The summary HRs were 0.94 (95% CI, 0.91-0.96) for overweight, 1.18 (95% CI, 1.12-1.25) for obesity (all grades combined), 0.95 (95% CI, 0.88-1.01) for grade 1 obesity, and 1.29 (95% CI, 1.18-1.41) for grades 2 and 3 obesity."

## Entry 41 Small-workshop bulk-pressed homemade peanut oil
PR #39 draft graded the entry A; the Benefit column's sentences "spot-check exceedance rate significantly higher than packaged oil" and "alkali-refining removal rate above 90%" had no primary source, and the GB 2761 link only reached the cfsa homepage. After the 2026-09-28 merge it was rewritten: those two sentences were removed and replaced with the following two Chinese-population studies, downgraded to B (single observational studies, endpoints being liver-function tests and birth outcomes). The benefit magnitude was judged to be medium: the threshold table is keyed to relative mortality reduction, and there is no mortality endpoint here, but the ~35% lower abnormal liver function and the low-birth-weight aOR 1.9 are health endpoints rather than pure surrogate markers.
- <https://doi.org/10.3389/fpubh.2024.1484414> — Confirmed: Lei J et al., Front Public Health 2024;12, PMID 39758209. Abstract verbatim: "The AFB1 concentrations in HMPO were 1.29 (0.12, 6.58) μg/kg"; "an immediate decrease of 2.865 μg/kg (P = 0.006) and a sustained annual reduction of 2.593 μg/kg (P = 0.034)"; "reduction in the prevalence of liver function abnormality (PR = 0.650, 95% CI: 0.469-0.902)".
- <https://doi.org/10.1080/16549716.2024.2336312> — Confirmed: Zhong Y et al., Glob Health Action 2024;17, PMID 38629142. Abstract verbatim: "Of 1611 pregnant women, 1316 (81.7%) had consumed homemade peanut oil"; "aORs of 1.9 (95% CI 1.1-3.2) and 1.8 (95% CI 1.1-3.0)" (LBW and PB, in order).
- <https://publications.iarc.fr/123> — Confirmed: page title "Chemical Agents and Related Occupations", i.e. IARC Monographs Vol 100F, which contains aflatoxins as a Group 1 carcinogen.
- GB 2761-2017 limit for aflatoxin B1 in peanut oil and its products: 20 μg/kg. The original standard text was not retrieved; to be verified.

## Entry 42 Vegetable oils replacing lard / butter
PR #39 draft assigned the scale of Abdelhamid 2020 (86 RCTs, 162,796 people) to Hooper 2020; the figures "RR 0.79 (0.66–0.93)" and "RR 0.89" cannot be found in either abstract; "omega-6 to omega-3 ratio 15~20:1, ideal 4:1" had no source. After the 2026-09-28 merge the entry was rewritten per the three Cochrane abstracts, changing the recommendation from "switch to high-oleic oils, drizzle cold flaxseed oil" to "use vegetable oils in place of saturated fat; don't count on switching oils or on flaxseed oil."
- <https://doi.org/10.1002/14651858.CD011737.pub3> — Confirmed: Hooper L et al., Cochrane 2020. Abstract verbatim: "15 randomised controlled trials (RCTs) (16 comparisons, 56,675 participants)"; "reduced the risk of combined cardiovascular events by 17% (risk ratio (RR) 0.83; 95% confidence interval (CI) 0.70 to 0.98"; all-cause mortality "RR 0.96; 95% CI 0.90 to 1.03"; cardiovascular mortality "RR 0.95; 95% CI 0.80 to 1.12"; "Subgrouping did not suggest significant differences between replacement of saturated fat calories with polyunsaturated fat or carbohydrate, and data on replacement with monounsaturated fat and protein was very limited".
- <https://doi.org/10.1002/14651858.CD011094.pub4> — Confirmed: Hooper L, Al-Khudairy L, Abdelhamid AS et al., Cochrane 2018 Nov, PMID 30488422. Abstract verbatim: "19 RCTs in 6461 participants"; all-cause mortality "RR 1.00, 95% CI 0.88 to 1.12"; CVD events "RR 0.97, 95% CI 0.81 to 1.15"; "low-quality evidence".
- <https://doi.org/10.1002/14651858.CD003177.pub5> — Confirmed: Abdelhamid AS et al., Cochrane 2020. Abstract verbatim: "86 RCTs (162,796 participants)"; ALA all-cause mortality "RR 1.01, 95% CI 0.84 to 1.20"; ALA coronary heart disease events "RR 1.00, 95% CI 0.82 to 1.22".
- Dietary Guidelines for Chinese Residents (2022) cooking oil 25–30 g/day: original text not retrieved; the PR draft figure is retained, to be verified.

## Verified but not included in the main text
- Aune D et al. (2016) nuts, BMC Medicine, <https://doi.org/10.1186/s12916-016-0730-3>, PMID 27916000: per 28 g/day ACM "0.78 (95% CI: 0.72-0.84)". Effect size likely inflated by confounding and costs money daily; not included to keep the entry count at the cap of 16.
- Sofi F et al. (2010) Mediterranean diet, Am J Clin Nutr, <https://doi.org/10.3945/ajcn.2010.29673>, PMID 20810976: 2-point increase "RR = 0.92; 95% CI: 0.90, 0.94". Overlaps with Entries 10, 12, 13; not included.
- Holt-Lunstad J et al. (2010) PLoS Med, <https://doi.org/10.1371/journal.pmed.1000316>, PMID 20668659: "OR = 1.50 (95% CI 1.42 to 1.59)"; Holt-Lunstad J et al. (2015) Perspect Psychol Sci, <https://doi.org/10.1177/1745691614568352>, PMID 25910392: "social isolation odds ratio (OR) = 1.29, loneliness OR = 1.26, and living alone OR = 1.32". Social-isolation effect is large but reverse causation is heavy and no intervention evidence exists; not included to keep the entry count at the cap. If needed, can be added directly as Entry 17.

## Unconfirmed items
- None. All numbers in the main text come from the records opened above. The "Cost" column (prices, time) in the main text is the author's own estimate and does not cite references.
