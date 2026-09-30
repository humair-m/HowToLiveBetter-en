# Section 4 Source Verification Record

Verification date: 2026-09-07. Publisher pages (Elsevier/Wiley/APA/Springer/T&F) generally return 403 or CAPTCHA to the fetch tool; metadata was verified via the Crossref API, OpenAlex API, Semantic Scholar API, and PubMed E-utilities; abstracts are taken as the original text returned by these APIs. Each entry below lists the URL actually opened, whether the title matched, and the source of the cited numbers in the original text.

## Entries 1, 2: Gollwitzer & Sheeran (2006)
- Opened: <https://doi.org/10.1016/S0065-2601(06)38002-1> (302 → linkinghub.elsevier.com, body page returns only Redirecting); <https://api.semanticscholar.org/graph/v1/paper/DOI:10.1016/S0065-2601(06)38002-1>; <https://api.crossref.org/works/10.1016/S0065-2601(06)38002-1>
- Title match: yes. Crossref: Implementation Intentions and Goal Achievement: A Meta-analysis of Effects and Processes, Advances in Experimental Social Psychology vol. 38, pp. 69–119, 2006
- Number source (Semantic Scholar abstract verbatim): "Findings from 94 independent tests showed that implementation intentions had a positive effect of medium-to-large magnitude (d = .65) on goal attainment. Implementation intentions were effective in promoting the initiation of goal striving, the shielding of ongoing goal pursuit from unwanted influences, disengagement from failing courses of action, and conservation of capability for future goal striving."

## Entry 3: Arkes & Blumer (1985)
- Opened: <https://doi.org/10.1016/0749-5978(85)90049-4> (→ linkinghub only returns Redirecting); <https://api.openalex.org/works/doi:10.1016/0749-5978(85)90049-4> (title, authors, journal, year confirmed, abstract empty); <https://www.sciencedirect.com> (403/CAPTCHA); <https://r.jina.ai/https://www.semanticscholar.org/paper/e4564b88ca2349962a707b76be4c75076ad6bd43> (abstract); <https://pmc.ncbi.nlm.nih.gov/articles/PMC2796842/> (citation pages 35, 124–140)
- Title match: yes. The psychology of sunk cost, Organizational Behavior and Human Decision Processes, 1985
- Number source: abstract verbatim "In a field study, customers who had initially paid more for a season subscription to a theater series attended more plays during the next 6 months, presumably because of their higher sunk cost in the season tickets". The specific play counts per group (e.g., 4.11 plays) **were not confirmed**; the entry marks this as to-be-verified and writes no number.

## Entry 3: Roth, Robbert & Straus (2015)
- Opened: <https://api.semanticscholar.org/graph/v1/paper/DOI:10.1007/s40685-014-0014-8>; <https://api.crossref.org/works/10.1007/s40685-014-0014-8>
- Title match: yes. Business Research 8(1), 99–138
- Number source (abstract verbatim): "a meta-analytic review of 98 effect sizes of the sunk-cost effect … the sunk-cost effect is attenuated by time in utilization decisions … older adults are less likely to fall prey to the sunk-cost effect than younger adults."

## Entries 4, 8: Buehler, Griffin & Ross (1994)
- Opened: <https://doi.org/10.1037/0022-3514.67.3.366> (→ psycnet, 403); <https://api.openalex.org/works/doi:10.1037/0022-3514.67.3.366> (title, journal confirmed, abstract included); full-text PDF <https://web.mit.edu/curhan/www/docs/Articles/biases/67_J_Personality_and_Social_Psychology_366,_1994.pdf> (local pdftotext extraction)
- Title match: yes. PDF front page: Journal of Personality and Social Psychology 1994, Vol. 67, No. 3, 366-381
- Number source (body, Study 1): "respondents predicted, on average, that they would finish in 33.9 days, but they actually took 55.5 days … Fewer than one third of the respondents (29.7%) finished in the time they reported as their most accurate prediction."
- Number source (body, Study 4): "…in the recall-relevant condition (60.0%) than in the recall and control conditions (38.1% and 29.3%, respectively)"; "Note, n = 41, 42, and 40 in the control, recall, and recall-relevant conditions"; abstract: "In Study 4, the bias was eliminated for participants instructed to connect past experiences with their predictions."
- Number source (body, Study 2, Entry 8): "A subset of the subjects (n = 62) reported having external deadlines … a majority of these subjects (80.6%) finished the projects in time to meet their deadlines … only 38.7% of these subjects finished in the predicted time … their reported completion times were strongly associated with the deadlines (r = .82, p < .001)"; predictions vs deadline only r = .23.

