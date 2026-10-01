# تصدیق کا ریکارڈ: سیکشن 19 میں 4 اندراج کا اضافہ (ورک پلیس انجری)

تصدیق کی تاریخ: 2026-09-07۔ سیکشن 19 6 سے 10 اندراج تک گیا؛ سیکشن کا عنوان "Being Laid Off and Voluntarily Resigning" سے "Being Laid Off, Resigning, and Workplace Injury" ہو گیا؛ کتاب 318 سے 322 اندراج تک گئی۔

ورک پلیس انجری پہلے پوری کتاب میں سب سے بڑا سنگل پوائنٹ گیپ تھا: سیکشن 7، اندراج 3 نے ذکر کیا کہ ورک پلیس انجری کیسز legal aid کے دائرے میں آتے ہیں، لیکن "یہ کیسے تسلیم کیا جاتا ہے، ٹائم لیمٹس کیا ہیں، کتنا ادا کیا جاتا ہے" بالکل موجود نہیں تھا۔ یہ پیسہ layoffs کے N سے ایک آرڈر آف میگنیچیوڈ بڑا ہے، اور ڈیڈ لائنز زیادہ سخت ہیں۔

طریقہ: `Invoke-WebRequest` استعمال کیا گیا gov.cn gazette پیج کے اصل bytes حاصل کرنے کے لیے، انہیں GB18030 کے طور پر decode کیا، tags ہٹائے، اور قانونی متن کے ساتھ دفعہ بہ دفعہ موازنہ کیا۔

---

## I. فی اندراج تصدیق شدہ اصل متن

تمام ماخذ China Government Network gazette کا "Regulations on Work-Related Injury Insurance" (State Council Order No. 586, 2010 Revision) <https://www.gov.cn/gongbao/content/2011/content_1778064.htm> کا مکمل متن ہے۔

| دفعہ | تصدیق شدہ اصل متن | استعمال ہوا |
| --- | --- | --- |
| دفعہ 14 | سات حالتیں جو "workplace injury تسلیم کیا جانا چاہئے"، جن میں سے item (6) 2010 کے بعد revision کا فقرہ ہے: "Injured in a traffic accident or urban rail transit, passenger ferry, or train accident on the way to or from work for which the person is not principally responsible" | اندراج 7 (commute میں مارا جانا بھی شامل) |
| دفعہ 15 | "(1) Sudden death at work during working hours and in the workplace, or death within 48 hours after rescue proves ineffective" اور دو دیگر حالتیں "deemed a workplace injury" | اندراج 7 نوٹس |
| دفعہ 16 | "(1) Intentional crime; (2) drunkenness or drug use; (3) self-mutilation or suicide" تسلیم نہیں کیا جا سکتا | اندراج 7 نوٹس |
| دفعہ 17 | "The unit shall, within 30 days from the date of the accident injury or the diagnosis or appraisal of an occupational disease... submit an application for recognition of a workplace injury"; "Where the employer does not submit an application for recognition of a workplace injury in accordance with the preceding paragraph, the injured employee or a close relative, or a trade union organization may, within 1 year from the date of the accident injury or the diagnosis or appraisal of an occupational disease, directly submit an application for recognition of a workplace injury to the social insurance administrative department in the coordinating region where the employer is located"; "Where the employer fails to submit the application for recognition of a workplace injury within the time limit specified in the first paragraph of this Article, the workplace-injury benefits and other relevant costs incurred during that period in accordance with these Regulations shall be borne by the employer" | اندراج 7 کے دو ٹائم لیمٹس |
| دفعہ 18 | تین درخواست materials: workplace injury recognition application form, labor relationship proof, اور medical diagnosis certificate or occupational disease diagnosis certificate | اندراج 7 لاگت خانہ |
| دفعہ 19 | "Where the employee or a close relative considers it a workplace injury and the employer does not, the employer bears the burden of proof." | اندراج 7 |
| دفعہ 20 | "The social insurance administrative department shall make a decision on recognition of a workplace injury within 60 days from the date of accepting the application for recognition" | اندراج 7 ماخذ خانہ |
| دفعات 21 اور 22 | "Where, after treatment, the condition is relatively stable and there is a disability affecting labor capacity, a labor capacity appraisal shall be conducted"; "Labor dysfunction is divided into ten disability grades, the most severe being Grade I and the least severe being Grade X" | اندراج 9 |
| دفعہ 36 | Grades 5 اور 6: one-time disability allowance of 18 months اور 16 months ملازم کی اپنی تنخواہ کے؛ اگر کام کا انتظام نہیں ہو سکتا، تو ماہانہ disability allowance ملازم کی اپنی تنخواہ کا 70% اور 60% | اندراج 9 |
| دفعہ 37 | Grades 7 to 10: one-time disability allowance of 13, 11, 9, اور 7 months ملازم کی اپنی تنخواہ کے؛ جب معاہدہ ختم ہو اور terminate ہو یا ملازم terminate کی درخواست کرے، فنڈ one-time workplace-injury medical allowance ادا کرتا ہے اور unit one-time disability employment allowance ادا کرتا ہے، معیارات provincial government کے طرف سے مقرر | اندراج 9 |
| دفعہ 39 | "(1) Funeral allowance of 6 months of the average monthly wage of employees in the coordinating region for the previous year; (2) Survivor pension... spouse 40% per month, other relatives 30% per person per month, with an additional 10% on the above standard for orphans and elderly living alone... (3) One-time workplace-death allowance equal to 20 times the national urban residents' per capita disposable income for the previous year." | اندراج 10 |
| دفعہ 62 | پیراگراف 2: "Where an employee of an employer that should participate in workplace-injury insurance according to the provisions of these Regulations but does not participate suffers a workplace injury, the employer shall pay the costs according to the workplace-injury benefits and standards provided in these Regulations." پیراگراف 1: مقررہ وقت کے اندر شرکت کا حکم، باقی رکھو، "a late fee of five ten-thousandths per day; if still unpaid by the deadline, a fine of not less than one time and not more than three times the underpaid amount" | اندراج 8 |

