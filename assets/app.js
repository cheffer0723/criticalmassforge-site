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
  const externalLink = (item, label) =>
    item.href
      ? `<a class="text-link" href="${esc(item.href)}" target="_blank" rel="noreferrer">${esc(label || item.linkLabel)} ${ICON.arrow}</a>`
      : "";

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
        <section class="hero hero-city" aria-labelledby="hero-title">
          <img class="hero-city-image" src="/assets/hero-city-night.jpg" alt="" aria-hidden="true">
          <div class="hero-content">
            <div class="brand hero-brand"><span>${esc(CML.studio.name)}</span></div>
            <p class="hero-kicker">Independent research studio / live index</p>
            <h1 id="hero-title">Off the map.<br><em>On purpose.</em></h1>
            <p class="hero-description">Research, custom software, and practical systems for work that does not fit off the shelf.</p>
            <div class="hero-actions">
              <a class="button button-primary" href="#solutions">Explore software solutions ${ICON.arrow}</a>
              <a class="text-link" href="#portfolio">Open the project atlas ${ICON.arrow}</a>
            </div>
          </div>
          <div class="hero-readout" aria-hidden="true">
            <span>CITY</span><strong>AFTER HOURS</strong>
            <i></i>
            <span>MOVEMENT</span><strong>STREET LEVEL</strong>
          </div>
          <a class="scroll-cue" href="#about"><span>Scroll to explore</span>${ICON.down}</a>
          <div class="hero-coordinate" aria-hidden="true">
            <span class="coordinate-active">01</span>
            <i class="coordinate-dot active"></i>
            <span>Field</span>
          </div>
        </section>

        <section class="content-section about-section" id="about">
          <div class="section-number" aria-hidden="true">01</div>
          <div class="content-column">
            <div class="section-heading">
              <p class="eyebrow"><span class="eyebrow-line" aria-hidden="true"></span>The studio</p>
              <h2>Research-led software for systems <em>beneath the surface.</em></h2>
            </div>
            <p class="lead-copy">${esc(CML.studio.name)} is an independent studio for research, custom software, and experimental infrastructure. We take on particular systems, workflows, and product questions when a generic tool will not do. ${esc(CML.studio.legal)} is the organizational umbrella. This site is the public register, not a promise that every listed experiment is a product.</p>
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

        <section class="solutions-section content-section" id="solutions" aria-labelledby="solutions-title">
          <div class="section-number" aria-hidden="true">02</div>
          <div class="content-column">
            <div class="section-heading">
              <p class="eyebrow"><span class="eyebrow-line" aria-hidden="true"></span>Custom software / software solutions</p>
              <h2 id="solutions-title">Useful software for <em>specific problems.</em></h2>
            </div>
            <p class="lead-copy">Critical Mass Labs pairs system-level thinking with hands-on software work. The point is not a generic digital transformation pitch; it is a system that fits the people, constraints, and decision it is meant to support.</p>
            <div class="solutions-grid">
              ${CML.solutions
                .map(
                  (item, index) => `
                <article class="solution-card ${index === 2 ? "solution-card-featured" : ""}">
                  <p class="solution-kicker">${esc(item.kicker)}</p>
                  <h3>${esc(item.title)}</h3>
                  <p>${esc(item.body)}</p>
                  <ul class="solution-tags" aria-label="Focus areas">
                    ${item.tags.map((tag) => `<li>${esc(tag)}</li>`).join("")}
                  </ul>
                  ${externalLink(item)}
                </article>`
                )
                .join("")}
            </div>
            <aside class="engagement-callout" aria-label="Available engagements">
              <div>
                <p class="solution-kicker">${esc(CML.engagement.kicker)}</p>
                <h3>${esc(CML.engagement.title)}</h3>
              </div>
              <p>${esc(CML.engagement.body)}</p>
              <a class="button button-outline" href="${esc(CML.engagement.href)}" target="_blank" rel="noreferrer">${esc(CML.engagement.linkLabel)} ${ICON.arrow}</a>
            </aside>
          </div>
        </section>

        <section class="atlas-section" id="portfolio">
          <div class="atlas-intro">
            <div class="section-number" aria-hidden="true">03</div>
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

        <section class="protocol-section content-section" id="hold-zero" aria-labelledby="hold-zero-title">
          <div class="section-number" aria-hidden="true">04</div>
          <div class="content-column protocol-intro">
            <div class="section-heading">
              <p class="eyebrow"><span class="eyebrow-line" aria-hidden="true"></span>${esc(CML.holdZero.kicker)}</p>
              <h2 id="hold-zero-title">${esc(CML.holdZero.title)}</h2>
            </div>
            <p class="lead-copy">${esc(CML.holdZero.lead)}</p>
            <p class="protocol-status"><span class="status-dot" aria-hidden="true"></span>${esc(CML.holdZero.status)}</p>
          </div>
          <div class="protocol-principles" aria-label="Hold Zero research principles">
            ${CML.holdZero.principles
              .map(
                (item) => `
              <article class="protocol-principle">
                <span>${esc(item.number)}</span>
                <h3>${esc(item.title)}</h3>
                <p>${esc(item.body)}</p>
              </article>`
              )
              .join("")}
          </div>
          <aside class="protocol-boundary" aria-label="Hold Zero research boundary">
            <p>Research boundary</p>
            <p>${esc(CML.holdZero.boundary)}</p>
          </aside>
        </section>

        <section class="materials-section content-section" id="materials">
          <div class="section-number" aria-hidden="true">05</div>
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

        <section class="updates-section content-section" id="updates" aria-labelledby="updates-title">
          <div class="section-number" aria-hidden="true">06</div>
          <div class="content-column">
            <div class="section-heading">
              <p class="eyebrow"><span class="eyebrow-line" aria-hidden="true"></span>Change log / public record</p>
              <h2 id="updates-title">What changed, <em>and why it matters.</em></h2>
            </div>
            <p class="lead-copy">A dated record of meaningful feature work, fixes, and research milestones. It is intentionally selective: enough context to understand the change without turning this page into a protocol manual or a release promise.</p>
            <ol class="updates-list">
              ${CML.updates
                .map(
                  (item) => `
                <li class="update-item">
                  <div class="update-meta"><time datetime="${esc(item.iso)}">${esc(item.date)}</time><span class="update-type">${esc(item.type)}</span></div>
                  <article>
                    <p class="update-project">${esc(item.project)}</p>
                    <h3>${esc(item.title)}</h3>
                    <p>${esc(item.body)}</p>
                    ${item.href ? `<a class="text-link update-reference" href="${esc(item.href)}" target="_blank" rel="noreferrer">${esc(item.linkLabel)} ${ICON.arrow}</a>` : ""}
                  </article>
                </li>`
                )
                .join("")}
            </ol>
          </div>
        </section>

        <section class="mobile-section content-section" id="mobile" aria-labelledby="mobile-title">
          <div class="section-number" aria-hidden="true">07</div>
          <div class="content-column">
            <div class="section-heading">
              <p class="eyebrow"><span class="eyebrow-line" aria-hidden="true"></span>Mobile apps / TestFlight</p>
              <h2 id="mobile-title">Try the work <em>while it is forming.</em></h2>
            </div>
            <p class="lead-copy">These are the current public iOS beta surfaces. TestFlight beta is not an App Store release, audit, or production availability claim.</p>
            <div class="mobile-apps-grid">
              ${CML.mobileApps
                .map(
                  (app) => `
                <article class="mobile-app-card">
                  <span class="mobile-app-number">${esc(app.number)}</span>
                  <p>${esc(app.program)}</p>
                  <h3>${esc(app.name)}</h3>
                  <p class="mobile-app-body">${esc(app.body)}</p>
                  <a class="button button-outline" href="${esc(app.href)}" target="_blank" rel="noreferrer">Open TestFlight ${ICON.arrow}</a>
                </article>`
                )
                .join("")}
            </div>
            <div class="testflight-steps" aria-label="How to join a TestFlight beta">
              <p>How to join</p>
              <ol><li>Install Apple TestFlight.</li><li>Open the invite for the app you want to try.</li><li>Follow Apple’s on-device instructions for the beta.</li></ol>
            </div>
          </div>
        </section>

        <section class="faq-section content-section" id="faq" aria-labelledby="faq-title">
          <div class="section-number" aria-hidden="true">08</div>
          <div class="content-column">
            <div class="section-heading">
              <p class="eyebrow"><span class="eyebrow-line" aria-hidden="true"></span>Questions / answers</p>
              <h2 id="faq-title">The short version, <em>answered plainly.</em></h2>
            </div>
            <div class="faq-list">
              ${CML.faqs
                .map(
                  (item, index) => `
                <details class="faq-item" ${index === 0 ? "open" : ""}>
                  <summary>${esc(item.question)}<span aria-hidden="true">+</span></summary>
                  <p>${esc(item.answer)}</p>
                </details>`
                )
                .join("")}
            </div>
          </div>
        </section>

        <section class="content-section correspondence-section" id="signal" aria-labelledby="signal-title">
          <div class="section-number" aria-hidden="true">09</div>
          <div class="content-column">
            <div class="section-heading">
              <p class="eyebrow"><span class="eyebrow-line" aria-hidden="true"></span>Questions / comments</p>
              <h2 id="signal-title">Send a note <em>to the lab.</em></h2>
            </div>
            <p class="lead-copy">Ask about a program, flag a correction, or leave a comment. Notes go to ${esc(CML.studio.email)} and are not posted back onto this page.</p>
            <form class="signal-form" id="signal-form" action="https://formsubmit.co/${esc(CML.studio.email)}" method="POST">
              <input type="hidden" name="_subject" value="Question or comment from criticalmassforge.com">
              <input type="hidden" name="_template" value="table">
              <input type="hidden" name="_captcha" value="false">
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

  const startTopologyEngine = () => {
    const hero = root.querySelector(".hero-topology");
    const canvas = root.querySelector(".hero-topology-engine");
    const context = canvas?.getContext("2d");
    if (!hero || !canvas || !context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = { x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 };
    const fragments = Array.from({ length: 18 }, (_, index) => ({
      lane: ((index * 47) % 13) / 12 - 0.5,
      level: ((index * 31) % 11) / 10 - 0.5,
      phase: (index * 0.173) % 1,
      tilt: (index * 0.91) % (Math.PI * 2),
      color: index % 3 === 1 ? "rgba(215, 175, 255, 0.72)" : "rgba(79, 221, 238, 0.66)",
    }));
    let width = 0;
    let height = 0;
    let pixelRatio = 1;
    let frame = 0;

    const resize = () => {
      const bounds = hero.getBoundingClientRect();
      width = Math.max(1, bounds.width);
      height = Math.max(1, bounds.height);
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const gateAt = (depth, focus, sway) => {
      const p = Math.pow(depth, 1.82);
      const halfWidth = width * (0.045 + p * 0.82);
      const halfHeight = height * (0.036 + p * 0.76);
      const skew = (sway + (depth - 0.5) * 0.08) * width;
      return [
        [focus.x - halfWidth + skew, focus.y - halfHeight],
        [focus.x + halfWidth + skew, focus.y - halfHeight * 0.77],
        [focus.x + halfWidth - skew * 0.32, focus.y + halfHeight],
        [focus.x - halfWidth - skew * 0.32, focus.y + halfHeight * 0.83],
      ];
    };

    const path = (points, close = false) => {
      context.beginPath();
      context.moveTo(points[0][0], points[0][1]);
      points.slice(1).forEach((point) => context.lineTo(point[0], point[1]));
      if (close) context.closePath();
    };

    const draw = (clock = 0) => {
      const time = reducedMotion.matches ? 0 : clock * 0.001;
      pointer.x += (pointer.targetX - pointer.x) * 0.045;
      pointer.y += (pointer.targetY - pointer.y) * 0.045;
      const sway = (pointer.x - 0.5) * 0.16;
      const focus = {
        x: width * 0.64 + (pointer.x - 0.5) * width * 0.12 + Math.sin(time * 0.18) * width * 0.012,
        y: height * 0.46 + (pointer.y - 0.5) * height * 0.095 + Math.cos(time * 0.2) * height * 0.009,
      };
      context.clearRect(0, 0, width, height);
      context.save();

      const tunnelGlow = context.createRadialGradient(focus.x, focus.y, 0, focus.x, focus.y, Math.max(width, height) * 0.52);
      tunnelGlow.addColorStop(0, "rgba(174, 118, 255, 0.25)");
      tunnelGlow.addColorStop(0.19, "rgba(44, 206, 229, 0.11)");
      tunnelGlow.addColorStop(0.67, "rgba(22, 35, 93, 0.04)");
      tunnelGlow.addColorStop(1, "rgba(4, 5, 14, 0)");
      context.fillStyle = tunnelGlow;
      context.fillRect(0, 0, width, height);

      // First person route gates: they widen as the viewer moves through the network.
      for (let layer = 0; layer < 14; layer += 1) {
        const depth = ((layer / 14) + time * 0.075) % 1;
        const gate = gateAt(depth, focus, sway);
        const near = Math.pow(depth, 1.7);
        path(gate, true);
        context.strokeStyle = layer % 3 === 0 ? `rgba(193, 153, 255, ${0.1 + near * 0.25})` : `rgba(63, 211, 231, ${0.075 + near * 0.23})`;
        context.lineWidth = 0.55 + near * 1.15;
        context.stroke();

        if (layer % 2 === 0) {
          const nextGate = gateAt(Math.min(1, depth + 0.13), focus, sway);
          [0, 2].forEach((corner) => {
            context.beginPath();
            context.moveTo(gate[corner][0], gate[corner][1]);
            context.lineTo(nextGate[corner][0], nextGate[corner][1]);
            context.strokeStyle = `rgba(103, 166, 239, ${0.07 + near * 0.18})`;
            context.lineWidth = 0.6;
            context.stroke();
          });
        }
      }

      // Web routes become perspective vectors and arrive at the viewer instead of orbiting one point.
      const routes = [
        [-0.44, -0.31], [-0.2, 0.42], [0.04, -0.49], [0.35, -0.25], [0.47, 0.35], [-0.52, 0.13],
      ];
      routes.forEach(([lane, level], index) => {
        const exitX = focus.x + lane * width * 1.34 + sway * width * 0.38;
        const exitY = focus.y + level * height * 1.25;
        const bendX = focus.x + lane * width * 0.28;
        const bendY = focus.y + level * height * 0.2;
        context.beginPath();
        context.moveTo(focus.x, focus.y);
        context.quadraticCurveTo(bendX, bendY, exitX, exitY);
        context.strokeStyle = index % 2 ? "rgba(201, 165, 255, 0.27)" : "rgba(71, 221, 236, 0.25)";
        context.lineWidth = 0.7;
        context.stroke();

        const travel = (time * (0.21 + index * 0.012) + index * 0.19) % 1;
        const packetX = (1 - travel) * (1 - travel) * focus.x + 2 * (1 - travel) * travel * bendX + travel * travel * exitX;
        const packetY = (1 - travel) * (1 - travel) * focus.y + 2 * (1 - travel) * travel * bendY + travel * travel * exitY;
        context.save();
        context.translate(packetX, packetY);
        context.rotate(Math.atan2(exitY - bendY, exitX - bendX));
        context.fillStyle = index % 2 ? "rgba(219, 185, 255, 0.95)" : "rgba(93, 236, 242, 0.92)";
        context.shadowColor = context.fillStyle;
        context.shadowBlur = 17;
        context.fillRect(-9 - travel * 16, -1.1, 18 + travel * 30, 2.2);
        context.restore();
      });

      // Information fragments are structured quadrilaterals, never drifting decorative dots.
      fragments.forEach((fragment, index) => {
        const depth = (fragment.phase + time * (0.095 + (index % 4) * 0.015)) % 1;
        const p = Math.pow(depth, 1.68);
        const x = focus.x + fragment.lane * width * (0.11 + p * 0.96) + sway * width * p;
        const y = focus.y + fragment.level * height * (0.09 + p * 0.86);
        const size = 2 + p * (13 + (index % 3) * 7);
        context.save();
        context.translate(x, y);
        context.rotate(fragment.tilt + time * (index % 2 ? -0.16 : 0.12));
        context.strokeStyle = fragment.color;
        context.globalAlpha = 0.18 + p * 0.7;
        context.lineWidth = 0.75 + p * 0.7;
        context.beginPath();
        context.moveTo(-size * 1.65, -size * 0.5);
        context.lineTo(size * 1.28, -size * 0.82);
        context.lineTo(size * 1.8, size * 0.48);
        context.lineTo(-size * 1.1, size * 0.78);
        context.closePath();
        context.stroke();
        context.restore();
      });

      // At the far end, a thin interference field hints at the quantum scale without becoming an atom.
      for (let wave = 0; wave < 9; wave += 1) {
        const phase = time * (0.75 + wave * 0.06) + wave * 0.87;
        const span = 34 + wave * 15;
        context.beginPath();
        for (let step = -1; step <= 1.05; step += 0.08) {
          const x = focus.x + step * span * 2.4;
          const y = focus.y + Math.sin(step * 9.2 + phase) * (3.2 + wave * 0.45) + (wave - 4) * 3.25;
          if (step <= -1) context.moveTo(x, y);
          else context.lineTo(x, y);
        }
        context.strokeStyle = wave % 2 ? "rgba(215, 174, 255, 0.42)" : "rgba(92, 232, 240, 0.38)";
        context.lineWidth = 0.65;
        context.stroke();
      }

      const farGlow = context.createRadialGradient(focus.x, focus.y, 0, focus.x, focus.y, Math.min(width, height) * 0.17);
      farGlow.addColorStop(0, "rgba(245, 237, 255, 0.9)");
      farGlow.addColorStop(0.08, "rgba(194, 145, 255, 0.76)");
      farGlow.addColorStop(0.23, "rgba(68, 222, 235, 0.32)");
      farGlow.addColorStop(1, "rgba(68, 222, 235, 0)");
      context.fillStyle = farGlow;
      context.beginPath();
      context.arc(focus.x, focus.y, Math.min(width, height) * 0.17, 0, Math.PI * 2);
      context.fill();
      context.restore();

      if (!reducedMotion.matches) frame = window.requestAnimationFrame(draw);
    };

    resize();
    new ResizeObserver(resize).observe(hero);
    hero.addEventListener("pointermove", (event) => {
      const bounds = hero.getBoundingClientRect();
      pointer.targetX = (event.clientX - bounds.left) / bounds.width;
      pointer.targetY = (event.clientY - bounds.top) / bounds.height;
      pointer.active = true;
    }, { passive: true });
    hero.addEventListener("pointerleave", () => {
      pointer.targetX = 0.5;
      pointer.targetY = 0.5;
      pointer.active = false;
    }, { passive: true });
    if (reducedMotion.matches) draw();
    else frame = window.requestAnimationFrame(draw);
    reducedMotion.addEventListener("change", () => {
      window.cancelAnimationFrame(frame);
      draw();
    });
  };

  const startCityTrafficEngine = () => {
    const hero = root.querySelector(".hero-city");
    const image = root.querySelector(".hero-city-image");
    const canvas = root.querySelector(".hero-city-traffic");
    const context = canvas?.getContext("2d");
    if (!hero || !image || !canvas || !context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    // Coordinates are traced against hero-city-night.jpg itself (720 × 1280),
    // then mapped through the exact object-fit crop below. They follow visible streets,
    // not generic screen-space paths.
    const trafficRoutes = [
      { points: [[550, 1235], [542, 1100], [530, 970], [522, 850], [528, 735], [552, 625], [576, 490]], color: "rgba(255, 243, 224, 0.92)", phase: 0.06, speed: 0.16 },
      { points: [[576, 490], [552, 625], [528, 735], [522, 850], [530, 970], [542, 1100], [550, 1235]], color: "rgba(255, 91, 72, 0.74)", phase: 0.42, speed: 0.13 },
      { points: [[290, 1120], [374, 1090], [454, 1060], [525, 1012]], color: "rgba(255, 241, 214, 0.76)", phase: 0.78, speed: 0.1 },
      { points: [[255, 822], [350, 810], [438, 796], [523, 780], [624, 754]], color: "rgba(255, 101, 79, 0.62)", phase: 0.2, speed: 0.09 },
      { points: [[643, 846], [602, 830], [560, 812], [522, 795]], color: "rgba(252, 242, 226, 0.66)", phase: 0.59, speed: 0.11 },
    ];
    let width = 0;
    let height = 0;
    let pixelRatio = 1;
    let animationFrame = 0;

    const resize = () => {
      const box = hero.getBoundingClientRect();
      width = Math.max(1, box.width);
      height = Math.max(1, box.height);
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const cropPoint = ([sourceX, sourceY]) => {
      const imageWidth = image.naturalWidth || 720;
      const imageHeight = image.naturalHeight || 1280;
      const scale = Math.max(width / imageWidth, height / imageHeight);
      const renderedWidth = imageWidth * scale;
      const renderedHeight = imageHeight * scale;
      const [rawX = "50%", rawY = "50%"] = getComputedStyle(image).objectPosition.split(" ");
      const positionX = Number.parseFloat(rawX) / 100 || 0.5;
      const positionY = Number.parseFloat(rawY) / 100 || 0.5;
      return [
        sourceX * scale + (width - renderedWidth) * positionX,
        sourceY * scale + (height - renderedHeight) * positionY,
      ];
    };

    const pointAt = (points, position) => {
      const segments = points.length - 1;
      const scaled = Math.min(position, 0.9999) * segments;
      const index = Math.floor(scaled);
      const progress = scaled - index;
      const start = points[index];
      const end = points[index + 1];
      return cropPoint([
        start[0] + (end[0] - start[0]) * progress,
        start[1] + (end[1] - start[1]) * progress,
      ]);
    };

    const draw = (clock = 0) => {
      const time = reducedMotion.matches ? 0 : clock * 0.001;
      context.clearRect(0, 0, width, height);
      if (reducedMotion.matches) return;
      context.save();
      context.globalCompositeOperation = "screen";

      trafficRoutes.forEach((route, routeIndex) => {
        for (let vehicle = 0; vehicle < 3; vehicle += 1) {
          const head = (route.phase + vehicle * 0.31 + time * route.speed) % 1;
          const tail = Math.max(0, head - 0.042 - vehicle * 0.005);
          const [tailX, tailY] = pointAt(route.points, tail);
          const [headX, headY] = pointAt(route.points, head);
          const gradient = context.createLinearGradient(tailX, tailY, headX, headY);
          gradient.addColorStop(0, "rgba(182, 200, 255, 0)");
          gradient.addColorStop(0.72, route.color.replace(/0\.[0-9]+\)/, "0.22)"));
          gradient.addColorStop(1, route.color);
          context.beginPath();
          context.moveTo(tailX, tailY);
          context.lineTo(headX, headY);
          context.strokeStyle = gradient;
          context.lineWidth = routeIndex < 2 ? 1.55 : 0.9;
          context.shadowColor = route.color;
          context.shadowBlur = routeIndex < 2 ? 12 : 7;
          context.stroke();
          context.shadowBlur = 0;
        }
      });
      context.restore();
      animationFrame = window.requestAnimationFrame(draw);
    };

    const visibility = () => {
      if (document.hidden) window.cancelAnimationFrame(animationFrame);
      else {
        window.cancelAnimationFrame(animationFrame);
        animationFrame = window.requestAnimationFrame(draw);
      }
    };

    resize();
    animationFrame = window.requestAnimationFrame(draw);
    window.addEventListener("resize", resize, { passive: true });
    document.addEventListener("visibilitychange", visibility);
  };

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
