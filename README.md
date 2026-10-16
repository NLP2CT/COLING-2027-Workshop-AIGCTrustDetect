# AIGCTrustDetect @ COLING 2027

Website of the 1st Workshop on AI-Generated Content Detection and Trustworthy Governance (AIGCTrustDetect), a one-day workshop at [COLING 2027](https://2027.coling-iccl.org/), May 9-14, 2027, Macao, China.

Live site: <https://nlp2ct.github.io/COLING-2027-Workshop-AIGCTrustDetect/>

## About

The workshop gathers research on AIGC detection and its role in trustworthy governance: fine-grained labels instead of binary verdicts, robustness across languages, and content-level checks of AI-assisted writing. Alongside the paper track, AIGCTrustDetect hosts a three-track shared task benchmark. The organizing team previously ran the shared tasks on LLM-generated text detection at NLPCC 2025 and NLPCC 2026, which together attracted more than 120 participating teams.

## Key dates

Main track:

| Event | Date |
|---|---|
| First call for papers | Sunday, October 25, 2026 |
| Second call for papers | Wednesday, November 25, 2026 |
| Direct paper submission deadline | Tuesday, January 5, 2027 |
| Notification of acceptance | Saturday, February 6, 2027 |

Shared task track:

| Event | Date |
|---|---|
| Shared task call for participation | Tuesday, November 10, 2026 |
| Registration opens | Tuesday, November 10, 2026 |
| Training and development data release | Wednesday, November 25, 2026 |
| Test data release | Sunday, December 20, 2026 |
| System output submission deadline | Friday, December 25, 2026 |
| Evaluation results release | Wednesday, December 30, 2026 |
| System description paper deadline | Sunday, January 10, 2027 |

All deadlines are 11:59 pm UTC-12h (anywhere on earth). The [live site](https://nlp2ct.github.io/COLING-2027-Workshop-AIGCTrustDetect/) is the source of truth for all dates, including common dates such as camera-ready and the workshop day.

## Pages

| Page | File |
|---|---|
| Home | `index.html` |
| Call for Papers | `call-for-papers.html` |
| Shared Tasks | `shared-tasks.html` |
| Organizers | `organizers.html` |
| Program Committee | `program-committee.html` |
| Invited Speakers | `speakers.html` |
| Program | `program.html` |
| Participants Info | `participants-info.html` |
| Contact | `contact.html` |

Supporting files live in `assets/` (images and `assets/js/runtime.js`).

## Maintenance notes

- Page content lives inside `<template id="page-template">` in each file. Edit the text there.
- Placeholders still to fill are marked `[TBD]` or `[link TBD]`.
- The header and footer are repeated in every file, so a change to the navigation or the footer must be made in all nine pages.
- Dates appear in `index.html`, `call-for-papers.html`, `shared-tasks.html` and this README; keep them in sync.
- Interactive parts (the token-level demo, the research-direction stack, the shared task samples, the paper-fit finder) are driven by the `<script>` block at the bottom of each page plus `assets/js/runtime.js`.

## Preview locally

Open `index.html` in a browser. Everything is static, so no server is needed.

## Deployment

The site is served by [GitHub Pages](https://pages.github.com/) from the `main` branch. Push to `main` and the live site updates on the next build. The `.nojekyll` file keeps Pages from running Jekyll.

## Contact

For general questions, contact Junchao Wu (University of Macau) at [nlp2ct.junchao@gmail.com](mailto:nlp2ct.junchao@gmail.com). Contacts for specific areas are listed on the [Contact page](https://nlp2ct.github.io/COLING-2027-Workshop-AIGCTrustDetect/contact.html).
