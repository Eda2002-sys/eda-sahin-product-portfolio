import {
  Caption,
  Panel,
  VisualHeader,
} from "@/components/case-studies/InfographicPrimitives";

/** Editorial phone mock: product idea preserved, palette aligned to the portfolio. */
export function SocidaWhatsAppMock({ caption }: { caption?: string }) {
  return (
    <figure className="mx-auto w-full max-w-[22rem]">
      <div className="overflow-hidden rounded-[1.35rem] border border-border-strong bg-surface-elevated shadow-[0_1px_0_rgba(210,200,187,0.7),0_24px_56px_-28px_rgba(26,31,46,0.42)] ring-1 ring-navy/[0.04]">
        <div className="flex items-center gap-3 bg-navy px-3.5 py-3 text-background">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-background/25 text-[11px] tracking-wide">
            CK
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[13px] font-medium leading-tight">
              Company knowledge
            </p>
            <p className="mt-0.5 text-[10px] leading-tight text-background/60">
              7 brands · approved sources
            </p>
          </div>
        </div>

        <div className="flex gap-1.5 overflow-x-auto border-b border-border bg-surface px-3 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {["Brand A", "Brand B", "Multi brand", "Service"].map(
            (brand, index) => (
              <span
                key={brand}
                className={`shrink-0 rounded-sm px-2 py-1 text-[9px] font-medium uppercase tracking-[0.1em] ${
                  index === 0
                    ? "bg-burgundy/15 text-burgundy-ink"
                    : "border border-border-strong text-navy/75"
                }`}
              >
                {brand}
              </span>
            ),
          )}
        </div>

        <div className="space-y-2.5 bg-background px-3 py-3.5">
          <div className="ml-auto max-w-[86%] rounded-sm rounded-tr-none border border-border bg-surface px-2.5 py-2">
            <div className="flex items-center gap-2 text-[11px] text-navy/70">
              <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-burgundy/15 text-[9px] text-burgundy-ink">
                ▶
              </span>
              <span className="h-3.5 flex-1 rounded-sm bg-border-strong/80" />
              <span className="shrink-0 tabular-nums">0:18</span>
            </div>
            <p className="mt-1 text-right text-[9px] tabular-nums text-navy/55">
              09:40
            </p>
          </div>

          <div className="ml-auto max-w-[90%] rounded-sm rounded-tr-none border border-border bg-surface px-2.5 py-2">
            <p className="text-[12px] leading-snug text-navy">
              What models are available and what financing options apply to this
              range?
            </p>
            <p className="mt-1 text-right text-[9px] tabular-nums text-navy/55">
              09:41
            </p>
          </div>

          <div className="max-w-[94%] rounded-sm rounded-tl-none border border-border bg-surface-elevated px-2.5 py-2.5">
            <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-burgundy-ink">
              Approved source · Brand A
            </p>
            <p className="mt-1.5 text-[12px] leading-snug text-navy">
              Here are the approved models and financing routes, with documents
              and today&apos;s reinforcement.
            </p>
            <div className="mt-2.5 space-y-1.5 border-t border-border pt-2.5">
              <div className="flex items-center gap-2.5 rounded-sm border border-border px-2 py-1.5">
                <span className="shrink-0 text-[9px] font-semibold uppercase tracking-[0.12em] text-burgundy-ink">
                  PDF
                </span>
                <div className="min-w-0">
                  <p className="truncate text-[11px] text-navy">
                    Financing_routes.pdf
                  </p>
                  <p className="text-[9px] text-navy/60">1.2 MB</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5 rounded-sm border border-border px-2 py-1.5">
                <span className="shrink-0 text-[9px] font-semibold uppercase tracking-[0.12em] text-burgundy-ink">
                  Loop
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] text-navy">Daily reinforcement</p>
                  <p className="text-[9px] text-navy/60">
                    Models &amp; financing · in progress
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-2 text-right text-[9px] tabular-nums text-navy/55">
              09:41
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 border-t border-border bg-surface-elevated px-3 py-2.5">
          <span className="shrink-0 text-sm leading-none text-muted">+</span>
          <div className="min-w-0 flex-1 rounded-sm border border-border px-2.5 py-1.5 text-[11px] text-muted">
            Ask about a model or document…
          </div>
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-burgundy text-[9px] text-background">
            ●
          </span>
        </div>
      </div>
      {caption ? <Caption>{caption}</Caption> : null}
    </figure>
  );
}

