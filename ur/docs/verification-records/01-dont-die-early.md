# سیکشن 1 ماخذ کی تصدیق کا ریکارڈ

تصدیق کی تاریخ 2026-09-07۔ زیادہ تر پبلشر سائٹس (NEJM, Elsevier, Wiley, BMJ, AHA) WebFetch کو 403 واپس کرتی ہیں؛ ان حوالہ جات کو Europe PMC REST انٹرفیس (`<https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:">..."&resultType=core&format=json`>) کے ذریعے پڑھا گیا تاکہ متعلقہ DOI ریکارڈ کا عنوان، مصنفین، جرنل، سال، اور مکمل ابسٹریکٹ حاصل کیا جا سکے؛ doi.org خود بھی حل کرتا ہے (پبلشر پر 302)۔ نیچے دیا گیا "اصل متن" ابسٹریکٹس/مکمل متن سے لفظ بہ لفظ نکلی ہوئی جملے ہیں۔

## 1. سیٹ بیلٹ
- <https://crashstats.nhtsa.dot.gov/Api/Public/ViewPublication/813573> — کھولا گیا (PDF کو pdftotext کے ذریعے متن میں تبدیل کیا گیا)۔ عنوان "Occupant Protection in Passenger Vehicles: 2022 Data, DOT HS 813 573, May 2024" میچ کرتا ہے۔
  - اصل متن: "Fifty percent of passenger vehicle occupants killed in traffic crashes in 2022 were unrestrained (based on known restraint use)."
  - اصل متن: "lap/shoulder seat belts, when used, reduce the risk of: fatal injury to front-seat passenger car occupants by 45 percent; … fatal injury to front-seat light-truck occupants by 60 percent"
  - اصل متن: "60 percent of those in the second row were unrestrained."
- <https://www.who.int/news-room/fact-sheets/detail/road-traffic-injuries> — کھولا گیا۔ اصل متن: "Wearing a seat-belt can reduce the risk of death among vehicle occupants by up to 50%."
- <https://ghoapi.azureedge.net/api/RS_196?$filter=SpatialDim%20eq%20%27CHN%27> — کھولا گیا (WHO GHO API)۔ چین 2021: 248,099 (95% CI 233,685–262,513)۔ RS_198 بھی اسی طرح کھولا گیا: 2021 میں 17.4/100,000۔
  - نوٹ: GHO انٹرفیس RS_196 کے لیے مطلق اعداد اور RS_198 کے لیے ریٹس واپس کرتا ہے، جو میٹرک نمبرنگ سے میری توقع کے بالکل برعکس ہے؛ اعداد خود واپس کردہ JSON سے لیے گئے ہیں۔

## 2. ہیلمٹ
- <https://doi.org/10.1002/14651858.CD004333.pub3> — doi.org Wiley پر حل ہوتا ہے (403)؛ Europe PMC ریکارڈ کی تصدیق ہوئی: Liu BC, 2008, "Helmets for preventing injury in motorcycle riders"۔
  - اصل متن: "helmets were estimated to reduce the risk of death by 42% (OR 0.58, 95% CI 0.50 to 0.68)"; "reduce the risk of head injury by 69% (OR 0.31, 95% CI 0.25 to 0.38)"

## 3. اسموک الارم / کاربن مونو آکسائیڈ
- <https://doi.org/10.1001/jama.279.20.1633> — Europe PMC ریکارڈ کی تصدیق ہوئی: Marshall SW, Runyan CW et al., JAMA 1998, "Fatal residential fires: who dies and who survives?"۔
  - اصل متن: "Overall, a functioning smoke detector lowered the risk of death (OR, 0.39; 95% CI, 0.18-0.83)."
- <https://www.usfa.fema.gov/downloads/pdf/statistics/v22i2.pdf> — کھولا گیا (PDF کو متن میں تبدیل کیا گیا)۔ عنوان "Fatal Fires in Residential Buildings (2018-2020), Topical Fire Report Series June 2022 Vol 22 Issue 2" میچ کرتا ہے۔
  - اصل متن: "Smoke alarms were not present in 24% of fatal fires in occupied residential buildings."; "The leading human factor contributing to the ignition of fatal fires in residential buildings was being 'asleep' (41%)."