## II. حاصل نہیں ہوئے / اپنایا نہیں گیا

| ہم کیا چاہتے تھے | نتیجہ | علاج |
| --- | --- | --- |
| موجودہ سال کے لیے one-time workplace-death allowance کی مخصوص رقم | 2025 national urban residents' per capita disposable income درکار ہے۔ State Council policy document library میں statistical communiqué خود شامل نہیں ہے؛ gov.cn تشریحی مضامین صرف "per capita disposable income actually grew by 5.0% year-on-year" دیتے ہیں بغیر absolute value کے؛ stats.gov.cn پر latest release list میں یہ اندراج نہیں ہے | اندراج 10 صرف multiplier formula لکھتا ہے؛ رقم TODO نشان زد ہے |
| 48-گھنٹے والے کلاز کے بارے میں عملی تنازعات پر materials | صرف بڑی مقدار میں second-hand commentary ملی؛ حوالہ دینے کے قابل judgment documents یا سرکاری موقف حاصل نہیں ہوئے | باڈی صرف دفعہ کا اصل متن بیان کرتی ہے اور تشخیشی طور پر وضاحت نہیں کرتی |

## III. پیمانے اور فائدے کا درجہ

تمام چار اندراجوں کا پیسہ میٹرک ہے۔ فائدے کا درجہ سیکشن 8 سے قائم پیسے کی حدوفق کے مطابق مقرر کیا گیا: one-time disability allowance ماہانہ تنخواہ پر مبنی تبدیل کیا جاتا ہے؛ کم سے کم درجہ (Grade 10) بھی 7 ماہ کی تنخواہ ہے؛ workplace-death allowance "20 times the national urban residents' per capita disposable income for the previous year" ہے، سب دس ہزار یوآن کی سطح سے اوپر ہیں، اس لیے سب "بڑا" مقرر کیے گئے۔ لاگت کی طرف، recognition اور appraisal خود کوئی پیسہ نہیں لیتے لیکن process چلانے اور نتائج کا انتظار ضروری ہے، اس لیے وقت "درمیانہ" ریکارڈ کیا گیا؛ اندراج 8 (آجر uninsured) مزید "willpower=کچھ" ریکارڈ کرتا ہے، کیونکہ دوسری طرف سب سے زیادہ امکان سے انکار کرے گا اور آپ کو arbitrage تک پہنچنا ہوگا۔
