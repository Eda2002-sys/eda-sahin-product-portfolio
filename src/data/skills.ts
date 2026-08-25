export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Product",
    items: [
      "Product Thinking",
      "User Journeys",
      "UX Review",
      "Product Operations",
      "Product QA",
      "Feature Validation",
      "Product Requirements",
      "Process Design",
    ],
  },
  {
    title: "Execution",
    items: [
      "Engineering Coordination",
      "Issue Documentation",
      "Acceptance Criteria",
      "Retesting",
      "Implementation",
      "Stakeholder Management",
    ],
  },
  {
    title: "AI / Tools",
    items: [
      "Cursor",
      "Codex",
      "Claude Code",
      "GitHub",
      "Supabase",
      "Vercel",
      "Railway",
      "ElevenLabs",
    ],
  },
  {
    title: "Business",
    items: [
      "Founder Support",
      "Client Management",
      "Market Research",
      "Due Diligence",
      "Cross-functional Execution",
    ],
  },
];

export const howIWorkSteps = [
  {
    number: "01",
    title: "Understand the user and business problem",
  },
  {
    number: "02",
    title: "Map the journey and system behaviour",
  },
  {
    number: "03",
    title: "Test the real experience",
  },
  {
    number: "04",
    title: "Turn friction into concrete product decisions",
  },
  {
    number: "05",
    title: "Coordinate until the solution actually ships",
  },
] as const;
