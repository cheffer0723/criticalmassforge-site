# Critical Mass Forge — shared working record

## Working rules

- Do not lie. State what was verified, what is inferred, and what still needs a visual or owner review.
- Read `C:\Users\DUNAMIS\.claude\CLAUDE.md` and this file before changing the site.
- GitHub `main` is the source of truth. Fetch and check ahead/behind before trusting the local checkout.
- Push each validated iteration to `main`; GitHub Pages deploys it to `https://criticalmassforge.com/` for mobile review.
- Only one agent edits this repository at a time.
- Keep Hold Zero and Dead Drop public copy high level. Never turn the org site into a protocol specification, implementation guide, audit claim, or production-security promise.

## Current state — 2026-10-17

- The site is a static HTML/CSS/JS GitHub Pages site. `index.html` loads `assets/content.js`, which owns public copy and the project register; `assets/app.js` renders the page and interaction; `assets/register.css` carries the public-register presentation layer.
- The current public Atlas is intentionally limited to five entries: DEAD DROP, Obsidian Abyss, Nexus Grid Desk, MINOS Shield, and The Hexagon. Devolution, Deep Stellar, and Agent Ledger were removed because they were not backed by the activity review.
- The hero uses `hero-field-aperture-v3.png` plus the canvas field engine in `assets/app.js`. The old drifting-dot/card composition was removed. It has had an in-app browser desktop/mobile spot check, but the owner has not yet visually accepted it.
- The public change log lives at `#updates`. Its first four entries are based on verified repository history: three Dead Drop fixes/reliability changes from 2026-10-15/16, and the public Hold Zero vector/fuzzing milestone from 2026-10-04. The public wording is deliberately bounded.
- The Atlas is still five entries, pending an owner decision on which activity-backed projects should make the final eight. The current likely candidates previously discussed are The Repository, Asymmetry City, and Hold Zero research; do not add them silently.
- The `C:\Users\DUNAMIS\Desktop\3D_ANIMATE_STARTERS` review is read-only. No downloaded code, model, font, still, or video has been copied into this repository or deployed.

## Decision log

- 2026-10-17: Removed the redundant one-card “Also in motion” rail and the duplicate Obsidian full-width panel. Flow is now studio → software → Atlas → featured Dead Drop → Hold Zero → materials → change log → mobile → FAQ → contact.
- 2026-10-16: Replaced the original flat hero movement with a canvas-driven signal field, and normalized desktop content alignment after the owner identified visible offset/layout errors.
- 2026-10-16: Replaced generic Updates with a dated, project-labelled public change log. The Hold Zero item states clearly that test hardening is not audit certification or a security guarantee.
- 2026-10-16: Removed Devolution, Deep Stellar, and Agent Ledger from the public Atlas; remaining rows were renumbered 01–05.
- 2026-10-17: Audited `C:\Users\DUNAMIS\Desktop\3D_ANIMATE_STARTERS` (eight archives; 6,995 local files). Treat Framer Motion Showcase source as license-unresolved because its README and package metadata disagree and the archive has no license file. Treat PhysX-Anything as non-commercial. HyperFrames and O3DE are not website-runtime dependencies; consider them only as offline production/prototyping tools after a specific, license-reviewed use is selected.
