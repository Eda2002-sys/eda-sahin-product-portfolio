export type DecisionFinding = {
  observed: string;
  whyItMatters: string;
  recommendation: string;
  expectedImpact: string;
};

export type TestingInsight = {
  /** Compact headline + body (Socida / Third Eye). */
  title?: string;
  body?: string;
  /** Editorial Observed / Product decision pair. */
  observed?: string;
  productDecision?: string;
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
  /** Optional surface label above the visual (e.g. Product in practice). */
  label?: string;
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
  /** Defaults to "What I worked on" when omitted. */
  workSectionsTitle?: string;
  /** Compact insight layout (preferred when short). */
  insights?: TestingInsight[];
  /** Detailed 4-column findings layout. */
  decisions: DecisionFinding[];
  journey: string[];
  /** Optional 0-based index to highlight a decision point in the Key workflow list. */
  journeyHighlightIndex?: number;
  demonstrates: string[];
  /** Optional closing line under the Outcome visual. */
  outcomeLine?: string;
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
  /** Compact before → after line for homepage cards. */
  whatChanged: string;
  productValue: string;
  ctaLabel: string;
  href: string;
  type: "case-study";
  visualNote: string;
  coverImage?: string;
  brandLogo?: string;
  brandUrl?: string;
  caseStudy?: CaseStudyContent;
};

