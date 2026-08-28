import { SectionHeading } from "@/components/SectionHeading";
import { howIWorkSteps } from "@/data/skills";

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
        <SectionHeading
          id="how-heading"
          title="How I work."
          description="Ambiguous systems → concrete product decisions → cross-functional implementation."
        />

        <ol className="relative mt-10 md:mt-14">
          <div
            className="pointer-events-none absolute left-4 top-0 bottom-0 z-0 w-px bg-gradient-to-b from-burgundy/35 via-border to-transparent md:hidden"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute left-[10%] right-[10%] top-4 z-0 hidden h-px bg-gradient-to-r from-transparent via-burgundy/30 to-transparent md:block"
            aria-hidden="true"
          />

          <div className="grid gap-0 md:grid-cols-5 md:gap-3">
            {howIWorkSteps.map((step, index) => (
              <li
                key={step.number}
                className="relative z-10 grid grid-cols-[auto_1fr] items-start gap-x-4 border-t border-border py-6 first:border-t-0 first:pt-0 md:flex md:flex-col md:items-center md:border-t-0 md:px-2 md:py-0 md:text-center"
              >
                <span
                  className={`relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-[0.6875rem] tracking-[0.14em] shadow-[0_0_0_4px_var(--surface)] md:mx-auto md:h-9 md:w-9 ${
                    index === 0
                      ? "border-burgundy bg-burgundy text-background"
                      : "border-burgundy/40 bg-surface text-burgundy"
                  }`}
                >
                  {step.number}
                </span>
                <p
                  className={`case-meta pt-0.5 text-navy md:mt-4 md:max-w-[11rem] md:pt-0 ${
                    index === howIWorkSteps.length - 1 ? "md:max-w-[12.5rem]" : ""
                  }`}
                >
                  {step.title}
                </p>
              </li>
            ))}
          </div>
        </ol>
      </div>
    </section>
  );
}
