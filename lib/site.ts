export type NavLink = { label: string; href: string; desc?: string };
export type NavGroup = { label: string; href?: string; columns?: { title: string; links: NavLink[] }[] };

export const site = {
  name: "Cocoon",
  tagline: "Plan. Teach. Reflect. Inquire.",
  url: "https://cocoon-site-theta.vercel.app",
  pilotSchool: "An IB World School in Hyderabad", // placeholder until approved
};

export const company = {
  name: "Edwisely",
  phone: "+91 79951 61950",
  emailGeneral: "hello@edwisely.com",
  emailSales: "ai@edwisely.com",
  address: { street: "3rd Floor, Trendz Orbit Building, Diamond Hills, Lumbini Avenue", locality: "Gachibowli, Hyderabad", region: "Telangana", postal: "500081", country: "IN", countryName: "India" },
  mapsQuery: "Edwisely - Intelligent Learning, Trendz Orbit Building, Gachibowli, Hyderabad",
  social: [
    { name: "LinkedIn", handle: "linkedin.com/company/edwisely", href: "https://www.linkedin.com/company/edwisely" },
    { name: "Instagram", handle: "@edwisely_official", href: "https://www.instagram.com/edwisely_official" },
    { name: "X (Twitter)", handle: "@edwiselyindia", href: "https://x.com/edwiselyindia" },
  ],
  offices: [
    { city: "Hyderabad, India", note: "India enquiries", phone: "+91 99518 85327" },
    { city: "Chennai, India", note: "South India enquiries", phone: "+91 79951 61950" },
    { city: "Texas, USA", note: "North America enquiries", phone: "+1 630 699 2954" },
  ],
  website: "https://www.edwisely.com",
};
export const tel = (p: string) => "tel:" + p.replace(/\s/g, "");

