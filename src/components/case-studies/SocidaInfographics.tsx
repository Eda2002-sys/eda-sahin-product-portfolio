type CaptionProps = { children: React.ReactNode };

function Caption({ children }: CaptionProps) {
  return (
    <p className="mt-3 text-sm leading-relaxed text-muted">{children}</p>
  );
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

/** Editorial phone mock: product idea preserved, palette aligned to the portfolio. */
export function SocidaWhatsAppMock({ caption }: { caption?: string }) {
  return (
    <figure className="mx-auto w-full max-w-[19.5rem]">
      <div className="overflow-hidden rounded-[1.35rem] border border-border-strong bg-surface-elevated shadow-[0_20px_48px_-30px_rgba(26,31,46,0.38)]">
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
          {["Brand A", "Brand B", "Multi-brand", "Service"].map(
            (brand, index) => (
              <span
                key={brand}
                className={`shrink-0 rounded-sm px-2 py-1 text-[9px] font-medium uppercase tracking-[0.1em] ${
                  index === 0
                    ? "bg-burgundy/15 text-[#54222e]"
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
              <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-burgundy/15 text-[9px] text-[#54222e]">
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
              Quels sont les modèles disponibles et les options de financement
              pour cette gamme ?
            </p>
            <p className="mt-1 text-right text-[9px] tabular-nums text-navy/55">
              09:41
            </p>
          </div>

          <div className="max-w-[94%] rounded-sm rounded-tl-none border border-border bg-surface-elevated px-2.5 py-2.5">
            <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#54222e]">
              Approved source · Brand A
            </p>
            <p className="mt-1.5 text-[12px] leading-snug text-navy">
              Voici les modèles et les parcours de financement approuvés: avec
              les documents et le quiz du jour.
            </p>
            <div className="mt-2.5 space-y-1.5 border-t border-border pt-2.5">
              <div className="flex items-center gap-2.5 rounded-sm border border-border px-2 py-1.5">
                <span className="shrink-0 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#54222e]">
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
                <span className="shrink-0 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#54222e]">
                  Quiz
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] text-navy">Quiz du jour</p>
                  <p className="text-[9px] text-navy/60">
                    4 questions · models &amp; financing
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
        <p className="text-[11px] uppercase tracking-[0.16em] text-burgundy">
          Mid-conversation friction
        </p>
        <p className="mt-3 max-w-3xl font-serif text-xl leading-snug text-navy md:text-2xl">
          A salesperson speaking with a customer could not pause to search across
          portals, product sheets, and team chats.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-2.5">
          {sources.map((source) => (
            <span
              key={source}
              className="rounded-sm border border-border px-3.5 py-2 text-sm text-muted"
            >
              {source}
            </span>
          ))}
          <span className="inline-flex items-center gap-2.5">
            <span className="text-burgundy" aria-hidden="true">
              →
            </span>
            <span className="rounded-sm bg-navy px-3.5 py-2 text-sm text-background">
              No single point of access
            </span>
          </span>
        </div>

        <div className="mt-7 border-t border-border pt-5">
          <p className="text-sm text-navy">
            ~300 employees · 7 brand knowledge bases · WhatsApp already in daily
            use
          </p>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
            The solution needed to work inside WhatsApp, where employees were
            already communicating, rather than require another system during
            customer conversations.
          </p>
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
      body: "The channel already used daily for coordination became the front door for knowledge, documents, and training, without another login.",
    },
    {
      number: "02",
      title: "Ground answers in approved sources",
      body: "Responses came from controlled product, financing, and operating materials, not an open-ended generative chatbot.",
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
            <p className="text-[11px] uppercase tracking-[0.18em] text-burgundy">
              {step.number}
            </p>
            <h3 className="mt-3 font-serif text-2xl text-navy">{step.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
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
      body: "Employees could ask about vehicle models, brand information, financing routes, and day-to-day operating questions in the language used across the business.",
    },
    {
      label: "Use",
      title: "WhatsApp as the front door",
      body: "The employee experience lived in WhatsApp, so learning and knowledge access could happen in the same channel employees already use every day.",
    },
    {
      label: "Reinforce",
      title: "Training that keeps moving",
      body: "Quizzes, onboarding flows, daily prompts, documents, and progress signals turned one training moment into an ongoing learning loop.",
    },
  ];

  return (
    <figure>
      <div className="grid gap-4 md:grid-cols-3">
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
      body: "Relevant document or next step is shared in-channel during the shift.",
      role: "Employee",
    },
    {
      number: "04",
      title: "Reinforce",
      body: "Quiz, prompt, or onboarding turns the answer into a repeatable skill.",
      role: "Employee",
    },
    {
      number: "05",
      title: "Observe",
      body: "Managers see recurring demand topics and knowledge gaps.",
      role: "Manager",
    },
    {
      number: "06",
      title: "Update",
      body: "Sources are corrected so answers stay controlled over time.",
      role: "Manager",
    },
  ];

  return (
    <figure>
      <Panel dark>
        <div className="flex flex-wrap items-end justify-between gap-3 border-b border-background/15 pb-5">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-burgundy-on-dark">
              Company knowledge · WhatsApp
            </p>
            <p className="mt-2 font-serif text-2xl text-background md:text-[1.75rem]">
              Operating loop
            </p>
          </div>
          <p className="pb-0.5 text-xs text-background/55">employee + manager</p>
        </div>

        <ol className="mt-6 grid gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-3">
          {steps.map((step) => (
            <li
              key={step.number}
              className="flex h-full flex-col rounded-sm border border-background/12 bg-background/[0.04] p-4 md:p-5"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-burgundy-on-dark">
                  {step.number}
                </p>
                <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-background/70">
                  {step.role}
                </span>
              </div>
              <h3 className="mt-3.5 font-serif text-xl text-background">
                {step.title}
              </h3>
              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-background/80">
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
  const rows = [
    {
      document: "Vehicle range guide",
      brand: "Brand A",
      access: "Sales",
      status: "Indexed",
      tone: "ready" as const,
    },
    {
      document: "Financing routes",
      brand: "Multi-brand",
      access: "Approved users",
      status: "Indexed",
      tone: "ready" as const,
    },
    {
      document: "Service procedure",
      brand: "Brand B",
      access: "After-sales",
      status: "Review",
      tone: "review" as const,
    },
  ];

  return (
    <figure>
      <Panel className="!p-0 overflow-hidden">
        <div className="flex flex-wrap items-start justify-between gap-3 border-b border-border px-5 py-5 md:px-7 md:py-6">
          <div>
            <p className="font-serif text-2xl text-navy">Document control</p>
            <p className="mt-1.5 text-sm text-muted">
              Brand · access · indexing status
            </p>
          </div>
          <span className="rounded-sm border border-border px-2.5 py-1 text-xs text-muted">
            Admin view
          </span>
        </div>

        {/* Mobile: stacked rows — no clipped table columns */}
        <ul className="md:hidden">
          {rows.map((row) => (
            <li
              key={row.document}
              className="flex items-start justify-between gap-4 border-b border-border px-5 py-5 last:border-b-0"
            >
              <div className="min-w-0">
                <p className="text-sm text-navy">{row.document}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted">
                  {row.brand} · {row.access}
                </p>
              </div>
              <span
                className={`shrink-0 rounded-sm px-2 py-0.5 text-xs ${
                  row.tone === "ready"
                    ? "bg-burgundy/10 text-burgundy"
                    : "border border-border-strong text-muted"
                }`}
              >
                {row.status}
              </span>
            </li>
          ))}
        </ul>

        {/* Desktop: editorial table */}
        <div className="hidden md:block">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border text-[11px] uppercase tracking-[0.14em] text-muted">
                <th className="px-7 pb-3 pt-5 font-medium">Document</th>
                <th className="px-4 pb-3 pt-5 font-medium">Brand</th>
                <th className="px-4 pb-3 pt-5 font-medium">Access</th>
                <th className="px-7 pb-3 pt-5 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.document}
                  className="border-b border-border/70 last:border-b-0"
                >
                  <td className="px-7 py-3.5 text-navy">{row.document}</td>
                  <td className="px-4 py-3.5 text-muted">{row.brand}</td>
                  <td className="px-4 py-3.5 text-muted">{row.access}</td>
                  <td className="px-7 py-3.5">
                    <span
                      className={`rounded-sm px-2 py-0.5 text-xs ${
                        row.tone === "ready"
                          ? "bg-burgundy/10 text-burgundy"
                          : "border border-border-strong text-muted"
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
    { label: "Service & after-sales", value: 19 },
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
            <p className="text-[11px] uppercase tracking-[0.16em] text-burgundy">
              Demand signal
            </p>
            <h3 className="mt-2 font-serif text-2xl text-navy md:text-3xl">
              Workforce questions over time
            </h3>
            <p className="mt-2 text-sm text-muted">
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
            <div className="mt-3 flex items-center justify-between text-[11px] text-muted">
              <span>Less</span>
              <span>More</span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-sm border border-border bg-background p-4">
              <p className="text-[11px] uppercase tracking-[0.16em] text-burgundy">
                Selected spike
              </p>
              <p className="mt-2 font-serif text-xl text-navy">
                Financing &amp; eligibility leads the day
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted">
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
              <p className="text-[11px] uppercase tracking-[0.16em] text-muted">
                Year by topic
              </p>
              {topics.map((topic) => (
                <div key={topic.label}>
                  <div className="mb-1 flex justify-between gap-3 text-xs text-muted">
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
          <p className="text-[11px] uppercase tracking-[0.16em] text-burgundy">
            Manager action
          </p>
          <p className="mt-2 text-sm leading-relaxed text-navy md:text-base">
            Reinforce trade-in-valuation guidance for teams with the highest
            question volume.
          </p>
          <p className="mt-2 text-sm text-muted">
            Demand becomes an input for training, source updates, and operational
            follow-up.
          </p>
        </div>
      </Panel>
      {caption ? <Caption>{caption}</Caption> : null}
    </figure>
  );
}

export function SocidaOutcomeVisual({ caption }: { caption?: string }) {
  const before = [
    "Knowledge scattered across documents, chats, and one-off training",
    "Employees searched multiple systems during customer conversations",
    "Managers had little visibility into recurring knowledge gaps",
  ];
  const after = [
    "Approved answers, documents, and quizzes available in WhatsApp",
    "One controlled knowledge layer across brands and departments",
    "Managers could reinforce topics, review flags, and update sources",
  ];

  return (
    <figure>
      <div className="grid gap-4 md:grid-cols-2 md:items-stretch">
        <Panel className="h-full">
          <p className="text-[11px] uppercase tracking-[0.18em] text-muted">
            Before
          </p>
          <ul className="mt-5 space-y-4">
            {before.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm leading-relaxed text-muted"
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
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-burgundy-on-dark">
            After
          </p>
          <ul className="mt-5 space-y-4">
            {after.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm leading-relaxed text-background/85"
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
