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
    description: "Research, custom software, and experimental infrastructure for difficult systems.",
    footerLine: "The studio is Critical Mass Labs. This public register lives at criticalmassforge.com.",
  },

  nav: [
    { label: "Studio", href: "#about" },
    { label: "Projects", href: "#portfolio" },
    { label: "Software", href: "#solutions" },
    { label: "Research", href: "#hold-zero" },
    { label: "Updates", href: "#updates" },
    { label: "Mobile beta", href: "#mobile" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#signal" },
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
      link: "https://testflight.apple.com/join/G59bJtwQ",
      linkLabel: "Open TestFlight",
      prominence: "public",
    },
  ],

  solutions: [
    {
      kicker: "Custom software",
      title: "Built around the system you actually have.",
      body: "Critical Mass Labs designs and builds custom software and software solutions for teams and founders with particular workflows, difficult systems, or product ideas that do not fit an off-the-shelf tool.",
      tags: ["Custom web systems", "Product and workflow design", "Software solutions"],
    },
    {
      kicker: "Research to software",
      title: "From a hard question to a usable system.",
      body: "Research and practical delivery live together here: understand the conditions, build the smallest useful system, and leave a clear next step instead of a vague prototype.",
      tags: ["System mapping", "Prototypes", "Technical direction"],
    },
    {
      kicker: "Architecture City",
      title: "A repository, made navigable.",
      body: "Architecture City is a public systems experiment: a safety-filtered, repository-derived city view for ASYMMETRY. It is an example of making a complex codebase easier to orient around without exposing source contents or inventing live-system claims.",
      tags: ["Repository visualization", "Safe publication", "Systems orientation"],
      href: "https://railway.com/deploy/architecture-city",
      linkLabel: "Explore the template",
    },
  ],

  engagement: {
    kicker: "Upwork profile",
    title: "A secondary route for defined work.",
    body: "Use the studio’s Upwork profile when that platform is the right fit for an initial conversation about a clearly defined software engagement.",
    href: "https://www.upwork.com/freelancers/~01c08e72fb4c2ecab7?mp_source=share",
    linkLabel: "View the studio profile on Upwork",
  },

  holdZero: {
    kicker: "Privacy research / Dead Drop",
    title: "Hold Zero begins before a message exists.",
    lead: "Hold Zero is a named research implementation for Dead Drop’s first-contact path. Its purpose is to make the moment two people establish a private line more deliberate: verify the contact material, keep the first exchange bounded, then move the conversation into a ratchet session.",
    status: "Research implementation / beta-bound",
    principles: [
      {
        number: "01",
        title: "Hybrid first contact",
        body: "The first exchange uses HZ-25519-761: X25519 together with sntrup761. The hybrid result seeds the session rather than treating a long-lived key as the whole conversation.",
      },
      {
        number: "02",
        title: "A code is not blind trust",
        body: "A contact code carries a fingerprint of the contact’s post-quantum key. The full key is fetched through the mixnet shelf and must match that fingerprint before first contact proceeds.",
      },
      {
        number: "03",
        title: "Ratchet after the introduction",
        body: "A successful hello and reply seed the Double Ratchet. Later notes use the ratchet session instead of reusing the first-contact secret as a permanent message lock.",
      },
      {
        number: "04",
        title: "Privacy includes the envelope",
        body: "The first-contact and ratchet packets are fixed-size on the wire. Key material, local state, and contact handling are treated as lifecycle problems—not just encryption calls.",
      },
    ],
    boundary: "This is cryptography and privacy research integrated into Dead Drop’s source path—not an independent security audit, an “unbreakable” claim, or a promise that a particular TestFlight build carries every research change. Sensitive use requires further native verification, threat modeling, cross-language test vectors, and independent review.",
  },

  updates: [
    {
      iso: "2026-10-07",
      date: "07 Oct 2026",
      type: "Privacy research",
      title: "Hold Zero integrated into Dead Drop’s first-contact source path.",
      body: "The research implementation combines a hybrid first contact with a ratcheted conversation path and a fingerprint-checked key shelf. It is presented as beta-bound research, not as a completed security certification.",
    },
    {
      iso: "2026-09-24",
      date: "24 Sep 2026",
      type: "Register update",
      title: "Nexus Grid Desk entry clarified.",
      body: "The public register was updated to describe the operator desk, its paper-only boundary, and the Ask Jev research view without presenting it as a live trading system.",
    },
  ],

  mobileApps: [
    {
      number: "01",
      name: "DEAD DROP",
      program: "Asymmetry / native iOS",
      body: "A native iOS app for private coordination. The current public surface of Asymmetry is a TestFlight beta.",
      href: "https://testflight.apple.com/join/KZcgDpPF",
    },
    {
      number: "02",
      name: "The Hexagon",
      program: "Native iOS / review systems",
      body: "A six-perspective review council for decisions, blind spots, and trade discipline. Available as a TestFlight beta.",
      href: "https://testflight.apple.com/join/G59bJtwQ",
    },
  ],

  faqs: [
    {
      question: "What is Critical Mass Labs?",
      answer: "Critical Mass Labs is an independent studio for research, custom software, and experimental infrastructure. This site is its public register: a clear view of the work that can be responsibly described in public.",
    },
    {
      question: "Does the lab build custom software?",
      answer: "Yes. The lab builds custom software and software solutions when the work calls for a particular workflow, system, or product shape rather than an off-the-shelf tool.",
    },
    {
      question: "How should I read a project stage?",
      answer: "A stage is a current public snapshot, not a production promise. The Atlas distinguishes public surfaces from research and in-development work, and each project status explains the next honest step.",
    },
    {
      question: "How do I join a mobile beta?",
      answer: "Install Apple TestFlight on your iPhone or iPad, then open the relevant invite from this page. Availability and device requirements are managed by Apple through TestFlight.",
    },
    {
      question: "Does beta mean an App Store listing or production release?",
      answer: "No. A beta entry means the public build is available through TestFlight. It does not imply an App Store listing, security audit, uptime commitment, or production settlement.",
    },
    {
      question: "Is Hold Zero a security guarantee?",
      answer: "No. Hold Zero is a named research implementation in Dead Drop’s first-contact path. It uses specific cryptographic and privacy design choices, but it has not received independent protocol review and should not be described as unbreakable or production-certified.",
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
