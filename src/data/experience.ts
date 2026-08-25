export type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  period: string;
  focus?: string[];
};

export const experience: ExperienceItem[] = [
  {
    id: "analystai",
    company: "AnalystAI",
    role: "Chief of Staff",
    period: "2025–2026",
    focus: [
      "Product testing",
      "AI product workflows",
      "Case-study product surfaces",
      "Client implementation",
      "Engineering coordination",
      "User journeys",
      "QA",
      "Founder support",
    ],
  },
  {
    id: "ga-capital",
    company: "GA Capital",
    role: "Chief of Staff",
    period: "2025–2026",
    focus: [
      "Live M&A execution",
      "Market research",
      "Due diligence",
      "Investor and lender coordination",
      "Data rooms",
      "Decision materials",
      "CEO support",
    ],
  },
  {
    id: "mentor",
    company: "Mentor Ozel Ders",
    role: "Marketing Specialist",
    period: "2024–2026",
  },
  {
    id: "docquity",
    company: "Docquity / Doctor Jobs Today",
    role: "SEO Intern",
    period: "2022–2023",
  },
];
