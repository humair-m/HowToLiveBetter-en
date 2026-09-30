# Section 1 Source Verification Record

Verification date 2026-09-07. Most publisher sites (NEJM, Elsevier, Wiley, BMJ, AHA) return 403 to WebFetch; these references were read via the Europe PMC REST interface (`<https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:">..."&resultType=core&format=json`>) to retrieve the title, authors, journal, year, and full abstract of the corresponding DOI record; doi.org itself resolves (302 to the publisher). The "original text" below consists of sentences extracted verbatim from the abstracts/full text.

## 1. Seat belts
- <https://crashstats.nhtsa.dot.gov/Api/Public/ViewPublication/813573> — opened (PDF converted to text via pdftotext). Title "Occupant Protection in Passenger Vehicles: 2022 Data, DOT HS 813 573, May 2024" matches.
  - Original text: "Fifty percent of passenger vehicle occupants killed in traffic crashes in 2022 were unrestrained (based on known restraint use)."
  - Original text: "lap/shoulder seat belts, when used, reduce the risk of: fatal injury to front-seat passenger car occupants by 45 percent; … fatal injury to front-seat light-truck occupants by 60 percent"
  - Original text: "60 percent of those in the second row were unrestrained."
- <https://www.who.int/news-room/fact-sheets/detail/road-traffic-injuries> — opened. Original text: "Wearing a seat-belt can reduce the risk of death among vehicle occupants by up to 50%."
- <https://ghoapi.azureedge.net/api/RS_196?$filter=SpatialDim%20eq%20%27CHN%27> — opened (WHO GHO API). China 2021: 248,099 (95% CI 233,685–262,513). RS_198 opened the same way: 17.4/100,000 in 2021.
  - Note: the GHO interface returns absolute counts for RS_196 and rates for RS_198, the opposite of what I had expected from the metric numbering; the numbers themselves were taken from the returned JSON.

## 2. Helmets
- <https://doi.org/10.1002/14651858.CD004333.pub3> — doi.org resolves to Wiley (403); Europe PMC record confirmed: Liu BC, 2008, "Helmets for preventing injury in motorcycle riders".
  - Original text: "helmets were estimated to reduce the risk of death by 42% (OR 0.58, 95% CI 0.50 to 0.68)"; "reduce the risk of head injury by 69% (OR 0.31, 95% CI 0.25 to 0.38)"

## 3. Smoke alarms / carbon monoxide
- <https://doi.org/10.1001/jama.279.20.1633> — Europe PMC record confirmed: Marshall SW, Runyan CW et al., JAMA 1998, "Fatal residential fires: who dies and who survives?".
  - Original text: "Overall, a functioning smoke detector lowered the risk of death (OR, 0.39; 95% CI, 0.18-0.83)."
- <https://www.usfa.fema.gov/downloads/pdf/statistics/v22i2.pdf> — opened (PDF converted to text). Title "Fatal Fires in Residential Buildings (2018-2020), Topical Fire Report Series June 2022 Vol 22 Issue 2" matches.
  - Original text: "Smoke alarms were not present in 24% of fatal fires in occupied residential buildings."; "The leading human factor contributing to the ignition of fatal fires in residential buildings was being 'asleep' (41%)."
- <https://doi.org/10.46234/ccdcw2020.008> — doi.org resolves to weekly.chinacdc.cn (metadata only); full text read via Europe PMC PMC8392909 fullTextXML. Authors You J, Liu J, Zhou M, China CDC Weekly 2020.
  - Original text: "In 2018, there were 11,523 deaths caused by carbon monoxide poisoning reported in China"; "highest proportions occurring in December (72.59%), January (67.42%), and February (66.48%)"
- Not adopted: the NFPA "Smoke Alarms in US Home Fires" page returned only the title, the report PDF returned 500, could not be verified, so the NFPA "55% lower mortality" figure was not cited.

