export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Product & workflow",
    items: [
      "Map end-to-end user journeys",
      "Turn requirements into product logic",
      "Test real-world scenarios",
      "Identify edge cases and failure points",
    ],
  },
  {
    title: "Engineering bridge",
    items: [
      "Write clear issues and acceptance criteria",
      "Prioritise fixes with engineering",
      "Retest changes after implementation",
      "Keep product behaviour aligned with requirements",
    ],
  },
  {
    title: "Client & founder-side execution",
    items: [
      "Translate client feedback into actions",
      "Prepare decisions and next steps",
      "Coordinate across teams and stakeholders",
      "Step into work without a clear owner",
    ],
  },
  {
    title: "AI-native working",
    items: [
      "Use Cursor, Codex and Claude Code hands-on",
      "Learn unfamiliar domains quickly",
      "Prototype and test ideas faster",
      "Combine AI speed with human judgement",
    ],
  },
];