export const nav: NavGroup[] = [
  {
    label: "Product",
    columns: [
      {
        title: "Platform",
        links: [
          { label: "Product overview", href: "/product", desc: "Cocoon at a glance" },
          { label: "Unit & lesson planning", href: "/product/unit-planning", desc: "MYP unit planner and inquiry hooks" },
          { label: "PPT Engine", href: "/product/ppt-engine", desc: "Ready-to-teach decks from your topics" },
          { label: "Teach", href: "/product/teach", desc: "Teach Studio and live room pulse" },
        ],
      },
      {
        title: "Assess & AI",
        links: [
          { label: "Assessment", href: "/product/assessment", desc: "Criterion-based marking with AI assist" },
          { label: "Cocoon AI", href: "/product/ai", desc: "AI built for IB, teacher in control" },
          { label: "Security & privacy", href: "/security", desc: "How we protect school data" },
        ],
      },
    ],
  },
  {
    label: "Programmes",
    columns: [
      {
        title: "IB programmes",
        links: [
          { label: "IB MYP", href: "/programmes/myp", desc: "Criteria, ATL, global contexts" },
          { label: "IB DP", href: "/programmes/dp", desc: "IA, EE and syllabus coverage" },
          { label: "Accreditation", href: "/accreditation", desc: "IB, CIS and NEASC evidence" },
        ],
      },
      {
        title: "By role",
        links: [
          { label: "For coordinators", href: "/for-coordinators", desc: "Consistency, articulation, evaluation" },
          { label: "For school leaders", href: "/for-school-leaders", desc: "AI, quality and readiness school-wide" },
        ],
      },
    ],
  },
  {
    label: "Resources",
    columns: [
      {
        title: "Learn",
        links: [
          { label: "Resource hub", href: "/resources", desc: "Guides and templates for MYP and DP" },
          { label: "Pilot programme", href: "/pilot", desc: "How schools are using Cocoon" },
        ],
      },
      {
        title: "Why Cocoon",
        links: [
          { label: "Why Cocoon", href: "/why-cocoon", desc: "What makes an IB-only platform different" },
          { label: "Switching to Cocoon", href: "/switching", desc: "Move your units and data with our help" },
        ],
      },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export const footer: { title: string; links: NavLink[] }[] = [
  { title: "Product", links: [
    { label: "Overview", href: "/product" }, { label: "Planning", href: "/product/unit-planning" }, { label: "PPT Engine", href: "/product/ppt-engine" },
    { label: "Teach", href: "/product/teach" }, { label: "Assessment", href: "/product/assessment" },
    { label: "Cocoon AI", href: "/product/ai" }, { label: "Pricing", href: "/pricing" } ] },
  { title: "Programmes", links: [
    { label: "IB MYP", href: "/programmes/myp" }, { label: "IB DP", href: "/programmes/dp" }, { label: "For coordinators", href: "/for-coordinators" }, { label: "For school leaders", href: "/for-school-leaders" },
    { label: "Accreditation", href: "/accreditation" } ] },
  { title: "Resources", links: [
    { label: "Resource hub", href: "/resources" }, { label: "Pilot", href: "/pilot" },
    { label: "Why Cocoon", href: "/why-cocoon" }, { label: "Switching", href: "/switching" } ] },
  { title: "Company", links: [
    { label: "About", href: "/about" }, { label: "Contact", href: "/contact" }, { label: "Security", href: "/security" },
    { label: "Privacy", href: "/privacy" }, { label: "Terms", href: "/terms" }, { label: "Book a demo", href: "/demo" } ] },
];

// Placeholder pages (Iteration 1). Each has its SEO target + planned sections.
export type PageDef = { slug: string[]; title: string; h1: string; description: string; keyword: string; sections: string[] };
export const pages: PageDef[] = [
  { slug: ["product"], title: "IB Teaching Platform for MYP & DP", h1: "One platform for your whole IB teaching week", description: "Plan, teach, assess and reflect in one IB-native platform built for MYP and DP teachers.", keyword: "IB learning platform", sections: ["Hero + screenshot", "Plan / Teach / Assess / Reflect", "Feature grid", "Proof", "FAQ", "CTA"] },
  { slug: ["product","unit-planning"], title: "MYP & DP Unit and Lesson Planner", h1: "Plan inquiry-led units in minutes", description: "Draft inquiry hooks, unit plans and lesson decks anchored to Key Concepts and ATL skills.", keyword: "MYP unit planner", sections: ["Hero", "Inquiry Hooks", "PPT Engine on the inquiry cycle", "Versioning", "FAQ", "CTA"] },
  { slug: ["product","ppt-engine"], title: "PPT Engine: AI Lesson Slide Decks for IB Teachers", h1: "Ready-to-teach decks, drafted from your topics", description: "Pick topics, length and theme. Cocoon drafts a deck you shape in a planner, polish slide by slide, present and export to PowerPoint, PDF or Google Slides.", keyword: "AI lesson slides for IB teachers", sections: [] },
  { slug: ["product","teach"], title: "Teach Studio for IB Classrooms", h1: "Teach live and read the room", description: "Run sectioned IB lesson blueprints live and check understanding with a real-time room pulse.", keyword: "IB lesson delivery tool", sections: ["Hero", "Teach Studio", "Room pulse", "Reflection & ATL logging", "CTA"] },
  { slug: ["product","assessment"], title: "Criterion-Based Assessment for IB", h1: "Mark against MYP criteria with AI assist", description: "AI suggests criterion bands with evidence; the teacher reviews and decides.", keyword: "IB criterion-based assessment tool", sections: ["Hero", "Marking inspector", "Criteria A–D bands", "Missed submissions", "FAQ", "CTA"] },
  { slug: ["product","ai"], title: "AI for IB Teachers", h1: "AI that speaks IB, with the teacher in control", description: "Inquiry hooks, lesson decks and marking suggestions grounded in IB frameworks.", keyword: "AI for IB teachers", sections: ["Hero", "What the AI does", "Guardrails", "Data use", "FAQ", "CTA"] },
  { slug: ["programmes","myp"], title: "IB MYP Software for Teachers", h1: "Built for the MYP classroom", description: "Criteria, command terms, global contexts and ATL built into every plan and assessment.", keyword: "IB MYP software", sections: ["Hero", "MYP pains", "Features mapped", "FAQ", "CTA"] },
  { slug: ["programmes","dp"], title: "IB DP Software for Teachers", h1: "Built for the Diploma Programme", description: "Plan DP units, supervise IA and EE, and prepare students for exams.", keyword: "IB DP software", sections: ["Hero", "DP pains", "Features mapped", "FAQ", "CTA"] },
  { slug: ["accreditation"], title: "IB, CIS & NEASC Accreditation Evidence Software", h1: "Tag once, comply everywhere", description: "Turn everyday teaching artefacts into IB, CIS and NEASC evidence automatically.", keyword: "IB programme evaluation evidence software", sections: ["Hero", "The evidence problem", "Crosswalk", "Coordinator cockpit", "FAQ", "CTA"] },
  { slug: ["for-coordinators"], title: "Cocoon for MYP & DP Coordinators", h1: "Programme oversight without the chasing", description: "Consistent unit planning, vertical and horizontal articulation, and evaluation evidence for IB coordinators.", keyword: "MYP coordinator tools", sections: [] },
  { slug: ["for-school-leaders"], title: "Cocoon for Heads of IB Schools", h1: "AI-native teaching, school-wide", description: "Consistent IB teaching quality, responsible AI and continuous accreditation readiness for school leaders.", keyword: "AI platform for IB schools", sections: [] },
  { slug: ["why-cocoon"], title: "Why Cocoon: The IB-Only Teaching Platform", h1: "Built only for IB, not adapted for it", description: "Why MYP and DP schools choose an IB-native platform over a general school LMS.", keyword: "best platform for IB teachers", sections: ["Summary", "IB-native vs general LMS", "Who Cocoon suits", "CTA"] },
  { slug: ["switching"], title: "Switching to Cocoon from Your Current LMS", h1: "Switching is simpler than you think", description: "How we help IB schools move unit plans, question banks and classes to Cocoon.", keyword: "switch IB LMS", sections: ["Migration steps", "What we move for you", "Timeline", "CTA"] },
  { slug: ["pilot"], title: "Cocoon Pilot Programme for IB Schools", h1: "Join the Cocoon pilot", description: "See how IB schools are piloting Cocoon, and how yours can join.", keyword: "IB school pilot programme", sections: ["Pilot story", "Results", "How to join", "CTA"] },
  { slug: ["about"], title: "About Cocoon by Edwisely", h1: "About Cocoon", description: "Cocoon is built by Edwisely for IB educators.", keyword: "Cocoon Edwisely", sections: ["Mission", "Team", "Contact"] },
  { slug: ["security"], title: "Security & Data Privacy", h1: "Your school's data, protected", description: "Hosting, access control, GDPR and how Cocoon AI uses data.", keyword: "IB LMS data privacy", sections: ["Hosting", "Access control", "GDPR", "AI data policy"] },
  { slug: ["privacy"], title: "Privacy Policy", h1: "Privacy Policy", description: "Cocoon privacy policy.", keyword: "", sections: ["Policy text"] },
  { slug: ["terms"], title: "Terms of Service", h1: "Terms of Service", description: "Cocoon terms of service.", keyword: "", sections: ["Terms text"] },
];