export function SocidaProblemVisual({ caption }: { caption?: string }) {
  const sources = [
    "Documents",
    "Product sheets",
    "Training sessions",
    "Team chats",
    "Brand portals",
  ];

  return (
    <figure>
      <Panel>
        <p className="eyebrow">Mid-conversation friction</p>
        <div className="mt-6 flex flex-wrap items-center gap-2.5">
          {sources.map((source) => (
            <span
              key={source}
              className="case-meta rounded-sm border border-border px-3.5 py-2 text-muted"
            >
              {source}
            </span>
          ))}
          <span className="inline-flex items-center gap-2.5">
            <span className="text-burgundy" aria-hidden="true">
              →
            </span>
            <span className="case-meta rounded-sm bg-navy px-3.5 py-2 text-background">
              No single point of access
            </span>
          </span>
        </div>
      </Panel>
      {caption ? <Caption>{caption}</Caption> : null}
    </figure>
  );
}

export function SocidaApproachVisual({ caption }: { caption?: string }) {
  const steps = [
    {
      number: "01",
      title: "Meet employees in WhatsApp",
      body: "The channel already used daily for coordination became the front door for knowledge, documents, and continuous reinforcement, without another login.",
    },
    {
      number: "02",
      title: "Ground answers in approved sources",
      body: "Responses came from controlled product, financing, and operating materials, not an open ended generative chatbot.",
    },
    {
      number: "03",
      title: "Keep humans in the loop",
      body: "Managers could see what was asked, identify gaps, and update the source material when an answer needed correction.",
    },
  ];

  return (
    <figure>
      <div className="grid gap-4 md:grid-cols-3">
        {steps.map((step) => (
          <Panel key={step.number} className="h-full">
            <p className="visual-kicker">
              {step.number}
            </p>
            <h3 className="case-subhead mt-3">{step.title}</h3>
            <p className="case-meta mt-3 text-muted">{step.body}</p>
          </Panel>
        ))}
      </div>
      {caption ? <Caption>{caption}</Caption> : null}
    </figure>
  );
}

export function SocidaBuildVisual({ caption }: { caption?: string }) {
  const pillars = [
    {
      label: "Learn",
      title: "Vehicle and financing knowledge",
      body: "Employees could ask about vehicle models, brand information, financing routes, and day to day operating questions in the language used across the business.",
    },
    {
      label: "Use",
      title: "WhatsApp as the front door",
      body: "The employee experience lived in WhatsApp, so knowledge access and reinforcement could happen in the same channel employees already use every day.",
    },
    {
      label: "Reinforce",
      title: "An ongoing learning loop",
      body: "In channel prompts, practice moments, documents and progress signals turned one answer into continuous reinforcement instead of a one off training event.",
    },
  ];

  return (
    <figure>
      <div className="grid gap-4 md:grid-cols-3">
        {pillars.map((pillar) => (
          <Panel key={pillar.label} className="h-full">
            <p className="visual-kicker">
              {pillar.label}
            </p>
            <h3 className="case-subhead mt-3">{pillar.title}</h3>
            <p className="case-meta mt-3 text-muted">{pillar.body}</p>
          </Panel>
        ))}
      </div>
      {caption ? <Caption>{caption}</Caption> : null}
    </figure>
  );
}

