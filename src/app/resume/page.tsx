import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { Portrait } from "@/components/Portrait";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Resume — Eda Sahin",
  description:
    "Resume for Eda Sahin — product, product operations and founder-facing roles.",
};

export default function ResumePage() {
  return (
    <div className="border-b border-border">
      <div className="container-page py-16 md:py-24">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-burgundy">
              Resume
            </p>
            <h1 className="mt-4 font-serif text-4xl text-navy md:text-5xl">
              {siteConfig.name}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              Product · Operations · AI — Istanbul. Open to Product, Product
              Operations and founder-facing roles.
            </p>
          </div>
          <Portrait size="compact" />
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href={`mailto:${siteConfig.email}`} external>
            Email
          </ButtonLink>
          <ButtonLink href={siteConfig.linkedin} variant="secondary" external>
            LinkedIn
          </ButtonLink>
          <ButtonLink href={siteConfig.github} variant="secondary" external>
            GitHub
          </ButtonLink>
          {/* Drop a PDF at public/resume.pdf and link it here when ready. */}
        </div>

        <p className="mt-6 text-sm text-muted">
          Prefer a PDF? Add{" "}
          <code className="text-navy">public/resume.pdf</code> and update the
          resume link in{" "}
          <code className="text-navy">src/data/site.ts</code>.
        </p>

        <section className="mt-16 border-t border-border pt-10">
          <h2 className="font-serif text-3xl text-navy">Selected work</h2>
          <ul className="mt-6 space-y-4">
            {projects.map((project) => (
              <li key={project.id}>
                <Link
                  href={project.href}
                  className="link-underline font-medium text-navy"
                >
                  {project.title}
                </Link>
                <p className="mt-1 text-sm text-muted">{project.summary}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14 border-t border-border pt-10">
          <h2 className="font-serif text-3xl text-navy">Experience</h2>
          <ul className="mt-6 space-y-6">
            {experience.map((item) => (
              <li key={item.id}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base text-navy">
                    {item.role}, {item.company}
                  </h3>
                  <p className="text-sm text-muted">{item.period}</p>
                </div>
                {item.focus ? (
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.focus.join(" · ")}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14 border-t border-border pt-10">
          <h2 className="font-serif text-3xl text-navy">Capabilities</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm uppercase tracking-[0.14em] text-burgundy">
                  {group.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {group.items.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 border-t border-border pt-10">
          <h2 className="font-serif text-3xl text-navy">Education</h2>
          <p className="mt-4 text-base text-navy">
            Koç University — Business Administration
          </p>
        </section>

        <Link
          href="/"
          className="link-underline mt-16 inline-flex text-sm text-burgundy"
        >
          ← Back to portfolio
        </Link>
      </div>
    </div>
  );
}
