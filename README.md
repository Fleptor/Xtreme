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

- Five chapters in a fixed order: overview, registration, participation location, preparation/rules, and questions/resources. Chapters share one surface, heading pattern, action style and expandable detail rows; content is limited to 1,140px for readability.
- Official vTools registration, the HTU hosting form, and BAU local coordination form, each with its own purpose.
- BAU Ambassador ID **IEEEXTREME20SB08217** with a copy button and manual-copy fallback.
- Embedded YouTube registration tutorial using privacy-enhanced mode, with an explicit new-tab YouTube link.
- Registration deadline, all 27 supplied Jordanian university ambassador entries in the university selector with an ID-copy control, AI guidance, and the supplied HTU Google Maps link.
- Online/on-site participation tabs and guidance on finding and confirming proctors.
- Confirmed HTU device guidance: every team brings at least one laptop; the host does not supply laptops.
- Local top-three prizes of 300 / 200 / 100 JOD, linked to the supplied promotional poster.
- Separate HTU participation and local award requirements, including the exact all-female-team opening exception.
- **67 sourced FAQs** in eight topics, with Arabic search, category filtering and progressive display.
- **19 resources** in grouped link lists, inside an expandable directory with category filters, including workspace setup, memberships, rules, proctor guidance, certificates and printable downloads.
- `printables.html`: 24 A4 PDFs plus a complete ZIP, including the HTU brochure, Arabic CS Academy guide, a decorated combined QR sign, two separate QR alternatives, booth activities and all three sticker editions. The latest home-printing edition has 177 stickers; each edition includes its combined PDF and four individual pages. Original attribution and licenses accompany the downloads.
- Six always-visible essential links immediately before the footer: vTools, CS Academy practice, workspace setup, HTU registration, BAU coordination and official rules. The full directory remains on the index page.
- All five supplied Instagram accounts and the WhatsApp update reminder.
- UTC-based countdown with active/ended states, downloadable calendar event, and a preparation checklist with optional browser saving; switching saving off clears its stored data.
- Self-hosted Arabic fonts and artwork; no analytics. The lazy-loaded YouTube iframe is the external media integration.
- All core content and links remain available without JavaScript.

## Edit the site

| File | Purpose |
| --- | --- |
| `src/index.html` | Arabic page sections and content; build placeholders expand FAQs and links |
| `src/content.mjs` | Resource URLs, FAQ questions and citations, ambassadors and social accounts |
| `src/facts.mjs` | Shared dates, limits, warnings and derived Jordan-time labels |
| `src/styles.css` | Design tokens, layout, responsive and reduced-motion styles |
| `src/ieee.css` | Shared IEEE identity, navigation, buttons and footer |
| `src/partials/` | Shared IEEE global navigation, header and administrative footer |
| `src/shell.js` | Shared navigation and bookmarks that reveal collapsed content |
| `src/app.js` | Search, tabs, countdown, clipboard, navigation and checklist |
| `src/sources.html` | Public source notes and provenance |
| `src/printables.html` | Arabic downloads page; latest home-printing pack and optional earlier editions |
| `src/printables.json` | Imported printable catalog, source-relative paths, PDF page counts, sizes and SHA-256 hashes |
| `assets/printables/` | Final printable PDFs, ZIP, code examples, printing instructions and licenses |
| `assets/` | Hero, fonts, icons, calendar and original HTU regulations |
| `scripts/` | Dependency-free build, preview server and content checks |
| `references/` | Supplied local announcement evidence; not copied into the public build |
| `SOURCES.md` | Editorial verification notes and claim/source mapping |
| `VALIDATION.md` | Browser and content validation record |
| `IEEE-DESIGN-REVIEW.md` | Official guideline mapping, validation and publication review notes |

The FAQ is rendered at build time, so search engines and browsers without JavaScript can read every answer. The browser narrows the existing content for interactive searching.

## Keep new information predictable

1. Choose the existing chapter that owns the topic. Keep this order within it: introduction, essential dates/requirements, actions, supporting details, then sources.
2. Keep consequential rules visible next to the relevant action. Use the existing compact notice for registration, HTU attendance or AI restrictions; ordinary explanations belong in the surrounding text. Avoid adding a separate warning wall or repeating full panels.
3. Put longer explanations in native `details` rows. Proctor help, ambassador lookup, the video, award conditions, workspace instructions, readiness and the full resource directory use this pattern. Registration steps retain equal visual weight.
4. Change repeated facts in `src/facts.mjs`. HTML uses `{{fact:key}}` and `{{copy:key}}`; FAQs import the same values. The countdown and built calendar derive their boundaries from the event timestamp. Cite supporting evidence in `SOURCES.md` and the public sources page when facts change.
5. Preserve existing IDs and FAQ order: published bookmarks reveal the right tab, open containing disclosures, and reveal filtered questions or resources. Keep original checklist keys so saved progress survives updates.
6. Run `npm run check`, preview the relevant chapter at phone and desktop sizes, and test links into anything moved behind a disclosure.

