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
    title: "Product judgement",
    items: [
      { label: "User journeys" },
      { label: "Workflow design" },
      { label: "Feature prioritisation" },
      {
        label: "Product QA",
        proof:
          "Tested end-to-end product journeys across patient, admin and WhatsApp flows; documented expected vs actual behaviour and retested fixes with engineering.",
      },
    ],
  },
  {
    title: "Execution discipline",
    items: [
      {
        label: "Issue documentation",
        proof:
          "Captured reproducible product issues with context, expected behaviour and priority so engineering could act without re-explaining the problem.",
      },
      { label: "Acceptance criteria" },
      {
        label: "Engineering coordination",
        proof:
          "Turned product and client issues into clear engineering handoffs, then followed them through implementation and retesting.",
      },
      { label: "Retesting" },
    ],
  },
  {
    title: "Operating range",
    items: [
      { label: "Rapid learning" },
      { label: "Ambiguous problem solving" },
      { label: "Multi-workstream ownership" },
      { label: "Founder support" },
    ],
  },
  {
    title: "Technical fluency",
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
    ],
  },
];

export const howIWorkSteps = [
  {
    number: "01",
    title: "Understand the user and problem",
  },
  {
    number: "02",
    title: "Map the full workflow",
  },
  {
    number: "03",
    title: "Test the real experience",
  },
  {
    number: "04",
    title: "Turn findings into product decisions",
  },
  {
    number: "05",
    title: "Follow through with engineering",
  },
] as const;
