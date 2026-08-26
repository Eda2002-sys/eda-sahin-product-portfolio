import { SectionHeading } from "@/components/SectionHeading";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24"
      aria-labelledby="about-heading"
    >
      <div className="container-page section-space">
        <div className="max-w-3xl">
          <SectionHeading
            id="about-heading"
            eyebrow="About"
            title="Strongest where product thinking meets delivery."
          />
          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted md:text-lg">
            <p>
              Business Administration at Koç University, then founder-facing
              Chief of Staff work. That put me in the middle of product,
              operations, clients and engineering, close enough to see where
              decisions break.
            </p>
            <p>
              I learn unfamiliar domains quickly, test the real experience, and
              turn friction into decisions teams can ship. Domains so far:
              healthcare, workforce intelligence, financial services and
              investment technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
