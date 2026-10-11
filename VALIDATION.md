# Validation record

Checked 25 September 2026.

## Build and content

- `npm run check`: passed. Builds 58 FAQs, 16 resources and five social links.
- `node --check src/app.js`: passed.
- Every FAQ has a valid category, nonempty answer and mapped source.
- Verified all generated local asset links, navigation anchors and `aria-controls` targets.
- Checked the exact vTools, HTU, BAU and YouTube URLs and ambassador ID.
- Original HTU file is copied verbatim; requirements include 10-hour participation, 15-hour awards and 8:00 AM all-female-team check-in.
- Calendar starts at `2026-10-31T00:00:00Z`; `Asia/Amman` conversion verifies 03:00.
- No unresolved build placeholders or pending-rules FAQ entries.

## Real browser checks

Passed in Chromium through Playwright:

- Desktop and mobile visual inspection of hero, registration and HTU content.
- No horizontal overflow at 320, 390, 768, 1024 or 1440 pixels.
- Self-hosted Cairo font loads; no page console errors or warnings in the inspected session.
- Mobile menu opens and closes with Escape.
- Participation tabs switch correctly, including RTL arrow-key navigation.
- Clipboard receives exactly `IEEEXTREME20SB08217`.
- Checklist saving requires opt-in; opted-in progress persists across reloads, resets, and is erased when saving is disabled.
- Checklist continues working with storage blocked and shows the appropriate message.
- Resource filter selects the two practice resources and restores all 16 resources.
- Arabic search, diacritic normalization, no-result state, reset, category filters, progressive display and native FAQ accordions work.
- HTU category reveals all nine HTU-specific questions.
- Countdown uses distinct in-progress and finished states with no negative counter.
- With JavaScript disabled, all 58 FAQs and 16 resources remain present and the mobile page has no horizontal overflow.

## External destinations

- vTools public page was read live, including the support email.
- HTU form resolves to Google sign-in; no authenticated form submission was attempted.
- BAU form resolves to a live Google Form; no data was submitted.
- Tutorial resolves to the correct YouTube title and 6:24 duration.
- CS Academy environment was read after JavaScript rendering, including languages and browser requirements.
- Some IEEEXtreme pages block direct fetching; official indexed evidence is documented in `SOURCES.md`.
- Instagram links are the exact user-supplied destinations; account authentication was not attempted.

No deployment was requested or performed. The static `dist/` folder is ready to host.

## IEEE design update

The 25 September 2026 review additionally checks shared IEEE branding on both pages, original logo/favicon assets, complete policy links, same-tab HTML links, minimum body/control type size, and high-contrast IEEE green/gold buttons. See [IEEE-DESIGN-REVIEW.md](IEEE-DESIGN-REVIEW.md) for the source mapping and full validation scope.

Axe-core 4.10.3 detected no A/AA violations in the reviewed desktop/mobile home and mobile Sources states with all FAQs and both participation panels exposed. Texture/image contrast required separate checks, as documented in the review. This is not a full accessibility conformance certification.

## Feedback update — 25 September 2026

- `npm run check`, `node --check src/app.js`, and `git diff --check` pass.
- Built 62 FAQs, 18 resource cards, five social links and four ambassador directory entries.
- Chromium at 1440, 768, 390 and 320 CSS pixels: no horizontal document overflow; the updated home page has no JavaScript exceptions.
- Verified removal of the announcement strip, two SVG play icons, registration deadline, two Google Maps links and personal email links.
- All four directory copy buttons returned the expected complete registration ID through the browser clipboard.
- FAQ search for AI returns the two new questions; clearing the search restores the normal list.
- Reviewed the mobile hero and ambassador directory visually; verified sources-page personal contact links.
- Source dates and AI guidance checked against the official current announcements. Existing detailed accessibility audit above records the previous revision; it is not a new full audit of this update.

## Complete ambassador directory — 25 September 2026

