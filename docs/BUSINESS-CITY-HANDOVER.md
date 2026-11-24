# Business City: Handover Document

**Module:** Business City (Module 1 of 5), part of CommerceVerse
**Finalised:** 19 November 2026
**Status:** Completed and frozen. Change it only to fix a genuine bug.

This document explains what Business City is, how it works, how it connects to the homepage, and how to maintain it. It is written for the project owner (a Class 11 GSEB Commerce student) and for any teacher or helper who opens the project later.

> **How this document was prepared.** It describes the files inspected on 19 November 2026: `index.html`, `business-city/business-city.html`, `business-city/business-city.css`, `business-city/business-city.js`, `shared/base.css` and `shared/shared.js`. The rest of the project folder (README, docs, Git history) was not available for inspection, so statements about it come from the project history and are marked as such.

---

## 1. Purpose

Business City is an interactive learning module for the Class 11 GSEB Commerce subject **Organisation of Commerce**. Instead of reading a list of companies, a student searches and filters a city of **15 real enterprises** (5 public sector, 5 private sector, 5 global) and opens a profile for each one to learn what it does, who owns it and why it matters in commerce.

## 2. Educational objectives

After using Business City, a student should be able to:

1. Tell the difference between **public sector** and **private sector** enterprises, using ownership and control as the test.
2. Explain that a **global (multinational) enterprise** is defined by where it does business, not by who owns it, and that every global enterprise in the city still has an ownership label.
3. Explain that **a company listed on a stock exchange is not automatically public sector**. What matters is who holds controlling ownership.
4. Describe an enterprise's industry, products or services and main business activities.
5. Explain the role an enterprise plays in commerce (for example: supplying a raw material, acting as an aid to trade, or showing a franchise-style business).
6. Understand concepts through real examples: government company, offer for sale (disinvestment), privatisation, demerger, amalgamation, conglomerate, franchise-style bottling, just-in-time production.
7. Learn that business facts change and that claims should be checked against a source.

*These objectives describe what the module teaches. Please compare them against your textbook chapters when presenting the project.*

## 3. Features

- A header with a **Back to CommerceVerse** button.
- A **statistics** area (15 total, 5 public, 5 private, 5 global), counted automatically from the data.
- A collapsible **"How are enterprises classified here?"** guide covering ownership, reach and listed companies.
- A **search box** that matches company name, industry, products, ownership, category, headquarters and reach.
- Four **category filters**: All Enterprises, Public Sector, Private Sector, Global Enterprises. Filters and search work together.
- **15 enterprise cards** with an original monogram (not a company logo), name, industry, category label, ownership label, short description and a **View Details** button.
- A friendly **empty state** with **Clear search** and **Show all categories** buttons.
- A full **profile** for each enterprise with: full name, short name, industry, ownership type, reach, headquarters, introduction, products and services, main business activities, role in commerce, a "Did you know?" fact, an "Important to understand" note, and **sources with labels** (official, news or rating report, or reference site).
- Browser **Back button support** and a **Back to all enterprises** button that restores your search, filter and scroll position.
- A sticky header that never hides headings or focused items.

## 4. The 15 enterprise profiles and their categories

