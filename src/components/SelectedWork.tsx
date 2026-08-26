import Link from "next/link";
import { ProjectCoverVisual } from "@/components/ProjectCoverVisual";
import { SectionHeading } from "@/components/SectionHeading";
import { additionalProducts } from "@/data/additionalProducts";
import { getFlagshipProjects, type Project } from "@/data/projects";

function ProjectCard({
  project,
  reverse = false,
}: {
  project: Project;
  reverse?: boolean;
}) {
  return (
    <article className="grid items-start gap-8 border-t border-border py-10 md:gap-12 md:py-16 lg:grid-cols-12 lg:gap-14">
      <div
        className={`min-w-0 lg:col-span-6 ${reverse ? "lg:order-2" : "lg:order-1"}`}
      >
        <ProjectCoverVisual project={project} />
      </div>

      <div
        className={`min-w-0 lg:col-span-6 ${reverse ? "lg:order-1" : "lg:order-2"}`}
      >
        <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-4">
          <span className="font-serif text-3xl text-burgundy md:text-4xl">
            {project.number}
          </span>
          <p className="eyebrow eyebrow-muted">{project.category}</p>
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
                className="rounded-sm border border-border-strong bg-surface-elevated px-2.5 py-1 text-xs text-navy"
              >
                {item}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-5 sm:mt-6">
          <p className="eyebrow eyebrow-navy">My role</p>
          <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
            {project.roleHighlights.slice(0, 8).map((item) => (
              <li key={item} className="text-sm leading-relaxed text-navy/80">
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
  const flagship = getFlagshipProjects();

  return (
    <section id="work" className="scroll-mt-24" aria-labelledby="work-heading">
      <div className="container-page pt-16 md:pt-24">
        <SectionHeading
          id="work-heading"
          eyebrow="Selected work"
          title="Four products taken from ambiguity to deployment."
          description="Workforce intelligence, operating intelligence, digital health and investment technology — each case shows how I moved from user and business problems to product logic, testing, QA and delivery."
        />
        <div className="mt-2 md:mt-4">
          {flagship.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              reverse={index % 2 === 1}
            />
          ))}
        </div>

        <div
          id="additional-products"
          className="scroll-mt-24 border-t border-border pb-16 pt-16 md:pb-24 md:pt-20"
        >
          <SectionHeading
            id="additional-products-heading"
            eyebrow="Additional product experience"
            title="Other products I tested and helped ship."
            description="Client and internal AI products shown as breadth, not as full case studies."
          />
          <ul className="mt-10 divide-y divide-border border-t border-border md:mt-12">
            {additionalProducts.map((product) => (
              <li
                key={product.name}
                className="grid gap-1 py-5 sm:grid-cols-12 sm:items-baseline sm:gap-6 sm:py-6"
              >
                <p className="font-serif text-lg text-navy sm:col-span-4 md:text-xl">
                  {product.name}
                </p>
                <p className="text-sm leading-relaxed text-muted sm:col-span-8 md:text-base">
                  {product.summary}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
