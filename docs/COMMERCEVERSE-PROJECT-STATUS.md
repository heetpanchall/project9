# CommerceVerse: Project Status

**Last updated:** 19 November 2026
**Project:** CommerceVerse, an interactive Class 11 GSEB Commerce educational website (English medium)
**Owner:** Class 11 Commerce student, built with free tools and no coding experience
**Current status:** Module 1 (Business City) is complete and frozen. Modules 2 to 5 are not started.

> **Source of this document.** The six files inspected on 19 November 2026 (`index.html`, the three Business City files, `shared/base.css`, `shared/shared.js`) are described from the files themselves. Earlier stages are described from the project's conversation history. Stages marked *reported by owner* happened outside the conversation seen by the author, so their details were not available.

---

## 1. Project overview

**Name:** CommerceVerse. **Tagline:** Explore Business. Understand Commerce. Experience Learning.

A futuristic, interactive learning website made of a homepage and five modules. It uses only HTML, CSS and vanilla JavaScript, with no frameworks, no paid services and no login. It is designed for an older Intel i5 PC without a dedicated graphics card, for Android phones and for iPhones, and it is meant to be published free as a static website and opened by teachers through a link or QR code.

**Hard rules for the whole project**

- Budget is zero. No paid APIs, subscriptions or paid assets.
- No React or heavy frameworks. No backend.
- Facts must be accurate and sourced. Nothing is invented.
- Mobile-first and responsive. Touch-friendly. Reduced-motion respected.
- Existing working files are never changed without explaining the change first and getting approval.

## 2. Completed development stages

| Stage | What was done | Evidence |
|---|---|---|
| Planning | 10-day roadmap, tool list, folder plan, risks | Conversation |
| Homepage (Day 1) | One-file homepage with hero, five module cards, previews | Conversation; owner ran it in Live Server |
| Mobile-first upgrade | Responsive navigation, phone menu, bottom-sheet preview, simplified phone city | Conversation; not browser-tested when delivered (covered by the later 3D-city tests) |
| 3D city upgrade | CSS 3D skyline with five module towers, hover and touch behaviour, no WebGL | Conversation; browser-tested by Claude |
| Business City planning | Folder structure, features, list of enterprises, accuracy rules | Conversation; owner approved |
| Stage 1: shared foundation | `shared/base.css`, `shared/shared.js`, test page, `docs/` notes | Conversation (see issue 3 in section 7: the shared files in the project now differ from those delivered) |
| Business City build | Standalone module with 15 profiles, search, filters, profile view and sources | Conversation; browser-tested by Claude |
| Header-overlap fix | Scroll offsets and focus handling under the sticky header | Conversation; measured by Claude, 57 checks |
| Homepage integration | Business City opens in a popup (iframe in a dialog) from all four entry points | Conversation; 103 checks by Claude |
| Code audit and Stage 4D factual corrections | Profile text and sources corrected in `business-city.js` | *Reported by owner*; the resulting differences were observed in the file |
| Real-device testing | Corrected version tested on Windows PC, Android phone and iPhone | *Reported by owner* |
| **Stage 5: finalisation** | Backup, final read-only inspection, three documents, freeze | This stage |

## 3. Current project architecture

```
commerceverse/
├── index.html                  Homepage (59,059 bytes): 3D city, cards, menus, previews, Business City popup
├── README.md                   Project description (not inspected in Stage 5)
├── shared/
│   ├── base.css                Shared styles for future modules (not used by any module yet)
│   └── shared.js               Shared helpers for future modules (not used by any module yet)
├── business-city/              COMPLETED, FROZEN
│   ├── business-city.html
│   ├── business-city.css
│   └── business-city.js
├── docs/                       Documentation
│   ├── BUSINESS-CITY-HANDOVER.md
│   ├── COMMERCEVERSE-PROJECT-STATUS.md      (this file)
│   └── BUSINESS-CITY-TEST-REPORT.md
├── accounts-lab/               NOT YET CREATED (planned)
├── market-simulator/           NOT YET CREATED (planned)
├── english-studio/             NOT YET CREATED (planned)
└── escape-room/                NOT YET CREATED (planned)
```

**How the pieces connect**

- The **homepage** owns a list of five modules (`modules` in `index.html`). The list drives the cards, the menus, the 3D towers and the preview panel.
- Choosing **Business City** (module 0) opens the **popup dialog**, which loads `business-city/business-city.html` in an iframe. Choosing modules 1 to 4 still opens the **preview panel**, which says "this module is being built on Day N".
- **Business City is self-contained.** Its own CSS and JavaScript do not use the homepage's or the `shared/` files. Its class names start with `bc-`.
- The two sides talk only through one `postMessage` message (`commerceverse:close-business-city`), which the homepage accepts only from its own iframe on the same website.

## 4. Completed module: Business City

- **Content:** 15 enterprise profiles (5 public sector, 5 private sector, 5 global) with ownership and reach labels, products, activities, role in commerce, a fact, an important note, and 52 labelled source links.
- **Features:** search, four category filters, profile pages, back navigation that keeps your place, popup integration, keyboard and screen-reader support, phone layout.
- **Quality status:** automated checks passed on 19 November 2026; the owner confirmed it works on PC, Android and iPhone.
- **Open points:** source links and factual claims are not fully independently verified (details in the handover and test report).
- **Documents:** `BUSINESS-CITY-HANDOVER.md` and `BUSINESS-CITY-TEST-REPORT.md`.

## 5. Remaining modules

