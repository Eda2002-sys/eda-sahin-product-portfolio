import { SectionHeading } from "@/components/SectionHeading";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24"
      aria-labelledby="about-heading"
    >
      <div className="container-page section-space">
        <div className="max-w-5xl">
          <SectionHeading id="about-heading" title="About" wide />
          <div className="mt-8 space-y-5">
            <p className="case-body">
              I studied Business Administration at Koç University and then moved
              into founder-facing Chief of Staff work across AI products and
              M&amp;A. The role put me between users, clients, product and
              engineering — often where unclear requirements or broken workflows
              became visible.
            </p>
            <p className="case-body">
              My work so far spans healthcare, workforce intelligence, financial
              services and investment technology — requiring me to learn
              unfamiliar domains quickly and move between product, operations,
              clients and engineering.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
