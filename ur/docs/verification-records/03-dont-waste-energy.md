# سیکشن 3 ماخذ کی تصدیق کا ریکارڈ

نوٹ: اس مشین کے WebFetch پر زیادہ تر پبلشر پیجز (APA psycnet, Elsevier, SAGE, PNAS, Springer, PubMed) 403 / CAPTCHA / cookie-only پرومپٹس واپس کرتے ہیں، اس لیے تصدیق کا راستہ یہ ہے: پہلے <https://doi.org/>... کے ذریعے حل کریں تاکہ DOI کے موجود ہونے کی تصدیق ہو اور redirect ٹارگٹ کا معائنہ ہو (پبلشر اور جرنل کی تصدیق)، پھر عنوان، مصنفین، سال، اور ابسٹریکٹ لفظ بہ لفظ Europe PMC REST API / Crossref API / OpenAlex API / PMC full-text پیج / مصنف یا یونیورسٹی کی سرکاری PDF کے ذریعے حاصل کریں۔ ہر اندراج میں وہ URL درج ہے جو حقیقتاً کھولا گیا اور اصل متن میں حوالہ شدہ اعداد کا مقام۔

## اندراج 1

- <https://doi.org/10.1037/xhp0000100> → doi.apa.org پر 302، DOI موجود ہے؛ psycnet پیج 403
- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.1037/xhp0000100&format=json&resultType=core> → تصدیق شدہ: Stothart C, Mitchum A, Yehnert C (2015) The attentional cost of receiving a cell phone notification. J Exp Psychol Hum Percept Perform
  - ابسٹریکٹ لفظ بہ لفظ: "cellular phone notifications alone significantly disrupted performance on an attention-demanding task, even when participants did not directly interact with a mobile device during the task. The magnitude of observed distraction effects was comparable in magnitude to those seen when users actively used a mobile phone, either for voice calls or text messaging."
- <https://doi.org/10.1086/691462> → journals.uchicago.edu پر 302، DOI موجود ہے؛ پبلشر پیج 403
- <https://api.crossref.org/works/10.1086/691462> → تصدیق شدہ: Ward AF, Duke K, Gneezy A, Bos MW (2017) Brain Drain: The Mere Presence of One's Own Smartphone Reduces Available Cognitive Capacity. J Assoc Consum Res 2(2):140-154
- <https://api.openalex.org/works/doi:10.1086/691462> → ابسٹریکٹ لفظ بہ لفظ: "Results from two experiments indicate that even when people are successful at maintaining sustained attention—as when avoiding the temptation to check their phones—the mere presence of these devices reduces available cognitive capacity. Moreover, these costs are highest for those in smartphone dependence."
  - تین کنڈیشنز "desk / pocket / another room" اور دو میٹرکس "working memory, fluid intelligence" میری پیپر سے یادداشت سے آئے ہیں؛ ابسٹریکٹ میں صرف دو تجربات اور available cognitive capacity کا ذکر ہے؛ یہ دو تفصیلات **اصل متن میں لفظ بہ لفظ تصدیق نہیں ہو سکیں** (مکمل متن نہیں کھولا جا سکا)؛ انہیں اندراج سے ہٹا دیا گیا ہے، اور اب اندراج میں صرف وہ بیانات رکھے گئے ہیں جو ابسٹریکٹ لفظ بہ لفظ کی تائید کرتے ہیں۔

## اندراج 2

- <https://doi.org/10.1038/s41598-017-03171-4> → nature.com پر 302، DOI موجود ہے؛ nature پیج authorized redirect چاہتا ہے
- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.1038/s41598-017-03171-4&format=json&resultType=core> → تصدیق شدہ: Phillips AJK, Clerx WM, O'Brien CS, Sano A, Barger LK, Picard RW, Lockley SW, Klerman EB, Czeisler CA (2017) Irregular sleep/wake patterns are associated with poorer academic performance and delayed circadian and sleep/wake timing. Sci Rep
  - ابسٹریکٹ لفظ بہ لفظ: "We studied 61 undergraduates for 30 days ... DLMO occurred later (00:08 ± 1:54 vs. 21:32 ± 1:48; p < 0.003); the daily sleep propensity rhythm peaked later (06:33 ± 0:19 vs. 04:45 ± 0:11; p < 0.005) ... A positive correlation (r = 0.37; p < 0.004) between academic performance and SRI was observed ... Irregular vs. Regular group differences in circadian timing were likely primarily due to their different patterns of light exposure."
  - "约 2.5 小时" (تقریباً 2.5 گھنٹے) اور "约 1.8 小时" (تقریباً 1.8 گھنٹے) وہ تقریبی قدریں ہیں جو میں نے اوپر کے وقت کے فرق سے اخذ کی ہیں۔