## 4. Blood pressure
- <https://doi.org/10.1016/S0140-6736(15)01225-8> — Elsevier page only shows Redirecting; Europe PMC record confirmed: Ettehad D, Lancet 2016.
  - Original text: "relative risk [RR] 0·80, 95% CI 0·77-0·83" (major cardiovascular events); "stroke (0·73, 0·68-0·77)"; "heart failure (0·72, 0·67-0·78)"; "a significant 13% reduction in all-cause mortality (0·87, 0·84-0·91)"
  - Original text: "We identified 123 studies with 613,815 participants for the tabular meta-analysis."
- <https://doi.org/10.1016/S0140-6736(17)32478-9> — Europe PMC record confirmed: Lu J, Lancet 2017, China PEACE Million Persons Project.
  - Original text: "44·7% (95% CI 44·6-44·8) of the sample had hypertension, of whom 44·7% (44·6-44·8) were aware of their diagnosis, 30·1% (30·0-30·2) were taking prescribed antihypertensive medications, and 7·2% (7·1-7·2) had achieved control"

## 5. No speeding, no drunk driving
- <https://www.who.int/news-room/fact-sheets/detail/road-traffic-injuries> — opened.
  - Original text: "Every 1% increase in mean speed produces a 4% increase in the fatal crash risk."; "The risk of a road traffic crash starts at low levels of blood alcohol concentration (BAC)."

## 6. Child safety seats
- NHTSA 813573 (same as Entry 1). Original text: "NHTSA has estimated that car seats reduce the risk of fatal injury by 71 percent for infants (younger than 1 year old) and by 54 percent for toddlers (1 to 4 years old) in passenger cars."
- WHO road traffic fact sheet (same as above). Original text: "The use of child restraints can lead to a 71% reduction in deaths among infants."

## 7. Drowning
- <https://doi.org/10.1136/ip.2010.028688> — doi.org resolves to injuryprevention.bmj.com (403); Europe PMC record confirmed: Cummings P, Mueller BA, Quan L. Injury Prevention 2011;17(3):156-159, PMID 20889519.
  - Original text: "The adjusted RR was 0.51 (95% CI 0.35 to 0.74)."
  - Note: the DOI I originally noted (…028381) was wrong, doi.org returned 404; corrected to …028688 as given by Europe PMC.
- <https://doi.org/10.46234/ccdcw2023.198> — resolves to weekly.chinacdc.cn; full text read via Europe PMC PMC10689961. Li Z, China CDC Weekly 2023.
  - Original text: "the national drowning mortality rate from 6.60 per 100,000 in 2013 down to 3.28 per 100,000 in 2021"; "rural areas exhibited roughly double the mortality rate found in urban areas"; "in China, it is deemed the primary cause of death for children between the ages of 1 and 14"; "peaking at 3.95 per 100,000 in the 15–19 year age group"
- <https://doi.org/10.46234/ccdcw2024.057> — resolves to weekly.chinacdc.cn; abstract read via Europe PMC. Zhou J, China CDC Weekly 2024.
  - Original text: "In 2021, drowning and road traffic crashes were the top two causes of child injury deaths, explaining 31.1% and 27.9% of total injury deaths, respectively."
- Not adopted: the China CDC web page chinacdc.cn/…/t20210809_233793.html returns 404.

## 8. Fall prevention for older adults
- <https://doi.org/10.1002/14651858.CD012424.pub2> — Wiley 403; Europe PMC record confirmed: Sherrington C, 2019.
  - Original text: "Exercise reduces the rate of falls by 23% (rate ratio (RaR) 0.77, 95% confidence interval (CI) 0.71 to 0.83"; "reduces the number of people experiencing one or more falls by 15% (risk ratio (RR) 0.85, 95% CI 0.81 to 0.89"
  - Original text: "We included 108 RCTs with 23,407 participants living in the community in 25 countries."
- <https://doi.org/10.1002/14651858.CD007146.pub3> — Europe PMC record confirmed: Gillespie LD, 2012.
  - Original text: "Home safety assessment and modification interventions were effective in reducing rate of falls (RR 0.81, 95% CI 0.68 to 0.97; six trials; 4208 participants)"; "Tai Chi did significantly reduce risk of falling (RR 0.71, 95% CI 0.57 to 0.87…)"
