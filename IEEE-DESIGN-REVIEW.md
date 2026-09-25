# IEEE digital design review

Reviewed and implemented on 25 September 2026 against IEEE's official Brand Experience website. This records the implemented design requirements and the boundary between local validation and IEEE's own publication processes. It is not a claim of certification by IEEE or a complete WCAG conformance statement.

## Official references

- [IEEE Digital Style Guide](https://brand-experience.ieee.org/guidelines/digital/style-guide/)
- [Global page elements and branding requirements](https://brand-experience.ieee.org/guidelines/digital/style-guide/global-page-element-and-branding-requirements/)
- [Branding and visual elements](https://brand-experience.ieee.org/guidelines/digital/style-guide/branding-visual-elements/)
- [Button design guidelines](https://brand-experience.ieee.org/guidelines/digital/style-guide/branding-visual-elements/button-design-guidelines/)
- [Usability and accessibility](https://brand-experience.ieee.org/guidelines/digital/style-guide/usability-and-accessibility/)
- [Navigation and linking](https://brand-experience.ieee.org/guidelines/digital/style-guide/navigation-linking/)
- [Official master brand artwork](https://brand-experience.ieee.org/guidelines/master-brand-and-logos/)
- [Master Brand and Brand Identity Toolkit Agreement](https://brand-experience.ieee.org/templates-tools-resources/toolkit-agreement/)
- [Cookie Script Governance Program](https://brand-experience.ieee.org/guidelines/digital/other-guidelines/ieee-cookie-script-governance-program/)

The detailed pages were read in a real browser because the research fetcher could not access several of them. The browser showed current 2026 footer information; older search-index dates were not treated as evidence of the latest body text.

## Applied to both public pages

| Area | Implementation |
| --- | --- |
| IEEE master brand | Original transparent black PNG from IEEE, unchanged. Upper-right header, linked to IEEE.org in the same tab, `alt="IEEE"`. Rendered at 116 × 33.94 px with proportional height and 17 px clear space on all sides. |
| Site identifier | Plain Open Sans title at the upper-left, larger than the IEEE master logo. Links home. Removed the improvised gold X/IEEE wordmark. Local BAU guide authorship remains clear. |
| Global navigation | IEEE.org, IEEE Xplore® with italic Xplore, Standards, Spectrum and More Sites in the specified left-to-right order; Join IEEE and Donate at the right. Open Sans at 12 px, no visited-color shift, hover underline. Wraps on mobile. |
| Footer | Shared Home, Contact, Accessibility, Nondiscrimination, Ethics Reporting, Terms & Disclosures, Privacy and More Sites links; required IEEE copyright and organizational descriptor. Policies link to IEEE rather than being copied into local policies. |
| Favicon | Original IEEE favicon and touch icons from its downloadable set. No recoloring or new logo generation. |
| Campaign palette | Main action colors are IEEE expanded-palette dark green `#006341` and gold `#FFC72C`; links use IEEE blue `#00629B`, with purple visited states on light backgrounds. Dark neutral surfaces, paper texture and jungle artwork provide the campaign setting. |
| Typography | Self-hosted Open Sans for Latin text. Cairo supplies Arabic glyphs because Open Sans does not cover Arabic. Body copy and controls are at least 15 px; primary buttons are 16 px, or 15 px in compact layouts. Text line spacing generally exceeds 1.5. |
| Calls to action | IEEE pill shape, 50 px radius, 2 px border, bold Open Sans/Cairo, high contrast, action-led labels, 400 ms color transitions. Reduced-motion preference disables transitions. |
| Links | HTML destinations open in the same tab. HTU's supporting text file opens in a new tab with type, size and new-window information. Calendar download is labeled ICS. Google sign-in is disclosed beside the HTU registration step. |
| Accessibility | Skip link, semantic landmarks/headings, visible focus, keyboard menu and tabs, native FAQ disclosures, labeled controls, responsive text and layout. A disabled search field without JavaScript avoids presenting a nonworking search; all FAQ text and resources remain readable. |
| Local storage | Checklist saving requires an explicit opt-in. Turning it off deletes saved progress and its preference. The site sets no cookies, includes no analytics and makes no third-party runtime asset requests. |
| Secondary page | Sources page uses the same identity, menu and footer; includes guide-specific browser/accessibility information. |

The fantasy temple is campaign artwork, not a photograph of HTU. This distinction is disclosed in the source notes. The IEEE master logo is never placed over that image or used as part of the jungle illustration.

## Validation

- `npm run check` and JavaScript syntax checks pass.
- Browser inspection: 320, 390, 768, 1024 and 1440 px; no horizontal page overflow.
- Verified unchanged logo dimensions, alt text, same-tab destination and right-side placement. The event notice was moved below the header to keep the master brand near the top on small screens.
- Axe-core 4.10.3: no detected A/AA violations in the reviewed Chromium desktop, mobile and sources-page states. All 58 FAQ answers and both participation panels were expanded for coverage.
- Automated contrast cannot fully evaluate photographic/texture backgrounds. A separate diagnostic temporarily removed the paper/community background images in the test browser to evaluate underlying text, and explicit conservative contrast calculations checked the real theme bounds. The production textures remain in place.
- Worst-case hero text contrast is at least 5.22:1 for informative text, using the 78% dark overlay over an all-white image pixel. Decorative expedition lettering is excluded. Green CTA/white text is 7.34:1; gold CTA/dark text is 9.77:1. Key text/link colors on the darkest possible paper grain remain above 5:1.
- Tested saving opt-in, reload persistence, opt-out erasure, mobile menu/Escape, FAQ search, participation tabs and navigation from Sources to HTU.
- Browser testing was in Chromium. No certification of every supported browser/version, assistive technology, or IEEE organizational review is implied.

## IEEE publication processes

The global-elements guidelines also call for IEEE Experience Design review, and describe the IEEE cookie-banner process. These involve the publisher and an actual deployment domain; adding a homemade banner or calling local tests “IEEE approval” would not complete them.

Before publishing as an official IEEE site, the site manager should:

1. Request the [IEEE Experience Design review](https://brand-experience.ieee.org/services-contact/digital-contact-form/) of the prepared design and beta URL.
2. Register the deployment through the site's applicable IEEE website/domain process.
3. Obtain the applicable banner/script configuration or a determination from the [IEEE Cookie Script Governance Program](https://brand-experience.ieee.org/guidelines/digital/other-guidelines/ieee-cookie-script-governance-program/), then validate it on the live domain. No IEEE CMP ID or script URL was supplied, so none was invented.
4. Complete the target-browser and accessibility review for the actual hosting environment.

No messages, forms, domain registrations or review requests were submitted on the user's behalf. No deployment was performed. The design and build are ready for that review.

## Asset provenance

- `assets/ieee-master-black.png`: [official black master PNG](https://brand-experience.ieee.org/download/ieee-mb-black-png/?wpdmdl=4847), original 287 × 84 RGBA bytes.
- `assets/favicon.ico`, `favicon-32x32.png`, `apple-touch-icon.png`: [official IEEE favicon set](https://brand-experience.ieee.org/download/ieee-favicon-2/?wpdmdl=8949), original files.
- `assets/open-sans.ttf`: [Google Fonts Open Sans source](https://github.com/google/fonts/tree/main/ofl/opensans), with `OpenSans-OFL.txt` included.
- Cairo and generated jungle artwork retain their existing provenance in `SOURCES.md`.

IEEE artwork remains subject to the toolkit agreement, which permits use for official IEEE volunteer activities. Its use here follows the supplied context of the BAU competition ambassador's student-branch outreach.
