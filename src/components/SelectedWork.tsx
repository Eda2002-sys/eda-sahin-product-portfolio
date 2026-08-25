import Image from "next/image";
import Link from "next/link";
import { CreHeroVisual } from "@/components/case-studies/CreMappingInfographics";
import { HautonomyHeroVisual } from "@/components/case-studies/HautonomyInfographics";
import { LpHeroVisual } from "@/components/case-studies/LpIntelligenceInfographics";
import { OvernightHeroVisual } from "@/components/case-studies/OvernightMarketsInfographics";
import { RegulatoryHeroVisual } from "@/components/case-studies/RegulatoryInfographics";
import { SocidaWhatsAppMock } from "@/components/case-studies/SocidaInfographics";
import { PlaceholderVisual } from "@/components/PlaceholderVisual";
import { SectionHeading } from "@/components/SectionHeading";
import { projects, type Project } from "@/data/projects";

function ProjectCardCover({ project }: { project: Project }) {
  if (project.id === "socida-ai") return <SocidaWhatsAppMock />;
  if (project.id === "hautonomy") return <HautonomyHeroVisual />;
  if (project.id === "overnight-markets") return <OvernightHeroVisual />;
  if (project.id === "lp-intelligence") return <LpHeroVisual />;
  if (project.id === "regulatory-compliance") return <RegulatoryHeroVisual />;
  if (project.id === "cre-mapping") return <CreHeroVisual />;

  if (project.coverImage) {
    return (
      <figure className="group relative overflow-hidden rounded-sm border border-border bg-surface">
        <div className="relative aspect-[16/10]">
          <Image
            src={project.coverImage}
            alt={`${project.title} product visual`}
            fill
            sizes="(max-width: 1024px) 100vw, 540px"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.015]"
          />
        </div>
      </figure>
    );
  }

  return (
    <PlaceholderVisual
      label={project.title}
      note={project.visualNote}
      aspect="wide"
    />
  );
}

function ProjectCard({
  project,
  reverse = false,
}: {
  project: Project;
  reverse?: boolean;
}) {
  return (
    <article className="grid items-center gap-8 border-t border-border py-14 md:gap-12 md:py-20 lg:grid-cols-12">
      <div
        className={`lg:col-span-6 ${reverse ? "lg:order-2" : "lg:order-1"}`}
      >
        <ProjectCardCover project={project} />
      </div>

      <div
        className={`lg:col-span-6 ${reverse ? "lg:order-1" : "lg:order-2"}`}
      >
        <div className="flex items-baseline gap-4">
          <span className="font-serif text-3xl text-burgundy/80 md:text-4xl">
            {project.number}
          </span>
          <p className="text-[11px] uppercase tracking-[0.18em] text-muted">
            {project.category}
          </p>
        </div>

        <h3 className="mt-4 font-serif text-3xl text-navy md:text-4xl">
          {project.title}
        </h3>

        <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
          {project.summary}
        </p>

        {project.context ? (
          <ul className="mt-5 flex flex-wrap gap-2">
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

        <div className="mt-6">
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

        <p className="mt-6 border-l border-burgundy/40 pl-4 text-sm leading-relaxed text-navy md:text-base">
          {project.productValue}
        </p>

        <Link
          href={project.href}
          className="link-underline mt-8 inline-flex text-sm text-burgundy"
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
      <div className="container-page pt-20 md:pt-28">
        <SectionHeading
          id="work-heading"
          eyebrow="Selected work"
          title="Product case studies and independent reviews"
          description="Editorial looks at products where I contributed across thinking, journeys, QA, implementation and founder-facing coordination — including AnalystAI operating workflows across workforce, markets, private markets, compliance, real estate and clinical documents."
        />
        <div className="mt-4">
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
