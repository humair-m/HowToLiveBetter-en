# سیکشن 6 ماخذ کی تصدیق کا ریکارڈ

تصدیق کے طریقے کا نوٹ: doi.org سب 302 redirects واپس کرتے ہیں؛ JAMA/NEJM/Elsevier/Wiley/ACP/RSNA/Nature کے پبلشر پیجز WebFetch پر 403 واپس کرتے ہیں، اور PubMed پیجز صرف cookie prompts واپس کرتے ہیں۔ ابسٹریکٹس یکساں طور پر Europe PMC official REST interface (`<https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:<doi>&resultType=core&format=json`>` کے ذریعے تصدیق کیے گئے، جو PubMed-sourced bibliographic records اور abstractText واپس کرتا ہے)؛ چند ایک نے NCBI E-utilities efetch استعمال کیا۔ نیچے "حقیقتاً کھولا گیا URL" وہ پتہ ہے جس سے WebFetch نے تصدیق کے دوران کامیابی سے مواد واپس کیا۔ تمام DOIs Europe PMC ریکارڈ میں عنوان/مصنفین/سال سے one-to-one میچ کرتے ہیں۔

## اندراج 1 ملٹی وٹامنز

- ماخذ A: Sesso HD et al. 2012 JAMA, DOI 10.1001/jama.2012.14805
  - حقیقتاً کھولا گیا: Europe PMC REST (DOI query)۔ عنوان "Multivitamins in the prevention of cardiovascular disease in men: the Physicians' Health Study II randomized controlled trial", 2012, JAMA سے میچ کرتا ہے۔ تصدیق شدہ۔
  - اعداد کا ماخذ (ابسٹریکٹ): "14,641 male US physicians" "median follow-up 11.2 years" "major cardiovascular events … HR, 1.01; 95% CI, 0.91-1.10; P = .91" "total mortality … HR, 0.94; 95% CI, 0.88-1.02; P = .13"
- ماخذ B: USPSTF 2022 JAMA, DOI 10.1001/jama.2022.8970
  - حقیقتاً کھولا گیا: <https://jamanetwork.com/journals/jama/fullarticle/2793446> (doi.org redirect target، direct fetch کامیاب)۔ عنوان "Vitamin, Mineral, and Multivitamin Supplementation to Prevent Cardiovascular Disease and Cancer: US Preventive Services Task Force Recommendation Statement", 2022, JAMA 327(23) سے میچ کرتا ہے۔ تصدیق شدہ۔
  - اعداد کا ماخذ: "Multivitamin trials reviewed: 9 RCTs involving 51,550 participants showed no association between multivitamin supplementation and all-cause mortality"; multivitamin grade I؛ beta-carotene / vitamin E grade D ("recommends against the use of beta carotene or vitamin E supplements for the prevention of cardiovascular disease or cancer"); beta-carotene "Increased lung cancer risk (RR 1.18) in smokers/asbestos-exposed workers" (یہ سیکشن 1.18 کو براہ راست حوالہ نہیں دیتا)۔
- نوٹ میں counter-source: Gaziano JM et al. 2012 JAMA, DOI 10.1001/jama.2012.14641
  - حقیقتاً کھولا گیا: <https://pubmed.ncbi.nlm.nih.gov/?term=10.1001%2Fjama.2012.14641> (اس PubMed fetch نے ابسٹریکٹ کامیابی سے واپس کیا)۔ عنوان "Multivitamins in the prevention of cancer in men: the Physicians' Health Study II randomized controlled trial" سے میچ کرتا ہے۔ تصدیق شدہ۔
  - اعداد کا ماخذ: "hazard ratio [HR], 0.92; 95% CI, 0.86-0.998; P=.04" "HR, 0.88; 95% CI, 0.77-1.01; P=.07"

## اندراج 2 فش آئل

- Manson JE et al. 2019 NEJM, DOI 10.1056/NEJMoa1811403
  - حقیقتاً کھولا گیا: Europe PMC REST (DOI query)۔ عنوان "Marine n-3 Fatty Acids and Prevention of Cardiovascular Disease and Cancer", 2019, NEJM سے میچ کرتا ہے۔ تصدیق شدہ۔
  - اعداد کا ماخذ: "25,871 participants" "1 g/day" "median follow-up of 5.3 years" "major cardiovascular events … hazard ratio, 0.92; 95% CI, 0.80 to 1.06; P=0.24" "Death from any cause … hazard ratio was 1.02 (95% CI, 0.90 to 1.15)"
- ASCEND Study Collaborative Group 2018 NEJM, DOI 10.1056/NEJMoa1804989
  - حقیقتاً کھولا گیا: Europe PMC REST۔ عنوان "Effects of n-3 Fatty Acid Supplements in Diabetes Mellitus", 2018, NEJM سے میچ کرتا ہے۔ تصدیق شدہ۔
  - اعداد کا ماخذ: "15,480 patients with diabetes without atherosclerotic cardiovascular disease" "1-gram capsules daily" "Mean 7.4 years" "rate ratio, 0.97; 95% CI, 0.87 to 1.08; P=0.55" "All-cause mortality: rate ratio, 0.95; 95% CI, 0.86 to 1.05"
- Counter: Bhatt DL et al. 2019 NEJM, DOI 10.1056/NEJMoa1812792
  - حقیقتاً کھولا گیا: <https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=30415628&rettype=abstract&retmode=text> (Europe PMC میں اس اندراج کے لیے کوئی abstractText نہیں تھا، اس لیے NCBI efetch استعمال کیا گیا)۔ عنوان "Cardiovascular Risk Reduction with Icosapent Ethyl for Hypertriglyceridemia", REDUCE-IT Investigators, NEJM 2019 (PMID 30415628) سے میچ کرتا ہے۔ تصدیق شدہ۔
  - اعداد کا ماخذ: "hazard ratio was 0.75 (95% CI, 0.68–0.83; P<0.001)" "17.2% of the icosapent ethyl group versus 22.0% of the placebo group" "2 g of icosapent ethyl twice daily (total daily dose, 4 g)" "established cardiovascular disease or diabetes … statin therapy, fasting triglycerides of 135–499 mg/dL" "8,179 patients"

## اندراج 3 وٹامن ڈی

- Manson JE et al. 2019 NEJM, DOI 10.1056/NEJMoa1809944
  - حقیقتاً کھولا گیا: Europe PMC REST۔ عنوان "Vitamin D Supplements and Prevention of Cancer and Cardiovascular Disease", 2019, NEJM سے میچ کرتا ہے۔ تصدیق شدہ۔
  - اعداد کا ماخذ: "2000 IU daily" "25,871" "Median 5.3 years" "Invasive cancer: hazard ratio, 0.96; 95% CI, 0.88 to 1.06; P=0.47" "Major cardiovascular events: hazard ratio, 0.97; 95% CI, 0.85 to 1.12; P=0.69" "Death from any cause: hazard ratio was 0.99 (95% CI, 0.87 to 1.12)"
- Neale RE et al. 2022 Lancet Diabetes Endocrinol, DOI 10.1016/S2213-8587(21)00345-4
  - حقیقتاً کھولا گیا: Europe PMC REST (DOI query خالی واپس آیا؛ TITLE:"D-Health Trial" AND AUTH:Neale سے دوبارہ query کیا گیا؛ واپس کردہ ریکارڈ کا DOI field 10.1016/S2213-8587(21)00345-4 ہے، لکھے ہوئے DOI سے میچ کرتا ہے)۔ عنوان "The D-Health Trial: a randomised controlled trial of the effect of vitamin D on mortality", 2022 سے میچ کرتا ہے۔ تصدیق شدہ۔
  - اعداد کا ماخذ: "21 315 participants, including 10 662 to the vitamin D group and 10 653 to the placebo group" "60 000 IU per month for 5 years" "1100 deaths were recorded (placebo 538 [5·1%]; vitamin D 562 [5·3%])" "HR … 1.04 [95% CI 0·93 to 1·18]; p=0·47" "median follow-up 5·7 years" "Australians 60 years or older who were recruited across the country via the Commonwealth electoral roll" (دوسرے fetch پر لفظ بہ لفظ تصدیق شدہ؛ اس لیے اندراج "60 years and above" لکھتا ہے، بغیر مخصوص اوپری حد کے)۔

## اندراج 4 اینٹی آکسیڈنٹ سپلیمنٹس

- Bjelakovic G et al. 2012 Cochrane, DOI 10.1002/14651858.CD007176.pub2
  - حقیقتاً کھولا گیا: Europe PMC REST۔ عنوان "Antioxidant supplements for prevention of mortality in healthy participants and patients with various diseases", 2012, Cochrane Database Syst Rev سے میچ کرتا ہے۔ تصدیق شدہ۔
  - اعداد کا ماخذ: "78 trials, 296,707 participants" "RR 1.02, 95% CI 0.98 to 1.05 (random-effects)" "Low risk of bias trials (56 trials, 244,056 participants): RR 1.04, 95% CI 1.01 to 1.07" "Beta-carotene: RR 1.05, 95% CI 1.01 to 1.09" "Vitamin E: RR 1.03, 95% CI 1.00 to 1.05"
- ATBC Study Group 1994 NEJM, DOI 10.1056/NEJM199404143301501
  - حقیقتاً کھولا گیا: Europe PMC REST۔ عنوان "The effect of vitamin E and beta carotene on the incidence of lung cancer and other cancers in male smokers", 1994, NEJM سے میچ کرتا ہے۔ تصدیق شدہ۔
  - اعداد کا ماخذ: "29,133 male smokers" "20 mg per day" "change in incidence, 18 percent; 95 percent confidence interval, 3 to 36 percent" "8 percent higher (95 percent confidence interval, 1 to 16 percent)"
- Omenn GS et al. 1996 NEJM, DOI 10.1056/NEJM199605023341802
  - حقیقتاً کھولا گیا: Europe PMC REST۔ عنوان "Effects of a combination of beta carotene and vitamin A on lung cancer and cardiovascular disease", 1996, NEJM سے میچ کرتا ہے۔ تصدیق شدہ۔
  - اعداد کا ماخذ: "18,314 smokers, former smokers, and asbestos-exposed workers" "relative risk of lung cancer of 1.28 (95 percent confidence interval, 1.04 to 1.57; P=0.02)" "relative risk of death from any cause was 1.17 (95 percent confidence interval, 1.03 to 1.33)"
- USPSTF D-grade نوٹ میں: اندراج 1 ماخذ B کے مماثل، تصدیق شدہ۔

## اندراج 5 گلوکوزامائن/کونڈروائٹن

- Clegg DO et al. 2006 NEJM, DOI 10.1056/NEJMoa052771
  - حقیقتاً کھولا گیا: Europe PMC REST۔ عنوان "Glucosamine, chondroitin sulfate, and the two in combination for painful knee osteoarthritis", 2006, NEJM سے میچ کرتا ہے۔ تصدیق شدہ۔
  - اعداد کا ماخذ: "1,583 patients" "placebo (60.1%)" "Glucosamine: 3.9 percentage points higher (P=0.30)" "Chondroitin sulfate: 5.3 percentage points higher (P=0.17)" "Combined treatment: 6.5 percentage points higher (P=0.09)" "Celecoxib: 10.0 percentage points higher (P=0.008)" "moderate-to-severe pain at baseline … 79.2 percent vs. 54.3 percent, P=0.002"; second fetch لفظ بہ لفظ تصدیق "… or placebo for 24 weeks" اور "Exploratory analyses suggest that the combination of glucosamine and chondroitin sulfate may be effective in the subgroup of patients with moderate-to-severe knee pain"۔

## اندراج 6 وٹامن سی

- Hemilä H, Chalker E 2013 Cochrane, DOI 10.1002/14651858.CD000980.pub4
  - حقیقتاً کھولا گیا: Europe PMC REST۔ عنوان "Vitamin C for preventing and treating the common cold", 2013 سے میچ کرتا ہے۔ تصدیق شدہ۔
  - اعداد کا ماخذ: "pooled RR was 0.97 (95% confidence interval (CI) 0.94 to 1.00)" "29 trial comparisons with 11,306 participants" "In adults, colds shortened by 8% (3% to 12%); in children by 14% (7% to 21%)" "No consistent effect of vitamin C was seen on the duration or severity of colds in the therapeutic trials"۔ نوٹ میں extreme physical stress والی آبادیوں کے اعداد second-fetch-verified جملے سے آئے ہیں: "Five trials involving a total of 598 marathon runners, skiers and soldiers on subarctic exercises yielded a pooled RR of 0.48 (95% CI 0.35 to 0.64)"۔

## اندراج 7 whole-body PET-CT / ٹیومر مارکرز

- USPSTF 2018 JAMA, DOI 10.1001/jama.2017.21926
  - حقیقتاً کھولا گیا: <https://pubmed.ncbi.nlm.nih.gov/29450531/> (اس attempt پر کامیاب)۔ عنوان "Screening for Ovarian Cancer: US Preventive Services Task Force Recommendation Statement", 2018, JAMA, DOI 10.1001/jama.2017.21926 سے میچ کرتا ہے۔ تصدیق شدہ۔ (میرا پہلے نوٹ کردہ DOI، 10.1001/jama.2018.0938، غلط تھا؛ صحیح DOI WebSearch سے ملا اور تصدیق ہوا۔)
  - حقیقتاً کھولا گیا: <https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/ovarian-cancer-screening>۔ تصدیق شدہ۔
  - اعداد کا ماخذ (سرکاری پیج لفظ بہ لفظ): "No difference was found in ovarian cancer mortality … with 0.34% in the screening group and 0.29% in the usual care group (relative risk, 1.18 [95% CI, 0.82 to 1.71])" "Surgery to investigate positive screening test results among women who ultimately did not have ovarian cancer occurred in 0.2% of participants in the UK Pilot CA-125 group, 0.97% … 3.25% of participants in the UKCTOCS ultrasound group, and 3.17% of participants in the PLCO CA-125 plus ultrasound group" "Up to 15% of these women had major surgical complications"
- Furtado CD et al. 2005 Radiology, DOI 10.1148/radiol.2372041741
  - حقیقتاً کھولا گیا: Europe PMC REST۔ عنوان "Whole-body CT screening: spectrum of findings and recommendations in 1192 patients", 2005, Radiology سے میچ کرتا ہے۔ تصدیق شدہ۔
  - اعداد کا ماخذ: "1030 (86%) of 1192 subjects had at least one abnormal finding" "Four hundred forty-five (37%) patients received at least one recommendation for additional evaluation" "most findings were benign by description and required no further evaluation"

## اندراج 8 فٹنیس ٹریکرز

- Jakicic JM et al. 2016 JAMA, DOI 10.1001/jama.2016.12858
  - حقیقتاً کھولا گیا: Europe PMC REST۔ عنوان "Effect of Wearable Technology Combined With a Lifestyle Intervention on Long-term Weight Loss: The IDEA Randomized Clinical Trial", 2016, JAMA سے میچ کرتا ہے۔ تصدیق شدہ۔
  - اعداد کا ماخذ: "estimated mean weight loss, 3.5 kg [95% CI, 2.6-4.5] in the enhanced intervention group and 5.9 kg [95% CI, 5.0-6.8] in the standard intervention group; difference, 2.4 kg [95% CI, 1.0-3.7]; P = .002" "471 randomized participants"

## اندراج 9 آرگینک فوڈ

- Smith-Spangler C et al. 2012 Ann Intern Med, DOI 10.7326/0003-4819-157-5-201209040-00007
  - حقیقتاً کھولا گیا: Europe PMC REST۔ عنوان "Are organic foods safer or healthier than conventional alternatives?: a systematic review", 2012, Annals of Internal Medicine سے میچ کرتا ہے۔ تصدیق شدہ۔
  - اعداد کا ماخذ: "17 studies in humans and 223 studies of nutrient and contaminant levels in foods met inclusion criteria" "The published literature lacks strong evidence that organic foods are significantly more nutritious than conventional foods" "risk difference, 30%" (pesticide residues) "Only 3 human studies examined clinical outcomes, finding no significant differences … for allergic outcomes or symptomatic infection"۔ ابسٹریکٹ میں "antibiotic-resistant … risk difference, 33%" بھی شامل ہے؛ یہ سیکشن اسے حوالہ نہیں دیتا۔ "Detection does not equal exceedance" میری phrasing ہے؛ ابسٹریکٹ کا اصل متن residue detection کے risk difference کے بارے میں ہے اور حد سے تجاوز کرنے والے تناسب کا ذکر نہیں کرتا۔

## اندراج 10 ہیلتھ سپلیمنٹس

- State Administration for Market Regulation press conference page
  - حقیقتاً کھولا گیا: <https://www.samr.gov.cn/tssps/sjdt/tpxw/art/2023/art_4b658b824b1b4b0ba57c09a56cc93aad.html>۔ پیج کا عنوان "Special Press Conference by the State Administration for Market Regulation on the 'Guide to Warning Word Labeling of Health Foods' and the 'Administrative Measures for Health Food Raw Material Catalogs and Health Function Catalogs'" (市场监管总局就《保健食品标注警示用语指南》和《保健食品原料目录与保健功能目录管理办法》有关情况举办专题新闻发布会), press conference on 2019-08-20, samr.gov.cn official site۔ تصدیق شدہ۔
  - حوالہ شدہ متن: "Health foods are not drugs and cannot replace drugs in the treatment of diseases" (保健食品不是药物，不能代替药物治疗疾病); "the warning area shall occupy no less than 20% of its layout" (警示区面积不少于其所在版面的20%); "supplement dietary nutrients, maintain and improve the body's health status, or reduce risk factors for disease" (补充膳食营养物质、维持改善机体健康状态或者降低疾病发生风险因素)۔
  - غیر مصدقہ: announcement original-text page <https://gkml.samr.gov.cn/nsjg/tssps/201908/t20190820_306116.html> نے لگاتار چار WebFetch attempts پر "Socket is closed" واپس کیا، اور gov.cn repost page 404 واپس کرتا ہے؛ اس لیے ماخذ صرف کامیابی سے کھلا ہوا samr.gov.cn press conference page ہے۔

## اندراج 11 پروبائیوٹکس

- Khalesi S et al. 2019 Eur J Clin Nutr, DOI 10.1038/s41430-018-0135-9
  - حقیقتاً کھولا گیا: Europe PMC REST۔ عنوان "A review of probiotic supplementation in healthy adults: helpful or hype?", 2019, European Journal of Clinical Nutrition سے میچ کرتا ہے۔ تصدیق شدہ۔
  - حوالہ شدہ متن: "45" studies; "this review failed to support the ability of probiotics to cause persistent changes in gut microbiota, or improve lipid profile in healthy adults"; microbiota میں تبدیلیاں "transient"; slight improvement والے میٹرکس "stool consistency, bowel movement, and vaginal lactobacilli concentration"۔

## اندراج 12 کولڈ شاورز

- Buijze GA et al. 2016 PLOS ONE, DOI 10.1371/journal.pone.0161749
  - حقیقتاً کھولا گیا: <https://journals.plos.org/plosone/doi?id=10.1371/journal.pone.0161749>۔ عنوان "The Effect of Cold Showering on Health and Work: A Randomized Controlled Trial", 2016 سے میچ کرتا ہے۔ تصدیق شدہ۔
  - اعداد کا ماخذ: "3,018 individuals" "30, 60, or 90 seconds" "29% reduction … (IRR: 0.71, P = 0.003)" "For illness days there was no significant group effect" "no clinically relevant differences in quality of life, work productivity, anxiety"
- Cain T et al. 2025 PLOS ONE, DOI 10.1371/journal.pone.0317615
  - حقیقتاً کھولا گیا: <https://journals.plos.org/plosone/doi?id=10.1371/journal.pone.0317615>۔ عنوان "Effects of cold-water immersion on health and wellbeing: A systematic review and meta-analysis", 2025 سے میچ کرتا ہے۔ تصدیق شدہ۔
  - حوالہ شدہ متن: "Eleven randomized controlled trials encompassing 3,177 total participants" "significant increases in inflammation immediately…and 1 hour post CWI" "no meaningful immediate or delayed immune changes" "a significant reduction in stress…12 hours post-CWI" "current evidence base is constrained by few RCTs, small sample sizes"۔

## اندراج 13 ڈیٹاکس / الکلائن

- Klein AV, Kiat H 2015 J Hum Nutr Diet, DOI 10.1111/jhn.12286
  - حقیقتاً کھولا گیا: Europe PMC REST۔ عنوان "Detox diets for toxin elimination and weight management: a critical review of the evidence", 2015 سے میچ کرتا ہے۔ تصدیق شدہ۔
  - حوالہ شدہ متن: "Although the detox industry is booming, there is very little clinical evidence to support the use of these diets" "no randomised controlled trials have been conducted to assess the effectiveness of commercial detox diets in humans"
- Fenton TR, Huang T 2016 BMJ Open, DOI 10.1136/bmjopen-2015-010438
  - حقیقتاً کھولا گیا: Europe PMC REST (DOI query)۔ عنوان "Systematic review of the association between dietary acid load, alkaline water and cancer", 2016, BMJ Open سے میچ کرتا ہے۔ تصدیق شدہ۔ (میرا پہلے نوٹ کردہ DOI، 10.1136/bmjopen-2016-010438، غلط تھا، اور doi.org نے 404 واپس کیا؛ WebSearch اور Europe PMC دونوں نے 2015-010438 دیا، جسے درست کر دیا گیا۔)
  - حوالہ شدہ متن: "8278 citations were identified, and 252 abstracts were reviewed; 1 study met the inclusion criteria" "no association between the diet acid load with bladder cancer (OR=1.15: 95% CI 0.86 to 1.55, p=0.36)" "Promotion of alkaline diet and alkaline water to the public for cancer prevention or treatment is not justified"۔

## اندراج 14 دن میں آٹھ گلاس پانی

- Valtin H 2002 Am J Physiol Regul Integr Comp Physiol, DOI 10.1152/ajpregu.00365.2002
  - حقیقتاً کھولا گیا: Europe PMC REST (journals.physiology.org 403 واپس کرتا ہے)۔ عنوان ""Drink at least eight glasses of water a day." Really? Is there scientific evidence for "8 x 8"?", Heinz Valtin, 2002 سے میچ کرتا ہے۔ تصدیق شدہ۔
  - حوالہ شدہ متن: "No scientific studies were found in support of 8 x 8. Rather, surveys of food and fluid intake on thousands of adults…strongly suggest that such large amounts are not needed"۔

## غور کیے گئے مگر شامل نہ کیے گئے امیدوار

- Oral collagen: موجودہ meta-analyses زیادہ تر small-sample اور industry-funded ہیں positive-leaning direction کے ساتھ؛ اس سیکشن کے "evidence shows no effect" کے موقف پر فٹ نہیں بہتا؛ شامل نہیں کیا گیا۔
- Air purifiers/water purifiers: تصدیق نہیں ہوئے؛ کوئی hard-endpoint ثبوت نہیں ملا؛ شامل نہیں کیا گیا۔
- Early rising خود: نیند کی باقاعدگی سے الگ کرنا مشکل ہے؛ کوئی براہ راست controlled ثبوت نہیں ملا؛ شامل نہیں کیا گیا۔
- Multitasking / Pomodoro: کوئی براہ راست ثبوت نہیں؛ ضروریات کے مطابق شامل نہیں کیا گیا۔