| # | Short name | Full company name | Category in Business City | Ownership label shown | Industry | Headquarters | Reach | Sources |
|---|---|---|---|---|---|---|---|---|
| 1 | ONGC | Oil and Natural Gas Corporation Limited | Public sector | Government company | Oil and gas exploration and production | New Delhi, India | National, with overseas projects | 4 |
| 2 | BHEL | Bharat Heavy Electricals Limited | Public sector | Government company | Power equipment and heavy electrical engineering | New Delhi, India | National | 4 |
| 3 | NTPC | NTPC Limited (National Thermal Power Corporation) | Public sector | Government company | Electricity generation | New Delhi, India | National, with a small overseas share | 4 |
| 4 | BPCL | Bharat Petroleum Corporation Limited | Public sector | Government company | Oil refining and marketing of petroleum products | Mumbai, India | National | 4 |
| 5 | Coal India (CIL) | Coal India Limited | Public sector | Government company | Coal mining | Kolkata, India | National | 4 |
| 6 | Reliance | Reliance Industries Limited | Private sector | Private, listed company | Conglomerate: energy, digital services, retail and media | Mumbai, India | Mainly national | 3 |
| 7 | Tata Motors | Tata Motors Group: Tata Motors Passenger Vehicles Limited and Tata Motors Limited | Private sector | Private, listed companies | Automobiles: cars, electric vehicles, trucks and buses | Mumbai, India | Multinational (through Jaguar Land Rover) | 3 |
| 8 | Infosys | Infosys Limited | Private sector | Private, listed company | Information technology services and consulting | Bengaluru, India | Multinational | 3 |
| 9 | HDFC Bank | HDFC Bank Limited | Private sector | Private sector bank | Banking and financial services | Mumbai, India | Mainly national, with a few overseas offices | 5 |
| 10 | L&T | Larsen & Toubro Limited | Private sector | Private, listed company | Engineering, construction, manufacturing and technology services | Mumbai, India | Multinational | 4 |
| 11 | Apple | Apple Inc. | Global enterprise | Private, listed company | Consumer electronics, software and online services | Cupertino, California, USA | Multinational | 1 |
| 12 | Microsoft | Microsoft Corporation | Global enterprise | Private, listed company | Software, cloud computing and technology | Redmond, Washington, USA | Multinational | 3 |
| 13 | Toyota | Toyota Motor Corporation | Global enterprise | Private, listed company | Automobile manufacturing | Toyota City, Aichi Prefecture, Japan | Multinational | 4 |
| 14 | Samsung Electronics | Samsung Electronics Co., Ltd. | Global enterprise | Private, listed company | Electronics and semiconductors | Suwon, South Korea | Multinational | 2 |
| 15 | Coca-Cola | The Coca-Cola Company | Global enterprise | Private, listed company | Beverages (non-alcoholic drinks) | Atlanta, Georgia, USA | Multinational | 4 |

**Category counts:** 5 public sector, 5 private sector, 5 global enterprises (verified from the file on 19 November 2026). **Total source links:** 52, all different web addresses beginning with `https://`.

### Classification rules used in the profiles

- **Ownership** is who owns and controls the enterprise. **Reach** is where it operates. They are separate labels, and every profile shows both.
- The five public-sector enterprises are labelled **government companies**. The profiles give the government's shareholding at the stated date and explain why a listed company can still be public sector.
- **Tata Motors** is shown as a Tata group business that became two separate listed companies after the demerger effective 1 October 2025. The profile explains which company holds which business.
- **Coca-Cola** is shown as working with independent bottling partners. The profile says the company does not own, manage or control most of them.
- Searching "private" returns 10 enterprises, not 5, because the five global companies are privately owned too. This is correct under the ownership-versus-reach rule.

## 5. Folder structure

```
commerceverse/
├── index.html                  Homepage (3D city, cards, menu, previews, Business City popup)
├── README.md                   Project description (from project history; not inspected)
├── shared/
│   ├── base.css                Shared styles for future modules (NOT used by Business City)
│   └── shared.js               Shared helpers for future modules (NOT used by Business City)
├── business-city/
│   ├── business-city.html      Business City page structure
│   ├── business-city.css       Business City styles (prefix bc-)
│   └── business-city.js        Business City data and behaviour
└── docs/                       Documentation (this file and the other Stage 5 documents)
```

**Business City does not depend on `shared/` or on the homepage's CSS or JavaScript.** It can be opened on its own (`business-city/business-city.html`) or inside the homepage popup.

## 6. What each file does

| File | Size on 19 Nov 2026 | Purpose |
|---|---|---|
| `business-city/business-city.html` | 8,678 bytes | The page skeleton: skip link, header, introduction and skyline picture, statistics, classification guide, search and filters, the empty grid that JavaScript fills, empty-state message, "About the information" note, footer. |
| `business-city/business-city.css` | 15,792 bytes | All styling. Every class, ID and keyframe starts with `bc-` and every custom property with `--bc-`. It holds the colour tokens, layout, cards, profile panels, responsive rules, header scroll offsets and reduced-motion rules. |
| `business-city/business-city.js` | 65,246 bytes | One self-contained script (an IIFE). Part 1: the `ENTERPRISES` list with all 15 profiles and their sources. Part 2: the behaviour (cards, search, filters, profile view, navigation, header offsets and the popup messaging). |
| `index.html` | 59,059 bytes | The homepage. It contains the popup that shows Business City (see section 7). |
| `shared/base.css`, `shared/shared.js` | 9,714 and 2,121 bytes | Foundation files for future modules. See section 14 about a mismatch between them. |

### Main functions in `business-city.js`