- <https://doi.org/10.46234/ccdcw2020.008> — doi.org weekly.chinacdc.cn پر حل ہوتا ہے (صرف میٹاڈیٹا)؛ مکمل متن Europe PMC PMC8392909 fullTextXML کے ذریعے پڑھا گیا۔ مصنفین You J, Liu J, Zhou M, China CDC Weekly 2020۔
  - اصل متن: "In 2018, there were 11,523 deaths caused by carbon monoxide poisoning reported in China"; "highest proportions occurring in December (72.59%), January (67.42%), and February (66.48%)"
- اپنایا نہیں گیا: NFPA کے "Smoke Alarms in US Home Fires" پیج نے صرف عنوان واپس کیا، رپورٹ PDF نے 500 واپس کیا، تصدیق نہیں ہو سکی، اس لیے NFPA کا "55% کم اموات" والا عدد حوالہ نہیں دیا گیا۔

## 4. بلڈ پریشر
- <https://doi.org/10.1016/S0140-6736(15)01225-8> — Elsevier پیج صرف Redirecting دکھاتا ہے؛ Europe PMC ریکارڈ کی تصدیق ہوئی: Ettehad D, Lancet 2016۔
  - اصل متن: "relative risk [RR] 0·80, 95% CI 0·77-0·83" (major cardiovascular events); "stroke (0·73, 0·68-0·77)"; "heart failure (0·72, 0·67-0·78)"; "a significant 13% reduction in all-cause mortality (0·87, 0·84-0·91)"
  - اصل متن: "We identified 123 studies with 613,815 participants for the tabular meta-analysis."
- <https://doi.org/10.1016/S0140-6736(17)32478-9> — Europe PMC ریکارڈ کی تصدیق ہوئی: Lu J, Lancet 2017, China PEACE Million Persons Project۔
  - اصل متن: "44·7% (95% CI 44·6-44·8) of the sample had hypertension, of whom 44·7% (44·6-44·8) were aware of their diagnosis, 30·1% (30·0-30·2) were taking prescribed antihypertensive medications, and 7·2% (7·1-7·2) had achieved control"

## 5. اسپیڈنگ نہیں، نشے میں ڈرائیونگ نہیں
- <https://www.who.int/news-room/fact-sheets/detail/road-traffic-injuries> — کھولا گیا۔
  - اصل متن: "Every 1% increase in mean speed produces a 4% increase in the fatal crash risk."; "The risk of a road traffic crash starts at low levels of blood alcohol concentration (BAC)."

## 6. چائلڈ سیفٹی سیٹ
- NHTSA 813573 (اندراج 1 کے مماثل)۔ اصل متن: "NHTSA has estimated that car seats reduce the risk of fatal injury by 71 percent for infants (younger than 1 year old) and by 54 percent for toddlers (1 to 4 years old) in passenger cars."
- WHO روڈ ٹریفک فیکٹ شیٹ (اوپر کے مماثل)۔ اصل متن: "The use of child restraints can lead to a 71% reduction in deaths among infants."

## 7. ڈوبنا
- <https://doi.org/10.1136/ip.2010.028688> — doi.org injuryprevention.bmj.com پر حل ہوتا ہے (403)؛ Europe PMC ریکارڈ کی تصدیق ہوئی: Cummings P, Mueller BA, Quan L. Injury Prevention 2011;17(3):156-159, PMID 20889519۔
  - اصل متن: "The adjusted RR was 0.51 (95% CI 0.35 to 0.74)."
  - نوٹ: میرے پہلے نوٹ کردہ DOI (…028381) غلط تھا، doi.org نے 404 واپس کیا؛ Europe PMC کی طرف سے دیے گئے …028688 میں درست کر دیا گیا۔