## Entry 4: Flyvbjerg (2006)
- Opened: <https://api.semanticscholar.org/graph/v1/paper/DOI:10.1177/875697280603700302>; <https://api.crossref.org/works/10.1177/875697280603700302>
- Title match: yes. Project Management Journal 37(3), 5–15
- Cited content (abstract verbatim): "reference class forecasting, which achieves accuracy by basing forecasts on actual performance in a reference class of comparable projects". The entry does not cite its numbers.

## Entry 4: Halkjelsvik & Jørgensen (2012)
- Opened: <https://api.openalex.org/works/doi:10.1037/a0025996> (abstract); <https://api.crossref.org/works/10.1037/a0025996> (Psychological Bulletin 138(2), 238–271, 2012)
- Title match: yes
- Cited content: OpenAlex abstract "underestimation occurred more frequently than overestimation, though this pattern varied by study type" (tool paraphrase, not verbatim). The entry uses only the qualitative conclusion.

## Entry 5: Leach, Rogelberg, Warr & Burnfield (2009)
- Opened: <https://doi.org/10.1007/s10869-009-9092-6> (→ Springer idp redirect, unreadable); <https://api.crossref.org/works/10.1007/s10869-009-9092-6> (J Bus Psychol 24(1), 65–76); <https://r.jina.ai/https://link.springer.com/article/10.1007/s10869-009-9092-6> (abstract)
- Title match: yes
- Number source (abstract): "The aim of this investigation was to test hypotheses about meeting design characteristics (punctuality, chairperson, etc.) in relation to attendees' perceptions of meeting effectiveness"; two studies with samples of 958 and 292; "agenda use and quality of facilities" were significant predictors.

## Entry 5: Bluedorn, Turban & Love (1999)
- Opened: <https://api.openalex.org/works/doi:10.1037/0021-9010.84.2.277>
- Title match: yes. Journal of Applied Psychology, 1999
- Number source (abstract verbatim): "56 five-member groups that conducted meetings in a standing format with 55 five-member groups that conducted meetings in a seated format. Sit-down meetings were 34% longer than stand-up meetings, but they produced no better decisions"

