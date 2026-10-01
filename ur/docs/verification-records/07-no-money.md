# سیکشن 7 ماخذ کی تصدیق کا ریکارڈ

تصدیق کی تاریخ 2026-09-07۔ تمام WebFetch کے ذریعے کھولے گئے۔ gov.cn کے `/zhengce/…`، `/xinwen/…`، `/flfg/…` legacy paths زیادہ تر 404 واپس کرتے ہیں؛ `/gongbao/…`، `/zhengce/zhengceku/…`، `/guoqing/…`، `/lianbo/…` کھل سکتے ہیں؛ mohrss.gov.cn پیجز blank واپس کرتے ہیں (غالباً front-end script rendering)، mca.gov.cn 403 واپس کرتا ہے، moj.gov.cn اور npc.gov.cn بالترتیب redirect loops اور TLS handshake failures ہیں، nhsa.gov.cn کھل سکتا ہے مگر سائٹ میں 2025 resident-insurance notice نہیں ملی۔ جہاں original-text پیج نہیں کھل سکا، اندراج "to be verified" لکھتا ہے یا کسی دوسرے سرکاری پیج پر switch کرتا ہے ایک نوٹ کے ساتھ۔ نیچے "اصل متن" میں WebFetch کے ذریعے پیج سے fetched جملے شامل ہیں۔

## 1. بے روزگاری انشورنس فوائد
- <https://xzfg.moj.gov.cn/front/law/detail?LawID=517> — کھلا (Ministry of Justice National Administrative Regulations Database)۔ تصدیق شدہ "Unemployment Insurance Regulations" (失业保险条例)، State Council Order No. 258، issued 1999-01-22۔
  - Article 14: "Unemployed persons who meet the following conditions may receive unemployment insurance benefits: (1) those who, in accordance with the regulations, participate in unemployment insurance, and whose employer and themselves have fulfilled the contribution obligation for at least 1 year; (2) those whose employment was interrupted for reasons not attributable to themselves; (3) those who have completed unemployment registration and have a job-seeking requirement."
  - Article 17: "Those with cumulative contribution time of at least 1 year and less than 5 years may receive unemployment insurance benefits for a maximum of 12 months; those with cumulative contribution time of at least 5 years and less than 10 years may receive unemployment insurance benefits for a maximum of 18 months; those with cumulative contribution time of 10 years or more may receive unemployment insurance benefits for a maximum of 24 months."
  - Article 18: "The standard for unemployment insurance benefits shall be determined by the people's government of the province, autonomous region, or municipality directly under the Central Government, at a level lower than the local minimum wage standard and higher than the urban residents' minimum living guarantee standard."
- <https://www.12333.gov.cn/portal/common/bszn/sydysl?pfaId=202105281700000004> — کھلا (Ministry of Human Resources and Social Security · National Human Resources and Social Security Government Service Platform Service Guide)۔ اصل متن: "Unemployed persons who have contributed for at least 1 year and whose employment was interrupted for reasons not attributable to themselves"; channels original text: "National Human Resources and Social Security Government Service Platform or National Social Insurance Public Service Platform", "Zhangshang 12333 mobile application", "Electronic Social Security Card channels (all APPs, mini-programs, official accounts that have opened the electronic social security card)".
- <https://www.ndrc.gov.cn/fggz/jyysr/jysrsbxf/202206/t20220627_1328819.html> — کھلا (NDRC Employment Department، 2022-06-27)۔ اصل متن: "Gradually raise the unemployment insurance benefit standard to 90% of the minimum wage standard." پیج document number نہیں رکھتا۔
- غیر مصدقہ: MOHRSS "Guiding Opinions on Adjusting the Standards for Unemployment Insurance Benefits" original page <http://www.mohrss.gov.cn/xxgk2020/fdzdgknr/zcfg/gfxwj/shbx/201709/t20170925_278080.html> blank واپس آیا؛ government interpretation pages <https://www.gov.cn/zhengce/2017-09/27/content_5227865.htm> اور <https://www.gov.cn/xinwen/2017-09/26/content_5227678.htm> 404 واپس آئے؛ big5 gateway redirect loop ہے۔ Document number تصدیق نہیں ہوا؛ اندراج کے نوٹ میں "document number to be verified" نشان زد ہے۔
- اپنایا نہیں گیا: si.12333.gov.cn/184890.jhtml اور /184927.jhtml نے کھولنے کے بعد صرف دو حروف "首页" (Homepage) واپس کیے۔