## اندراج 3

- <https://doi.org/10.1093/sleep/26.2.117> → academic.oup.com پر 302، پھر <https://academic.oup.com/sleep/article-lookup/doi/10.1093/sleep/26.2.117> کامیابی سے کھلا
  - تصدیق شدہ: Van Dongen HPA, Maislin G, Mullington JM, Dinges DF (2003) The Cumulative Cost of Additional Wakefulness: Dose-Response Effects on Neurobehavioral Functions and Sleep Physiology From Chronic Sleep Restriction and Total Sleep Deprivation. Sleep 26(2):117-126
  - ابسٹریکٹ لفظ بہ لفظ (OUP پیج اور Europe PMC دونوں پر مماثل): "A total of n = 48 healthy adults (ages 21-38)"; "Chronic restriction of sleep periods to 4 h or 6 h per night over 14 consecutive days resulted in significant cumulative, dose-dependent deficits in cognitive performance on all tasks"; "chronic restriction of sleep to 6 h or less per night produced cognitive performance deficits equivalent to up to 2 nights of total sleep deprivation"; "Subjective sleepiness ratings showed an acute response to sleep restriction but only small further increases on subsequent days, and did not significantly differentiate the 6 h and 4 h conditions."
- <https://doi.org/10.1037/a0018883> → doi.apa.org پر 302، DOI موجود ہے
- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.1037/a0018883&format=json&resultType=core> → تصدیق شدہ: Lim J, Dinges DF (2010) A meta-analysis of the impact of short-term sleep deprivation on cognitive variables. Psychol Bull
  - ابسٹریکٹ لفظ بہ لفظ: "short-term (<48 hr) total sleep deprivation"; "70 articles containing 147 cognitive tests"; "lapses in simple attention: g = -0.776, 95% CI [-0.96, -0.60], p < .001"; "reasoning accuracy: g = -0.125, 95% CI [-0.27, 0.02]"

## اندراج 4

- <https://doi.org/10.5664/jcsm.3170> → 302، DOI موجود ہے؛ jcsm.aasm.org سرٹیفکیٹ ایرر، Springer authorized چاہتا ہے
- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.5664/jcsm.3170&format=json&resultType=core> → تصدیق شدہ: Drake C, Roehrs T, Shambroom J, Roth T (2013) Caffeine effects on sleep taken 0, 3, or 6 hours before going to bed. J Clin Sleep Med; PMID 24235903, PMCID PMC3805807
- <https://pmc.ncbi.nlm.nih.gov/articles/PMC3805807/> → مکمل متن کامیابی سے کھلا
  - باڈی لفظ بہ لفظ: "For TST, reductions in duration relative to placebo were significant at each of the caffeine administration time points, reducing TST between 1.1 to 1.2 hours."; "Caffeine administered 6 h prior to bedtime reduced total sleep time by 41 min, which approached significance (p = 0.08)." (diary); "only the objective measure detected differences when caffeine was taken 6 hours prior to bedtime"
- <https://doi.org/10.1016/j.smrv.2023.101764> → linkinghub.elsevier.com پر 302، DOI موجود ہے
- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.1016/j.smrv.2023.101764&format=json&resultType=core> → تصدیق شدہ: Gardiner C, Weakley J, Burke LM, Roach GD, Sargent C, Maniar N, Townshend A, Halson SL (2023) The effect of caffeine on subsequent sleep: A systematic review and meta-analysis. Sleep Med Rev
  - ابسٹریکٹ لفظ بہ لفظ: "Caffeine consumption reduced total sleep time by 45 min and sleep efficiency by 7%"; "coffee (107 mg per 250 mL) should be consumed at least 8.8 h prior to bedtime"

