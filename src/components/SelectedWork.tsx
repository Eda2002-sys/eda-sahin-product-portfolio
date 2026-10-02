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
    <article className="grid items-start gap-6 border-t border-border py-8 transition-colors sm:gap-8 sm:py-10 md:gap-12 md:py-16 lg:grid-cols-12 lg:gap-14">
      <div
        className={`min-w-0 lg:col-span-6 ${reverse ? "lg:order-2" : "lg:order-1"}`}
      >
        <ProjectCoverVisual project={project} />
      </div>

      <div
        className={`min-w-0 lg:col-span-6 ${reverse ? "lg:order-1" : "lg:order-2"}`}
      >
        <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-4">
          <span className="case-subhead text-burgundy">{project.number}</span>
          <p className="eyebrow eyebrow-tag max-w-full text-pretty break-words">
            {project.category}
          </p>
        </div>

        <h3 className="case-section mt-3 text-balance sm:mt-4">
          {project.title}
        </h3>

        <p className="case-meta mt-2 text-pretty text-burgundy">
          {project.whatChanged}
        </p>

        <p className="case-body mt-3 sm:mt-4">{project.summary}</p>

        {project.context ? (
          <ul className="mt-4 flex flex-wrap gap-2 sm:mt-5">
            {project.context.map((item) => (
              <li
                key={item}
                className="tag-chip rounded-sm border border-border-strong bg-surface-elevated px-2.5 py-1 text-navy shadow-[0_1px_0_rgba(210,200,187,0.55)]"
              >
                {item}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-5 sm:mt-6">
          <p className="eyebrow eyebrow-navy">My role</p>
          <ul className="mt-3 grid gap-x-6 gap-y-2 sm:grid-cols-2">
            {project.roleHighlights.slice(0, 4).map((item) => (
              <li
                key={item}
                className="case-meta flex gap-2 text-navy/80"
              >
                <span
                  className="mt-[0.45em] h-1 w-1 shrink-0 rounded-full bg-burgundy"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <Link
          href={project.href}
          className="link-underline case-meta mt-6 inline-flex items-center text-burgundy transition-colors hover:text-burgundy-soft sm:mt-8"
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
          title="Selected work"
          description="AI makes it faster to learn across new fields. I use that speed with human judgement to understand unfamiliar workflows, ask the right questions and turn what I learn into products that work. Below are some of the AI-native products I've helped shape, test and implement."
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
            title="Additional AI & data products"
            description="Products I contributed to across finance, research and investment workflows."
          />
          <ul className="mt-10 divide-y divide-border border-t border-border md:mt-12">
            {additionalProducts.map((product) => (
              <li
                key={product.name}
                className="group -mx-3 grid gap-1 rounded-sm px-3 py-5 transition-colors hover:bg-surface sm:grid-cols-12 sm:items-baseline sm:gap-6 sm:py-6"
              >
                <p className="case-meta sm:col-span-4">
                  {product.href ? (
                    <a
                      href={product.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-col text-navy transition-colors hover:text-burgundy"
                    >
                      <span className="link-underline">{product.name}</span>
                      <span className="case-meta mt-0.5 text-muted opacity-0 transition-opacity group-hover:opacity-100">
                        {product.href.replace(/^https?:\/\/(www\.)?/, "")}
                      </span>
                    </a>
                  ) : (
                    <span className="text-navy">{product.name}</span>
                  )}
                </p>
                <p className="case-meta text-muted sm:col-span-8">
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
