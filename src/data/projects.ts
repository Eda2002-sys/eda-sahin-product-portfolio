export type DecisionFinding = {
  observed: string;
  whyItMatters: string;
  recommendation: string;
  expectedImpact: string;
};

export type ProjectVisualComponent =
  | "socida-whatsapp"
  | "socida-problem"
  | "socida-approach"
  | "socida-build"
  | "socida-journey"
  | "socida-governance"
  | "socida-demand"
  | "socida-outcome"
  | "hautonomy-hero"
  | "hautonomy-problem"
  | "hautonomy-approach"
  | "hautonomy-build"
  | "hautonomy-journey"
  | "hautonomy-review"
  | "hautonomy-program"
  | "hautonomy-outcome"
  | "overnight-hero"
  | "overnight-problem"
  | "overnight-approach"
  | "overnight-build"
  | "overnight-journey"
  | "overnight-report"
  | "overnight-outcome"
  | "lp-hero"
  | "lp-problem"
  | "lp-approach"
  | "lp-build"
  | "lp-journey"
  | "lp-search"
  | "lp-outcome"
  | "regulatory-hero"
  | "regulatory-problem"
  | "regulatory-approach"
  | "regulatory-build"
  | "regulatory-journey"
  | "regulatory-monitor"
  | "regulatory-outcome"
  | "cre-hero"
  | "cre-approach"
  | "cre-workspace"
  | "cre-journey"
  | "cre-build"
  | "cre-sheet"
  | "cre-insights"
  | "cre-outcome"
  | "third-eye-hero"
  | "third-eye-problem"
  | "third-eye-approach"
  | "third-eye-build"
  | "third-eye-journey"
  | "third-eye-brief"
  | "third-eye-outcome"
  | "clinical-hero"
  | "clinical-problem"
  | "clinical-approach"
  | "clinical-build"
  | "clinical-journey"
  | "clinical-review"
  | "clinical-outcome"
  | "analystai-hero"
  | "analystai-problem"
  | "analystai-approach"
  | "analystai-build"
  | "analystai-journey"
  | "analystai-workspace"
  | "analystai-outcome";

export type ProjectVisual = {
  alt: string;
  caption?: string;
  placement:
    | "hero"
    | "problem"
    | "approach"
    | "build"
    | "journey"
    | "governance"
    | "demand"
    | "outcome";
  layout?: "natural" | "framed" | "phone";
  /** Raster asset when needed. Prefer `component` for editorial infographics. */
  src?: string;
  component?: ProjectVisualComponent;
};

export type CaseStudyContent = {
  problem: string;
  roleNarrative: string;
  workSections: { title: string; items: string[] }[];
  decisions: DecisionFinding[];
  journey: string[];
  demonstrates: string[];
  glance: {
    role: string;
    stage: string;
    usersScale?: string;
    surfaces: string;
    collaboration: string;
  };
  sourceNote?: string;
  visuals?: ProjectVisual[];
};

export type Project = {
  id: string;
  number: string;
  slug: string;
  title: string;
  category: string;
  summary: string;
  context?: string[];
  roleHighlights: string[];
  productValue: string;
  ctaLabel: string;
  href: string;
  type: "case-study" | "reviews";
  visualNote: string;
  coverImage?: string;
  brandLogo?: string;
  brandUrl?: string;
  caseStudy?: CaseStudyContent;
};

const analystAiRole = [
  "Product workflow testing",
  "User journey validation",
  "Source / evidence QA",
  "Review-gate behaviour testing",
  "Demo and walkthrough support",
  "Client feedback translation",
  "Issue documentation",
  "Engineering coordination",
] as const;

