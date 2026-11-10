# AIGCTrustDetect @ COLING 2027

Website of the 1st Workshop on AI-Generated Content Detection and Trustworthy Governance (AIGCTrustDetect), a one-day workshop at [COLING 2027](https://2027.coling-iccl.org/), May 9-14, 2027, Macao, China.

Live site: <https://nlp2ct.github.io/COLING-2027-Workshop-AIGCTrustDetect/>

## About

The workshop gathers research on AIGC detection and its role in trustworthy governance: fine-grained labels instead of binary verdicts, robustness across languages, and content-level checks of AI-assisted writing. Alongside the paper track, AIGCTrustDetect hosts a three-track shared task benchmark. The organizing team previously ran the shared tasks on LLM-generated text detection at NLPCC 2025 and NLPCC 2026, which together attracted more than 120 participating teams.

## Key dates

Main track:

| Event | Date |
|---|---|
| First call for papers | November 5, 2026 |
| Second call for papers | December 5, 2026 |
| Direct paper submission deadline | January 10, 2027 |
| Notification of acceptance | February 10, 2027 |

Shared task track:

| Event | Date |
|---|---|
| Call for participation and registration opens | November 5, 2026 |
| Task guidelines and training data release | November 25, 2026 |
| Test data release | December 20, 2026 |
| Results submission deadline | December 25, 2026 |
| Leaderboard release and call for system papers | December 30, 2026 |
| System paper submission | January 10, 2027 |
| Notification of acceptance | February 10, 2027 |

All deadlines are 11:59 pm UTC-12h (anywhere on earth). The [live site](https://nlp2ct.github.io/COLING-2027-Workshop-AIGCTrustDetect/) is the source of truth for all dates, including common dates such as camera-ready and the workshop day.

## Pages

| Page | File |
|---|---|
| Home | `index.html` |
| Call for Papers | `call-for-papers.html` |
| Shared Tasks | `shared-tasks.html` |
| Shared Task 1 | `shared-tasks/track1.html` |
| Shared Task 2 | `shared-tasks/track2.html` |
| Shared Task 3 | `shared-tasks/track3.html` |
| Committee (organizers and program committee) | `organizers.html` |
| Invited Speakers | `speakers.html` |
| Program | `program.html` |
| Participants Info | `participants-info.html` |
| Sponsorship | `sponsorship.html` |

Supporting files live in `assets/` (images and `assets/js/runtime.js`).

## Maintenance notes

- Page content lives inside `<template id="page-template">` in each file. Edit the text there.
- Placeholders still to fill are marked `[TBD]` or `[link TBD]`.
- The header and footer are repeated in every file, so a change to the navigation or the footer must be made in all eleven pages.
- Dates appear in `index.html`, `call-for-papers.html`, `shared-tasks.html`, the three files under `shared-tasks/` and this README; keep them in sync.
- Interactive parts (the token-level demo, the research-direction stack, the home-page examples and the paper-fit finder) are driven by the `<script>` block at the bottom of each page plus `assets/js/runtime.js`.

## Preview locally

Serve the directory with a static server that supports clean URLs, for example `npx serve .`, then open the local URL printed by the server. Opening `index.html` directly works for the home page, but extensionless navigation between pages requires a local server.

## Deployment

The site is served by [GitHub Pages](https://pages.github.com/) from the `main` branch. Push to `main` and the live site updates on the next build. The `.nojekyll` file keeps Pages from running Jekyll.

## Contact

For general questions, email [aigctrustdetect@googlegroups.com](mailto:aigctrustdetect@googlegroups.com). Shared task contacts are listed on the Shared Tasks page, and the sponsorship contact is listed on the Sponsorship page.