| # | Module | Subject | Content from the project brief | Homepage label today |
|---|---|---|---|---|
| 2 | **Accounts Lab** | Accountancy | Types of accounts; traditional and modern debit and credit rules; interactive transaction examples; practice questions with instant feedback | "Day 4" preview |
| 3 | **Market Simulator** | Economics | Demand and supply concepts; interactive graph with sliders; Reliance Industries case study from reliable sources; types of markets in a table | "Day 5" preview |
| 4 | **English Studio** | English | Essay "Diwali in Incredible India" on the diversity of Diwali celebrations; interactive figures-of-speech chart with examples | "Day 6" preview |
| 5 | **Commerce Escape Room** | All four subjects | Quizzes from all four subjects; several difficulty levels; instant feedback; scores and progress; completion screen; challenges and rewards | "Day 7" preview |

The "Day N" wording in the preview panels dates from the original 10-day plan and no longer reflects the real schedule. It can be updated when each module is connected.

## 6. Important rules for future module integration

1. **Back up first** and commit the current state to GitHub. Never overwrite `index.html` without comparing it to the current file.
2. **One module at a time.** Build it, test it, document it, and then freeze it. Do not edit a frozen module except to fix a genuine bug.
3. **Keep each module independent.** Own folder, own HTML, CSS and JavaScript. Do not depend on the homepage's CSS or JavaScript.
4. **Use a unique prefix** for classes, IDs, keyframes and custom properties (Business City uses `bc-`). Suggested: `al-` (Accounts Lab), `ms-` (Market Simulator), `es-` (English Studio), `er-` (Escape Room).
5. **Wrap JavaScript in an IIFE** and keep content data in one clearly marked list.
6. **Open modules the same way as Business City:** a separate dialog with an iframe, loaded the first time it is opened, with a close message sent by `postMessage`. Use a different message type for each module, for example `commerceverse:close-accounts-lab`. The homepage must check the message origin, the message source (the actual iframe window) and the exact type.
7. **Never reuse the `#panel` or `#bc-popup` dialogs.** Keep one scroll-lock mechanism (`syncScrollLock`) that looks at every dialog.
8. **Plan the "Show next module" button.** It currently wraps from module 4 to Business City only. When a second module gets its own popup, that button's logic must be changed deliberately (see section 8).
9. **Minimal, explained edits to `index.html`**, with the owner's approval before each change.
10. **No external libraries, no paid services, no unnecessary images or video.**
11. **Accessibility and devices:** keyboard use, visible focus, 44px touch targets, reduced motion, no sideways scrolling at 360px, readable text without zooming.
12. **Sources and accuracy:** every fact has a source and a "checked on" date. If it cannot be confirmed, leave it out. Do not claim a test was done unless it was.
13. **Test before moving on:** Claude's automated checks, and then the owner's checks on a PC, an Android phone and an iPhone.

## 7. Issues noted during Stage 5 (reported, not changed)

1. **Business City data changed after Claude's last delivery.** 13 of 15 profiles were edited (see handover Appendix A). Not independently verified.
2. **On-screen "checked on 13 November 2026" date** may not match when the corrected facts were checked.
3. **Shared files differ from what was first delivered.** `shared/shared.js` is now a smaller version (2,121 bytes, Windows line endings) that has no `esc`, `print` or `prefersReducedMotion` helpers and no `has` or `list` progress methods. It also toggles the phone menu with the class `is-open`, while `shared/base.css` shows the menu with the class `open`. A future module using both files together would have a phone menu that does not open. Neither file is used by any module today. **Recommended:** decide at the start of Accounts Lab whether to repair them (with approval), or to build each module self-contained like Business City, which is the safer choice.
4. **Source links** have not all been opened and checked.
5. **Two headers appear in the Business City popup** (the popup title bar and the module's own header). This is cosmetic.

## 8. Preparing for Accounts Lab

Do not start building until the owner gives the instruction. When the time comes, follow this plan.

**Develop it as an independent module**

- Create `accounts-lab/accounts-lab.html`, `accounts-lab.css` and `accounts-lab.js`. Do not touch `business-city/`.
- Use the prefix `al-` for everything. Wrap the JavaScript in an IIFE. Do not link `shared/base.css` or `shared/shared.js` unless the issue in section 7 has first been resolved.
- It must open correctly on its own through Live Server before it is connected to the homepage.
- Keep its teaching content (account types, debit and credit rules, example transactions and practice questions) in one clearly marked data list at the top of the JavaScript file, as Business City does. Accuracy comes before volume: use Class 11 GSEB Accountancy content, give a reason for every right and wrong answer, and keep a sources list.
- Design for 360px phones first. Practice questions need instant feedback, large touch targets and keyboard support. Respect reduced motion.
- Include the `postMessage` close request (the Back button and the Escape key) so it will work in a popup.

**Connecting it later (a separate approved stage)**

1. Back up and commit.
2. Add a second dialog with an iframe to `index.html`, following the Business City pattern, with the message type `commerceverse:close-accounts-lab`.
3. Change `openPanel(i)` so that module 1 opens the Accounts Lab popup.
4. Decide what "Show next module" should do. Because the preview chain currently starts at module 1, make the rule explicit. One simple option is to keep a small table of which modules have popups and send the chain to the right dialog.
5. Re-use `syncScrollLock` so it checks every dialog, and extend the focus-restore fallback to the correct card.
6. Test: all four entry points, all closing methods, scroll lock, focus return, the next-module chain, phone and desktop sizes, and that Business City still works exactly as before.

## 9. Current status

- **Business City:** complete and frozen.
- **Homepage:** working, with Business City integrated. Modules 2 to 5 show previews only.
- **Ready for Accounts Lab:** yes, with two recommended preparations: take your own full backup of the project folder, and decide how to handle the `shared/` files (section 7, issue 3).
