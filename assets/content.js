/* =============================================================================
   Critical Mass Labs — public register content
   =============================================================================
   This is the file to edit when a project name, status, or link changes.
   You do not need to touch the other code files for ordinary updates.

   After editing, refresh the site. On the live domain, wait a minute for
   GitHub Pages to pick up the change.

   Status vocabulary (keep these words; do not invent new ones):
     Active          — a public or near-public surface exists
     In development  — a defined system is being built
     Research        — investigation, recovery, or early design

   Stage vocabulary:
     Pre-beta, Beta, Beta candidate, In exploration, In build, Listed, Indexed
   ============================================================================= */

window.CML = {
  studio: {
    name: "Critical Mass Labs",
    legal: "Critical Mass Labs LLC",
    domain: "criticalmassforge.com",
    origin: "https://criticalmassforge.com",
    year: "2026",
    email: "admin@asymmetria.io",
    kicker: "Independent research studio / 2026",
    description: "Research and development across systems, privacy, and experimental infrastructure.",
    footerLine: "The studio is Critical Mass Labs. This public register lives at criticalmassforge.com.",
  },

  nav: [
    { label: "Studio", href: "#about" },
    { label: "Atlas", href: "#portfolio" },
    { label: "Materials", href: "#materials" },
    { label: "Questions", href: "#signal" },
  ],

  /* prominence:
       public  — has a URL a visitor can open
       active  — being built or evaluated; no public URL yet
       indexed — on the map; not presented as a live product
  */
  programs: [
    {
      number: "01",
      slug: "asymmetry",
      name: "DEAD DROP",
      mark: "◉",
      accent: "violet",
      description: "Native iOS app for private coordination, in TestFlight beta. The current public surface of Asymmetry.",
      status: "Active",
      stage: "Beta",
      discipline: "Privacy systems",
      link: "https://testflight.apple.com/join/KZcgDpPF",
      linkLabel: "Open TestFlight",
      extraLink: "https://asymmetria.io/",
      extraLinkLabel: "Visit asymmetria.io",
      prominence: "public",
      featured: "asymmetry",
      featuredEyebrow: "Project 01 / Asymmetry",
      featuredTitle: "DEAD DROP native iOS,",
      featuredTitleEm: "now in beta.",
      featuredBody: "A native iOS app in TestFlight beta. This is the current public surface of Asymmetry — a preview, not a claim of App Store listing, audit, or production settlement.",
    },
    {
      number: "02",
      slug: "obsidian-abyss",
      name: "Obsidian Abyss",
      mark: "⌁",
      accent: "violet",
      description: "A dark research environment for simulation, tooling, and cinematic web experiments.",
      status: "Active",
      stage: "Beta",
      discipline: "Simulation + tooling",
      link: "https://obsidianabyss.com/",
      linkLabel: "Visit ObsidianAbyss.com",
      prominence: "public",
      featured: "obsidian",
      featuredEyebrow: "Skunkworks initiative",
      featuredTitle: "Obsidian",
      featuredTitleEm: "abyss.",
      featuredBody: "Now in beta. Exploratory work around systems, simulation, and uncharted questions. The public site is the current window in; it is not a finished product claim.",
    },
    {
      number: "03",
      slug: "devolution",
      name: "Devolution",
      mark: "›_",
      accent: "violet",
      description: "Legacy system recovery reduced to testable decisions, evidence, and rebuild discipline.",
      status: "Research",
      stage: "Indexed",
      discipline: "System recovery",
      prominence: "indexed",
      nextStep: "No public surface yet. Notes can be sent to the lab.",
    },
    {
      number: "04",
      slug: "deep-stellar",
      name: "Deep Stellar",
      mark: "✦",
      accent: "cyan",
      description: "A response framework for memory, candor, and useful next steps.",
      status: "Active",
      stage: "Beta candidate",
      discipline: "Response systems",
      prominence: "active",
      nextStep: "No public surface yet. This remains a bounded evaluation, not a launched product.",
    },
    {
      number: "05",
      slug: "agent-ledger",
      name: "Agent Ledger",
      mark: "▣",
      accent: "violet",
      description: "Durable traces for agent actions, attribution, and accountability.",
      status: "Research",
      stage: "Indexed",
      discipline: "Agent accountability",
      prominence: "indexed",
      nextStep: "No public surface yet. Notes can be sent to the lab.",
    },
    {
      number: "06",
      slug: "nexus-desk",
      name: "Nexus Grid Desk",
      mark: "◇",
      accent: "cyan",
      description: "Operator desk listed as a Railway template. Engine includes Jev as a side indicator — press Ask Jev for one research point of view. Paper only; it does not arm live.",
      status: "Active",
      stage: "Listed",
      discipline: "Operator systems",
      link: "https://railway.com/deploy/nexus-grid-desk",
      linkLabel: "Railway template",
      extraLink: "https://nexus.supersym.xyz/core",
      extraLinkLabel: "Open Engine",
      prominence: "public",
    },
    {
      number: "07",
      slug: "minos-shield",
      name: "Minos-shield",
      mark: "∷",
      accent: "violet",
      description: "Decision-path research for constrained systems, gates, and exits.",
      status: "Active",
      stage: "Beta",
      discipline: "Decision paths",
      prominence: "active",
      nextStep: "In beta. No public surface yet. Work sits with the lab, not on a public product page.",
    },
    {
      number: "08",
      slug: "the-hexagon",
      name: "The Hexagon",
      mark: "⬡",
      accent: "cyan",
      description: "A native iOS app in TestFlight beta: a six-perspective review council for decisions, blind spots, and trade discipline.",
      status: "Active",
      stage: "Beta",
      discipline: "Review systems",
      prominence: "active",
      nextStep: "Native iOS TestFlight beta. The store-signed build is on TestFlight. A public join page is not listed here yet — ask the lab for an invite.",
    },
  ],

  materials: [
    {
      kicker: "Template 01 / Railway",
      title: "Architecture City",
      body: "A listed Railway template: a safety-filtered, repository-derived city view of ASYMMETRY. It preserves orientation without publishing source contents or live-system claims.",
      href: "https://railway.com/deploy/architecture-city",
      linkLabel: "Railway template",
    },
    {
      kicker: "Note 02 / Publication principle",
      title: "Context before volume",
      body: "Public material is released when it can be useful without implying audit, uptime, or production readiness the lab has not demonstrated.",
    },
  ],

  method: [
    ["01", "Observe", "Study the conditions around a problem before deciding what it should become."],
    ["02", "Question", "Test assumptions and follow the edge cases that conventional roadmaps leave behind."],
    ["03", "Build", "Develop careful experiments, then retain what proves useful."],
  ],
};
