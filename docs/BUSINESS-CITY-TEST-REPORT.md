# Business City: Test Report

**Report date:** 19 November 2026
**Subject:** Business City, final inspected files
**Files tested:** `index.html` (59,059 bytes), `business-city/business-city.html` (8,678), `business-city/business-city.css` (15,792), `business-city/business-city.js` (65,246)

---

## How to read this report

There are **two kinds of evidence**, and they are kept apart:

- **Part A: Claude's automated tests.** Run by Claude (the AI assistant) in a *headless Chromium browser in a Linux container*, using a local test server and local files. They are not tests on real phones or on the owner's computer.
- **Part B: The owner's device tests.** Real tests done by the project owner. Claude did not see them and is recording only what the owner reported.

**Honesty notes**

- Claude did **not** see the Stage 4D testing session. Its results are **not reproduced** here (see A1).
- Source links were **not** opened or verified in Stage 5 (see Part C).

---

## Part A: Claude's automated tests

### A1. Stage 4D syntax and structural tests "reported by Claude"

| Item | Status |
|---|---|
| Stage 4D syntax and structural tests | **Details not available.** These tests were reported in an earlier session that the author of this report did not have access to. No result is stated here because none can be verified. If you have the original Stage 4D report, add it to this section. |
| Equivalent checks on the current files, run on 19 November 2026 | See A2. |

### A2. Structural and syntax checks on the current files (19 November 2026)

| Check | Result |
|---|---|
| `business-city.js` parses without syntax errors | Pass |
| The script in `index.html` parses without syntax errors | Pass |
| `shared/shared.js` parses without syntax errors | Pass |
| `business-city.css` braces balanced (134 pairs) | Pass |
| `business-city.css`: every selector, keyframe and custom property uses the `bc-` prefix (the only keyframe is `bc-fade`; custom properties all start `--bc-`) | Pass |
| Business City JavaScript is one IIFE | Pass |
| Enterprise profiles in the data list | **15** |
| Category distribution | **5 public, 5 private, 5 global** |
| Required fields present in every profile (full name, short name, industry, ownership, headquarters, introduction, products, activities, role, fact) | Pass: none missing |
| Every profile has a unique id, a note, a reach and reach note | Pass (15 of 15) |
| Every profile has at least one source | Pass (smallest: Apple with 1) |
| Source links | **52 links, all different, all `https://`** (33 official, 9 news or rating report, 10 reference site) |
| Business City files reference only `business-city.css`, `business-city.js` and `../index.html` | Pass |
| No reference to `shared/base.css` or `shared/shared.js` from `index.html` or the Business City files | Pass |
| Business City uses no browser storage | Pass |
| `index.html` contains the popup (`#bc-popup`, `#bcp-frame`, `#bcp-close`), the `i === 0` branch in `openPanel`, the next-module branch, `syncScrollLock`, the message-type check, the source check (`e.source !== bcFrame.contentWindow`) and the origin check | Pass |
| `index.html` still contains the original `#panel` dialog and `fillPanel`, and module names and "Day N" labels for modules 2 to 5 | Pass |
| Search, filter, profile navigation and popup-messaging code compared with the last version Claude delivered | **Identical** |
| `index.html`, `business-city.html`, `business-city.css` compared with the last versions Claude delivered | **Byte-identical** |
| `business-city.js` compared with the last version Claude delivered | **Different**: only profile data and sources changed (13 of 15 profiles; sources 44 to 52). See handover Appendix A. |

### A3. Browser test suites re-run on the current files (19 November 2026)

Method: files copied to a scratch folder, served by a local web server (and opened from `file://` where stated), tested in headless Chromium with Playwright. Widths tested: 360, 390, 620, 768, 980, 1024, 1366 and 1920 pixels, with touch and mouse.

| Suite | Checks | Passed | Failed |
|---|---|---|---|
| Business City page: profiles, search, filters, navigation, keyboard, widths | 57 | 57 | 0 |
| Header and scroll behaviour: profile opening, Back, Tab and Shift+Tab focus | 57 | 57 | 0 |
| Homepage integration: popup, entry points, closing, security, scroll lock, focus, sizes | 103 | 103 | 0 |
| **Total** | **217** | **217** | **0** |

### A4. Search and filter regression results

| Test | Result |
|---|---|
| 15 cards shown at start; statistics 15 / 5 / 5 / 5 | Pass |
| Filter Public Sector, Private Sector, Global Enterprises show 5, 5 and 5 | Pass |
| Search "oil" | ONGC, BPCL, Reliance, L&T |
| Search "bank" | Infosys, HDFC Bank |
| Search "government" | The five public-sector enterprises only (ONGC, BHEL, NTPC, BPCL, Coal India) |
| Search "multinational" | Tata Motors, Infosys, L&T, Apple, Microsoft, Toyota, Samsung Electronics, Coca-Cola |
| Search "software" | Infosys, Apple, Microsoft |
| Search "car" | Tata Motors, HDFC Bank, Toyota, Samsung Electronics |
| Search "private" | All 10 privately owned enterprises (5 private plus 5 global) |
| Search "l&t" | L&T |
| Search "oil gas" (two words, both must match) | ONGC, BPCL, Reliance, L&T |
| Search "toil" (word-start rule) | No results |
| Search with no matches | Empty state shown with Clear search |
| Clear search | All 15 cards return |
| Filter Public plus search "bank" | No results; "Show all categories" appears |
| "Show all categories" button | Restores the filter to All and keeps the search |
| Search box font size at least 16px | Pass |
| Space key presses a filter button | Pass |

