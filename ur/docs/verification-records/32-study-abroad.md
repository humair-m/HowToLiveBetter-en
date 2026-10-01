# سیکشن 32 Study Abroad: Status, Work, Insurance, and Returning-Country Credential Recognition · تصدیق کا ریکارڈ (2026-09-18)

کام کا آغاز: Repository issue #8، جہاں ایک قاری نے پوچھا "Is there advice for international students in common study-abroad countries, such as the US, Canada, the UK, Australia — what rights students have and how to protect them as international students"۔

موجودہ کورج: سیکشن 21 abroad جانے اور overseas safety (Ministry of Foreign Affairs safety alerts, 12308, consular protection کی حدود، overseas medical اور evacuation insurance، overseas high-salary recruitment traps) کور کرتا ہے، لیکن international student status یا academics کور نہیں کرتا۔ سیکشن 23 education کے returns کور کرتا ہے، لیکن foreign credential recognition نہیں۔ اس لیے نیا سیکشن کھولا گیا؛ یہ ان دونوں سیکشنز کو دہراتا نہیں، اور باڈی دونوں کی طرف کراس ریفرنس کرتی ہے۔

لینڈنگ پوائنٹ: نئی فائل `book/32-出国留学.md`، 10 اندراج۔ کورج قاری کے سوال کے مطابق US، Canada، UK، اور Australia تک محدود ہے، اعداد country کے لحاظ سے دیے گئے۔ **اس سیکشن میں تمام foreign-policy اعداد ستمبر 2026 تک کے طور پر نشان زد ہیں؛ باڈی اور سیکشن ہیڈ دونوں قاری کو خود source links کے خلاف تصدیق کرنے کی ہدایت کرتے ہیں، اور کہ long-term maintenance فراہم نہیں کی جاتی۔**

ماخذ لانے کے ٹولز: Local curl segfaulted؛ `Invoke-WebRequest` canada.ca اور cscse.edu.cn پر timeout یا disconnect ہو گیا؛ headless Chrome `--dump-dom` کا استعمال render شدہ DOM capture کرنے کے لیے ہوا (jsj.moe.gov.cn اور immi.homeaffairs.gov.au front-end rendered ہیں اور اس راستے سے جانا ضروری ہے)۔ اس سیکشن کے تمام 17 external links 2026-09-18 کو reachability کے لیے چلائے گئے؛ canada.ca کے سوا سب 200 واپس آئے، جسے local PowerShell fetch نہیں کر سکا لیکن headless Chrome کر سکا، اور مواد لفظ بہ لفظ تصدیق ہو چکا ہے۔

## اندراج 1 (Recognized Institution List)

| URL | تصدیق | بنیاد |
|---|---|---|
| <http://yxcx.cscse.edu.cn/> (Chinese Service Center for Scholarly Exchange "Recognized Institution Query" entry، cscse.edu.cn homepage anchor سے حاصل) | ہاں | پیج country اور institution name کے لحاظ سے search entry ہے |
| <https://jsj.moe.gov.cn/> (Ministry of Education Education Foreign-related Supervision Information Network homepage) | ہاں | کالمز میں document policies, alert information, اور cooperative education شامل ہیں |
| <http://rzzccx.crs.jsj.edu.cn/> (Chinese-Foreign Cooperative Education Certificate Authentication Registration Information Query) | ہاں | "For students enrolled since 2008, the registration number of a foreign academic degree certificate authentication can be queried by name and ID number" |

A درجہ دیا گیا: query entry اور institutional arrangements دونوں سرکاری صفحات پر لفظ بہ لفظ تصدیق کیے جا سکتے ہیں۔ فائدے کا درجہ "بڑا" — پیسہ میٹرک دس ہزار یوآن کی سطح پر tiered ہے؛ ٹیوشن اور ایک سے دو سال کا وقت دس ہزار یوآن سے ایک آرڈر آف میگنیچیوڈ زیادہ ہے۔ نوٹس میں "lists change, check annually" operational advice ہے، دستاویز کا اصل متن نہیں۔

## اندراج 2 (US Fixed Admission Period and 30-Day Departure Window)