- <https://doi.org/10.46234/ccdcw2023.198> — weekly.chinacdc.cn پر حل ہوتا ہے؛ مکمل متن Europe PMC PMC10689961 کے ذریعے پڑھا گیا۔ Li Z, China CDC Weekly 2023۔
  - اصل متن: "the national drowning mortality rate from 6.60 per 100,000 in 2013 down to 3.28 per 100,000 in 2021"; "rural areas exhibited roughly double the mortality rate found in urban areas"; "in China, it is deemed the primary cause of death for children between the ages of 1 and 14"; "peaking at 3.95 per 100,000 in the 15–19 year age group"
- <https://doi.org/10.46234/ccdcw2024.057> — weekly.chinacdc.cn پر حل ہوتا ہے؛ ابسٹریکٹ Europe PMC کے ذریعے پڑھا گیا۔ Zhou J, China CDC Weekly 2024۔
  - اصل متن: "In 2021, drowning and road traffic crashes were the top two causes of child injury deaths, explaining 31.1% and 27.9% of total injury deaths, respectively."
- اپنایا نہیں گیا: China CDC ویب پیج chinacdc.cn/…/t20210809_233793.html 404 واپس کرتا ہے۔

## 8. بزرگ افراد کے لیے گرنے سے بچاؤ
- <https://doi.org/10.1002/14651858.CD012424.pub2> — Wiley 403؛ Europe PMC ریکارڈ کی تصدیق ہوئی: Sherrington C, 2019۔
  - اصل متن: "Exercise reduces the rate of falls by 23% (rate ratio (RaR) 0.77, 95% confidence interval (CI) 0.71 to 0.83"; "reduces the number of people experiencing one or more falls by 15% (risk ratio (RR) 0.85, 95% CI 0.81 to 0.89"
  - اصل متن: "We included 108 RCTs with 23,407 participants living in the community in 25 countries."
- <https://doi.org/10.1002/14651858.CD007146.pub3> — Europe PMC ریکارڈ کی تصدیق ہوئی: Gillespie LD, 2012۔
  - اصل متن: "Home safety assessment and modification interventions were effective in reducing rate of falls (RR 0.81, 95% CI 0.68 to 0.97; six trials; 4208 participants)"; "Tai Chi did significantly reduce risk of falling (RR 0.71, 95% CI 0.57 to 0.87…)"
- <https://doi.org/10.46234/ccdcw2021.013> — weekly.chinacdc.cn پر حل ہوتا ہے؛ مکمل متن Europe PMC PMC8393086 کے ذریعے پڑھا گیا۔ Lu Z, China CDC Weekly 2021۔
  - اصل متن: "Falls are the top cause for death from injuries in people aged 65 years and above"; "Home (55.97%), road/street (18.69%), and public residential institution (12.80%) were the sites where falls most often occurred"

## 9. ہیپاٹائٹس بی
- <https://doi.org/10.1371/journal.pmed.1001774> — PLOS نے ریڈائریکٹ کیا لیکن مکمل متن حاصل نہیں ہوا؛ Europe PMC ریکارڈ کی تصدیق ہوئی: Qu C, PLoS Medicine 2014۔
  - اصل متن: "efficacies of 84% (95% CI 23%-97%)" (PLC incidence); "catch-up vaccination on HBsAg seroprevalence in early adulthood was 21% (95% CI 10%-30%), substantially weaker than that of the neonatal vaccination (72%, 95% CI 68%-75%)"
- <https://doi.org/10.3201/eid2305.161477> — Europe PMC ریکارڈ کی تصدیق ہوئی: Cui F, Emerging Infectious Diseases 2017۔
  - اصل متن: "HBV surface antigen prevalence declined 46% by 2006 and by 52% by 2014"; among children under 5 "the decline was 97%"

## 10. HPV ویکسین
- <https://doi.org/10.1056/NEJMoa1917338> — NEJM 403؛ Europe PMC ریکارڈ کی تصدیق ہوئی: Lei J, NEJM 2020۔
  - اصل متن: "the incidence rate ratio was 0.12 (95% CI, 0.00 to 0.34) among women who had been vaccinated before the age of 17 years and 0.47 (95% CI, 0.27 to 0.75) among women who had been vaccinated at the age of 17 to 30 years"
  - اصل متن: "follow an open population of 1,672,983 girls and women who were 10 to 30 years of age from 2006 through 2017"