## اندراج 5

- <https://doi.org/10.1016/j.chb.2014.11.005> → linkinghub.elsevier.com پر 302، DOI موجود ہے؛ sciencedirect 403
- <https://api.crossref.org/works/10.1016/j.chb.2014.11.005> → تصدیق شدہ: Kushlev K, Dunn EW (2015) Checking email less frequently reduces stress. Comput Hum Behav 43:220-228
- <https://dunn.psych.ubc.ca/wp-content/uploads/2010/11/kushlev-dunn-email-and-stress-in-press1.pdf> (مصنفین کی لیب سائٹ پر میزبانی شدہ منظور شدہ manuscript PDF، مقامی pdftotext extraction)
  - ابسٹریکٹ لفظ بہ لفظ: "During one week, 124 adults were randomly assigned to limit checking their email to three times a day; during the other week, participants could check their email an unlimited number of times per day."
  - باڈی لفظ بہ لفظ: "participants felt less daily stress in the limited as compared to the unlimited email condition, F(1, 121) = 4.18, p = .04, Cohen's d = .37"; "the average number of times people reported checking their email on a normal day at work was 15.48 at baseline (SD = 8.69)"; "there were no significant differences between conditions in how many emails people received (Mlimited = 16.64 vs. Munlimited = 16.04 ...) or responded to"

## اندراج 6

- <https://doi.org/10.1037/a0030986> → doi.apa.org پر 302، DOI موجود ہے
- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.1037/a0030986&format=json&resultType=core> → تصدیق شدہ: Altmann EM, Trafton JG, Hambrick DZ (2014) Momentary interruptions can derail the train of thought. J Exp Psychol Gen
  - ابسٹریکٹ لفظ بہ لفظ: "Interruptions averaging 4.4 s long tripled the rate of sequence errors on post-interruption trials relative to baseline trials. Interruptions averaging 2.8 s long--about the time to perform a step in the interrupted task--doubled the rate of sequence errors."
- <https://www.ics.uci.edu/~gmark/CHI2005.pdf> (مصنف کی UCI سرکاری ہوم پیج PDF، مقامی pdftotext extraction)
  - ابسٹریکٹ لفظ بہ لفظ: "detailed observation of 24 information workers"; "57% of their working spheres are interrupted"; باڈی: "11 min. 4 sec." (سوئچ کرنے سے پہلے central/peripheral work theme میں اوسط مدت)؛ "When people did resume work on the same day, it took an average length of time of 25 min. 26 sec (sd=54 min. 48 sec.) ... before resuming work, our informants worked in an average of 2.26 (sd=2.79) working spheres."
  - DOI تصدیق: میرا پہلے نوٹ کردہ DOI، 10.1145/1054972.1054989، OpenAlex کے ذریعے دوسرے پیپر (Marshall & Bly) کے طور پر تصدیق ہوا، اور درست کر دیا گیا۔ <https://api.crossref.org/works/10.1145/1054972.1055017> اور <https://api.openalex.org/works/doi:10.1145/1054972.1055017> دونوں Mark, Gonzalez, Harris (2005) No task left behind? Examining the nature of fragmented work. CHI 2005 pp.321-330 کی تصدیق کرتے ہیں
- <https://www.ics.uci.edu/~gmark/chi08-mark.pdf> (مصنف کی سرکاری PDF، مقامی extraction)
  - ابسٹریکٹ لفظ بہ لفظ: "people completed interrupted tasks in less time with no difference in quality ... but this comes at a price: experiencing more stress, higher frustration, time pressure and effort."; باڈی: "Forty-eight subjects participated."
  - <https://api.crossref.org/works/10.1145/1357054.1357072> → تصدیق شدہ: Mark G, Gudith D, Klocke U (2008) The cost of interrupted work: more speed and stress. CHI 2008 pp.107-110
  - نوٹ کا "about half of interruptions are self-initiated" میری پیپر سے یادداشت سے آیا تھا؛ extract شدہ متن میں لفظ بہ لفظ تصدیق نہیں ہوا، اور اندراج کے نوٹ سے ہٹا دیا گیا ہے۔

