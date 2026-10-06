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
      <div className="container-page py-8 md:py-16 lg:py-20">
        <h1 className="case-title rise-in rise-in-delay-1 max-w-5xl text-balance !text-[1.875rem] leading-[1.18] sm:!text-[2.25rem] md:!text-[3rem]">
          Different industries. Same job: turning complex workflows into working
          products.
        </h1>

        <p className="case-body rise-in rise-in-delay-2 mt-4 max-w-4xl md:mt-6">
          Early in my career, I&apos;ve had the chance to work across very
          different products and industries, getting close to users and real
          workflows, understanding what needs to change and working with clients
          and teams to move things forward.
        </p>

        <div
          className="rise-in rise-in-delay-2 mt-7 border-y border-border md:mt-10"
          aria-label="Experience across domains"
        >
          {/* Mobile: horizontal scan strip. Desktop: equal columns. */}
          <div className="-mx-5 overflow-x-auto overscroll-x-contain px-5 [scrollbar-width:thin] sm:-mx-0 sm:overflow-visible sm:px-0">
            <ul className="flex min-w-max divide-x divide-border sm:min-w-0 sm:grid sm:w-full sm:grid-cols-2 lg:grid-cols-5">
              {experienceStrip.map((item) => (
                <li
                  key={item.label}
                  className="w-[11.25rem] shrink-0 px-3 py-4 sm:w-auto sm:min-w-0 sm:px-4 sm:py-5"
                >
                  <p className="eyebrow">{item.label}</p>
                  <p className="case-meta mt-2 text-navy leading-snug">
                    {item.flow}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="min-w-0 max-w-4xl">
          <p className="case-meta rise-in rise-in-delay-2 mt-5 text-muted md:mt-6">
            Istanbul based · Open to global product, operations, strategy and
            founder facing roles
          </p>

          <div className="rise-in rise-in-delay-2 mt-7 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap min-[420px]:items-center md:mt-10">
            <ButtonLink href="/#work" className="w-full min-[420px]:w-auto">
              View selected work
            </ButtonLink>
            <ButtonLink
              href={siteConfig.resumePdfPath}
              variant="secondary"
              className="w-full min-[420px]:w-auto"
            >
              Download CV
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