export function SocidaJourneyVisual({ caption }: { caption?: string }) {
  const steps = [
    {
      number: "01",
      title: "Ask",
      body: "Employee asks by text or voice about a model, financing option, procedure, or customer situation.",
      role: "Employee",
    },
    {
      number: "02",
      title: "Answer",
      body: "Assistant responds from approved automotive and operating knowledge.",
      role: "Employee",
    },
    {
      number: "03",
      title: "Apply",
      body: "Relevant document or next step is shared in channel during the shift.",
      role: "Employee",
    },
    {
      number: "04",
      title: "Reinforce",
      body: "Continuous reinforcement turns the answer into a repeatable skill in the same channel.",
      role: "Employee",
    },
    {
      number: "05",
      title: "Improve",
      body: "Managers see recurring demand and correct sources so answers stay controlled.",
      role: "Manager",
    },
  ];

  return (
    <figure>
      <Panel dark>
        <div className="flex flex-wrap items-end justify-between gap-3 border-b border-background/15 pb-5">
          <div>
            <p className="visual-kicker visual-kicker--on-dark">
              Company knowledge · WhatsApp
            </p>
            <p className="case-subhead mt-2 !text-background">
              Operating loop
            </p>
          </div>
          <p className="visual-kicker visual-kicker--on-dark text-background/55">employee + manager</p>
        </div>

        <ol className="mt-6 grid gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-5">
          {steps.map((step) => (
            <li
              key={step.number}
              className="flex h-full flex-col rounded-sm border border-background/12 bg-background/[0.04] p-4 md:p-5"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="visual-kicker visual-kicker--on-dark">
                  {step.number}
                </p>
                <span className="visual-kicker visual-kicker--on-dark text-background/70">
                  {step.role}
                </span>
              </div>
              <h3 className="case-subhead mt-3.5 !text-background">
                {step.title}
              </h3>
              <p className="case-meta mt-2.5 flex-1 text-background/80">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </Panel>
      {caption ? <Caption>{caption}</Caption> : null}
    </figure>
  );
}

export function SocidaGovernanceVisual({ caption }: { caption?: string }) {
  return (
    <figure>
      <Panel className="!p-0 overflow-hidden">
        <VisualHeader
          eyebrow="Product logic"
          title="From customer question to approved answer"
          subtitle="Voice or text in WhatsApp → brand context → approved source → usable answer"
        />

        <div className="grid gap-0 lg:grid-cols-3">
          <div className="border-b border-border p-5 lg:border-b-0 lg:border-r md:p-6">
            <p className="visual-kicker">Employee · WhatsApp</p>
            <div className="mt-4 space-y-3">
              <div className="visual-inset visual-inset--soft px-3 py-2.5">
                <div className="flex items-center gap-2 text-[11px] text-navy/70">
                  <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-burgundy/15 text-[9px] text-burgundy-ink">
                    ▶
                  </span>
                  <span className="h-3 flex-1 rounded-sm bg-border-strong/80" />
                  <span className="shrink-0 tabular-nums">0:12</span>
                </div>
                <p className="mt-2 text-[12px] leading-snug text-navy">
                  Is there a 24-month financing option for this model?
                </p>
              </div>
              <div className="visual-inset visual-inset--accent px-3 py-2">
                <p className="visual-kicker">Context</p>
                <p className="mt-1 text-[12px] text-navy">
                  Brand A · Model X · Financing
                </p>
              </div>
              <p className="case-meta text-muted">Checking approved sources…</p>
            </div>
          </div>

          <div className="border-b border-border bg-surface/60 p-5 lg:border-b-0 lg:border-r md:p-6">
            <p className="visual-kicker">Knowledge layer</p>
            <div className="visual-inset mt-4 p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="visual-kicker">PDF</p>
                  <p className="case-meta mt-1.5 text-navy">
                    Financing_routes.pdf
                  </p>
                </div>
                <span className="shrink-0 visual-kicker rounded-sm bg-burgundy/10 px-2 py-0.5 text-burgundy">
                  Approved
                </span>
              </div>
              <dl className="mt-4 space-y-2 border-t border-border pt-3">
                {[
                  ["Brand", "Brand A"],
                  ["Access", "Sales"],
                  ["Version", "12 Aug 2026"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between gap-3 case-meta"
                  >
                    <dt className="text-muted">{label}</dt>
                    <dd className="text-navy">{value}</dd>
                  </div>
                ))}
              </dl>
              <p className="case-meta mt-3 border-t border-border pt-3 leading-snug text-muted">
                Relevant section: “24-month financing available for Model X when
                eligibility criteria are met.”
              </p>
            </div>
          </div>

          <div className="bg-navy p-5 text-background md:p-6">
            <p className="visual-kicker visual-kicker--on-dark">
              Approved answer
            </p>
            <p className="case-meta mt-4 leading-relaxed text-background/90">
              Yes. For Model X, the approved 24-month financing route is
              available when eligibility criteria are met.
            </p>
            <p className="visual-kicker visual-kicker--on-dark mt-4">
              Source · Financing_routes.pdf · p.4
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Open document", "Ask follow up"].map((action) => (
                <span
                  key={action}
                  className="tag-chip rounded-sm border border-background/20 px-2.5 py-1 text-background/75"
                >
                  {action}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border bg-burgundy/[0.04] px-5 py-4 md:px-7 md:py-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="visual-kicker">Recurring demand</p>
              <p className="case-meta mt-1.5 text-navy">
                18 financing questions this week · Brand A
              </p>
            </div>
            <div className="case-meta flex flex-wrap gap-x-4 gap-y-1 text-muted">
              <span>Source owner · Sales Ops</span>
              <span className="text-burgundy">→ Review financing FAQ</span>
            </div>
          </div>
        </div>
      </Panel>
      {caption ? <Caption>{caption}</Caption> : null}
    </figure>
  );
}

export function SocidaDemandVisual({ caption }: { caption?: string }) {
  const topics = [
    { label: "Financing & eligibility", value: 28 },
    { label: "Models & specifications", value: 22 },
    { label: "Service & after sales", value: 19 },
    { label: "Campaigns & recalls", value: 17 },
    { label: "Internal docs & HR", value: 14 },
  ];

  const heat = [
    1, 2, 1, 3, 2, 4, 2, 1, 3, 5, 2, 3, 4, 2, 1, 2, 3, 4, 5, 3, 2, 4, 5, 4, 3, 2,
    1, 3, 4, 5, 4, 3, 2, 4, 5, 6, 4, 3, 2, 3, 4, 5, 3, 2, 4, 5, 4, 3, 5, 6, 5, 4,
    3, 2, 4, 5, 3, 2, 1, 3, 4, 5, 4, 3, 2, 3, 4, 2, 3, 5, 4, 3, 2, 4, 5, 6, 4, 3,
    2, 1, 2, 3, 4, 3, 2, 4, 5, 3, 2, 3, 4, 5, 4, 2, 3, 4, 5, 3, 2, 1, 2, 3, 4, 2,
  ];

  return (
    <figure>
      <Panel>
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="visual-kicker">
              Demand signal
            </p>
            <h3 className="case-subhead mt-2">
              Workforce questions over time
            </h3>
            <p className="case-meta mt-2 text-muted">
              Illustrative product pattern · ~300 employees · WhatsApp
            </p>

            <div className="mt-5 grid grid-cols-[repeat(26,minmax(0,1fr))] gap-1">
              {heat.map((level, index) => (
                <span
                  key={`${level}-${index}`}
                  className="aspect-square rounded-[1px]"
                  style={{
                    backgroundColor:
                      level <= 1
                        ? "var(--border)"
                        : level <= 3
                          ? "color-mix(in srgb, var(--burgundy) 28%, var(--border))"
                          : level <= 5
                            ? "color-mix(in srgb, var(--burgundy) 55%, white)"
                            : "var(--burgundy)",
                  }}
                  aria-hidden="true"
                />
              ))}
            </div>
            <div className="mt-3 flex items-center justify-between case-meta text-muted">
              <span>Less</span>
              <span>More</span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-sm border border-border bg-background p-4">
              <p className="visual-kicker">
                Selected spike
              </p>
              <p className="case-subhead mt-2">
                Financing &amp; eligibility leads the day
              </p>
              <ul className="mt-4 space-y-2 case-meta text-muted">
                <li className="flex justify-between gap-3">
                  <span>Financing &amp; eligibility</span>
                  <span className="text-navy">High</span>
                </li>
                <li className="flex justify-between gap-3">
                  <span>Models &amp; specifications</span>
                  <span className="text-navy">Medium</span>
                </li>
                <li className="flex justify-between gap-3">
                  <span>Service &amp; after-sales</span>
                  <span className="text-navy">Medium</span>
                </li>
              </ul>
            </div>

            <div className="mt-4 space-y-3">
              <p className="visual-kicker text-muted">
                Year by topic
              </p>
              {topics.map((topic) => (
                <div key={topic.label}>
                  <div className="mb-1 flex justify-between gap-3 case-meta text-muted">
                    <span>{topic.label}</span>
                    <span>{topic.value}%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-border">
                    <div
                      className="h-full rounded-full bg-burgundy"
                      style={{ width: `${topic.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-sm border border-burgundy/25 bg-burgundy/[0.04] p-4 md:p-5">
          <p className="visual-kicker">
            Manager action
          </p>
          <p className="case-body mt-2 text-navy">
            Reinforce trade-in-valuation guidance for teams with the highest
            question volume.
          </p>
          <p className="case-meta mt-2 text-muted">
            Demand becomes an input for reinforcement, source updates, and
            operational follow up.
          </p>
        </div>
      </Panel>
      {caption ? <Caption>{caption}</Caption> : null}
    </figure>
  );
}

export function SocidaOutcomeVisual({ caption }: { caption?: string }) {
  const before = [
    "Knowledge scattered across documents, chats, and one off training",
    "Employees searched multiple systems during customer conversations",
    "Managers had little visibility into recurring knowledge gaps",
  ];
  const after = [
    "Approved answers, documents, and continuous reinforcement in WhatsApp",
    "Recurring demand became visible to knowledge owners, creating a clear correction path.",
    "Managers could reinforce topics, review flags, and update sources",
  ];

  return (
    <figure>
      <div className="grid gap-4 md:grid-cols-2 md:items-stretch">
        <Panel className="h-full">
          <p className="visual-kicker text-muted">
            Before
          </p>
          <ul className="mt-5 space-y-4">
            {before.map((item) => (
              <li
                key={item}
                className="case-meta flex gap-3 text-muted"
              >
                <span className="mt-1.5 text-burgundy" aria-hidden="true">
                  ·
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Panel>
        <Panel dark className="h-full">
          <p className="visual-kicker visual-kicker--on-dark">
            After
          </p>
          <ul className="mt-5 space-y-4">
            {after.map((item) => (
              <li
                key={item}
                className="case-meta flex gap-3 text-background/85"
              >
                <span className="mt-1.5 text-burgundy-on-dark" aria-hidden="true">
                  ·
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
      {caption ? <Caption>{caption}</Caption> : null}
    </figure>
  );
}
