# issue #28: آٹھ اندراجوں کے لیے ماخذ کا اضافہ (2026-09-23)

کام کا ماخذ: GitHub issue #28 (dlgrv) نے آٹھ اندراجوں میں اصل ادبیات شامل کرنے کی تجویز دی جنہیں "مصنف کا تجربہ،" "تصدیق کیا جانا باقی ہے،" یا "TODO" کے طور پر نشان زد کیا گیا تھا، ہر ایک میں اقتباس اور لنک کے ساتھ۔ issue میں دیے گئے اقتباسات صرف رہنمائی کے طور پر استعمال ہوئے؛ نیچے دی گئی میز میں ہر اندراج کا اس دور میں حاصل کردہ اصل متن سے لفظ بہ لفظ تصدیق کیا گیا۔

## آئٹم بہ آئٹم تصدیق اور ہینڈلنگ

| اندراج | ماخذ | تصدیق شدہ | اصل متن میں کلیدی نکات | ہینڈلنگ |
|---|---|---|---|---|
| سیکشن 13، اندراج 18 (بجلی کا جھٹکا) | <https://www.cdc.gov/natural-disasters/response/what-to-do-protect-yourself-from-electrical-hazards.html> | ہاں (curl 403؛ ہیڈ لیس کروم کے ذریعے حاصل) | فرسٹ ایڈ سیکشن: "Look first. Don't touch. The person may still be in contact with the electrical source." "Turn off the source of electricity if possible. If not, move the source away from you and the affected person using a non-conducting object made of cardboard, plastic or wood." "If either has stopped or seems dangerously slow or shallow, begin cardiopulmonary resuscitation (CPR) immediately." | اپنایا گیا |
| وہی | <https://doi.org/10.7326/0003-4819-145-7-200610030-00011> (Spies & Trohman 2006) | ہاں (Europe PMC abstract) | "patients successfully resuscitated after cardiopulmonary arrest often have a favorable prognosis" | اپنایا گیا |
| وہی | Moran 1986 JAMA (10.1001/jama.1986.03370160055007) | نہیں | Europe PMC میں کوئی abstract نہیں؛ مواد کی تصدیق نہیں ہو سکتی | اپنایا نہیں گیا |
| وہی | ERC 2021 Special Circumstances Cardiac Arrest (10.1016/j.resuscitation.2021.02.011) | ہاں (abstract) | abstract میں درج خاص اسباب، حالات، اور آبادیوں میں بجلی کا جھٹکا شامل نہیں؛ issue کا دعوا "2021 version has no electrocution chapter" درست ہے | ماخذ خانے سے ہٹایا گیا؛ اصل ماخذ خانے کا دعوا کہ اس "ایک الیکٹروکیشن چیپٹر شامل ہے" غلط تھا |
| سیکشن 20، اندراج 9 (بچے کو ہلا نہ کریں) | <https://doi.org/10.15585/mmwr.mm6520a1> (MMWR 2016) | ہاں (abstract) | "During this period, AHT resulted in nearly 2,250 deaths among U.S. resident children aged <5 years" | اپنایا گیا |
| وہی | <https://doi.org/10.1007/s00247-018-4149-1> (Choudhary 2018 consensus statement) | ہاں (abstract) | "Abusive head trauma (AHT) is the leading cause of fatal head injuries in children younger than 2 years"؛ سبب "multifactorial (shaking, shaking and impact, impact, etc.)"؛ "subdural hematoma… complex retinal hemorrhages" | اپنایا گیا |
| وہی | AAP endorsement version (10.1542/peds.2018-1504) | تصدیق نہیں ہوئی | consensus statement کے طور پر وہی مواد، صرف تائید شدہ؛ علیحدہ سے شامل نہیں کیا | اپنایا نہیں گیا |
| سیکشن 13، اندراج 27 (نوگو زونز / صحرا) | <https://www.nps.gov/articles/000/desertdrivingsafety.htm> | ہاں (curl براہ راست) | "Staying with your car is the most important thing you can do in the event of an emergency. While not often, people have died from exposure trying to walk back to the paved roads." | اپنایا گیا، درجہ تبدیل نہیں |
| سیکشن 4، اندراج 15 (اسکرین ٹائم کیپ) | CNNIC 56th Report PDF | ہاں (pdftotext چینی لفظ بہ لفظ نکالتا ہے) | لائن 821: "As of June 2025, the average weekly internet time per capita of Chinese netizens was 30.6 hours, up 1.9 hours from December 2024"؛ لائن 94: "Short-video users reached 1.068 billion, 95.1% of all netizens" | اپنایا گیا، TODO ہٹایا گیا |
| سیکشن 5، اندراج 17 (انڈیکس فنڈز) | SPIVA U.S. Scorecard Year-End 2024 | ہاں (سرکاری سائٹ 403 اور ہیڈ لیس کروم مسترد؛ Wayback 2025-05-12 اسنیپ شاٹ سے تصدیق) | "65% of all active large-cap U.S. equity funds underperformed the S&P 500, worse than the 60% rate observed in 2023 and slightly above the 64% average annual rate reported over the 24-year history"؛ "Over the 15-year period ending December 2024, there were no categories in which a majority of active managers outperformed." | اپنایا گیا، TODO ہٹایا گیا۔ اندراج میں "لانگ ٹرم" اعداد کی کمی تھی، اس لیے issue کے سنگل ایئر 65% سے آگے، 24 سال کی اوسط اور 15 سال کا نتیجہ بھی شامل کیا |
| وہی | SPIVA Institutional Scorecard Year-End 2024 PDF | استعمال نہیں ہوا | انسٹی ٹیوشنل اکاؤنٹس اور رپ اکاؤنٹس؛ عام قاری یہ پروڈکٹس نہیں خرید سکتے | اپنایا نہیں گیا |
| سیکشن 14، اندراج 2 (ای میل پاس ورڈ) | <https://www.cisa.gov/secure-our-world/use-strong-passwords> | ہاں (curl براہ راست) | "Create long, random, unique passwords with a password manager"؛ "At least 16 characters—longer is stronger!"؛ "Use a different strong password for each account" | اپنایا گیا، درجہ تبدیل نہیں |
| سیکشن 14، اندراج 3 (SIM کارڈ PIN) | FCC DOC-398483A1 (2023-11-15 پریس ریلیز) | ہاں (pdftotext) | جو یہ ریگولیٹ کرتا ہے وہ کیریئرز کا نمبر پورٹنگ یا SIM سویپ سے پہلے شناخت کی تصدیق ہے، SIM سویپ دھوکے کا ہدف "without ever gaining physical control of a consumer's phone" | **اپنایا نہیں گیا۔** یہ اندراج جس چیز سے بچاتا ہے وہ فون کا کھو جانا اور SIM نکال کر دوسرے فون میں ڈالنا ہے — بالکل وہ صورتحال جہاں دوسری طرف کے پاس فزیکل کارڈ ہے۔ یہ دو مختلف چیزیں ہیں |
| سیکشن 14، اندراج 4 (کھویا ہوا فون) | <https://www.fcc.gov/consumers/guides/protect-your-mobile-device> | ہاں (curl 403؛ ہیڈ لیس کروم کے ذریعے حاصل) | "Even if you think you may have only lost the device, you should remotely lock it to be safe. If the device was stolen, immediately report the theft to the police, including the make and model, serial and IMEI or MEID or ESN number." "Immediately report the theft or loss to your service provider." | اپنایا گیا؛ اقدامات کی ترتیب مصنف کے تجربے پر رہتی ہے، جیسا کہ ماخذ خانے میں بیان ہے |

