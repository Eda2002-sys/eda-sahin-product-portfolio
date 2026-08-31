import { ButtonLink } from "@/components/ButtonLink";
import { siteConfig } from "@/data/site";

const experienceStrip = [
  { label: "Healthcare", flow: "Lab data → programs" },
  { label: "Workforce", flow: "Knowledge → answers" },
  { label: "Operations", flow: "Updates → actions" },
  { label: "Investment tech", flow: "Docs → diligence" },
  { label: "M&A", flow: "Research → deals" },
] as const;

export function Hero() {
  return (
    <section className="border-b border-border">
      <div className="container-page py-10 md:py-16 lg:py-20">
        <div className="min-w-0 max-w-4xl">
          <p className="eyebrow rise-in">Product · Operations · AI</p>

          <h1 className="case-title rise-in rise-in-delay-1 mt-4 sm:mt-5">
            I work across product, operations and engineering to turn real user
            and business problems into products that work.
          </h1>

          <p className="case-body rise-in rise-in-delay-2 mt-5 md:mt-6">
            I map user journeys, test real workflows, identify where products
            break and work with engineering to turn those findings into product
            decisions and implementation.
          </p>
        </div>

        <div
          className="rise-in rise-in-delay-2 mt-8 overflow-x-auto border-y border-border md:mt-10"
          aria-label="Experience across domains"
        >
          <ul className="flex min-w-[44rem] divide-x divide-border lg:min-w-0 lg:w-full">
            {experienceStrip.map((item) => (
              <li key={item.label} className="min-w-0 flex-1 px-3 py-4 md:px-4">
                <p className="eyebrow">{item.label}</p>
                <p className="case-meta mt-2 whitespace-nowrap text-navy">
                  {item.flow}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-0 max-w-4xl">
          <p className="case-meta rise-in rise-in-delay-2 mt-5 text-muted md:mt-6">
            Based in Istanbul · Open to product, operations, founder-facing
            and cross-functional roles
          </p>

          <div className="rise-in rise-in-delay-2 mt-8 flex flex-wrap items-center gap-x-3 gap-y-3 md:mt-10">
            <ButtonLink href="/#work">View selected work</ButtonLink>
            <ButtonLink href={siteConfig.resumePdfPath} variant="secondary">
              Download CV
            </ButtonLink>
            <div className="flex flex-wrap items-center gap-x-2 case-meta text-muted">
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline transition-colors hover:text-burgundy"
              >
                LinkedIn
              </a>
              <span className="text-border-strong" aria-hidden="true">
                ·
              </span>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline transition-colors hover:text-burgundy"
              >
                GitHub
              </a>
              <span className="text-border-strong" aria-hidden="true">
                ·
              </span>
              <a
                href={`mailto:${siteConfig.email}`}
                className="link-underline transition-colors hover:text-burgundy"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
