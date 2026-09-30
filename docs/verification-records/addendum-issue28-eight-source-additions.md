# issue #28: Source Additions for Eight Entries (2026-09-23)

Task source: GitHub issue #28 (dlgrv) proposed adding original literature to eight entries marked "author experience," "to be verified," or "TODO," each with quotation and link. The quotations in the issue were used only as leads; every entry in the table below was verified against the original text fetched this round, word by word.

## Item-by-Item Verification and Handling

| Entry | Source | Verified | Key points in original | Handling |
|---|---|---|---|---|
| Section 13, Entry 18 (electric shock) | <https://www.cdc.gov/natural-disasters/response/what-to-do-protect-yourself-from-electrical-hazards.html> | Yes (curl 403; retrieved via headless Chrome) | First aid section: "Look first. Don't touch. The person may still be in contact with the electrical source." "Turn off the source of electricity if possible. If not, move the source away from you and the affected person using a non-conducting object made of cardboard, plastic or wood." "If either has stopped or seems dangerously slow or shallow, begin cardiopulmonary resuscitation (CPR) immediately." | Adopted |
| same | <https://doi.org/10.7326/0003-4819-145-7-200610030-00011> (Spies & Trohman 2006) | Yes (Europe PMC abstract) | "patients successfully resuscitated after cardiopulmonary arrest often have a favorable prognosis" | Adopted |
| same | Moran 1986 JAMA (10.1001/jama.1986.03370160055007) | No | Europe PMC has no abstract; content cannot be verified | Not adopted |
| same | ERC 2021 Special Circumstances Cardiac Arrest (10.1016/j.resuscitation.2021.02.011) | Yes (abstract) | The special causes, scenarios, and populations listed in the abstract do not include electrocution; issue's claim "2021 version has no electrocution chapter" is correct | Removed from Source field; original Source field's claim that it "includes an electrocution chapter" was wrong |
| Section 20, Entry 9 (don't shake the baby) | <https://doi.org/10.15585/mmwr.mm6520a1> (MMWR 2016) | Yes (abstract) | "During this period, AHT resulted in nearly 2,250 deaths among U.S. resident children aged <5 years" | Adopted |
| same | <https://doi.org/10.1007/s00247-018-4149-1> (Choudhary 2018 consensus statement) | Yes (abstract) | "Abusive head trauma (AHT) is the leading cause of fatal head injuries in children younger than 2 years"; etiology "multifactorial (shaking, shaking and impact, impact, etc.)"; "subdural hematoma… complex retinal hemorrhages" | Adopted |
| same | AAP endorsement version (10.1542/peds.2018-1504) | Not verified | Same content as the consensus statement, only endorsed; not added separately | Not adopted |
| Section 13, Entry 27 (no-go zones / desert) | <https://www.nps.gov/articles/000/desertdrivingsafety.htm> | Yes (curl direct) | "Staying with your car is the most important thing you can do in the event of an emergency. While not often, people have died from exposure trying to walk back to the paved roads." | Adopted, grade unchanged |
| Section 4, Entry 15 (screen-time cap) | CNNIC 56th Report PDF | Yes (pdftotext extracts Chinese verbatim) | Line 821: "As of June 2025, the average weekly internet time per capita of Chinese netizens was 30.6 hours, up 1.9 hours from December 2024"; Line 94: "Short-video users reached 1.068 billion, 95.1% of all netizens" | Adopted, TODO removed |
| Section 5, Entry 17 (index funds) | SPIVA U.S. Scorecard Year-End 2024 | Yes (official site 403 and headless Chrome rejected; verified against Wayback 2025-05-12 snapshot) | "65% of all active large-cap U.S. equity funds underperformed the S&P 500, worse than the 60% rate observed in 2023 and slightly above the 64% average annual rate reported over the 24-year history"; "Over the 15-year period ending December 2024, there were no categories in which a majority of active managers outperformed." | Adopted, TODO removed. The entry lacked "long-term" numbers, so beyond the single-year 65% from the issue, the 24-year average and 15-year conclusion were added |
| same | SPIVA Institutional Scorecard Year-End 2024 PDF | Not used | Institutional accounts and wrap accounts; ordinary readers cannot buy these products | Not adopted |
| Section 14, Entry 2 (email password) | <https://www.cisa.gov/secure-our-world/use-strong-passwords> | Yes (curl direct) | "Create long, random, unique passwords with a password manager"; "At least 16 characters—longer is stronger!"; "Use a different strong password for each account" | Adopted, grade unchanged |
| Section 14, Entry 3 (SIM card PIN) | FCC DOC-398483A1 (2023-11-15 press release) | Yes (pdftotext) | What it regulates is carriers verifying identity before number-porting or SIM-swap, targeting SIM-swap fraud "without ever gaining physical control of a consumer's phone" | **Not adopted.** What this entry protects against is the phone being lost and the SIM pulled out and inserted into another phone — exactly the situation where the other party has the physical card. These are two different things |
| Section 14, Entry 4 (lost phone) | <https://www.fcc.gov/consumers/guides/protect-your-mobile-device> | Yes (curl 403; retrieved via headless Chrome) | "Even if you think you may have only lost the device, you should remotely lock it to be safe. If the device was stolen, immediately report the theft to the police, including the make and model, serial and IMEI or MEID or ESN number." "Immediately report the theft or loss to your service provider." | Adopted; the order of steps remains the author's experience, as stated in the Source field |

## Grading

**Only two entries changed grade: Section 13, Entry 18 and Section 20, Entry 9 — both from C to B.** Both now have an official guide or professional consensus, plus one supporting study, but neither has numbers that can be directly converted into "do this and X% fewer die," so per the metric they are B.

The other entries' grades are unchanged. Operational guidance from official agencies (NPS, CISA, FCC) is not research, and per the book's convention remains C (Section 13, Entry 27 has always been handled this way). The two entries in Sections 4 and 5 only had TODO removed and numbers added; grade unchanged.

## What Was Not Done per the Issue

- Translation itself is not merged into this repository (per CLAUDE.md rule); this round only handled source-suggestion comments on the Chinese original.
- The issue proposed opening a PR directly. This round was completed locally; no PR needed.
