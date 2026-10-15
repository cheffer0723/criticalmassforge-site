# Critical Mass Labs

Public register for [Critical Mass Labs](https://criticalmassforge.com), served from GitHub Pages.

The studio name is **Critical Mass Labs**. This site is the public register at **criticalmassforge.com**. Asymmetry is a lab program at [asymmetria.io](https://asymmetria.io/).

## Edit site content

Ordinary content lives in [`assets/content.js`](assets/content.js). Change a project name, status, stage, public link, software card, dated update, mobile beta, or FAQ answer there. You do not need to edit the rendering code for those changes.

Keep the public register factual:

- A dated update needs a verified ISO date and a plain-language statement of what changed.
- A TestFlight entry is a beta surface, not an App Store or production claim.
- A software example must describe work that is actually public or approved for publication.
- Do not describe a partner, client, audit, uptime, or production release unless it has been verified and approved for the register.

## Local preview

Serve this directory with any static HTTP server:

```powershell
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Questions form

Visitor notes post to `admin@asymmetria.io` through FormSubmit. The form has a standard HTML POST action if JavaScript is unavailable; with JavaScript, it uses FormSubmit’s JSON endpoint and falls back to the visitor’s mail client if that request fails. The first live submission sends a confirmation email to that mailbox; approve it once so later notes arrive automatically.

## Deployment

GitHub Pages serves the root of the `main` branch. The `CNAME` file requests `criticalmassforge.com`.
