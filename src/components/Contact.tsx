import { ButtonLink } from "@/components/ButtonLink";
import { siteConfig } from "@/data/site";

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-border bg-surface"
      aria-labelledby="contact-heading"
    >
      <div
        className="h-px w-full bg-gradient-to-r from-transparent via-burgundy/35 to-transparent"
        aria-hidden="true"
      />
      <div className="container-page section-space">
        <p className="eyebrow">Contact</p>
        <h2 id="contact-heading" className="case-section mt-3">
          Open to product, operations and founder-facing roles.
        </h2>
        <p className="case-body mt-5">
          If my background feels relevant to what you&apos;re building, or you
          see a good fit, I&apos;d be happy to connect.
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
    </section>
  );
}
