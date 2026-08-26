export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Product",
    items: [
      "Product Discovery",
      "Product Analysis",
      "Feature Prioritisation",
      "User Journeys",
      "UX Review",
      "Product Operations",
      "Product QA",
      "Product Requirements",
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
    title: "AI & Tools",
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
    title: "Cross-functional",
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
    title: "Stay with the problem until the solution ships",
  },
] as const;