## Content maintenance

Printable files were imported from the local `Xtreme-Ambassador/booth/` materials on **11 October 2026**, with the combined QR sign added on **12 October 2026**. Print `booth-qr-duo-ar.pdf` on A4: both codes occupy the upper half (210 × 148.5 mm), with a centre cut line and a blank lower half; the separate QR signs remain alternatives. Rebuild the local pack before syncing the website. From that materials checkout, run `python booth/build_print_pack.py --website /path/to/ieeextreme-20` using an environment with `pypdf`; this updates both the ZIP and the website catalog/assets from the same final PDFs. Then run `npm run check` in this repository. Do not import prototypes, backups or the retired `links-ar.pdf`. The new registration QR targets `https://belalhamdan.com/Xtreme/#registration`; the resources QR targets `https://belalhamdan.com/Xtreme/printables.html`. The original brochure and sticker artwork are preserved. Three existing guide PDFs have only their local file-link annotations repaired to public destinations; example source files and the blank booth metrics sheet are included. This import does not change the review date of competition rules.

Last reviewed **25 September 2026**. Keep official registration separate from local forms. Preserve the supplied ID and URLs unless the coordinator changes them. Current platform details come from the live CS Academy environment; do not treat older competition FAQ browser versions as independently current. HTU requirements come from the supplied host regulations, copied verbatim to `assets/htu-regulations.txt`.

Registration deadline unified on **12 October 2026**: official IEEEXtreme registration through vTools and HTU hosting both close on **17 October 2026**. The coordinator's latest correction supersedes the previous separate-deadline guidance; the competition registration date is also supported by the official announcement linked in `SOURCES.md`. HTU teams must complete vTools first and then the separate HTU form within the same deadline. Both labels derive from one shared registration date; no shared cutoff hour is inferred.

Team guidance clarified on **3 October 2026**: IEEEXtreme allows 1–3 members, while HTU requires at least two registered teammates and every member physically attending. A team cannot split participation between HTU and remote members. The HTU notice summarizes team requirements beside attendance instructions; registration and HTU form instructions explain the separate forms. A native expandable note under vTools explains the coordinator's procedure for changing members when a proctor-approved team cannot be edited: disband/delete it and register it again with the intended members. The new source notes supplement the original host regulations without altering that supplied file.

The official 20.0 rules were reviewed on **3 October 2026**. AI is allowed for game-type tasks and prohibited for locked-workspace tasks, where external copy/paste is disabled and code must be written inside the official workspace. Teams may upload code libraries up to **100 KB** by **29 October 2026 at 23:59 UTC**, equivalent to **30 October at 02:59 in Jordan**. Starting code and additional files for manual copying can be prepared in advance; workspace configuration must be completed before each task starts and cannot be changed after its start. The preparation panel, optional setup disclosure, eight-item readiness checklist, FAQs and resource list link to the rules and CS Academy workspace. Unverified global prize amounts, transport, catering and equipment limits are not advertised.

The jungle illustration is illustrative artwork, not a photograph of HTU. It was created with the built-in image generation tool; its complete prompt is in `references/hero-prompt.txt`. Cairo and Open Sans are self-hosted under the included SIL Open Font Licenses. The header uses a high-resolution reconstruction of the supplied BAU Faculty of Engineering Technology branch logo; its sample and built-in imagegen prompt are preserved in `references/ieee-bau-branch-sample.jpg` and `references/ieee-bau-branch-prompt.txt`. The favicon files come from IEEE's official downloads.

## IEEE design review

The website follows the implemented requirements documented in [IEEE-DESIGN-REVIEW.md](IEEE-DESIGN-REVIEW.md), including shared branding, the BAU branch header logo, official favicon, global navigation, policy footer, accessible contrast and IEEE button styling. That record also identifies the IEEE review and domain-specific cookie-governance steps needed before official publication. Local checks are not an IEEE certification.

Ambassador selector data comes from `references/Other Ambassadors.txt`. Preserve every supplied name, ID and distinct branch; University of Jordan has two entries. English university labels are retained for search alongside Arabic display labels.

The expandable ambassador finder in registration welcomes every university with a quick university lookup and ID-copy field, defaulting to Belal’s BAU ID. Multiple matches require explicit selection; unknown searches disable copying. The BAU local form remains in the registration steps and resource list. The contact FAQ directs students to their own branch’s ambassador through the university selector and branch channels. Belal’s email remains in the footer; the standalone contact card and duplicate BAU introduction have been removed.