- **Data:** `ENTERPRISES` (the 15 profiles), `CATEGORIES`, `KIND_LABEL`, `src()` (builds a source entry), `CHECKED_ON` (the date shown on screen).
- **Cards and stats:** `buildCard`, `buildGrid`, `showStats`.
- **Search and filters:** `plain`, `buildSearchText`, `matches`, `applyFilters`, `setCategory`, `clearSearch`.
- **Profile view:** `renderDetail`, `showDetail`, `showList`, `route`, `openDetail`, `goBack`.
- **Header handling:** `headerHeight`, `syncHeaderVar`, `revealBelowHeader`, `keepInView`, `focusSearch`.
- **Popup messaging:** `isEmbedded`, `requestClose`, `setupEmbedded`.
- **Start-up:** `bind`, `init`.

## 7. How the homepage integrates Business City

Business City is **module 0** in the homepage's `modules` list. (In the code the five modules are numbered 0 to 4; in conversation they are called Modules 1 to 5, so "modules 1 to 4" below means the other four.) The integration added to `index.html`:

1. **A new dialog `#bc-popup`** (separate from the existing `#panel` preview dialog), containing a title bar, a **Close** button, a loading message and an **iframe** (`#bcp-frame`).
2. **`openPanel(i)`** has one extra line: if `i === 0`, call `openBusinessCity()` and stop. Modules 1 to 4 still open their normal preview panel.
3. **All four entry points** use `openPanel(0)`: the Business City building in the 3D city, the Business City card, the desktop navigation button and the phone menu entry.
4. **"Show next module"** (in the preview panel) wraps from module 4 back to module 0. It now closes the preview and opens the Business City popup instead of showing an old preview.
5. **`syncScrollLock()`** sets the page's `lock` class whenever either dialog is open, so closing one dialog while opening the other cannot leave the page locked or unlocked by mistake.

## 8. How the iframe popup works

- **Lazy loading:** the iframe has no address until Business City is first opened. It then loads `business-city/business-city.html` (a relative path). Opening it again does not reload it.
- **Size:** on desktop and tablet the popup is up to 1280px wide and the screen height minus 32px. On screens 620px wide or narrower it fills the whole screen.
- **Homepage behind it:** the homepage stays visible and dimmed behind the popup. Nobody is taken to another page.
- **Scroll lock:** while the popup is open the homepage cannot scroll. Closing it restores the scroll position.
- **Focus:** opening moves focus to the **Close** button. Closing returns focus to the control that opened it. If that control was removed (for example the 3D city was redrawn) or is hidden (the phone menu), focus goes to the Business City card.
- **Ways to close:** the popup's **Close** button; **Escape** with focus on the homepage; **Escape** with focus inside Business City; clicking the dark area around the popup; and the **Back to CommerceVerse** button inside Business City.
- **How a close request travels:** Business City cannot close the popup directly, so it sends a message to the homepage using `postMessage`. The message is the object `{ type: "commerceverse:close-business-city" }`.
- **Security checks on the homepage:** it closes the popup only if (1) the message comes from the same website (`event.origin`), (2) it comes from the actual iframe window (`event.source`), and (3) the message type matches exactly. For a page opened straight from a folder (`file://`), the origin is reported as `"null"` and the same rule accepts that case only, with the iframe check still applied.
- **When Business City is opened on its own:** none of the popup messaging runs. "Back to CommerceVerse" is an ordinary link to `../index.html`.
- **Escape in the search box:** if the search box contains text, the first Escape clears it. A second Escape closes the popup.

## 9. Search, filters and profile navigation

- **Search:** each word typed must match the **start of a word** in the company's searchable text. All words must match (AND). Searching "oil" therefore finds "oil" but not "toilet". Searchable text covers full and short name, industry, ownership labels, headquarters, reach, products, the category name and a few category keywords such as "government", "multinational" and "private".
- **Not searched:** the longer text of activities, introductions and notes. This is deliberate. Searching "government" found Apple when those fields were included, because Apple's text mentions selling to governments.
- **Filters:** one button is active at a time. The visible cards are those matching both the filter and the search.
- **Result count:** "Showing X of 15 enterprises" is announced politely to screen readers.
- **Profiles:** pressing **View Details** puts the company's id in the address (for example `#coal-india`). A link with that address opens the profile directly. An unknown address shows the list.
- **Returning:** the **Back to all enterprises** button and the browser Back button both return to the list with the same search, filter and scroll position, and focus returns to the card that was opened.
- **Header offsets:** the page measures the sticky header and keeps headings, focused items and the sticky facts panel clear of it.