| URL | تصدیق | اصل متن کے کلیدی نکات |
|---|---|---|
| <https://www.ecfr.gov/current/title-8/chapter-I/subchapter-B/part-214/section-214.2> (eCFR current text 8 CFR 214.2(f)) | ہاں | F-1 students جنہوں نے اپنا program اور approved practical training مکمل کیا ہے، "an additional 30-day period" program end date، four-year maximum admission period، یا OPT/STEM OPT authorization کے اختتام سے، departure کی تیاری یا دیگر lawful status تلاش کرنے کے لیے؛ جو اپنا program یا training جلد ختم کرتے ہیں انہیں end date کے 30 دن کے اندر روانہ ہونا چاہیے یا دیگر lawful status تلاش کرنی چاہیے |
| <https://www.federalregister.gov/documents/2026/07/17/2026-14439/establishing-a-fixed-time-period-of-admission-and-an-extension-of-stay-procedure-for-nonimmigrant> (Federal Register Final Rule) | ہاں | publication_date 2026-07-17, effective_on 2026-09-15 (federalregister.gov API field کے ذریعے تصدیق شدہ) |

**2026-09-25 اصلاح (issue #32)**: یہ اصول 2026-09-15 کو نافذ **نہیں** ہوا۔ 2026-09-14 کو، US District Court for the District of Massachusetts کے Judge Saylor نے، Presidents' Alliance on Higher Education and Immigration v. DHS (No. 1:26-cv-13799-FDS) میں، 5 U.S.C. § 705 کے تحت پورے اصول کی effective date کو nationwide effect کے ساتھ ملتوی کر دیا؛ vacatur اور summary judgment requests کو without prejudice خارج کر دیا، renewal کی اجازت دیتے ہوئے۔ اندراج کو اس کے طور پر دوبارہ لکھا گیا ہے کہ "نیا اصول معطل ہو چکا ہے؛ موجودہ framework D/S رہتا ہے اور 60-day grace period برقرار ہے"۔

| URL | تصدیق | اصل متن کے کلیدی نکات |
|---|---|---|
| <https://oiss.yale.edu/news/important-update-court-action-on-the-ds-rule> (Yale Office of International Students and Scholars, 2026-09-14) | ہاں | "issued an order preliminarily enjoining DHS from implementing this rule" "the current D/S framework remains in place for now" "You do not currently need to apply for an Extension of Stay" "The administration may appeal" |
| <https://www.aila.org/blog/think-immigration-one-day-before-taking-effect-federal-court-postpones-the-f-j-and-i-fixed-admission-period-rule> (American Immigration Lawyers Association) | ہاں | "The relief is nationwide, and it reaches the whole rule" "The rule is postponed, not vacated" "the 60-day grace period stands, and there is no new I-539 requirement" "denying the vacatur and summary judgment requests without prejudice to renewal" "the government may seek review in the First Circuit" |
| <https://www.courtlistener.com/docket/74661796/presidents-alliance-on-higher-education-and-immigration-v-united-states/> (Court docket) | ہاں | Item 50 (2026-09-14) MEMORANDUM AND ORDER: "GRANTED to the extent that it seeks to postpone the effective date of the Final Rule pursuant to … 5 U.S.C. § 705. To the extent that plaintiffs seek vacatur of the Final Rule, summary judgment, or other relief, the motion is DENIED without prejudice to its renewal"; Item 51 (2026-09-14) "PRELIMINARY INJUNCTION ORDER POSTPONING EFFECTIVE DATE OF FINAL RULE"; same-day notice "Status Conference set for 10/2/2026 12:00 PM"۔ Direct connection 403، local proxy کے ذریعے قابلِ رسائی |

اصل grading note (نیچے) historical record کے طور پر برقرار رکھا گیا ہے؛ "from 2026-09-15 onward has been replaced by the fixed-period rule" والا جملہ اب قابلِ عمل نہیں ہے۔

A درجہ دیا گیا: article اور effective date لفظ بہ لفظ تصدیق کیے جا سکتے ہیں۔ **یہ اندراج اس سیکشن کی سب سے اہم update ہے**: eCFR current text 30 دن پڑھتی ہے؛ وسیع پیمانے پر گردش کرنے والا "60-day grace period" اور "duration of status to graduation" دونوں پرانے نظام کے تحت ہیں اور 2026-09-15 سے fixed-period اصول سے تبدیل ہو چکے ہیں، صرف اس تحریر سے تین دن پہلے۔ فائدے کا درجہ "بڑا" — freedom میٹرک، نتیجہ unlawful presence اور deportation ہے، "avoid criminal liability — large" tier کے analogy سے۔ Extension-of-stay procedure (f)(7) میں ہے اور باڈی میں صرف refer کیا گیا، وضاحت نہیں کی گئی۔

## اندراج 3 (Working Hours in the Four Countries)

| URL | تصدیق | اصل متن کے کلیدی نکات |
|---|---|---|
| <https://www.ecfr.gov/current/title-8/chapter-I/subchapter-B/part-214/section-214.2> (8 CFR 214.2(f)(9)) | ہاں | On-campus employment "must not exceed 20 hours a week while school is in session"; approved off-campus part-time work "limited to no more than 20 hours a week when school is in session", breaks کے دوران full-time |
| <https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-student> (Immigration Rules Appendix Student, Table ST26.1) | ہاں | Degree اور اس سے اوپر sponsor compliance کے ساتھ: term کے دوران ہر ہفتے 20 گھنٹے؛ degree سے نیچے: 10 گھنٹے؛ دیگر تمام بشمول تمام part-time: کوئی employment نہیں۔ ST26.5 خود ملازمتی، professional athlete اور coach، اور entertainer کو بھی منع کرتا ہے |
| <https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/work-off-campus.html> (IRCC) | ہاں | "You can work up to 24 hours per week"; جن کے پرانے permit میں 20 گھنٹے دکھائے گئے ہیں وہ اب بھی eligible ہونے کی صورت میں 24 گھنٹے تک کام کر سکتے ہیں؛ بنیاد IRPR section 186(v) ہے |
| <https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500> (Department of Home Affairs Student visa 500) | ہاں | "work up to 48 hours a fortnight when your course of study or training is in session"; research master's اور PhD students اور dependents کے لیے کوئی work-hour cap نہیں |

A درجہ دیا گیا: چاروں ممالک کے ماخذ current immigration-authority صفحات یا written rules ہیں، اعداد لفظ بہ لفظ تصدیق کے قابل۔ فائدے کا درجہ "بڑا" — freedom میٹرک؛ حد سے زیادہ کام کرنا visa conditions کی خلاف ورزی ہے اور visa cancellation اور deportation کا باعث بن سکتا ہے۔

## اندراج 4 (Full-Time Enrollment Is the Root of Work Eligibility)

| URL | تصدیق | اصل متن کے کلیدی نکات |
|---|---|---|
| <https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/work-off-campus.html> | ہاں | approved leave of absence کے دوران، یا transfer کے دوران جب studying نہیں ہو رہا، off-campus work permitted نہیں؛ studies کی resumption work کے حق کو restore کرتی ہے |
| <https://studyinthestates.dhs.gov/students/work/working-in-the-united-states> (DHS Study in the States) | ہاں | On-campus employment F-1 students تک محدود ہے جن کا SEVIS status Active ہے؛ off-campus employment کے لیے prior approval درکار؛ I-765 pending ہونے کے دوران کام شروع نہیں کر سکتے |
| <https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-student> (ST26.1) | ہاں | Work permission course type کے لحاظ سے دیا جاتا ہے؛ part-time courses employment کی اجازت نہیں دیتیں |

A درجہ دیا گیا۔ Canada پیج یہ سب سے واضح بیان کرتا ہے؛ US اور UK اپنے اپنے اصولوں کے ساتھ تائید کرتے ہیں۔ فائدے کا درجہ "بڑا"، اندراج 3 کی وجہ سے۔

## اندراج 5 (US Address Change Report Within 10 Days)

| URL | تصدیق | اصل متن کے کلیدی نکات |
|---|---|---|
| <https://www.ecfr.gov/current/title-8/chapter-I/subchapter-B/part-265/section-265.1> | ہاں | registration requirements کے تابع افراد کو "within 10 days of such change" address change اور new address USCIS کو required کے مطابق report کرنا چاہیے |
| <https://www.uscis.gov/ar-11> | ہاں | AR-11 form page، وضاحت کرتا ہے کہ address changes کو promptly report کرنا چاہیے تاکہ documents miss نہ ہوں |

A درجہ دیا گیا: 10-day limit regulation میں explicit ہے۔ فائدے کا درجہ "درمیانہ" — freedom میٹرک، "avoid administrative penalty" tier کے analogy سے؛ documents miss ہونے کا actual consequence زیادہ تر procedural disadvantage ہے، criminal-liability سطح پر نہیں۔

## اندراج 6 (Ministry of Education Study-Abroad Alerts)

| URL | تصدیق | اصل متن کے کلیدی نکات |
|---|---|---|
| <https://jsj.moe.gov.cn/n2/2/2/2001.shtml> | ہاں | 2025 کا No. 1 (2025-04-09)، متعلقہ US state میں state-level higher education laws میں China کے بارے میں negative clauses شامل ہیں |
| <https://jsj.moe.gov.cn/n2/2/2/2030.shtml> | ہاں | No. 2 (2025-07-18)، Philippines کا public security خراب ہے اور Chinese citizens کے خلاف جرائم کثرت سے ہوتے ہیں |
| <https://jsj.moe.gov.cn/n2/2/2/2035.shtml> | ہاں | No. 3 (2025-08-30)، Philippines alert کی تکرار |
| <https://jsj.moe.gov.cn/n2/2/2/2060.shtml> | ہاں | No. 4 (2025-11-16)، Japan کا security situation اور study environment favorable نہیں ہے؛ Japan میں study کا محتاط منصوبہ بندی سے مشورہ دیا جاتا ہے |

A درجہ دیا گیا: تمام چار alerts کے numbers، dates، اور target countries ایک ایک کر کے تصدیق شدہ۔ باڈی کا Source field صرف No. 4 اور No. 1 plus column homepage درج کرتا ہے، source line کو بہت لمبا ہونے سے روکنے کے لیے۔ فائدے کا درجہ "درمیانہ" — alerts risk notices ہیں، prohibitions نہیں، اور براہ راست quantifiable consequence سے correspond نہیں کرتے۔ **alert list حالات کے ساتھ بدلتی ہے؛ CLAUDE.md میں سیکشن 21 کے همان کنونشن کے مطابق، اس سیکشن کی long-term maintenance نہیں کی جاتی۔**

## اندراج 7 (Australia OSHC)

| URL | تصدیق | اصل متن کے کلیدی نکات |
|---|---|---|
| <https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500> | ہاں | Must hold and continuously maintain OSHC, exempt ہونے کے سوا؛ پچھلی visa کے insurance میں کوئی gap نہیں ہو سکتی؛ entry پر insurance ثابت نہ کر سکنے والوں کو entry سے انکار ہو سکتا ہے؛ course شروع ہونے سے پہلے آنے والوں کے لیے، insurance کی start date Australia میں آنے کی تاریخ ہے |

A درجہ دیا گیا۔ فائدے کا درجہ "درمیانہ" — money میٹرک؛ premium ہزاروں سے دس ہزاروں یوآن کی حد میں ہے، "hundreds to thousands" اور دس ہزاروں کے درمیان boundary پر، درمیانہ مقرر کیا گیا۔ Cost label money=زیادہ (visa term پر ایک وقت payment)۔

## اندراج 8 (UK Visa Fee and Health Surcharge)

| URL | تصدیق | اصل متن کے کلیدی نکات |
|---|---|---|
| <https://www.gov.uk/student-visa> | ہاں | overseas applications اور in-country extensions یا switches دونوں £558 ہیں؛ 18+ سال degree level یا اس سے اوپر پڑھنے والوں کو عام طور پر 5 سال تک رہنے کی اجازت ہوتی ہے؛ degree سے نیچے، 2 سال |
| <https://www.gov.uk/healthcare-immigration-application> | ہاں | Students اور ان کے dependents ہر سال £776 (2-year visa £1,552 ہے)؛ دیگر applicants ہر سال £1,035؛ 6 ماہ سے زیادہ لیکن 1 سال سے کم قیام کے لیے، ایک پورا سال charge کیا جاتا ہے |

A درجہ دیا گیا: رقم current gov.uk صفحات سے لفظ بہ لفظ لی گئی۔ فائدے کا درجہ "درمیانہ" — money میٹرک؛ دونوں مل کر ہزاروں RMB کی حد پر ہیں۔ باڈی specific RMB رقم میں convert نہیں کرتی، صرف order of magnitude "around ten-odd thousand yuan at current exchange rates" بیان کرتی ہے تاکہ figure exchange rate کی تبدیلیوں کے ساتھ invalid نہ ہو۔

## اندراج 9 (CSCSE Authentication Processing Time)

| URL | تصدیق | اصل متن کے کلیدی نکات |
|---|---|---|
| <http://zwfw.cscse.edu.cn/> (CSCSE Online Service Hall) | ہاں | Credential authentication process real-name registration اور authentication، application اور materials submission، online payment، اور evaluation اور review ہے؛ "authentication processing time 10–20 working days"؛ application materials میں diploma، passport یا travel permit، residence card یا visa endorsement، ID photo، اور authorization declaration شامل ہیں؛ entry-exit records system حاصل کرتا ہے |

A درجہ دیا گیا: processing time اور materials list پیج پر بیان ہیں۔ فائدے کا درجہ "درمیانہ"، میٹرک وقت — جو بچایا گیا وہ deadline miss کا خطرہ ہے، روزانہ کا وقت نہیں؛ "one-time" کے لحاظ سے یہ small ہونا چاہیے، لیکن autumn recruitment یا civil-service exam registration miss ہونے کا consequence window کے لحاظ سے calculate ہوتا ہے، درمیانہ مقرر کیا گیا؛ یہ فیصلہ ہے، threshold کا میکانکی application نہیں، اور CLAUDE.md کے مطابق یہاں بیان کیا گیا ہے۔

## اندراج 10 (Enhanced Authentication Review List)

| URL | تصدیق | اصل متن کے کلیدی نکات |
|---|---|---|
| <https://www.cscse.edu.cn/cscse/sy/tzgg/2025102809225023345/index.html> | ہاں | "Announcement on Enhanced Authentication Review of Academic Degree Authentication for Certain Foreign Institutions (IX)", released 2025-10-28 |
| <https://www.cscse.edu.cn/> | ہاں | Notice column میں "Important reminder on guarding against fraud conducted in the name of foreign academic degree authentication", "Announcement on the Handling of Invalid Foreign Academic Degree Authentication Certificates", اور "Announcement on Suspending Acceptance of Academic Degree Authentication Applications for Phrom Khiri University, Thailand" بھی درج ہیں |

A درجہ دیا گیا: announcement کا عنوان، number، اور date لفظ بہ لفظ تصدیق کے قابل۔ فائدے کا درجہ "درمیانہ" — money میٹرک؛ نتیجہ blocked یا delayed authentication ہے، ضروری طور پر ٹیوشن کا مکمل نقصان نہیں، اس لیے "بڑا" نہیں لیا گیا۔ باڈی کوئی specific institution نام نہیں لیتا (cited announcement title میں پہلے سے نام لی گئی کے سوا)، تاکہ list بدلنے کے ساتھ غلطی نہ ہو۔

## اس سیکشن نے کیا نہیں لکھا

- ہر ملک کی tax-filing obligations (جیسے US F-1 کے لیے forms file کرنا، آمدنی نہ ہونے کے باوجود) — اس دور میں کوئی لفظ بہ لفظ تصدیق کے قابل سرکاری پیج حاصل نہیں ہوا؛ نہیں لکھا گیا۔
- Canada، UK، اور Australia کے address-change reporting deadlines مختلف ہیں؛ اصل متن country کے لحاظ سے حاصل نہیں ہوئے۔ اندراج 5 صرف US لکھتا ہے، ایک note کے ساتھ کہ دیگر تین ممالک کے اپنے اپنے اصول ہیں۔
- Student visa denied یا status lost ہونے کے بعد remedy procedures (US reinstatement، وغیرہ) نہیں لکھے گئے؛ یہ specialized procedures ہیں جو اس سیکشن کے "lose out if you don't know" دائرے سے تجاوز کرتے ہیں۔
- Japan، New Zealand، اور Singapore جیسے دیگر study-abroad destination countries قاری کے سوال کے دائرے میں نہیں تھے اور شامل نہیں کیے گئے۔