export const projects: Project[] = [
  {
    id: "socida-ai",
    number: "01",
    slug: "socida-ai",
    title: "Socida AI",
    category: "Automotive · Workforce Intelligence · WhatsApp",
    summary:
      "A WhatsApp-based knowledge system for a distributed automotive workforce, combining approved product information, documents and continuous reinforcement in one channel.",
    context: ["~300 employees", "7 brand knowledge bases", "WhatsApp-first"],
    roleHighlights: [
      "Knowledge workflow design",
      "Approved-source grounding",
      "Voice, text & document QA",
      "Continuous reinforcement loop",
    ],
    whatChanged: "Scattered knowledge → controlled WhatsApp workflow",
    productValue:
      "Turned fragmented brand knowledge into a controlled, in-channel workflow employees could use during live customer conversations.",
    ctaLabel: "View case study",
    href: "/work/socida-ai",
    type: "case-study",
    visualNote:
      "WhatsApp knowledge and continuous reinforcement surface for a distributed automotive workforce.",
    caseStudy: {
      sourceNote:
        "Visuals are representative and created for this portfolio.",
      visuals: [
        {
          component: "socida-whatsapp",
          alt: "Editorial mock of WhatsApp company knowledge chat with voice question, approved answer, document and reinforcement prompt",
          caption:
            "Employee view: ask by voice or text, receive approved answers, documents and reinforcement in WhatsApp.",
          placement: "hero",
        },
        {
          component: "socida-problem",
          alt: "Fragmented knowledge sources leading to no single point of access",
          caption:
            "The operating friction: many sources, no single point of access mid-conversation.",
          placement: "problem",
        },
        {
          component: "socida-journey",
          alt: "Operating loop across Ask, Answer, Apply, Reinforce and Improve",
          caption:
            "Ask → Answer → Apply → Reinforce → Improve: employee use and source correction as one loop.",
          placement: "journey",
        },
        {
          component: "socida-governance",
          alt: "Customer question flowing through brand context and approved source into a usable WhatsApp answer",
          caption:
            "Product logic: WhatsApp question → brand context → approved source → answer, with demand feeding source owners.",
          placement: "governance",
        },
        {
          component: "socida-outcome",
          alt: "Before and after comparison of scattered knowledge versus a controlled WhatsApp layer",
          placement: "outcome",
        },
      ],
      glance: {
        role: "Product definition, workflow testing, QA, engineering coordination",
        stage: "Live product · iterative testing and delivery",
        usersScale: "~300 employees across 7 automotive brand knowledge bases",
        surfaces:
          "WhatsApp, approved sources, documents, continuous reinforcement, manager visibility",
        collaboration: "Founders, engineering, operations, content / knowledge owners",
      },
      problem:
        "Product, financing, service and operating knowledge lived across documents, portals, chats and one-off training sessions. Employees needed answers during live customer conversations, not after searching multiple systems. The product therefore had to work inside WhatsApp, where the workforce already communicated.",
      roleNarrative:
        "I worked across product definition and real-user journey testing, shaping how employees asked for knowledge in WhatsApp and validating how answers, documents and continuous reinforcement behaved across text, voice and role-specific workflows.",
      workSectionsTitle: "What I worked on",
      workSections: [
        {
          title: "Meet employees in WhatsApp",
          items: [
            "Validated Ask → Learn → Practise → Apply under mid-conversation timing pressure",
            "Tested multilingual text and voice phrasing against real workforce questions",
            "Checked that reinforcement reused the same conversational patterns as lookup",
          ],
        },
        {
          title: "Ground answers in approved sources",
          items: [
            "Verified answers stayed tied to approved product and financing materials",
            "Tested brand and role visibility across the seven knowledge bases",
            "Exercised voice, image and PDF intake against realistic automotive content",
          ],
        },
        {
          title: "Keep humans in the loop",
          items: [
            "Validated human review when answers were incomplete, flagged or needed correction",
            "Surfaced recurring demand so source owners could act on weak topics",
            "Worked with engineering to resolve issues where answer quality, source ownership and delivery behaviour conflicted.",
          ],
        },
      ],
      decisions: [],
      insights: [
        {
          title: "Questions were conversational, not keyword-perfect.",
          body: "Employees often asked incomplete questions mid-customer conversation. Retrieval needed clarification, source-linked answers and explicit failure states rather than assuming perfect prompts.",
        },
        {
          title: "Usage signals needed a correction loop.",
          body: "Recurring questions were visible, but knowledge owners needed a clear path from demand → source update → improved answer quality.",
        },
      ],
      journey: [],
      demonstrates: [],
      outcomeLine:
        "Knowledge lookup, continuous reinforcement and source improvement became one operating loop instead of separate systems.",
    },
  },
  {
    id: "third-eye",
    number: "02",
    slug: "third-eye",
    title: "Third Eye",
    category: "Operating Intelligence · AI · WhatsApp",
    summary:
      "A WhatsApp-first operating intelligence product that turns lightweight frontline check-ins into recurring signals, manager-ready briefs and clear next actions.",
    roleHighlights: [
      "Check-in design",
      "Daily brief UX",
      "Signal → action logic",
      "Meta / WhatsApp QA",
    ],
    whatChanged: "Frontline updates → manager actions",
    productValue:
      "Shaped the loop from employee check-in to manager action: what gets asked, what becomes a signal, and what gets assigned next.",
    ctaLabel: "View case study",
    href: "/work/third-eye",
    type: "case-study",
    visualNote:
      "Editorial product patterns for WhatsApp check-ins, daily briefs and executive dashboard logic.",
    caseStudy: {
      sourceNote:
        "Visuals are representative and created for this portfolio.",
      visuals: [
        {
          component: "third-eye-hero",
          alt: "Frontline WhatsApp updates flowing through synthesis into manager-ready actions",
          caption:
            "Frontline updates → synthesis → manager actions: the core Third Eye operating loop.",
          placement: "hero",
        },
        {
          component: "third-eye-problem",
          alt: "Before and after comparison of typical corporate tools versus Third Eye visibility",
          caption:
            "From scattered chat and manual follow-up to a daily manager-ready rhythm.",
          placement: "problem",
        },
        {
          component: "third-eye-approach",
          alt: "WhatsApp check-in converting into a daily operating brief with grouped signals",
          caption:
            "Daily operating signal: WhatsApp in, brief out with risk, ownership and next action.",
          placement: "approach",
        },
        {
          component: "third-eye-brief",
          alt: "Three manager insight cards with issue, branches, owner and next action",
          caption:
            "Manager-level insights: staffing risk, customer trends and training gaps with clear owners.",
          placement: "governance",
        },
        {
          component: "third-eye-outcome",
          alt: "Before and after: scattered frontline updates versus a daily operating rhythm",
          placement: "outcome",
        },
      ],
      glance: {
        role: "Product flows, QA, Meta/WhatsApp testing, and engineering handoff",
        stage:
          "Early product definition through live workflow and integration validation",
        usersScale: "Frontline employees, managers and executives",
        surfaces: "WhatsApp check-ins, daily briefs, executive dashboard, admin flows",
        collaboration: "Founders, engineering, operations stakeholders",
      },
      problem:
        "Frontline updates lived across WhatsApp and informal reporting, but managers still had to reconstruct what mattered manually. The product needed to capture lightweight daily input without adding another tool, then turn that input into recurring signals and next actions.",
      roleNarrative:
        "I shaped and tested the operating loop from employee check-in to manager action, covering onboarding, prompt design, daily brief UX, dashboard logic and Meta / WhatsApp behaviour, then translating issues into engineering-ready handoffs.",
      workSectionsTitle: "What I worked on",
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
            "Tested when recurring operational signals should trigger follow-up actions",
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
      decisions: [],
      insights: [
        {
          title: "Frontline input had to stay lightweight.",
          body: "Too much structure reduced completion quality. The product needed to capture natural updates first, then add structure in synthesis and dashboard logic.",
        },
        {
          title: "Managers needed decisions, not transcripts.",
          body: "Raw check-in volume recreated the attention problem. Briefs needed to surface recurring patterns, ownership and next actions.",
        },
      ],
      journey: [],
      demonstrates: [],
      outcomeLine:
        "Frontline input became a repeatable management rhythm: capture, synthesize, assign and follow through.",
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
      "Lab PDF / image ingestion QA",
      "Program enrolment & phase routing",
      "Patient, admin & clinician dashboard QA",
    ],
    whatChanged: "Lab data → reviewable clinical workflow",
    productValue:
      "Made lab data reviewable before it entered personalised programs, then validated how that data drove enrolment, phase routing, retesting and clinician review.",
    ctaLabel: "View case study",
    href: "/work/hautonomy",
    type: "case-study",
    visualNote:
      "Editorial product patterns for lab ingestion, marker review, programs and longitudinal trends.",
    caseStudy: {
      sourceNote:
        "Visuals are representative and created for this portfolio.",
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
            "The operating friction: inconsistent marker forms, detached evidence, and trends that need clean data.",
          placement: "problem",
        },
        {
          component: "hautonomy-approach",
          alt: "Three product principles for extraction, normalization and clinical judgment",
          caption:
            "Product approach: preserve source, normalize carefully, keep clinical judgment human.",
          placement: "approach",
        },
        {
          component: "hautonomy-review",
          alt: "Sanitized exception review workspace comparing source and structured markers",
          label: "Review workspace",
          caption:
            "Original beside extraction, conflicts visible, approval explicit.",
          placement: "governance",
        },
        {
          component: "hautonomy-program",
          alt: "Sanitized program phase progress and marker longitudinal view",
          label: "Patient program view",
          caption:
            "Reviewed lab data then drives program eligibility, phase routing, longitudinal tracking and compliance workflows.",
          placement: "demand",
        },
        {
          component: "hautonomy-outcome",
          alt: "Before and after comparison of fragile clinical workflows versus source-preserving review",
          placement: "outcome",
        },
      ],
      glance: {
        role: "Journey testing, clinical program logic validation, and dashboard QA",
        stage:
          "Live product validation across lab intake, lifecycle logic and patient / clinician journeys",
        usersScale:
          "Patients in personalised programs; clinicians and admins reviewing progress",
        surfaces:
          "Lab / document intake, marker review, patient programs, dashboards, wearable / check-in pathways",
        collaboration: "Product, clinical program design, engineering",
      },
      problem:
        "Personalised clinical programs depend on correct sequencing across lab ingestion, unit conversion, enrolment, phase routing, retesting and compliance. Small logic errors create confusing patient experiences and unreliable clinician review.",
      roleNarrative:
        "I tested how clinical data moved through the product: from document intake and marker normalization to enrolment, phase routing, retesting and clinician review, checking both patient and admin journeys for logic gaps and inconsistent states.",
      workSectionsTitle: "What I worked on",
      workSections: [
        {
          title: "Data & program entry",
          items: [
            "Tested lab ingestion paths and unit conversion behaviour",
            "Validated program enrolment and phase routing edge cases",
          ],
        },
        {
          title: "Lifecycle logic",
          items: [
            "Exercised retesting and re-enrolment logic across program phases",
            "Compared patient-facing outcomes with admin / clinician views",
          ],
        },
        {
          title: "Clinician & dashboard review",
          items: [
            "Tested dashboards for review readiness and signal clarity",
            "Walked clinician review workflows for friction and ambiguity",
          ],
        },
      ],
      decisions: [],
      insights: [
        {
          observed:
            "Unit conversion and ingestion errors could move a patient into the wrong program state or show misleading progress.",
          productDecision:
            "Treat ingestion and conversion as product logic, with explicit validation before phase progression.",
        },
        {
          observed:
            "Retesting and re-enrolment could appear correct in one role while patient and clinician/admin state diverged.",
          productDecision:
            "Test lifecycle changes as paired journeys across roles, not as isolated screens.",
        },
      ],
      journey: [
        "Lab enters",
        "Qualify for program",
        "Enrol",
        "Route to phase",
        "Retest",
        "Re-evaluate",
        "Graduate / Continue / Escalate",
      ],
      journeyHighlightIndex: 3,
      demonstrates: [],
      outcomeLine:
        "From disconnected lab data and fragile lifecycle logic to a reviewable, source-linked clinical workflow.",
    },
  },
  {
    id: "analystai",
    number: "04",
    slug: "analystai-enterprise",
    title: "AnalystAI Enterprise & DDQ",
    category: "Investment Technology · AI · Due Diligence",
    summary:
      "An AI-native workspace for document analysis, due diligence, data rooms, tasks and source-linked investment outputs.",
    roleHighlights: [
      "Source-linked document Q&A QA",
      "DDQ & data-room workflows",
      "Citation / evidence validation",
      "Client issue → engineering handoff",
      "Implementation feedback loops",
    ],
    whatChanged: "AI answers → source-linked diligence",
    productValue:
      "Validated source-linked answers, connected DDQ and data-room workflows, and turned client friction into engineering-ready product issues.",
    ctaLabel: "View case study",
    href: "/work/analystai-enterprise",
    type: "case-study",
    brandLogo: "/images/analystai-logo.png",
    brandUrl: "https://www.analystai.ai",
    visualNote:
      "Editorial product patterns for document Q&A, DDQ workflows and source-linked diligence.",
    caseStudy: {
      sourceNote:
        "Visuals are representative and created for this portfolio.",
      visuals: [
        {
          component: "analystai-hero",
          alt: "Document Q&A with source-linked answer and citation verification panel",
          caption:
            "Source-linked answers: investment teams verify evidence before they share or act.",
          placement: "hero",
        },
        {
          component: "analystai-problem",
          alt: "Three operating problems in AI diligence and workspace fragmentation",
          caption:
            "The friction: unsupported summaries, drifting task state, and onboarding-vs-implementation gaps.",
          placement: "problem",
        },
        {
          component: "analystai-approach",
          alt: "Three product principles for source linkage, connected workspace and client feedback",
          caption:
            "Product approach: source linkage as behaviour, connected workspace, client sessions as input.",
          placement: "approach",
        },
        {
          component: "analystai-journey",
          alt: "Ingest through report diligence journey",
          caption:
            "Ingest → query → verify → coordinate → report: diligence as a connected loop.",
          placement: "journey",
        },
        {
          component: "analystai-workspace",
          alt: "DDQ workspace with linked tasks and source-linked answers",
          caption:
            "Connected diligence workspace: DDQ progress, source-linked answers and open tasks in one view.",
          placement: "governance",
        },
        {
          component: "analystai-outcome",
          alt: "Before and after comparison of fragmented AI tools versus connected diligence workspace",
          placement: "outcome",
        },
      ],
      glance: {
        role: "Product testing, client feedback loops, implementation, and engineering coordination",
        stage:
          "Live enterprise product iteration across document Q&A, diligence and data-room workflows",
        usersScale: "Investment and diligence teams working across documents and data rooms",
        surfaces: "Document Q&A, DDQ, data rooms, tasks, libraries, reporting",
        collaboration: "Founders, engineering, clients, implementation",
      },
      problem:
        "Investment teams need to move between documents, questions, tasks and decisions without losing the evidence behind an answer or the state of the diligence process. AI only adds value when those workflows stay connected.",
      roleNarrative:
        "I tested how diligence work moved through the product: from document Q&A and source validation to DDQ, data-room workflows, onboarding and client implementation, then translated gaps into engineering-ready issues and followed them through resolution.",
      workSections: [
        {
          title: "AI trust & document workflows",
          items: [
            "Tested document Q&A for usefulness, failure modes and source linkage",
            "Validated that outputs could be traced back to underlying evidence",
          ],
        },
        {
          title: "Diligence & workspace flows",
          items: [
            "Walked DDQ workflows end to end",
            "Tested data room UX, libraries, task flows and reporting paths",
          ],
        },
        {
          title: "Client implementation & delivery",
          items: [
            "Supported onboarding with product-accurate narratives",
            "Captured client feedback and converted it into actionable product context",
          ],
        },
      ],
      decisions: [],
      insights: [
        {
          observed:
            "Users trusted answers only when they could inspect the evidence behind them.",
          productDecision:
            "Make citations, source links and failure states part of the core interaction, not an optional detail.",
        },
        {
          observed:
            "DDQ, document context and task state could drift apart across separate surfaces.",
          productDecision:
            "Keep evidence, tasks and reporting connected through the same diligence workflow.",
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
      demonstrates: [],
      outcomeLine:
        "A diligence workflow where answers, evidence, tasks and follow-ups stay connected from question to decision.",
    },
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getCaseStudyProjects(): Project[] {
  return projects.filter((project) => project.type === "case-study");
}

export function getFlagshipProjects(): Project[] {
  return [...projects].sort((a, b) => a.number.localeCompare(b.number));
}
