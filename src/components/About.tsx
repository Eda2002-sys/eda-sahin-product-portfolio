import { SectionHeading } from "@/components/SectionHeading";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24"
      aria-labelledby="about-heading"
    >
      <div className="container-page section-space">
        <SectionHeading id="about-heading" eyebrow="About" title="How I operate" />
        <div className="mt-8 space-y-5">
          <p className="case-pull text-navy">
            I work best where the problem is still unclear and the path to
            execution has not been fully defined.
          </p>
          <p className="case-body">
            My work has taken me across healthcare, workforce intelligence,
            financial services and investment technology, usually between users,
            clients, product and engineering. That range has made me comfortable
            learning unfamiliar domains quickly, testing the real workflow and
            turning friction into decisions teams can act on.
          </p>
        </div>
      </div>
    </section>
  );
}
