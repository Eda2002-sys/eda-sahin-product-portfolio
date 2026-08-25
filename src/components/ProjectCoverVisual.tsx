import Link from "next/link";
import Image from "next/image";
import { CaseStudyVisual } from "@/components/CaseStudyVisual";
import { PlaceholderVisual } from "@/components/PlaceholderVisual";
import type { Project, ProjectVisualComponent } from "@/data/projects";

const phoneHeroComponents = new Set<ProjectVisualComponent>(["socida-whatsapp"]);

export function ProjectCoverVisual({ project }: { project: Project }) {
  const heroVisual = project.caseStudy?.visuals?.find(
    (visual) => visual.placement === "hero",
  );

  if (heroVisual?.component) {
    const isPhone = phoneHeroComponents.has(heroVisual.component);

    return (
      <Link
        href={project.href}
        className="group block w-full min-w-0"
        aria-label={`${project.title} case study preview`}
      >
        <div
          className={`project-cover-shell ${
            isPhone ? "project-cover-shell--phone" : "project-cover-shell--wide"
          }`}
        >
          <div
            className={
              isPhone
                ? "mx-auto w-full max-w-[16.5rem] sm:max-w-[18rem]"
                : "project-cover-visual min-w-0 w-full"
            }
          >
            <CaseStudyVisual
              visual={{ ...heroVisual, caption: undefined }}
              priority
            />
          </div>
        </div>
      </Link>
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