## 2. لیبر آربیٹریشن، اجراک کی بقایا جات، قانونی امداد
- <https://chinajob.mohrss.gov.cn/h5/c/2022-07-15/356212.shtml> — کھلا (China Employment Network، MOHRSS کے تحت، domain mohrss.gov.cn)۔ تصدیق شدہ "Labor Dispute Mediation and Arbitration Law" (劳动争议调解仲裁法)، Presidential Order No. 80، adopted 2007-12-29، effective 2008-05-01۔
  - Article 53: "Labor dispute arbitration is free of charge. The funding of the labor dispute arbitration committee is guaranteed by the fiscal authority."
  - Article 27، paragraph 1: "The limitation period for applying for arbitration of a labor dispute is one year. The arbitration limitation period is calculated from the date on which the party knew or should have known that their rights were infringed."
  - Article 43، paragraph 1: "Shall be concluded within 45 days from the date the labor dispute arbitration committee accepts the arbitration application. … The extension shall not exceed 15 days."
  - اسی متن کو Shanghai DRC page <https://fgw.sh.gov.cn/ys-laogong-1.7.1.1/20240125/8842664277d44777ab8785e9cff148b4.html> پر بھی کھولا اور تصدیق کیا گیا کہ مماثل ہے۔ gov.cn کے /flfg/ اور /ziliao/flfg/ paths دونوں 404؛ SPC gazette page 502۔
- <https://www.gov.cn/gongbao/content/2020/content_5469641.htm> — کھلا۔ تصدیق شدہ "Regulations on Ensuring the Payment of Migrant Workers' Wages" (保障农民工工资支付条例)، State Council Order No. 724، adopted 2019-12-04، effective 2020-05-01۔
  - Article 10: "Migrant workers whose wages are in arrears have the right to file complaints in accordance with the law, or apply for labor dispute mediation and arbitration and file lawsuits. Any unit or individual has the right to report wage arrears against migrant workers to the human resources and social security administrative department or other relevant departments."
  - Article 41 (excerpt): "Where the crime of refusing to pay labor compensation is suspected, the case shall be transferred to the public security organ for review and a decision in accordance with relevant regulations."
- <https://www.beijing.gov.cn/zhengce/zhengcefagui/qtwj/202504/t20250402_4053713.html> — کھلا (Beijing municipal government site repost of the full text of the law، official local site)۔ تصدیق شدہ "Legal Aid Law" (法律援助法)، adopted 2021-08-20، effective 2022-01-01۔
  - Article 2: "Legal aid referred to in this Law is a system established by the State to provide legal services such as legal consultation, representation, and criminal defense free of charge to citizens in financial difficulty and other parties meeting statutory conditions"
  - Article 31، item (5): "Requesting confirmation of a labor relationship or payment of labor compensation"
  - Article 42 (excerpt): "Exempt from financial-difficulty verification: … (3) migrant workers applying for labor compensation payment or claiming personal injury compensation from a work-related accident"
  - Ministry of Justice pages moj.gov.cn (دو URLs) redirect loops ہیں، NPC site npc.gov.cn TLS میں ناکام، اور gov.cn کا /xinwen path 404؛ Beijing municipal government repost page استعمال ہوا۔
- 12348 hotline: تمام Ministry of Justice-related pages کھولنے میں ناکام رہے؛ تصدیق نہیں ہوئے؛ اندراج کا نوٹ بتاتا ہے کہ number تصدیق شدہ original text میں نظر نہیں آیا۔