- Compared all 27 directory records against the supplied `Other Ambassadors.txt`: names, IDs and original institution labels match exactly; no duplicate IDs or omitted entries.
- Existing build/content checks, JavaScript syntax check and whitespace check pass.
- Browser search checked with Arabic university terms, HTU, Center, an exact ID, a person's name, no results, and clearing the query. Clearing restores all 27 entries.
- Copied the final entry (`IEEEXTREME20SB08220`) successfully; source links resolve to the new sources-page anchor.
- No JavaScript errors or document overflow at 1440, 390 and 320 CSS pixels. Narrow phones stack each copy button below its full ID.
- Live verification exposed cached scripts from the prior release. Builds now add content-hash query strings to CSS and JavaScript URLs on both pages, preventing an updated page from loading stale application code. Local asset checks account for these query strings.

## Local prize cards — 25 September 2026

- Visually matched the supplied poster: first 300 JOD, second 200 JOD, third 100 JOD.
- Build and existing content/link checks pass with 63 FAQs. The linked original poster returns HTTP 200 as image/png.
- Chromium at desktop 1440px and mobile 390px: no document overflow. Reviewed mobile prize cards and verified the new prize FAQ is searchable.
- Prize cards sit in the HTU section alongside the existing local award eligibility requirements.

## University finder and embedded tutorial

- Existing build/link checks and JavaScript syntax check pass. The link-target check now permits the explicitly requested YouTube new-tab link and checks its protections.
- Default BAU ID, unique HTU lookup, two UJ choices, two BAU branch choices, no-match state and clearing back to the default were exercised in Chromium. Ambiguous or empty results disable copying until resolved; selecting a UJ ambassador copied the correct full ID.
- The directory shortcut opens the full list. No mailto links remain inside the ambassador directory. The separate BAU introduction retains its own copy field and local form.
- Embedded YouTube player loaded the correct title and played the video inline (readyState 4, paused false, advancing currentTime). The explicit YouTube link opened the correct video in a new tab.
- No application JavaScript errors; no document overflow at 1440, 768, 390 and 320 pixels. Visually reviewed the university finder and BAU introduction, and corrected the finder controls to stack vertically.

## Confirmed HTU laptop requirement

- Reviewed the user-supplied coordination screenshot: at least one laptop per team; host does not supply laptops. Screenshot/contact details are excluded from the public project.
- Existing build and link checks pass with 64 FAQs. The local guidance source anchor resolves correctly.
- Browser checked the laptop FAQ search and the new readiness item: selecting it updates the checklist to 1 / 7 and progress to 1 of 7. No mobile document overflow at 390px.

## Layout and contact cleanup — 26 September 2026

- Removed decorative section, hero and resource numbering; sequential registration and proctor steps retain their useful ordering.
- Reduced direct Belal email links from seven to two, removed the FAQ help card and duplicate BAU introduction, and retained the local form in registration/resources.
- Confirmed the exact requested ambassador label, all 27 options, college-name search, distinct BAU branch selection and unchanged Ambassador ID.
- Desktop content now fills the viewport with 48px inline margins (1,824px content at a 1,920px viewport), with 32px tablet and 14–18px mobile margins.
- Browser checks at widths 320, 390, 768, 1024, 1440, 1920 and 2560 found no horizontal overflow. Reviewed desktop and mobile screenshots.
- Verified clipboard copying, disabled copying for unknown universities, no-JavaScript default label, and responsive source-page layout.
- `npm run check` and `git diff --check` pass.

## Resource directory and spacing refinement — 26 September 2026

- Increased desktop gutters to 6% per side, with a 1,680px maximum content width. At 1,920px the inline margins are 120px, up from 48px.
- Replaced rectangular resource cards with grouped lists, fine dividers and a highlighted training group. All 17 destinations and category filtering remain available; all links render without JavaScript.
- Replaced the personal contact FAQ with branch-ambassador guidance and a link to the university selector. Removed the contact card before the social links; the footer email remains.
- Checked widths 320, 390, 768, 1024, 1152, 1200, 1440, 1920 and 2560 for overflow and reviewed desktop/mobile screenshots.
- Verified every resource filter on desktop/mobile, keyboard filter activation, the FAQ search and its selector link, and resources without JavaScript.
- `npm run check` and `git diff --check` pass.

## Tutorial button and HTU copy — 26 September 2026

