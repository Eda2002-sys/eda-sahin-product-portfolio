import { SectionHeading } from "@/components/SectionHeading";

export function HowIWork() {
  return (
    <section
      id="how-i-work"
      className="scroll-mt-24 border-y border-border bg-surface"
      aria-labelledby="how-heading"
    >
      <div
        className="h-px w-full bg-gradient-to-r from-transparent via-burgundy/25 to-transparent"
        aria-hidden="true"
      />
      <div className="container-page section-space">
        <SectionHeading id="how-heading" title="How I work" />
        <p className="case-body mt-6 max-w-3xl">
          I&apos;m most useful when a problem is still messy. I get close to the
          real workflow, understand what is breaking, turn that into something
          actionable and stay close through implementation.
        </p>
      </div>
    </section>
  );
}
