export type AdditionalProduct = {
  name: string;
  summary: string;
  href?: string;
};

/** Breadth indicators: brief mentions, not full case studies. */
export const additionalProducts: AdditionalProduct[] = [
  {
    name: "Keppel Alex",
    summary: "AI CFO workflow across 2.2M+ rows of financial data.",
    href: "https://www.keppel.com",
  },
  {
    name: "Marcus & Millichap",
    summary: "Auction intelligence, pricing signals and exports.",
    href: "https://www.marcusmillichap.com",
  },
  {
    name: "Compliance Tracker",
    summary: "Regulatory monitoring across 15+ jurisdictions.",
  },
  {
    name: "Investor Intelligence",
    summary: "Investment matching across 6,000+ entities.",
  },
  {
    name: "Deep Market Research",
    summary: "Multi-source research with source-linked outputs.",
  },
  {
    name: "GA Capital M&A Platform",
    summary: "Market mapping, buyer matching and diligence workflows.",
    href: "https://www.gacapital.ai",
  },
];