## 10. Responsive and mobile behaviour

- **Business City page:** the card grid adapts automatically (one column on phones, more on wider screens). At 980px and wider, a profile shows its main text beside a sticky "Quick facts" panel. Below 980px the facts panel comes first. At 620px and narrower, statistics become two columns, filter buttons share rows and the header button shrinks. At 400px and narrower, the header's brand text is hidden to prevent sideways scrolling.
- **Popup:** full-screen on 620px and narrower, a large centred window above that.
- **Homepage:** the 3D city switches to a simplified two-row phone version at 859px and narrower.
- **Touch:** hover effects apply only on devices with a mouse. All buttons are at least 44px tall.
- **Less motion:** if the device asks for reduced motion, animations and transitions are switched off.

## 11. Accessibility features

- A **skip link**, one `h1` per page and a logical heading order, and labelled regions.
- Cards are real buttons, so they work with Enter and Space. Filter buttons use `aria-pressed`.
- Clear, visible **focus outlines** and focus management when a profile opens or closes.
- The popup is a real `dialog` with a title and an iframe with a descriptive title.
- The search box text is 16px (no zoom on phones), and it has a visible label.
- **Reduced motion** is respected. Text uses high-contrast colours on a dark background.
- Source links open in a new tab and are labelled.

## 12. How to run it using VS Code Live Server

1. Open the whole `commerceverse` folder in VS Code (**File, Open Folder**).
2. Right-click `index.html` and choose **Open with Live Server**. Click **Business City** (the tower, the card or the menu button).
3. To test the module on its own, right-click `business-city/business-city.html` and choose **Open with Live Server**.
4. After replacing files, press **Ctrl + F5** to clear the browser's stored copy.
5. The page uses Google Fonts. Without internet it still works but uses your computer's normal fonts.

## 13. Testing history

A full record is in `BUSINESS-CITY-TEST-REPORT.md`. In short:

- **Claude's automated browser tests** (headless Chromium, not real devices) were run during building, the header fix and the integration, and **re-run on the current files on 19 November 2026**. 217 checks were run in three suites and all passed.
- **The project owner confirmed** that the corrected version works on a **Windows PC, an Android phone and an iPhone**. Device models and browser versions were not recorded.
- **Not done:** independent verification of every source link and every factual claim. See section 14.

## 14. Known limitations

**Facts and sources**

1. **Source links are not all verified.** The module has 52 source links. Not every link has been opened and checked, and links were not re-tested in Stage 5.
2. **Not every factual claim has been independently verified.** Ownership and share figures change, and each profile should be checked against the company's latest official filing before it is quoted in an exam or a report.
3. **Ten sources are "reference sites"** (for example Screener, StockAnalysis or Umbrex). They are labelled that way on screen and are weaker than official documents.
4. **The on-screen date may be out of date.** The page says "checked on 13 November 2026" (in the JavaScript constant `CHECKED_ON` and in the HTML "About the information" paragraph). 13 of the 15 profiles were edited after Claude's last delivered version (see Appendix A), and the date was not changed. Update both places whenever facts are re-verified.
5. **The Stage 4D corrections were not seen by the author of this document.** The changes can be listed (Appendix A), but the checking behind them cannot be vouched for.

**Content**

6. The current files contain **no Business Report, no fictional case study and no quiz**. These were discussed in early planning and are not part of the files inspected.
7. Business City does **not save progress**. It does not use the browser's storage.

**Behaviour**

8. Inside the popup the student sees **two headers**: the popup's own title bar and Business City's header.
9. If the popup is showing the Business City list and the student presses the **browser Back** button, the browser goes back in the homepage's history. This is normal for popups and was not tested.
10. Opening profiles inside the popup adds entries to the browser's history. Pressing Back steps back through profiles before leaving.
11. Search matches word starts only, so a few matches may surprise: "car" finds HDFC Bank (cards), Toyota and Samsung (car audio) as well as Tata Motors, and "oil" also finds Reliance and L&T.
12. Moving `business-city/` or renaming its files breaks the relative path used by the homepage popup.

**Shared files (not part of Business City)**

13. `shared/shared.js` switches the phone menu with the class `is-open`, but `shared/base.css` shows it with the class `open`. A future module that uses both files would have a phone menu that does not open. Also, `shared.js` does not wrap saved-progress reading in error handling, and it is a different, smaller version from the one first delivered in Stage 1. See the project status document.

