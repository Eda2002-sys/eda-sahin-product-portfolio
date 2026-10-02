import { siteConfig } from "@/data/site";

export type ResumeRole = {
  title: string;
  company: string;
  period: string;
  website?: string;
  websiteHref?: string;
  bullets: string[];
};

export type ResumeEducationNote = {
  text: string;
  href?: string;
};

export type ResumeEducation = {
  institution: string;
  period: string;
  detail: string;
  notes?: ResumeEducationNote[];
  logo?: string;
  logoHref?: string;
  logoHeight?: number;
  logoAspect?: number;
  logoContained?: boolean;
};

export const resumeProfile = {
  name: siteConfig.name,
  location: "Istanbul, Turkey",
  phone: "+90 536 795 45 17",
  email: siteConfig.email,
  github: "github.com/Eda2002-sys",
  githubHref: siteConfig.github,
  linkedin: "linkedin.com/in/eda-şahin-b79300231",
  linkedinHref: siteConfig.linkedin,
  portraitPath: siteConfig.portraitPath,
  pdfPath: "/resume.pdf",
  languages: [
    { language: "Turkish", level: "Native" },
    { language: "English", level: "Advanced (Professional)" },
  ],
} as const;

export const resumeExperience: ResumeRole[] = [
  {
    title: "Chief of Staff",
    company: "AnalystAI",
    period: "2025 to 2026",
    website: "www.analystai.ai",
    websiteHref: "https://www.analystai.ai",
    bullets: [
      "Partner with the CEO on product strategy, business operations and the development of AI powered solutions for investment and operating teams.",
      "Lead product management, testing and cross functional delivery across multiple AI products, from business requirements and user journeys to engineering prioritisation and deployment.",
      "Manage AI product development for international clients including Keppel Corporation, Marcus & Millichap, Thrive Senior Living and Socida, coordinating engineering teams, client requirements, testing and implementation.",
      "Support product demonstrations, onboarding and continuous improvement across investment, healthcare and operating intelligence use cases.",
      "Work hands-on with tools including Cursor, Codex, Claude Code, ElevenLabs and Meta Business Suite.",
    ],
  },
  {
    title: "Chief of Staff",
    company: "GA Capital",
    period: "2025 to 2026",
    website: "www.gacapital.ai",
    websiteHref: "https://www.gacapital.ai",
    bullets: [
      "Support the CEO across transaction execution, client management, business development and strategic initiatives within an AI-native M&A advisory firm.",
      "Contribute to live M&A engagements through due diligence, market and financial analysis, investor and lender outreach, data-room management and client materials.",
      "Coordinate communication across clients, investors, lenders, advisers and internal teams to maintain transaction momentum and timely execution.",
      "Support the use of AnalystAI products on international M&A mandates valued at over $20 million.",
    ],
  },
  {
    title: "Marketing Specialist",
    company: "Mentor Özel Ders",
    period: "2024 to 2025",
    website: "mentorozelders.com",
    websiteHref: "https://mentorozelders.com",
    bullets: [
      "Dynamic Instagram management and content strategy.",
      "Post and pre design and creation of seasonal content calendars.",
    ],
  },
  {
    title: "SEO Intern",
    company: "Docquity, Doctor Jobs Today",
    period: "2022 to 2023",
    website: "docquity.com",
    websiteHref: "https://docquity.com",
    bullets: [
      "Based in Singapore; supported the copywriting and SEO team by creating engaging blog posts and content.",
      "Contributed to improving Docquity's Google Search Rankings, increasing traffic from Malaysia, the Philippines and Indonesia.",
    ],
  },
];

export const resumeEducation: ResumeEducation[] = [
  {
    institution: "Koç University",
    period: "2020 to 2025",
    detail: "B.A. Business Administration",
    logo: "/images/koc-university-logo.png",
    logoHref: "https://www.koc.edu.tr/",
    logoHeight: 22,
    logoAspect: 849 / 204,
    notes: [
      {
        text: "Selected coursework: Business Strategy, Marketing Research, Quantitative Methods",
      },
    ],
  },
  {
    institution: "Darüşşafaka High School",
    period: "2016 to 2020",
    detail: "High School Diploma",
    logo: "/images/darussafaka-logo.png",
    logoHref: "https://www.darussafaka.org/",
    logoHeight: 28,
    logoAspect: 1003 / 479,
    logoContained: true,
    notes: [
      {
        text: "Top-ranked entrant; delivered the opening ceremony speech",
        href: "https://www.darussafaka.org/haberler/darussafaka-egitim-kurumlari-torenle-acildi",
      },
      { text: "IEARN Conference 2017 attendee, Morocco" },
    ],
  },
];
