import { ButtonLink } from "@/components/ButtonLink";
import { Portrait } from "@/components/Portrait";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="border-b border-border">
      <div className="container-page py-16 md:py-28 lg:py-32">
        <div className="grid min-w-0 items-end gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="min-w-0 lg:col-span-8">
            <p className="text-[11px] uppercase tracking-[0.22em] text-burgundy">
              Product · Operations · AI
            </p>

            <h1 className="mt-5 max-w-4xl font-serif text-[2rem] leading-[1.14] text-navy sm:mt-6 sm:text-[2.35rem] md:text-5xl lg:text-[3.5rem] lg:leading-[1.12]">
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
              <ButtonLink href={siteConfig.resumePdfPath} variant="secondary">
                Download resume
              </ButtonLink>
            </div>

            <p className="mt-6 text-sm">
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-muted transition-colors hover:text-burgundy"
              >
                LinkedIn
              </a>
              <span className="mx-2 text-border-strong" aria-hidden="true">
                ·
              </span>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-muted transition-colors hover:text-burgundy"
              >
                GitHub
              </a>
            </p>

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
