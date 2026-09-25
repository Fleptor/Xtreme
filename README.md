# IEEEXtreme 20.0 — BAU student journey

A complete Arabic, right-to-left promotional website inspired by the supplied jungle, expedition, gold and paper campaign samples. It guides students through the competition, official registration, proctor arrangements, participation options, HTU hosting, preparation and community resources.

## Run

Requires Node.js 20 or newer. There are no npm dependencies and no installation step.

```bash
cd /home/fleptor/Projects/ieeextreme-20
npm run dev
```

Open **http://127.0.0.1:4173**. To use another port:

```bash
npm run dev -- --port 3000
```

The server builds at startup. After editing, run `npm run build` in another terminal and refresh the page. The server binds to localhost by default. For an explicitly desired LAN preview, add `--host 0.0.0.0`.

## Build and validate

```bash
npm run build
npm run check
```

`dist/` is the complete deployable website. Serve that directory with any static host; no database, API keys, backend or environment variables are required. Relative asset paths allow hosting in a subdirectory. The canonical URL and sharing image are configured for `https://belalhamdan.com/Xtreme/`.

## GitHub Pages

- Website: https://belalhamdan.com/Xtreme/
- Repository: https://github.com/Fleptor/Xtreme
- Publishing source: GitHub Actions, using `.github/workflows/pages.yml`.
- Each push to `main` builds and validates the site, then deploys only `dist/`.
- The project inherits `belalhamdan.com` from the account's existing user site. Do not add a project-level `CNAME` or set this repository's custom domain to the apex domain: the project must retain its `/Xtreme/` path.
- Run the workflow manually from the Actions tab to redeploy the current branch.

## Included

- Eight journey sections, with responsive desktop and mobile layouts.
- Official vTools registration, the HTU hosting form, and BAU local coordination form, each with its own purpose.
- BAU Ambassador ID **IEEEXTREME20SB08217** with a copy button and manual-copy fallback.
- Embedded YouTube registration tutorial using privacy-enhanced mode, with an explicit new-tab YouTube link.
- Registration deadline, all 27 supplied Jordanian university ambassador entries in the university selector with an ID-copy control, AI guidance, and the supplied HTU Google Maps link.
- Online/on-site participation tabs and guidance on finding and confirming proctors.
- Confirmed HTU device guidance: every team brings at least one laptop; the host does not supply laptops.
- Local top-three prizes of 300 / 200 / 100 JOD, linked to the supplied promotional poster.
- Separate HTU participation and local award requirements, including the exact all-female-team opening exception.
- **64 sourced FAQs** in eight topics, with Arabic search, category filtering and progressive display.
- **18 resources**, including practice, supported languages/browsers, memberships, rules, proctor guidance and certificates.
- All five supplied Instagram accounts and the WhatsApp update reminder.
- UTC-based countdown with active/ended states, downloadable calendar event, and a preparation checklist with optional browser saving; switching saving off clears its stored data.
- Self-hosted Arabic fonts and artwork; no analytics. The lazy-loaded YouTube iframe is the external media integration.
- All core content and links remain available without JavaScript.

## Edit the site

| File | Purpose |
| --- | --- |
| `src/index.html` | Arabic page sections and content; build placeholders expand FAQs and links |
| `src/content.mjs` | Resource URLs, FAQ questions and citations, social accounts |
| `src/styles.css` | Design tokens, layout, responsive and reduced-motion styles |
| `src/ieee.css` | IEEE identity, typography, palette, button and contrast refinements |
| `src/partials/` | Shared IEEE global navigation, header and administrative footer |
| `src/shell.js` | Shared keyboard-accessible navigation on both pages |
| `src/app.js` | Search, tabs, countdown, clipboard, navigation and checklist |
| `src/sources.html` | Public source notes and provenance |
| `assets/` | Hero, fonts, icons, calendar and original HTU regulations |
| `scripts/` | Dependency-free build, preview server and content checks |
| `references/` | Supplied local announcement evidence; not copied into the public build |
| `SOURCES.md` | Editorial verification notes and claim/source mapping |
| `VALIDATION.md` | Browser and content validation record |
| `IEEE-DESIGN-REVIEW.md` | Official guideline mapping, validation and publication review notes |

The FAQ is rendered at build time, so search engines and browsers without JavaScript can read every answer. The browser narrows the existing content for interactive searching.

## Content maintenance

Last reviewed **25 September 2026**. Keep official registration separate from local forms. Preserve the supplied ID and URLs unless the coordinator changes them. Current platform details come from the live CS Academy environment; do not treat older competition FAQ browser versions as independently current. HTU requirements come from the supplied host regulations, copied verbatim to `assets/htu-regulations.txt`.

The official registration deadline is 17 October 2026. The announced 20.0 hybrid format includes AI-enabled challenges and AI-free traditional tracks; detailed 20.0 rules are still pending. This AI note is the user-requested exception to avoiding pending-rule FAQs. Unverified global prize amounts, transport, catering and equipment limits are not advertised. The official rules remain directly accessible.

The jungle illustration is illustrative artwork, not a photograph of HTU. It was created with the built-in image generation tool; its complete prompt is in `references/hero-prompt.txt`. Cairo and Open Sans are self-hosted under the included SIL Open Font Licenses. The master logo and favicon come from IEEE's official asset downloads and remain subject to its toolkit agreement.

## IEEE design review

The website follows the implemented requirements documented in [IEEE-DESIGN-REVIEW.md](IEEE-DESIGN-REVIEW.md), including shared branding, official logo/favicon, global navigation, policy footer, accessible contrast and IEEE button styling. That record also identifies the IEEE review and domain-specific cookie-governance steps needed before official publication. Local checks are not an IEEE certification.

Ambassador selector data comes from `references/Other Ambassadors.txt`. Preserve every supplied name, ID and distinct branch; University of Jordan has two entries. English university labels are retained for search alongside Arabic display labels.

The registration sidebar welcomes every university with a quick university lookup and ID-copy field, defaulting to Belal’s BAU ID. Multiple matches require explicit selection; unknown searches disable copying. A dedicated BAU introduction and local form follow the registration cards; the duplicate standalone directory has been removed.
