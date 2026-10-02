import { ButtonLink } from "@/components/ButtonLink";
import { siteConfig } from "@/data/site";

const experienceStrip = [
  { label: "Healthcare", flow: "Lab results → personalised programs" },
  { label: "Workforce", flow: "Employee questions → grounded answers" },
  { label: "Operations", flow: "Frontline updates → manager actions" },
  { label: "Investment tech", flow: "Documents → diligence answers" },
  { label: "M&A", flow: "Market research → live deal execution" },
] as const;

export function Hero() {
  return (
    <section className="border-b border-border">
      <div className="container-page py-10 md:py-16 lg:py-20">
        <h1 className="case-title rise-in rise-in-delay-1 max-w-5xl text-balance">
          Different industries. Same job: turning complex workflows into working
          products.
        </h1>

        <p className="case-body rise-in rise-in-delay-2 mt-5 max-w-4xl md:mt-6">
          I work across users, business and engineering to define workflows,
          test real scenarios, identify where products break and turn findings
          into shipped improvements.
        </p>

        <div
          className="rise-in rise-in-delay-2 mt-8 border-y border-border md:mt-10"
          aria-label="Experience across domains"
        >
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
            {experienceStrip.map((item, index) => (
              <li
                key={item.label}
                className={`min-w-0 px-0 py-4 sm:px-4 sm:py-5 ${
                  index < experienceStrip.length - 1
                    ? "border-b border-border lg:border-b-0 lg:border-r"
                    : ""
                }`}
              >
                <p className="eyebrow">{item.label}</p>
                <p className="case-meta mt-2 max-w-[16rem] text-navy leading-snug sm:max-w-none">
                  {item.flow}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-0 max-w-4xl">
          <p className="case-meta rise-in rise-in-delay-2 mt-5 text-muted md:mt-6">
            Istanbul-based · Open to global product, operations, strategy and
            founder-facing roles
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