## 3. ریلیف سٹیشنز
- <https://www.gov.cn/gongbao/content/2003/content_62246.htm> — کھلا۔ تصدیق شدہ "Administrative Measures for the Relief of Vagrants and Beggars with No Means of Livelihood in Cities" (城市生活无着的流浪乞讨人员救助管理办法)، State Council Order No. 381، promulgated 2003-06-20، effective 2003-08-01۔
  - Article 5: "When public security officials and other relevant administrative-agency officials, in the performance of their duties, discover vagrant and begging persons, they shall inform them to seek help at relief stations; among them, persons with disabilities, minors, the elderly, and others with limited mobility shall also be guided and escorted to relief stations."
  - Article 6: "Vagrant and begging persons seeking help from relief stations shall truthfully provide their basic information such as name and register the belongings they carry at the relief station"
  - Article 7: Food، shelter، emergency medical care، contacting relatives/employers، اور travel vouchers (WebFetch نے summary دیا، اندراج جو لکھتا ہے اس سے مماثل)۔
- <https://www.gov.cn/gongbao/content/2003/content_62510.htm> — کھلا۔ تصدیق شدہ "… Implementation Rules" (《…实施细则》)، Ministry of Civil Affairs Order No. 24، promulgated 2003-07-21، effective 2003-08-01۔
  - Article 12: "Relief stations shall determine the relief period based on the circumstances of the relieved person, generally not exceeding 10 days"
  - Article 11: "Where a relieved person has no travel expenses when returning to their place of habitual residence, domicile, or work unit, the relief station shall issue a travel (boat) voucher"

## 4. ایمرجنسی میڈیکل کیئر فرسٹ
- <https://www.gov.cn/zhengce/zhengceku/2013-03/01/content_6069.htm> — کھلا۔ تصدیق شدہ 国办发〔2013〕15 号، drafted 2013-02-22۔
  - اصل متن: "Patients in China who suffer acute, severe, and life-threatening illness or injury requiring emergency care, but whose identity is unclear or who are unable to pay the corresponding fees"
  - اصل متن: "All types and levels of medical institutions and their staff must provide timely and effective emergency care to patients with acute, severe, and life-threatening injuries, and may not, for any reason, refuse, push away, or delay treatment"
  - اصل متن: "1. Emergency-care costs incurred by patients whose identity cannot be determined. 2. Emergency-care costs in arrears by patients whose identity is clear but who are unable to pay"
- <https://www.gov.cn/gongbao/content/2014/content_2580977.htm> — کھلا۔ تصدیق شدہ "Measures for the Administration of Pre-hospital Medical Emergency Care" (院前医疗急救管理办法)، National Health and Family Planning Commission Order No. 3، promulgated 2013-11-29، effective 2014-02-01۔
  - Article 25: "Emergency centers (stations) and emergency-network hospitals shall, in accordance with relevant state regulations, collect fees for pre-hospital medical emergency services, and may not refuse or delay pre-hospital medical emergency services because of fee issues."
  - Article 37 (excerpt): "(3) Emergency centers (stations) refusing, pushing away, or delaying pre-hospital medical emergency services due to command-and-dispatch or fee factors"

## 5. پبلک ایمپلایمنٹ سروسز، گگ لیبر مارکیٹ
- <https://www.gov.cn/guoqing/2021-10/29/content_5647636.htm> — کھلا۔ تصدیق شدہ "Employment Promotion Law" (就业促进法)، adopted 2007-08-30، amended 2015-04-24۔
  - Article 35: "Provide the following services free of charge to workers: (1) consultation on employment policies and regulations; (2) release of labor-supply-and-demand information, market wage-guidance price information, and vocational training information; (3) vocational guidance and job introduction; (4) employment assistance to persons with employment difficulties; (5) processing of employment registration, unemployment registration, and other matters; (6) other public employment services." (Articles 52 اور 53 کے لیے اندراج 10 دیکھیں)
