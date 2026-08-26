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
  /** Defaults to "What I worked on" when omitted. */
  workSectionsTitle?: string;
  decisions: DecisionFinding[];
  journey: string[];
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
      "A WhatsApp-based knowledge and enablement layer for a distributed automotive workforce — combining text and voice questions, approved product and financing answers, documents, quizzes and onboarding in one channel.",
    context: ["~300 employees", "7 brand knowledge bases", "WhatsApp-first"],
    roleHighlights: [
      "WhatsApp knowledge workflow design",
      "Approved-source grounding rules",
      "Voice / text / document intake testing",
      "Brand knowledge-base QA (7 brands)",
      "Quiz and onboarding flows",
      "Human-in-the-loop answer review",
    ],
    productValue:
      "Socida AI is designed and validated for ~300 employees across 7 automotive brands.",
    ctaLabel: "View case study",
    href: "/work/socida-ai",
    type: "case-study",
    visualNote:
      "WhatsApp knowledge and training product surface for a distributed automotive workforce.",
    caseStudy: {
      sourceNote:
        "Visuals are representative and created for this portfolio.",
      visuals: [
        {
          component: "socida-whatsapp",
          alt: "Editorial mock of WhatsApp company knowledge chat with voice question, approved answer, document and quiz",
          caption:
            "Employee view: ask by voice or text, receive approved answers, documents and training in WhatsApp.",
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
          component: "socida-journey",
          alt: "Operating loop across Ask, Answer, Apply, Reinforce, Observe and Update",
          caption:
            "Ask → Answer → Apply → Reinforce → Observe → Update: employee use and manager correction as one loop.",
          placement: "journey",
        },
        {
          component: "socida-governance",
          alt: "Document control admin view with brand, access and indexing status",
          caption:
            "Knowledge governance: approved sources, role-based visibility and human-managed updates.",
          placement: "governance",
        },
        {
          component: "socida-outcome",
          alt: "Before and after comparison of scattered knowledge versus a controlled WhatsApp layer",
          placement: "outcome",
        },
      ],
      glance: {
        role: "Product definition, journey testing, QA, and engineering coordination",
        stage: "Live product · iterative testing and delivery",
        usersScale: "~300 employees across 7 automotive brand knowledge bases",
        surfaces:
          "WhatsApp, approved sources, documents, quizzes/onboarding, manager visibility",
        collaboration: "Founders, engineering, operations, content / knowledge owners",
      },
      problem:
        "Product, financing, service and internal operating knowledge was spread across documents, teams and locations. A salesperson speaking with a customer could not pause to search portals, product sheets and team chats. The solution needed to work inside WhatsApp, where employees were already communicating, rather than require another system during customer conversations.",
      roleNarrative:
        "I worked across product definition and real-user journey testing: clarifying what the product should do in WhatsApp, and validating how employees ask for and receive knowledge—including by voice.",
      workSectionsTitle: "What I worked on",
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
            "Reviewed manager visibility into recurring demand and knowledge gaps",
            "Mapped clearer paths for source updates and corrections",
            "Aligned engineering when quality, ownership and delivery conflicted",
          ],
        },
      ],
      decisions: [
        {
          observed:
            "Employees asked incomplete or conversational questions rather than keyword-perfect queries, often mid-customer conversation.",
          whyItMatters:
            "Retrieval that assumes precise prompts breaks down when people ask under time pressure.",
          recommendation:
            "Design answer flows around clarification, source-backed responses and clear failure states—not only successful retrieval.",
          expectedImpact:
            "Fewer dead ends and more reliable answers during shift-time use.",
        },
        {
          observed:
            "Training and quizzes competed with day-to-day knowledge lookup inside the same channel.",
          whyItMatters:
            "If learning feels like a separate product, people skip it even when knowledge lookup works.",
          recommendation:
            "Keep quizzes, onboarding and daily prompts lightweight, reusing the same conversational patterns as knowledge asks.",
          expectedImpact:
            "Less context-switching between lookup and training; steadier completion.",
        },
        {
          observed:
            "Managers needed visibility into recurring topics and demand spikes to correct sources and reinforce training.",
          whyItMatters:
            "Without a demand signal, source updates stay reactive and answer quality drifts.",
          recommendation:
            "Surface recurring demand and make source-update paths easy to act on.",
          expectedImpact:
            "Faster correction of weak answers and clearer ownership of knowledge quality.",
        },
      ],
      journey: [],
      demonstrates: [],
      outcomeLine:
        "A single WhatsApp-based layer for approved knowledge, training and manager feedback.",
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
      "Check-in question design",
      "WhatsApp onboarding path",
      "Daily manager brief UX",
      "Signal → next-action logic",
      "Employee vs admin journey split",
      "Meta / WhatsApp integration QA",
      "Brief review-gate behaviour",
    ],
    productValue:
      "Turned frontline check-ins into a repeatable morning brief managers could act on, moving scattered WhatsApp chatter into structured signals and next actions.",
    ctaLabel: "View case study",
    href: "/work/third-eye",
    type: "case-study",
    visualNote:
      "Editorial product patterns for WhatsApp check-ins, daily briefs and executive dashboard logic.",
    caseStudy: {
      sourceNote:
        "Infographics redesigned for this portfolio. Product patterns informed by Third Eye operating intelligence workflows. No live product screenshots or client data are shown.",
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
            "Too many updates, not enough visibility: from scattered chat to a daily manager-ready rhythm.",
          placement: "problem",
        },
        {
          component: "third-eye-approach",
          alt: "WhatsApp check-in converting into a daily operating brief with grouped signals",
          caption:
            "Daily operating signal: WhatsApp in, brief out: risk, ownership, and next action.",
          placement: "approach",
        },
        {
          component: "third-eye-build",
          alt: "Four daily manager outputs in the pilot format",
          caption:
            "Pilot surfaces: WhatsApp pulse, web fallback, morning brief, and owner-linked action queue.",
          placement: "build",
        },
        {
          component: "third-eye-journey",
          alt: "Pulse, synthesise, brief and act operating journey",
          caption:
            "Pulse → synthesise → brief → act: closing the loop between field reality and management.",
          placement: "journey",
        },
        {
          component: "third-eye-brief",
          alt: "Three manager insight cards with issue, branches, owner and next action",
          caption:
            "Manager-level insights: staffing risk, customer trends, and training gaps with clear owners.",
          placement: "governance",
        },
        {
          component: "third-eye-outcome",
          alt: "Institutional memory cards for living knowledge base, turnover-proofing and onboarding",
          caption:
            "Institutional memory: operational knowledge that compounds instead of walking out the door.",
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
        "Frontline updates were scattered across chat and informal reporting. Managers needed a reliable way to turn daily check-ins into structured signals, briefs and next actions, without forcing employees onto another heavy tool.",
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
      "Lab PDF / image ingestion",
      "Marker & unit conversion logic",
      "Source-linked value review",
      "Program enrolment & phase routing",
      "Retesting / re-enrolment rules",
      "Clinician dashboard QA",
      "Clinical judgment boundary checks",
    ],
    productValue:
      "Made lab values reviewable before they entered programs. Every extracted marker stayed tied to its source page, so clinicians could trust trends instead of re-keying PDFs.",
    ctaLabel: "View case study",
    href: "/work/hautonomy",
    type: "case-study",
    visualNote:
      "Editorial product patterns for lab ingestion, marker review, programs and longitudinal trends.",
    caseStudy: {
      sourceNote:
        "Infographics redesigned for this portfolio. Product patterns informed by Hautonomy workflows. No live product screenshots or personal health data are shown.",
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
            "The operating friction: same markers, different forms: and trends that only work after normalization and review.",
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
            "Review workspace pattern: original beside extraction, conflicts visible, approval explicit.",
          placement: "governance",
        },
        {
          component: "hautonomy-program",
          alt: "Sanitized program phase progress and marker longitudinal view",
          caption:
            "Program and markers pattern: phase routing, compliance signals and longitudinal marker groups.",
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
        "I tested the product as a system of clinical program logic and data trust: validating how patient and admin journeys behave when documents, markers, phases and retesting rules interact, and surfacing where the experience diverged from intended clinical workflows.",
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
    id: "analystai",
    number: "04",
    slug: "analystai-enterprise",
    title: "AnalystAI Enterprise & DDQ",
    category: "Investment Technology · AI · Due Diligence",
    summary:
      "An AI-native workspace for document analysis, due diligence, data rooms, tasks and source-linked investment outputs.",
    roleHighlights: [
      "Source-linked document Q&A QA",
      "DDQ questionnaire flows",
      "Data-room navigation & task state",
      "Citation / evidence validation",
      "Demo → implementation feedback loop",
      "Client issue → engineering tickets",
    ],
    productValue:
      "Moved diligence work from unsupported AI summaries to source-linked answers teams could verify, and turned scattered client feedback into engineering-ready issues before demos drifted from the real product.",
    ctaLabel: "View case study",
    href: "/work/analystai-enterprise",
    type: "case-study",
    brandLogo: "/images/analystai-logo.png",
    brandUrl: "https://www.analystai.ai",
    visualNote:
      "Editorial product patterns for document Q&A, DDQ workflows and source-linked diligence.",
    caseStudy: {
      sourceNote:
        "Infographics redesigned for this portfolio. Product patterns informed by AnalystAI enterprise diligence workflows. No client documents or proprietary deal data are shown.",
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
            "The friction: unsupported summaries, drifting task state, and demo-vs-implementation gaps.",
          placement: "problem",
        },
        {
          component: "analystai-approach",
          alt: "Three product principles for source linkage, connected workspace and client feedback",
          caption:
            "Product approach: citations as behaviour, one operating system, client sessions as input.",
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
            "Ingest → query → verify → coordinate → report: diligence as a connected loop.",
          placement: "journey",
        },
        {
          component: "analystai-workspace",
          alt: "DDQ workspace with linked tasks and source-backed answers",
          caption:
            "Workspace pattern: DDQ progress, source-backed answers and open tasks in one view.",
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
