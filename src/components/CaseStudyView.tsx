import Link from "next/link";
import Image from "next/image";
import { CaseStudyMedia } from "@/components/CaseStudyMedia";
import { CaseStudyVisualBlock } from "@/components/CaseStudyVisual";
import { PlaceholderVisual } from "@/components/PlaceholderVisual";
import type {
  Project,
  ProjectVisual,
  ProjectVisualComponent,
} from "@/data/projects";

const phoneHeroComponents = new Set<ProjectVisualComponent>([
  "socida-whatsapp",
]);

function visualsFor(
  visuals: ProjectVisual[] | undefined,
  placement: ProjectVisual["placement"],
) {
  return visuals?.filter((visual) => visual.placement === placement) ?? [];
}

export function CaseStudyView({ project }: { project: Project }) {
  const study = project.caseStudy;
  if (!study) return null;

  const visuals = study.visuals;
  const heroVisuals = visualsFor(visuals, "hero");
  const problemVisuals = visualsFor(visuals, "problem");
  const approachVisuals = visualsFor(visuals, "approach");
  const buildVisuals = visualsFor(visuals, "build");
  const journeyVisuals = visualsFor(visuals, "journey");
  const governanceVisuals = visualsFor(visuals, "governance");
  const demandVisuals = visualsFor(visuals, "demand");
  const outcomeVisuals = visualsFor(visuals, "outcome");

  const workSectionVisuals = [...approachVisuals, ...buildVisuals];
  const practiceVisuals = [...governanceVisuals, ...demandVisuals];
  const showJourneyList =
    study.journey.length > 0 && journeyVisuals.length === 0;
  const showJourneySection =
    journeyVisuals.length > 0 || study.journey.length > 0;
  const isPhoneHero = heroVisuals.some(
    (visual) =>
      visual.component != null && phoneHeroComponents.has(visual.component),
  );
  const copyColClass = isPhoneHero ? "lg:col-span-7" : "lg:col-span-5";
  const visualColClass = isPhoneHero ? "lg:col-span-5" : "lg:col-span-7";

  const heroCopy = (
    <>
      <p className="eyebrow">Case study · {project.number}</p>
      {project.brandLogo ? (
        <div className="mt-6">
          <Link
            href={project.brandUrl ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex transition-opacity hover:opacity-80"
          >
            <Image
              src={project.brandLogo}
              alt="AnalystAI"
              width={140}
              height={60}
              className="h-10 w-auto object-contain md:h-12"
              priority
            />
          </Link>
        </div>
      ) : null}
      <h1 className="mt-4 font-serif text-4xl text-navy md:text-5xl lg:text-6xl">
        {project.title}
      </h1>
      <p className="mt-4 text-sm uppercase tracking-[0.14em] text-navy/70">
        {project.category}
      </p>
      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted md:text-xl">
        {project.summary}
      </p>
      {study.sourceNote ? (
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">
          {study.sourceNote}
        </p>
      ) : null}
      {project.context ? (
        <ul className="mt-8 flex flex-wrap gap-2">
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
      <p className="mt-6 max-w-xl border-l border-burgundy/40 pl-4 text-base leading-relaxed text-navy md:text-lg">
        {project.productValue}
      </p>
    </>
  );

  return (
    <article>
      <header className="border-b border-border">
        <div className="container-page py-16 md:py-24">
          {heroVisuals.length > 0 ? (
            <div className="grid items-start gap-10 lg:grid-cols-12">
              <div className={copyColClass}>{heroCopy}</div>
              <div className={visualColClass}>
                <CaseStudyVisualBlock visuals={heroVisuals} />
              </div>
            </div>
          ) : (
            <>
              {heroCopy}
              <div className="mt-10">
                {project.coverImage ? (
                  <CaseStudyMedia
                    src={project.coverImage}
                    alt={`${project.title} product visual`}
                    layout="framed"
                    priority
                  />
                ) : (
                  <PlaceholderVisual
                    label={project.title}
                    note={project.visualNote}
                  />
                )}
              </div>
            </>
          )}
        </div>
      </header>

      <section className="border-b border-border" aria-labelledby="glance-heading">
        <div className="container-page py-16 md:py-20">
          <h2
            id="glance-heading"
            className="font-serif text-3xl text-navy md:text-4xl"
          >
            At a glance
          </h2>
          <dl className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: "Role", value: study.glance.role },
              { label: "Product stage", value: study.glance.stage },
              ...(study.glance.usersScale
                ? [{ label: "Users / scale", value: study.glance.usersScale }]
                : []),
              { label: "Primary surfaces", value: study.glance.surfaces },
              {
                label: "Key collaboration",
                value: study.glance.collaboration,
              },
            ].map((item) => (
              <div key={item.label} className="border-t border-border pt-4">
                <dt className="eyebrow">{item.label}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-b border-border" aria-labelledby="problem-heading">
        <div className="container-page py-16 md:py-20">
          <div className="grid gap-8 md:grid-cols-12">
            <h2
              id="problem-heading"
              className="font-serif text-3xl text-navy md:col-span-4 md:text-4xl"
            >
              The problem
            </h2>
            <p className="max-w-3xl text-base leading-relaxed text-muted md:col-span-8 md:text-lg">
              {study.problem}
            </p>
          </div>
          <CaseStudyVisualBlock visuals={problemVisuals} className="mt-10" />
        </div>
      </section>

      <section className="border-b border-border bg-surface" aria-labelledby="role-heading">
        <div className="container-page grid gap-8 py-16 md:grid-cols-12 md:py-20">
          <h2
            id="role-heading"
            className="font-serif text-3xl text-navy md:col-span-4 md:text-4xl"
          >
            My role
          </h2>
          <div className="md:col-span-8">
            <p className="text-base leading-relaxed text-muted md:text-lg">
              {study.roleNarrative}
            </p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {project.roleHighlights.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-navy">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {study.workSections.length > 0 ? (
        <section className="border-b border-border" aria-labelledby="worked-heading">
          <div className="container-page py-16 md:py-20">
            <h2
              id="worked-heading"
              className="font-serif text-3xl text-navy md:text-4xl"
            >
              {study.workSectionsTitle ?? "What I worked on"}
            </h2>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {study.workSections.map((section) => (
                <div key={section.title} className="border-t border-border pt-5">
                  <h3 className="font-serif text-2xl text-navy">
                    {section.title}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm leading-relaxed text-muted"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {workSectionVisuals.length > 0 ? (
              <CaseStudyVisualBlock
                visuals={workSectionVisuals}
                className="mt-12"
              />
            ) : null}
          </div>
        </section>
      ) : null}

      {study.decisions.length > 0 ? (
        <section
          className="border-b border-border bg-surface"
          aria-labelledby="decisions-heading"
        >
          <div className="container-page py-16 md:py-20">
            <h2
              id="decisions-heading"
              className="font-serif text-3xl text-navy md:text-4xl"
            >
              What testing surfaced
            </h2>
            <div className="mt-10 space-y-6">
              {study.decisions.map((decision) => (
                <div
                  key={decision.observed}
                  className="rounded-sm border border-border bg-background p-6 md:p-8"
                >
                  <div className="grid gap-6 lg:grid-cols-4">
                    <div>
                      <p className="eyebrow">Observed</p>
                      <p className="mt-2 text-sm leading-relaxed text-navy">
                        {decision.observed}
                      </p>
                    </div>
                    <div>
                      <p className="eyebrow">Why it matters</p>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {decision.whyItMatters}
                      </p>
                    </div>
                    <div>
                      <p className="eyebrow">Recommendation</p>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {decision.recommendation}
                      </p>
                    </div>
                    <div>
                      <p className="eyebrow">Expected impact</p>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {decision.expectedImpact}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {practiceVisuals.length > 0 ? (
        <section
          className="border-b border-border"
          aria-labelledby="practice-heading"
        >
          <div className="container-page py-16 md:py-20">
            <h2
              id="practice-heading"
              className="font-serif text-3xl text-navy md:text-4xl"
            >
              Product in practice
            </h2>
            <CaseStudyVisualBlock visuals={practiceVisuals} className="mt-10" />
          </div>
        </section>
      ) : null}

      {showJourneySection ? (
        <section
          className="border-b border-border"
          aria-labelledby="journey-heading"
        >
          <div className="container-page py-16 md:py-20">
            <h2
              id="journey-heading"
              className="font-serif text-3xl text-navy md:text-4xl"
            >
              Key workflow
            </h2>
            <CaseStudyVisualBlock visuals={journeyVisuals} className="mt-10" />
            {showJourneyList ? (
              <ol className="mt-10 flex flex-col gap-3 md:flex-row md:flex-wrap md:items-stretch md:gap-0">
                {study.journey.map((step, index) => (
                  <li
                    key={step}
                    className="relative flex flex-1 flex-col rounded-sm border border-border bg-surface px-4 py-5 md:min-w-[9.5rem] md:rounded-none md:border-l-0 md:first:rounded-l-sm md:first:border-l md:last:rounded-r-sm"
                  >
                    <span className="eyebrow">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="mt-3 text-sm leading-relaxed text-navy">
                      {step}
                    </span>
                    {index < study.journey.length - 1 ? (
                      <span
                        className="pointer-events-none absolute -right-2 top-1/2 hidden -translate-y-1/2 text-burgundy md:block"
                        aria-hidden="true"
                      >
                        →
                      </span>
                    ) : null}
                  </li>
                ))}
              </ol>
            ) : null}
          </div>
        </section>
      ) : null}

      {study.demonstrates.length > 0 ? (
        <section
          className="border-b border-border bg-surface"
          aria-labelledby="demonstrates-heading"
        >
          <div className="container-page py-16 md:py-20">
            <h2
              id="demonstrates-heading"
              className="font-serif text-3xl text-navy md:text-4xl"
            >
              What this work shows
            </h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {study.demonstrates.map((item) => (
                <li
                  key={item}
                  className="border-t border-border pt-4 text-sm leading-relaxed text-navy"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {outcomeVisuals.length > 0 || study.outcomeLine ? (
        <section
          className="border-b border-border bg-surface"
          aria-labelledby="outcome-heading"
        >
          <div className="container-page py-16 md:py-20">
            <h2
              id="outcome-heading"
              className="font-serif text-3xl text-navy md:text-4xl"
            >
              Outcome
            </h2>
            <CaseStudyVisualBlock visuals={outcomeVisuals} className="mt-10" />
            {study.outcomeLine ? (
              <p className="mt-6 max-w-2xl font-serif text-xl leading-snug text-navy md:text-2xl">
                {study.outcomeLine}
              </p>
            ) : null}
          </div>
        </section>
      ) : null}

      <div className="container-page py-16 md:py-20">
        <Link href="/#work" className="link-underline text-sm text-burgundy">
          ← Back to selected work
        </Link>
      </div>
    </article>
  );
}