- <https://www.gov.cn/zhengce/zhengceku/2022-07/09/content_5700177.htm> — کھلا۔ تصدیق شدہ 人社部发〔2022〕38 号، 2022-06-22۔
  - اصل متن: "Provide free gig-worker job-seeking and recruitment information registration and release services to the public"; "Incorporate gig-worker information into the scope of public employment information services"; "Strengthen employment assistance for older and disadvantaged gig workers with long idle periods, low-income families, disabilities, etc."
  - نوٹ: task brief میں کہا گیا تھا "MOHRSS 2023 gig market document"، لیکن اصل national-level document 2022 No. 38 document ہے؛ اندراج تصدیق کے نتائج کے مطابق 2022 لکھتا ہے۔

## 6، 7. عارضی امداد، کم از کم زندگی گارنٹی (dibao)
- <https://www.gov.cn/gongbao/content/2019/content_5468952.htm> — کھلا (State Council Gazette 2019 supplement)۔ تصدیق شدہ "Interim Measures for Social Assistance" (社会救助暂行办法)، State Council Order No. 649، promulgated 2014-02-21، amended by State Council Order of 2019-03-02۔
  - Article 9: "The State provides a minimum living guarantee to families whose per-capita income of cohabiting family members is below the local minimum living guarantee standard and that meet the local family-property-status requirements for the minimum living guarantee."
  - Article 10: "The minimum living guarantee standard shall be determined and published by the people's government of the province, autonomous region, municipality directly under the Central Government, or city divided into districts, based on the cost of living necessary for local residents, and shall be adjusted in due course according to the local economic and social development level and price changes."
  - Article 11، paragraph 1: "A written application shall be filed by the cohabiting family members with the township people's government or subdistrict office at the place of household registration; where family members have difficulty applying, they may entrust the villagers' committee or residents' committee to file the application on their behalf."
  - Article 47: "The State provides temporary assistance to families whose basic life is temporarily and seriously difficult due to emergencies such as fires and traffic accidents, or due to the sudden onset of a major illness of a family member…"
  - Article 48: "Applications for temporary assistance shall be filed with the township people's government or subdistrict office, and after review and public notice, approved by the civil affairs department of the county-level people's government."
  - Article 49: "The specific items and standards for temporary assistance shall be determined and published by the local people's government at or above the county level."
- <https://www.gov.cn/lianbo/bumen/202509/content_7042627.htm> — کھلا (National Bureau of Statistics report، 2025-09-28)۔
  - اصل متن: "At the end of 2024, the number of urban and rural minimum living guarantee recipients in China was 6.250 million and 33.615 million respectively; the average urban and rural minimum living guarantee standards were 798.1 yuan and 593.9 yuan per person per month, respectively"
- <https://www.gov.cn/zhengce/zhengceku/202403/content_7007237.htm> — کھلا۔ تصدیق شدہ 民发〔2024〕16 号، Ministry of Civil Affairs اور تین دیگر departments، 2024-03-21۔
  - اصل متن: "Dibao standard = local previous-year urban (rural) residents' per-capita consumption expenditure × the quantitative ratio."
- اپنایا نہیں گیا: Ministry of Civil Affairs mca.gov.cn statistical quarterly page 403 واپس آیا؛ dibao standard index page صرف 2022 Q1 تک درج کرتا ہے؛ 2024 Ministry of Civil Affairs Development Statistics Communiqué PDF (mca.gov.cn …/400985.pdf) ڈاؤن لوڈ ہوا لیکن متن extraction ناکام ہوئی، حوالہ نہیں دی گئی۔ gov.cn 2026-01-01 news page content_7053625 میں "as of the end of October 2025…dibao recipients 39.104 million" ہے مگر کوئی اوسط معیار figure نہیں، حوالہ نہیں دی گئی۔

## 8. رہائشی ہیلتھ انشورنس
- <https://www.nhsa.gov.cn/art/2024/8/26/art_105_13634.html> — کھلا (National Healthcare Security Administration policy interpretation، 2024-08-26، document number 医保发〔2024〕19 号)۔
  - اصل متن: "The fiscal subsidy and individual contribution standards were increased by 30 yuan and 20 yuan respectively over the previous year, reaching no less than 670 yuan and 400 yuan per person per year, respectively"
