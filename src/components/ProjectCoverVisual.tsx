import Link from "next/link";
import Image from "next/image";
import { CaseStudyVisual } from "@/components/CaseStudyVisual";
import { PlaceholderVisual } from "@/components/PlaceholderVisual";
import type { Project, ProjectVisualComponent } from "@/data/projects";

const phoneHeroComponents = new Set<ProjectVisualComponent>(["socida-whatsapp"]);
const compactCoverComponents = new Set<ProjectVisualComponent>([
  "hautonomy-hero",
]);

export function ProjectCoverVisual({ project }: { project: Project }) {
  const heroVisual = project.caseStudy?.visuals?.find(
    (visual) => visual.placement === "hero",
  );

  if (heroVisual?.component) {
    const isPhone = phoneHeroComponents.has(heroVisual.component);
    const isCompact = compactCoverComponents.has(heroVisual.component);

    // Not a <Link>: several hero infographics embed their own company logos,
    // which are themselves links (AnalystAiLogo defaults to analystai.ai).
    // Wrapping them in an anchor produced nested <a> tags - invalid HTML, and
    // React failed hydration on the home page because of it. The card already
    // links to the case study through its CTA, so this wrapper is presentational.
    return (
      <div
        className="group block w-full min-w-0"
        aria-hidden="false"
      >
        <div
          className={`project-cover-shell ${
            isPhone
              ? "project-cover-shell--phone"
              : isCompact
                ? "project-cover-shell--wide project-cover-shell--compact"
                : "project-cover-shell--wide"
          }`}
        >
          <div
            className={
              isPhone
                ? "mx-auto w-full max-w-[16.5rem] min-[400px]:max-w-[19rem] sm:max-w-[20.5rem]"
                : isCompact
                  ? "project-cover-visual project-cover-visual--compact mx-auto min-w-0 w-full max-w-[34rem]"
                  : "project-cover-visual min-w-0 w-full"
            }
          >
            <CaseStudyVisual
              visual={{ ...heroVisual, caption: undefined }}
              priority
              compact={isCompact}
            />
          </div>
        </div>
      </div>
    );
  }

  if (project.coverImage) {
    return (
      <Link href={project.href} className="group block w-full min-w-0">
        <figure className="project-cover-shell project-cover-shell--wide overflow-hidden !p-0">
          <div className="relative aspect-[16/10] w-full">
            <Image
              src={project.coverImage}
              alt={`${project.title} product visual`}
              fill
              sizes="(max-width: 1024px) 100vw, 540px"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]"
            />
          </div>
        </figure>
      </Link>
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
