export type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  subtitle?: string;
  period: string;
  focus?: string[];
  logo?: string;
  logoHref?: string;
  logoHeight?: number;
  logoAspect?: number;
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
    logoAspect: 984 / 421,
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
    subtitle: "M&A advisory platform",
    period: "2025–2026",
    logo: "/images/ga-capital-logo.png",
    logoHref: "https://www.gacapital.ai",
    logoHeight: 20,
    logoAspect: 462 / 158,
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
    company: "Mentor Özel Ders",
    role: "Marketing Specialist",
    subtitle: "Digital marketing & content operations",
    period: "2024–2026",
    logo: "/images/mentor-logo.png",
    logoHref: "https://mentorozelders.com",
    logoHeight: 20,
    logoAspect: 524 / 185,
    focus: [
      "Content strategy",
      "Publishing calendars",
      "Digital campaigns",
      "Content workflows",
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
    logoHeight: 20,
    logoAspect: 1018 / 225,
    focus: [
      "SEO content",
      "Copywriting",
      "Content production",
      "Search performance",
      "International markets",
    ],
  },
];