- <https://doi.org/10.46234/ccdcw2021.013> — resolves to weekly.chinacdc.cn; full text read via Europe PMC PMC8393086. Lu Z, China CDC Weekly 2021.
  - Original text: "Falls are the top cause for death from injuries in people aged 65 years and above"; "Home (55.97%), road/street (18.69%), and public residential institution (12.80%) were the sites where falls most often occurred"

## 9. Hepatitis B
- <https://doi.org/10.1371/journal.pmed.1001774> — PLOS redirected but full text not retrieved; Europe PMC record confirmed: Qu C, PLoS Medicine 2014.
  - Original text: "efficacies of 84% (95% CI 23%-97%)" (PLC incidence); "catch-up vaccination on HBsAg seroprevalence in early adulthood was 21% (95% CI 10%-30%), substantially weaker than that of the neonatal vaccination (72%, 95% CI 68%-75%)"
- <https://doi.org/10.3201/eid2305.161477> — Europe PMC record confirmed: Cui F, Emerging Infectious Diseases 2017.
  - Original text: "HBV surface antigen prevalence declined 46% by 2006 and by 52% by 2014"; among children under 5 "the decline was 97%"

## 10. HPV vaccine
- <https://doi.org/10.1056/NEJMoa1917338> — NEJM 403; Europe PMC record confirmed: Lei J, NEJM 2020.
  - Original text: "the incidence rate ratio was 0.12 (95% CI, 0.00 to 0.34) among women who had been vaccinated before the age of 17 years and 0.47 (95% CI, 0.27 to 0.75) among women who had been vaccinated at the age of 17 to 30 years"
  - Original text: "follow an open population of 1,672,983 girls and women who were 10 to 30 years of age from 2006 through 2017"

## 11. Cervical cancer screening
- <https://doi.org/10.1056/NEJMoa0808516> — NEJM 403; Europe PMC record confirmed: Sankaranarayanan R, NEJM 2009.
  - Original text: "hazard ratio for the detection of advanced cancer in the HPV-testing group, 0.47; 95% confidence interval [CI], 0.32 to 0.69"; "34 deaths from cancer in the HPV-testing group, as compared with 64 in the control group (hazard ratio, 0.52; 95% CI, 0.33 to 0.83)"

## 12. Colorectal cancer screening
- <https://doi.org/10.1002/14651858.CD001216.pub2> — Europe PMC record confirmed: Hewitson P, 2007.
  - Original text: "a 16% reduction in the relative risk of colorectal cancer mortality (RR 0.84, CI: 0.78-0.90)"; "25% relative risk reduction (RR 0.75, CI: 0.66 - 0.84) for those attending at least one round of screening"
- <https://doi.org/10.1056/NEJMoa2208375> — Europe PMC record confirmed: Bretthauer M, NEJM 2022.
  - Original text: "the risk of colorectal cancer at 10 years was 0.98% in the invited group and 1.20% in the usual-care group, a risk reduction of 18% (risk ratio, 0.82; 95% confidence interval [CI], 0.70 to 0.93)"; "The risk of death from colorectal cancer was 0.28% in the invited group and 0.31% in the usual-care group (risk ratio, 0.90; 95% CI, 0.64 to 1.16)"

## 13. Influenza vaccine
- <https://doi.org/10.1161/CIRCULATIONAHA.121.057042> — AHA 403; Europe PMC record confirmed: Fröbert O, Circulation 2021 (IAMI).
  - Original text: "Rates of all-cause death were 2.9% and 4.9% (hazard ratio, 0.59 [95% CI, 0.39-0.89]; P=0.010)"; "rates of cardiovascular death were 2.7% and 4.5%, (hazard ratio, 0.59 [95% CI, 0.39-0.90]"
  - Original text: "2571 participants were randomized at 30 centers across 8 countries"; "Over the 12-month follow-up, the primary outcome occurred in…"
- <https://doi.org/10.1001/jamanetworkopen.2022.8873> — JAMA page opened directly. Behrouzi B, JAMA Network Open 2022.
  - Original text: "influenza vaccine was associated with a lower risk of composite cardiovascular events (3.6% vs 5.4%; RR, 0.66; 95% CI, 0.53-0.83"; "1.7% of vaccine recipients died of cardiovascular causes compared with 2.5% of placebo or control recipients (RR, 0.74; 95% CI, 0.42-1.30"
