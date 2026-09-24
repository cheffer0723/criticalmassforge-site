(() => {
  const CML = window.CML;
  if (!CML) return;

  const root = document.getElementById("root");
  const ICON = {
    arrow: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg>',
    down: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>',
    up: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><path d="M12 19V5"/><path d="m5 12 7-7 7 7"/></svg>',
    ext: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>',
    x: '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
    menu: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  };

  const esc = (value) =>
    String(value ?? "").replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    }[char]));

  const programBySlug = (slug) => CML.programs.find((program) => program.slug === slug);
  const featured = (key) => CML.programs.find((program) => program.featured === key);
  const moving = CML.programs.filter((program) => program.prominence === "active");

  const navLinks = (mobile) =>
    CML.nav
      .map(
        (item, index) =>
          mobile
            ? `<a href="${esc(item.href)}"><span>0${index + 1}</span>${esc(item.label)}${ICON.arrow}</a>`
            : `<a href="${esc(item.href)}">${esc(item.label)}</a>`
      )
      .join("");

  const childChips = (program) => {
    if (!program.children?.length) return "";
    return `<div class="featured-subprojects">${program.children
      .map((child) => {
        const inner = `<b>⌾</b> ${esc(child.name)} <small>${esc(child.stage)}</small>`;
        return child.href
          ? `<a href="${esc(child.href)}" target="_blank" rel="noreferrer">${inner}</a>`
          : `<span>${inner}</span>`;
      })
      .join("")}</div>`;
  };

  const asymmetry = featured("asymmetry");
  const obsidian = featured("obsidian");

  root.innerHTML = `
    <div class="site-shell" id="top">
      <a class="skip-link" href="#main">Skip to content</a>
      <header class="site-header">
        <a class="brand" href="#top" aria-label="${esc(CML.studio.name)} home">
          <img class="brand-mark" src="/critical-mass-labs-mark.png" alt="" aria-hidden="true">
        </a>
        <nav class="desktop-nav" aria-label="Primary navigation">
          ${navLinks(false)}
          <span class="system-state"><span class="status-dot" aria-hidden="true"></span>Register / ${esc(CML.studio.year)}</span>
        </nav>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-navigation">
          <span class="sr-only">Open navigation</span>
          ${ICON.menu}
        </button>
      </header>
      <div class="mobile-nav-backdrop" aria-hidden="true"></div>
      <nav id="mobile-navigation" class="mobile-nav" aria-label="Mobile navigation" aria-hidden="true">
        <div class="mobile-nav-head">
          <span>Navigation / Index</span>
          <span class="system-state"><span class="status-dot" aria-hidden="true"></span>Register</span>
        </div>
        ${navLinks(true)}
      </nav>
      <main id="main" tabindex="-1">
        <section class="hero" aria-labelledby="hero-title">
          <div class="hero-grid" aria-hidden="true"></div>
          <img class="hero-ai-face" src="/hero-ai-face.jpeg" alt="" aria-hidden="true">
          <div class="hero-content">
            <div class="brand hero-brand"><span>${esc(CML.studio.name)}</span></div>
            <p class="hero-kicker">${esc(CML.studio.kicker)}</p>
            <h1 id="hero-title">Off the map.<br><em>On purpose.</em></h1>
            <p class="hero-description">Research and development across systems,<br class="desktop-only"> privacy, and experimental infrastructure.</p>
            <div class="hero-actions">
              <a class="button button-primary" href="#portfolio">Open the atlas ${ICON.arrow}</a>
              <a class="text-link" href="#materials">Public materials ${ICON.arrow}</a>
            </div>
          </div>
          <a class="scroll-cue" href="#about"><span>Scroll to explore</span>${ICON.down}</a>
          <div class="hero-coordinate" aria-hidden="true">
            <span class="coordinate-active">01</span>
            <i class="coordinate-dot active"></i>
            <span>Entry</span>
          </div>
        </section>

        <section class="content-section about-section" id="about">
          <div class="section-number" aria-hidden="true">01</div>
          <div class="content-column">
            <div class="section-heading">
              <p class="eyebrow"><span class="eyebrow-line" aria-hidden="true"></span>The studio</p>
              <h2>A studio for the systems <em>beneath the surface.</em></h2>
            </div>
            <p class="lead-copy">${esc(CML.studio.name)} is an independent research studio exploring emerging systems and experimental infrastructure, with care for privacy and long-term consequences. ${esc(CML.studio.legal)} is the organizational umbrella. This site is the public register, not a product storefront.</p>
          </div>
          <div class="content-column method-content" id="method">
            <div class="method-grid">
              ${CML.method
                .map(
                  ([number, title, body]) => `
                <article class="method-card">
                  <span class="method-number">${esc(number)}</span>
                  <h3>${esc(title)}</h3>
                  <p>${esc(body)}</p>
                </article>`
                )
                .join("")}
            </div>
          </div>
        </section>

        <section class="atlas-section" id="portfolio">
          <div class="atlas-intro">
            <div class="section-number" aria-hidden="true">02</div>
            <div class="section-heading">
              <p class="eyebrow"><span class="eyebrow-line" aria-hidden="true"></span>Project atlas / ${String(CML.programs.length).padStart(2, "0")} coordinates</p>
              <h2>A field, <em>mapped.</em></h2>
            </div>
            <p>Each coordinate is a program. The stage on the row is the current public status. Open an entry for the next honest step — a live link, or a clear note that none exists yet.</p>
          </div>
          <div class="atlas-list" aria-label="Project atlas">
            ${CML.programs
              .map(
                (program) => `
              <button type="button" class="atlas-row is-${esc(program.prominence)}" data-slug="${esc(program.slug)}" aria-haspopup="dialog" aria-controls="project-status-dialog">
                <span class="atlas-number">${esc(program.number)}</span>
                <span class="atlas-mark accent-${esc(program.accent)}" aria-hidden="true">${esc(program.mark)}</span>
                <span class="atlas-name">${esc(program.name)}</span>
                <span class="atlas-stage">${esc(program.stage)}</span>
                <span class="atlas-action">View status ${ICON.arrow}</span>
              </button>`
              )
              .join("")}
          </div>
        </section>

        ${
          moving.length
            ? `<section class="active-rail" aria-label="Programs in motion">
          <div class="active-rail-intro">
            <p class="eyebrow"><span class="eyebrow-line" aria-hidden="true"></span>Also in motion</p>
            <p>These programs are being built or evaluated. They are not silent, and they are not public products yet.</p>
          </div>
          <div class="active-rail-grid">
            ${moving
              .map(
                (program) => `
              <article class="active-rail-card">
                <span>${esc(program.number)} / ${esc(program.stage)}</span>
                <h3>${esc(program.name)}</h3>
                <p>${esc(program.description)}</p>
                <button class="card-status-link" type="button" data-slug="${esc(program.slug)}" aria-haspopup="dialog" aria-controls="project-status-dialog">Open status ${ICON.arrow}</button>
              </article>`
              )
              .join("")}
          </div>
        </section>`
            : ""
        }

        ${
          asymmetry
            ? `<section class="featured-project" aria-labelledby="featured-title">
          <div class="featured-art" aria-hidden="true"></div>
          <div class="featured-copy">
            <p class="eyebrow"><span class="eyebrow-line" aria-hidden="true"></span>${esc(asymmetry.featuredEyebrow)}</p>
            <h2 id="featured-title">${esc(asymmetry.featuredTitle)} <em>${esc(asymmetry.featuredTitleEm)}</em></h2>
            <p>${esc(asymmetry.featuredBody)}</p>
            <div class="featured-actions">
              <a class="button button-outline" href="${esc(asymmetry.link)}" target="_blank" rel="noreferrer">${esc(asymmetry.linkLabel)} ${ICON.arrow}</a>
              ${
                asymmetry.extraLink
                  ? `<a class="text-link" href="${esc(asymmetry.extraLink)}" target="_blank" rel="noreferrer">${esc(asymmetry.extraLinkLabel)} ${ICON.arrow}</a>`
                  : ""
              }
            </div>
            ${childChips(asymmetry)}
          </div>
        </section>`
            : ""
        }

        ${
          obsidian
            ? `<section class="featured-project obsidian-feature">
          <div class="featured-art obsidian-art" aria-hidden="true"></div>
          <div class="featured-copy">
            <p class="eyebrow"><span class="eyebrow-line" aria-hidden="true"></span>${esc(obsidian.featuredEyebrow)}</p>
            <h2>${esc(obsidian.featuredTitle)} <em>${esc(obsidian.featuredTitleEm)}</em></h2>
            <p>${esc(obsidian.featuredBody)}</p>
            <div class="featured-actions">
              <button class="button button-outline" type="button" data-slug="${esc(obsidian.slug)}" aria-haspopup="dialog" aria-controls="project-status-dialog">Open project status ${ICON.arrow}</button>
              <a class="text-link" href="${esc(obsidian.link)}" target="_blank" rel="noreferrer">${esc(obsidian.linkLabel)} ${ICON.arrow}</a>
            </div>
          </div>
        </section>`
            : ""
        }

        <section class="materials-section content-section" id="materials">
          <div class="section-number" aria-hidden="true">03</div>
          <div class="content-column">
            <div class="section-heading">
              <p class="eyebrow"><span class="eyebrow-line" aria-hidden="true"></span>Public materials / open register</p>
              <h2>A record kept <em>deliberately small.</em></h2>
            </div>
            <p class="lead-copy">Selected notes and filtered snapshots appear here when they can be shared with useful context and appropriate restraint.</p>
            <div class="materials-list">
              ${CML.materials
                .map(
                  (item) => `
                <article class="${item.href ? "material-link-card" : ""}">
                  <span>${esc(item.kicker)}</span>
                  <h3>${esc(item.title)}</h3>
                  <p>${esc(item.body)}</p>
                  ${item.href ? `<a class="text-link" href="${esc(item.href)}" target="_blank" rel="noreferrer">${esc(item.linkLabel)} ${ICON.arrow}</a>` : ""}
                </article>`
                )
                .join("")}
            </div>
          </div>
        </section>

        <section class="content-section correspondence-section" id="signal" aria-labelledby="signal-title">
          <div class="section-number" aria-hidden="true">04</div>
          <div class="content-column">
            <div class="section-heading">
              <p class="eyebrow"><span class="eyebrow-line" aria-hidden="true"></span>Questions / comments</p>
              <h2 id="signal-title">Send a note <em>to the lab.</em></h2>
            </div>
            <p class="lead-copy">Ask about a program, flag a correction, or leave a comment. Notes go to ${esc(CML.studio.email)} and are not posted back onto this page.</p>
            <form class="signal-form" id="signal-form" novalidate>
              <div class="signal-field signal-honey" aria-hidden="true">
                <label for="signal-company">Company</label>
                <input id="signal-company" name="_honey" type="text" tabindex="-1" autocomplete="off">
              </div>
              <div class="signal-field">
                <label for="signal-name">Name</label>
                <input id="signal-name" name="name" type="text" autocomplete="name" maxlength="120" placeholder="Optional">
              </div>
              <div class="signal-field">
                <label for="signal-email">Reply address</label>
                <input id="signal-email" name="email" type="email" autocomplete="email" maxlength="160" placeholder="you@domain" required>
              </div>
              <div class="signal-field signal-field-wide">
                <label for="signal-project">Regarding</label>
                <select id="signal-project" name="project">
                  <option value="">General / the lab</option>
                  ${CML.programs.map((program) => `<option value="${esc(program.name)}">${esc(program.number)} / ${esc(program.name)}</option>`).join("")}
                </select>
              </div>
              <div class="signal-field signal-field-wide">
                <label for="signal-message">Question / comment</label>
                <textarea id="signal-message" name="message" required maxlength="4000" placeholder="What should the lab know or answer?"></textarea>
              </div>
              <div class="signal-actions">
                <button class="button button-primary" type="submit">Send the note</button>
                <a class="text-link" href="mailto:${esc(CML.studio.email)}">${esc(CML.studio.email)}</a>
                <p class="signal-note">Delivered to the studio mailbox. Nothing is published here.</p>
                <p class="signal-status" id="signal-status" role="status" aria-live="polite"></p>
              </div>
            </form>
          </div>
        </section>
      </main>
      <footer class="site-footer">
        <div class="footer-brand">
          <a class="brand" href="#top" aria-label="Return to the top">
            <img class="brand-mark" src="/critical-mass-labs-mark.png" alt="" aria-hidden="true">
            <span>${esc(CML.studio.name)}</span>
          </a>
          <p>${esc(CML.studio.footerLine)}</p>
        </div>
        <div class="footer-meta">
          <span>Public register / ${esc(CML.studio.year)}</span>
          <a href="/privacy.html">Privacy</a>
          <a href="https://asymmetria.io/privacy" target="_blank" rel="noreferrer">Asymmetry privacy</a>
          <a href="#top">Return to signal ${ICON.down}</a>
        </div>
      </footer>
    </div>
  `;

  const menuButton = root.querySelector(".menu-toggle");
  const mobileNav = root.querySelector("#mobile-navigation");
  const backdrop = root.querySelector(".mobile-nav-backdrop");
  const dialogLayer = document.createElement("div");
  let lastFocus = null;
  let openProgram = null;

  const setMenu = (open) => {
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.innerHTML = `<span class="sr-only">${open ? "Close navigation" : "Open navigation"}</span>${open ? ICON.x : ICON.menu}`;
    mobileNav.classList.toggle("is-open", open);
    backdrop.classList.toggle("is-open", open);
    mobileNav.setAttribute("aria-hidden", String(!open));
    mobileNav.querySelectorAll("a").forEach((link) => {
      link.tabIndex = open ? 0 : -1;
    });
    if (open) mobileNav.querySelector("a")?.focus();
    else menuButton.focus();
  };

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.tabIndex = -1;
    link.addEventListener("click", () => setMenu(false));
  });
  menuButton.addEventListener("click", () => setMenu(menuButton.getAttribute("aria-expanded") !== "true"));
  backdrop.addEventListener("click", () => setMenu(false));

  const closeDialog = () => {
    openProgram = null;
    dialogLayer.remove();
    document.body.classList.remove("dialog-open");
    lastFocus?.focus();
  };

  const focusables = (node) =>
    Array.from(node.querySelectorAll('button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));

  const openDialog = (program, trigger) => {
    lastFocus = trigger || document.activeElement;
    openProgram = program;
    document.body.classList.add("dialog-open");
    const extra = program.extraLink
      ? `<a class="text-link" href="${esc(program.extraLink)}" target="_blank" rel="noreferrer">${esc(program.extraLinkLabel)} ${ICON.ext}</a>`
      : "";
    const action = program.link
      ? `<a class="button button-primary" href="${esc(program.link)}" target="_blank" rel="noreferrer">${esc(program.linkLabel)} ${ICON.ext}</a>${extra}`
      : `<span class="dialog-note">${esc(program.nextStep || "No public surface yet.")}</span>`;
    dialogLayer.className = "dialog-layer";
    dialogLayer.innerHTML = `
      <button class="dialog-backdrop" type="button" aria-label="Close project status"></button>
      <div id="project-status-dialog" class="status-dialog" role="dialog" aria-modal="true" aria-labelledby="${esc(program.slug)}-dialog-title" aria-describedby="project-status-dialog-description">
        <div class="dialog-topline">
          <span>Coordinate ${esc(program.number)} / Project status</span>
          <button class="dialog-close" type="button" aria-label="Close project status">${ICON.x}</button>
        </div>
        <div class="dialog-mark accent-${esc(program.accent)}" aria-hidden="true">${esc(program.mark)}</div>
        <h2 id="${esc(program.slug)}-dialog-title">${esc(program.name)}</h2>
        <p class="dialog-description" id="project-status-dialog-description">${esc(program.description)}</p>
        <dl class="dialog-details">
          <div><dt>Register status</dt><dd>${esc(program.status)}</dd></div>
          <div><dt>Current stage</dt><dd>${esc(program.stage)}</dd></div>
          <div><dt>Area of work</dt><dd>${esc(program.discipline)}</dd></div>
        </dl>
        <div class="dialog-actions">
          ${action}
          <button class="text-link" type="button" data-close>Return to index ${ICON.arrow}</button>
          <a class="text-link dialog-ask-link" href="#signal">Ask a question</a>
        </div>
      </div>
    `;
    document.body.append(dialogLayer);
    const dialog = dialogLayer.querySelector("#project-status-dialog");
    focusables(dialog)[0]?.focus();

    const onKey = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeDialog();
        return;
      }
      if (event.key !== "Tab") return;
      const items = focusables(dialog);
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    dialogLayer.addEventListener("keydown", onKey);
    dialogLayer.querySelector(".dialog-backdrop").addEventListener("click", closeDialog);
    dialogLayer.querySelector(".dialog-close").addEventListener("click", closeDialog);
    dialogLayer.querySelector("[data-close]").addEventListener("click", closeDialog);
    dialogLayer.querySelector(".dialog-ask-link").addEventListener("click", (event) => {
      event.preventDefault();
      const name = program.name;
      closeDialog();
      const select = document.getElementById("signal-project");
      if (select) select.value = name;
      document.getElementById("signal")?.scrollIntoView({ behavior: "smooth", block: "start" });
      window.setTimeout(() => document.getElementById("signal-message")?.focus(), 280);
    });
  };

  root.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-slug]");
    if (!trigger) return;
    const program = programBySlug(trigger.dataset.slug);
    if (program) openDialog(program, trigger);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      event.preventDefault();
      setMenu(false);
    }
  });

  const setStatus = (text, tone) => {
    const node = document.getElementById("signal-status");
    if (!node) return;
    node.textContent = text;
    node.dataset.tone = tone || "";
  };

  const form = document.getElementById("signal-form");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const honey = String(form.elements._honey.value || "").trim();
    if (honey) return;
    const name = String(form.elements.name.value || "").trim();
    const email = String(form.elements.email.value || "").trim();
    const project = String(form.elements.project.value || "").trim();
    const message = String(form.elements.message.value || "").trim();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("Add a reply address so the lab can respond.", "error");
      form.elements.email.focus();
      return;
    }
    if (message.length < 8) {
      setStatus("Write a little more so the note can be understood.", "error");
      form.elements.message.focus();
      return;
    }

    const regarding = project || "the lab";
    const payload = {
      name: name || "(not given)",
      email,
      project: regarding,
      message,
      _subject: `Question / comment: ${regarding}`,
      _template: "table",
      _captcha: "false",
    };

    setStatus("Sending the note…", "ok");
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CML.studio.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("submit failed");
      form.reset();
      setStatus("The note was sent to the studio mailbox.", "ok");
    } catch (error) {
      const subject = `Question / comment: ${regarding}`;
      const body = [`Name: ${name || "(not given)"}`, `Reply-to: ${email}`, `Regarding: ${regarding}`, "", message].join("\n");
      setStatus("The direct send did not complete. Opening your mail client instead.", "error");
      window.location.href = `mailto:${CML.studio.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
  });
})();
