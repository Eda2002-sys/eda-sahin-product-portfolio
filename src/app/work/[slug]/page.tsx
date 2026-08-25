import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyView } from "@/components/CaseStudyView";
import { getCaseStudyProjects, getProjectBySlug } from "@/data/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getCaseStudyProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project || project.type !== "case-study") {
    return { title: "Case study not found" };
  }

  return {
    title: `${project.title} — Eda Sahin`,
    description: project.summary,
    openGraph: {
      title: `${project.title} — Eda Sahin`,
      description: project.summary,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project || project.type !== "case-study" || !project.caseStudy) {
    notFound();
  }

  return <CaseStudyView project={project} />;
}
