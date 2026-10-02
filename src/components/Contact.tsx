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
          title="Open to global product, operations, strategy and founder-facing roles."
          description="If my background feels relevant to what you're building, or you see a good fit, I'd be happy to connect."
        />

        <div className="mt-8 flex flex-col gap-3 min-[420px]:mt-10 min-[420px]:flex-row min-[420px]:flex-wrap">
          <ButtonLink
            href={siteConfig.linkedin}
            external
            className="w-full min-[420px]:w-auto"
          >
            LinkedIn
          </ButtonLink>
          <ButtonLink
            href={`mailto:${siteConfig.email}`}
            variant="secondary"
            external
            className="w-full min-[420px]:w-auto"
          >
            Email
          </ButtonLink>
          <ButtonLink
            href={siteConfig.github}
            variant="secondary"
            external
            className="w-full min-[420px]:w-auto"
          >
            GitHub
          </ButtonLink>
          <ButtonLink
            href={siteConfig.resumePath}
            variant="secondary"
            className="w-full min-[420px]:w-auto"
          >
            CV
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