- <https://www.renqiu.gov.cn/renqiu/ybjbmwj/202510/6d90754638a248cba655e94ea518a3bb.shtml> — کھلا (Renqiu municipal government repost of Hebei Provincial Healthcare Security Administration et al. document، 冀医保发〔2025〕6 号، 2025-09-25، local document)۔
  - اصل متن: "The per-capita fiscal subsidy standard for resident health insurance in 2025 is raised by 30 yuan over the previous year, reaching no less than 700 yuan per person per year"; "may be maintained at no less than 400 yuan per person per year"; "Full funding for persons in extreme poverty and orphans; for minimum living guarantee recipients and for monitoring-target anti-poverty persons within the monitoring range whose risks have not yet been eliminated, fixed-amount funding at no less than 60% of the standard"
  - غیر مصدقہ: National Healthcare Security Administration کا "Notice on Doing a Good Job of Resident Basic Medical Insurance in 2025" (سرچ نتائج بتاتے ہیں کہ 医保发〔2025〕22 号 ہے) nhsa.gov.cn یا gov.cn پر نہیں ملا؛ اندراج کے نوٹ میں to-be-verified نشان زد۔ 2026 national notice تصدیق کی تاریخ تک حاصل نہیں ہوئی۔
- <https://www.gov.cn/gongbao/content/2021/content_5659514.htm> — کھلا۔ تصدیق شدہ 国办发〔2021〕42 号، 2021-10-28۔
  - اصل متن: "Full funding for persons in extreme poverty; fixed-amount funding for minimum living guarantee recipients and for those who have returned to or fallen into poverty."; "For medical expenses that meet the regulations for minimum living guarantee recipients and persons in extreme poverty, the assistance ratio shall be no less than 70%"
- <https://www.gov.cn/zhengce/content/202408/content_6965741.htm> — کھلا۔ تصدیق شدہ 国办发〔2024〕38 号، drafted 2024-07-26۔
  - اصل متن: "For persons who do not enroll during the resident-health-insurance centralized enrollment period or who have not continuously enrolled, a fixed 3-month post-enrollment waiting period is set"; "For those who have not continuously enrolled, for each additional year of non-enrollment, in principle, a 1-month variable waiting period is added to the fixed waiting period"
  - اسی دستاویز کو <https://app.www.gov.cn/govdata/gov/202408/01/517878/article.html> پر بھی کھولا گیا اور مواد مماثل پایا گیا، اور "For each additional year of payment, the variable waiting period may be reduced by 1 month"۔
- <https://www.nhsa.gov.cn/art/2026/3/5/art_14_19809.html> — کھلا (National Healthcare Security Administration، 2026-03-05)۔ اصل متن: "Per-capita fiscal subsidy standard for resident health insurance increased by 24 yuan."

## 9. شناختی کارڈ
- <https://www.gov.cn/gongbao/content/2003/content_62254.htm> — کھلا۔ تصدیق شدہ "Resident Identity Card Law" (居民身份证法)، Presidential Order No. 4، 2003-06-28۔
  - Article 12: "Public security organs shall issue resident identity cards within 60 days from the date a citizen submits the 'Resident Identity Card Application Form'."
  - Article 20: "Citizens applying for the issuance, renewal, or replacement of a resident identity card shall pay a certificate fee. The fee standard for resident identity cards shall be set by the State Council's price authority in conjunction with the State Council's finance department."
  - نوٹ: حوالہ شدہ متن 2003 promulgated version ہے؛ اس قانون میں 2011 میں ترمیم ہوئی؛ اندراج کا نوٹ وضاحت کرتا ہے۔
- <https://www.gov.cn/zhengce/2021-12/25/content_5712922.htm> — کھلا۔ تصدیق شدہ "Measures for the Administration of Temporary Resident Identity Cards" (临时居民身份证管理办法)، Ministry of Public Security Order No. 78، 2005-06-07، effective 2005-10-01۔
  - Article 2: "Where, during the period of applying for the issuance, renewal, or replacement of a resident identity card, the resident identity card is urgently needed, an application may be made for a temporary resident identity card."
  - Article 7: "The validity period of a temporary resident identity card is three months"
  - Article 9: "An application may be filed with the public security police station at the place of habitual household registration for a temporary resident identity card."
  - Article 12: "The temporary resident identity card shall be issued to the applicant within three days after receiving the application."
  - Article 17: "Citizens applying for the issuance, renewal, or replacement of a temporary resident identity card shall pay a certificate fee."

