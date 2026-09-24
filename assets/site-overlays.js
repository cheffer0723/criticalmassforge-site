(() => {
  const LAB_EMAIL = "chris.heffernan@criticalmasstoken.com";
  const PROJECTS = [
    ["", "General / the lab"],
    ["ASYMMETRY", "01 / ASYMMETRY"],
    ["Obsidian Abyss", "02 / Obsidian Abyss"],
    ["Devolution", "03 / Devolution"],
    ["Deep Stellar", "04 / Deep Stellar"],
    ["Agent Ledger", "05 / Agent Ledger"],
    ["Nexus-Desk", "06 / Nexus-Desk"],
    ["Minos-shield", "07 / Minos-shield"],
    ["The Hexagon", "08 / The Hexagon"],
  ];

  const sectionMarkup = `
    <section class="content-section correspondence-section" id="signal" aria-labelledby="signal-title">
      <div class="section-number" aria-hidden="true">05</div>
      <div class="content-column">
        <div class="section-heading">
          <p class="eyebrow"><span class="eyebrow-line" aria-hidden="true"></span>Questions / comments</p>
          <h2 id="signal-title">Send a note <em>to the lab.</em></h2>
        </div>
        <p class="lead-copy">Ask about a program, flag a correction, or leave a comment. Notes go to the studio mailbox; nothing is posted back onto this page.</p>
        <form class="signal-form" id="signal-form" novalidate>
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
            <select id="signal-project" name="project"></select>
          </div>
          <div class="signal-field signal-field-wide">
            <label for="signal-message">Question / comment</label>
            <textarea id="signal-message" name="message" required maxlength="4000" placeholder="What should the lab know or answer?"></textarea>
          </div>
          <div class="signal-actions">
            <button class="button button-primary" type="submit">Send the note</button>
            <a class="text-link" href="mailto:${LAB_EMAIL}">${LAB_EMAIL}</a>
            <p class="signal-note">Opens your mail client with the note addressed to the lab.</p>
            <p class="signal-status" id="signal-status" role="status" aria-live="polite"></p>
          </div>
        </form>
      </div>
    </section>
  `;

  const setStatus = (text, tone) => {
    const node = document.getElementById("signal-status");
    if (!node) return;
    node.textContent = text;
    node.dataset.tone = tone || "";
  };

  const fillProjectSelect = (select, selected) => {
    if (!select || select.dataset.ready === "true") {
      if (select && selected) select.value = selected;
      return;
    }
    for (const [value, label] of PROJECTS) {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = label;
      select.append(option);
    }
    select.dataset.ready = "true";
    if (selected) select.value = selected;
  };

  const mountSection = () => {
    const footer = document.querySelector(".site-footer");
    if (!footer) return false;
    if (!document.getElementById("signal")) {
      footer.insertAdjacentHTML("beforebegin", sectionMarkup);
    }
    fillProjectSelect(document.getElementById("signal-project"));
    return true;
  };

  const composeMailto = (name, email, project, message) => {
    const regarding = project || "the lab";
    const subject = `Question / comment: ${regarding}`;
    const body = [
      `Name: ${name || "(not given)"}`,
      `Reply-to: ${email}`,
      `Regarding: ${regarding}`,
      "",
      message,
    ].join("\n");
    return `mailto:${LAB_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const bindForm = () => {
    const form = document.getElementById("signal-form");
    if (!form || form.dataset.bound === "true") return;
    form.dataset.bound = "true";
    form.addEventListener("submit", (event) => {
      event.preventDefault();
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

      const href = composeMailto(name, email, project, message);
      setStatus("Opening your mail client with the note.", "ok");
      window.location.href = href;
    });
  };

  const enhanceDialog = () => {
    const dialog = document.getElementById("project-status-dialog");
    const actions = dialog?.querySelector(".dialog-actions");
    if (!actions || actions.querySelector(".dialog-ask-link")) return;

    const title = dialog.querySelector("h2")?.textContent?.trim() || "";
    const ask = document.createElement("a");
    ask.className = "text-link dialog-ask-link";
    ask.href = "#signal";
    ask.textContent = "Ask a question";
    ask.addEventListener("click", (event) => {
      event.preventDefault();
      const close = dialog.querySelector(".dialog-close");
      close?.click();
      const select = document.getElementById("signal-project");
      if (select) {
        const match = PROJECTS.find(([value]) => value && title.includes(value));
        if (match) select.value = match[0];
      }
      document.getElementById("signal")?.scrollIntoView({ behavior: "smooth", block: "start" });
      window.setTimeout(() => document.getElementById("signal-message")?.focus(), 280);
    });
    actions.append(ask);
  };

  const start = () => {
    mountSection();
    bindForm();
    enhanceDialog();

    const root = document.getElementById("root");
    if (!root) return;
    const observer = new MutationObserver(() => {
      mountSection();
      bindForm();
      enhanceDialog();
    });
    observer.observe(root, { childList: true, subtree: true });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
})();
