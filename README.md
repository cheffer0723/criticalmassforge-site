# Critical Mass Labs

Public register for [Critical Mass Labs](https://criticalmassforge.com), served from GitHub Pages.

The studio name is **Critical Mass Labs**. This site is the public register at **criticalmassforge.com**. Asymmetry is a lab program at [asymmetria.io](https://asymmetria.io/).

## Edit project names and statuses

Ordinary updates live in [`assets/content.js`](assets/content.js). Change a name, status, stage, or link there. You do not need to edit the other JavaScript for those updates.

## Local preview

Serve this directory with any static HTTP server:

```powershell
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Questions form

Visitor notes post to `admin@asymmetria.io` through FormSubmit. The first live submission sends a confirmation email to that mailbox; approve it once so later notes arrive automatically. If the relay is unavailable, the form falls back to the visitor’s mail client.

## Deployment

GitHub Pages serves the root of the `main` branch. The `CNAME` file requests `criticalmassforge.com`.