## 10. ایمپلائمنٹ ڈیفیکلٹی پرسن سبسڈیز
- <https://www.gov.cn/zhengce/zhengceku/202401/content_6926462.htm> — کھلا۔ تصدیق شدہ "Measures for the Administration of Employment Subsidy Funds" (就业补助资金管理办法) (财社〔2017〕164 号 revised edition) of the Ministry of Finance and MOHRSS، 2023-12-20۔
  - اصل متن: "For employment-difficulty persons who engage in flexible employment after paying social insurance premiums, a certain amount of social insurance subsidy shall be given, with the subsidy standard in principle not exceeding 2/3 of the actual premium paid"; "for no more than 3 years"
  - اصل متن: "For employment-difficulty persons placed in public-welfare positions, a position subsidy shall be given, with the subsidy standard set by reference to the local minimum wage standard"
  - اصل متن: "For university graduates in the year of graduation who actively seek employment or start a business, from families receiving dibao, zero-employment families, anti-poverty monitoring-target families, and persons in extreme difficulty, and for university graduates with disabilities and those who have received national student loans, a one-time job-seeking subsidy shall be given"
- Employment Promotion Law (اندراج 5 کے مماثل پیج) Article 52: "Adopt measures such as tax and fee reductions, loan interest subsidies, social insurance subsidies, and position subsidies, and through channels such as placement in public-welfare positions, give priority support and key assistance to employment-difficulty persons"; Article 53: "Public-welfare positions developed by government investment shall, in principle, give priority to placement of employment-difficulty persons meeting the position requirements."
- اپنایا نہیں گیا: unemployment insurance skill-enhancement subsidy (人社部发〔2017〕40 号، 1000/1500/2000 yuan) — MOHRSS original page blank، gov.cn news page 404، تصدیق نہیں ہو سکا؛ پورا اندراج چھوڑ دیا گیا۔

## 11. جاب سرچ مداخلت
- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:%2210.1037/a0035923%22&resultType=core&format=json> — کھلا (Europe PMC record؛ PubMed page خود صرف cookie prompt واپس کرتا تھا)۔ تصدیق شدہ Liu S, Huang JL, Wang M, Psychological Bulletin 2014;140:1009-1041, DOI 10.1037/a0035923۔
  - اصل متن: "Summarizing the data from 47 experimentally or quasi-experimentally evaluated job search interventions"; "the odds of obtaining employment were 2.67 times higher for job seekers participating in job search interventions"
  - اصل متن (active ingredients): "teaching job search skills, improving self-presentation, boosting self-efficacy, encouraging proactivity, promoting goal setting, and enlisting social support"; simultaneously "skill development and motivation enhancement" شامل ہونا ضروری ہے۔

## 12. pitsfall سے بچاؤ
- <https://www.gov.cn/gongbao/content/2007/content_711013.htm> — کھلا۔ تصدیق شدہ "Labor Contract Law" (劳动合同法)، Presidential Order No. 65، adopted 2007-06-29۔
  - Article 9: "When an employer hires a worker, it may not withhold the worker's resident identity card or other documents, may not require the worker to provide a guarantee, or collect money or property from the worker under any other name."
  - Article 84 (excerpt): "Collecting money or property from a worker under the name of a guarantee or otherwise shall be ordered by the labor administrative department to return the money to the worker within a prescribed time limit, and a fine of 500 to 2,000 yuan per worker shall be imposed"
  - State Administration for Market Regulation page <https://www.samr.gov.cn/zw/zfxxgk/fdzdgknr/bgt/art/2023/art_0abfdd261c03417b949df19d869add8d.html> (2012 amended version) پر بھی کھولا اور تصدیق کیا گیا؛ Articles 9 اور 84 کا متن مماثل ہے۔
