export type AdditionalProduct = {
  name: string;
  summary: string;
  href?: string;
};

/** Breadth indicators: brief mentions, not full case studies. */
export const additionalProducts: AdditionalProduct[] = [
  {
    name: "Keppel Alex",
    summary:
      "AI finance assistant built to query and analyse 2.2M+ rows of financial data.",
    href: "https://www.keppel.com",
  },
  {
    name: "Marcus & Millichap",
    summary:
      "Auction intelligence product for analysing property pricing, auction signals and exports.",
    href: "https://www.marcusmillichap.com",
  },
  {
    name: "Compliance Tracker",
    summary:
      "Monitoring workflow for regulatory requirements across 15+ jurisdictions.",
  },
  {
    name: "Investor Intelligence",
    summary:
      "Search and matching system across a database of 6,000+ investors and organisations.",
  },
  {
    name: "Deep Market Research",
    summary:
      "Research workflow combining multiple sources into structured, source linked outputs.",
  },
  {
    name: "GA Capital M&A Platform",
    summary:
      "M&A workflow for market mapping, buyer identification, diligence and transaction tracking.",
    href: "https://www.gacapital.ai",
  },
];
