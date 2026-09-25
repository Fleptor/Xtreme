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
