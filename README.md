# AIGCTrustDetect @ COLING 2027

Website of the 1st Workshop on AI-Generated Content Detection and Trustworthy Governance.

Plain static site: no build step. Every page is one HTML file in this folder.

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

## Editing

Page content lives inside `<template id="page-template">` in each file. Edit the text there.
Placeholders still to fill are marked `[TBD]` or `[link TBD]`.

The header and footer are repeated in every file, so a change to the navigation must be made in all nine.

Interactive parts (Figure 1, the research-direction stack, the examples, the paper-fit finder, the shared task samples)
are driven by the `<script>` block at the bottom of each page plus `assets/js/runtime.js`.

## Preview locally

Open `index.html` in a browser. Everything is static, so no server is needed.