## 15. Future maintenance instructions

**Golden rules**

1. **Back up first.** Copy the whole folder before any change, and commit the current state to GitHub.
2. **Business City is frozen.** Change it only to fix a genuine bug.
3. **Test after any change** with the checklist below.

**To correct a fact in a profile**

1. Open `business-city/business-city.js` and find the profile by its `id`, for example `id: "coal-india"`.
2. Edit only the text between the quotation marks. Keep the commas and brackets.
3. If you change a number or a date, add or update the matching source in that profile's `sources` list: `src("Title", "https://address", "official", "What it supports")`. The kind must be `"official"`, `"news"` or `"reference"`.
4. Update `CHECKED_ON` (near the top of the file) and the date in the HTML "About the information" paragraph.
5. Save, refresh and open the profile to read it.

**Every profile must keep these fields:** `id`, `category`, `mono`, `fullName`, `shortName`, `industry`, `ownership`, `ownershipShort`, `headquarters`, `reach`, `reachNote`, `summary`, `intro`, `products`, `activities`, `role`, `fact`, `note`, `sources`.

**To add or remove an enterprise** (not recommended while the module is frozen): copy an existing record, give it a unique `id`, choose a category (`public`, `private` or `global`), and then update the wording that says "Fifteen" and the static numbers 15, 5, 5, 5 in `business-city.html` (they are replaced by the counted values when the page runs, but should stay correct). Re-run every check below.

**Manual check after any change**

1. Open `business-city.html` on its own: 15 cards, statistics 15 / 5 / 5 / 5.
2. Press each filter: 5, 5, 5. Search "oil", "bank" and "government", and then clear the search.
3. Open three profiles, use **Back to all enterprises** and the browser Back button.
4. Open `index.html`, then open Business City from the tower, the card, the desktop menu and the phone menu. Close it with the Close button, Escape, the dark area and the in-page Back button.
5. Check a 360px-wide and a desktop-wide window for sideways scrolling.

---

## Appendix A: Differences between Claude's last delivered version and the current `business-city.js`

Observed on 19 November 2026 by comparing the files. These changes were made in a stage Claude did not see (described by the owner as Stage 4D factual corrections). Claude has **not** independently verified them.

- Only `business-city.js` differs. `index.html`, `business-city.html` and `business-city.css` are byte-identical to the last delivered versions.
- **13 of 15 profiles** changed. Reliance and Infosys did not.
- Source links increased from **44 to 52**, in particular more official documents.
- **ONGC:** the "fact" now speaks of assets in several countries and no longer gives "30 assets in 14 countries". A shareholding document from ONGC replaced a news report as the source for the 31 March 2026 holding.
- **BHEL:** the introduction now gives the incorporation date (13 November 1964) and mentions the Bhopal predecessor. A BHEL history page was added as a source.
- **NTPC:** two source addresses were replaced by corrected addresses.
- **BPCL:** the "fact" was edited, and a BPCL shareholding pattern for the quarter ended 30 June 2026 was added.
- **Coal India:** the introduction was reworded about the formation of Coal Mines Authority Limited, and a Coal India history page was added.
- **Tata Motors:** the "role" text no longer includes the earlier reference to the 2024 press release.
- **HDFC Bank:** the introduction was edited and a message from the chairman and CEO was added as a source.
- **L&T:** the reach note now cites the 2025-26 sustainability report (61 countries) instead of "over 30 countries".
- **Apple:** the source changed from the FY2025 10-K to the 10-K for the year ended 26 September 2026.
- **Microsoft:** the segment activities were reworded to cite the FY2026 annual report, and a September 2026 Form 8-K was added.
- **Toyota:** the introduction and products were edited (Hino described as part of ARCHION) and an ARCHION news release was added.
- **Samsung:** the "fact" now uses the 2026 half-year business report (309 subsidiaries as of 30 June 2026) instead of the 2024 report.
- **Coca-Cola:** the introduction was changed (incorporated in Delaware in 1919, succeeding a Georgia company), and the bottler fact now uses 2025 data (44%) with the FY2025 Form 10-K as a source.

## Appendix B: Backup made on 19 November 2026

An exact copy of the six inspected files is in `backups/commerceverse-backup-2026-11-19/` (and a zip with the same name) with a `MANIFEST.txt` of checksums. It does **not** include the rest of the project folder. Always keep your own full copy of the whole `commerceverse` folder as well.
