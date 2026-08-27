import { ButtonLink } from "@/components/ButtonLink";
import { Portrait } from "@/components/Portrait";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="border-b border-border">
      <div className="container-page py-10 md:py-16 lg:py-20">
        <div className="grid min-w-0 items-end gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="min-w-0 lg:col-span-8">
            <p className="eyebrow rise-in">Product · Operations · AI</p>

            <h1 className="case-title rise-in rise-in-delay-1 mt-4 max-w-4xl sm:mt-5">
              I turn ambiguous problems into clear product decisions and
              executable workflows.
            </h1>

            <p className="case-body rise-in rise-in-delay-2 mt-5 max-w-2xl md:mt-6">
              Product thinking, user journeys, QA and engineering coordination —
              from defining the problem to testing the experience and getting it
              ready for implementation.
            </p>

            <p className="case-meta rise-in rise-in-delay-2 mt-5 text-muted">
              Istanbul · Open to product, operations and founder-facing roles
            </p>

            <div className="rise-in rise-in-delay-2 mt-8 flex flex-wrap items-center gap-3 md:mt-10">
              <ButtonLink href="/#work">View selected work</ButtonLink>
              <ButtonLink href={siteConfig.resumePdfPath} variant="secondary">
                Download resume
              </ButtonLink>
            </div>

            <p className="case-meta rise-in rise-in-delay-2 mt-6">
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

          <div className="rise-in rise-in-delay-2 mx-auto w-full max-w-[16.5rem] lg:col-span-4 lg:mx-0 lg:justify-self-end lg:max-w-none">
            <Portrait size="hero" priority />
          </div>
        </div>
      </div>
    </section>
  );
}
