import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeading } from "@/components/SectionHeading";
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
        <SectionHeading
          id="contact-heading"
          eyebrow="Contact"
          title="Open to product, operations and founder-facing roles."
          description="If my background feels relevant to what you're building, or you see a good fit, I'd be happy to connect."
        />

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
            CV
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
