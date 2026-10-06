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
    id: "ga-capital",
    company: "GA Capital",
    role: "Product & Operations Associate",
    subtitle: "Combined role across GA Capital and AnalystAI · New York, USA",
    period: "2025 to 2026",
    logo: "/images/ga-capital-logo.png",
    logoHref: "https://www.gacapital.ai",
    logoScale: 1.3,
    focus: [
      "Client & engineering bridge",
      "End to end product testing",
      "Client delivery",
      "M&A due diligence",
    ],
  },
  {
    id: "mentor",
    company: "Mentor Özel Ders",
    role: "Marketing Intern",
    subtitle: "6 month internship completed during university · Turkey",
    period: "2024 to 2025",
    logo: "/images/mentor-logo.png",
    logoHref: "https://mentorozelders.com",
    logoScale: 1.45,
    focus: ["Instagram content", "Campaign planning", "Content production"],
  },
  {
    id: "docquity",
    company: "Docquity, Doctor Jobs Today",
    role: "Marketing Intern",
    subtitle: "18 month internship completed during university · Singapore",
    period: "2022 to 2023",
    logo: "/images/docquity-logo.png",
    logoHref: "https://docquity.com",
    logoScale: 0.8,
    focus: ["Healthcare content", "SEO", "Southeast Asian markets"],
  },
];