- <https://www.gov.cn/zhengce/2022-11/28/content_5711307.htm> — کھلا۔ تصدیق شدہ "Employment Service and Employment Management Provisions" (就业服务与就业管理规定)، Ministry of Labor and Social Security Order No. 28، 2007-11-05۔
  - Article 14 (excerpt): "Withholding the resident identity card and other documents of the hired person"; "Collecting money or property from a worker under the name of a guarantee or otherwise"
  - Article 55: "Where the provision of job-intermediary services is unsuccessful, the intermediary service fee collected from the worker shall be refunded"; Article 58 prohibits "withholding the worker's resident identity card and other documents, or collecting a deposit from the worker"
- <https://chinajob.mohrss.gov.cn/h5/c/2026-05-18/543038.shtml> — کھلا (MOHRSS, Cyberspace Administration of China, Ministry of Education, Ministry of Public Security, National Financial Regulatory Administration, 2026-05-18)۔
  - اصل متن: "Some lawless elements use recruitment as a pretext to drive traffic, disguise the sale of training courses, and induce job seekers to pay high fees or even apply for loans to attend training"; "should resolutely refuse"
- <https://www.gov.cn/gongbao/content/2005/content_80604.htm> — کھلا۔ تصدیق شدہ "Regulations on Prohibition of Pyramid Selling" (禁止传销条例)، State Council Order No. 444، adopted 2005-08-10، effective 2005-11-01۔
  - Article 7، paragraph 1 (excerpt): "Requiring the recruited person to recruit other persons to join, with compensation calculated and paid based on the number of persons directly or indirectly rolled-recruited"
  - Article 24: "Where a person participates in pyramid selling in violation of Article 7 of these Regulations, the administrative department for industry and commerce shall order the cessation of the illegal act, and may impose a fine of no more than 2,000 yuan."
- <https://www.court.gov.cn/fabu/xiangqing/249031.html> — کھلا۔ تصدیق شدہ Supreme People's Court amending decision، 法释〔2020〕6 号، effective 2020-08-20۔
  - Article 26: "Except where the interest rate agreed by both parties exceeds four times the one-year Loan Prime Rate at the time of contract formation."
- <https://www.court.gov.cn/zixun/xiangqing/249051.html> — کھلا (SPC news، 2020-08-20)۔
  - اصل متن: "Using … four times the one-year Loan Prime Rate (LPR) as the standard to determine the judicial protection upper limit on private-lending interest rates, replacing the previous regulation's 'two-line, three-zone' rule based on 24% and 36%"
  - غیر مصدقہ: December 2020 second amendment کا مکمل متن (SPC gazette page gongbao.court.gov.cn نے تین بار 502 واپس کیا، International Commercial Court page redirect loop ہے)؛ اس لیے اندراج August 2020 version کے Article 26 کا حوالہ دیتا ہے اور نوٹ کرتا ہے کہ article number تبدیل ہو چکا ہے۔
- Ministry of Education 2024-05-22 job-seeking reminder <https://app.www.gov.cn/govdata/gov/202405/22/515248/article.html> — کھلا، اس میں "training loans, car loans, beauty loans and other new-type recruitment traps" شامل ہیں، circumstantial evidence کے طور پر استعمال ہوا اور source کے طور پر درج نہیں۔

## 13. پبلک رینٹل ہاؤسنگ
- <https://www.gov.cn/gongbao/content/2012/content_2226147.htm> — کھلا۔ تصدیق شدہ "Measures for the Administration of Public Rental Housing" (公共租赁住房管理办法)، Ministry of Housing and Urban-Rural Development Order No. 11، promulgated 2012-05-28، effective 2012-07-15۔
  - Article 7: "Application for public rental housing shall meet the following conditions: (1) no housing locally or housing area below the prescribed standard; (2) income and property below the prescribed standard; (3) where the applicant is a migrant worker, stable employment locally for the prescribed number of years."
  - Article 8: "The applicant shall, in accordance with the regulations of the housing-security authority of the municipal or county-level people's government, submit application materials and shall be responsible for the truthfulness of the application materials."
  - Article 10: "Applicants registered as waiting-list candidates shall be allocated public rental housing within the waiting period. The waiting period generally shall not exceed 5 years."

