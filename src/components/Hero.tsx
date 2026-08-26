import { ButtonLink } from "@/components/ButtonLink";
import { Portrait } from "@/components/Portrait";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="border-b border-border">
      <div className="container-page py-10 md:py-16 lg:py-20">
        <div className="grid min-w-0 items-end gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="min-w-0 lg:col-span-8">
            <p className="eyebrow">Product · Operations · AI</p>

            <h1 className="mt-4 max-w-4xl font-serif text-[2rem] leading-[1.14] text-navy sm:mt-5 sm:text-[2.35rem] md:text-5xl lg:text-[3.35rem] lg:leading-[1.12]">
              I turn ambiguous problems into products and workflows teams can
              actually ship.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:mt-6 md:text-lg">
              Product thinking, user journeys, QA and engineering coordination —
              usually working closely with founders to turn ambiguous problems
              into clear, shippable decisions.
            </p>

            <p className="mt-5 text-sm text-muted">
              Istanbul · Open to Product, Product Operations & Founder-facing
              roles
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 md:mt-10">
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
              <span className="mx-2 text-border-strong" aria-hidden="true">
                ·
              </span>
              <a
                href={`mailto:${siteConfig.email}`}
                className="link-underline text-muted transition-colors hover:text-burgundy"
              >
                Email
              </a>
            </p>
          </div>

          <div className="mx-auto w-full max-w-[16.5rem] lg:col-span-4 lg:mx-0 lg:justify-self-end lg:max-w-none">
            <Portrait size="hero" priority />
          </div>
        </div>
      </div>
    </section>
  );
}