## اندراج 7

- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=TITLE:%22Task%20switching%22%20AND%20AUTH:Monsell%20AND%20PUB_YEAR:2003&format=json&resultType=core> → تصدیق شدہ: Monsell S (2003) Task switching. Trends Cogn Sci; DOI 10.1016/s1364-6613(03)00028-7; PMID 12639695
  - ابسٹریکٹ لفظ بہ لفظ: "Subjects' responses are substantially slower and, usually, more error-prone immediately after a task switch."
  - نوٹ: Europe PMC کو براہ راست DOI سے query کرنے پر 0 نتائج ملے (parenthesis encoding کا مسئلہ)؛ title+author کے ذریعے حاصل کیا گیا۔
- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.1073/pnas.0903620106&format=json&resultType=core> → تصدیق شدہ: Ophir E, Nass C, Wagner AD (2009) Cognitive control in media multitaskers. PNAS
  - ابسٹریکٹ لفظ بہ لفظ: "heavy media multitaskers are more susceptible to interference from irrelevant environmental stimuli and from irrelevant representations in memory ... heavy media multitaskers performed worse on a test of task-switching ability"
  - نوٹ: یہ DOI براہ راست doi.org کے ذریعے نہیں کھولا گیا؛ Europe PMC رجسٹریشن کے ذریعے تصدیق ہوا۔
- <https://api.crossref.org/works/10.1037/0096-1523.27.4.763> بھی query کیا گیا جو Rubinstein, Meyer & Evans (2001) کے موجود ہونے کی تصدیق کرتا ہے، لیکن ابسٹریکٹ حاصل نہیں ہو سکی اور آخر کار اندراج میں حوالہ نہیں دی گئی۔

## اندراج 8

- <https://doi.org/10.1073/pnas.1418490112> → pnas.org پر 302، DOI موجود ہے؛ pnas.org 403
- Europe PMC سرچ کی تصدیق: Chang AM, Aeschbach D, Duffy JF, Czeisler CA (2015) Evening use of light-emitting eReaders negatively affects sleep, circadian timing, and next-morning alertness. PNAS; PMCID PMC4313820
- <https://pmc.ncbi.nlm.nih.gov/articles/PMC4313820/> → مکمل متن کامیابی سے کھلا
  - باڈی لفظ بہ لفظ: "took longer to fall asleep ... 25.65 ± 18.78 min vs. 15.75 ± 13.09 min"; "suppressed evening levels of melatonin by 55.12 ± 20.12%"; "Dim light melatonin onset was >1.5 h later on the day following the LE-eBook condition (22:31 ± 0:42) than in the print-book condition (21:01 ± 0:49)"; "feeling sleepier the morning after reading an LE-eBook ... it took them hours longer to fully wake up"
  - نوٹ کا "maximum brightness, continuous reading for hours" میری تجرباتی سیٹ اپ کی یادداشت سے آیا تھا؛ لفظ بہ لفظ تصدیق نہیں ہوا، اندراج کے نوٹ سے ہٹا دیا گیا۔

## اندراج 9

- <https://doi.org/10.1093/sleep/29.6.831> → 302، پھر <https://academic.oup.com/sleep/article-lookup/doi/10.1093/sleep/29.6.831> کامیابی سے کھلا
  - تصدیق شدہ: Brooks A, Lack L (2006) A Brief Afternoon Nap Following Nocturnal Sleep Restriction: Which Nap Duration is Most Recuperative? Sleep 29(6):831-840
  - ابسٹریکٹ لفظ بہ لفظ: "The 5-minute nap produced few benefits in comparison with the no-nap control."; "The 10-minute nap produced immediate improvements in all outcome measures (including sleep latency, subjective sleepiness, fatigue, vigor, and cognitive performance), with some of these benefits maintained for as long as 155 minutes."; 20-minute: بہتری نیند کے 35 منٹ بعد ظاہر ہوئی، 125 منٹ تک رہی؛ "The 30-minute nap produced a period of impaired alertness and performance immediately after napping, indicative of sleep inertia, followed by improvements lasting up to 155 minutes after the nap."

