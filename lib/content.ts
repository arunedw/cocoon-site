export type Block = { label: string; title: string; body: string; bullets?: string[]; img?: string; alt?: string };
export type PageContent = {
  eyebrow: string; lead: string; heroImg?: string; heroAlt?: string;
  pains?: { title: string; body: string }[];
  blocks: Block[];
  flow?: { label: string; title: string; steps: { name: string; desc: string }[] };
  faqs: { q: string; a: string }[];
  related: { label: string; href: string }[];
};

export const content: Record<string, PageContent> = {
  product: {
    eyebrow: "The Cocoon platform",
    lead: "Cocoon brings planning, teaching, assessment and reflection into one IB-native workspace. Every tool speaks the language of the MYP and DP: Key Concepts, ATL skills, criteria and command terms.",
    heroImg: "/screens/home-v2.png", heroAlt: "Cocoon teacher home with week view, priorities and students needing support",
    blocks: [
      { label: "Home", title: "Your IB week in one view", body: "Start each day knowing what matters. Lessons, overdue marking, predicted grades and students who need support sit on one screen.", bullets: ["Week, day and month views, with Google Calendar import", "Priorities ranked by due date and urgency", "Students-at-risk flags so no one slips through"], img: "/screens/home-v2.png", alt: "Cocoon home dashboard" },
      { label: "Plan", title: "Inquiry-led planning in minutes", body: "Pick a topic and learning level. Cocoon drafts inquiry hooks and full lesson decks built on the IB inquiry cycle, ready for you to edit.", bullets: ["MYP unit planner with a 16-section outline", "Inquiry Hooks: 3–4 openers per topic, versioned", "PPT Engine: decks exported to PowerPoint, PDF or Google Slides"], img: "/screens/inquiry-hooks-v2.png", alt: "Inquiry Hooks in Cocoon" },
      { label: "Teach", title: "Teach live and read the room", body: "Run a sectioned lesson blueprint in Teach Studio. A one-tap room pulse tells you when to slow down or go deeper.", img: "/screens/teach-studio-v2.png", alt: "Teach Studio live lesson" },
      { label: "Assess", title: "Criterion-based marking, teacher in control", body: "Cocoon evaluates every response criterion by criterion and strand by strand, citing the evidence for each judgement. You review, adjust and release results when you are ready.", img: "/screens/marking-v2.png", alt: "Cocoon marking inspector" },
      { label: "Reflect", title: "Reflection and ATL logging built in", body: "Capture a quick post-lesson reflection and log ATL skills straight from your home screen, so evidence builds up without extra admin." },
      { label: "Support", title: "Help when you need it", body: "Guides for every feature, live chat, tickets you can track, and phone support Monday to Friday, all inside Cocoon.", img: "/screens/help-center-v2.png", alt: "Cocoon help center" },
    ],
    faqs: [
      { q: "Who is Cocoon for?", a: "MYP and DP teachers, subject leads and programme coordinators at IB World Schools and candidate schools." },
      { q: "Does Cocoon replace our school's LMS?", a: "Cocoon focuses on the IB teaching workflow: planning, teaching, assessment and evidence. We will tell you plainly where it fits alongside your existing systems." },
      { q: "Is the AI making decisions for teachers?", a: "No. Cocoon drafts and suggests. Teachers edit, approve and make every final call." },
    ],
    related: [{ label: "Unit & lesson planning", href: "/product/unit-planning" }, { label: "Assessment", href: "/product/assessment" }, { label: "Cocoon AI", href: "/product/ai" }],
  },

  "product/unit-planning": {
    eyebrow: "Unit & lesson planning",
    lead: "Build MYP units in an IB-shaped planner, then open every lesson with an inquiry hook. Cocoon drafts, you decide what stays.",
    heroImg: "/screens/unit-planner-v2.png", heroAlt: "Cocoon MYP unit planner with outline, unit summary and authors",
    pains: [
      { title: "Planning eats evenings", body: "Writing concept-driven units and engaging lesson openers takes hours most teachers do not have." },
      { title: "Generic AI misses the IB", body: "General chatbots do not know Key Concepts, ATL skills, global contexts or the difference between SL and HL depth." },
      { title: "Plans live in scattered docs", body: "Unit plans sit in shared drives, disconnected from lessons, assessment and evaluation evidence." },
    ],
    blocks: [
      { label: "Start a unit", title: "Start from your syllabus, not a blank page", body: "Name the unit, pick the subject and tick the syllabus chapters it covers. Cocoon sets up the plan with those topics already linked.", bullets: ["Subjects and chapters come from your school's curriculum", "Choose one or several chapters per unit", "Year and teaching hours live in the unit summary, filled once"], img: "/screens/new-unit-plan-v2.png", alt: "New unit plan dialog with syllabus chapters" },
      { label: "Unit planner", title: "Every section of the MYP unit, in order", body: "The planner follows the MYP unit structure across four stages: Inquiry & action, Unit flow, Evidencing and Reflection. An outline tracks what is done and what still needs an answer.", bullets: ["16-section outline with required answers flagged", "Concepts, global context, ATL, Learner Profile and objectives in one place", "Co-author with colleagues; every change is saved and logged in Activity", "Draft any section with AI, keep only what you accept"], img: "/screens/unit-planner-v2.png", alt: "MYP unit planner outline and unit summary" },
      { label: "Export", title: "Print or save the plan as a PDF", body: "Choose what goes in: photos, files and links, reflection, and the internal unit brief. Ready for coordinators, evaluation visits or your own records.", img: "/screens/print-pdf-v2.png", alt: "Print or save unit plan as PDF" },
      { label: "Inquiry Hooks", title: "Three or four inquiry openers, in seconds", body: "Choose a topic and learning level, from DP foundations to exam-ready. Cocoon drafts analogies, real-world connections, gut-checks and before-and-after openers, each with a conceptual inquiry question and the student moves it prompts.", bullets: ["Save the hooks you like, regenerate the rest", "Every regeneration is kept as a version", "Nothing is published until you pick it"], img: "/screens/inquiry-hooks-v2.png", alt: "Inquiry hook cards" },
    ],
    faqs: [
      { q: "Does the planner follow the MYP unit planner structure?", a: "Yes. It is organised around Inquiry & action, Unit flow, Evidencing and Reflection, with the MYP fields in each." },
      { q: "Can several teachers plan the same unit?", a: "Yes. Add co-authors, see who changed what in Activity, and share plans with your subject group." },
      { q: "Can I edit what Cocoon generates?", a: "Always. Every AI draft is editable, and nothing is added to your plan unless you accept it." },
      { q: "Can I export unit plans?", a: "Yes. Print or save any plan as a PDF and choose which sections to include." },
    ],
    related: [{ label: "PPT Engine", href: "/product/ppt-engine" }, { label: "Teach Studio", href: "/product/teach" }, { label: "IB MYP", href: "/programmes/myp" }],
  },

  "product/ppt-engine": {
    eyebrow: "PPT Engine",
    lead: "Pick what to cover and a theme, and Cocoon builds a deck you shape in a planner, polish slide by slide, present full-screen and export to PowerPoint, PDF or Google Slides.",
    heroImg: "/screens/ppt-engine-v2.png", heroAlt: "PPT Engine slide editor with speaker notes and AI refine panel",
    flow: { label: "How it flows", title: "From topics to a deck you can teach", steps: [
      { name: "Create", desc: "Choose the units and topics, the length of the session and a theme." },
      { name: "Planner", desc: "Shape the structure slide by slide before polishing anything." },
      { name: "Editor", desc: "Edit titles, bullets and speaker notes right on the slide." },
      { name: "Present", desc: "Teach full-screen, export or share with colleagues." },
    ] },
    blocks: [
      { label: "Create", title: "Start from the topics you teach", body: "Pick a subject and tick the units and topics to cover. Units show whether they are covered, current or upcoming. Set the length so the deck is paced for your session, optionally point it at a reference outline, then generate.", bullets: ["Decks follow the IB inquiry cycle: Tune in, Wonder, Investigate, Conceptualise, Apply, Reflect", "Anchored to Key Concepts and ATL skills", "Optional hook slide, worked examples, video and check for understanding"] },
      { label: "Themes", title: "A look that fits the subject", body: "The theme sets typography and palette for the whole deck, from clean academic looks like Modern Minimal, Oxford Blue and Classic Serif to distinctive ones like Midnight, Engineering Grid and Lab Notebook. Change it any time without redoing the content." },
      { label: "Planner", title: "Structure first, polish later", body: "The planner is the deck's outline: every slide with the bullets it will cover, editable inline. Getting order and coverage right here is far quicker than rearranging finished slides.", bullets: ["Split a slide that is doing too much", "Merge two thin slides into one", "Insert a slide or a quiz exactly where you need a check", "Delete slides or add one at the end"] },
      { label: "Editor", title: "The slide is the edit surface", body: "Click a title or bullet and type; changes save as you move on. Speaker notes sit below the slide. The Refine panel reworks the active slide from a short instruction, with quick actions like Simplify, Add an example or Insert a quiz.", img: "/screens/ppt-engine-v2.png", alt: "Slide editor with Refine panel" },
      { label: "Present & share", title: "Teach it, export it, pass it on", body: "Present runs the deck full-screen. Export to PowerPoint (.pptx), PDF or Google Slides. Share by link, directly with a colleague, your subject group lead or the subject group board, or as an email summary, choosing what to include.", bullets: ["Saved decks live in your library", "Duplicate a deck for another class", "Reuse a deck as the starting point for the next lesson"] },
    ],
    faqs: [
      { q: "Can I edit the slides, or only generate them?", a: "Fully edit them. Shape the structure in the planner, then edit each slide's title, bullets and notes in the editor. The draft is just a starting point." },
      { q: "Which formats can I export to?", a: "PowerPoint (.pptx), PDF and Google Slides." },
      { q: "Can I change the theme after generating?", a: "Yes. Switch themes any time without redoing the content." },
      { q: "Who is it for?", a: "Teachers building lessons, subject group leads reviewing decks across a team, and principals who want consistent, high-quality materials." },
    ],
    related: [{ label: "Unit & lesson planning", href: "/product/unit-planning" }, { label: "Teach Studio", href: "/product/teach" }, { label: "Cocoon AI", href: "/product/ai" }],
  },

  "product/teach": {
    eyebrow: "Teach",
    lead: "Teach Studio turns your plan into a live, sectioned lesson. Move through each stage with clear teacher prompts and check how the room is doing as you go.",
    heroImg: "/screens/teach-studio-v2.png", heroAlt: "Teach Studio live lesson view",
    blocks: [
      { label: "Teach Studio", title: "A lesson blueprint you can teach from", body: "Each lesson is split into timed sections, such as concept connection or check for understanding, with prompts written for the classroom.", bullets: ["Save what you like, regenerate the rest", "Download the full blueprint", "Step through sections in live mode"] },
      { label: "Room pulse", title: "Know when to slow down or go deeper", body: "Tap Lost, Mixed, Tracking or Flying during a section. Cocoon records the pulse so you can adjust in the moment and reflect afterwards." },
      { label: "Reflect", title: "Close the loop after every lesson", body: "Log a quick reflection and the ATL skills practised, tied to the class and Learner Profile focus. Over a term this becomes rich evidence of practice." },
    ],
    faqs: [
      { q: "Do students need devices?", a: "No. Teach Studio runs on the teacher's screen or projector." },
      { q: "Where do reflections go?", a: "They are saved against the class and unit, and can feed programme evaluation evidence." },
    ],
    related: [{ label: "Unit & lesson planning", href: "/product/unit-planning" }, { label: "Assessment", href: "/product/assessment" }, { label: "Accreditation", href: "/accreditation" }],
  },

  "product/assessment": {
    eyebrow: "Assessment",
    lead: "Cocoon evaluates student work in depth: criterion by criterion, strand by strand, against the IB band descriptors. You see the evidence behind every suggestion and decide the final mark.",
    heroImg: "/screens/marking-v2.png", heroAlt: "Marking inspector with MYP criteria, strands and AI-suggested bands",
    pains: [
      { title: "Marking piles up", body: "Criterion-based marking across classes can take whole weekends." },
      { title: "Consistency is hard", body: "Applying band descriptors the same way across 20+ scripts is tiring and uneven." },
      { title: "Feedback stays vague", body: "A single band rarely tells a student which part of the criterion they missed." },
    ],
    flow: { label: "How Cocoon evaluates", title: "Down to the strand, every time", steps: [
      { name: "Criterion", desc: "Select the criteria the task assesses, for example A Knowing and understanding and C Communicating." },
      { name: "Strand", desc: "Each criterion is split into its strands (i, ii, iii…) and judged separately." },
      { name: "Evidence", desc: "Cocoon cites what the student did for each strand and marks it demonstrated or partial." },
      { name: "Band", desc: "Strand judgements roll up to a best-fit band against the descriptors, and the final mark updates." },
      { name: "Release", desc: "You review, adjust any band and release. Results stay hidden until you do." },
    ] },
    blocks: [
      { label: "Marking inspector", title: "Criteria A–D, strand by strand", body: "Open a submission beside the question. For each selected criterion Cocoon proposes a band and explains it strand by strand, so you can agree, disagree or refine in seconds.", bullets: ["Best-fit band picker per criterion; the final mark updates live", "Strand notes like “Demonstrated: moves from indices to numerical values”", "AI flags for anything that needs a closer look", "Queue view to move through the class quickly"], img: "/screens/marking-v2.png", alt: "Strand-level marking view" },
      { label: "Question bank", title: "A question bank for every subject", body: "Browse each subject's question pool, write new prompts, curate reusable sets, flag concerns and generate isomorphic variants on demand. A Bloom's mix bar shows the balance of easy, medium and hard questions at a glance.", bullets: ["Objective and subjective questions side by side", "Coverage across all your MYP and DP subjects", "Import existing questions"], img: "/screens/question-bank-v2.png", alt: "Question bank across MYP subjects" },
      { label: "Assessment types", title: "Objective, subjective, live and more", body: "Run objective quizzes, subjective written tasks, assignments, live and curiosity assessments from one place, each linked to the unit. Submitted, marked, average and missed counts sit at the top, so no missing work goes unnoticed." },
    ],
    faqs: [
      { q: "Does the AI give final grades?", a: "No. It suggests bands with strand-level evidence. The teacher selects the final band and releases results." },
      { q: "What does ‘strand-level’ mean?", a: "IB criteria are made of strands. Cocoon judges each strand separately and shows its reasoning, rather than guessing one overall band." },
      { q: "Does it support DP assessment?", a: "Yes. Subjective marking works for DP tasks, including IA drafts, with DP-appropriate descriptors." },
      { q: "Can assessments count as accreditation evidence?", a: "Yes. Assessments can be tagged to IB, CIS and NEASC standards." },
    ],
    related: [{ label: "IB MYP", href: "/programmes/myp" }, { label: "Cocoon AI", href: "/product/ai" }, { label: "Accreditation", href: "/accreditation" }],
  },

  "product/ai": {
    eyebrow: "Cocoon AI",
    lead: "Cocoon's AI is trained on how the IB works, not just on general knowledge. It drafts and suggests in the language of the MYP and DP, and the teacher is always the one who decides.",
    blocks: [
      { label: "What it does", title: "AI across the teaching workflow", body: "One assistant, shaped for each job.", bullets: ["Drafts inquiry hooks for any curriculum topic and level", "Plans lesson decks on the IB inquiry cycle", "Refines slides: tighten copy, add a diagram, differentiate for MYP or DP readiness, translate", "Suggests criterion bands with strand-level evidence when marking"] },
      { label: "Guardrails", title: "The teacher stays in control", body: "Nothing Cocoon generates reaches students until a teacher approves it. Drafts stay in your library, every regeneration is versioned, and marks are only released by the teacher." },
      { label: "Data", title: "Your school's data stays your school's", body: "Student work is used to help you mark, not to train public models. See our security page for hosting, access control and data handling." },
    ],
    faqs: [
      { q: "Is Cocoon just a chatbot wrapper?", a: "No. The AI is built into specific IB workflows with curriculum structure, learning levels and criteria, not a blank chat box." },
      { q: "How accurate is AI marking?", a: "AI suggestions are a starting point. Teachers review every band, and the AI explains its reasoning so it can be checked." },
    ],
    related: [{ label: "Security & privacy", href: "/security" }, { label: "Assessment", href: "/product/assessment" }, { label: "Unit & lesson planning", href: "/product/unit-planning" }],
  },

  "programmes/myp": {
    eyebrow: "IB Middle Years Programme",
    lead: "Cocoon is built around the MYP framework. Key Concepts, related concepts, global contexts, ATL skills and criteria A–D are part of every plan and every assessment.",
    heroImg: "/screens/marking-v2.png", heroAlt: "MYP Mathematics assessment marked against criteria A–D",
    pains: [
      { title: "Concept-based units take time", body: "Linking Key Concepts, global contexts and statements of inquiry across units is slow to do well." },
      { title: "Criteria marking is heavy", body: "Best-fit judgements across four criteria and many strands add up quickly." },
      { title: "ATL evidence is scattered", body: "Skills are taught every day but rarely captured in one place." },
    ],
    blocks: [
      { label: "Plan", title: "Units shaped like the MYP planner", body: "Plan across Inquiry & action, Unit flow, Evidencing and Reflection, with Key Concepts, global contexts, ATL and objectives built in. Decks and hooks are drafted from the same topics.", img: "/screens/unit-planner-v2.png", alt: "MYP unit planner" },
      { label: "Assess", title: "Criteria A–D with AI assist", body: "Cocoon evaluates against MYP subject criteria strand by strand, with cited evidence and a best-fit band for each criterion. You adjust and release.", img: "/screens/marking-v2.png", alt: "MYP criteria marking" },
      { label: "Reflect", title: "ATL and Learner Profile, logged as you go", body: "Quick reflections and ATL logs build a year-long record of skills development for each class." },
    ],
    faqs: [
      { q: "Does Cocoon support all MYP subject groups?", a: "Cocoon is designed for all MYP subject groups. Tell us your mix in a demo and we will show your subjects." },
      { q: "Does it handle MYP command terms?", a: "Yes. Command terms are used in generated tasks and in marking guidance." },
      { q: "Can coordinators see across units?", a: "Yes. Coordinators can view planning and assessment across subject groups." },
    ],
    related: [{ label: "IB DP", href: "/programmes/dp" }, { label: "Assessment", href: "/product/assessment" }, { label: "Accreditation", href: "/accreditation" }],
  },

  "programmes/dp": {
    eyebrow: "IB Diploma Programme",
    lead: "Cocoon supports DP teachers from first unit to final exams: SL and HL depth, IA and Extended Essay supervision, predicted grades and exam preparation.",
    heroImg: "/screens/inquiry-hooks-v2.png", heroAlt: "DP Mathematics AA HL inquiry hooks",
    pains: [
      { title: "SL and HL need different depth", body: "The same topic has to be pitched differently across levels and years." },
      { title: "IA and EE deadlines stack up", body: "Supervision notes, draft feedback and deadlines are hard to track across students." },
      { title: "Exam prep is last-minute", body: "Building exam-ready materials often happens under pressure." },
    ],
    blocks: [
      { label: "Plan", title: "Pitched to the right level", body: "Choose DP foundations, Standard Level, Higher Level or exam-ready, and Cocoon adjusts the depth of hooks and lesson decks.", img: "/screens/inquiry-hooks-v2.png", alt: "DP learning levels" },
      { label: "Supervise", title: "IA and EE on your radar", body: "Supervision blocks, IA draft marking and EE notes appear in your weekly view and priorities, so nothing is missed.", img: "/screens/home-v2.png", alt: "DP teacher priorities" },
      { label: "Prepare", title: "Exam readiness without the rush", body: "Generate exam-ready lesson decks and checks for understanding, and keep predicted grades on track." },
    ],
    faqs: [
      { q: "Does Cocoon support HL and SL separately?", a: "Yes. Learning level is set for each hook and deck, including HL extension depth." },
      { q: "Can I track Extended Essay supervision?", a: "Yes. EE supervision blocks and notes appear in your calendar and priorities." },
      { q: "Does it help with TOK or CAS?", a: "Our current focus is subject teaching, IA and EE. Tell us your TOK and CAS needs in a demo." },
    ],
    related: [{ label: "IB MYP", href: "/programmes/myp" }, { label: "Unit & lesson planning", href: "/product/unit-planning" }, { label: "Assessment", href: "/product/assessment" }],
  },

  accreditation: {
    eyebrow: "Accreditation",
    lead: "Most IB World Schools are also accredited by CIS or NEASC, often in joint visits. Cocoon turns the work teachers already do into one evidence base that serves all three, all year round.",
    pains: [
      { title: "Evidence is a scramble", body: "Coordinators chase teachers over spreadsheets and messages before every visit and annual update." },
      { title: "Three frameworks, one school", body: "IB Programme Standards and Practices, CIS's 18 standards and NEASC's Foundation Standards and Learning Principles overlap, but are tracked separately." },
      { title: "Evidence leaves with people", body: "When a teacher moves on, the evidence in their personal drive goes with them." },
    ],
    flow: { label: "How it works", title: "Tag once, comply everywhere", steps: [
      { name: "Teach as usual", desc: "Unit plans, lessons, assessments and reflections are created in Cocoon." },
      { name: "AI proposes tags", desc: "Each artefact is matched to IB codes; high-confidence tags can be auto-approved." },
      { name: "Crosswalk", desc: "One IB tag maps to the matching CIS and NEASC standards automatically." },
      { name: "Coordinator reviews", desc: "Approve suggestions, spot gaps and nudge teachers from one cockpit." },
      { name: "Visit-ready", desc: "View the same evidence through an IB, CIS or NEASC lens." },
    ] },
    blocks: [
      { label: "Zero extra work", title: "Teachers never do ‘accreditation work’", body: "Teachers only see IB codes on their unit plans. Everything they already produce becomes evidence in the background, and it stays with the school when people move on." },
      { label: "Coordinator cockpit", title: "Know where to look first", body: "An attention inbox shows pending tags, overdue items, teachers who need a nudge and days until the next annual update. Filter the teacher list by coverage, review evidence unit by unit, and plan joint visits on one timeline.", bullets: ["Framework lens toggle: Overview, CIS or NEASC", "AI tag approval queue with optional auto-approve", "Follow-up composer for teacher nudges"] },
      { label: "Balanced evidence", title: "Documentation, observation and perception", body: "Strong self-studies triangulate evidence. Cocoon shows when a standard relies on only one kind of evidence, so you can fill the gap before the visiting team does." },
    ],
    faqs: [
      { q: "Which frameworks are supported?", a: "IB Programme Standards and Practices, CIS International Accreditation, and NEASC ACE Learning. The model is built to extend to others such as WASC, MSA and Cognia." },
      { q: "Do teachers need to learn CIS or NEASC standards?", a: "No. Teachers work with IB codes only. The crosswalk to CIS and NEASC happens behind the scenes for coordinators." },
      { q: "Does it help with NEASC annual updates?", a: "Yes. The cockpit counts down to the annual update and keeps evidence current through the year, not just in prep season." },
    ],
    related: [{ label: "Assessment", href: "/product/assessment" }, { label: "Unit & lesson planning", href: "/product/unit-planning" }, { label: "IB MYP", href: "/programmes/myp" }],
  },

  "why-cocoon": {
    eyebrow: "Why Cocoon",
    lead: "Most school platforms were built for every curriculum and then adapted for the IB. Cocoon starts from the IB: its units, criteria, strands and standards shape every screen.",
    pains: [
      { title: "General platforms, IB bolted on", body: "Multi-curriculum systems treat MYP and DP as settings, so IB structure lives in templates teachers fill by hand." },
      { title: "AI that does not know the IB", body: "Generic AI tools miss Key Concepts, global contexts, command terms and the depth expected at SL and HL." },
      { title: "Evidence as an afterthought", body: "Accreditation evidence is collected in a rush before visits instead of building up through everyday teaching." },
    ],
    blocks: [
      { label: "IB-native", title: "The IB framework is the product", body: "Unit plans follow the MYP planner. Assessments use subject criteria and their strands. Lessons follow the inquiry cycle. Nothing needs to be configured to feel like the IB.", bullets: ["MYP and DP only, by design", "Criteria, strands and band descriptors built in", "Key Concepts, ATL and Learner Profile throughout"] },
      { label: "Teacher-first", title: "Designed around the teacher's week", body: "Cocoon focuses on what IB teachers do every day: plan, teach, assess and reflect. Fewer modules, deeper tools, less admin." },
      { label: "AI with judgement kept human", title: "AI that drafts, teachers decide", body: "Every hook, deck and marking suggestion is a draft. Strand-level evidence makes AI suggestions easy to check, and nothing reaches students without teacher approval." },
      { label: "Continuous evidence", title: "Always ready for IB, CIS and NEASC", body: "Everyday work becomes tagged evidence across frameworks, so programme evaluation and accreditation visits stop being a scramble." },
    ],
    faqs: [
      { q: "Is Cocoon a full school management system?", a: "No. Cocoon focuses on IB teaching and learning. We will show you where it fits alongside your existing systems." },
      { q: "Do you support PYP or CP?", a: "Our focus today is MYP and DP. Tell us about your programmes in a demo." },
    ],
    related: [{ label: "Product overview", href: "/product" }, { label: "Switching to Cocoon", href: "/switching" }, { label: "Accreditation", href: "/accreditation" }],
  },

  switching: {
    eyebrow: "Switching to Cocoon",
    lead: "Moving platforms mid-year feels risky. We plan the move with you, bring your existing work across and train your teachers, so teaching never stops.",
    flow: { label: "How the move works", title: "A guided switch, step by step", steps: [
      { name: "Discovery", desc: "We review your programmes, subjects, classes and what you use today." },
      { name: "Set-up", desc: "Your curriculum, subjects and classes are configured in Cocoon." },
      { name: "Bring your work", desc: "Unit plans and questions are imported, so teachers start from what they have." },
      { name: "Train", desc: "Short sessions for teachers, subject leads and coordinators." },
      { name: "Go live", desc: "Start with one group or the whole school, with support on hand." },
    ] },
    blocks: [
      { label: "What comes with you", title: "Keep the work you have already done", body: "Existing unit plans, question banks and resources can be brought into Cocoon so nobody starts from a blank page.", bullets: ["Question bank import", "Unit plans mapped to the MYP planner", "Classes and subject groups set up for you"] },
      { label: "Low-risk start", title: "Pilot first, scale when ready", body: "Many schools begin with one subject group or year level, see the results, then expand." },
      { label: "Support", title: "People who know the IB", body: "Live chat, tickets and phone support, plus onboarding led by people who understand MYP and DP." },
    ],
    faqs: [
      { q: "Can we switch mid-year?", a: "Yes. We plan around your calendar and can start with a single group to avoid disruption." },
      { q: "Will teachers need lots of training?", a: "No. Cocoon follows the IB structures teachers already know. Most teachers are productive after a short session." },
    ],
    related: [{ label: "Why Cocoon", href: "/why-cocoon" }, { label: "Pilot programme", href: "/pilot" }, { label: "Pricing", href: "/pricing" }],
  },

  pilot: {
    eyebrow: "Pilot programme",
    lead: "Try Cocoon with a group of your teachers for a term. We set it up, train your team and review the results with you before you decide.",
    flow: { label: "How the pilot works", title: "One term, clear results", steps: [
      { name: "Scope", desc: "Choose the subjects, year levels and teachers taking part." },
      { name: "Onboard", desc: "We set up Cocoon and run training for your pilot group." },
      { name: "Teach", desc: "Teachers plan, teach and assess with Cocoon, with support on hand." },
      { name: "Review", desc: "We look at usage, time saved and teacher feedback together." },
    ] },
    blocks: [
      { label: "Who it suits", title: "IB World Schools and candidate schools", body: "The pilot suits MYP and DP schools that want to test an IB-native platform before a whole-school decision." },
      { label: "What you get", title: "Everything your pilot group needs", body: "Full access for the pilot group, onboarding, training and a named contact throughout.", bullets: ["Planning, PPT Engine and Teach Studio", "Criterion and strand-level assessment", "An end-of-term review with your leadership team"] },
    ],
    faqs: [
      { q: "How long is a pilot?", a: "Typically one term. We agree the length and goals with you at the start." },
      { q: "Is there a cost?", a: "Pilot terms depend on scope. Talk to us and we will propose an option." },
    ],
    related: [{ label: "Switching to Cocoon", href: "/switching" }, { label: "Why Cocoon", href: "/why-cocoon" }, { label: "Pricing", href: "/pricing" }],
  },
};
