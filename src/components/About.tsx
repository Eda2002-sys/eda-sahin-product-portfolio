import { Portrait } from "@/components/Portrait";
import { SectionHeading } from "@/components/SectionHeading";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-y border-border bg-surface"
      aria-labelledby="about-heading"
    >
      <div className="container-page py-20 md:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Portrait size="about" />
          </div>

          <div className="lg:col-span-8">
            <SectionHeading
              id="about-heading"
              eyebrow="About"
              title="A generalist by background, increasingly specialised in product."
            />
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted md:text-lg">
              <p>
                I studied Business Administration at Koç University and began my
                career in founder-facing Chief of Staff roles. That meant
                working close to decisions — and often close to the messy middle
                between product, operations, clients and engineering.
              </p>
              <p>
                Over time, the pattern became clear: I am strongest where product
                thinking meets execution. I like learning unfamiliar domains
                quickly, testing the real experience, and turning friction into
                decisions teams can ship.
              </p>
              <p>
                I have worked across healthcare, workforce intelligence, public
                and private markets, regulatory compliance, commercial real
                estate, investment technology, operating intelligence and gaming
                product analysis. I want to keep deepening in product —
                especially roles that stay close to both users and delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
