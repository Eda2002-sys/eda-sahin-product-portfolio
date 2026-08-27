export type SkillItem = {
  label: string;
  /** Short usage example — only on selected capabilities. */
  proof?: string;
};

export type SkillGroup = {
  title: string;
  items: SkillItem[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Product",
    items: [
      { label: "Product Discovery" },
      { label: "Product Analysis" },
      { label: "Feature Prioritisation" },
      { label: "User Journeys" },
      {
        label: "Product Operations",
        proof:
          "Kept product behaviour aligned across roles and surfaces — from intake and routing rules to review and handoff points.",
      },
      {
        label: "Product QA",
        proof:
          "Tested end-to-end product journeys across patient, admin and WhatsApp flows; documented expected vs actual behaviour and retested fixes with engineering.",
      },
      { label: "Requirements" },
    ],
  },
  {
    title: "Execution",
    items: [
      {
        label: "Engineering Coordination",
        proof:
          "Turned product and client issues into clear engineering handoffs, then followed them through implementation and retesting.",
      },
      {
        label: "Issue Documentation",
        proof:
          "Captured reproducible product issues with context, expected behaviour and priority so engineering could act without re-explaining the problem.",
      },
      { label: "Acceptance Criteria" },
      { label: "Retesting" },
      { label: "Implementation" },
      { label: "Stakeholder Management" },
    ],
  },
  {
    title: "AI & Tools",
    items: [
      {
        label: "Cursor",
        proof:
          "Used to inspect product behaviour, work through implementation details with engineering, and validate fixes across live product flows.",
      },
      {
        label: "Codex",
        proof:
          "Used alongside product testing to draft and check implementation details, then verify behaviour against the intended workflow.",
      },
      { label: "Claude Code" },
      { label: "GitHub" },
      { label: "Supabase" },
      { label: "Vercel" },
      { label: "Railway" },
      { label: "ElevenLabs" },
    ],
  },
  {
    title: "Operating Range",
    items: [
      { label: "Rapid Learning" },
      { label: "Ambiguous Problem Solving" },
      { label: "Multi-workstream Ownership" },
      { label: "Cross-functional Execution" },
      {
        label: "Client Implementation",
        proof:
          "Turned client sessions and onboarding friction into product issues and priorities before demos drifted from the shipped product.",
      },
      { label: "Founder Support" },
      { label: "Market Research" },
      {
        label: "Due Diligence",
        proof:
          "Worked across live M&A processes, data rooms, DDQs and source-linked investment workflows.",
      },
    ],
  },
];

export const howIWorkSteps = [
  {
    number: "01",
    title: "Understand the problem",
  },
  {
    number: "02",
    title: "Map the user and system journey",
  },
  {
    number: "03",
    title: "Test the real workflow",
  },
  {
    number: "04",
    title: "Turn friction into product decisions",
  },
  {
    number: "05",
    title: "Follow through to implementation",
  },
] as const;