## اندراج 10

- <https://doi.org/10.1016/j.jenvp.2011.07.002> → linkinghub.elsevier.com پر 302، DOI موجود ہے؛ sciencedirect 403؛ PubMed میں کوئی ریکارڈ نہیں (non-MEDLINE جرنل)
- <https://api.crossref.org/works/10.1016/j.jenvp.2011.07.002> → تصدیق شدہ: Jahncke H, Hygge S, Halin N, Green AM, Dimberg K (2011) Open-plan office noise: Cognitive performance and restoration. J Environ Psychol 31(4):373-382
- <http://hig.diva-portal.org/smash/record.jsf?pid=diva2%3A434794&dswid=2269> (University of Gävle سرکاری institutional repository ریکارڈ) → کامیابی سے کھلا، عنوان/مصنفین/جرنل/DOI میچ کرتے ہیں
  - ابسٹریکٹ لفظ بہ لفظ: "The background sound level increased by 12 dB, from 39 to 51 dB LAeq."; "Decreased word memory performance, increased fatigue and motivational deficits when the background sound level increased."; "A break with a nature movie with corresponding sound increased energy ratings compared to just listening to river sounds or office noise."
  - N = 47، فی سیشن 2 گھنٹے کام: WebSearch سے ملنے والے ابسٹریکٹ snippet سے، diva پیج پر لفظ بہ لفظ نہیں دیکھا، اندراج سے ہٹا دیا گیا۔

## اندراج 11

- <https://doi.org/10.1111/ecoj.12166> → academic.oup.com/ej/article/125/589/2052-2076/5078088 پر 302، DOI موجود ہے؛ OUP پیج صرف نیویگیشن دکھاتا ہے
- <https://api.crossref.org/works/10.1111/ecoj.12166> → تصدیق شدہ: Pencavel J (2015) The Productivity of Working Hours. The Economic Journal 125(589):2052-2076
- <https://api.semanticscholar.org/graph/v1/paper/DOI:10.1111/ecoj.12166> → ابسٹریکٹ لفظ بہ لفظ: "below an hours threshold, output is proportional to hours; above a threshold, output rises at a decreasing rate as hours increase."
- <https://docs.iza.org/dp8129.pdf> (IZA DP No. 8129، اسی پیپر کا ورکنگ پیپر ورژن، سرکاری institutional سائٹ؛ مقامی pdftotext extraction)
  - باڈی لفظ بہ لفظ: "below 49 weekly hours, variations in output are proportional to variations in hours; for those observations corresponding to 49 or more hours, output rises with hours at a decreasing rate and a maximum of output occurs at about 63 hours. Output at 70 hours differs little from output at 56 hours"; نتیجہ: "The working week threshold for the munition workers considered in this paper was at 48 hours, but for other workers it may be more or less."
  - نوٹ: باڈی 49 گھنٹے کو cutoff استعمال کرتی ہے، نتیجے کا پیراگراف 48 گھنٹے کہتا ہے؛ اندراج 49 استعمال کرتا ہے۔ اعداد کو ورکنگ پیپر ورژن کے خلاف چیک کیا گیا؛ سرکاری جرنل ورژن نہیں کھولا جا سکا۔

## اندراج 12

- <https://doi.org/10.1111/j.1745-6924.2008.00088.x> → journals.sagepub.com پر 302، DOI موجود ہے؛ SAGE پیج 403
- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.1111/j.1745-6924.2008.00088.x&format=json&resultType=core> → تصدیق شدہ: Nolen-Hoeksema S, Wisco BE, Lyubomirsky S (2008) Rethinking Rumination. Perspect Psychol Sci
  - ابسٹریکٹ لفظ بہ لفظ: "rumination exacerbates depression, enhances negative thinking, impairs problem solving, interferes with instrumental behavior, and erodes social support"; نیز "anxiety, binge eating, binge drinking, and self-harm"

## اندراج 13

