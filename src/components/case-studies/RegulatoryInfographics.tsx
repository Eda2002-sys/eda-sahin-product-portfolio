type CaptionProps = { children: React.ReactNode };

function Caption({ children }: CaptionProps) {
  return <p className="mt-3 text-sm leading-relaxed text-muted">{children}</p>;
}

function Panel({
  children,
  className = "",
  dark = false,
}: {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`rounded-sm border p-5 md:p-7 ${
        dark
          ? "border-navy bg-navy text-background"
          : "border-border bg-surface-elevated"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function RegulatoryHeroVisual({ caption }: { caption?: string }) {
  const rows = [
    {
      title: "Requirement identified",
      detail: "Source evidence attached",
      status: "High impact",
    },
    {
      title: "Policy coverage checked",
      detail: "Source evidence attached",
      status: "Gap found",
    },
    {
      title: "Owner assigned",
      detail: "Source evidence attached",
      status: "In review",
    },
  ];

  return (
    <figure>
      <Panel dark>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-burgundy-soft">
              Regulatory review
            </p>
            <h3 className="mt-2 font-serif text-2xl text-background md:text-3xl">
              From source change to owned work
            </h3>
          </div>
          <span className="rounded-sm border border-burgundy/45 px-2.5 py-1 text-xs text-burgundy-soft">
            Updates
          </span>
        </div>

        <ul className="mt-6 space-y-3">
          {rows.map((row) => (
            <li
              key={row.title}
              className="flex flex-wrap items-center justify-between gap-3 rounded-sm border border-background/15 bg-background/5 px-3 py-3"
            >
              <div className="flex items-start gap-3">
                <span
                  className="mt-1.5 h-2 w-2 rounded-full bg-burgundy-soft"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm text-background">{row.title}</p>
                  <p className="text-xs text-background/55">{row.detail}</p>
                </div>
              </div>
              <span className="text-xs text-background/70">{row.status}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-sm bg-burgundy px-3 py-3 text-sm text-background">
            Evidence retained
          </div>
          <div className="rounded-sm border border-background/15 px-3 py-3 text-sm text-background">
            Human decision
          </div>
        </div>
      </Panel>
      {caption ? <Caption>{caption}</Caption> : null}
    </figure>
  );
}

export function RegulatoryProblemVisual({ caption }: { caption?: string }) {
  const cards = [
    {
      number: "01",
      title: "Monitoring produced noise",
      body: "Official updates, enforcement actions, guidance, commentary, index pages, events, and non-regulatory material arrived through overlapping channels.",
    },
    {
      number: "02",
      title: "Impact was organization-specific",
      body: "The same update could be critical, informational, or irrelevant depending on jurisdiction, sector, business activity, and the company's own control environment.",
    },
    {
      number: "03",
      title: "The audit trail crossed systems",
      body: "Source text, extracted obligations, policy comparisons, reviewer comments, ownership, and remediation work were difficult to hold together.",
    },
  ];

  return (
    <figure>
      <div className="mb-4 rounded-sm border border-border bg-surface-elevated p-4">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-[11px] uppercase tracking-[0.16em] text-muted">
            Evidence boundary
          </p>
          <span className="rounded-sm border border-border px-2 py-0.5 text-xs text-muted">
            Sanitized product pattern
          </span>
        </div>
        <p className="mt-3 rounded-sm border border-border bg-background px-3 py-2 text-sm text-navy">
          Official regulatory materials
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {cards.map((card) => (
          <Panel key={card.number} className="h-full">
            <p className="text-[11px] uppercase tracking-[0.18em] text-burgundy">
              {card.number}
            </p>
            <h3 className="mt-3 font-serif text-xl text-navy md:text-2xl">
              {card.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{card.body}</p>
          </Panel>
        ))}
      </div>
      {caption ? <Caption>{caption}</Caption> : null}
    </figure>
  );
}

export function RegulatoryApproachVisual({ caption }: { caption?: string }) {
  const cards = [
    {
      title: "Prefer the instrument over the commentary",
      body: "Official and specific source material is prioritized, while generic hubs and secondary commentary remain supporting context.",
    },
    {
      title: "Model relevance around the organization",
      body: "Jurisdictions, business areas, regulatory categories, and internal documents shape how a new item enters the workspace.",
    },
    {
      title: "Keep the evidence beside the decision",
      body: "The obligation, quoted source context, impact classification, policy coverage, reviewer state, and owner remain connected.",
    },
  ];

  return (
    <figure>
      <div className="grid gap-4 md:grid-cols-3">
        {cards.map((card, index) => (
          <Panel key={card.title} dark className="h-full">
            <p className="text-[11px] uppercase tracking-[0.18em] text-burgundy-soft">
              0{index + 1}
            </p>
            <h3 className="mt-3 font-serif text-xl text-background md:text-2xl">
              {card.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-background/70">
              {card.body}
            </p>
          </Panel>
        ))}
      </div>
      {caption ? <Caption>{caption}</Caption> : null}
    </figure>
  );
}

export function RegulatoryBuildVisual({ caption }: { caption?: string }) {
  const pillars = [
    {
      label: "Monitor",
      title: "Regulatory source intake",
      body: "Defined jurisdictions and source classes, relevance filtering, language handling, and new-item detection.",
    },
    {
      label: "Analyze",
      title: "Obligation and impact workspace",
      body: "Requirements, dates, affected business areas, categories, supporting excerpts, and reviewer status.",
    },
    {
      label: "Compare",
      title: "Policy and gap analysis",
      body: "Internal documents selected as context for structured coverage, contradiction, and missing-control review.",
    },
    {
      label: "Act",
      title: "Ownership and evidence trail",
      body: "Decision records, assignments, comments, review queues, exports, and retained source links.",
    },
  ];

  return (
    <figure>
      <div className="grid gap-4 sm:grid-cols-2">
        {pillars.map((pillar) => (
          <Panel key={pillar.label} className="h-full">
            <p className="text-[11px] uppercase tracking-[0.18em] text-burgundy">
              {pillar.label}
            </p>
            <h3 className="mt-3 font-serif text-2xl text-navy">{pillar.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{pillar.body}</p>
          </Panel>
        ))}
      </div>
      {caption ? <Caption>{caption}</Caption> : null}
    </figure>
  );
}

export function RegulatoryJourneyVisual({ caption }: { caption?: string }) {
  const steps = [
    {
      number: "01",
      label: "Monitor",
      title: "Collect new material from defined sources",
      body: "Government, regulator, enforcement, and approved external sources enter a monitored intake with source and jurisdiction context.",
    },
    {
      number: "02",
      label: "Interpret",
      title: "Extract the concrete obligation and dates",
      body: "The workflow identifies the instrument, requirement, effective timing, category, and preliminary business relevance.",
    },
    {
      number: "03",
      label: "Compare",
      title: "Check internal policy and control coverage",
      body: "Relevant requirements are compared with uploaded or selected internal documents to surface coverage, ambiguity, or a potential gap.",
    },
    {
      number: "04",
      label: "Own",
      title: "Review the conclusion and assign the work",
      body: "A compliance professional confirms the interpretation, records the decision, names an owner, and carries any action into the governed workflow.",
    },
  ];

  return (
    <figure>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {steps.map((step, index) => (
          <Panel
            key={step.number}
            className={`h-full ${index === 0 ? "border-burgundy/40" : ""}`}
          >
            <p className="text-[11px] uppercase tracking-[0.18em] text-burgundy">
              {step.number} · {step.label}
            </p>
            <h3 className="mt-3 font-serif text-xl text-navy">{step.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
          </Panel>
        ))}
      </div>
      {caption ? <Caption>{caption}</Caption> : null}
    </figure>
  );
}

export function RegulatoryMonitorVisual({ caption }: { caption?: string }) {
  const inbox = [
    {
      meta: "China · Cybersecurity",
      date: "28 Oct 2025",
      title: "Amendments to China’s Cybersecurity Law",
      active: true,
    },
    {
      meta: "Singapore · AI governance",
      date: "22 Jan 2026",
      title: "Model AI Governance Framework for Agentic AI",
      active: false,
    },
    {
      meta: "Vietnam · Artificial intelligence",
      date: "15 Dec 2025",
      title: "Vietnam Law on Artificial Intelligence",
      active: false,
    },
  ];

  const tabs = ["What changed", "Who is affected", "Compare policy", "Assign action"];

  return (
    <figure>
      <Panel className="!p-0 overflow-hidden">
        <div className="border-b border-border px-5 py-4 md:px-7">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-[11px] uppercase tracking-[0.16em] text-burgundy">
                Regulatory change monitor
              </p>
              <h3 className="mt-2 font-serif text-2xl text-navy md:text-3xl">
                New regulation → business impact → review owner
              </h3>
            </div>
            <span className="rounded-sm border border-border px-2.5 py-1 text-xs text-muted">
              Sanitized product view
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12">
          <div className="border-b border-border p-5 lg:col-span-5 lg:border-b-0 lg:border-r md:p-6">
            <div className="flex items-center gap-2">
              <p className="text-sm font-medium text-navy">Change inbox</p>
              <span className="rounded-sm bg-burgundy/10 px-2 py-0.5 text-[11px] text-burgundy">
                3 to review
              </span>
            </div>
            <ul className="mt-4 space-y-2">
              {inbox.map((item) => (
                <li
                  key={item.title}
                  className={`rounded-sm border px-3 py-3 ${
                    item.active
                      ? "border-burgundy/40 bg-burgundy/[0.04]"
                      : "border-border"
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] uppercase tracking-[0.12em] text-muted">
                    <span>{item.meta}</span>
                    <span>{item.date}</span>
                  </div>
                  <p className="mt-2 text-sm text-navy">{item.title}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-5 lg:col-span-7 md:p-6">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-sm bg-burgundy/10 px-2 py-0.5 text-xs text-burgundy">
                Important
              </span>
              <span className="rounded-sm border border-border px-2 py-0.5 text-xs text-muted">
                Human review required
              </span>
            </div>
            <h4 className="mt-3 font-serif text-2xl text-navy">
              Amendments to China’s Cybersecurity Law
            </h4>

            <div className="mt-4 flex flex-wrap gap-2">
              {tabs.map((tab, index) => (
                <span
                  key={tab}
                  className={`rounded-sm px-2.5 py-1.5 text-xs ${
                    index === 0
                      ? "bg-navy text-background"
                      : "border border-border text-muted"
                  }`}
                >
                  {index + 1} · {tab}
                </span>
              ))}
            </div>

            <div className="mt-5 rounded-sm border border-border bg-background p-4">
              <p className="text-[11px] uppercase tracking-[0.14em] text-muted">
                Extracted change
              </p>
              <p className="mt-2 text-sm leading-relaxed text-navy">
                Review the amended duties for network operators and critical
                information infrastructure before the 1 January 2026 effective
                date.
              </p>
              <dl className="mt-4 grid gap-3 sm:grid-cols-3 text-sm">
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.12em] text-muted">
                    Published
                  </dt>
                  <dd className="mt-1 text-navy">28 Oct 2025</dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.12em] text-muted">
                    Effective
                  </dt>
                  <dd className="mt-1 text-navy">1 Jan 2026</dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.12em] text-muted">
                    Authority
                  </dt>
                  <dd className="mt-1 text-navy">NPC Standing Committee</dd>
                </div>
              </dl>
              <div className="mt-4 rounded-sm border border-border px-3 py-2 text-sm text-burgundy">
                Open official source
              </div>
            </div>

            <p className="mt-4 text-xs text-muted">
              Examples drawn from monitored regulatory materials. Client policy
              text, ownership and final decisions remain access-controlled.
            </p>
          </div>
        </div>
      </Panel>
      {caption ? <Caption>{caption}</Caption> : null}
    </figure>
  );
}

export function RegulatoryOutcomeVisual({ caption }: { caption?: string }) {
  const before = [
    "Teams monitored sources and reconstructed context across separate tools.",
    "Relevance and impact decisions were difficult to apply consistently.",
    "Policy evidence and action ownership drifted away from the original update.",
  ];
  const after = [
    "New material enters a structured, organization-specific review flow.",
    "Obligations, dates, evidence, and policy context stay together.",
    "Professional decisions become owned, reviewable work rather than isolated commentary.",
  ];

  return (
    <figure>
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <p className="text-[11px] uppercase tracking-[0.18em] text-muted">
            Before
          </p>
          <ul className="mt-4 space-y-3">
            {before.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                <span className="mt-1 text-burgundy" aria-hidden="true">
                  —
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Panel>
        <Panel dark>
          <p className="text-[11px] uppercase tracking-[0.18em] text-background/55">
            After
          </p>
          <ul className="mt-4 space-y-3">
            {after.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm leading-relaxed text-background/85"
              >
                <span className="mt-1 text-burgundy-soft" aria-hidden="true">
                  —
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
