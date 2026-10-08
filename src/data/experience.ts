export type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  subtitle?: string;
  period: string;
  bullets: string[];
  logo?: string;
  logoHref?: string;
  /** Tunes visual weight inside the shared logo frame. */
  logoScale?: number;
};

export const experience: ExperienceItem[] = [
  {
    id: "ga-capital",
    company: "GA Capital",
    role: "Product & Operations Associate",
    subtitle: "Combined role across GA Capital and AnalystAI",
    period: "07.25 to 09.26",
    logo: "/images/ga-capital-logo.png",
    logoHref: "https://www.gacapital.ai",
    logoScale: 1.3,
    bullets: [
      "Worked between clients and engineering on AI products, translating requirements and feedback into clear product tasks and keeping them connected to implementation.",
      "Tested end to end workflows with real use cases and product data, comparing expected and actual outputs to identify logic gaps, edge cases and patterns before release.",
    ],
  },
  {
    id: "mentor",
    company: "Mentor Özel Ders",
    role: "Marketing Intern",
    period: "05.24 to 10.24",
    logo: "/images/mentor-logo.png",
    logoHref: "https://mentorozelders.com",
    logoScale: 1.45,
    bullets: [
      "Planned weekly Instagram content around campaigns, tutor demand and seasonal periods, working with the team from idea and copy through publishing.",
    ],
  },
  {
    id: "docquity",
    company: "Docquity, Doctor Jobs Today",
    role: "Marketing Intern",
    period: "11.22 to 04.24",
    logo: "/images/docquity-logo.png",
    logoHref: "https://docquity.com",
    logoScale: 0.8,
    bullets: [
      "Wrote blog and web content for healthcare audiences in Malaysia, the Philippines and Indonesia.",
    ],
  },
];
