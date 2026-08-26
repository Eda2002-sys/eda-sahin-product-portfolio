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
        <SectionHeading
          id="how-heading"
          eyebrow="Method"
          title="From ambiguous problem to shipped behaviour."
        />

        <ol className="mt-12 grid gap-6 md:grid-cols-5 md:gap-4">
          {howIWorkSteps.map((step) => (
            <li
              key={step.number}
              className="border-t border-border pt-5 md:border-t-0 md:border-l md:border-border md:pl-4 md:pt-0"
            >
              <p className="font-serif text-2xl text-burgundy">{step.number}</p>
              <p className="mt-3 text-sm leading-relaxed text-navy">
                {step.title}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
