# Editorial sources

Reviewed 25 September 2026. Source references are also attached to every FAQ answer and exposed on the public `sources.html` page.

| Claim / resource | Evidence | Verification |
| --- | --- | --- |
| 20.0 date, global 24-hour format | [Official homepage](https://ieeextreme.org/) | Official search-indexed content; direct fetch returns 403 |
| Team composition, membership grades, multiple teams, proctor eligibility | [Eligibility](https://ieeextreme.org/eligibility/) | Official search-indexed content |
| 31 October at 00:00 UTC; remote and physical monitoring; proctor acceptance, shifts and 20-team limit | [Proctor requirements](https://ieeextreme.org/proctor-eligibility-and-requirements/) | Official search-indexed content |
| One-member teams, continuous monitoring, official rule reference | [Rules](https://ieeextreme.org/rules/) | Official indexed guidance; retain the link as the controlling source |
| Rest, code-sharing prohibition, confirmed proctor, support routing | [Official FAQ](https://ieeextreme.org/qa/) | Official search-indexed content |
| Registration preparation and potential proctors | [Registration tips](https://ieeextreme.org/registration-tips/) | Official published general guide; current UI takes precedence |
| Registration URL, IEEE account recovery and support address | [vTools](https://xtreme.vtools.ieee.org/) | Live page read, including IEEEXtreme@ieee.org |
| Practice environment | [Xtreme Practice](https://csacademy.com/ieeextreme-practice/) | Existing official research references; linked as practice rather than a guaranteed contest login URL |
| Supported environment languages and browsers | [CS Academy environment](https://csacademy.com/about/environment/) | Rendered in browser, including language/compiler table and browser recommendations |
| HTU attendance and awards | Supplied `HTU HOST REGULATIONS.txt` | Copied verbatim into public assets; this document governs the local summaries |
| HTU form and screenshot prerequisite | Supplied `IEEEXtreme-host-registration-ar.txt` and `IEEEXtreme-whatsapp-ar.txt` | HTU short URL resolves to a Google sign-in requirement; did not sign in or submit |
| BAU ambassador ID, local form and leader-only instruction | Supplied `IEEEXtreme-whatsapp-ar.txt` | Local form resolves to a live Google Form; did not submit |
| YouTube tutorial | [Registration tutorial](https://youtu.be/T-4hHZvCQnw) | Browser resolved the title to “IEEEXtreme 20.0 Registration Tutorial”; displayed duration 6:24 |
| Five Instagram accounts | User-supplied exact URLs | Included without claiming live account activity |
| Certificates portal | [Claim portal](https://certificate.ieeextreme.org/claim) | Previously verified in repository research; no claim that 20.0 certificates are currently available |

## Important editorial distinctions

- HTU general participation: minimum 10 hours; everyone currently enrolled in university, officially registered in vTools and physically present at HTU during the event. At least one member attends the 12:00 AM opening.
- Only teams made up entirely of female members have the general-participation opening exemption. All their members must complete check-in by 8:00 AM.
- HTU award eligibility: minimum 15 hours and **all** members at the opening, in addition to student status, official registration and physical attendance. No award exception was supplied for all-female teams. Not satisfying award conditions does not itself prohibit general participation.
- The host file gives 12:00 AM and 8:00 AM without separately specifying a timezone. These are presented as local HTU attendance instructions. The independently specified contest start is 00:00 UTC, converted through `Asia/Amman` to 03:00. No venue exit/re-entry policy is inferred.
- CS Academy's environment was read in a JavaScript-capable browser. Its current displayed browser minimums are Chrome 91, Firefox 90 and Safari 15. The page footer says its language list was last updated September 12, 2025. The site labels these as environment information, recommends modern browsers, and links to the current full list.
- Compiler version examples observed: g++ 15.2.0, OpenJDK 21, Python 3.13.3, Mono 6.8, Node 20.18.1, Rust 1.71.1 and Go 1.19.2. These versions are not copied into promotional claims; the source page remains the reference.
- The official rules page has edition-update language. The site excludes unanswered questions and volatile scoring, AI, deadline and global prize details rather than publishing pending-answer FAQ entries.
- General proctor/eligibility facts are also supported by the dedicated eligibility and proctor pages. Preparatory advice is explicitly labeled in the FAQ.
- The supplied prize poster is visual inspiration only. No prize amounts were imported from an image into current promotional claims.
- The member-account screenshots were not embedded; private membership details are not required for this public guide.

## Artwork

Hero generated using the built-in image generation tool, then exported to `assets/jungle-hero.webp`. Full prompt: `references/hero-prompt.txt`. Theme references: supplied `Screenshots/Promotional Samples/` jungle, gold and paper visuals. The generated temple does not depict HTU. Typography uses local Cairo Regular and Bold fonts with their included OFL license.

## IEEE digital design sources

The website was revised against the [official IEEE Digital Style Guide](https://brand-experience.ieee.org/guidelines/digital/style-guide/), its global-elements, branding, buttons, accessibility and navigation guidance. Detailed requirements, official asset download links, implementation notes and the boundary of local validation are in [IEEE-DESIGN-REVIEW.md](IEEE-DESIGN-REVIEW.md).

The shared header uses an unmodified black IEEE master PNG. Official IEEE favicon files replace the initial decorative X favicon in the generated HTML. Open Sans is self-hosted for Latin text with Cairo for Arabic glyph coverage. The hero artwork remains illustrative. No official IEEE approval, domain registration or cookie-management configuration has been claimed or fabricated.