## 11. سروائیکل کینسر سکریننگ
- <https://doi.org/10.1056/NEJMoa0808516> — NEJM 403؛ Europe PMC ریکارڈ کی تصدیق ہوئی: Sankaranarayanan R, NEJM 2009۔
  - اصل متن: "hazard ratio for the detection of advanced cancer in the HPV-testing group, 0.47; 95% confidence interval [CI], 0.32 to 0.69"; "34 deaths from cancer in the HPV-testing group, as compared with 64 in the control group (hazard ratio, 0.52; 95% CI, 0.33 to 0.83)"

## 12. کولوریکٹل کینسر سکریننگ
- <https://doi.org/10.1002/14651858.CD001216.pub2> — Europe PMC ریکارڈ کی تصدیق ہوئی: Hewitson P, 2007۔
  - اصل متن: "a 16% reduction in the relative risk of colorectal cancer mortality (RR 0.84, CI: 0.78-0.90)"; "25% relative risk reduction (RR 0.75, CI: 0.66 - 0.84) for those attending at least one round of screening"
- <https://doi.org/10.1056/NEJMoa2208375> — Europe PMC ریکارڈ کی تصدیق ہوئی: Bretthauer M, NEJM 2022۔
  - اصل متن: "the risk of colorectal cancer at 10 years was 0.98% in the invited group and 1.20% in the usual-care group, a risk reduction of 18% (risk ratio, 0.82; 95% confidence interval [CI], 0.70 to 0.93)"; "The risk of death from colorectal cancer was 0.28% in the invited group and 0.31% in the usual-care group (risk ratio, 0.90; 95% CI, 0.64 to 1.16)"

## 13. انفلوئنزا ویکسین
- <https://doi.org/10.1161/CIRCULATIONAHA.121.057042> — AHA 403؛ Europe PMC ریکارڈ کی تصدیق ہوئی: Fröbert O, Circulation 2021 (IAMI)۔
  - اصل متن: "Rates of all-cause death were 2.9% and 4.9% (hazard ratio, 0.59 [95% CI, 0.39-0.89]; P=0.010)"; "rates of cardiovascular death were 2.7% and 4.5%, (hazard ratio, 0.59 [95% CI, 0.39-0.90]"
  - اصل متن: "2571 participants were randomized at 30 centers across 8 countries"; "Over the 12-month follow-up, the primary outcome occurred in…"
- <https://doi.org/10.1001/jamanetworkopen.2022.8873> — JAMA پیج براہ راست کھلا۔ Behrouzi B, JAMA Network Open 2022۔
  - اصل متن: "influenza vaccine was associated with a lower risk of composite cardiovascular events (3.6% vs 5.4%; RR, 0.66; 95% CI, 0.53-0.83"; "1.7% of vaccine recipients died of cardiovascular causes compared with 2.5% of placebo or control recipients (RR, 0.74; 95% CI, 0.42-1.30"
- <https://doi.org/10.1002/14651858.CD004876.pub4> — Europe PMC ریکارڈ کی تصدیق ہوئی: Demicheli V, 2018۔
  - اصل متن: "may experience less influenza over a single season compared with placebo, from 6% to 2.4%" (low-certainty); "very low-certainty evidence for the effect on mortality"

## 14. ہیلیکو بیکٹر پائلوری
- <https://doi.org/10.1136/bmj.l5016> — BMJ 403؛ Europe PMC ریکارڈ کی تصدیق ہوئی: Li WQ, BMJ 2019۔
  - اصل متن: "A protective effect of H pylori treatment on gastric cancer incidence persisted 22 years post-intervention (odds ratio 0.48, 95% confidence interval 0.32 to 0.71)"; "fully adjusted hazard ratio for H pylori treatment was 0.62 (95% confidence interval 0.39 to 0.99)"

