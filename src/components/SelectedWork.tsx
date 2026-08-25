import Link from "next/link";
import { ProjectCoverVisual } from "@/components/ProjectCoverVisual";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/projects";

function ProjectCard({
  project,
  reverse = false,
}: {
  project: (typeof projects)[number];
  reverse?: boolean;
}) {
  return (
    <article className="grid items-start gap-8 border-t border-border py-10 md:gap-12 md:py-20 lg:grid-cols-12 lg:gap-14">
      <div
        className={`min-w-0 lg:col-span-6 ${reverse ? "lg:order-2" : "lg:order-1"}`}
      >
        <ProjectCoverVisual project={project} />
      </div>

      <div
        className={`min-w-0 lg:col-span-6 ${reverse ? "lg:order-1" : "lg:order-2"}`}
      >
        <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-4">
          <span className="font-serif text-3xl text-burgundy/80 md:text-4xl">
            {project.number}
          </span>
          <p className="text-[11px] uppercase tracking-[0.16em] text-muted sm:tracking-[0.18em]">
            {project.category}
          </p>
        </div>

        <h3 className="mt-3 font-serif text-2xl text-navy sm:mt-4 sm:text-3xl md:text-4xl">
          {project.title}
        </h3>

        <p className="mt-3 text-base leading-relaxed text-muted sm:mt-4 md:text-lg">
          {project.summary}
        </p>

        {project.context ? (
          <ul className="mt-4 flex flex-wrap gap-2 sm:mt-5">
            {project.context.map((item) => (
              <li
                key={item}
                className="rounded-sm border border-border px-2.5 py-1 text-xs text-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-5 sm:mt-6">
          <p className="text-[11px] uppercase tracking-[0.16em] text-navy">
            My role
          </p>
          <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
            {project.roleHighlights.slice(0, 8).map((item) => (
              <li key={item} className="text-sm leading-relaxed text-muted">
                <span className="mr-2 text-burgundy" aria-hidden="true">
                  —
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-5 border-l border-burgundy/40 pl-4 text-sm leading-relaxed text-navy sm:mt-6 md:text-base">
          {project.productValue}
        </p>

        <Link
          href={project.href}
          className="link-underline mt-6 inline-flex text-sm text-burgundy sm:mt-8"
        >
          {project.ctaLabel}
          <span aria-hidden="true" className="ml-2">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}

export function SelectedWork() {
  return (
    <section id="work" className="scroll-mt-24" aria-labelledby="work-heading">
      <div className="container-page pt-16 md:pt-28">
        <SectionHeading
          id="work-heading"
          eyebrow="Selected work"
          title="Product case studies and independent reviews"
          description="Editorial looks at products where I contributed across thinking, journeys, QA, implementation and founder-facing coordination — including AnalystAI operating workflows across workforce, markets, private markets, compliance, real estate and clinical documents."
        />
        <div className="mt-2 md:mt-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