- Gave the hero tutorial link a pale blue background, dark blue text/play icon and a 52px minimum height, visually distinct from the gold primary action.
- Rewrote HTU copy in conversational Arabic, starting with a description identifying the university as the local competition host. The section now proceeds through registration, equipment, attendance, award eligibility and prize amounts.
- Removed inline bold emphasis and large attendance-number callouts. Preserved all requirements from `assets/htu-regulations.txt`: current students, vTools registration, all members on site, 10-hour participation, midnight opening, the all-female-team check-in exception by 8 AM, and 15-hour/all-member-opening award eligibility. Retained laptop guidance, 3 AM contest start, supplied forms/map/source links, prizes and WhatsApp reminder.
- Reviewed desktop/mobile screenshots and checked widths 320, 390, 768, 1024, 1440 and 1920: no horizontal overflow or overlap with the hero footer. The tutorial action stays inside the hero at every size.
- `npm run check` and `git diff --check` pass.


## BAU branch logo — 26 September 2026

- Replaced the shared header logo on the home and sources pages with the transparent 1795 × 876 BAU faculty reconstruction; checked exact text against the supplied sample.
- `npm run check` and `git diff --check` pass.
- Chromium checks at 320, 390, 768, 1024, 1100 and 1440 px: logo loads with the expected intrinsic dimensions, retains its aspect ratio, and causes no horizontal page overflow.
- Visually reviewed desktop and mobile screenshots. Verified the mobile menu opens, closes on section selection, and leaves the registration heading below the sticky header.

## Content layout reflow — 27 September 2026

- Registration now pairs the steps with the ambassador finder and gives the tutorial a full-width row. Tablet and phone layouts stack the guide and finder.
- HTU uses two related content stacks: attendance with equipment, and award eligibility with prizes. Preparation puts AI guidance below practice and the checklist. FAQ controls sit above the answers, and the five social cards fill complete rows.
- `npm run check` and `git diff --check` pass. An HTML comparison verified all original text, links, IDs, ARIA targets and checklist keys were retained; element nesting remains valid.
- Inspected responsive layouts from 320 to 1920 px without horizontal overflow; reviewed desktop and phone screenshots. Verified ambassador lookup, FAQ search/category filters, resource filters, checklist updates/reset, participation tabs and mobile navigation.
- With JavaScript disabled at 390 px, all five registration steps, 64 questions and three prize cards remain visible, with no horizontal overflow.

## FAQ restoration and discovery headings — 27 September 2026

- Restored the FAQ layout from before the content reflow: search and vertical categories beside the answers on desktop, with the original stacked mobile layout.
- Centered the four discovery values and their headings, including the flex-based word labels.
- Build/content checks and whitespace checks pass. Visually reviewed at 1440 and 390 px; FAQ search works and neither layout overflows horizontally.

## Registration clarity — 3 October 2026

- Removed the special green background, filled number and button from the vTools step. All five registration steps share the same neutral styling and text-link treatment; unused featured-step CSS was removed.
- Added visible, labelled Arabic warnings above the full registration steps and beside the HTU registration instructions. Clarified the BAU and HTU step descriptions and the matching FAQ: the BAU form is for coordination only; HTU attendance requires official vTools registration followed by the separate HTU form.
- `npm run check` passes, including the build, all 64 FAQs, registration URLs, protected ambassador ID, assets, anchors and ARIA targets. `git diff --check` passes.
- Chromium checks at 320, 390, 768, 1024 and 1440 px found no page or warning overflow. Computed number, content and link styles match across all five steps. Both warnings remain visible with JavaScript disabled at 390 px, and the updated FAQ is searchable and opens correctly.
- Reviewed desktop registration and desktop/mobile HTU screenshots. Review captures are saved in the parent workspace's `output/` as `registration-clarified-{desktop,mobile}.png` and `htu-registration-clarified-{desktop,mobile}.png`.

## Separate official registration deadlines — 3 October 2026

- Historical validation of the earlier separate-deadline layout. This guidance is superseded by the unified registration deadline update dated 12 October 2026 below.
- Replaced the superseded deadline announcement link with the public source note attributing the corrected dates to the coordinator's confirmation. Checked that the new source anchor exists and the FAQ source points to it.
- `npm run check` and `git diff --check` pass. Chromium checks at 320, 390, 768 and 1440 px confirmed both date labels and ISO dates, no horizontal overflow, and no overlap between the hero dates and its footer. The deadline FAQ remains searchable and opens correctly.
- Visually reviewed the two-date panel at 390 and 1440 px; screenshots are in the parent workspace's `output/registration-deadlines-{390,1440}.png`.

