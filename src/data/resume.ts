import { siteConfig } from "@/data/site";

export type ResumeRole = {
  title: string;
  company: string;
  period: string;
  location?: string;
  /** Short line under the title (e.g. combined-role context). */
  note?: string;
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

export type ResumeReference = {
  name: string;
  title: string;
};

export const resumeProfile = {
  name: siteConfig.name,
  summary:
    "Business graduate with hands on experience across product, operations and client delivery in international technology and advisory environments.",
  location: "Istanbul, Turkey",
  phone: "+90 536 795 45 17",
  email: siteConfig.email,
  github: "github.com/Eda2002-sys",
  githubHref: siteConfig.github,
  linkedin: "linkedin.com/in/eda-sahin-b79300231",
  linkedinHref: siteConfig.linkedin,
  portfolio: "eda-sahin-product-portfolio.vercel.app",
  portfolioHref: siteConfig.url,
  portraitPath: siteConfig.portraitPath,
  pdfPath: "/resume.pdf",
  languages: [
    { language: "Turkish", level: "Native" },
    { language: "English", level: "Advanced (Professional)" },
  ],
} as const;

export const resumeExperience: ResumeRole[] = [
  {
    title: "Product & Operations Associate",
    company: "GA Capital",
    period: "07.25 to 09.26",
    note: "Combined role across GA Capital and AnalystAI, spanning AI products and M&A advisory.",
    website: "www.gacapital.ai",
    websiteHref: "https://www.gacapital.ai",
    bullets: [
      "Worked between clients and engineering on AI products, translating requirements and feedback into clear product tasks and keeping them connected to implementation.",
      "Tested end to end workflows with real use cases and product data, comparing expected and actual outputs to identify logic gaps, edge cases and patterns before release.",
      "Worked with both international business clients and individual users across demos, onboarding, implementation and product feedback, including organisations such as Keppel Corporation, Marcus & Millichap, Thrive Senior Living and Socida.",
      "Kept smaller workstreams moving by tracking open points, decisions and dependencies across the founder, clients and engineering team.",
      "Worked on UK buy side transactions, supporting due diligence, financial modelling and analysis, investor and lender research, data room management and preparation of deal materials.",
    ],
  },
  {
    title: "Marketing Intern",
    company: "Mentor Özel Ders",
    period: "05.24 to 10.24",
    website: "mentorozelders.com",
    websiteHref: "https://mentorozelders.com",
    bullets: [
      "Planned weekly Instagram content around campaigns, tutor demand and seasonal periods, working with the team from idea and copy through publishing.",
      "Organised team content shoots, coordinated schedules and practical details, and supported production on set.",
    ],
  },
  {
    title: "Marketing Intern",
    company: "Docquity, Doctor Jobs Today",
    period: "11.22 to 04.24",
    website: "docquity.com",
    websiteHref: "https://docquity.com",
    bullets: [
      "Wrote blog and web content for healthcare audiences in Malaysia, the Philippines and Indonesia.",
      "Worked in a regular feedback loop with the manager and content team, revising drafts, sharing weekly progress reports and adjusting work based on feedback.",
      "Used keyword research and search intent to shape article structure and improve organic discoverability.",
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
        text: "Türkiye İş Bankası Scholar, Koç University Anadolu Scholars Program",
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
        text: "Full scholarship, ranked 1st in entrance examination",
        href: "https://www.darussafaka.org/haberler/darussafaka-egitim-kurumlari-torenle-acildi",
      },
      {
        text: "IMA Turkey 2013 Mental Arithmetic Olympics champion",
      },
    ],
  },
];

export const resumeReferences: ResumeReference[] = [
  {
    name: "Ata Onat",
    title: "Founder & Managing Director, GA Capital",
  },
  {
    name: "Murat Necmi Uzuner",
    title: "Founder, Mentor Özel Ders",
  },
];
