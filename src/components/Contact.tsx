import { ButtonLink } from "@/components/ButtonLink";
import { Portrait } from "@/components/Portrait";
import { siteConfig } from "@/data/site";

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-border bg-surface"
      aria-labelledby="contact-heading"
    >
      <div className="container-page py-20 md:py-28">
        <div className="grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="text-[11px] uppercase tracking-[0.2em] text-burgundy">
              Contact
            </p>
            <h2
              id="contact-heading"
              className="mt-4 max-w-3xl font-serif text-3xl leading-tight text-navy md:text-5xl"
            >
              Have a product problem worth thinking through?
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              I’m currently interested in product, product operations and
              founder-facing roles where I can stay close to both users and
              execution.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href={siteConfig.linkedin} external>
                LinkedIn
              </ButtonLink>
              <ButtonLink
                href={`mailto:${siteConfig.email}`}
                variant="secondary"
                external
              >
                Email
              </ButtonLink>
              <ButtonLink href={siteConfig.github} variant="secondary" external>
                GitHub
              </ButtonLink>
              <ButtonLink href={siteConfig.resumePath} variant="secondary">
                Resume
              </ButtonLink>
            </div>
          </div>

          <div className="lg:col-span-4 lg:justify-self-end">
            <Portrait size="compact" />
          </div>
        </div>
      </div>
    </section>
  );
}
