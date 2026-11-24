/* =====================================================================
   Business City: behaviour and enterprise data
   File: business-city/business-city.js
   - All 15 enterprise profiles are in the ENTERPRISES list below.
   - To fix a fact later, edit the text in that list. Nothing else needs to change.
   - Information was checked on 13 November 2026 (see CHECKED_ON).
   ===================================================================== */
(function () {
  "use strict";

  var CHECKED_ON = "13 November 2026";

  /* ---------- Categories ---------- */
  var CATEGORIES = {
    "public":  { label: "Public Sector",     badge: "Public sector",     extra: "government owned psu cpse public sector" },
    "private": { label: "Private Sector",    badge: "Private sector",    extra: "private company shareholders private sector" },
    "global":  { label: "Global Enterprise", badge: "Global enterprise", extra: "global multinational mnc international worldwide" }
  };

  var KIND_LABEL = {
    official: "Official company or regulator document",
    news: "News or credit-rating report",
    reference: "Reference site (check against official sources)"
  };

  function src(title, url, kind, supports) {
    return { title: title, url: url, kind: kind, supports: supports };
  }

  /* =====================================================================
     THE 15 ENTERPRISES
     Required fields for every record:
       fullName, shortName, industry, ownership, headquarters,
       intro, products, activities, role, fact
     Extra fields: id, category, mono, ownershipShort, reach, reachNote,
       summary (card text), note (optional), sources
     ===================================================================== */
  var ENTERPRISES = [

    /* ------------------------- PUBLIC SECTOR ------------------------- */
    {
      id: "ongc", category: "public", mono: "ON",
      fullName: "Oil and Natural Gas Corporation Limited",
      shortName: "ONGC",
      industry: "Oil and gas exploration and production",
      ownership: "Public sector: government company (Maharatna CPSE)",
      ownershipShort: "Government company",
      headquarters: "New Delhi, India",
      reach: "National, with overseas projects",
      reachNote: "ONGC is based in India. Its subsidiary ONGC Videsh runs oil and gas projects in other countries.",
      summary: "India's largest producer of crude oil and natural gas, owned and controlled by the Government of India.",
      intro: "ONGC searches for oil and natural gas under the land and under the sea, brings it to the surface and sells it. It began as the Oil and Natural Gas Commission in 1956 and became a company in 1993. The Government of India owns the majority of its shares.",
      products: [
        "Crude oil",
        "Natural gas",
        "Liquefied petroleum gas (LPG)",
        "Other value-added products such as naphtha"
      ],
      activities: [
        "Exploration: surveying and drilling to find oil and gas reserves on land and offshore",
        "Production: running oil and gas fields and bringing the oil and gas to the surface",
        "Selling crude oil and gas to refining and marketing companies such as IOCL, BPCL and HPCL",
        "Overseas business through its subsidiary ONGC Videsh"
      ],
      role: "Petrol, diesel and LPG are made from crude oil, so ONGC supplies the raw material for a basic industry that transport, farming and factories depend on. Business Standard reported in May 2026 that ONGC contributes around 71% of India's domestic production of crude oil and natural gas. It shows how the public sector is used for industries that are important to the whole country.",
      fact: "ONGC's subsidiary ONGC Videsh holds participating interests in oil and gas assets in several countries outside India. A government-owned Indian enterprise therefore also does business abroad.",
      note: "The Government of India held 58.89% of ONGC's shares on 31 March 2026. ONGC's shares are also traded on stock exchanges, but because the government holds the majority, it is still a public-sector enterprise.",
      sources: [
        src("ONGC Business Responsibility and Sustainability Report 2024-25 (stock exchange filing)", "https://nsearchives.nseindia.com/corporate/ONGC_07082025211320_coverbrsrsigned.pdf", "official", "Registered office in New Delhi; business activities and main customers"),
        src("About ONGC Videsh", "https://ongcvidesh.com/company/about-ovl/", "official", "Overseas oil and gas assets"),
        src("Oil & gas stocks rally after govt slashes royalty rates (Business Standard, May 2026)", "https://www.business-standard.com/markets/capital-market-news/oil-gas-stocks-rally-after-govt-slashes-royalty-rates-on-crude-natural-gas-126051200518_1.html", "news", "Share of domestic production"),
        src("ONGC shareholding distribution as on 31 March 2026 (ONGC)", "https://ongcindia.com/documents/77751/2660534/Shareholding140526.pdf/467a8835-ccfe-ac73-a4c2-288ce325a8f6", "official", "President of India holds 58.89% of ONGC's shares on 31 March 2026")
      ]
    },

    {
      id: "bhel", category: "public", mono: "BH",
      fullName: "Bharat Heavy Electricals Limited",
      shortName: "BHEL",
      industry: "Power equipment and heavy electrical engineering",
      ownership: "Public sector: government company (Maharatna CPSE)",
      ownershipShort: "Government company",
      headquarters: "New Delhi, India",
      reach: "National",
      reachNote: "BHEL is an Indian enterprise. This profile focuses on its work for India's power and industry sectors.",
      summary: "A government-owned engineering company that makes equipment for power plants, railways and industry.",
      intro: "BHEL designs, makes, installs and services heavy electrical equipment. BHEL was formally incorporated on 13 November 1964. Its Bhopal predecessor, Heavy Electricals (India) Limited, was registered in 1956 to build the country's heavy electrical industry, and the two companies merged in January 1974.",
      products: [
        "Equipment for power plants that run on coal, gas, hydro, nuclear or solar energy",
        "Power transformers, switchgear and other transmission equipment",
        "Electric locomotives and traction equipment for railways",
        "Solar power plant equipment",
        "Water and sewage treatment plants"
      ],
      activities: [
        "Design and engineering of power plants and industrial systems",
        "Manufacturing heavy equipment in its factories",
        "Erecting and installing equipment at the customer's site",
        "Testing, commissioning and servicing the equipment after it is installed"
      ],
      role: "Every business needs electricity, and railways need locomotives. BHEL makes the machines that produce and carry power, so it belongs to the capital goods industry: businesses that make machines for other businesses. Having such an enterprise helps India build power capacity without depending completely on foreign suppliers.",
      fact: "In a February 2020 presentation, BHEL said it supplied more than half of the traction equipment (the electrical parts that move the train) used in Indian Railways' locomotives and electric multiple units.",
      note: "The Government of India held 63.17% of BHEL until early 2026. In February 2026 it announced the sale of up to 5% through an offer for sale to investors. Market-data websites show the government's holding at 58.17% on 31 March 2026. The government still holds a majority, so BHEL remains a public-sector enterprise. Please check BHEL's latest shareholding filing for the current figure.",
      sources: [
        src("BHEL investor presentation, February 2020", "https://www.bhel.com/sites/default/files/BHELpresentationFeb2020.pdf", "official", "Products, Maharatna status and railway traction equipment"),
        src("History of BHEL (BHEL)", "https://bhel.com/history-bhel", "official", "1956 registration of Heavy Electricals (India) Limited, BHEL's incorporation on 13 November 1964 and the 1974 merger"),
        src("BHEL shares tank as government eyes 5% stake sale via OFS (Business Today, 11 February 2026)", "https://www.businesstoday.in/markets/stocks/story/bhel-shares-tanks-as-government-eyes-to-sell-5-stake-via-ofs-check-targets-details-515560-2026-02-11", "news", "Government holding of 63.17% and the offer for sale"),
        src("BHEL share price target (Trackk)", "https://trackk.in/blog/bhel-share-price-target/", "reference", "Shareholding table showing 58.17% in March 2026 (verify with BHEL's filing)")
      ]
    },

    {
      id: "ntpc", category: "public", mono: "NT",
      fullName: "NTPC Limited (National Thermal Power Corporation)",
      shortName: "NTPC",
      industry: "Electricity generation",
      ownership: "Public sector: government company (Maharatna CPSE)",
      ownershipShort: "Government company",
      headquarters: "New Delhi, India",
      reach: "National, with a small overseas share",
      reachNote: "NTPC works mainly in India. Its group capacity includes about 1.32 GW outside India (Crisil, March 2026).",
      summary: "India's largest power generating company, in which the Government of India holds a majority stake.",
      intro: "NTPC was founded in 1975 by the Government of India to increase the country's electricity generation. It builds and runs power stations and sells electricity in bulk, mostly to state power companies. It also works in coal mining and renewable energy.",
      products: [
        "Electricity generated from coal, gas, hydro and other sources",
        "Renewable energy such as solar power",
        "Coal from its own mines for use in its power stations",
        "Power trading services"
      ],
      activities: [
        "Setting up and operating power stations across the country",
        "Selling electricity in bulk to state power utilities under long-term power purchase agreements",
        "Mining coal for its own plants through captive mines",
        "Expanding renewable energy and, with a partner, developing nuclear power capacity"
      ],
      role: "Factories, shops, farms and homes all need electricity. NTPC's own overview says that on 31 March 2026 it held 17% of India's power capacity and produced 24% of India's electricity. This shows how one public enterprise can supply a service that every other business uses.",
      fact: "NTPC plans to raise its renewable energy capacity to 60 GW by 2031-32. At 31 March 2026 the figure was about 11.5 GW (ICRA rating report, May 2026).",
      note: "The Government of India held 51.10% of NTPC on 31 March 2026. A 'government company' is one in which the government holds at least 51% of the paid-up share capital, and NTPC is close to that line. It is also listed on stock exchanges, which does not change its public-sector status.",
      sources: [
        src("NTPC overview", "https://ntpc.co.in/ntpc-overview", "official", "History, share of national capacity and generation on 31 March 2026"),
        src("NTPC shareholding pattern (quarter ended 31 March 2026)", "https://ntpc.co.in/sites/default/files/shareholding_pattrens/2026/Shareholding%20Pattern_Website.pdf", "official", "Quarter ended 31 March 2026: President of India holds 51.10%; NTPC is a public sector undertaking"),
        src("NTPC Limited: ratings reaffirmed (ICRA, 18 May 2026)", "https://www.icra.in/Rating/GetRationalReportFilePdf?id=143068", "news", "51.10% government holding, capacity, long-term power purchase agreements, renewable plans"),
        src("Crisil rating rationale for NTPC (18 March 2026)", "https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/NTPCLimited_March%2018_%202026_RR_391698.html", "news", "Maharatna status and overseas capacity")
      ]
    },

    {
      id: "bpcl", category: "public", mono: "BP",
      fullName: "Bharat Petroleum Corporation Limited",
      shortName: "BPCL",
      industry: "Oil refining and marketing of petroleum products",
      ownership: "Public sector: government company",
      ownershipShort: "Government company",
      headquarters: "Mumbai, India",
      reach: "National",
      reachNote: "Its refineries and fuel network are in India.",
      summary: "A government-controlled company that refines crude oil at Mumbai, Kochi and Bina and sells fuel across India.",
      intro: "BPCL turns crude oil into fuels and sells them to customers through petrol pumps, LPG distributors and other outlets. It began in 1952 as Burmah Shell Refineries and was taken over by the Government of India in 1976.",
      products: [
        "Petrol and diesel",
        "LPG (cooking gas)",
        "Lubricants",
        "Aviation fuel",
        "Petrochemicals (a small but growing part of its business)"
      ],
      activities: [
        "Refining crude oil at its refineries in Mumbai, Kochi and Bina",
        "Marketing fuels through its retail and distribution network",
        "Filling LPG cylinders at bottling plants",
        "Blending lubricants at lube plants",
        "Investing in refinery and petrochemical expansion"
      ],
      role: "BPCL sits in the middle of a supply chain. It buys crude oil, refines it, and supplies fuel to vehicles, homes, airlines and industry. When fuel is available and reasonably priced, transport and trade in many other businesses run smoothly.",
      fact: "The Government of India once planned to sell its entire stake in BPCL to a private buyer, which would have turned it into a private-sector company. This idea is called privatisation. On 30 June 2026 the government still held 52.98% (BPCL's shareholding filing).",
      note: "BPCL's shares are listed on stock exchanges, but the government holds more than half, so it is a public-sector enterprise. If the government sold its controlling stake, the classification would change.",
      sources: [
        src("BPCL shareholding pattern (quarter ended 30 June 2026)", "https://bharatpetroleum.in/pdf/OurFinancial/Shareholding-Pattern-for-the-quarter-ended-30-06-2026-57197a.pdf", "official", "President of India holds 52.98% on 30 June 2026; BPCL is a public sector undertaking"),
        src("Bharat Petroleum Corporation Limited: rating reaffirmed (ICRA, 10 March 2026)", "https://www.icra.in/Rating/GetRationalReportFilePdf?id=141483", "news", "52.98% government stake; refineries at Mumbai, Bina and Kochi; expansion plans"),
        src("Bharat Petroleum Corporation Ltd (PL India company page)", "https://www.plindia.com/stocks/bharat-petroleum-corporation-ltd/", "reference", "History: taken over by the Government in 1976"),
        src("Strategic disinvestment of BPCL: information memorandum note (Deloitte)", "https://www2.deloitte.com/in/en/pages/finance/articles/in-fa-preliminary-information-memorandum.html", "reference", "BPCL as a Central Public Sector Enterprise under the Ministry of Petroleum and Natural Gas")
      ]
    },

    {
      id: "coal-india", category: "public", mono: "CI",
      fullName: "Coal India Limited",
      shortName: "Coal India (CIL)",
      industry: "Coal mining",
      ownership: "Public sector: government company (Maharatna CPSE)",
      ownershipShort: "Government company",
      headquarters: "Kolkata, India",
      reach: "National",
      reachNote: "Its mining business is in India.",
      summary: "India's largest coal producer, supplying coal to power, steel, cement and fertiliser industries.",
      intro: "Coal India Limited was formed after the Government of India nationalised the coal sector in the 1970s. Coal Mines Authority Limited was formed in 1973 to run the nationalised non-coking coal mines, and Coal India Limited was formed in November 1975 as the holding company for the nationalised coal sector. It works under the Ministry of Coal.",
      products: [
        "Coal for power stations",
        "Coal for steel, cement and fertiliser industries",
        "Coal sold through online auctions (e-auctions)"
      ],
      activities: [
        "Mining coal through underground and opencast mines run by its subsidiary companies",
        "Selling coal under long-term agreements to large buyers such as power companies",
        "Selling coal through online e-auctions",
        "Planning new mining and transport projects"
      ],
      role: "A large part of India's electricity is made from coal, and steel and cement also use it. Coal India supplies this basic raw material, so many other businesses depend on it. Business Standard described it in 2026 as India's largest coal mining company.",
      fact: "In May 2026 the Government sold 2% of Coal India through an offer for sale. This lowered its holding from 63.13% on 31 March 2026 to about 61%. It is called disinvestment, and the company stayed in the public sector because the government kept a majority.",
      note: "A government company can have thousands of ordinary investors as shareholders. What decides its sector is who holds the controlling share, which here is the Government of India (through the Ministry of Coal).",
      sources: [
        src("Coal India stock falls as OFS opens (Business Standard, 27 May 2026)", "https://www.business-standard.com/markets/news/coal-india-share-price-falls-6-as-5000-crore-ofs-opens-government-stake-sale-floor-price-126052700333_1.html", "news", "63.13% government holding in March 2026, the offer for sale, Maharatna status"),
        src("History (Coal India Limited)", "https://archive.coalindia.in/en-us/company/history.aspx", "official", "Coal Mines Authority Limited formed in 1973; Coal India Limited formed as the holding company in November 1975"),
        src("Coal India Ltd company page (Screener)", "https://www.screener.in/company/COALINDIA/consolidated/", "reference", "Subsidiaries and holding of about 61% after the sale"),
        src("Coal India OFS garners strong demand (Business Standard, June 2026)", "https://www.business-standard.com/markets/capital-market-news/coal-india-ofs-garners-strong-demand-non-retail-portion-subscribed-over-4-times-126060200367_1.html", "news", "Customers: power, steel, cement and fertiliser sectors")
      ]
    },

    /* ------------------------- PRIVATE SECTOR ------------------------ */
    {
      id: "reliance", category: "private", mono: "RI",
      fullName: "Reliance Industries Limited",
      shortName: "Reliance",
      industry: "Conglomerate: energy, digital services, retail and media",
      ownership: "Private sector: owned by shareholders; shares listed on stock exchanges",
      ownershipShort: "Private, listed company",
      headquarters: "Mumbai, India",
      reach: "Mainly national",
      reachNote: "Its main businesses serve customers across India.",
      summary: "A large privately owned Indian conglomerate with businesses in energy, mobile and digital services, retail and media.",
      intro: "Reliance Industries grew from a textile business into a conglomerate, which is a company that runs many different businesses. It is headquartered in Mumbai. Its shares are traded on stock exchanges, but it is owned by private shareholders and not by the government.",
      products: [
        "Transportation fuels, polymers and polyester products from oil refining and chemicals",
        "Jio mobile, broadband and digital services",
        "Goods sold through Reliance Retail stores and online, for example groceries, fashion and electronics",
        "Media and entertainment content",
        "Oil and gas from the KG D6 fields",
        "New energy projects such as solar and batteries"
      ],
      activities: [
        "Refining crude oil and making chemicals (Oil to Chemicals)",
        "Providing digital services through Jio Platforms",
        "Running retail stores and online shopping",
        "Producing oil and gas",
        "Building new energy manufacturing facilities"
      ],
      role: "Reliance shows how one private company can work in many industries at once and serve both businesses and households: fuel and plastics for industry, mobile data for phones, groceries for families. Its Integrated Annual Report 2025-26 says Jio has over 524 million digital subscribers and Reliance Retail has 387 million registered customers.",
      fact: "Reliance's annual report for 2025-26 records a workforce of 4,19,911 people. Large private-sector enterprises are major employers as well as sellers of goods and services.",
      note: "'Private sector' means not owned or controlled by the government. A private-sector company can still be listed, which means ordinary investors can buy its shares on a stock exchange.",
      sources: [
        src("Reliance Industries Integrated Annual Report 2025-26", "https://www.ril.com/ar2025-26/index.html", "official", "Jio subscribers, retail customers and workforce"),
        src("Reliance Industries media release for the fourth quarter of 2025-26 (stock exchange filing)", "https://nsearchives.nseindia.com/corporate/kavinavora_24042026193424_SE_24042026_MR.pdf", "official", "Business segments, registered office in Mumbai"),
        src("Reliance Industries Integrated Annual Report 2025-26: Oil to Chemicals", "https://www.ril.com/ar2025-26/oil-to-chemicals.html", "official", "Products of the Oil to Chemicals business: transportation fuels, polymers, elastomers, intermediates and polyesters")
      ]
    },

    {
      id: "tata-motors", category: "private", mono: "TM",
      fullName: "Tata Motors Group: Tata Motors Passenger Vehicles Limited and Tata Motors Limited",
      shortName: "Tata Motors",
      industry: "Automobiles: cars, electric vehicles, trucks and buses",
      ownership: "Private sector: two separately listed companies of the Tata group",
      ownershipShort: "Private, listed companies",
      headquarters: "Mumbai, India",
      reach: "Multinational (through Jaguar Land Rover)",
      reachNote: "The passenger vehicle company includes Jaguar Land Rover, a luxury car maker whose business reaches beyond India.",
      summary: "A Tata group vehicle maker that split into two separate listed companies on 1 October 2025: one for passenger vehicles and one for commercial vehicles.",
      intro: "For many years Tata Motors was one company making cars, trucks and buses. A scheme of arrangement that became effective on 1 October 2025 separated the commercial vehicle business from the passenger vehicle business. There are now two separate companies, each with its own shares and its own focus, and both are part of the Tata group.",
      products: [
        "Tata Motors Passenger Vehicles Limited: cars, SUVs and electric vehicles, with investments in Jaguar Land Rover",
        "Tata Motors Limited: trucks, buses and other commercial vehicles"
      ],
      activities: [
        "Designing and manufacturing cars, SUVs and electric vehicles (Tata Motors Passenger Vehicles)",
        "Holding investments in the electric vehicle business and in Jaguar Land Rover (Tata Motors Passenger Vehicles)",
        "Designing and manufacturing trucks, buses and commercial vehicles (Tata Motors Limited)",
        "Reorganising the company through a demerger so each business can focus on its own customers"
      ],
      role: "Commercial vehicles carry goods and people for other businesses, so they support trade. Passenger vehicles serve personal travel. The demerger shows how companies can reorganise legally to focus on different markets.",
      fact: "Under the demerger, each Tata Motors shareholder received one share of the new commercial vehicle company for every share held, with 14 October 2025 as the record date. Shareholders therefore ended up owning shares in two companies.",
      note: "Do not write simply 'Tata Motors owns everything'. Since October 2025 the old Tata Motors company has been renamed Tata Motors Passenger Vehicles Limited and holds passenger vehicles, electric vehicles and Jaguar Land Rover. The commercial vehicle business moved to a different company, formerly TML Commercial Vehicles Limited, which is now named Tata Motors Limited. They are different legal entities.",
      sources: [
        src("Tata Motors press release: demerger of the commercial vehicle business (August 2024)", "https://tatamotors.com/press-releases/demerger-of-cv-business-undertaking-of-tata-motors-ltd-into-a-separate-listed-company", "official", "The scheme, the two businesses and the Tata group description"),
        src("Tata Motors stock exchange filing on the scheme of arrangement (1 August 2024)", "https://nsearchives.nseindia.com/corporate/TATAMOTORS_01082024164324_NSEBSE.pdf", "official", "Legal structure of the scheme and the new names"),
        src("Tata Motors demerger: key things every investor should know (Business Standard)", "https://www.business-standard.com/markets/news/tata-motors-demerger-key-things-every-investors-should-know-before-listing-125110300494_1.html", "news", "Effective date, record date, renaming and what each company holds")
      ]
    },

    {
      id: "infosys", category: "private", mono: "IN",
      fullName: "Infosys Limited",
      shortName: "Infosys",
      industry: "Information technology services and consulting",
      ownership: "Private sector: owned by shareholders; shares listed in India and the USA",
      ownershipShort: "Private, listed company",
      headquarters: "Bengaluru, India",
      reach: "Multinational",
      reachNote: "It serves clients in many countries, including North America and Europe.",
      summary: "A Bengaluru technology and consulting company that builds and runs software and digital systems for businesses around the world.",
      intro: "Infosys was founded in 1981 and is headquartered in Bengaluru. It sells services instead of physical goods: it helps banks, shops, manufacturers and other businesses build software, move to the cloud and use data and artificial intelligence. Its shares have been traded on Indian stock exchanges since 1993.",
      products: [
        "Technology consulting",
        "Software development and maintenance",
        "Cloud, data and analytics services",
        "Cybersecurity services",
        "Business process management",
        "Finacle, a software platform for banks, and Topaz, its AI-based services"
      ],
      activities: [
        "Understanding a client's problem and designing a technology solution",
        "Writing, testing and maintaining software for clients",
        "Helping clients move their systems to the cloud",
        "Serving clients in India, North America, Europe and other regions"
      ],
      role: "Infosys is an example of the services sector. It sells knowledge and technical skills. Banks, shops and airlines use its systems for their own work, so it supports trade and commerce indirectly.",
      fact: "Infosys was founded in 1981 and first listed in India in 1993. Its shares were later also listed in the USA: American depositary shares in 1999 and the New York Stock Exchange in 2012.",
      note: "Infosys is listed in two countries, but it is owned by shareholders and not by any government, so it is a private-sector enterprise that also works internationally.",
      sources: [
        src("Infosys strategy and business model (Umbrex company profile)", "https://umbrex.com/resources/company-profiles/infosys-ltd/", "reference", "Founding year, headquarters, listing history and services"),
        src("Infosys Limited company profile (StockAnalysis)", "https://stockanalysis.com/quote/nse/INFY/company/", "reference", "Regions served and service lines"),
        src("Infosys official website", "https://www.infosys.com", "official", "Company's own information (home page)")
      ]
    },

    {
      id: "hdfc-bank", category: "private", mono: "HB",
      fullName: "HDFC Bank Limited",
      shortName: "HDFC Bank",
      industry: "Banking and financial services",
      ownership: "Private sector bank: owned by shareholders; shares listed on stock exchanges",
      ownershipShort: "Private sector bank",
      headquarters: "Mumbai, India",
      reach: "Mainly national, with a few overseas offices",
      reachNote: "It serves customers mainly in India. HDFC Bank's milestones list says it opened its first overseas branch, in Bahrain, in 2008.",
      summary: "India's largest private sector bank, which merged with the housing finance company HDFC Limited on 1 July 2023.",
      intro: "HDFC Bank was set up in 1994 after the Reserve Bank of India allowed new private-sector banks. It offers everyday banking such as accounts and loans. On 1 July 2023, HDFC Limited, a housing finance company that had promoted the bank, merged into the bank.",
      products: [
        "Savings and current accounts",
        "Loans for people and businesses",
        "Home loans, which came from the former HDFC Limited after the merger",
        "Cards and digital banking services"
      ],
      activities: [
        "Accepting deposits from customers",
        "Lending money as loans",
        "Providing payment and digital banking services",
        "Working under the rules of the Reserve Bank of India"
      ],
      role: "Banks are called aids to trade. They collect savings and lend the money to people and businesses, which keeps trade and production moving. The 2023 merger joined a bank with India's largest housing finance company, so one institution now offers both everyday banking and home loans.",
      fact: "The merger was an amalgamation: HDFC Limited stopped existing as a separate company on 1 July 2023, and its shareholders received shares of HDFC Bank.",
      note: "HDFC Bank and a public-sector bank such as State Bank of India do the same kind of business, banking. The difference is ownership: HDFC Bank is owned by shareholders, while a public-sector bank is controlled by the government.",
      sources: [
        src("HDFC Ltd. to merge into HDFC Bank effective July 1, 2023 (HDFC Bank press release)", "https://www.hdfc.bank.in/press-release/2023/q2/hdfc-ltd-to-merge-into-hdfc-bank-effective-july-1-2023", "official", "Effective date of the merger"),
        src("Message from the Chairman and the MD & CEO (HDFC Bank)", "https://www.hdfc.bank.in/important-messages/message-from-chairman-and-md-ceo", "official", "Describes HDFC Limited as the bank's promoter in connection with the merger"),
        src("HDFC Ltd mergers into HDFC Bank effective July 1, 2023 (Daily Excelsior)", "https://www.dailyexcelsior.com/?p=1553652", "news", "Completion of the merger, largest private sector bank, share exchange for HDFC Ltd shareholders"),
        src("HDFC Bank milestones 1995-2023 (HDFC Bank)", "https://hdfcbank.com/content/api/contentstream-id/723fb80a-2dde-42a3-9793-7ae1be57c87f/8e335509-e8e0-4fb8-b4c4-024f90885688/Footer/About%20Us/News%20Room/milestone-revised-28-06.pdf", "official", "1994 approval from the RBI to set up a private sector bank; first overseas branch in Bahrain in 2008"),
        src("Who we are (HDFC Bank)", "https://www.hdfcbank.com/personal/about-us/overview/who-we-are", "official", "Description as the largest private sector bank in India and the announced merger with HDFC Limited")
      ]
    },

    {
      id: "lt", category: "private", mono: "L&T",
      fullName: "Larsen & Toubro Limited",
      shortName: "L&T",
      industry: "Engineering, construction, manufacturing and technology services",
      ownership: "Private sector: owned by shareholders; shares listed on stock exchanges",
      ownershipShort: "Private, listed company",
      headquarters: "Mumbai, India",
      reach: "Multinational",
      reachNote: "L&T's 2025-26 sustainability report says it served international markets in 61 countries.",
      summary: "A Mumbai engineering and construction group that builds infrastructure and makes industrial and defence equipment.",
      intro: "L&T was started in 1938 in Bombay, now Mumbai, by two Danish engineers. It grew into a group that builds buildings, transport infrastructure, power and process plants, and also makes heavy equipment and defence systems and provides technology services.",
      products: [
        "Construction of buildings, factories and transport infrastructure",
        "Engineering projects for oil, gas and power",
        "Heavy engineering and defence products",
        "Technology services through group companies such as LTIMindtree",
        "Financial services"
      ],
      activities: [
        "EPC projects: engineering, procurement and construction, which means designing a project, buying the materials and building it",
        "Manufacturing heavy equipment",
        "Providing technology and engineering services",
        "Working for customers in India and in other countries"
      ],
      role: "L&T builds things that other businesses and governments need: factories, plants and infrastructure. Infrastructure supports all commerce because it helps goods, people and power move.",
      fact: "L&T's founders, Henning Holck-Larsen and Soren Kristian Toubro, first came to India representing a Danish company, F L Smidth. They then started their own firm in 1938, a good example of a business that began as agents and grew into a large engineering enterprise.",
      note: "L&T is listed on stock exchanges and works in many countries, but it is owned by shareholders and not by the government, so it is a private-sector enterprise.",
      sources: [
        src("L&T: who we are (L&T Construction)", "https://myportal.lntecc.com/who-we-are", "official", "Founding story"),
        src("L&T strategy and business model (Umbrex company profile)", "https://umbrex.com/resources/company-profiles/larsen-toubro-ltd/", "reference", "Headquarters, businesses and LTIMindtree"),
        src("Business Responsibility and Sustainability Report 2025-26 (L&T Integrated Annual Report)", "https://investors.larsentoubro.com/pdf/2026/Business%20Responsibility%20and%20Sustainability%20Reporting%202025-26.pdf", "official", "International markets served (61 countries) and listing on BSE and NSE"),
        src("Larsen & Toubro official website", "https://www.larsentoubro.com", "official", "Company's own information (home page)")
      ]
    },

    /* ------------------------- GLOBAL ENTERPRISES -------------------- */
    {
      id: "apple", category: "global", mono: "AP",
      fullName: "Apple Inc.",
      shortName: "Apple",
      industry: "Consumer electronics, software and online services",
      ownership: "Private sector: owned by shareholders; shares listed on NASDAQ (USA)",
      ownershipShort: "Private, listed company",
      headquarters: "Cupertino, California, USA",
      reach: "Multinational",
      reachNote: "Apple reports its sales for the Americas, Europe, Greater China, Japan and the rest of Asia Pacific.",
      summary: "A US technology company that designs iPhone, Mac, iPad and wearable devices and sells related services.",
      intro: "Apple's annual report says it designs, manufactures and markets smartphones, personal computers, tablets, wearables and accessories, and sells a variety of related services. Its headquarters are at One Apple Park Way in Cupertino, California.",
      products: [
        "iPhone smartphones",
        "Mac computers",
        "iPad tablets",
        "Wearables, home and accessories, such as smartwatches and wireless headphones",
        "Services such as the App Store, iCloud and Apple Music"
      ],
      activities: [
        "Designing hardware, operating systems, apps and services so they work together",
        "Selling to consumers, small and mid-sized businesses, schools, enterprises and governments",
        "Earning continuing income from services used on its devices",
        "Managing business in regions: the Americas, Europe, Greater China, Japan and the rest of Asia Pacific"
      ],
      role: "Apple shows the ecosystem business model: it sells devices and then earns from software and services used on those devices. As a global enterprise it sells in markets across the world, so its success depends on trade between countries.",
      fact: "Apple's annual report says it designs and develops nearly the entire solution for its products, including the hardware, the operating system, many software applications and related services.",
      note: "'Global' describes where Apple does business. It does not describe its ownership. Apple is owned by shareholders and its shares are listed on NASDAQ, so it is a private-sector enterprise.",
      sources: [
        src("Apple Inc. Form 10-K for the fiscal year ended 26 September 2026", "https://www.sec.gov/Archives/edgar/data/0000320193/000032019326000026/aapl-20260926.htm", "official", "Company background, headquarters (Cupertino), products, regions, customers, Nasdaq listing")
      ]
    },

    {
      id: "microsoft", category: "global", mono: "MS",
      fullName: "Microsoft Corporation",
      shortName: "Microsoft",
      industry: "Software, cloud computing and technology",
      ownership: "Private sector: owned by shareholders; shares listed on NASDAQ (USA)",
      ownershipShort: "Private, listed company",
      headquarters: "Redmond, Washington, USA",
      reach: "Multinational",
      reachNote: "Its annual report says it aims to create opportunity in every country around the world.",
      summary: "A US technology company known for Windows, Microsoft 365, Azure cloud services, LinkedIn and Xbox.",
      intro: "Microsoft was founded in 1975 and is headquartered in Redmond, Washington. Its stated mission is to help every person and every organisation on the planet achieve more, and it describes itself as a technology company working across AI, cloud computing, productivity and personal computing.",
      products: [
        "Windows and Surface devices",
        "Microsoft 365 and Teams for work and study",
        "Azure cloud services and Dynamics 365 business software",
        "LinkedIn and GitHub",
        "Xbox gaming and the Bing search service"
      ],
      activities: [
        "In its FY2026 annual report Microsoft reported three segments. Productivity and Business Processes: Microsoft 365, LinkedIn and Dynamics",
        "Intelligent Cloud: Azure and server products (FY2026 segment)",
        "More Personal Computing: Windows, devices, gaming and search (FY2026 segment)",
        "From fiscal year 2027 (from 1 July 2026) Microsoft reports two segments instead: Agents and Infra, and Devices and Consumer",
        "Selling through computer makers, distributors, resellers, online and retail stores"
      ],
      role: "Businesses, schools and governments run on software. Microsoft sells it as subscriptions and as cloud services that customers pay for according to use. This shows how modern service-based revenue works and how one company supplies tools to customers in many countries.",
      fact: "Microsoft's financial year ends on 30 June. Most Indian companies end their financial year on 31 March, so companies in different countries can follow different accounting years.",
      note: "Microsoft is a global enterprise, which describes its reach. It is owned by shareholders, and its shares are listed on NASDAQ, so it is private sector and not government owned.",
      sources: [
        src("Microsoft Corporation annual report on Form 10-K (fiscal year ended 30 June 2026)", "https://microsoft.gcs-web.com/static-files/8a9beeed-0e9e-48e6-b4fb-593d558e2693", "official", "Headquarters address, mission and areas of business"),
        src("Microsoft Form 8-K of 2 September 2026 with Exhibit 99.1, FY27 Segments and Investor Metrics (Microsoft investor relations)", "https://microsoft.gcs-web.com/node/35176/html", "official", "The three FY2026 segments and, from fiscal year 2027, two segments: Agents and Infra, and Devices and Consumer"),
        src("Microsoft Corporation profile (Yahoo Finance)", "https://uk.finance.yahoo.com/quote/MSFT/profile", "reference", "Products and sales channels")
      ]
    },

    {
      id: "toyota", category: "global", mono: "TY",
      fullName: "Toyota Motor Corporation",
      shortName: "Toyota",
      industry: "Automobile manufacturing",
      ownership: "Private sector: owned by shareholders; shares listed in Japan and other countries",
      ownershipShort: "Private, listed company",
      headquarters: "Toyota City, Aichi Prefecture, Japan",
      reach: "Multinational",
      reachNote: "It sells vehicles worldwide and builds them in Japan and other countries. In India it has a business called Toyota Kirloskar Motor.",
      summary: "A Japanese carmaker that designs, makes and finances vehicles under the Toyota and Lexus brands.",
      intro: "Toyota was founded in 1937 by Kiichiro Toyoda and is headquartered in Toyota City, Japan. Its core business is designing, manufacturing, financing and servicing vehicles under the Toyota and Lexus brands, and it also works with group companies such as Daihatsu. Hino Motors has not been a Toyota subsidiary since 1 April 2026, when it became part of ARCHION, a truck holding company in which Toyota and Daimler Truck each plan to hold about 25%.",
      products: [
        "Passenger cars, SUVs and pickup trucks",
        "Lexus luxury vehicles",
        "Hybrid vehicles",
        "Commercial vehicles through partners such as Hino, now part of ARCHION, in which Toyota plans to hold about 25%",
        "Vehicle financing, parts and after-sales service"
      ],
      activities: [
        "Designing vehicles",
        "Manufacturing in plants in Japan and many other countries",
        "Financing customers who buy vehicles",
        "Servicing vehicles and supplying parts through dealers"
      ],
      role: "Toyota shows how a manufacturing multinational works: it can design in one country, build in several and sell worldwide. Its production methods have been studied and copied by manufacturers around the world.",
      fact: "Toyota developed the Toyota Production System. One of its ideas is just-in-time production, which means making and delivering parts only when they are needed, so that less money is tied up in stored goods.",
      note: "Toyota is a global enterprise because it operates in many countries. Its ownership is separate: it is owned by shareholders and its shares are listed on stock exchanges, so it is private sector.",
      sources: [
        src("Toyota global website", "https://global.toyota/en/", "official", "Company's own information (home page)"),
        src("ARCHION Corporation listed on the Tokyo Stock Exchange Prime Market; new ARCHION Group launches business (ARCHION, Mitsubishi Fuso and Hino press release, 1 April 2026)", "https://archion.co.jp/media/20260401_archion_newsrelease_en.pdf", "official", "ARCHION began operations on 1 April 2026 and owns 100% of Hino and Mitsubishi Fuso; Daimler Truck and Toyota each plan to hold 25%"),
        src("Toyota strategy and business model (Umbrex company profile)", "https://umbrex.com/?p=297250", "reference", "Founding year, headquarters, brands and listing"),
        src("Toyota Production System (Toyota global website)", "https://global.toyota/en/company/vision-and-philosophy/production-system/index.html", "official", "Just-in-time idea: making only what is needed, when it is needed, in the amount needed")
      ]
    },

    {
      id: "samsung", category: "global", mono: "SS",
      fullName: "Samsung Electronics Co., Ltd.",
      shortName: "Samsung Electronics",
      industry: "Electronics and semiconductors",
      ownership: "Private sector: owned by shareholders; shares listed in South Korea; part of the Samsung Group",
      ownershipShort: "Private, listed company",
      headquarters: "Suwon, South Korea",
      reach: "Multinational",
      reachNote: "Its 2024 half-year report describes a head office in Korea and subsidiaries around the world.",
      summary: "A South Korean electronics company making smartphones, TVs, home appliances and memory chips.",
      intro: "Samsung Electronics was founded in 1969 in Suwon, South Korea, and is the electronics company of the Samsung Group. It sells finished products to consumers and also supplies components, such as memory chips, to other manufacturers.",
      products: [
        "Smartphones, televisions and computers",
        "Refrigerators, washing machines and air conditioners",
        "Memory chips (DRAM and NAND flash) and mobile processors",
        "OLED display panels for smartphones",
        "Car audio, digital cockpits and speakers through its Harman business"
      ],
      activities: [
        "Device eXperience (DX) division: consumer products such as phones and TVs",
        "Device Solutions (DS) division: semiconductor chips, including making chips for other companies (foundry)",
        "Samsung Display (SDC): display panels",
        "Harman: automotive electronics and audio"
      ],
      role: "Samsung sells to two kinds of customers: families who buy phones and TVs, and other manufacturers who buy its chips and screens. This shows how modern commerce works through chains in which one company's product becomes another company's input.",
      fact: "Samsung's 2026 half-year business report said that, as of 30 June 2026, the company had its headquarters in Korea and 309 subsidiaries across the world, including 9 regional headquarters for its DX division. This is a good example of how a multinational is organised.",
      note: "A group such as the Samsung Group contains many separate companies. Samsung Electronics is one of them. It is owned by shareholders and listed on a stock exchange, so it is private sector.",
      sources: [
        src("Samsung Electronics 2026 half-year business report (half-year ended 30 June 2026)", "https://images.samsung.com/is/content/samsung/assets/global/ir/docs/2026_Half_Interim_Report.pdf", "official", "Headquarters, divisions, products, 309 subsidiaries and 9 DX regional headquarters at 30 June 2026"),
        src("Samsung official website", "https://www.samsung.com", "official", "Company's own information (home page)")
      ]
    },

    {
      id: "coca-cola", category: "global", mono: "CC",
      fullName: "The Coca-Cola Company",
      shortName: "Coca-Cola",
      industry: "Beverages (non-alcoholic drinks)",
      ownership: "Private sector: owned by shareholders; shares listed on the New York Stock Exchange",
      ownershipShort: "Private, listed company",
      headquarters: "Atlanta, Georgia, USA",
      reach: "Multinational",
      reachNote: "Its drinks are sold in more than 200 countries and territories.",
      summary: "A beverage company that owns famous drink brands and works with independent bottling partners around the world.",
      intro: "The Coca-Cola Company has its headquarters in Atlanta, Georgia. It was incorporated in Delaware in 1919 and succeeded to the business of a Georgia corporation of the same name that had been organised in 1892. Its drinks are sold in more than 200 countries and territories. It owns more than 200 brands, but most of the local bottling is done by separate companies.",
      products: [
        "Beverage concentrates and syrups, sold to bottling partners",
        "Finished drinks under more than 200 brands"
      ],
      activities: [
        "Concentrate operations: making and selling concentrates and syrups to authorised bottling partners",
        "Bottling partners: independent companies that make, package, distribute and sell the finished drinks",
        "In some places, running its own bottling and distribution operations",
        "Building and marketing its brands"
      ],
      role: "Coca-Cola shows a franchise-style business. The company controls the brands and concentrates, while local partners bottle and distribute the drinks. This lets a global brand reach local shops while creating local business and jobs. The company says it and its roughly 200 independent bottling partners employ more than 700,000 people.",
      fact: "In 2025, the five largest independent bottling partners together accounted for 44% of the company's total worldwide unit case volume. One of them is Coca-Cola FEMSA, which serves Latin America.",
      note: "The Coca-Cola Company works with independent bottling partners and says it does not own, manage or control most local bottling companies. So a bottler in any one country is usually a separate business, not part of the company's ownership.",
      sources: [
        src("The Coca-Cola Company Form 10-K for the fiscal year ended 31 December 2025", "https://www.sec.gov/Archives/edgar/data/21344/000162828026010047/ko-20251231.htm", "official", "Incorporation history, sales in more than 200 countries and territories, and the five largest bottling partners (44% of unit case volume in 2025)"),
        src("The Coca-Cola system (Coca-Cola investor relations)", "https://investors.coca-colacompany.com/about/coca-cola-system", "official", "Concentrate operations, bottling partners and the five largest partners"),
        src("Our company FAQ (The Coca-Cola Company)", "https://www.coca-colacompany.com/about-us/faq/our-company", "official", "Headquarters, over 200 countries, over 200 brands, bottling partners and employment"),
        src("The Coca-Cola Company (Britannica)", "https://www.britannica.com/topic/The-Coca-Cola-Company", "reference", "Headquarters and independent bottlers")
      ]
    }
  ];

  /* =====================================================================
     Everything below is the behaviour. You do not need to change it.
     ===================================================================== */

  var state = { query: "", cat: "all", scrollY: 0, lastId: "", fromList: false };

  var el = {
    grid: document.getElementById("bc-grid"),
    count: document.getElementById("bc-count"),
    search: document.getElementById("bc-search"),
    clear: document.getElementById("bc-search-clear"),
    filters: document.querySelector(".bc-filters"),
    empty: document.getElementById("bc-empty"),
    emptyText: document.getElementById("bc-empty-text"),
    emptyClear: document.getElementById("bc-empty-clear"),
    emptyAll: document.getElementById("bc-empty-all"),
    intro: document.getElementById("bc-intro"),
    listView: document.getElementById("bc-list-view"),
    detailView: document.getElementById("bc-detail-view")
  };

  var cardById = {};   // id -> card element
  var searchById = {}; // id -> lower-case text used for searching

  /* ---------- Sticky header: keep content from hiding underneath it ---------- */
  var header = document.querySelector(".bc-top");

  function headerHeight() {
    return header ? Math.round(header.getBoundingClientRect().height) : 64;
  }
  // Tells the CSS how tall the header really is (used for scroll offsets)
  function syncHeaderVar() {
    document.documentElement.style.setProperty("--bc-header-h", headerHeight() + "px");
  }
  // If the top of this element is hidden under the header, scroll it down into view
  function revealBelowHeader(node, gap) {
    if (!node) return;
    var limit = headerHeight() + (gap === undefined ? 16 : gap);
    var top = node.getBoundingClientRect().top;
    if (top < limit) window.scrollBy(0, top - limit);
  }
  // Makes sure a whole element is visible: below the header and above the bottom edge
  function keepInView(node) {
    if (!node) return;
    var limit = headerHeight() + 16;
    var r = node.getBoundingClientRect();
    if (r.top < limit) {
      window.scrollBy(0, r.top - limit);
    } else if (r.bottom > window.innerHeight - 12) {
      var move = r.bottom - (window.innerHeight - 12);
      window.scrollBy(0, Math.min(move, r.top - limit));
    }
  }

  /* ---------- Small helpers ---------- */
  function esc(text) {
    return String(text).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function norm(text) { return String(text).toLowerCase(); }
  function findById(id) {
    for (var i = 0; i < ENTERPRISES.length; i++) if (ENTERPRISES[i].id === id) return ENTERPRISES[i];
    return null;
  }
  function monoClass(e) { return "bc-mono" + (e.mono.length > 2 ? " bc-mono-long" : ""); }

  /* ---------- Text used by the search box ----------
     Students can search by company name, industry, products, services,
     ownership type, category and headquarters. Letters, numbers and &
     are kept; other punctuation becomes a space. A search word must match
     the START of a word, so "oil" finds "oil" but not "toilet". */
  function plain(text) {
    return " " + String(text).toLowerCase().replace(/[^a-z0-9&]+/g, " ").replace(/\s+/g, " ") + " ";
  }
  function buildSearchText(e) {
    var cat = CATEGORIES[e.category];
    return plain([
      e.fullName, e.shortName, e.industry, e.ownership, e.ownershipShort, e.headquarters,
      e.reach, e.products.join(" "), cat.label, cat.extra
    ].join(" "));
  }

  /* ---------- Cards ---------- */
  function buildCard(e) {
    var cat = CATEGORIES[e.category];
    var card = document.createElement("article");
    card.className = "bc-card bc-cat-" + e.category;
    card.setAttribute("data-id", e.id);
    card.setAttribute("aria-labelledby", "bc-ct-" + e.id);
    card.innerHTML =
      '<div class="bc-card-head">' +
        '<div class="' + monoClass(e) + '" aria-hidden="true">' + esc(e.mono) + '</div>' +
        '<div><h3 class="bc-card-title" id="bc-ct-' + e.id + '">' + esc(e.shortName) + '</h3>' +
        '<p class="bc-card-industry">' + esc(e.industry) + '</p></div>' +
      '</div>' +
      '<div class="bc-badges"><span class="bc-badge">' + esc(cat.badge) + '</span>' +
        '<span class="bc-badge bc-badge-own">' + esc(e.ownershipShort) + '</span></div>' +
      '<p class="bc-card-text">' + esc(e.summary) + '</p>' +
      '<button type="button" class="bc-btn bc-btn-ghost" data-open="' + e.id + '" aria-label="View details: ' + esc(e.fullName) + '">View Details</button>';
    return card;
  }

  function buildGrid() {
    var frag = document.createDocumentFragment();
    for (var i = 0; i < ENTERPRISES.length; i++) {
      var e = ENTERPRISES[i];
      var card = buildCard(e);
      cardById[e.id] = card;
      searchById[e.id] = buildSearchText(e);
      frag.appendChild(card);
    }
    el.grid.appendChild(frag);
  }

  /* ---------- Statistics ---------- */
  function showStats() {
    var counts = { all: ENTERPRISES.length, "public": 0, "private": 0, "global": 0 };
    for (var i = 0; i < ENTERPRISES.length; i++) counts[ENTERPRISES[i].category]++;
    for (var key in counts) {
      var node = document.getElementById("bc-n-" + key);
      if (node) node.textContent = counts[key];
    }
  }

  /* ---------- Search and filters work together ---------- */
  function matches(e) {
    if (state.cat !== "all" && e.category !== state.cat) return false;
    var words = plain(state.query).split(" ");
    var text = searchById[e.id];
    for (var i = 0; i < words.length; i++) {
      if (words[i] && text.indexOf(" " + words[i]) === -1) return false;
    }
    return true;
  }

  function applyFilters() {
    var shown = 0;
    for (var i = 0; i < ENTERPRISES.length; i++) {
      var e = ENTERPRISES[i], ok = matches(e);
      cardById[e.id].hidden = !ok;
      if (ok) shown++;
    }
    el.count.textContent = "Showing " + shown + " of " + ENTERPRISES.length + " enterprises";
    var none = shown === 0;
    el.grid.hidden = none;
    el.empty.hidden = !none;
    if (none) {
      var q = state.query.replace(/^\s+|\s+$/g, "");
      el.emptyText.textContent = q
        ? 'Nothing matches "' + q + '"' + (state.cat !== "all" ? " in this category" : "") + ". Try a shorter word, such as a company name, an industry or a product."
        : "There are no enterprises in this category.";
      el.emptyClear.hidden = !q;
      el.emptyAll.hidden = state.cat === "all";
    }
    el.clear.hidden = !state.query;
  }

  function setCategory(cat) {
    state.cat = cat;
    var chips = el.filters.querySelectorAll(".bc-chip");
    for (var i = 0; i < chips.length; i++) {
      chips[i].setAttribute("aria-pressed", chips[i].getAttribute("data-cat") === cat ? "true" : "false");
    }
    applyFilters();
  }

  function clearSearch() {
    state.query = "";
    el.search.value = "";
    applyFilters();
  }

  /* ---------- Detail view ---------- */
  function listItems(items) {
    var out = '<ul class="bc-list">';
    for (var i = 0; i < items.length; i++) out += "<li>" + esc(items[i]) + "</li>";
    return out + "</ul>";
  }

  function renderDetail(e) {
    var cat = CATEGORIES[e.category];
    var sources = '<ul class="bc-list">';
    for (var i = 0; i < e.sources.length; i++) {
      var s = e.sources[i];
      sources += '<li><a class="bc-source-link" href="' + esc(s.url) + '" target="_blank" rel="noopener noreferrer">' + esc(s.title) + '</a>' +
        '<span class="bc-source-kind">' + esc(KIND_LABEL[s.kind]) + ". Supports: " + esc(s.supports) + ".</span></li>";
    }
    sources += "</ul>";

    var html =
      '<div class="bc-detail bc-cat-' + e.category + '">' +
        '<button type="button" class="bc-btn bc-btn-ghost bc-back" id="bc-back">Back to all enterprises</button>' +
        '<div class="bc-dhead">' +
          '<div class="' + monoClass(e) + '" aria-hidden="true">' + esc(e.mono) + '</div>' +
          '<div><h2 class="bc-dtitle" id="bc-dtitle" tabindex="-1">' + esc(e.fullName) + '</h2>' +
          '<div class="bc-badges"><span class="bc-badge">' + esc(cat.badge) + '</span>' +
          '<span class="bc-badge bc-badge-own">' + esc(e.ownershipShort) + '</span></div></div>' +
        '</div>' +
        '<div class="bc-dgrid">' +
          '<aside class="bc-dside bc-panel bc-facts" aria-label="Quick facts">' +
            '<h3>Quick facts</h3><dl>' +
              '<div><dt>Full company name</dt><dd>' + esc(e.fullName) + '</dd></div>' +
              '<div><dt>Short name</dt><dd>' + esc(e.shortName) + '</dd></div>' +
              '<div><dt>Industry</dt><dd>' + esc(e.industry) + '</dd></div>' +
              '<div><dt>Ownership type</dt><dd>' + esc(e.ownership) + '</dd></div>' +
              '<div><dt>Reach</dt><dd>' + esc(e.reach) + '<span class="bc-reach-note">' + esc(e.reachNote) + '</span></dd></div>' +
              '<div><dt>Headquarters</dt><dd>' + esc(e.headquarters) + '</dd></div>' +
            '</dl>' +
          '</aside>' +
          '<div class="bc-dmain">' +
            '<section class="bc-panel"><h3>Introduction</h3><p>' + esc(e.intro) + '</p></section>' +
            '<section class="bc-panel"><h3>Products and services</h3>' + listItems(e.products) + '</section>' +
            '<section class="bc-panel"><h3>Main business activities</h3>' + listItems(e.activities) + '</section>' +
            '<section class="bc-panel"><h3>Role in commerce</h3><p>' + esc(e.role) + '</p></section>' +
            '<section class="bc-panel bc-fact"><h3>Did you know?</h3><p>' + esc(e.fact) + '</p></section>' +
            (e.note ? '<section class="bc-panel bc-note"><h3>Important to understand</h3><p>' + esc(e.note) + '</p></section>' : "") +
            '<section class="bc-panel bc-sources"><h3>Sources and further reading</h3>' + sources +
              '<p class="bc-small">Information checked on ' + CHECKED_ON + '. Links open in a new tab. Figures such as shareholding percentages change over time, so check the latest company filing before using them.</p></section>' +
          '</div>' +
        '</div>' +
      '</div>';
    el.detailView.innerHTML = html;
  }

  function showDetail(e) {
    renderDetail(e);
    el.intro.hidden = true;
    el.listView.hidden = true;
    el.detailView.hidden = false;
    document.title = e.shortName + " | Business City | CommerceVerse";
    syncHeaderVar();
    window.scrollTo(0, 0);
    var h = document.getElementById("bc-dtitle");
    if (h) h.focus({ preventScroll: true });
    // Check again after the browser has finished laying out the profile
    window.requestAnimationFrame(function () {
      window.scrollTo(0, 0);
      revealBelowHeader(document.getElementById("bc-back"), 12);
    });
  }

  function showList() {
    el.detailView.hidden = true;
    el.intro.hidden = false;
    el.listView.hidden = false;
    document.title = "Business City | CommerceVerse";
    syncHeaderVar();
    var y = state.scrollY, id = state.lastId;
    window.scrollTo(0, y);
    window.requestAnimationFrame(function () {
      window.scrollTo(0, y);
      var btn = id ? el.grid.querySelector('[data-open="' + id + '"]') : null;
      if (btn && !btn.closest("[hidden]")) {
        btn.focus({ preventScroll: true });
        keepInView(btn.closest(".bc-card"));
      }
    });
  }

  /* ---------- Page address (#id) lets the browser Back button work ---------- */
  function route() {
    var id = "";
    try { id = decodeURIComponent((window.location.hash || "").replace(/^#/, "")); } catch (err) { id = ""; }
    var e = id ? findById(id) : null;
    if (e) showDetail(e); else showList();
  }

  function openDetail(id) {
    state.scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
    state.lastId = id;
    state.fromList = true;
    window.location.hash = id;
  }

  function goBack() {
    if (state.fromList && window.history.length > 1) window.history.back();
    else window.location.hash = "";
  }

  // Puts the cursor in the search box and keeps its label visible under the header
  function focusSearch() {
    el.search.focus({ preventScroll: true });
    revealBelowHeader(document.querySelector(".bc-search-label"), 16);
  }

  /* ---------- Events (one listener per area) ---------- */
  function bind() {
    el.search.addEventListener("input", function () { state.query = el.search.value; applyFilters(); });
    el.clear.addEventListener("click", function () { clearSearch(); focusSearch(); });
    el.emptyClear.addEventListener("click", function () { clearSearch(); focusSearch(); });
    el.emptyAll.addEventListener("click", function () { setCategory("all"); });

    el.filters.addEventListener("click", function (ev) {
      var chip = ev.target.closest ? ev.target.closest(".bc-chip") : null;
      if (chip) setCategory(chip.getAttribute("data-cat"));
    });

    el.grid.addEventListener("click", function (ev) {
      var btn = ev.target.closest ? ev.target.closest("[data-open]") : null;
      if (btn) openDetail(btn.getAttribute("data-open"));
    });

    el.detailView.addEventListener("click", function (ev) {
      var back = ev.target.closest ? ev.target.closest("#bc-back") : null;
      if (back) goBack();
    });

    window.addEventListener("hashchange", route);

    // Keyboard safety net: whatever receives focus must not sit under the header
    document.addEventListener("focusin", function (ev) {
      var t = ev.target;
      if (!t || t === document.body || !t.getBoundingClientRect) return;
      if (header && header.contains(t)) return;
      if (t.classList && t.classList.contains("bc-skip")) return;
      var node = (t === el.search) ? (document.querySelector(".bc-search-label") || t) : t;
      window.requestAnimationFrame(function () { revealBelowHeader(node, 12); });
    });

    // Keep the header-height value correct when the window or fonts change
    syncHeaderVar();
    window.addEventListener("resize", syncHeaderVar);
    window.addEventListener("load", syncHeaderVar);
    if (window.ResizeObserver && header) new window.ResizeObserver(syncHeaderVar).observe(header);
  }

  /* ---------- When this page is shown inside the CommerceVerse popup ----------
     The homepage opens this page in an iframe. In that case "Back to CommerceVerse"
     and the Escape key ask the homepage to close the popup. When the page is opened
     on its own, nothing here runs and the button simply goes to the homepage. */
  var CLOSE_TYPE = "commerceverse:close-business-city";

  function isEmbedded() {
    try { return window.parent !== window; } catch (err) { return false; }
  }
  function requestClose() {
    // On a web address, send only to this same website. A page opened straight from a folder has no usable origin.
    var target = window.location.protocol === "file:" ? "*" : window.location.origin;
    window.parent.postMessage({ type: CLOSE_TYPE }, target);
  }
  function setupEmbedded() {
    if (!isEmbedded()) return;
    var back = document.querySelector('.bc-top a[href="../index.html"]');
    if (back) {
      back.addEventListener("click", function (ev) { ev.preventDefault(); requestClose(); });
    }
    document.addEventListener("keydown", function (ev) {
      if (ev.key !== "Escape" || ev.defaultPrevented) return;
      // While there is text in the search box, Escape clears it first; a second Escape closes
      if (ev.target === el.search && el.search.value) return;
      requestClose();
    });
  }

  /* ---------- Start ---------- */
  function init() {
    if ("scrollRestoration" in window.history) window.history.scrollRestoration = "manual";
    buildGrid();
    showStats();
    bind();
    applyFilters();
    route();
    setupEmbedded();
  }

  init();
})();