export const projects: Project[] = [
  {
    id: "socida-ai",
    number: "01",
    slug: "socida-ai",
    title: "Socida AI",
    category: "Automotive · Workforce Intelligence · WhatsApp",
    summary:
      "A WhatsApp-based knowledge and training layer for a distributed automotive workforce — text or voice questions, approved product and financing answers, documents and training in one channel.",
    context: ["~300 employees", "7 brand knowledge bases", "WhatsApp-first"],
    roleHighlights: [
      "Product definition",
      "User journey testing",
      "QA",
      "Approved-source knowledge workflows",
      "Document access",
      "Quizzes and onboarding",
      "Voice / image / PDF ingestion testing",
      "Engineering coordination",
    ],
    productValue:
      "Moved fragmented company knowledge and training into a controlled WhatsApp operating layer employees could use in the flow of work.",
    ctaLabel: "View case study",
    href: "/work/socida-ai",
    type: "case-study",
    visualNote:
      "WhatsApp knowledge and training product surface for a distributed automotive workforce.",
    caseStudy: {
      sourceNote:
        "Infographics redesigned for this portfolio. Product context informed by the published AnalystAI automotive workforce training case study.",
      visuals: [
        {
          component: "socida-whatsapp",
          alt: "Editorial mock of WhatsApp company knowledge chat with voice question, approved answer, document and quiz",
          caption:
            "Employee view — ask by voice or text, receive approved answers, documents and training in WhatsApp.",
          placement: "hero",
        },
        {
          component: "socida-problem",
          alt: "Fragmented knowledge sources leading to no single point of access",
          caption:
            "The operating friction: knowledge existed, but not in one place a salesperson could use mid-conversation.",
          placement: "problem",
        },
        {
          component: "socida-approach",
          alt: "Three product decisions for channel, grounding and governance",
          caption:
            "Product approach — channel, grounding and governance as three linked decisions.",
          placement: "approach",
        },
        {
          component: "socida-build",
          alt: "Learn, Use and Reinforce product pillars",
          caption:
            "One intelligence layer shaped around learn, use and reinforce loops.",
          placement: "build",
        },
        {
          component: "socida-journey",
          alt: "Employee journey across Ask, Learn, Practise and Apply",
          caption:
            "Ask → Learn → Practise → Apply — training as a repeatable daily habit, not a one-off event.",
          placement: "journey",
        },
        {
          component: "socida-governance",
          alt: "Document control admin view with brand, access and indexing status",
          caption:
            "Knowledge governance — approved sources, role-based visibility and human-managed updates.",
          placement: "governance",
        },
        {
          component: "socida-demand",
          alt: "Demand signal visualization turning question patterns into manager action",
          caption:
            "Demand signal — recurring questions become input for training, source updates and operational follow-up.",
          placement: "demand",
        },
        {
          component: "socida-outcome",
          alt: "Before and after comparison of scattered knowledge versus a controlled WhatsApp layer",
          caption:
            "From scattered searching to a controlled WhatsApp operating layer.",
          placement: "outcome",
        },
      ],
      glance: {
        role: "Product definition, journey testing, QA, and engineering coordination",
        stage: "Live product iteration across knowledge, documents and training loops",
        usersScale: "~300 employees across 7 automotive brand knowledge bases",
        surfaces:
          "WhatsApp (primary), approved knowledge sources, documents, quizzes / onboarding, manager demand visibility",
        collaboration: "Founders, engineering, operations, content / knowledge owners",
      },
      problem:
        "Product, financing, service and internal operating knowledge was spread across documents, teams and locations. A salesperson speaking with a customer could not pause to search portals, product sheets and team chats. Traditional portals and one-off training were not enough — information had to live in the channel employees already used, while reinforcing knowledge over time.",
      roleNarrative:
        "I worked across product definition and real-user journey testing: clarifying what the product should do in WhatsApp, validating how employees ask for knowledge (including voice), and stress-testing approved-source answers, document access, quizzes, onboarding and ingestion before and after engineering shipped changes.",
      workSections: [
        {
          title: "Meet employees in WhatsApp",
          items: [
            "Validated Ask → Learn → Practise → Apply journeys for models, financing, procedures and customer situations",
            "Tested multilingual text and voice question behaviour against real workforce phrasing",
            "Checked onboarding and quiz flows so training felt continuous rather than a separate portal",
          ],
        },
        {
          title: "Ground answers in approved sources",
          items: [
            "Tested approved-source grounding for product, financing and operating materials",
            "Validated document access, indexing visibility and role-based content behaviour",
            "Exercised voice, image and PDF ingestion paths with realistic automotive content",
          ],
        },
        {
          title: "Keep humans in the loop",
          items: [
            "Reviewed how managers could see recurring demand topics and knowledge gaps",
            "Documented where source updates and corrections needed clearer product paths",
            "Coordinated engineering priorities when answer quality, content ownership and delivery conflicted",
          ],
        },
      ],
      decisions: [
        {
          observed:
            "Employees asked incomplete or conversational questions rather than keyword-perfect queries — often mid-customer conversation.",
          whyItMatters:
            "A knowledge layer that only works with precise prompts fails in the moments people need it most.",
          recommendation:
            "Design answer flows around clarification, source-backed responses and graceful failure — not only retrieval success cases.",
          expectedImpact:
            "Higher trust in answers and fewer dead ends during shift-time usage.",
        },
        {
          observed:
            "Training and quizzes competed with day-to-day knowledge lookup inside the same channel.",
          whyItMatters:
            "If learning moments feel like a separate product, adoption drops even when knowledge lookup works.",
          recommendation:
            "Keep quizzes, onboarding and daily prompts as lightweight loops that reuse the same conversational patterns as knowledge asks.",
          expectedImpact:
            "Training becomes part of the operating habit instead of a parallel task.",
        },
        {
          observed:
            "Managers needed visibility into recurring topics and demand spikes to correct sources and reinforce training.",
          whyItMatters:
            "Without demand signal, knowledge governance stays reactive and content quality drifts.",
          recommendation:
            "Treat demand aggregation and source-update paths as first-class product surfaces, not admin afterthoughts.",
          expectedImpact:
            "Faster correction of weak answers and clearer ownership of knowledge quality.",
        },
      ],
      journey: [
        "Employee asks in WhatsApp (text or voice)",
        "Assistant answers from approved automotive / operating knowledge",
        "Relevant document or next step is shared in-channel",
        "Quiz, prompt or onboarding reinforces the skill",
        "Managers see recurring demand and knowledge gaps",
        "Sources are updated and answers stay controlled",
      ],
      demonstrates: [
        "Product judgement in multilingual, WhatsApp-native workflows",
        "Systems thinking across knowledge, training and governance",
        "Cross-functional execution with engineering and operations",
        "QA discipline on ingestion and answer quality",
        "User empathy for frontline, in-the-flow usage",
      ],
    },
  },
  {
    id: "third-eye",
    number: "02",
    slug: "third-eye",
    title: "Third Eye",
    category: "Operating Intelligence · AI · WhatsApp",
    summary:
      "A WhatsApp-first operating intelligence product that turns frontline employee check-ins into daily briefs, recurring signals and next actions.",
    roleHighlights: [
      "Onboarding flow",
      "Check-in design",
      "Executive dashboard logic",
      "Daily brief UX",
      "Training workflows",
      "Employee / admin flows",
      "Product QA",
      "Meta / WhatsApp integration testing",
      "Engineering handoff",
    ],
    productValue:
      "Converted frontline communication into structured operating intelligence for managers.",
    ctaLabel: "View case study",
    href: "/work/third-eye",
    type: "case-study",
    visualNote:
      "Editorial product patterns for WhatsApp check-ins, daily briefs and executive dashboard logic.",
    caseStudy: {
      sourceNote:
        "Infographics redesigned for this portfolio. Product patterns informed by Third Eye operating intelligence workflows — no live product screenshots or client data are shown.",
      visuals: [
        {
          component: "third-eye-hero",
          alt: "Frontline WhatsApp updates flowing through synthesis into manager-ready actions",
          caption:
            "Frontline updates → synthesis → manager actions — the core Third Eye operating loop.",
          placement: "hero",
        },
        {
          component: "third-eye-problem",
          alt: "Before and after comparison of typical corporate tools versus Third Eye visibility",
          caption:
            "Too many updates, not enough visibility — from scattered chat to a daily manager-ready rhythm.",
          placement: "problem",
        },
        {
          component: "third-eye-approach",
          alt: "WhatsApp check-in converting into a daily operating brief with grouped signals",
          caption:
            "Daily operating signal — WhatsApp in, brief out: risk, ownership, and next action.",
          placement: "approach",
        },
        {
          component: "third-eye-build",
          alt: "Four daily manager outputs in the pilot format",
          caption:
            "Pilot surfaces — WhatsApp pulse, web fallback, morning brief, and owner-linked action queue.",
          placement: "build",
        },
        {
          component: "third-eye-journey",
          alt: "Pulse, synthesise, brief and act operating journey",
          caption:
            "Pulse → synthesise → brief → act — closing the loop between field reality and management.",
          placement: "journey",
        },
        {
          component: "third-eye-brief",
          alt: "Three manager insight cards with issue, branches, owner and next action",
          caption:
            "Manager-level insights — staffing risk, customer trends, and training gaps with clear owners.",
          placement: "governance",
        },
        {
          component: "third-eye-outcome",
          alt: "Institutional memory cards for living knowledge base, turnover-proofing and onboarding",
          caption:
            "Institutional memory — operational knowledge that compounds instead of walking out the door.",
          placement: "outcome",
        },
      ],
      glance: {
        role: "Product flows, QA, Meta/WhatsApp testing, and engineering handoff",
        stage: "Product definition through workflow validation and integration testing",
        usersScale: "Frontline employees and managers / executives",
        surfaces: "WhatsApp check-ins, daily briefs, executive dashboard, admin flows",
        collaboration: "Founders, engineering, operations stakeholders",
      },
      problem:
        "Frontline updates were scattered across chat and informal reporting. Managers needed a reliable way to turn daily check-ins into structured signals, briefs and next actions — without forcing employees onto another heavy tool.",
      roleNarrative:
        "I shaped and tested the operating loop from employee check-in through managerial intelligence: onboarding, check-in design, daily brief UX, dashboard logic, training workflows, and Meta / WhatsApp integration behaviour, with clear handoffs to engineering.",
      workSections: [
        {
          title: "Employee & onboarding flows",
          items: [
            "Designed and tested onboarding so check-ins felt understandable from day one",
            "Refined check-in prompts and sequencing for frontline completion",
            "Validated employee vs admin permissions and path differences",
          ],
        },
        {
          title: "Manager intelligence",
          items: [
            "Worked through daily brief UX: what should surface, in what order, and why",
            "Tested executive dashboard logic for recurring signals and next actions",
            "Connected training workflows to the same operating rhythm",
          ],
        },
        {
          title: "Integration & QA",
          items: [
            "Tested Meta / WhatsApp integration behaviour against real product flows",
            "Documented product issues with expected vs actual journey outcomes",
            "Prepared engineering handoffs that preserved product intent",
          ],
        },
      ],
      decisions: [
        {
          observed:
            "Check-ins that asked for too much structure upfront reduced completion quality.",
          whyItMatters:
            "Operating intelligence depends on consistent input more than perfect input on day one.",
          recommendation:
            "Keep employee check-ins short and intentional; push structure into brief and dashboard logic rather than the frontline prompt.",
          expectedImpact:
            "More reliable daily signal without increasing employee burden.",
        },
        {
          observed:
            "Managers needed recurring patterns and next actions, not a raw transcript of every check-in.",
          whyItMatters:
            "Unprocessed chat volume recreates the original attention problem inside a nicer UI.",
          recommendation:
            "Prioritise briefs that synthesise signals and suggest next actions over exhaustive message dumps.",
          expectedImpact:
            "Faster managerial decisions and clearer operating rhythm.",
        },
        {
          observed:
            "Integration edge cases (delivery, timing, thread behaviour) changed the perceived product quality.",
          whyItMatters:
            "For WhatsApp-first products, channel reliability is part of the product experience.",
          recommendation:
            "Treat Meta / WhatsApp constraints as product requirements in QA and handoff, not only engineering details.",
          expectedImpact:
            "Fewer silent failures between intended flow and lived experience.",
        },
      ],
      journey: [
        "Employee completes WhatsApp check-in",
        "Responses are structured into operating signals",
        "Daily brief aggregates patterns and exceptions",
        "Manager reviews brief / dashboard",
        "Next actions are identified",
        "Follow-up loops back into employee workflows",
      ],
      demonstrates: [
        "Product judgement across employee and executive surfaces",
        "Systems thinking from check-in input to managerial output",
        "Cross-functional execution and engineering handoff",
        "QA discipline on channel integrations",
        "Founder-level prioritisation of signal over noise",
      ],
    },
  },
  {
    id: "hautonomy",
    number: "03",
    slug: "hautonomy",
    title: "Hautonomy",
    category: "Digital Health · Clinical Programs · Data",
    summary:
      "A clinician-led digital health platform combining lab data, biomarker trends, wearables and personalised health programs.",
    roleHighlights: [
      "Patient / admin journey testing",
      "Lab ingestion",
      "Unit conversion",
      "Program enrolment",
      "Phase routing",
      "Retesting logic",
      "Re-enrolment logic",
      "Compliance tracking",
      "Dashboard testing",
      "Clinician review workflows",
    ],
    productValue:
      "Validated complex clinical program logic across patient and admin experiences — including source-preserving lab ingestion and review.",
    ctaLabel: "View case study",
    href: "/work/hautonomy",
    type: "case-study",
    visualNote:
      "Editorial product patterns for lab ingestion, marker review, programs and longitudinal trends.",
    caseStudy: {
      sourceNote:
        "Infographics redesigned for this portfolio. Product patterns informed by Hautonomy workflows and related clinical document-processing references — no live product screenshots or personal health data are shown.",
      visuals: [
        {
          component: "hautonomy-hero",
          alt: "Clinical document transforming into a structured, source-linked record",
          caption:
            "Lab values only become useful when the original document and structured record stay connected.",
          placement: "hero",
        },
        {
          component: "hautonomy-problem",
          alt: "Three challenges in clinical document and marker processing",
          caption:
            "The operating friction: same markers, different forms — and trends that only work after normalization and review.",
          placement: "problem",
        },
        {
          component: "hautonomy-approach",
          alt: "Three product principles for extraction, normalization and clinical judgment",
          caption:
            "Product approach — preserve source, normalize carefully, keep clinical judgment human.",
          placement: "approach",
        },
        {
          component: "hautonomy-build",
          alt: "Intake, extract, organize and review product surfaces",
          caption:
            "One reviewable path from document intake to professional exception handling.",
          placement: "build",
        },
        {
          component: "hautonomy-journey",
          alt: "Four-step journey from intake to review",
          caption:
            "Upload → extract → normalize → review before anything enters the longitudinal record.",
          placement: "journey",
        },
        {
          component: "hautonomy-review",
          alt: "Sanitized exception review workspace comparing source and structured markers",
          caption:
            "Review workspace pattern — original beside extraction, conflicts visible, approval explicit.",
          placement: "governance",
        },
        {
          component: "hautonomy-program",
          alt: "Sanitized program phase progress and marker longitudinal view",
          caption:
            "Program and markers pattern — phase routing, compliance signals and longitudinal marker groups.",
          placement: "demand",
        },
        {
          component: "hautonomy-outcome",
          alt: "Before and after comparison of manual re-entry versus source-preserving review",
          caption:
            "From detached re-keying to a source-preserving, reviewable longitudinal workflow.",
          placement: "outcome",
        },
      ],
      glance: {
        role: "Journey testing, clinical program logic validation, and dashboard QA",
        stage: "Complex workflow validation across patient and clinician experiences",
        usersScale: "Patients in personalised programs; clinicians / admins reviewing progress",
        surfaces:
          "Lab / document intake, marker review, patient programs, dashboards, wearable / check-in pathways",
        collaboration: "Product, clinical program design, engineering",
      },
      problem:
        "Personalised clinical programs depend on correct sequencing across lab ingestion, unit conversion, enrolment, phase routing, retesting and compliance. Lab PDFs and images arrived with different layouts and marker forms; manual re-entry could detach a value from its source. Small logic errors create confusing patient experiences and unreliable clinician review.",
      roleNarrative:
        "I tested the product as a system of clinical program logic and data trust — validating how patient and admin journeys behave when documents, markers, phases and retesting rules interact, and surfacing where the experience diverged from intended clinical workflows.",
      workSections: [
        {
          title: "Data & program entry",
          items: [
            "Tested lab ingestion paths and unit conversion behaviour",
            "Validated program enrolment and phase routing edge cases",
            "Checked how incomplete or unexpected data affected next steps",
          ],
        },
        {
          title: "Lifecycle logic",
          items: [
            "Exercised retesting and re-enrolment logic across program phases",
            "Validated compliance tracking against the intended program rules",
            "Compared patient-facing outcomes with admin / clinician views",
          ],
        },
        {
          title: "Clinician & dashboard review",
          items: [
            "Tested dashboards for review readiness and signal clarity",
            "Walked clinician review workflows for friction and ambiguity",
            "Documented logic gaps that only appear across multi-step journeys",
          ],
        },
      ],
      decisions: [
        {
          observed:
            "Unit conversion and lab ingestion issues could silently change how program progress appeared.",
          whyItMatters:
            "In clinical products, invisible data errors undermine both patient trust and clinician decision-making.",
          recommendation:
            "Treat conversion and ingestion validation as first-class product QA, with explicit checks before phase progression.",
          expectedImpact:
            "More reliable program routing and safer review surfaces.",
        },
        {
          observed:
            "Retesting and re-enrolment rules were easy to misunderstand when viewed only from one role.",
          whyItMatters:
            "Patient and admin experiences can diverge even when each screen looks correct in isolation.",
          recommendation:
            "Validate lifecycle logic as paired journeys: what the patient experiences vs what the clinician sees at the same moment.",
          expectedImpact:
            "Fewer contradictory states and clearer operational ownership.",
        },
        {
          observed:
            "Dashboards needed to support clinician review, not only display data density.",
          whyItMatters:
            "A clinically dense view that does not support decisions creates review friction.",
          recommendation:
            "Prioritise review workflows and exception visibility over packing every biomarker into equal visual weight.",
          expectedImpact:
            "Faster, more confident clinician review of program progress.",
        },
      ],
      journey: [
        "Approved lab PDF / image enters intake",
        "Markers are extracted with source context retained",
        "Units and biomarkers are normalised into the longitudinal record",
        "Exceptions are reviewed beside the original document",
        "Program enrolment and phase routing continue with trusted data",
        "Clinician reviews dashboards, trends and program state",
      ],
      demonstrates: [
        "Systems thinking across clinical program logic",
        "Product judgement in multi-role journeys",
        "QA discipline on data-sensitive workflows",
        "User empathy for both patients and clinicians",
        "Restraint around clinical judgment boundaries",
      ],
    },
  },
  {
    id: "overnight-markets",
    number: "04",
    slug: "overnight-public-markets-reporting",
    title: "Overnight Public Markets Reporting",
    category: "Financial Services · Markets & Reporting",
    summary:
      "A source-linked overnight analyst workflow that prepares a daily Türkiye and international-markets report for morning editorial review before release.",
    context: ["Daily scheduled reporting", "Cross-asset coverage", "Human approval before release"],
    roleHighlights: [...analystAiRole],
    productValue:
      "Moved a bank team's morning starting point from repeated source assembly to review, interpretation and release.",
    ctaLabel: "View case study",
    href: "/work/overnight-public-markets-reporting",
    type: "case-study",
    visualNote:
      "Editorial product patterns for overnight briefing, report preview and editorial review gates.",
    caseStudy: {
      sourceNote:
        "Infographics redesigned for this portfolio. Product context informed by the published AnalystAI overnight public markets reporting case study. Client remains anonymous; examples are sanitized public-source patterns.",
      visuals: [
        {
          component: "overnight-hero",
          alt: "Overnight briefing surface showing cross-asset status and review-ready state",
          caption:
            "Morning starting point — sources, material moves and the first draft in one review surface.",
          placement: "hero",
        },
        {
          component: "overnight-problem",
          alt: "Three operating problems in morning markets reporting",
          caption:
            "The friction: collection competed with analysis, the story crossed asset classes, and judgment still owned the final wording.",
          placement: "problem",
        },
        {
          component: "overnight-approach",
          alt: "Three product principles for overnight markets reporting",
          caption:
            "Product approach — approved sources, separated judgment, repeatable report grammar.",
          placement: "approach",
        },
        {
          component: "overnight-build",
          alt: "Monitor, triage, compose and control product surfaces",
          caption:
            "A reporting desk organized around collection, prioritization, composition and release control.",
          placement: "build",
        },
        {
          component: "overnight-journey",
          alt: "Collect, prioritize, draft and review workflow",
          caption:
            "End-to-end loop from overnight intake to analyst-owned release.",
          placement: "journey",
        },
        {
          component: "overnight-report",
          alt: "Sanitized report preview with source-linked regions and Türkiye editorial boundary",
          caption:
            "Report preview pattern — source cutoff visible, Türkiye implication remains analyst-owned.",
          placement: "governance",
        },
        {
          component: "overnight-outcome",
          alt: "Before and after comparison of morning markets production",
          caption:
            "From repeated assembly to a morning that starts in review.",
          placement: "outcome",
        },
      ],
      glance: {
        role: "Product testing, workflow validation, demo support, and engineering coordination",
        stage: "Reporting-desk workflow from scheduled intake to editorial review",
        usersScale: "Bank team monitoring and communicating international market developments",
        surfaces:
          "Scheduled source collection, cross-market triage, structured report editor, editorial review / release",
        collaboration: "Founders, engineering, client implementation, editorial stakeholders",
      },
      problem:
        "The morning deadline begins while markets are still moving. Skilled professionals spent the earliest part of the day assembling recurring inputs before they could interpret what mattered. Equities, rates, FX, commodities, macro releases and company events had to form one coherent narrative — with materiality, emphasis and final wording remaining editorial decisions.",
      roleNarrative:
        "I tested and refined the overnight reporting workflow as a product: validating how approved inputs become a structured draft, whether source and timing context stay attached to material statements, and whether the review gate clearly separates automated assembly from analyst-owned judgment before release.",
      workSections: [
        {
          title: "Collection → draft",
          items: [
            "Validated scheduled intake across market data, news, macro and company inputs",
            "Tested prioritisation into the bank's recurring report grammar",
            "Checked that drafts arrived in a repeatable section structure for morning review",
          ],
        },
        {
          title: "Evidence & editorial boundary",
          items: [
            "Verified source-linked statements and timing context beside draft sections",
            "Tested where the product must stop short of causal market judgment",
            "Walked Türkiye and cross-region sections for review clarity and escalation points",
          ],
        },
        {
          title: "Review gate & delivery",
          items: [
            "Validated fact-check, edit, approval and distribution handoff states",
            "Supported demos and walkthroughs of the morning-report operating model",
            "Translated client feedback into product issues for engineering",
          ],
        },
      ],
      decisions: [
        {
          observed:
            "Teams needed collection separated from editorial judgment — otherwise automation threatened to publish unverified narrative.",
          whyItMatters:
            "In bank reporting, an unreviewed draft released as truth creates institutional risk.",
          recommendation:
            "Keep assembly and first drafting automatic, but make review status, source cutoff and analyst ownership explicit before release.",
          expectedImpact:
            "Professionals start the morning in review mode rather than reconstruction mode.",
        },
        {
          observed:
            "Cross-asset stories broke when sections looked complete but source context was hard to inspect.",
          whyItMatters:
            "Editors cannot responsibly adjust emphasis without seeing what evidence moved forward.",
          recommendation:
            "Preserve source and timing context beside every material statement in the report editor.",
          expectedImpact:
            "Faster, safer editing and clearer disagreement resolution.",
        },
        {
          observed:
            "Local-market implications (e.g. Türkiye reads) required human ownership even when global context was assembled well.",
          whyItMatters:
            "Automated summary can prepare evidence; it should not pretend to own the bank's market view.",
          recommendation:
            "Surface escalation points where interpretation must remain analyst-owned.",
          expectedImpact:
            "Trust in the workflow without overclaiming automated judgment.",
        },
      ],
      journey: [
        "Scheduled run collects overnight approved inputs",
        "Developments are prioritised into report-relevant groups",
        "Draft is composed in the established report format",
        "Source and timing context stay attached to statements",
        "Analyst reviews, edits and approves",
        "Report is released through the team's existing process",
      ],
      demonstrates: [
        "Product judgement in regulated reporting workflows",
        "Systems thinking from source intake to publication gate",
        "QA discipline on evidence boundaries",
        "Cross-functional execution with clients and engineering",
        "Founder-level prioritisation of judgment over automation theatre",
      ],
    },
  },
  {
    id: "lp-intelligence",
    number: "05",
    slug: "financial-services-lp-intelligence",
    title: "LP Intelligence",
    category: "Private Markets · Investor Finder",
    summary:
      "Institutional investor qualification and relationship intelligence — searchable profiles with type and geography filters, source-backed fields, relationship context and visible evidence gaps.",
    context: ["Real institutions", "Evidence-linked claims", "Relationship fit & context"],
    roleHighlights: [...analystAiRole],
    productValue:
      "Helped turn investor research from one-off lists into a maintained evidence workflow for qualification and briefing.",
    ctaLabel: "View case study",
    href: "/work/financial-services-lp-intelligence",
    type: "case-study",
    visualNote:
      "Editorial product patterns for investor discovery, identity gating, evidence and briefing.",
    caseStudy: {
      sourceNote:
        "Infographics redesigned for this portfolio. Product context informed by the published AnalystAI financial services LP intelligence case study. Customer remains anonymous; public institutional examples are sanitized product patterns.",
      visuals: [
        {
          component: "lp-hero",
          alt: "Relationship map linking pension, manager, advisor and fund nodes to evidence",
          caption:
            "Investor intelligence — relationships stay linked to evidence, not just names.",
          placement: "hero",
        },
        {
          component: "lp-problem",
          alt: "Three problems in institutional investor research",
          caption:
            "The friction: fragmented evidence, dangerous identity matches, and research that decays after the project.",
          placement: "problem",
        },
        {
          component: "lp-approach",
          alt: "Three product principles for evidence gating and lineage",
          caption:
            "Product approach — gate before writing, preserve claim-level lineage, make gaps visible.",
          placement: "approach",
        },
        {
          component: "lp-build",
          alt: "Search, evidence, profile and brief product surfaces",
          caption:
            "From discovery engine to relationship briefing — one maintained evidence layer.",
          placement: "build",
        },
        {
          component: "lp-journey",
          alt: "Discover, gate, structure and decide workflow",
          caption:
            "End-to-end path from candidate evidence to a briefing with gaps still visible.",
          placement: "journey",
        },
        {
          component: "lp-search",
          alt: "Sanitized investor finder with identity resolution and evidence-linked table",
          caption:
            "Search and qualify pattern — identity resolution before shortlist, evidence retained on every claim.",
          placement: "governance",
        },
        {
          component: "lp-outcome",
          alt: "Before and after comparison of investor research workflows",
          caption:
            "From one-off lists to a maintained evidence workflow.",
          placement: "outcome",
        },
      ],
      glance: {
        role: "Product testing, evidence-path validation, demo support, and engineering coordination",
        stage: "Investor discovery → identity gating → profile / briefing surfaces",
        usersScale:
          "Institutional investment team working across LP, GP, strategic and relationship intelligence",
        surfaces:
          "Entity discovery, evidence gating, canonical profiles, relationship maps, source-backed briefs",
        collaboration: "Founders, engineering, client research workflows",
      },
      problem:
        "A list of institutions is not investor intelligence. Teams could find names, but struggled to establish the right entity, mandate and relationships, which claims had evidence, and what still needed verification before briefing or outreach. Aliases and similarly named institutions made weak matches dangerous.",
      roleNarrative:
        "I tested the investor-intelligence product as an evidence pipeline: discovery is only the beginning. I validated identity resolution, claim-level provenance, conflict and gap visibility, and whether profiles and briefings stayed decision-ready without silently promoting weak evidence.",
      workSections: [
        {
          title: "Discovery & identity",
          items: [
            "Tested candidate intake across institutions, managers, funds and documents",
            "Validated duplicate resolution and canonical entity behaviour",
            "Checked rejection / hold states when identity or mandate evidence was insufficient",
          ],
        },
        {
          title: "Evidence & profiles",
          items: [
            "Verified claim-level source lineage on mandate, allocation and relationship signals",
            "Tested freshness, conflict and readiness visibility beside investor views",
            "Walked profile and shortlist flows for screening fit without hiding gaps",
          ],
        },
        {
          title: "Briefings & delivery",
          items: [
            "Validated briefing preparation only after evidence and mandate checks were visible",
            "Supported demos of search → qualify → brief journeys",
            "Translated research-workflow feedback into engineering-ready product issues",
          ],
        },
      ],
      decisions: [
        {
          observed:
            "Discovery alone produced names that were not yet safe to treat as canonical profiles.",
          whyItMatters:
            "Identity errors compound into wrong outreach, wrong mandates and polluted CRMs.",
          recommendation:
            "Gate evidence for entity fit, relevance and duplication before writing to a maintained record.",
          expectedImpact:
            "Cleaner canonical profiles and fewer dangerous merges.",
        },
        {
          observed:
            "Research decayed after projects when spreadsheets kept conclusions but lost source lineage.",
          whyItMatters:
            "Without provenance, teams cannot audit or refresh investor intelligence later.",
          recommendation:
            "Preserve claim-level lineage and make gaps, conflicts and staleness visible in the product.",
          expectedImpact:
            "Briefings start from maintained context instead of repeated discovery.",
        },
        {
          observed:
            "Teams needed to see what was missing as much as what was known.",
          whyItMatters:
            "Silent completeness creates false confidence before outreach or IC prep.",
          recommendation:
            "Treat missing, stale, conflicting and review-pending fields as first-class product states.",
          expectedImpact:
            "Clearer next verification steps and safer targeting decisions.",
        },
      ],
      journey: [
        "Discover candidate institutions and evidence",
        "Resolve identity, relevance and duplicates",
        "Extract and normalize decision signals with provenance",
        "Review conflicts, gaps and freshness",
        "Build shortlist / canonical profile",
        "Prepare source-backed briefing for next action",
      ],
      demonstrates: [
        "Product judgement in evidence-heavy research tools",
        "Systems thinking across discovery, gating and briefing",
        "QA discipline on identity and provenance",
        "Cross-functional execution with private-markets workflows",
        "User empathy for analysts who must verify before acting",
      ],
    },
  },
  {
    id: "regulatory-compliance",
    number: "06",
    slug: "regulatory-risk-compliance-intelligence",
    title: "Regulatory Risk & Compliance",
    category: "Risk & Compliance · Document Analyst",
    summary:
      "A regulatory-change inbox that turns monitored updates into owned compliance work — jurisdiction, authority, dates, business impact, policy coverage, source evidence, owner and review status.",
    context: ["Source-to-owner traceability", "Human judgment explicit", "Live review status"],
    roleHighlights: [...analystAiRole],
    productValue:
      "Connected monitoring, interpretation support, policy context and ownership into one reviewable compliance workflow.",
    ctaLabel: "View case study",
    href: "/work/regulatory-risk-compliance-intelligence",
    type: "case-study",
    visualNote:
      "Editorial product patterns for regulatory monitoring, policy compare and owned review.",
    caseStudy: {
      sourceNote:
        "Infographics redesigned for this portfolio. Product context informed by the published AnalystAI regulatory risk & compliance intelligence case study. Examples are sanitized; internal policy text and legal conclusions remain client-controlled.",
      visuals: [
        {
          component: "regulatory-hero",
          alt: "Regulatory review surface showing requirement, policy coverage and ownership states",
          caption:
            "Compliance cockpit — evidence retained beside every human decision.",
          placement: "hero",
        },
        {
          component: "regulatory-problem",
          alt: "Three operating problems in regulatory monitoring",
          caption:
            "The friction: noisy monitoring, organization-specific impact, and audit trails that crossed systems.",
          placement: "problem",
        },
        {
          component: "regulatory-approach",
          alt: "Three product principles for regulatory intelligence",
          caption:
            "Product approach — prefer instruments, model organisational relevance, keep evidence beside decisions.",
          placement: "approach",
        },
        {
          component: "regulatory-build",
          alt: "Monitor, analyze, compare and act product surfaces",
          caption:
            "One workspace spanning intake, obligation analysis, policy gaps and ownership.",
          placement: "build",
        },
        {
          component: "regulatory-journey",
          alt: "Monitor, interpret, compare and own workflow",
          caption:
            "End-to-end path from monitored sources to owned compliance work.",
          placement: "journey",
        },
        {
          component: "regulatory-monitor",
          alt: "Sanitized regulatory change monitor with inbox and extracted change detail",
          caption:
            "Change monitor pattern — inbox to obligation detail, with human review required before action.",
          placement: "governance",
        },
        {
          component: "regulatory-outcome",
          alt: "Before and after comparison of regulatory compliance workflows",
          caption:
            "From reconstructed context across tools to owned, reviewable work.",
          placement: "outcome",
        },
      ],
      glance: {
        role: "Product testing, compliance workflow validation, demo support, and engineering coordination",
        stage: "Monitor → interpret → compare policy → assign owned action",
        usersScale:
          "Global operating organization managing regulatory and policy obligations across business areas",
        surfaces:
          "Regulatory inbox, obligation / impact workspace, policy gap analysis, ownership and evidence trail",
        collaboration: "Founders, engineering, compliance / risk stakeholders",
      },
      problem:
        "Finding a regulatory update is only the first step. Teams still had to determine whether an item was a concrete requirement, which jurisdiction and business area it affected, how it compared with internal policy, who owned the decision, and what evidence supported the conclusion — while monitoring produced overlapping noise.",
      roleNarrative:
        "I tested the compliance product as a traceable path from source change to owned work: validating intake relevance, obligation extraction, organisation-specific impact classification, policy comparison, and whether review states kept automated classification clearly separate from approved professional judgment.",
      workSections: [
        {
          title: "Monitor & interpret",
          items: [
            "Validated monitored intake across jurisdictions and source classes",
            "Tested filtering for concrete instruments vs commentary noise",
            "Checked extraction of obligations, publication / effective dates and categories",
          ],
        },
        {
          title: "Impact & policy compare",
          items: [
            "Walked business-area relevance and impact classification flows",
            "Tested internal policy comparison for coverage, ambiguity and potential gaps",
            "Verified that quoted source context stayed beside conclusions",
          ],
        },
        {
          title: "Own & review",
          items: [
            "Validated owner assignment, review queues and decision records",
            "Supported demos of source → owner operating models",
            "Documented where uncertainty needed explicit human review gates",
          ],
        },
      ],
      decisions: [
        {
          observed:
            "Monitoring alone produced noise — commentary and index pages competed with concrete instruments.",
          whyItMatters:
            "Compliance attention is scarce; undifferentiated feeds hide material obligations.",
          recommendation:
            "Prefer official instruments over secondary commentary, and model relevance around the organisation's jurisdictions and business areas.",
          expectedImpact:
            "Higher-signal inboxes and clearer prioritisation.",
        },
        {
          observed:
            "Impact was organisation-specific even when the regulatory text was the same.",
          whyItMatters:
            "Generic severity labels do not tell a company whether to act, watch or ignore.",
          recommendation:
            "Classify impact with business taxonomy and keep policy coverage visible beside the item.",
          expectedImpact:
            "Faster routing to the right owner with less reconstructed context.",
        },
        {
          observed:
            "Audit trails broke when source text, comments, ownership and remediation lived in separate tools.",
          whyItMatters:
            "Regulated organisations need a reviewable chain from update to action.",
          recommendation:
            "Keep evidence, status, ownership and corrections connected on one compliance surface.",
          expectedImpact:
            "Decisions become owned, reviewable work rather than isolated commentary.",
        },
      ],
      journey: [
        "Collect new material from defined regulatory sources",
        "Extract concrete obligations and dates",
        "Classify organisation-specific business relevance",
        "Compare against internal policy / controls",
        "Professional reviews and records the decision",
        "Owner carries action forward with evidence retained",
      ],
      demonstrates: [
        "Product judgement in regulated compliance workflows",
        "Systems thinking from monitoring to ownership",
        "QA discipline on evidence and review boundaries",
        "Cross-functional execution with risk / compliance stakeholders",
        "Restraint: automation supports judgment, does not replace it",
      ],
    },
  },
  {
    id: "cre-mapping",
    number: "07",
    slug: "commercial-real-estate-mapping",
    title: "Commercial Real Estate Mapping",
    category: "Commercial Real Estate · Research & Mapping",
    summary:
      "A property-intelligence workflow combining structured listings, geospatial search, auction tracking, bid context, filters and analyst review — map and record always synchronized.",
    context: ["Map + record synced", "Auction context in-asset", "Analyst review before handoff"],
    roleHighlights: [...analystAiRole],
    productValue:
      "Turned fragmented property, location and auction context into one shared geographic workspace for screening and handoff.",
    ctaLabel: "View case study",
    href: "/work/commercial-real-estate-mapping",
    type: "case-study",
    visualNote:
      "Editorial product patterns for market map, property review, sheet and insights.",
    caseStudy: {
      sourceNote:
        "Infographics redesigned for this portfolio. Product patterns informed by the published AnalystAI commercial real estate mapping case study and related product references — no live listing maps, addresses, bids or personal/client data are shown.",
      visuals: [
        {
          component: "cre-hero",
          alt: "Sanitized market map with selected property context",
          caption:
            "Property intelligence starts with geography and record staying synchronized.",
          placement: "hero",
        },
        {
          component: "cre-approach",
          alt: "Three product principles for CRE mapping",
          caption:
            "Product approach — one record across map and table, inspectable qualification, honest failure states.",
          placement: "approach",
        },
        {
          component: "cre-workspace",
          alt: "Sanitized market map and property review workspace",
          caption:
            "Review workspace pattern — selected asset, auction/source state, and analyst handoff in one surface.",
          placement: "governance",
        },
        {
          component: "cre-build",
          alt: "Data, explore, qualify and deliver product surfaces",
          caption:
            "From intake to reviewed opportunity output.",
          placement: "build",
        },
        {
          component: "cre-journey",
          alt: "Ingest, explore, review and carry workflow",
          caption:
            "End-to-end path from structured records to advisory handoff.",
          placement: "journey",
        },
        {
          component: "cre-sheet",
          alt: "Sanitized properties sheet table",
          caption:
            "Sheet pattern — structured records for screening without live pricing exposure.",
          placement: "problem",
        },
        {
          component: "cre-insights",
          alt: "Illustrative market insights pattern by asset type",
          caption:
            "Insights pattern — filters, synchronized lists and reviewable market signals.",
          placement: "demand",
        },
        {
          component: "cre-outcome",
          alt: "Before and after comparison of CRE research workflows",
          caption:
            "From fragmented files to one shared geographic workspace.",
          placement: "outcome",
        },
      ],
      glance: {
        role: "Product testing, map/table workflow validation, demo support, and engineering coordination",
        stage: "Ingest → explore → review → carry qualified opportunities forward",
        usersScale:
          "Commercial real-estate advisory team evaluating property and auction opportunities",
        surfaces:
          "Property / auction intake, interactive market map, synchronized list, detail / comparison, reviewed handoff",
        collaboration: "Founders, engineering, advisory / research stakeholders",
      },
      problem:
        "Property intelligence loses meaning when location is separated from the record. Records arrived in inconsistent shapes; tables hid geographic relationships; analysts moved between map tools, spreadsheets and source files to validate one opportunity.",
      roleNarrative:
        "I tested the CRE mapping product as one market surface: validating that map and table describe the same record, that auction and bid context stay inspectable, and that missing coordinates, incomplete rows and unavailable map services fail clearly instead of looking like usable data.",
      workSections: [
        {
          title: "Structure & explore",
          items: [
            "Validated normalization of asset, location, status, bid and source fields",
            "Tested geographic and analytical filters with synchronized map / list selection",
            "Checked clustering, empty results and missing-coordinate behaviour",
          ],
        },
        {
          title: "Qualify & review",
          items: [
            "Walked property detail combining facts, auction timing, bid context and source state",
            "Tested analyst notes, corrections and review-before-handoff states",
            "Verified that a plotted point is not treated as a decision-ready opportunity",
          ],
        },
        {
          title: "Carry forward",
          items: [
            "Validated compare and qualified-set handoff into advisory workflows",
            "Supported demos of screening → review → deliver journeys",
            "Documented UX and data-edge issues for engineering",
          ],
        },
      ],
      decisions: [
        {
          observed:
            "When map and table drifted, teams effectively maintained two versions of the market.",
          whyItMatters:
            "Advisory work fails if geography and underlying fields disagree.",
          recommendation:
            "Keep every filter and selection updating both views from one structured property record.",
          expectedImpact:
            "Faster screening with shared understanding across the team.",
        },
        {
          observed:
            "A location marker could look complete while source status, bids or fields were still missing.",
          whyItMatters:
            "Plotted points are easy to over-trust in client conversations.",
          recommendation:
            "Make source state, missing fields, corrections and review status explicit on the selected record.",
          expectedImpact:
            "Clearer distinction between a plotted asset and a reviewed opportunity.",
        },
        {
          observed:
            "Failure states (unavailable maps, incomplete rows, empty filters) were as important as happy paths.",
          whyItMatters:
            "Disguised empty data creates false confidence in market coverage.",
          recommendation:
            "Design empty and unavailable states as part of the product, not edge-case afterthoughts.",
          expectedImpact:
            "More honest exploration and safer handoffs.",
        },
      ],
      journey: [
        "Ingest and structure property / auction records",
        "Explore market on synchronized map and table",
        "Filter by attributes, geography and auction state",
        "Open full context for a selected asset",
        "Analyst reviews, corrects and marks readiness",
        "Carry qualified set into advisory / client workflow",
      ],
      demonstrates: [
        "Product judgement in geospatial research tools",
        "Systems thinking across data, map and review states",
        "QA discipline on synchronization and failure modes",
        "Cross-functional execution with advisory workflows",
        "User empathy for analysts qualifying opportunities under time pressure",
      ],
    },
  },
  {
    id: "clinical-docs",
    number: "08",
    slug: "clinical-document-processing",
    title: "Clinical Document Processing",
    category: "Healthcare Operations · Document Processing",
    summary:
      "A document-processing workflow that turns clinical PDFs and images into review-ready longitudinal records — structured lab and body-composition observations with source retained for every value.",
    context: ["Source retained per value", "Longitudinal structured record", "Professional review before approval"],
    roleHighlights: [...analystAiRole],
    productValue:
      "Connected document intake, extraction, normalization and professional exception review without treating extraction as diagnosis.",
    ctaLabel: "View case study",
    href: "/work/clinical-document-processing",
    type: "case-study",
    visualNote:
      "Editorial product patterns for clinical document intake, extraction, review and longitudinal records.",
    caseStudy: {
      sourceNote:
        "Infographics redesigned for this portfolio. Product context informed by the published AnalystAI clinical document processing case study. Demonstrations use sanitized clinical data and are not diagnostic advice.",
      visuals: [
        {
          component: "clinical-hero",
          alt: "Clinical document upload flowing through extraction to a source-linked longitudinal record",
          caption:
            "Upload → extract → compare — every value stays tied to the page it came from.",
          placement: "hero",
        },
        {
          component: "clinical-problem",
          alt: "Three challenges in clinical document processing and longitudinal trust",
          caption:
            "The friction: varied layouts, detached evidence, and review boundaries before trends are usable.",
          placement: "problem",
        },
        {
          component: "clinical-approach",
          alt: "Three product principles for source retention, normalization and clinical boundaries",
          caption:
            "Product approach — preserve source, normalize carefully, keep clinical judgment human.",
          placement: "approach",
        },
        {
          component: "clinical-build",
          alt: "Intake, extract, normalize and approve product surfaces",
          caption:
            "One reviewable path from document intake to authorized approval.",
          placement: "build",
        },
        {
          component: "clinical-journey",
          alt: "Upload through approve clinical document journey",
          caption:
            "Upload → extract → compare → approve — extraction is not diagnosis.",
          placement: "journey",
        },
        {
          component: "clinical-review",
          alt: "Exception review workspace comparing source page and reviewer decision",
          caption:
            "Review workspace — conflicts visible, approval explicit, clinical boundary stated.",
          placement: "governance",
        },
        {
          component: "clinical-outcome",
          alt: "Before and after comparison of manual re-entry versus source-preserving workflow",
          caption:
            "From detached re-keying to a reviewable, source-preserving longitudinal path.",
          placement: "outcome",
        },
      ],
      glance: {
        role: "Product testing, extraction / review workflow validation, and engineering coordination",
        stage: "Upload → extract → normalize → resolve exceptions → approve longitudinal record",
        usersScale:
          "Healthcare operations team processing recurring lab and clinical documents from multiple formats",
        surfaces:
          "Document intake, structured observation capture, source side-by-side review, longitudinal trends, approval controls",
        collaboration: "Founders, engineering, clinical / operations reviewers",
      },
      problem:
        "A clinical value is only useful when its source and context survive extraction. Lab and body-composition documents arrived as PDFs and images with different layouts, labels, units and ranges. Manual re-keying slowed work and could detach a number from the page, date, unit or document where it appeared.",
      roleNarrative:
        "I tested the clinical document workflow as a source-preserving path: validating extraction of markers, units and ranges; checking that original labels and page locations stay visible; and ensuring exception review clearly separates processing from clinical judgment before anything enters the longitudinal record.",
      workSections: [
        {
          title: "Intake & extract",
          items: [
            "Validated PDF / image intake and page preparation paths",
            "Tested candidate capture of test names, values, units, ranges, dates and panels",
            "Checked visible failure states when extraction was incomplete or uncertain",
          ],
        },
        {
          title: "Normalize & compare",
          items: [
            "Walked marker matching into a maintained schema without erasing original labels",
            "Tested side-by-side comparison between structured values and source pages",
            "Validated conflict handling when the same marker appeared in competing forms",
          ],
        },
        {
          title: "Review & approve",
          items: [
            "Exercised exception queues, confidence states and reviewer approvals",
            "Confirmed only approved fields feed longitudinal views",
            "Supported demos emphasising that extraction is not diagnosis",
          ],
        },
      ],
      decisions: [
        {
          observed:
            "The same marker appeared under different names, units and layouts across providers.",
          whyItMatters:
            "Without normalization and retained original context, longitudinal trends become misleading.",
          recommendation:
            "Map to canonical markers while keeping original label, unit, range, date and source location available for review.",
          expectedImpact:
            "Usable trends without losing auditability.",
        },
        {
          observed:
            "Manual entry separated values from evidence and slowed recurring document processing.",
          whyItMatters:
            "Detached numbers are hard to trust in clinical operations.",
          recommendation:
            "Keep the original document beside every extracted value through approval.",
          expectedImpact:
            "Faster processing with stronger review confidence.",
        },
        {
          observed:
            "Teams needed the product to say — through controls — that extraction is not clinical interpretation.",
          whyItMatters:
            "Overconfident automation creates patient-safety and liability risk.",
          recommendation:
            "Require authorized review for exceptions and keep diagnostic claims outside the automated step.",
          expectedImpact:
            "Clear operating boundary between structuring information and professional care decisions.",
        },
      ],
      journey: [
        "Upload an approved clinical PDF or image",
        "Extract candidate observations from the source",
        "Normalize markers into the longitudinal schema",
        "Compare structured values with original pages",
        "Resolve exceptions with an authorized reviewer",
        "Approve fields into the maintained longitudinal record",
      ],
      demonstrates: [
        "Product judgement in healthcare document workflows",
        "Systems thinking across extraction, normalization and review",
        "QA discipline on units, conflicts and source retention",
        "Cross-functional execution with clinical operations",
        "Restraint around clinical judgment boundaries",
      ],
    },
  },
  {
    id: "analystai",
    number: "09",
    slug: "analystai-enterprise",
    title: "AnalystAI Enterprise & DDQ",
    category: "Investment Technology · AI · Due Diligence",
    summary:
      "An AI-native workspace for document analysis, due diligence, data rooms, tasks and source-linked investment outputs.",
    roleHighlights: [
      "Document Q&A testing",
      "Source validation",
      "DDQ workflows",
      "Data room UX",
      "Task flows",
      "Libraries",
      "Reporting",
      "Demo support",
      "Onboarding",
      "Client feedback",
      "Engineering coordination",
    ],
    productValue:
      "Helped turn complex investment workflows into structured, source-linked AI products.",
    ctaLabel: "View case study",
    href: "/work/analystai-enterprise",
    type: "case-study",
    brandLogo: "/images/analystai-logo.png",
    brandUrl: "https://www.analystai.ai",
    visualNote:
      "Editorial product patterns for document Q&A, DDQ workflows and source-linked diligence.",
    caseStudy: {
      sourceNote:
        "Infographics redesigned for this portfolio. Product patterns informed by AnalystAI enterprise diligence workflows — no client documents or proprietary deal data are shown.",
      visuals: [
        {
          component: "analystai-hero",
          alt: "Document Q&A with source-linked answer and citation verification panel",
          caption:
            "Source-linked answers — investment teams verify evidence before they share or act.",
          placement: "hero",
        },
        {
          component: "analystai-problem",
          alt: "Three operating problems in AI diligence and workspace fragmentation",
          caption:
            "The friction: unsupported summaries, drifting task state, and demo-vs-implementation gaps.",
          placement: "problem",
        },
        {
          component: "analystai-approach",
          alt: "Three product principles for source linkage, connected workspace and client feedback",
          caption:
            "Product approach — citations as behaviour, one operating system, client sessions as input.",
          placement: "approach",
        },
        {
          component: "analystai-build",
          alt: "Ask, work, organize and report product pillars",
          caption:
            "Document Q&A, DDQ, libraries and reporting as one diligence workspace.",
          placement: "build",
        },
        {
          component: "analystai-journey",
          alt: "Ingest through report diligence journey",
          caption:
            "Ingest → query → verify → coordinate → report — diligence as a connected loop.",
          placement: "journey",
        },
        {
          component: "analystai-workspace",
          alt: "DDQ workspace with linked tasks and source-backed answers",
          caption:
            "Workspace pattern — DDQ progress, source-backed answers and open tasks in one view.",
          placement: "governance",
        },
        {
          component: "analystai-outcome",
          alt: "Before and after comparison of fragmented AI tools versus connected diligence workspace",
          caption:
            "From confident-but-unverified outputs to a workspace teams can trust and coordinate in.",
          placement: "outcome",
        },
      ],
      glance: {
        role: "Product testing, client feedback loops, demos, and engineering coordination",
        stage: "Enterprise AI product iteration across diligence and document workflows",
        usersScale: "Investment and diligence teams working across documents and data rooms",
        surfaces: "Document Q&A, DDQ, data rooms, tasks, libraries, reporting",
        collaboration: "Founders, engineering, clients, implementation",
      },
      problem:
        "Investment workflows depend on trust in sources, structured diligence processes and usable outputs. AI features only create value when document Q&A, DDQ, data rooms and tasks stay connected to verifiable evidence and real operating habits.",
      roleNarrative:
        "I worked across product testing and founder-facing execution: validating document Q&A and source-linked behaviour, walking DDQ and data room workflows, supporting demos and onboarding, translating client feedback into product issues, and coordinating with engineering until fixes and improvements shipped.",
      workSections: [
        {
          title: "AI trust & document workflows",
          items: [
            "Tested document Q&A for usefulness, failure modes and source linkage",
            "Validated that outputs could be traced back to underlying evidence",
            "Surfaced where AI confidence and user trust diverged",
          ],
        },
        {
          title: "Diligence & workspace flows",
          items: [
            "Walked DDQ workflows end to end",
            "Tested data room UX, libraries, task flows and reporting paths",
            "Checked whether workspace structure matched how diligence work actually happens",
          ],
        },
        {
          title: "Client, demo & delivery",
          items: [
            "Supported demos and onboarding with product-accurate narratives",
            "Captured client feedback and converted it into actionable product context",
            "Coordinated engineering priorities around implementation reality",
          ],
        },
      ],
      decisions: [
        {
          observed:
            "Users needed source-linked answers more than fluent summaries.",
          whyItMatters:
            "In investment contexts, an unsupported answer creates risk even when it sounds polished.",
          recommendation:
            "Treat source validation and citation clarity as core product behaviour, not a secondary display detail.",
          expectedImpact:
            "Higher trust in AI outputs during diligence work.",
        },
        {
          observed:
            "DDQ and data room flows broke down when task state and document context drifted apart.",
          whyItMatters:
            "Diligence is a coordinated process; fragmented surfaces create rework and missed follow-ups.",
          recommendation:
            "Keep tasks, documents and reporting linked as one operating system rather than adjacent features.",
          expectedImpact:
            "Cleaner handoffs inside diligence teams and fewer lost threads.",
        },
        {
          observed:
            "Client feedback often pointed to workflow friction that demos alone did not reveal.",
          whyItMatters:
            "Enterprise product quality depends on lived implementation, not only feature completeness.",
          recommendation:
            "Feed onboarding and client sessions directly into product issue documentation and priority discussions.",
          expectedImpact:
            "Faster correction of the gaps that matter in real usage.",
        },
      ],
      journey: [
        "Documents enter the workspace / data room",
        "User asks questions or works a DDQ path",
        "AI returns source-linked outputs",
        "Tasks and libraries organise follow-up",
        "Reporting captures diligence progress",
        "Team revisits evidence with shared context",
      ],
      demonstrates: [
        "Product judgement in AI trust and diligence workflows",
        "Cross-functional execution with clients and engineering",
        "QA discipline on source-linked outputs",
        "Systems thinking across documents, tasks and reporting",
        "Founder-level prioritisation under client pressure",
      ],
    },
  },
  {
    id: "product-reviews",
    number: "10",
    slug: "product-reviews",
    title: "Selected Product Reviews",
    category: "Product Sense · UX · Gaming",
    summary:
      "Independent product reviews focused on FTUE, progression, gameplay, monetization, UX and interaction design.",
    roleHighlights: [
      "Critical Strike",
      "Polygun Arena",
      "Product recommendations",
      "Revised user flows",
      "Interaction concepts",
      "Prototypes",
      "Prioritisation",
    ],
    productValue:
      "Goes beyond observations into recommendations, revised flows, interaction concepts, prototypes and prioritisation.",
    ctaLabel: "View product reviews",
    href: "/work/product-reviews",
    type: "reviews",
    visualNote:
      "SCREENSHOT PLACEHOLDER: Add annotated review frames / prototype stills for Critical Strike and Polygun Arena here.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getCaseStudyProjects(): Project[] {
  return projects.filter((project) => project.type === "case-study");
}
