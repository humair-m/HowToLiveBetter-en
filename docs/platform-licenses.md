# What Licenses Are Needed to Run a Platform: A Comparison Table and a Server-Selection Decision Table

This long-form piece corresponds to Section 26 of the README. It only contains three tables plus a few paragraphs on the points most easily gotten wrong. The entry text and sources are all in the README. For how to register a company and how to file taxes, see Section 12 (Entrepreneurship and Doing Business). For the lines employed technical staff should not cross, see Section 11 (Programmers and Tech Workers).

## 1. First determine which type of business you are running

A single site often falls under several business categories at once. However many it touches, that's how many licenses you must obtain — you cannot just pick one.

| What you are doing | Corresponding business category | What you need | Primary basis |
|---|---|---|---|
| A free information site, a personal blog, a company official site | Non-commercial internet information service | ICP filing. It is not a license; it is a check-in with the competent authority before opening the site | Article 4 of the Measures for the Administration of Internet Information Services |
| Paid memberships, value-added services, paid content that takes money from users | Commercial internet information service | A value-added telecommunications business license (information service business). What it regulates is the act of charging users | Articles 3, 4, 7 of the same Measures |
| Bringing buyers and sellers together, handling transactions and orders | Online data processing and transaction processing business | A value-added telecommunications business license (B21). What it regulates is handling transactions between buyers and sellers on their behalf | Catalog of Telecommunications Business Classifications (2015 Edition) B21 |
| Live-streaming with on-camera hosts, game live-streaming | Online performance | A Network Culture Business License with online performance in the business scope. Without it, on-camera hosts are not allowed on the site | Article 4 of the Measures for the Administration of Online Performance Business Activities |
| Producing your own video programs, or aggregating programs from elsewhere, or letting users upload videos to the site | Internet audiovisual program service | An Information Network Audiovisual Program Transmission License. What it regulates is broadcasting video programs on the site | Articles 7, 8 of the Provisions on the Administration of Internet Audiovisual Program Services |
| Selling goods via live commerce in a stream | Online live commerce marketing | Obtain the licenses the rows above call for. Additionally, you must verify merchants and retain records | Article 8 of the Measures for the Administration of Online Live Commerce Marketing (for trial implementation) |
| Producing news and information | Internet news information service | An Internet News Information Service License. Without it, news cannot be published on the site | Article 5 of the Provisions on the Administration of Internet Live-Streaming Services |
| Building your own data center to sell servers, sell bandwidth | Internet data center business, internet access service business | A value-added telecommunications business license (B11, B14). What it regulates is selling data center capacity and bandwidth to others | Catalog of Telecommunications Business Classifications (2015 Edition) B11, B14 |

Which license corresponds to which type of live-streaming is stated most plainly in the 2021 joint guidance document from seven agencies: "Live-streaming platforms that conduct commercial online performance activities must hold a Network Culture Business License and complete ICP filing; live-streaming platforms that provide online audiovisual program services must hold an Information Network Audiovisual Program Transmission License (or complete registration in the national online audiovisual platform information registration and management system) and complete ICP filing; live-streaming platforms that provide internet news information services must hold an Internet News Information Service License."

Live-streaming splits into three kinds. With hosts performing, obtain a Network Culture Business License. For online audiovisual programs, obtain an Information Network Audiovisual Program Transmission License, or complete registration in the national online audiovisual platform information registration and management system. For news, obtain an Internet News Information Service License. The first two also require ICP filing.

### Three points most easily gotten wrong

**Individuals cannot obtain a value-added telecommunications license.** The very first item in the application conditions states "the operator is a legally established company." You must first have a company; an individual cannot apply with just their ID card. For operations limited to the home province, registered capital cannot be less than 1,000,000 yuan; for cross-province operations, not less than 10,000,000 yuan. After the materials are submitted, the review period is 60 days, and the license is valid for 5 years. If you want to run a paid business, you must first set up a company. For how to set up a company, see Section 12 (Entrepreneurship and Doing Business).

**That audiovisual-program license is essentially out of reach for private companies.** The application conditions state "has legal person status and is a wholly state-owned or state-controlled entity." This means this license is issued only to state-funded or state-controlled entities. So individual entrepreneurs who want to make long-form video or self-produced programs cannot obtain this license. To run live-streaming, what you obtain is a Network Culture Business License.

**No official document explicitly says "e-commerce platforms must obtain EDI."** EDI refers to the B21 category of license in the table above; its formal name is the online data processing and transaction processing business. The Ministry of Industry and Information Technology (MIIT) guidelines only say to "apply for the corresponding telecommunications business license according to the business definition." MIIT has also separately replied twice: ride-hailing platforms need only complete website filing, and equity-class and bulk-commodity trading platforms likewise need only website filing. So here we only copy the original definition text of B21 verbatim; whether your line of business requires it is something you and the local Communications Administration must judge. Before starting the application, first call the local Communications Administration to ask clearly.

