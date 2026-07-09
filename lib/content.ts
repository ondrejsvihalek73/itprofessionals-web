/**
 * -------------------------------------------------------------------------
 *  SITE CONTENT  —  edit everything here, no need to touch the layout files.
 * -------------------------------------------------------------------------
 *  Services, method and engagements copy is taken from bellhurry.com (generic,
 *  non-client text). Identity, work focus areas, about and contact are
 *  IT Professionals' own. No third-party client names or testimonials are used.
 *  Text marked  // TODO: replace  is placeholder to swap for real material.
 * -------------------------------------------------------------------------
 */

export const site = {
  name: "IT Professionals",
  legalName: "IT Professionals",
  email: "info@itprofessionals.cz",
  founder: "Ondrej Svihalek",
  location: "Prague, London, Oslo & Europe",
  instagram: "https://instagram.com/it_professionals.cz",
  // TODO: replace with your real registered address / VAT if you want them shown
  address: "Prague 4, Czech Republic",
  vat: "",
};

export const nav = [
  { label: "Services", href: "/#services" },
  { label: "Method", href: "/#method" },
  { label: "Work", href: "/work" },
  { label: "References", href: "/work#references" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export const hero = {
  eyebrow: "IT Professionals",
  titleLine1: "Adaptation and innovation.",
  titleLine2: "Your advantage.",
  subtitle:
    "Software development, digital services design, mobile, CX, UX and AI — built for the complexity of the digital economy.",
  primaryCta: { label: "Start a conversation", href: "/#contact" },
  secondaryCta: { label: "See our work", href: "/work" },
};

// Credibility strip. Replace with real client logos when available.
export const credentials = {
  kicker: "What we bring to the table",
  stats: [
    { value: "20+ yrs", label: "Combined experience across dev, tech, sales & operations" },
    { value: "AI · IoT · 4.0", label: "From artificial intelligence to Industry 4.0 and IoT" },
    { value: "SME → Blue-chip", label: "Trusted by small businesses and corporate clients alike" },
  ],
  // TODO: replace with real client / partner names or swap for logo images
  partners: [
    "Automotive",
    "Manufacturing",
    "Finance",
    "Logistics",
    "Energy & Mobility",
    "Startups",
  ],
};

type LeadPart = { text: string; accent?: boolean };

export const statement = {
  eyebrow: "We are here to",
  lead: [
    { text: "close the gap between what your systems can do and what your " },
    { text: "customers", accent: true },
    { text: " actually " },
    { text: "experience", accent: true },
    { text: " — with design, mobile and AI built for the " },
    { text: "complexity", accent: true },
    { text: " of corporate services." },
  ] as LeadPart[],
  body: "We are ready to take the full journey: strategy, service design, mobile first, CX including AI integration — all owned by one team, carried all the way through.",
};

export const services = {
  eyebrow: "Our services",
  items: [
    {
      no: "01",
      title: "End-to-end delivery",
      body: "From the first audit to the live product — one team that carries the strategic, service design and technical weight without a handoff gap. We work where complexity is real: regulated environments, legacy systems, ambitious transformation programmes and new digital customer journeys.",
      focused: [
        "Discovery & current-state audit",
        "Digital strategy workshop & roadmap",
        "Product scoping & feasibility assessment",
        "AI readiness & integration assessment",
        "MVP scoping & sprint zero facilitation",
      ],
      ongoing: [
        "Full delivery ownership",
        "Sprint team management & coordination",
        "QA, release management & post-launch",
      ],
    },
    {
      no: "02",
      title: "Experience design & CX",
      body: "We close the gap between what your systems can do and what your customers actually experience. Grounded in real behaviour — user research, service design, funnel analysis and real perception testing.",
      focused: [
        "Product benchmarking & competitive audit",
        "WCAG accessibility audit",
        "Conversion & funnel analysis with roadmap",
        "AI tools integration into CX workflows",
        "UX research & user testing",
      ],
      ongoing: [
        "End-to-end UX process ownership",
        "Flows, mockups, prototyping, UI & design system",
        "Continuous user testing, performance & insight loops",
      ],
    },
    {
      no: "03",
      title: "Mobile & platform engineering",
      body: "Your customers carry your product in their pockets — all must work under load, under compliance, under scrutiny. Effective architecture, from iOS and Android native to Kotlin Multiplatform.",
      focused: [
        "Mobile app audit & tech debt assessment",
        "Platform architecture review",
        "Performance, security & compliance audit",
        "Cross-platform feasibility assessment",
        "Proof of concept / prototype builds / MVPs",
      ],
      ongoing: [
        "iOS & Android native development",
        "Cross-platform effective approach (KMP, RN)",
        "Design-to-engineering handoff & QA",
      ],
    },
  ],
};

export const method = {
  eyebrow: "Why IT Professionals",
  heading: "Senior expertise where it counts. AI where it is faster than any human.",
  intro: [
    "IT Professionals is a team of senior practitioners — developers, UX/CX designers, engineers and strategists with years across industry, finance, telco and technology. We bring pattern recognition from real, complex deployments.",
    "AI runs as infrastructure beneath every phase of our work — handling pattern analysis, competitive scanning, first-draft generation and code assistance. That is how our experts stay focused on decisions that require human professional judgment.",
  ],
  hint: "Click each phase to see where expert judgment leads — and where AI carries the weight →",
  phases: [
    {
      no: "01",
      title: "Research",
      sub: "& Discovery",
      human:
        "Our researchers go where data cannot — facilitating workshops, interviewing real users, reading the room in a regulated organisation. They know what to ask a compliance team.",
      aiLabel: "AI-handled",
      tech:
        "Before the first workshop, AI maps user behaviour patterns, audits competitor products and surfaces recurring pain points across comparable journeys. Our team walks in oriented, not orienting.",
    },
    {
      no: "02",
      title: "Design",
      sub: "& Prototyping",
      human:
        "Senior designers shape the information architecture, interaction patterns and the edge cases that regulated, multi-stakeholder products demand — the calls pattern-matching alone cannot make.",
      aiLabel: "AI-accelerated",
      tech:
        "AI generates first-draft flows, expands UI option sets, scaffolds design-system components and runs accessibility pre-checks. Designers spend their hours on judgment, not on mechanics.",
    },
    {
      no: "03",
      title: "Development,",
      sub: "Delivery & QA",
      human:
        "Engineers make the architecture, performance and security calls that legacy integrations and compliance demand — and own the release decisions where a wrong call has real cost.",
      aiLabel: "AI-accelerated",
      tech:
        "AI scaffolds tests, generates boilerplate, runs regression sweeps and flags code-quality regressions early. The team stays focused on the parts that actually move risk.",
    },
    {
      no: "04",
      title: "Reporting",
      sub: "& Strategy",
      human:
        "Strategists translate findings into a roadmap a CFO and a CEO can act on — choosing which signals matter and which are noise, framing trade-offs for a board, not a backlog.",
      aiLabel: "AI-accelerated",
      tech:
        "AI aggregates telemetry, benchmarks against sector peers, drafts the analysis layer and produces a first cut of every deliverable. We arrive with synthesis, not raw data.",
    },
  ],
};

// Work / focus areas — mapped from the real IT Professionals work categories.
export const work = {
  eyebrow: "Work",
  title: "Where we make an impact.",
  items: [
    {
      title: "Artificial Intelligence",
      tag: "AI",
      description:
        "AI reduces effort and error and speeds up work with accurate results — from generating leads to relieving day-to-day pressure across every sector.",
    },
    {
      title: "Agile Programmes",
      tag: "Agile",
      description:
        "A lightweight framework that keeps teams focused on delivering business value fast in a constantly evolving landscape — significantly reducing project risk.",
    },
    {
      title: "Augmented / Virtual Reality",
      tag: "AR / VR",
      description:
        "Immersive technologies — AR, VR, MR and XR — are moving into the enterprise. Gifted but still maturing; we help you adopt them without over-promising.",
    },
    {
      title: "Big Data Analysis",
      tag: "Data",
      description:
        "Examining large datasets to uncover hidden patterns, correlations and insights — with answers delivered almost immediately, not weeks later.",
    },
    {
      title: "Digital Innovation",
      tag: "Strategy",
      description:
        "Modernisation alone isn't enough. We give innovation a purpose — technology as the enabler of a greater vision and mission, not the answer itself.",
    },
    {
      title: "Digital Sales Channels",
      tag: "Commerce",
      description:
        "The internet changed how people buy. A multi-channel strategy reaches users the best way — because you have to be where your customers are.",
    },
    {
      title: "Electromobility",
      tag: "Mobility",
      description:
        "Electrification reshapes how cars are built and links transport with energy systems — a paradigm shift driving new alliances far beyond the automotive industry.",
    },
    {
      title: "Industry 4.0",
      tag: "Manufacturing",
      description:
        "Connecting factories and their components through the intelligent use of data — lifting productivity, enabling new products and business models.",
    },
    {
      title: "IoT & Wearable",
      tag: "Connected",
      description:
        "The real value of IoT isn't the technology — it's new value propositions and revenue streams. We bridge IT and OT to unlock new business models.",
    },
    {
      title: "Mobile Design Thinking",
      tag: "Mobile",
      description:
        "A mobile app is a true mobility partner. Designing one well balances function, ergonomics, technical feasibility, maintainability and real satisfaction.",
    },
    {
      title: "Omnichannel Communication",
      tag: "CX",
      description:
        "E-commerce is an enabler, not a destination. Online, mobile and physical blur into one seamless experience across every touchpoint.",
    },
    {
      title: "Product Management & Innovation",
      tag: "Product",
      description:
        "As products move faster than ever, people make the difference. We help innovation happen — starting with ideas that are genuinely desirable to customers.",
    },
    {
      title: "Prototyping & Testing",
      tag: "Delivery",
      description:
        "Ideas on paper are a far cry from the real world. Prototyping lets you evaluate and test before full production — catching costly omissions early.",
    },
    {
      title: "Startups",
      tag: "Ventures",
      description:
        "Getting a startup off the ground is hard. We bring the skills, mentoring and technology that keep a small venture running optimally and growing.",
    },
    {
      title: "UI/UX & Design",
      tag: "Design",
      description:
        "Great UX/UI wins consumer confidence and grabs attention fast. For a startup especially, the first impression lasts — it can make or break the brand.",
    },
  ],
};

// Client references / realizations (from the IT Professionals reference deck).
export const references = {
  eyebrow: "References",
  title: "Selected projects.",
  lead: "A selection of digital products, apps and platforms we have designed and delivered for leading brands.",
  items: [
    {
      client: "Motomail.cz",
      kind: "Mobile community service for drivers",
      description:
        "A mobile community and communication service for drivers — the interactive companion to Evropa 2 radio (Lagardère Active). Native iOS and Android apps, mobile web, a service portal, and RDS + SMS integration.",
      tags: ["Native iOS / Android", "Mobile web", "UI/UX"],
      image: "/references/motomail.jpg",
    },
    {
      client: "Burda Media",
      kind: "Premium online cookbooks (Apetit)",
      description:
        "Premium online cookbooks for Burda Media — native phone and tablet apps with rich multimedia content (text, photography, video and an interactive mode), integrated with the editorial systems.",
      tags: ["Mobile app", "Multimedia", "CMS integration"],
      image: "/references/apetit.jpg",
    },
    {
      client: "DOX",
      kind: "Centre for Contemporary Art",
      description:
        "Digital presentation for the DOX Centre for Contemporary Art — exhibitions, programmes and virtual gallery tours brought online.",
      tags: ["Web", "Culture"],
      image: "/references/dox.jpg",
    },
    {
      client: "Ambiente",
      kind: "Restaurant group web",
      description:
        "Web presentation for the Ambiente restaurant group — restaurants, menus and news in one cohesive online experience.",
      tags: ["Web", "Hospitality"],
      image: "/references/ambiente.jpg",
    },
    {
      client: "Tesco Stores",
      kind: "Online lifestyle magazines",
      description:
        "Online lifestyle magazines for Tesco Stores — family, fashion and food content delivered across responsive web.",
      tags: ["Web", "Content", "Retail"],
      image: "/references/tesco.jpg",
    },
    {
      client: "Česká Miss",
      kind: "Campaign & presentation site",
      description:
        "Digital presentation and campaign site for the Česká Miss pageant — news, galleries and the seasonal showreel.",
      tags: ["Web", "Campaign", "Media"],
      image: "/references/ceskamiss.jpg",
    },
    {
      client: "MyŠkoda",
      kind: "Škoda Auto — driver companion app",
      description:
        "The flagship companion app for Škoda drivers and owners — detailed vehicle data, service plan, automatic checks, the car manual and dealer contacts. iOS and Android, delivered and evolved via agile development with Škoda Auto's AMS team.",
      tags: ["iOS / Android", "Automotive", "UX/GUI"],
      image: "/references/myskoda.jpg",
    },
    {
      client: "ŠKODA Drive",
      kind: "Škoda Auto — Connected Car programme",
      description:
        "Part of Škoda Auto's Connected Car programme — an app and portal that turn real vehicle data into feedback on driving economy, plot trips on a map, track parameters and share to social media, with day/night mode and in-car MirrorLink.",
      tags: ["Connected car", "iOS / Android", "Integration"],
      image: "/references/skoda-drive.jpg",
    },
    {
      client: "Smart Parking & EV Charging",
      kind: "IoT platform (ChargeUp · Lancelot EVCS)",
      description:
        "An IoT platform that senses real occupancy and navigates drivers to free parking or EV charging spots — plus the Lancelot EVCS control system for Škoda Auto / ŠKOenergo charging infrastructure, with dispatch dashboards and a responsive end-user app.",
      tags: ["IoT", "EV charging", "Platform"],
      image: "/references/smart-parking.jpg",
    },
    {
      client: "ČEZ Online",
      kind: "Energy — customer self-care apps",
      description:
        "Mobile self-care and customer apps for ČEZ residential customers — a new mobile channel for personalised marketing, cross-sell and up-sell that cuts cost-to-serve versus call centres. Android and iOS, from strategy and prototyping to launch.",
      tags: ["Energy", "iOS / Android", "Self-care"],
      image: "/references/cez-online.jpg",
    },
    {
      client: "Patria Direct",
      kind: "Fintech — securities trading app",
      description:
        "A portfolio-management and active securities-trading app for Patria Finance — full analysis, architecture, GUI/UX and security design, integrated with the firm's key back-end systems. iOS and Android.",
      tags: ["Fintech", "iOS / Android", "Security"],
      image: "/references/patria.jpg",
    },
    {
      client: "CCS Tanknavigátor",
      kind: "Fuel-card driver app",
      description:
        "A native app for CCS, the leading fuel-card provider for motorists in the Czech Republic — fuel-station and parking locators, best-price search by fuel type, navigation, customer benefits and feedback. iOS and Android, integrated with the CCS transaction back-end.",
      tags: ["Native app", "Geolocation", "Payments"],
      image: "/references/ccs.jpg",
    },
    {
      client: "ARAM",
      kind: "Asset management — tablet & HoloLens",
      description:
        "An asset-management app for tablet and Microsoft HoloLens — field workers view underground network infrastructure in 2D or 3D, over maps or through augmented reality, linked to the server infrastructure.",
      tags: ["AR / HoloLens", "Asset mgmt", "Tablet"],
      image: "/references/aram.jpg",
    },
    {
      client: "CTDS",
      kind: "Energy grid critical monitoring",
      description:
        "A tablet application for critical monitoring of Europe's energy transmission grids — designed, tested and delivered for iOS, operated for the European countries connected through the TSC Net transmission network.",
      tags: ["Energy", "Monitoring", "iOS tablet"],
      image: "/references/ctds.jpg",
    },
    {
      client: "Kavárna Štěstí",
      kind: "Café franchise app (KKCG)",
      description:
        "The mobile app for the Kavárna Štěstí café franchise (KKCG) — location-aware menus from the POS system, mobile payments and orders, lottery products (Sazka), integrated with CRM and CMS.",
      tags: ["Hospitality", "Mobile payments", "CRM"],
      image: "/references/kavarna-stesti.jpg",
    },
    {
      client: "Albi",
      kind: "Door-to-door tablet sales & CRM",
      description:
        "A door-to-door tablet sales solution with CRM for Albi — a .NET mobile back-end integrated with Albi's ERP, Android tablet apps in three languages, operated across the Czech, Slovak and Polish markets for 100+ field users and tens of thousands of partners.",
      tags: ["Field sales", "CRM", "Multi-market"],
      image: "/references/albi.jpg",
    },
    {
      client: "Mobile Corporate Bulletins",
      kind: "Mobile solution",
      description:
        "Mobile versions of corporate bulletins and catalogues — the same graphics as their printed cousins, with server-controlled updates, push notifications and interactive multimedia. Intuitive controls, minimal authoring cost, immediate publishing.",
      tags: ["Mobile app", "Publishing", "Multimedia"],
      image: "/references/sol-bulletins.jpg",
    },
    {
      client: "Mobile Store",
      kind: "Mobile solution",
      description:
        "E-commerce in mobile form — a familiar e-shop look and feel on mobile devices, tied to your existing back-end. Server-controlled offers, full product presentations, push notifications and promotion support for a quick, low-cost launch.",
      tags: ["E-commerce", "Mobile", "Back-end"],
      image: "/references/sol-store.jpg",
    },
    {
      client: "Sales Network Locator",
      kind: "Mobile solution",
      description:
        "Partner, service and sales network locator — lists and maps based on the user's location, with content offers, map navigation and an optional augmented-reality view. Out-of-the-box maps and AR, dynamic POI updates and reviews.",
      tags: ["Maps", "Geolocation", "AR"],
      image: "/references/sol-locator.jpg",
    },
    {
      client: "Sales Offer Comparator",
      kind: "Mobile solution",
      description:
        "Comparison of competing product and service offers in the field — a controlled comparison and order-negotiation process, dynamic pricing, and a clear visual interpretation that can close the target order.",
      tags: ["Sales", "Comparison", "Field tool"],
      image: "/references/sol-comparator.jpg",
    },
    {
      client: "Mobile Guide for Events",
      kind: "Mobile solution",
      description:
        "Full agenda management for public and company events — targeted invitations with attendance confirmations, driving instructions, live information, and evaluation of visitor interest for later contact. Minimal prep cost, instant publishing.",
      tags: ["Events", "Mobile", "Engagement"],
      image: "/references/sol-events.jpg",
    },
    {
      client: "Mobile Games",
      kind: "Mobile solution",
      description:
        "Innovative, friendly promotion of brands and products through proven games with brand themes — building awareness, establishing client contact and a lasting mobile experience.",
      tags: ["Gamification", "Branding", "Engagement"],
      image: "/references/sol-games.jpg",
    },
    {
      client: "Executive & Performance Reporting",
      kind: "Mobile solution",
      description:
        "Always-available reporting on general and critical performance parameters — for phones and tablets, with server-controlled updates, push notifications for emergencies, executive summaries and clear data visualisation.",
      tags: ["Reporting", "Dashboards", "Data viz"],
      image: "/references/sol-reporting.jpg",
    },
    {
      client: "Mobile Company Portal & Intranet",
      kind: "Mobile solution",
      description:
        "In-house information, communications and processes on everyday mobile devices and in the field — intranet-based structure, server-controlled content, push notifications, and optional access-permission control.",
      tags: ["Intranet", "Enterprise", "Mobile"],
      image: "/references/sol-portal.jpg",
    },
    {
      client: "Order & Sales System",
      kind: "Mobile solution",
      description:
        "Mobile sales applications for field representatives — customer histories and payments, stock-aware offers, online product presentations, orders and invoicing, warehousing and real-time performance reporting, with optional biometric controls.",
      tags: ["Field sales", "Orders", "Real-time"],
      image: "/references/sol-orders.jpg",
    },
  ],
};

export const engagements = {
  eyebrow: "Where to start",
  title: "Not sure where to begin?",
  lead: "These three engagements are how most of our client relationships start.",
  closing:
    "All three can be standalone engagements or the start of something larger. Either is fine.",
  items: [
    {
      title: "Market & Sector Insight Audit",
      lead: "Most digital decisions are won by whoever reads the market better.",
      body: "An evidence-led read of your market, your end customer and the white space. Built to be acted on.",
      points: [
        "Quantified source of truth for CX decisions",
        "Competitive map of your sector",
        "Prioritised opportunities for this quarter",
      ],
      meta: "4–6 weeks · Repository + synthesis + presentation",
      cta: "Talk to us about your market",
    },
    {
      title: "Prototype & Conversion Sprint",
      lead: "A clickable prototype settles more product debate than a quarter of internal review.",
      body: "We build the prototype with your team and put it in front of real users. You leave with evidence, not opinions.",
      points: [
        "Clickable prototype, yours to keep",
        "Conversion-funnel analysis from real user behaviour",
        "What to strengthen — and what already works",
      ],
      meta: "1–3 weeks · Prototype + funnel analysis + presentation",
      cta: "Book a prototype sprint",
    },
    {
      title: "AI Readiness Audit",
      lead: "Every board is asking the AI question. The work is answering with shippable CX moves, not pilots.",
      body: "A prioritised AI use-case map across your existing CX — graded by user impact, build effort and regulatory risk.",
      points: [
        "Prioritised AI use-case repository",
        "Performance impact estimate per use case",
        "Model-sourcing, governance and judgment-layer recommendations",
      ],
      meta: "2–3 weeks · Use-case repository + impact analysis + presentation",
      cta: "Request an AI readiness call",
    },
  ],
};

export const about = {
  eyebrow: "About us",
  title: "This is\nIT Professionals.",
  quotes: [
    "Despite the hectic race that startups impose, it is still possible to stand up for an industrial vision — where companies invent and deploy a singular digital culture.",
    "Adaptation and innovation are the only ways to carry weight in the digital economy.",
    "The performance standards of the new economy make our jobs even more exciting: a combination of cutting-edge technology, craftsmanship and executive coaching.",
  ],
  attribution: "Ondrej Svihalek, founder of IT Professionals",
};

export const contact = {
  eyebrow: "Start here",
  titleLine1: "Let's turn complexity",
  titleLine2: "into performance.",
  lead: "Speak directly with Ondrej, the founder.",
  responseNote: "We respond within one business day.",
};