- <https://doi.org/10.1002/14651858.CD004876.pub4> — Europe PMC record confirmed: Demicheli V, 2018.
  - Original text: "may experience less influenza over a single season compared with placebo, from 6% to 2.4%" (low-certainty); "very low-certainty evidence for the effect on mortality"

## 14. Helicobacter pylori
- <https://doi.org/10.1136/bmj.l5016> — BMJ 403; Europe PMC record confirmed: Li WQ, BMJ 2019.
  - Original text: "A protective effect of H pylori treatment on gastric cancer incidence persisted 22 years post-intervention (odds ratio 0.48, 95% confidence interval 0.32 to 0.71)"; "fully adjusted hazard ratio for H pylori treatment was 0.62 (95% confidence interval 0.39 to 0.99)"

## 15. Low-dose CT
- <https://doi.org/10.1056/NEJMoa1102873> — NEJM 403; Europe PMC record confirmed (PMID 21714641), and the full-text abstract opened at <https://pmc.ncbi.nlm.nih.gov/articles/PMC4356534/>.
  - Original text: "53,454 persons at high risk for lung cancer at 33 U.S. medical centers"; "24.2% with low-dose CT and 6.9% with radiography over all three rounds"; "96.4% of the positive screening results in the low-dose CT group … were false positive results"; "20.0% (95% CI, 6.8 to 26.7; P = 0.004)"; "6.7% (95% CI, 1.2 to 13.6; P = 0.02)"
  - Enrollment criteria (55–74 years old, ≥30 pack-years, quit ≤15 years) confirmed in the Europe PMC abstract.

## 16. Psychological crisis
- <https://doi.org/10.1016/S2215-0366(16)30030-X> — Elsevier page only shows Redirecting; Europe PMC record confirmed: Zalsman G, Lancet Psychiatry 2016.
  - Original text: "Evidence for restricting access to lethal means in prevention of suicide has strengthened since 2005"; "overall decrease of 43% since 2005" (analgesic controls); "hot-spots for suicide by jumping (reduction of 86% since 2005, 79% to 91%)"; "School-based awareness programmes have been shown to reduce suicide attempts (odds ratio [OR] 0·45, 95% CI 0·24-0·85"
- <https://www.gov.cn/zhengce/zhengceku/202412/content_6994470.htm> — opened. Title "Notice of the National Health Commission on the Use of the '12356' Unified National Psychological Assistance Hotline Number" (国家卫生健康委关于应用"12356"全国统一心理援助热线电话号码的通知), 国卫医政函〔2024〕259 号, 2024-12-06.
  - Original text: "设置'12356'作为全国统一心理援助热线电话号码"; "每日提供不少于18小时心理援助服务"; "确保于2025年5月1日0时前，实现拨打'12356'电话号码接通心理援助热线的功能"
  - The original nhc.gov.cn link returned 412; switched to the same document in the State Council policy document repository.

## Unconfirmed / not adopted
- NHTSA pages nhtsa.gov/risky-driving/seat-belts, car-seats-and-booster-seats: 403, unconfirmed; the official crashstats PDF was used instead.
- NFPA smoke alarm report: unconfirmed, not cited.
- WHO Global status report on road safety 2023 China country profile PDF: 404, unconfirmed; the GHO API was used for Chinese road deaths instead.
- WHO drowning fact sheet (opened, 2026-05-01 version): no China figures, not cited; "around 300 000 annual drowning deaths worldwide" was not used.
- The trial-scale numbers in the Benefit column (Ettehad 123 studies/613,815 people, Sherrington 108 studies/23,407 people, Lei 1,672,983 people, IAMI 2571 people) were checked verbatim against the second round of Europe PMC fetches; see the original-text quotations in each entry.
- The prices in the Cost column (helmets, alarms, vaccines, screening fees, etc.) are the author's rough estimates based on market prices; they are not cited figures and were not verified.
