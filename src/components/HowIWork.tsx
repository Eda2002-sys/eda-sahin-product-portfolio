import { SectionHeading } from "@/components/SectionHeading";
import { howIWorkSteps } from "@/data/skills";

export function HowIWork() {
  return (
    <section
      id="how-i-work"
      className="scroll-mt-24 border-y border-border bg-surface"
      aria-labelledby="how-heading"
    >
      <div className="container-page section-space">
        <SectionHeading id="how-heading" title="How I work." />

        <ol className="relative mt-12 grid gap-8 md:grid-cols-5 md:gap-5">
          <div
            className="pointer-events-none absolute left-0 right-0 top-[0.7rem] z-0 hidden h-px bg-gradient-to-r from-border via-burgundy/25 to-border md:block"
            aria-hidden="true"
          />
          {howIWorkSteps.map((step) => (
            <li key={step.number} className="relative z-10 min-w-0">
              <p className="case-subhead inline-flex items-center gap-2 bg-surface pe-3 text-burgundy">
                <span
                  className="hidden h-2.5 w-2.5 rounded-full border border-burgundy/40 bg-surface md:inline-block"
                  aria-hidden="true"
                />
                {step.number}
              </p>
              <p className="case-meta mt-3 text-navy md:mt-4">{step.title}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
