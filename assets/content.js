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
    { label: "Projects", href: "#project-field" },
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
      number: "04",
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
      number: "05",
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

  /* The live Project Field is the primary project index. Each item has a
     dedicated public detail route, even where an external release is not yet
     appropriate to link. Keep public descriptions bounded and factual. */
  orbitProjects: [
    {
      number: "01",
      slug: "dead-drop",
      name: "Dead Drop",
      stage: "Mobile beta",
      discipline: "Private coordination",
      summary: "Native iOS work for private coordination.",
      description: "Dead Drop is the current TestFlight beta surface for the Asymmetry work. This public page describes its stage and available route without presenting a production, audit, or App Store claim.",
      availability: "TestFlight beta is available through Apple when capacity permits.",
      link: "https://testflight.apple.com/join/KZcgDpPF",
      linkLabel: "Open TestFlight",
      extraLink: "https://asymmetria.io/",
      extraLinkLabel: "Visit Asymmetria",
    },
    {
      number: "02",
      slug: "obsidian-abyss",
      name: "Obsidian Abyss",
      stage: "Beta",
      discipline: "Research systems",
      summary: "A research environment for simulation, tooling, and cinematic web work.",
      description: "Obsidian Abyss is a public window into exploratory system work. Its public site is the current route; the register does not describe it as a finished product or production service.",
      availability: "The public site is the current entry point.",
      link: "https://obsidianabyss.com/",
      linkLabel: "Visit Obsidian Abyss",
    },
    {
      number: "03",
      slug: "nexus-grid-desk",
      name: "Nexus Grid Desk",
      stage: "Listed",
      discipline: "Operator systems",
      summary: "A listed operator desk for system orientation.",
      description: "Nexus Grid Desk is presented as a Railway template for orientation and research. It remains paper-only; nothing on this register represents it as live execution infrastructure.",
      availability: "Listed as a Railway template.",
      link: "https://railway.com/deploy/nexus-grid-desk",
      linkLabel: "Open Railway template",
    },
    {
      number: "04",
      slug: "minos-shield",
      name: "Minos Shield",
      stage: "Beta",
      discipline: "Decision research",
      summary: "Decision-path research for constrained systems, gates, and exits.",
      description: "Minos Shield is a lab research track around choices under constraint. It has no public product release at this stage, so this page is the honest public record rather than a substitute for an unavailable app.",
      availability: "No public download or external release is listed yet.",
    },
    {
      number: "05",
      slug: "the-hexagon",
      name: "The Hexagon",
      stage: "Mobile beta",
      discipline: "Review systems",
      summary: "A six-perspective mobile review system.",
      description: "The Hexagon is a native iOS TestFlight beta for structured review, blind spots, and trade discipline. Beta availability does not imply an App Store listing or production readiness.",
      availability: "TestFlight beta is available through Apple when capacity permits.",
      link: "https://testflight.apple.com/join/G59bJtwQ",
      linkLabel: "Open TestFlight",
    },
    {
      number: "06",
      slug: "asymmetry-city",
      name: "Asymmetry City",
      stage: "Public experiment",
      discipline: "Repository navigation",
      summary: "A repository-derived city view for codebase orientation.",
      description: "Asymmetry City explores how a complex codebase can be made easier to orient around without publishing source contents or inventing live-system claims. It is a public systems experiment, not a source browser.",
      availability: "A public release route is being prepared deliberately.",
    },
    {
      number: "07",
      slug: "the-repository",
      name: "The Repository",
      stage: "Playable build",
      discipline: "Interactive fiction",
      summary: "A playable browser project about systems, attention, and the human in the interface.",
      description: "The Repository is an interactive-fiction build under active development. Its public register entry establishes what it is without claiming that every chapter or route is currently published.",
      availability: "The next public build is being prepared.",
    },
    {
      number: "08",
      slug: "hold-zero",
      name: "Hold Zero",
      stage: "Research register",
      discipline: "Privacy research",
      summary: "A bounded public record for private-coordination research.",
      description: "Hold Zero is a Dead Drop research track. Its public material is intentionally bounded: the register can describe purpose, scope, and selected test work without becoming a protocol reference, implementation guide, or security guarantee.",
      availability: "Selected public research material is available; implementation detail is shared deliberately.",
      link: "https://github.com/cheffer0723/hz-25519-761",
      linkLabel: "View public research source",
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
    title: "Hold Zero is held back on purpose.",
    lead: "Hold Zero is a Dead Drop research track for private coordination. Its public record describes intent, scope, and beta status; implementation details are shared deliberately when context and a request call for them.",
    status: "Research implementation / beta-bound",
    principles: [
      {
        number: "01",
        title: "Deliberate disclosure",
        body: "Technical material is released with context, not turned into a front-page claim.",
      },
      {
        number: "02",
        title: "Private coordination",
        body: "The work explores how people can coordinate with stronger privacy boundaries.",
      },
      {
        number: "03",
        title: "Mobile experimentation",
        body: "Dead Drop is the native iOS beta where selected research becomes product work.",
      },
      {
        number: "04",
        title: "Public record, bounded",
        body: "The register marks public artifacts and updates without reproducing operational details.",
      },
    ],
    boundary: "This public register is an overview, not a protocol reference, implementation guide, security claim, or statement about an individual beta build.",
  },

  updates: [
    {
      iso: "2026-10-16",
      date: "16 Oct 2026",
      type: "Privacy fix",
      project: "DEAD DROP / mobile beta",
      title: "Routine status checks stopped contacting the former relay service.",
      body: "Status indicators now rely on on-device Tor state and ordinary public-place checks. Opening status or diagnostics no longer creates a separate relay-health request.",
    },
    {
      iso: "2026-10-15",
      date: "15 Oct 2026",
      type: "Bug fix",
      project: "DEAD DROP / iPhone",
      title: "First contact on iPhone was corrected.",
      body: "A native JavaScript-environment gap prevented the crypto libraries from receiving the app’s random source on a new contact. Initialization now supplies the app’s OS-backed source, and host tests run without the Node fallback that had hidden the device-only failure.",
    },
    {
      iso: "2026-10-15",
      date: "15 Oct 2026",
      type: "Reliability",
      project: "DEAD DROP / message pickup",
      title: "A slow public place no longer holds an entire routine check.",
      body: "Once one place answers successfully, the client can proceed instead of waiting out another place’s full timeout. Slow replies remain eligible for the next pickup window.",
    },
    {
      iso: "2026-10-04",
      date: "04 Oct 2026",
      type: "Research hardening",
      project: "HOLD ZERO / public research",
      title: "Conformance vectors and parser fuzz targets were added.",
      body: "A public known-answer vector now anchors expected packet behavior, while fuzz targets exercise untrusted inputs. This is protocol research and test hardening—not an audit certification or production-security guarantee.",
      href: "https://github.com/cheffer0723/hz-25519-761",
      linkLabel: "View public research source",
    },
  ],

  mobileApps: [
    {
      number: "01",
      name: "DEAD DROP",
      program: "Asymmetry / native iOS",
      body: "A native iOS app for private coordination. Its public surface remains a TestFlight beta.",
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
      answer: "No. Hold Zero is research work tied to Dead Drop. This site is not a protocol specification, security guarantee, or release note for any individual build.",
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