## Entry 6: Rogelberg, Leach, Warr & Burnfield (2006)
- Opened: <https://pubmed.ncbi.nlm.nih.gov/16435940/> (cookie wall, no content); <https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=16435940,28739889,17201571&rettype=abstract&retmode=text>
- Title match: yes. "Not another meeting!" Are meeting time demands related to employee well-being? J Appl Psychol 2006; DOI 10.1037/0021-9010.91.1.83
- Number source (abstract): Study 1 n = 676 (typical-week meetings), Study 2 n = 304 (today's meetings), employees working more than 35 hours per week; "the relationship between meeting time demands and JAWB was moderated by task interdependence, meeting experience quality, and accomplishment striving"

## Entry 6: Luong & Rogelberg (2005)
- Opened: <https://api.openalex.org/works/doi:10.1037/1089-2699.9.1.58>
- Title match: yes. Group Dynamics: Theory, Research, and Practice, 2005
- Cited content (abstract): one-week diary study, HLM analysis, "statistically significant positive correlation between the quantity of meetings attended and daily fatigue, along with perceptions of subjective workload" (tool paraphrase). The entry does not cite specific coefficients.

## Entry 7: Kruger & Evans (2004)
- Opened: <https://api.crossref.org/works/10.1016/j.jesp.2003.11.001> (J Exp Soc Psychol 40(5), 586–598, 2004; no abstract); <https://api.openalex.org/works/doi:10.1016/j.jesp.2003.11.001> (no abstract); <https://r.jina.ai/https://www.sciencedirect.com/>... (CAPTCHA); <https://r.jina.ai/https://www.semanticscholar.org/paper/67aa82059dafc832f93ad73057fc061ba1487823> (abstract fragment)
- Title match: yes
- Cited content (abstract verbatim): "People tend to underestimate how long it will take to complete tasks. We suggest that one reason people commit this planning fallacy is that they do not naturally 'unpack' multifaceted tasks (e.g., writing a manuscript) into subcomponents … when making predictions." Specific experimental percentages **were not confirmed**; the entry writes no number.

## Entry 7: Steel (2007)
- Opened: the above efetch URL; <https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=17201571&rettype=abstract&retmode=text>
- Title match: yes. The nature of procrastination: a meta-analytic and theoretical review of quintessential self-regulatory failure. Psychological Bulletin 2007; DOI 10.1037/0033-2909.133.1.65
- Number source (abstract): "691 correlations"; "Strong and consistent predictors of procrastination were task aversiveness, task delay, self-efficacy, and impulsiveness, as well as conscientiousness and its facets". The commonly cited "80%–95% of college students procrastinate" is not in the abstract; the entry does not use it.

## Entry 9: Whillans et al. (2017)
- Opened: <https://doi.org/10.1073/pnas.1706541114> (→ pnas.org, 403); the above efetch URL (PMID 28739889)
- Title match: yes. Buying time promotes happiness. PNAS 2017
- Number source (abstract): "diverse samples (n=6,271) from four countries … individuals who spend money on time-saving services report greater life satisfaction … working adults report greater happiness after spending money on a time-saving purchase than on a material purchase"

## Entries 9, 10, 13: National Bureau of Statistics, Communiqué of the Third National Time Use Survey (2024-10-31)
- Opened: <https://www.stats.gov.cn/sj/zxfb/202410/t20241031_1957216.html> (No. 2); <https://www.stats.gov.cn/sj/zxfb/202410/t20241031_1957215.html> (No. 3); <https://www.stats.gov.cn/sj/zxfb/202410/t20241031_1957217.html> (No. 1)
- Title match: yes
- Number source (No. 2 verbatim): "互联网使用居民每日平均时间为5小时37分钟，参与者每日平均时间为6小时3分钟，活动参与率为92.9%。""交通活动领域，居民每日平均时间为50分钟，占全天的3.5%；参与者每日平均时间为1小时2分钟，活动参与率为80.5%。""家务劳动活动居民每日平均时间为1小时17分钟，参与者每日平均时间为1小时59分钟，活动参与率为64.9%。"
- Sample (No. 1 verbatim): "全国共调查3.85万户家庭、10.7万人"
- The No. 2 page does not contain "2018"; the comparison to 2018 was made by me against the 2018 communiqué.

## Entries 10, 11: National Bureau of Statistics, 2018 National Time Use Survey Communiqué (2019-01-25)
- Opened: <https://www.stats.gov.cn/sj/zxfb/202302/t20230203_1900224.html>
- Title match: yes
- Number source (verbatim): "居民看电视的平均时间为1小时40分钟"; "居民使用互联网的平均时间为2小时42分钟"; sample "共抽样调查20226户48580人"; "按10岁为组距分组，75-84岁居民看电视的平均时间最长，为3小时16分钟；15-24岁居民时间最短，为42分钟。" (verified verbatim on the second fetch)

## Entry 11: BLS American Time Use Survey — 2025 Results
- Opened: <https://www.bls.gov/news.release/atus.nr0.htm> (twice)
- Title match: yes. "American Time Use Survey Summary", "For release 10:00 a.m. (ET) Thursday, June 25, 2026"
- Number source (verbatim): "Watching TV was the leisure and sports activity that occupied the most time (2.6 hours per day), accounting for half of all leisure time, on average (5.2 hours)."

## Entry 12: Lane, Napier, Peres & Sándor (2005)
- Opened: <https://doi.org/10.1207/s15327590ijhc1802_1> (→ tandfonline, 403); <https://api.semanticscholar.org/graph/v1/paper/DOI:10.1207/s15327590ijhc1802_1>; <https://api.openalex.org/works/doi:10.1207/s15327590ijhc1802_1>; <https://r.jina.ai/https://www.tandfonline.com/doi/abs/10.1207/s15327590ijhc1802_1> (full abstract)
- Title match: yes. International Journal of Human–Computer Interaction, 2005
- Number source (abstract verbatim): "251 experienced users of Microsoft Word were given a questionnaire … most experienced users rarely used the efficient keyboard shortcuts, favoring the use of icon toolbars instead … Six participants performed common commands using menu selection, icon toolbars, and keyboard shortcuts. The keyboard shortcuts were, as expected, the most efficient."

## Entry 13: Stutzer & Frey (2008)
- Opened: <https://doi.org/10.1111/j.1467-9442.2008.00542.x> (→ Wiley, 403/CAPTCHA); <https://api.semanticscholar.org/graph/v1/paper/DOI:10.1111/j.1467-9442.2008.00542.x> (abstract); <https://api.openalex.org/works/doi:10.1111/j.1467-9442.2008.00542.x> (Scandinavian Journal of Economics 110(2): 339–366)
- Title match: yes. Stress that Doesn't Pay: The Commuting Paradox
- Cited content (abstract verbatim): "we find that people with longer commuting time report systematically lower subjective well-being. Additional empirical analyses do not find institutional explanations of the empirical results that commuters systematically incur losses." The commonly paraphrased "a one-hour commute each way requires a 40% raise to compensate" is not in the abstract; the entry does not use it.

## Entry 13: Chatterjee et al. (2020)
- Opened: <https://api.semanticscholar.org/graph/v1/paper/DOI:10.1080/01441647.2019.1649317> (full abstract); <https://api.crossref.org/works/10.1080/01441647.2019.1649317> (Transport Reviews 40(1), 5–34, online 2019, print 2020)
- Title match: yes
- Cited content (abstract verbatim): "Satisfaction decreases with duration of commute, regardless of mode used … However, a consistent link between commuting and life satisfaction overall has not been established. The evidence suggests that commuters are generally successful in trading off the drawbacks of longer and more arduous commute journeys against the benefits they bring"

## Unconfirmed: CNNIC 55th / 56th Statistical Report on Internet Development in China
- Opened: <https://www.cnnic.net.cn/NMediaFile/2025/0220/MAIN1740036167004CKE0DITFO1.pdf> and <https://www.cnnic.net.cn/NMediaFile/2025/0730/MAIN1753846666507QEK67ZS9DH.pdf> (PDFs downloaded successfully but the fonts have no ToUnicode mapping; pdftotext could not extract any Chinese text, and this machine has no OCR tool); <https://www.cnnic.net.cn/n4/2025/0117/c88-11229.html> and <https://www.cnnic.net.cn/n4/2025/0721/c88-11328.html> (release pages only show netizen scale 11.08亿/11.23亿 (1.108 billion / 1.123 billion), penetration 78.6%/79.7%, micro-drama users 6.62亿 (662 million); no weekly online hours and no short-video user scale); <https://www.cnnic.net.cn/6/132/> (only a directory)
- Conclusion: **unconfirmed**. The "average weekly online 28.7 hours (2024-12)" and "short-video users 10.68亿 (1.068 billion), 95.1% of netizens (2025-06)" appearing in search results all come from secondary reposts; the Entry 10 source column is marked TODO and does not write these numbers.

## Other pages opened but not adopted
- <https://api.unpaywall.org/v2/>... (422, no OA copy retrieved)
- Kahneman & Tversky (1979) Intuitive prediction: Biases and corrective procedures, TIMS Studies in Management Science 12, 313–327: no DOI or official full text found via search; Entry 4 instead uses Buehler 1994 and Flyvbjerg 2006 as the original reference-class forecasting sources, not directly cited.