## 15. کمڈوز CT
- <https://doi.org/10.1056/NEJMoa1102873> — NEJM 403؛ Europe PMC ریکارڈ کی تصدیق ہوئی (PMID 21714641)، اور مکمل متن کا ابسٹریکٹ <https://pmc.ncbi.nlm.nih.gov/articles/PMC4356534/> پر کھلا۔
  - اصل متن: "53,454 persons at high risk for lung cancer at 33 U.S. medical centers"; "24.2% with low-dose CT and 6.9% with radiography over all three rounds"; "96.4% of the positive screening results in the low-dose CT group … were false positive results"; "20.0% (95% CI, 6.8 to 26.7; P = 0.004)"; "6.7% (95% CI, 1.2 to 13.6; P = 0.02)"
  - داخلے کے معیار (55–74 سال، ≥30 پیک-ایئرز، چھوڑے ≤15 سال) Europe PMC ابسٹریکٹ میں تصدیق ہوئے۔

## 16. نفسیاتی بحران
- <https://doi.org/10.1016/S2215-0366(16)30030-X> — Elsevier پیج صرف Redirecting دکھاتا ہے؛ Europe PMC ریکارڈ کی تصدیق ہوئی: Zalsman G, Lancet Psychiatry 2016۔
  - اصل متن: "Evidence for restricting access to lethal means in prevention of suicide has strengthened since 2005"; "overall decrease of 43% since 2005" (analgesic controls); "hot-spots for suicide by jumping (reduction of 86% since 2005, 79% to 91%)"; "School-based awareness programmes have been shown to reduce suicide attempts (odds ratio [OR] 0·45, 95% CI 0·24-0·85"
- <https://www.gov.cn/zhengce/zhengceku/202412/content_6994470.htm> — کھولا گیا۔ عنوان "Notice of the National Health Commission on the Use of the '12356' Unified National Psychological Assistance Hotline Number" (国家卫生健康委关于应用"12356"全国统一心理援助热线电话号码的通知), 国卫医政函〔2024〕259 号, 2024-12-06.
  - اصل متن: "设置'12356'作为全国统一心理援助热线电话号码"; "每日提供不少于18小时心理援助服务"; "确保于2025年5月1日0时前，实现拨打'12356'电话号码接通心理援助热线的功能"
  - اصلی nhc.gov.cn لنک نے 412 واپس کیا؛ اسی دستاویز کو State Council policy document repository میں تبدیل کر دیا گیا۔

## غیر مصدقہ / اپنایا نہیں گیا
- NHTSA پیجز nhtsa.gov/risky-driving/seat-belts, car-seats-and-booster-seats: 403، غیر مصدقہ؛ سرکاری crashstats PDF استعمال کی گئی۔
- NFPA اسموک الارم رپورٹ: غیر مصدقہ، حوالہ نہیں دی گئی۔
- WHO Global status report on road safety 2023 چین کنٹری پروفائل PDF: 404، غیر مصدقہ؛ چینی روڈ اموات کے لیے GHO API استعمال کیا گیا۔
- WHO ڈوبنا فیکٹ شیٹ (کھولا گیا، 2026-05-01 ورژن): چین کے اعداد نہیں، حوالہ نہیں دی گئی؛ "around 300 000 annual drowning deaths worldwide" استعمال نہیں ہوا۔
- فائدہ کالم میں trial اسکیل اعداد (Ettehad 123 مطالعات/613,815 افراد، Sherrington 108 مطالعات/23,407 افراد، Lei 1,672,983 افراد، IAMI 2571 افراد) Europe PMC فیچز کے دوسرے دور کے خلاف لفظ بہ لفظ چیک کیے گئے؛ ہر اندراج میں اصل متن کے حوالے دیکھیں۔
- لاگت کالم میں قیمتیں (ہیلمٹ، الارم، ویکسین، سکریننگ فیس، وغیرہ) مصنف کے بازار کی قیمتوں پر مبنی تخمینے ہیں؛ یہ حوالہ شدہ اعداد نہیں ہیں اور ان کی تصدیق نہیں کی گئی۔
