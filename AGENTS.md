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
- The hero now uses the owner-supplied black-and-white city photograph at `assets/hero-city-night.jpg` as a static visual anchor. No canvas, light trail, or other animated hero overlay is mounted. Portrait rules hide the desktop HUD/coordinate labels even when an in-app iPhone browser exposes a desktop-width CSS viewport. No hero card obscures the image. Local visual checks covered desktop and 430×932 portrait; the mobile headline holds to its intended two lines. The owner has not yet visually accepted this replacement.
- The hero typography is now deliberately quieter than the site's older Orbitron-led display treatment: the city photograph is the spectacle; `Critical Mass Labs` is a compact mono label; the two-line, sentence-case headline uses the existing neutral sans; and the former desktop HUD labels are absent. The CTA glow animation is disabled for this hero. Local screenshots at desktop and 430×932 portrait show the headline in two lines without horizontal overflow. The owner has not yet accepted this typography direction.
- The public change log lives at `#updates`. Its first four entries are based on verified repository history: three Dead Drop fixes/reliability changes from 2026-10-15/16, and the public Hold Zero vector/fuzzing milestone from 2026-10-04. The public wording is deliberately bounded.
- The Atlas is still five entries, pending an owner decision on which activity-backed projects should make the final eight. The current likely candidates previously discussed are The Repository, Asymmetry City, and Hold Zero research; do not add them silently.
- The `C:\Users\DUNAMIS\Desktop\3D_ANIMATE_STARTERS` review is read-only. No downloaded code, model, font, still, or video has been copied into this repository or deployed.

## Decision log

- 2026-10-17: Removed the redundant one-card “Also in motion” rail and the duplicate Obsidian full-width panel. Flow is now studio → software → Atlas → featured Dead Drop → Hold Zero → materials → change log → mobile → FAQ → contact.
- 2026-10-16: Replaced the original flat hero movement with a canvas-driven signal field, and normalized desktop content alignment after the owner identified visible offset/layout errors.
- 2026-10-16: Replaced generic Updates with a dated, project-labelled public change log. The Hold Zero item states clearly that test hardening is not audit certification or a security guarantee.
- 2026-10-16: Removed Devolution, Deep Stellar, and Agent Ledger from the public Atlas; remaining rows were renumbered 01–05.
- 2026-10-17: Audited `C:\Users\DUNAMIS\Desktop\3D_ANIMATE_STARTERS` (eight archives; 6,995 local files). Treat Framer Motion Showcase source as license-unresolved because its README and package metadata disagree and the archive has no license file. Treat PhysX-Anything as non-commercial. HyperFrames and O3DE are not website-runtime dependencies; consider them only as offline production/prototyping tools after a specific, license-reviewed use is selected.
- 2026-10-17: Replaced the aperture-image hero with an original canvas first-person route tunnel. The owner’s supplied visual brief is the constraint: travel through the World Wide Web toward an abstract quantum-scale signal, using a technical, kinetic energy inspired by the era of *Johnny Mnemonic* (1995), not copied material. It uses expanding route gates, packet trails, information fragments, interference waves, and pointer parallax rather than atom-like orbit paths. Keep it asset-free and do not claim owner acceptance until the deployed mobile pass is reviewed.
- 2026-10-17: The owner rejected the first-person route tunnel as elementary. Replaced it with their supplied 720×1280 city photograph (`hero-city-night.jpg`) rather than generating or importing a substitute. The supported motion is deliberately bounded: subtle canvas traffic-light trails on city routes, with no motion under reduced-motion preference. Do not refer to this as a 3D city simulation or claim the traces exactly map to real streets.
- 2026-10-17: Corrected the city-hero traffic implementation after the owner identified floating paths on iPhone. Routes are now traced against visible street geometry in the source photograph and remapped to the image's responsive crop; portrait layout suppresses the desktop readout and coordinate overlays. The route mapping is an authored visual approximation of visible streets, not geospatial navigation data.
- 2026-10-17: The owner chose a static city hero. Removed the mounted traffic canvas and its invocation; no hero movement should remain.
- 2026-10-18: Reviewed `cheffer0723/repository-hero-replit` before revising the org-site hero. Its real-time Three.js/GSAP film architecture is intentionally not imported: it is disproportionate for this static public register. Applied its transferable restraint instead—separate typographic hierarchy from visual spectacle, use a compact mono register voice, and remove decorative HUD/animated-glow treatment. This is a visual experiment pending owner review.
- 2026-10-17: The starter audit found actual third-party agent tooling: HyperFrames includes a Codex plugin and changelog-video skill; Oh My Design includes a Codex plugin and MCP configuration; Framer Motion Skills includes a Claude/Cursor motion plugin. None was installed or executed. Any candidate needs a separate provenance, compatibility, and scope review before installation.
