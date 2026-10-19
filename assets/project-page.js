(() => {
  const { CML } = window;
  const root = document.querySelector("#root");
  const slug = document.body.dataset.project;
  const project = CML?.orbitProjects?.find((item) => item.slug === slug);
  const esc = (value) => String(value ?? "").replace(/[&<>\"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[character]));
  const arrow = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg>';

  if (!project) {
    document.title = "Project not found — Critical Mass Labs";
    root.innerHTML = `<main class="project-page project-page-missing"><a class="project-back" href="/#project-field">← Return to the project field</a><p class="project-kicker">Public register</p><h1>That coordinate is not listed.</h1></main>`;
    return;
  }

  document.title = `${project.name} — Critical Mass Labs`;
  const external = project.link
    ? `<a class="project-button project-button-primary" href="${esc(project.link)}" target="_blank" rel="noreferrer">${esc(project.linkLabel)} ${arrow}</a>`
    : `<a class="project-button project-button-primary" href="/#signal">Ask about this project ${arrow}</a>`;
  const extra = project.extraLink
    ? `<a class="project-button project-button-secondary" href="${esc(project.extraLink)}" target="_blank" rel="noreferrer">${esc(project.extraLinkLabel)} ${arrow}</a>`
    : "";
  root.innerHTML = `
    <main class="project-page" id="top">
      <header class="project-header">
        <a class="project-mark" href="/" aria-label="Critical Mass Labs home"><img src="/critical-mass-labs-mark.png" alt=""></a>
        <a class="project-back" href="/#project-field">← Return to the project field</a>
      </header>
      <section class="project-record" aria-labelledby="project-title">
        <p class="project-kicker">Project field / ${esc(project.number)} coordinate</p>
        <div class="project-title-row"><h1 id="project-title">${esc(project.name)}</h1><p>${esc(project.stage)}</p></div>
        <p class="project-discipline">${esc(project.discipline)}</p>
        <div class="project-copy">
          <p class="project-summary">${esc(project.summary)}</p>
          <p>${esc(project.description)}</p>
        </div>
        <dl class="project-facts"><div><dt>Current public surface</dt><dd>${esc(project.availability)}</dd></div><div><dt>Register boundary</dt><dd>This page records the current public route. It is not an audit, uptime, or production-readiness claim.</dd></div></dl>
        <div class="project-actions">${external}${extra}</div>
      </section>
      <footer class="project-footer"><span>Critical Mass Labs / public register</span><a href="/#project-field">All eight coordinates</a></footer>
    </main>`;
})();
