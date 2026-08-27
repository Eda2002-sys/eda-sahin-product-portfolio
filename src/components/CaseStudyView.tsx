import Link from "next/link";
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
      <h1 className="case-title mt-4">{project.title}</h1>
      <p className="eyebrow eyebrow-tag mt-4">{project.category}</p>
      <p className="case-body mt-6 max-w-3xl">{project.summary}</p>
      {study.sourceNote ? (
        <p className="case-note mt-4 max-w-3xl">{study.sourceNote}</p>
      ) : null}
      {project.context ? (
        <ul className="mt-8 flex flex-wrap gap-2">
          {project.context.map((item) => (
            <li
              key={item}
              className="rounded-sm border border-border-strong bg-surface-elevated px-2.5 py-1 text-xs text-navy shadow-[0_1px_0_rgba(210,200,187,0.55)]"
            >
              {item}
            </li>
          ))}
        </ul>
      ) : null}
      <p className="case-pull mt-6 max-w-xl border-l border-burgundy/40 pl-4">
        {project.productValue}
      </p>
    </>
  );

  return (
    <article>
      <div className="container-page pt-6 md:pt-8">
        <Link href="/#work" className="link-underline text-sm text-burgundy">
          ← Back to selected work
        </Link>
      </div>

      <header className="border-b border-border">
        <div className="container-page pb-16 pt-8 md:pb-24 md:pt-10">
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

      <section className="case-band case-band--surface" aria-labelledby="glance-heading">
        <div className="container-page py-16 md:py-20">
          <h2 id="glance-heading" className="case-section">
            At a glance
          </h2>
          <dl className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: "Role", value: study.glance.role },
              { label: "Product stage", value: study.glance.stage },
              ...(study.glance.usersScale
                ? [{ label: "Users", value: study.glance.usersScale }]
                : []),
              { label: "Primary surfaces", value: study.glance.surfaces },
              {
                label: "Key collaboration",
                value: study.glance.collaboration,
              },
            ].map((item) => (
              <div key={item.label} className="border-t border-border pt-4">
                <dt className="visual-kicker">{item.label}</dt>
                <dd className="case-meta mt-2.5 text-navy">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="case-band" aria-labelledby="problem-heading">
        <div className="container-page py-16 md:py-20">
          <div className="grid gap-8 md:grid-cols-12">
            <h2
              id="problem-heading"
              className="case-section md:col-span-4"
            >
              The problem
            </h2>
            <p className="case-body max-w-3xl md:col-span-8">{study.problem}</p>
          </div>
          <CaseStudyVisualBlock visuals={problemVisuals} className="mt-10" />
        </div>
      </section>

      <section className="case-band case-band--surface" aria-labelledby="role-heading">
        <div className="container-page grid gap-8 py-16 md:grid-cols-12 md:py-20">
          <h2 id="role-heading" className="case-section md:col-span-4">
            My role
          </h2>
          <div className="md:col-span-8">
            <p className="case-body">{study.roleNarrative}</p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {project.roleHighlights.map((item) => (
                <li
                  key={item}
                  className="case-meta flex gap-2 text-navy"
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
        </div>
      </section>

      {study.workSections.length > 0 ? (
        <section className="case-band" aria-labelledby="worked-heading">
          <div className="container-page py-16 md:py-20">
            <h2 id="worked-heading" className="case-section">
              {study.workSectionsTitle ?? "What I worked on"}
            </h2>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {study.workSections.map((section) => (
                <div key={section.title} className="border-t border-border pt-5">
                  <h3 className="case-subhead">{section.title}</h3>
                  <ul className="mt-4 space-y-3">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="case-meta flex gap-2.5 text-muted"
                      >
                        <span
                          className="mt-[0.45em] h-1 w-1 shrink-0 rounded-full bg-burgundy/70"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
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

      {study.insights && study.insights.length > 0 ? (
        <section
          className="case-band case-band--surface"
          aria-labelledby="decisions-heading"
        >
          <div className="container-page py-16 md:py-20">
            <h2 id="decisions-heading" className="case-section">
              What testing surfaced
            </h2>
            <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-10">
              {study.insights.map((insight) => {
                const key =
                  insight.observed ?? insight.title ?? insight.body ?? "";
                if (insight.observed && insight.productDecision) {
                  return (
                    <div key={key} className="border-t border-border pt-5">
                      <p className="visual-kicker">Observed</p>
                      <p className="case-body mt-3 text-navy">
                        {insight.observed}
                      </p>
                      <div className="mt-6">
                        <p className="visual-kicker">Product decision</p>
                        <p className="case-body mt-3">
                          {insight.productDecision}
                        </p>
                      </div>
                    </div>
                  );
                }
                return (
                  <div key={key} className="border-t border-border pt-5">
                    {insight.title ? (
                      <h3 className="case-subhead">{insight.title}</h3>
                    ) : null}
                    {insight.body ? (
                      <p className="case-body mt-3">{insight.body}</p>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ) : study.decisions.length > 0 ? (
        <section
          className="case-band case-band--surface"
          aria-labelledby="decisions-heading"
        >
          <div className="container-page py-16 md:py-20">
            <h2 id="decisions-heading" className="case-section">
              What testing surfaced
            </h2>
            <div className="mt-10 space-y-8">
              {study.decisions.map((decision) => (
                <div
                  key={decision.observed}
                  className="border-t border-border pt-5"
                >
                  <div className="grid gap-6 lg:grid-cols-4">
                    <div>
                      <p className="visual-kicker">Observed</p>
                      <p className="case-meta mt-2 text-navy">
                        {decision.observed}
                      </p>
                    </div>
                    <div>
                      <p className="visual-kicker">Why it matters</p>
                      <p className="case-meta mt-2 text-muted">
                        {decision.whyItMatters}
                      </p>
                    </div>
                    <div>
                      <p className="visual-kicker">Recommendation</p>
                      <p className="case-meta mt-2 text-muted">
                        {decision.recommendation}
                      </p>
                    </div>
                    <div>
                      <p className="visual-kicker">Expected impact</p>
                      <p className="case-meta mt-2 text-muted">
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
        <section className="case-band" aria-labelledby="practice-heading">
          <div className="container-page py-16 md:py-20">
            <h2 id="practice-heading" className="case-section">
              Product in practice
            </h2>
            <CaseStudyVisualBlock visuals={practiceVisuals} className="mt-10" />
          </div>
        </section>
      ) : null}

      {showJourneySection ? (
        <section
          className="case-band case-band--surface"
          aria-labelledby="journey-heading"
        >
          <div className="container-page py-16 md:py-20">
            <h2 id="journey-heading" className="case-section">
              Key workflow
            </h2>
            <CaseStudyVisualBlock visuals={journeyVisuals} className="mt-10" />
            {showJourneyList ? (
              <ol className="mt-10 flex flex-col gap-6 md:flex-row md:flex-wrap md:items-stretch md:gap-0">
                {study.journey.map((step, index) => (
                  <li
                    key={step}
                    className="relative flex flex-1 flex-col border-t border-border pt-4 md:min-w-[9.5rem] md:border-t-0 md:border-l md:border-border md:pl-4 md:pt-0 md:first:border-l-0 md:first:pl-0"
                  >
                    <span className="visual-kicker">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="case-meta mt-3 text-navy">{step}</span>
                    {index < study.journey.length - 1 ? (
                      <span
                        className="pointer-events-none absolute -right-2.5 top-1/2 z-10 hidden -translate-y-1/2 text-burgundy md:block"
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
          className="case-band"
          aria-labelledby="demonstrates-heading"
        >
          <div className="container-page py-16 md:py-20">
            <h2 id="demonstrates-heading" className="case-section">
              What this work shows
            </h2>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {study.demonstrates.map((item) => (
                <li
                  key={item}
                  className="case-meta border-t border-border pt-4 text-navy"
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
          className="case-band case-band--surface"
          aria-labelledby="outcome-heading"
        >
          <div className="container-page py-16 md:py-20">
            <h2 id="outcome-heading" className="case-section">
              Outcome
            </h2>
            <CaseStudyVisualBlock visuals={outcomeVisuals} className="mt-10" />
            {study.outcomeLine ? (
              <p className="case-body mt-8 border-l border-burgundy/40 pl-4 text-navy md:mt-10">
                {study.outcomeLine}
              </p>
            ) : null}
          </div>
        </section>
      ) : null}
    </article>
  );
}