## 2. The platform's own daily obligations

Obtaining the license only permits you to open for business. What follows are the things you must do every day after opening. How much you will be fined for failing each is written in the respective entries of Section 26.

| Obligation | Hard target | Source |
|---|---|---|
| Verify and register the merchants operating on your platform | Re-verify and update at least every six months | Article 24 of the Measures for the Supervision and Administration of Online Transactions |
| Submit merchants' identity information | Submit to the market regulation authority in January and July each year | Article 25 of the same Measures |
| Submit tax-related information | Submit to the tax authority within the month following the end of each quarter | Article 4 of the Provisions on the Submission of Tax-Related Information by Internet Platform Enterprises |
| Retain transaction information | No less than three years from the date the transaction completes | Article 31 of the E-Commerce Law |
| Retain live-streaming content and logs | Sixty days | Article 16 of the Provisions on the Administration of Internet Live-Streaming Services |
| Retain online performance videos | No less than sixty days | Article 13 of the Measures for the Administration of Online Performance Business Activities |
| Retain network logs | No less than six months | Item 3, Article 23 of the Cybersecurity Law |
| Handle infringement notices | Forward the merchant's statement to the complainant. If there is no follow-up for fifteen days after forwarding, restore | Article 43 of the E-Commerce Law |
| Provide a complaint and reporting entry | Place it in a prominent position, easy to click | Article 16 of the Provisions on the Governance of the Network Information Content Ecosystem |

There are four sets of retention periods, each counted independently. Transaction information for three years, live-streaming content for sixty days, network logs for six months. A platform merchant's identity information is retained for three years from the day the merchant exits the platform. When designing your storage scheme, design to the longest one, not the shortest.

## 3. Choosing a server: how to pick among three tiers

First answer the following questions, then compare prices.

| Question | If the answer is | Then |
|---|---|---|
| Can you tolerate the site being down for a day | Yes | The cheapest VPS (virtual server) is enough |
| Is there user registration, transactions, uploads | Yes | Use a cloud host from a mainstream cloud provider. Pick one that can back up the whole machine at any time and can temporarily upgrade configuration |
| Is there a dedicated person managing the server | No | Do not colocate a whole machine in a data center |
| Is bandwidth or hardware the biggest expense | Yes, and there is a dedicated person managing | Only then consider colocating a whole machine in a data center |

**Small service providers are not unusable, but verify before using them.** Colocating a machine in a data center and providing internet access to others — these two activities themselves require a license. They fall under value-added telecommunications services. The way to check is to open MIIT's Comprehensive Management Information System for the Telecommunications Business Market at tsm.miit.gov.cn and search once by the company's full registered name. Anyone whose license cannot be found is excluded outright. For the kind that can be half the price, the risk is usually one of three: machines are oversold, the boss runs off, or the upstream gets blocked. When something actually goes wrong, if the service provider has a license you can at least complain to the Communications Administration; without a license, you don't even know who to appeal to.

**Host domestically or overseas.** If the server is placed inside the country, ICP filing is required. The access provider is not allowed to provide access to a site that has not completed filing. Placing it overseas does avoid filing. But your users are inside the country and the money you collect is inside the country. The platform obligations written in Entries 5 through 10 of Section 26 — not a single one can be skipped. Hosting overseas also adds an extra layer of cost for cross-border data transfer. Transmitting the personal information of domestic users to overseas machines is what "cross-border transfer" means. A cross-border transfer must satisfy one of the four conditions listed in Article 38 of the Personal Information Protection Law. You must also obtain separate consent from the individual; it cannot be buried in a bundle of agreements for the user to click through together. How many people are involved is counted on a "cumulative from January 1 of the current year" basis. Under 100,000 people, none of the three paths below apply. From 100,000 to 1,000,000 people, you either sign a standard contract or obtain certification. Above 1,000,000 people, you must submit to a security assessment.

**Backup.** Keep backups in at least two places, and do not put both copies in the same region of the same provider. There is no statutory basis for this; it is purely empirical.

## 4. The boundaries of this material

- All the clauses written above are governed by the source column in Section 26 of this book's README. Document numbers, article numbers, and links are there.
- These regulations change quickly. The content of this section was verified in September 2026. Before citing it, please open the original page yourself once more. Pay particular attention to two points: the Cybersecurity Law had its article numbers adjusted as of January 1, 2026; the rules governing minors' tips in live-streaming were changed in April 2026 to a tiered system based on age.
- A few items where the original text could not be obtained are written out one by one in [the verification records](verification-records/supplement-section-26-platforms.md). One is whether e-commerce platforms must obtain EDI as a matter of explicit official text. The other is the judicial interpretation that directly treats operating an online culture or audiovisual service without a license as the crime of illegal business operation.