- <https://api.crossref.org/works/10.1037/0022-3514.46.5.1097> → تصدیق شدہ: Rook KS (1984) The negative side of social interaction: Impact on psychological well-being. J Pers Soc Psychol 46(5):1097-1108
- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=TITLE:%22The%20negative%20side%20of%20social%20interaction%22%20AND%20AUTH:Rook&format=json&resultType=core> → PMID 6737206, DOI 10.1037//0022-3514.46.5.1097
  - ابسٹریکٹ لفظ بہ لفظ: "negative social outcomes were more consistently and more strongly related to well-being than were positive social outcomes"; نمونہ 120 widowed خواتین 60-89 سال۔
- نوٹ: <https://doi.org/10.1037/0022-3514.46.5.1097> خود براہ راست نہیں کھولا گیا (پرانی APA DOIs سب psycnet 403 پر جم جاتی ہیں)، لیکن Crossref اور Europe PMC دونوں اس DOI کو آزادانہ طور پر رجسٹر کرتے ہیں۔

## اندراج 14

- <https://api.crossref.org/works/10.1037/0022-3514.74.5.1252> → تصدیق شدہ: Baumeister RF, Bratslavsky E, Muraven M, Tice DM (1998) Ego depletion: Is the active self a limited resource? J Pers Soc Psychol 74:1252-1265
- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=TITLE:%22Ego%20depletion%3A%20is%20the%20active%20self%20a%20limited%20resource%22&format=json&resultType=core> → PMID 9599441, ابسٹریکٹ لفظ بہ لفظ: "Choice, active response, self-regulation, and other volition may all draw on a common inner resource."
- <https://doi.org/10.1177/1745691616652873> → SAGE پر 302، DOI موجود ہے؛ SAGE 403
- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.1177/1745691616652873&format=json&resultType=core> → تصدیق شدہ: Hagger MS, Chatzisarantis NLD, Alberts H, et al. (2016) A Multilab Preregistered Replication of the Ego-Depletion Effect. Perspect Psychol Sci
  - ابسٹریکٹ لفظ بہ لفظ: 23 labs، 2141 افراد؛ "the size of the ego-depletion effect was small with 95% confidence intervals (CIs) that encompassed zero (d = 0.04, 95% CI [-0.07, 0.15]"
- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.1177/0956797621989733&format=json&resultType=core> → تصدیق شدہ: Vohs KD, Schmeichel BJ, Lohmann S, et al. (2021) A Multisite Preregistered Paradigmatic Test of the Ego-Depletion Effect. Psychol Sci
  - ابسٹریکٹ لفظ بہ لفظ: "preregistered multilaboratory project (k = 36; N = 3,531) ... Confirmatory tests found a nonsignificant result (d = 0.06)"
  - نوٹ: یہ DOI براہ راست doi.org کے ذریعے نہیں کھولا گیا؛ Europe PMC رجسٹریشن کے ذریعے تصدیق ہوا۔

## غیر مصدقہ اشیاء کا خلاصہ

- اندراج 1 ڈرافٹ نے پہلے کہا تھا "desk / pocket / another room" اور "working memory and fluid intelligence"؛ چونکہ یہ کسی بھی کھلنے والے اصل متن میں لفظ بہ لفظ تصدیق نہیں ہو سکے، انہیں اندراج سے ہٹا دیا گیا ہے؛ صرف وہ بیانات رکھے گئے ہیں جو ابسٹریکٹ لفظ بہ لفظ سے تائید شدہ ہیں۔
- اندراج 6 نوٹ ڈرافٹ "about half of interruptions are self-initiated"، اندراج 8 نوٹ "maximum brightness, continuous reading for hours"، اندراج 10 "N = 47, 2 hours of work" اسی طرح ہٹا دیے گئے کیونکہ ان کی لفظ بہ لفظ تصدیق نہیں ہو سکی۔
- موجودہ ورژن کے 14 اندراجات کے "فائدہ" کالم کے اعداد کے بنیادی متن کے ماخذ اوپر درج ہیں؛ کسی اندراج کو TODO / تصدیق باقی ٹیگ کی ضرورت نہیں۔