## درجہ بندی

**صرف دو اندراجوں کا درجہ بدلا: سیکشن 13، اندراج 18 اور سیکشن 20، اندراج 9 — دونوں C سے B۔** دونوں کے پاس اب ایک سرکاری گائیڈ یا پیشہ ورانہ اتفاق ہے، پلس ایک معاون مطالعہ، لیکن کسی کے پاس بھی ایسے اعداد نہیں جو براہ راست "یہ کریں اور X% کم مرتے ہیں" میں تبدیل ہو سکیں، اس لیے پیمانے کے مطابق یہ B ہیں۔

باقی اندراجوں کے درجے تبدیل نہیں۔ سرکاری ایجنسیوں (NPS, CISA, FCC) کی طرف سے آپریشنل گائیڈ تحقیق نہیں ہے، اور کتاب کے کنونشن کے مطابق C رہتے ہیں (سیکشن 13، اندراج 27 ہمیشہ سے اس طرح ہینڈل ہوا ہے)۔ سیکشن 4 اور 5 کے دونوں اندراجوں میں صرف TODO ہٹایا گیا اور اعداد شامل کیے گئے؛ درجہ تبدیل نہیں۔

## issue کے مطابق کیا نہیں کیا گیا

- ترجمہ خود اس ریپوزیٹری میں ضم نہیں کیا گیا (CLAUDE.md اصول کے مطابق)؛ اس دور نے صرف چینی اصل پر سورس تجاویز کے تبصرے ہینڈل کیے۔
- issue نے براہ راست PR کھولنے کی تجویز دی۔ یہ دور مقامی طور پر مکمل ہوا؛ PR کی ضرورت نہیں۔
