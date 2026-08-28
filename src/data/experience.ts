export type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  subtitle?: string;
  period: string;
  focus?: string[];
  logo?: string;
  logoHref?: string;
  /** Tunes visual weight inside the shared logo frame. */
  logoScale?: number;
};

export const experience: ExperienceItem[] = [
  {
    id: "analystai",
    company: "AnalystAI",
    role: "Chief of Staff",
    subtitle: "AI products & client delivery",
    period: "2025–2026",
    logo: "/images/analystai-logo.png",
    logoHref: "https://www.analystai.ai",
    logoScale: 1,
    focus: [
      "User journeys & QA",
      "Engineering coordination",
      "Client implementation",
      "Founder support",
    ],
  },
  {
    id: "ga-capital",
    company: "GA Capital",
    role: "Chief of Staff",
    subtitle: "M&A advisory platform",
    period: "2025–2026",
    logo: "/images/ga-capital-logo.png",
    logoHref: "https://www.gacapital.ai",
    logoScale: 1.3,
    focus: [
      "Live M&A execution",
      "Due diligence",
      "Data rooms",
      "CEO support",
    ],
  },
  {
    id: "mentor",
    company: "Mentor Özel Ders",
    role: "Marketing Specialist",
    subtitle: "Digital marketing & content operations",
    period: "2024–2025",
    logo: "/images/mentor-logo.png",
    logoHref: "https://mentorozelders.com",
    logoScale: 1.45,
    focus: [
      "Content strategy",
      "Digital campaigns",
      "Social media management",
    ],
  },
  {
    id: "docquity",
    company: "Docquity / Doctor Jobs Today",
    role: "SEO Intern",
    subtitle: "SEO & content across Southeast Asian markets",
    period: "2022–2023",
    logo: "/images/docquity-logo.png",
    logoHref: "https://docquity.com",
    logoScale: 0.8,
    focus: ["SEO content", "International markets", "Search performance"],
  },
];
