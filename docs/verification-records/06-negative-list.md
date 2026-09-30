# Section 6 Source Verification Record

Verification method note: doi.org all return 302 redirects; publisher pages of JAMA/NEJM/Elsevier/Wiley/ACP/RSNA/Nature return 403 to WebFetch, and PubMed pages return only cookie prompts. Abstracts were verified uniformly through the Europe PMC official REST interface (`<https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:<doi>&resultType=core&format=json`>`, which returns PubMed-sourced bibliographic records and abstractText); a few used NCBI E-utilities efetch. "URL actually opened" below is the address from which WebFetch successfully returned content during verification. All DOIs match the title/authors/year one-to-one in the Europe PMC record.

## Entry 1 Multivitamins

- Source A: Sesso HD et al. 2012 JAMA, DOI 10.1001/jama.2012.14805
  - Actually opened: Europe PMC REST (DOI query). Title matches "Multivitamins in the prevention of cardiovascular disease in men: the Physicians' Health Study II randomized controlled trial", 2012, JAMA. Confirmed.
  - Number source (abstract): "14,641 male US physicians" "median follow-up 11.2 years" "major cardiovascular events … HR, 1.01; 95% CI, 0.91-1.10; P = .91" "total mortality … HR, 0.94; 95% CI, 0.88-1.02; P = .13"
- Source B: USPSTF 2022 JAMA, DOI 10.1001/jama.2022.8970
  - Actually opened: <https://jamanetwork.com/journals/jama/fullarticle/2793446> (doi.org redirect target, direct fetch successful). Title matches "Vitamin, Mineral, and Multivitamin Supplementation to Prevent Cardiovascular Disease and Cancer: US Preventive Services Task Force Recommendation Statement", 2022, JAMA 327(23). Confirmed.
  - Number source: "Multivitamin trials reviewed: 9 RCTs involving 51,550 participants showed no association between multivitamin supplementation and all-cause mortality"; multivitamin grade I; beta-carotene / vitamin E grade D ("recommends against the use of beta carotene or vitamin E supplements for the prevention of cardiovascular disease or cancer"); beta-carotene "Increased lung cancer risk (RR 1.18) in smokers/asbestos-exposed workers" (this section does not directly cite 1.18).
- Counter-source in notes: Gaziano JM et al. 2012 JAMA, DOI 10.1001/jama.2012.14641
  - Actually opened: <https://pubmed.ncbi.nlm.nih.gov/?term=10.1001%2Fjama.2012.14641> (that PubMed fetch returned the abstract successfully). Title matches "Multivitamins in the prevention of cancer in men: the Physicians' Health Study II randomized controlled trial". Confirmed.
  - Number source: "hazard ratio [HR], 0.92; 95% CI, 0.86-0.998; P=.04" "HR, 0.88; 95% CI, 0.77-1.01; P=.07"

## Entry 2 Fish oil

- Manson JE et al. 2019 NEJM, DOI 10.1056/NEJMoa1811403
  - Actually opened: Europe PMC REST (DOI query). Title matches "Marine n-3 Fatty Acids and Prevention of Cardiovascular Disease and Cancer", 2019, NEJM. Confirmed.
  - Number source: "25,871 participants" "1 g/day" "median follow-up of 5.3 years" "major cardiovascular events … hazard ratio, 0.92; 95% CI, 0.80 to 1.06; P=0.24" "Death from any cause … hazard ratio was 1.02 (95% CI, 0.90 to 1.15)"
- ASCEND Study Collaborative Group 2018 NEJM, DOI 10.1056/NEJMoa1804989
  - Actually opened: Europe PMC REST. Title matches "Effects of n-3 Fatty Acid Supplements in Diabetes Mellitus", 2018, NEJM. Confirmed.
  - Number source: "15,480 patients with diabetes without atherosclerotic cardiovascular disease" "1-gram capsules daily" "Mean 7.4 years" "rate ratio, 0.97; 95% CI, 0.87 to 1.08; P=0.55" "All-cause mortality: rate ratio, 0.95; 95% CI, 0.86 to 1.05"
- Counter: Bhatt DL et al. 2019 NEJM, DOI 10.1056/NEJMoa1812792
  - Actually opened: <https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=30415628&rettype=abstract&retmode=text> (Europe PMC had no abstractText for this entry, so NCBI efetch was used instead). Title matches "Cardiovascular Risk Reduction with Icosapent Ethyl for Hypertriglyceridemia", REDUCE-IT Investigators, NEJM 2019 (PMID 30415628). Confirmed.
  - Number source: "hazard ratio was 0.75 (95% CI, 0.68–0.83; P<0.001)" "17.2% of the icosapent ethyl group versus 22.0% of the placebo group" "2 g of icosapent ethyl twice daily (total daily dose, 4 g)" "established cardiovascular disease or diabetes … statin therapy, fasting triglycerides of 135–499 mg/dL" "8,179 patients"

## Entry 3 Vitamin D

- Manson JE et al. 2019 NEJM, DOI 10.1056/NEJMoa1809944
  - Actually opened: Europe PMC REST. Title matches "Vitamin D Supplements and Prevention of Cancer and Cardiovascular Disease", 2019, NEJM. Confirmed.
  - Number source: "2000 IU daily" "25,871" "Median 5.3 years" "Invasive cancer: hazard ratio, 0.96; 95% CI, 0.88 to 1.06; P=0.47" "Major cardiovascular events: hazard ratio, 0.97; 95% CI, 0.85 to 1.12; P=0.69" "Death from any cause: hazard ratio was 0.99 (95% CI, 0.87 to 1.12)"
- Neale RE et al. 2022 Lancet Diabetes Endocrinol, DOI 10.1016/S2213-8587(21)00345-4
  - Actually opened: Europe PMC REST (DOI query returned empty; re-queried with TITLE:"D-Health Trial" AND AUTH:Neale; the returned record's DOI field is 10.1016/S2213-8587(21)00345-4, matching the written DOI). Title matches "The D-Health Trial: a randomised controlled trial of the effect of vitamin D on mortality", 2022. Confirmed.
  - Number source: "21 315 participants, including 10 662 to the vitamin D group and 10 653 to the placebo group" "60 000 IU per month for 5 years" "1100 deaths were recorded (placebo 538 [5·1%]; vitamin D 562 [5·3%])" "HR … 1.04 [95% CI 0·93 to 1·18]; p=0·47" "median follow-up 5·7 years" "Australians 60 years or older who were recruited across the country via the Commonwealth electoral roll" (verified verbatim on the second fetch; the entry therefore writes "60 years and above", without a specific upper limit).

## Entry 4 Antioxidant supplements

- Bjelakovic G et al. 2012 Cochrane, DOI 10.1002/14651858.CD007176.pub2
  - Actually opened: Europe PMC REST. Title matches "Antioxidant supplements for prevention of mortality in healthy participants and patients with various diseases", 2012, Cochrane Database Syst Rev. Confirmed.
  - Number source: "78 trials, 296,707 participants" "RR 1.02, 95% CI 0.98 to 1.05 (random-effects)" "Low risk of bias trials (56 trials, 244,056 participants): RR 1.04, 95% CI 1.01 to 1.07" "Beta-carotene: RR 1.05, 95% CI 1.01 to 1.09" "Vitamin E: RR 1.03, 95% CI 1.00 to 1.05"
- ATBC Study Group 1994 NEJM, DOI 10.1056/NEJM199404143301501
  - Actually opened: Europe PMC REST. Title matches "The effect of vitamin E and beta carotene on the incidence of lung cancer and other cancers in male smokers", 1994, NEJM. Confirmed.
  - Number source: "29,133 male smokers" "20 mg per day" "change in incidence, 18 percent; 95 percent confidence interval, 3 to 36 percent" "8 percent higher (95 percent confidence interval, 1 to 16 percent)"
- Omenn GS et al. 1996 NEJM, DOI 10.1056/NEJM199605023341802
  - Actually opened: Europe PMC REST. Title matches "Effects of a combination of beta carotene and vitamin A on lung cancer and cardiovascular disease", 1996, NEJM. Confirmed.
  - Number source: "18,314 smokers, former smokers, and asbestos-exposed workers" "relative risk of lung cancer of 1.28 (95 percent confidence interval, 1.04 to 1.57; P=0.02)" "relative risk of death from any cause was 1.17 (95 percent confidence interval, 1.03 to 1.33)"
- USPSTF D-grade in notes: same as Entry 1 source B, confirmed.

## Entry 5 Glucosamine/chondroitin

- Clegg DO et al. 2006 NEJM, DOI 10.1056/NEJMoa052771
  - Actually opened: Europe PMC REST. Title matches "Glucosamine, chondroitin sulfate, and the two in combination for painful knee osteoarthritis", 2006, NEJM. Confirmed.
  - Number source: "1,583 patients" "placebo (60.1%)" "Glucosamine: 3.9 percentage points higher (P=0.30)" "Chondroitin sulfate: 5.3 percentage points higher (P=0.17)" "Combined treatment: 6.5 percentage points higher (P=0.09)" "Celecoxib: 10.0 percentage points higher (P=0.008)" "moderate-to-severe pain at baseline … 79.2 percent vs. 54.3 percent, P=0.002"; second fetch confirmed verbatim "… or placebo for 24 weeks" and "Exploratory analyses suggest that the combination of glucosamine and chondroitin sulfate may be effective in the subgroup of patients with moderate-to-severe knee pain".

## Entry 6 Vitamin C

- Hemilä H, Chalker E 2013 Cochrane, DOI 10.1002/14651858.CD000980.pub4
  - Actually opened: Europe PMC REST. Title matches "Vitamin C for preventing and treating the common cold", 2013. Confirmed.
  - Number source: "pooled RR was 0.97 (95% confidence interval (CI) 0.94 to 1.00)" "29 trial comparisons with 11,306 participants" "In adults, colds shortened by 8% (3% to 12%); in children by 14% (7% to 21%)" "No consistent effect of vitamin C was seen on the duration or severity of colds in the therapeutic trials". The numbers in the note for populations under extreme physical stress come from the second-fetch-verified sentence: "Five trials involving a total of 598 marathon runners, skiers and soldiers on subarctic exercises yielded a pooled RR of 0.48 (95% CI 0.35 to 0.64)".

## Entry 7 Whole-body PET-CT / tumor markers

- USPSTF 2018 JAMA, DOI 10.1001/jama.2017.21926
  - Actually opened: <https://pubmed.ncbi.nlm.nih.gov/29450531/> (successful on that attempt). Title matches "Screening for Ovarian Cancer: US Preventive Services Task Force Recommendation Statement", 2018, JAMA, DOI 10.1001/jama.2017.21926. Confirmed. (The DOI I originally noted, 10.1001/jama.2018.0938, was wrong; the correct DOI was found via WebSearch and verified.)
  - Actually opened: <https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/ovarian-cancer-screening>. Confirmed.
  - Number source (official page verbatim): "No difference was found in ovarian cancer mortality … with 0.34% in the screening group and 0.29% in the usual care group (relative risk, 1.18 [95% CI, 0.82 to 1.71])" "Surgery to investigate positive screening test results among women who ultimately did not have ovarian cancer occurred in 0.2% of participants in the UK Pilot CA-125 group, 0.97% … 3.25% of participants in the UKCTOCS ultrasound group, and 3.17% of participants in the PLCO CA-125 plus ultrasound group" "Up to 15% of these women had major surgical complications"
- Furtado CD et al. 2005 Radiology, DOI 10.1148/radiol.2372041741
  - Actually opened: Europe PMC REST. Title matches "Whole-body CT screening: spectrum of findings and recommendations in 1192 patients", 2005, Radiology. Confirmed.
  - Number source: "1030 (86%) of 1192 subjects had at least one abnormal finding" "Four hundred forty-five (37%) patients received at least one recommendation for additional evaluation" "most findings were benign by description and required no further evaluation"

## Entry 8 Fitness trackers

- Jakicic JM et al. 2016 JAMA, DOI 10.1001/jama.2016.12858
  - Actually opened: Europe PMC REST. Title matches "Effect of Wearable Technology Combined With a Lifestyle Intervention on Long-term Weight Loss: The IDEA Randomized Clinical Trial", 2016, JAMA. Confirmed.
  - Number source: "estimated mean weight loss, 3.5 kg [95% CI, 2.6-4.5] in the enhanced intervention group and 5.9 kg [95% CI, 5.0-6.8] in the standard intervention group; difference, 2.4 kg [95% CI, 1.0-3.7]; P = .002" "471 randomized participants"

## Entry 9 Organic food

- Smith-Spangler C et al. 2012 Ann Intern Med, DOI 10.7326/0003-4819-157-5-201209040-00007
  - Actually opened: Europe PMC REST. Title matches "Are organic foods safer or healthier than conventional alternatives?: a systematic review", 2012, Annals of Internal Medicine. Confirmed.
  - Number source: "17 studies in humans and 223 studies of nutrient and contaminant levels in foods met inclusion criteria" "The published literature lacks strong evidence that organic foods are significantly more nutritious than conventional foods" "risk difference, 30%" (pesticide residues) "Only 3 human studies examined clinical outcomes, finding no significant differences … for allergic outcomes or symptomatic infection". The abstract also includes "antibiotic-resistant … risk difference, 33%"; this section does not cite that. "Detection does not equal exceedance" is my phrasing; the abstract's original text is about the risk difference of residue detection and does not mention the proportion exceeding limits.

## Entry 10 Health supplements

- State Administration for Market Regulation press conference page
  - Actually opened: <https://www.samr.gov.cn/tssps/sjdt/tpxw/art/2023/art_4b658b824b1b4b0ba57c09a56cc93aad.html>. Page title "Special Press Conference by the State Administration for Market Regulation on the 'Guide to Warning Word Labeling of Health Foods' and the 'Administrative Measures for Health Food Raw Material Catalogs and Health Function Catalogs'" (市场监管总局就《保健食品标注警示用语指南》和《保健食品原料目录与保健功能目录管理办法》有关情况举办专题新闻发布会), press conference on 2019-08-20, samr.gov.cn official site. Confirmed.
  - Cited text: "Health foods are not drugs and cannot replace drugs in the treatment of diseases" (保健食品不是药物，不能代替药物治疗疾病); "the warning area shall occupy no less than 20% of its layout" (警示区面积不少于其所在版面的20%); "supplement dietary nutrients, maintain and improve the body's health status, or reduce risk factors for disease" (补充膳食营养物质、维持改善机体健康状态或者降低疾病发生风险因素).
  - Unconfirmed: the announcement original-text page <https://gkml.samr.gov.cn/nsjg/tssps/201908/t20190820_306116.html> returned "Socket is closed" on four consecutive WebFetch attempts, and the gov.cn repost page returns 404; the source is therefore only the successfully opened samr.gov.cn press conference page.

## Entry 11 Probiotics

- Khalesi S et al. 2019 Eur J Clin Nutr, DOI 10.1038/s41430-018-0135-9
  - Actually opened: Europe PMC REST. Title matches "A review of probiotic supplementation in healthy adults: helpful or hype?", 2019, European Journal of Clinical Nutrition. Confirmed.
  - Cited text: "45" studies; "this review failed to support the ability of probiotics to cause persistent changes in gut microbiota, or improve lipid profile in healthy adults"; changes in microbiota "transient"; metrics with slight improvement "stool consistency, bowel movement, and vaginal lactobacilli concentration".

## Entry 12 Cold showers

- Buijze GA et al. 2016 PLOS ONE, DOI 10.1371/journal.pone.0161749
  - Actually opened: <https://journals.plos.org/plosone/doi?id=10.1371/journal.pone.0161749>. Title matches "The Effect of Cold Showering on Health and Work: A Randomized Controlled Trial", 2016. Confirmed.
  - Number source: "3,018 individuals" "30, 60, or 90 seconds" "29% reduction … (IRR: 0.71, P = 0.003)" "For illness days there was no significant group effect" "no clinically relevant differences in quality of life, work productivity, anxiety"
- Cain T et al. 2025 PLOS ONE, DOI 10.1371/journal.pone.0317615
  - Actually opened: <https://journals.plos.org/plosone/doi?id=10.1371/journal.pone.0317615>. Title matches "Effects of cold-water immersion on health and wellbeing: A systematic review and meta-analysis", 2025. Confirmed.
  - Cited text: "Eleven randomized controlled trials encompassing 3,177 total participants" "significant increases in inflammation immediately…and 1 hour post CWI" "no meaningful immediate or delayed immune changes" "a significant reduction in stress…12 hours post-CWI" "current evidence base is constrained by few RCTs, small sample sizes".

## Entry 13 Detox / alkaline

- Klein AV, Kiat H 2015 J Hum Nutr Diet, DOI 10.1111/jhn.12286
  - Actually opened: Europe PMC REST. Title matches "Detox diets for toxin elimination and weight management: a critical review of the evidence", 2015. Confirmed.
  - Cited text: "Although the detox industry is booming, there is very little clinical evidence to support the use of these diets" "no randomised controlled trials have been conducted to assess the effectiveness of commercial detox diets in humans"
- Fenton TR, Huang T 2016 BMJ Open, DOI 10.1136/bmjopen-2015-010438
  - Actually opened: Europe PMC REST (DOI query). Title matches "Systematic review of the association between dietary acid load, alkaline water and cancer", 2016, BMJ Open. Confirmed. (The DOI I originally noted, 10.1136/bmjopen-2016-010438, was wrong, and doi.org returned 404; both WebSearch and Europe PMC gave 2015-010438, which was corrected.)
  - Cited text: "8278 citations were identified, and 252 abstracts were reviewed; 1 study met the inclusion criteria" "no association between the diet acid load with bladder cancer (OR=1.15: 95% CI 0.86 to 1.55, p=0.36)" "Promotion of alkaline diet and alkaline water to the public for cancer prevention or treatment is not justified".

## Entry 14 Eight glasses of water a day

- Valtin H 2002 Am J Physiol Regul Integr Comp Physiol, DOI 10.1152/ajpregu.00365.2002
  - Actually opened: Europe PMC REST (journals.physiology.org returns 403). Title matches ""Drink at least eight glasses of water a day." Really? Is there scientific evidence for "8 x 8"?", Heinz Valtin, 2002. Confirmed.
  - Cited text: "No scientific studies were found in support of 8 x 8. Rather, surveys of food and fluid intake on thousands of adults…strongly suggest that such large amounts are not needed".

## Candidates considered but not included

- Oral collagen: existing meta-analyses are mostly small-sample and industry-funded with a positive-leaning direction; does not fit this section's stance of "evidence shows no effect"; not included.
- Air purifiers/water purifiers: not verified; no hard-endpoint evidence found; not included.
- Early rising itself: hard to disentangle from sleep regularity; no direct controlled evidence found; not included.
- Multitasking / Pomodoro: no direct evidence; per requirements not included.