## 14. مقررہ اخراجات
- <https://www.stats.gov.cn/sj/zxfbhjd/202601/t20260119_1962321.html> — کھلا (National Bureau of Statistics، 2026-01-19)۔
  - اصل متن: "In 2025, the national per-capita consumption expenditure was 29,476 yuan"; "Per-capita food, tobacco, and alcohol consumption expenditure was 8,631 yuan, up 2.6%, accounting for 29.3% of per-capita consumption expenditure"; "Per-capita housing consumption expenditure was 6,397 yuan, up 2.1%, accounting for 21.7% of per-capita consumption expenditure"
- <https://www.gov.cn/govweb/zhengce/zhengceku/202310/content_6911233.html> — کھلا۔ تصدیق شدہ "Action Plan for Actively Developing Elderly Meal-Assistance Services" (积极发展老年助餐服务行动方案)، 民发〔2023〕58 号، 2023-10-20۔
  - اصل متن: "Improve the configuration of elderly-meal-assistance service facilities such as elderly canteens, elderly dining tables, and elderly meal-assistance points"; "Provide differentiated subsidies to elderly persons receiving meal-assistance services"; "Broadly carry out meal-assistance services for other elderly persons"
- <https://rst.sc.gov.cn/rst/ylbxjwjgzxx/2026/7/10/89a8ef06cc264d29b282d7c62f362a6b.shtml> — کھلا (Sichuan Provincial Department of Human Resources and Social Security، 2026-07-10، titled "Minimum Wage Standards by Province, Autonomous Region, and Municipality Nationwide (as of January 1, 2026)"، page source noted as MOHRSS official site)۔ سب سے زیادہ first-tier monthly minimum wage: Shanghai 2740 yuan؛ سب سے کم: Qinghai 2080 yuan۔
  - غیر مصدقہ: MOHRSS original page <https://www.mohrss.gov.cn/SYrlzyhshbzb/laodongguanxi_/fwyd/> blank واپس آیا، اور 2025-01 issue page 403۔ Hourly minimum wage figures استعمال نہیں ہوئے۔

## 15. سوشل انشورنس breaks
- <https://www.gov.cn/guoqing/2021-10/29/content_5647616.htm> — کھلا۔ تصدیق شدہ "Social Insurance Law" (社会保险法)، adopted 2010-10-28، amended 2018-12-29۔
  - Article 16: "An individual who participates in basic pension insurance and has cumulatively contributed for 15 years upon reaching the statutory retirement age shall receive a basic pension monthly."
  - Article 19: "Where an individual moves across different pooling regions for employment, the basic pension insurance relationship shall be transferred with the individual, and the contribution years shall be cumulatively calculated."
  - Article 27: "An individual who participates in employee basic medical insurance and has cumulatively contributed for the state-prescribed years upon reaching the statutory retirement age shall no longer pay basic medical insurance premiums after retirement."
- 国办发〔2024〕38 号، اندراج 8 کے مماثل۔

## 16. 24-گھنٹے مقامات
- درجہ C experiential entry، کوئی source نہیں۔

## شامل نہ کیے گئے امیدوار
- Unemployment assistance benefit (人社部发〔2020〕40 号): 2020-stage policy؛ original page chinajob.mohrss.gov.cn پر ہے، لیکن موجودہ وقت تک جاری ہے یا نہیں تصدیق نہیں ہو سکا؛ شامل نہیں کیا گیا۔
- Special notice on temporary assistance (国发〔2014〕47 号): الگ سے تصدیق نہیں ہوا؛ temporary assistance "Interim Measures for Social Assistance" پر مبنی ہے۔
- پانی/بجلی/گas arrears کے نتائج: کوئی national-level سرکاری original text نہیں ملا؛ شامل نہیں کیا گیا۔
