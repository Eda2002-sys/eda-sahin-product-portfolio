import { ButtonLink } from "@/components/ButtonLink";
import { siteConfig } from "@/data/site";

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-border bg-surface"
      aria-labelledby="contact-heading"
    >
      <div className="container-page section-space">
        <div className="max-w-3xl">
          <p className="eyebrow">Contact</p>
          <h2
            id="contact-heading"
            className="mt-3 font-serif text-3xl leading-tight text-navy md:text-4xl lg:text-[2.75rem]"
          >
            Open to product and founder-facing roles.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            Especially where the brief is ambiguous and someone needs to stay
            close to users, QA and engineering until the product ships.
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
      </div>
    </section>
  );
}