## HTU team requirements and expandable registration help — 3 October 2026

- Clarified the global 1–3-member rule and HTU's minimum of two registered teammates in the overview, registration steps, participation options, HTU notice and FAQs. HTU teams must all attend; splitting members between HTU and remote participation is explicitly prohibited.
- Reused the existing HTU warning for three concise requirements. Added one native `details` disclosure beneath vTools for the approved, uneditable-team case; it starts closed. Replaced the gender-related “mixed team” wording with an explicit reference to male and female students.
- The build/content check passes with 65 FAQs. FAQ searches locate the solo-team guidance, rebuilding procedure, split-location prohibition and opening-ceremony clarification. Both new source anchors resolve. The original host-regulations asset remains unchanged, with the coordinator's additions documented separately.
- Chromium checks at 320, 390, 768 and 1440 px found no horizontal overflow, including with the disclosure expanded. Its keyboard controls open with Enter and close with Space. Both participation tabs work. With JavaScript disabled at 390 px, the disclosure still opens, the three HTU requirements remain visible and all 65 FAQs are present.
- Reviewed the HTU notice and expanded help on phone and desktop. Captures are in the parent workspace's `output/htu-team-guidance-{390,1440}.png` and `output/team-edit-help-{390,1440}.png`. `git diff --check` passes.

## Published AI and workspace rules — 3 October 2026

- Verified the official rules in the browser by expanding the 2026 section. Replaced the pending-rules content with game-type/locked-workspace guidance, the 100 KB library limit, workspace preparation instructions and a direct configuration link. Task restrictions and the deadline remain visible; setup details use a native disclosure.
- The UTC deadline `2026-10-29T23:59:00Z` and Jordan deadline `2026-10-30T02:59:00+03:00` represent the same instant; the Jordan conversion was checked with `Intl.DateTimeFormat` using `Asia/Amman`. The past PreXtreme deadline is not advertised as upcoming.
- `npm run check` passes with 67 FAQs and 18 resources. No superseded pending-AI wording remains in the active site content or README. Public source notes now cite the published rules.
- Chromium checks at 320, 390, 768, 1024 and 1440 px found no page or panel overflow, including expanded setup details. The disclosure opens with Enter, closes with Space, and works without JavaScript. Both UTC/Jordan dates remain visible. Relevant FAQ searches and the training resource filter find the new content.
- In an isolated browser context, existing saved checklist entries were retained, the new workspace item started unchecked, and all eight items produced progress 8/8. Reload retained the new item, disabling saving cleared storage, and reset returned 0/8. No browser page errors were reported during these interactions.
- Visually reviewed phone and desktop screenshots in the parent workspace's `output/ai-workspace-{390,1440}.png`. `git diff --check` passes.

## Unified five-chapter guide — 4 October 2026

- Replaced the separate visual treatments with five consistent chapters: overview, registration, participation location, preparation/rules, and questions/resources. HTU and remote participation share tabs; proctor help, ambassador lookup, video, award conditions, workspace instructions, readiness and the resource directory use native disclosures.
- Registration, HTU attendance and AI restrictions each retain one visible contextual notice. All five registration steps share the same computed text, background and number colors. Deadlines and the workspace configuration cutoff remain visible; longer supporting explanations start collapsed.
- Centralized repeated dates, team limits, attendance/award hours, prizes and common warning copy in `src/facts.mjs`. Templates, FAQ answers, the countdown and generated calendar reuse these values. The public source page retains the distinction between official sources and coordinator-supplied local clarifications.
- `npm run check`, JavaScript syntax checks and `git diff --check` pass. The content check now covers cross-page fragments, chapter/navigation order and shared deadline data. Comparison against the pre-refactor source confirmed every existing ID, FAQ identity/order, resource destination, ambassador record, social link and checklist key remains intact.
- Chromium checks at 320, 390, 768, 1024, 1151 and 1440 px found no horizontal overflow, including with all supporting details expanded. The default page measures 9,633 px at 390 px wide and 7,185 px at 1440 px wide. Visually reviewed the overview, registration, HTU and preparation on desktop/phone; captures are in the parent workspace's `output/guide-*.png`.
- Verified mobile menu selection/Escape, sticky-header clearance, RTL tab arrow keys, Enter/Space disclosure controls, links into hidden HTU/resource panels and collapsed disclosures, cross-page ambassador links, late FAQ bookmarks, Arabic FAQ search, resource filters and ambassador searches with multiple/no matches. Fixed an initialization race that could hide a bookmarked FAQ after the first filter pass.
- In an isolated browser context, seven saved checklist entries survived, the workspace item started unchecked, checking it reached 8/8, reload retained it, opting out erased storage and reset returned 0/8. No browser page errors occurred in these interaction checks.
- Without JavaScript at 390 px, all 67 FAQs and both participation modes remain available, all three warnings remain visible, resource/proctor disclosures work, and the page does not overflow. Nonfunctional copy/save/progress controls are hidden.
- Axe-core 4.10.3 reported no detected WCAG A/AA violations in the expanded desktop guide, mobile guide or sources page. This is automated Chromium coverage, not a claim of comprehensive accessibility certification.
- Consolidation was validated locally before publication.

