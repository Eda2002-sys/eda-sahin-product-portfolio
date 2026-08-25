import { ButtonLink } from "@/components/ButtonLink";
import { Portrait } from "@/components/Portrait";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="border-b border-border">
      <div className="container-page py-20 md:py-28 lg:py-32">
        <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-8">
            <p className="text-[11px] uppercase tracking-[0.22em] text-burgundy">
              Product · Operations · AI
            </p>

            <h1 className="mt-6 max-w-4xl font-serif text-[2.35rem] leading-[1.12] text-navy md:text-5xl lg:text-[3.5rem]">
              I turn ambiguous user and business problems into products,
              workflows and decisions teams can actually ship.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              I work across product thinking, user journeys, QA, implementation,
              client feedback and engineering coordination — often directly
              alongside founders.
            </p>

            <p className="mt-5 text-sm text-muted">
              Istanbul · Open to Product, Product Operations &amp; Founder-facing
              roles
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <ButtonLink href="/#work">View selected work</ButtonLink>
              <ButtonLink href={siteConfig.resumePath} variant="secondary">
                Download resume
              </ButtonLink>
            </div>

            <p className="mt-8 text-xs leading-relaxed text-muted md:text-sm">
              Chief of Staff experience across AI products and M&amp;A
              technology.
            </p>
          </div>

          <div className="mx-auto w-full max-w-[16.5rem] lg:col-span-4 lg:mx-0 lg:justify-self-end lg:max-w-none">
            <Portrait size="hero" priority />
            <p className="mt-3 text-xs tracking-wide text-muted">
              {siteConfig.name}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