### A5. Profile navigation results

| Test | Result |
|---|---|
| All 15 profiles open, each with the six quick facts, all six content sections and at least one source link | Pass |
| Back button returns to the list with the same search and filter | Pass |
| Focus returns to the card that was opened | Pass |
| Direct link `#coal-india` opens that profile; Back then shows the list | Pass |
| An unknown link shows the list | Pass |
| Enter on a card opens the profile; Enter on Back returns | Pass |
| Opening a profile after scrolling puts the title and Back button below the header (4 screen sizes) | Pass |
| Browser Back button returns to the list and keeps the card visible below the header (4 screen sizes) | Pass |
| Tab and Shift+Tab never leave focus under the header, on the list and in a profile (4 screen sizes) | Pass |
| Scrolling every profile heading into view stops below the header | Pass |
| No sideways scrolling at all 8 widths | Pass |
| Reduced motion turns animation off | Pass |
| All buttons at least 44px tall | Pass |
| No JavaScript errors; no missing local files | Pass |

### A6. Popup integration results

| Test | Result |
|---|---|
| The page loads only when Business City is first opened; reopening does not reload it | Pass |
| Four entry points open the popup, not the old preview: 3D building (click, Enter key, phone tap), homepage card, desktop navigation, phone menu | Pass |
| Closing: Close button; Escape on the homepage; Escape inside the module; dark area; the module's Back to CommerceVerse button | Pass |
| Clicking inside the popup does not close it | Pass |
| Messages ignored: wrong type, plain text, null, correct type from the homepage itself, correct type with a wrong origin | Pass (all ignored) |
| Correct message from the iframe on the same site closes the popup | Pass |
| Page cannot scroll behind the popup; scroll position preserved; scroll lock removed on close | Pass |
| Preview panel scroll lock unchanged | Pass |
| Modules 2 to 5 open their own previews (cards, navigation, 3D building) with unchanged text | Pass |
| "Show next module" steps 2, 3, 4, 5, then opens the Business City popup; lock stays correct; focus returns to the Business City card | Pass |
| Focus on opening is the Close button; focus restored to the card, 3D building and desktop menu button; fallback to the Business City card if the trigger was removed or hidden | Pass |
| Popup sizes at 1920, 1366, 1024, 768, 390 and 360 pixels; iframe fills the popup; popup stays on screen | Pass |
| Works when `index.html` is opened directly from a folder (`file://`) | Pass |
| Business City opened on its own: 15 cards; Escape does nothing special; Back goes to the homepage | Pass |
| Visual comparison: homepage and 3D city before and after the integration, at 1366px and 390px | Pixel-identical (checked in an earlier stage) |

---

## Part B: Tests done by the owner on real devices

*These results were reported by the project owner. Claude did not witness them.*

| Device | Result reported by the owner | Details recorded |
|---|---|---|
| **Windows PC** | The corrected version works | Browser and version not recorded |
| **Android phone** | The corrected version works | Phone model, browser and version not recorded |
| **iPhone** | The corrected version works | iPhone model, iOS and browser versions not recorded |

Items the owner may want to note for the project record: the date of each test, the browser used, and whether the popup was opened from the 3D building, the card and the menu.

---

## Part C: Limitations

1. **Source-link verification is incomplete.** There are 52 links. Claude did **not** open them in Stage 5, and not all were opened in earlier stages. Broken or changed pages are possible.
2. **Not every factual claim has been independently verified.** Ten of the 52 sources are reference sites, not official documents. Profiles changed in Stage 4D are described in the handover (Appendix A), but the checking behind those changes was not visible to the author of this report.
3. **The on-screen "checked on 13 November 2026" date** was not updated after the Stage 4D edits.
4. **Claude's tests ran only in headless Chromium.** They do not cover Safari, Firefox, Samsung Internet, a screen reader, real touch scrolling, or older phones. Speed on the owner's older PC was not measured.
5. **Stage 4D test results are not available** to the author of this report (A1).
6. **The owner's device tests** are recorded at the level of detail the owner reported.
7. **Not tested:** pressing the browser Back button while the popup shows the Business City list (it probably goes back in the homepage history).
8. **Google Fonts** need internet. The fallback fonts were seen in Claude's tests, not the designed fonts.
9. **Shared files** (`shared/base.css`, `shared/shared.js`) are not used by Business City and were not part of these tests. See the project status document for an issue between them.