## Essential resource links before the footer — 4 October 2026

- Added six visible links on the index page directly before the footer, reusing the existing URL placeholders: vTools, CS Academy practice, workspace setup, HTU registration, BAU coordination and the official rules. The BAU description retains the distinction between coordination and registration.
- The compact list uses three columns on desktop, two on tablet and one on phones. Its “all resources” link opens the full directory in the FAQ on the same page.
- `npm run check` and `git diff --check` pass. Chromium checks at 320, 390, 768 and 1440 px confirmed all six destinations, default visibility, placement immediately before the footer and no horizontal overflow. The full-directory link opens its disclosure correctly. Visually reviewed phone and desktop screenshots saved as `output/essential-links-{390,1440}.png` in the parent workspace.

## Booth downloads and split QR sheets — 11 October 2026

- `npm run check` passes with 67 FAQs, 19 resources and three HTML pages. Local links, anchors, shared IEEE identity and SHA-256 hashes of all 23 printable PDFs pass.
- The 23 PDFs and final ZIP in the website match the updated local print pack byte-for-byte. The archive passes CRC checks and excludes the retired `links-ar.pdf`; the original brochure and sticker PDFs remain unchanged.
- All PDF pages measure A4 (including the landscape brochure, within 1 mm). The newest sticker edition has four pages and 177 stickers. The three guide PDFs retain their layouts, with public link annotations replacing machine-local file URLs; all links to locally hosted supplemental files resolve in the repository.
- Both new QR signs are single-page A4 PDFs. Decoding rendered pages at 72 and 101 dpi returns exactly one QR per sheet: the guide's registration section and its new printables page. Their Arabic layouts were visually inspected. No physical printer test was performed.
- Chromium: no horizontal overflow at 320, 390, 768 or 1440 px; self-hosted Cairo loads; no page exceptions. Desktop and mobile downloads layouts were visually inspected.
- All 23 PDF downloads and the ZIP return HTTP 200 with correct PDF/ZIP content types in the local server. A real browser download of `registration-qr-ar.pdf` completes with the expected filename.
- Alternate editions expand normally and their fragment links open the relevant disclosure. At 320 px with JavaScript disabled, all 23 download links remain present, native disclosures work and there is no horizontal overflow.
- Home-page and shared footer links lead to the downloads page. Existing chapter and navigation order remains intact.

## Unified registration deadline — 12 October 2026

- Both vTools and HTU hosting now use the shared 17 October 2026 registration date. The overview shows one combined registration row; registration instructions and FAQ explain that the forms remain separate and must be completed within the same deadline.
- Rechecked the official IEEEXtreme registration announcement and updated public and editorial source notes to the coordinator's latest correction. Removed the superseded date from the current source tree and generated pages.
- `npm run check` and `git diff --check` pass. Existing checks cover the shared deadline, 67 FAQs, internal links, protected registration URLs, calendar and 23 printable PDF checksums. Downloadable PDF text and ZIP contents contain no superseded registration date.
- Chromium previews at 390 and 1440 px show the unified date and clear form order with no horizontal overflow. Reviewed both screenshots. QR destinations and published anchors remain unchanged.
