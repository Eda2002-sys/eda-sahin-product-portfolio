import {
  Caption,
  JourneySteps,
  Panel,
  PillRow,
  SectionLabel,
  VisualHeader,
} from "@/components/case-studies/InfographicPrimitives";

function InsightCard({
  tag,
  tagTone = "burgundy",
  issue,
  branches,
  owner,
  nextAction,
}: {
  tag: string;
  tagTone?: "burgundy" | "amber" | "green";
  issue: string;
  branches: string;
  owner: string;
  nextAction: string;
}) {
  const border =
    tagTone === "amber"
      ? "border-l-amber-600/70"
      : tagTone === "green"
        ? "border-l-emerald-700/60"
        : "border-l-burgundy";
  const dot =
    tagTone === "amber"
      ? "bg-amber-600"
      : tagTone === "green"
        ? "bg-emerald-700"
        : "bg-burgundy";

  return (
    <div
      className={`visual-panel border-l-[3px] bg-background p-4 ${border}`}
    >
      <div className="flex items-center gap-2">
        <span className={`h-1.5 w-1.5 rounded-full ${dot}`} aria-hidden="true" />
        <span className="text-[10px] uppercase tracking-[0.14em] text-muted">
          {tag}
        </span>
      </div>
      <dl className="mt-4 space-y-3 text-sm">
        <div>
          <dt className="text-[10px] uppercase tracking-[0.12em] text-muted">
            Issue
          </dt>
          <dd className="mt-1 text-navy">{issue}</dd>
        </div>
        <div>
          <dt className="text-[10px] uppercase tracking-[0.12em] text-muted">
            Affected branches
          </dt>
          <dd className="mt-1 text-navy">{branches}</dd>
        </div>
        <div>
          <dt className="text-[10px] uppercase tracking-[0.12em] text-muted">
            Owner
          </dt>
          <dd className="mt-1 text-navy">{owner}</dd>
        </div>
      </dl>
      <div className="mt-4 border-t border-border pt-3">
        <p className="text-[10px] uppercase tracking-[0.12em] text-muted">
          Next action
        </p>
        <p className="mt-1 text-sm text-burgundy">{nextAction}</p>
      </div>
    </div>
  );
}

/** Frontline updates → synthesis → manager-ready (product landing pattern). */
export function ThirdEyeHeroVisual({ caption }: { caption?: string }) {
  const frontlineUpdates = [
    "Customers keep asking about insurance covering replacement parts.",
    "CRM was slow again this morning: team worked around it.",
    "Two call-offs at checkout; queue building before peak.",
  ];

  return (
    <figure className="@container min-w-0">
      <Panel className="!p-0 overflow-visible">
        <div className="border-b border-border px-4 py-3 @[42rem]:px-6 @[42rem]:py-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#54222e]">
            Operating loop
          </p>
          <h3 className="case-subhead mt-1.5">
            Frontline updates → manager actions
          </h3>
          <p className="mt-1.5 hidden text-sm text-muted @[42rem]:block">
            WhatsApp check-ins become daily briefs, signals and next actions.
          </p>
        </div>

        {/* Stack on homepage covers; 3-col only when the figure itself is wide */}
        <div className="grid gap-0 @[42rem]:grid-cols-12">
          <div className="border-b border-border p-3.5 @[42rem]:col-span-4 @[42rem]:border-b-0 @[42rem]:border-r @[42rem]:p-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#54222e]">
              Frontline updates
            </p>
            <ul className="mt-2.5 space-y-1.5 @[42rem]:mt-3 @[42rem]:space-y-2">
              {frontlineUpdates.map((update, index) => (
                <li
                  key={update}
                  className={`rounded-sm border border-emerald-900/10 bg-emerald-950/[0.04] px-2.5 py-2 text-[12px] leading-snug text-navy @[42rem]:px-3 @[42rem]:py-2.5 @[42rem]:text-[13px] @[42rem]:leading-relaxed ${
                    index === 2 ? "hidden @[42rem]:block" : ""
                  }`}
                >
                  {update}
                </li>
              ))}
            </ul>
            <p className="mt-2 text-[11px] leading-snug text-muted @[42rem]:mt-3">
              2–3 shift-close questions · no new app
            </p>
          </div>

          <div className="flex flex-row items-center gap-3 border-b border-border bg-surface px-3.5 py-3 @[42rem]:col-span-3 @[42rem]:flex-col @[42rem]:justify-center @[42rem]:gap-0 @[42rem]:border-b-0 @[42rem]:border-r @[42rem]:px-4 @[42rem]:py-5">
            <p className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#54222e] @[42rem]:text-[11px]">
              Synthesis
            </p>
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center @[42rem]:my-4 @[42rem]:h-16 @[42rem]:w-16">
              <span
                className="absolute inset-0 rounded-full border border-burgundy/25"
                aria-hidden="true"
              />
              <span
                className="absolute inset-2 rounded-full border border-burgundy/40 @[42rem]:inset-3"
                aria-hidden="true"
              />
              <span
                className="relative h-2.5 w-2.5 rounded-full bg-burgundy @[42rem]:h-3.5 @[42rem]:w-3.5"
                aria-hidden="true"
              />
            </div>
            <p className="min-w-0 text-[11px] leading-snug text-muted @[42rem]:max-w-[12rem] @[42rem]:text-center @[42rem]:text-xs">
              Patterns grouped · owners assigned · exceptions flagged
            </p>
          </div>

          <div className="bg-navy p-3.5 text-background @[42rem]:col-span-5 @[42rem]:p-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-burgundy-on-dark">
              Manager-ready
            </p>
            <div className="mt-2.5 rounded-sm border border-background/15 bg-background/5 p-3 @[42rem]:mt-3 @[42rem]:p-3.5">
              <span className="rounded-sm bg-burgundy px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.12em]">
                Staffing risk
              </span>
              <p className="mt-2 text-base leading-snug text-background @[42rem]:mt-2.5 @[42rem]:text-lg">
                Branch 4 thin next Friday: 3 overlapping leave requests
              </p>
              <dl className="mt-2.5 space-y-1.5 text-[13px] @[42rem]:mt-3 @[42rem]:space-y-2 @[42rem]:text-sm">
                <div className="flex justify-between gap-3 border-b border-background/10 pb-1.5">
                  <dt className="text-background/60">Owner</dt>
                  <dd>HR Ops</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="shrink-0 text-background/60">Next action</dt>
                  <dd className="text-right font-medium text-burgundy-on-dark">
                    Confirm coverage by Wednesday
                  </dd>
                </div>
              </dl>
            </div>
            <div className="mt-2 hidden space-y-1.5 @[42rem]:mt-2.5 @[42rem]:block">
              {[
                "Insurance questions increased · 21 mentions",
                "Warranty procedure training gap · 9 new joiners",
              ].map((item) => (
                <p
                  key={item}
                  className="rounded-sm border border-background/10 px-2.5 py-1.5 text-[11px] leading-snug text-background/75"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Panel>
      {caption ? <Caption>{caption}</Caption> : null}
    </figure>
  );
}



/** Before / After: typical corporate tools vs Third Eye (landing-page pain pattern). */
export function ThirdEyeProblemVisual({ caption }: { caption?: string }) {
  const before = [
    "Updates scattered across WhatsApp, spreadsheets and email",
    "Managers rely on manual follow-up",
    "Repeated issues are noticed too late",
  ];
  const after = [
    "One lightweight daily WhatsApp pulse",
    "Repeated signals grouped automatically",
    "Owners and next actions surfaced each morning",
  ];

  return (
    <figure>
      <Panel className="!p-0 overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="border-b border-border bg-surface/60 p-5 md:border-b-0 md:border-r md:p-7">
            <p className="text-[11px] uppercase tracking-[0.14em] text-muted">
              Before
            </p>
            <p className="case-subhead mt-2">Typical corporate tools</p>
            <ul className="mt-5 space-y-3">
              {before.map((item) => (
                <li
                  key={item}
                  className="case-meta flex gap-3 rounded-sm border border-border bg-background/60 px-3 py-2.5 text-muted"
                >
                  <span className="text-burgundy/70" aria-hidden="true">
                    −
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative bg-burgundy/[0.03] p-5 md:p-7">
            <span className="absolute right-5 top-5 rounded-sm border border-burgundy/40 px-2 py-0.5 text-[10px] uppercase tracking-[0.12em] text-burgundy">
              Third Eye
            </span>
            <p className="text-[11px] uppercase tracking-[0.14em] text-muted">
              After
            </p>
            <p className="case-subhead mt-2">Manager-ready loop</p>
            <ul className="mt-5 space-y-3">
              {after.map((item) => (
                <li
                  key={item}
                  className="case-meta flex gap-3 rounded-sm border border-border bg-background px-3 py-2.5 text-navy shadow-[0_6px_20px_-16px_rgba(26,31,46,0.35)]"
                >
                  <span className="text-burgundy" aria-hidden="true">
                    +
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Panel>
      {caption ? <Caption>{caption}</Caption> : null}
    </figure>
  );
}

/** Daily operating signal: WhatsApp in, brief out (Sarah / insurance pattern). */
export function ThirdEyeApproachVisual({ caption }: { caption?: string }) {
  const briefItems = [
    {
      title: "Insurance questions increased",
      meta: "21 mentions",
      tone: "high" as const,
    },
    {
      title: "Warranty procedure training gap",
      meta: "9 new joiners",
      tone: "medium" as const,
    },
    {
      title: "Parts delay in Branch 3",
      meta: "4 days",
      tone: "medium" as const,
    },
  ];

  return (
    <figure>
      <Panel className="!p-0 overflow-hidden">
        <div className="border-b border-border px-5 py-4 md:px-7">
          <SectionLabel
            eyebrow="Daily operating signal"
            title="WhatsApp in, operating signals out"
            subtitle="Risk, ownership, and next action, not a transcript replay."
          />
        </div>

        <div className="grid lg:grid-cols-12">
          <div className="border-b border-border p-5 lg:col-span-5 lg:border-b-0 lg:border-r md:p-6">
            <div className="overflow-hidden rounded-[1.2rem] border border-border bg-background">
              <div className="border-b border-border px-4 py-2.5">
                <p className="text-xs text-muted">Shift-close check-in</p>
              </div>
              <div className="space-y-3 px-3 py-4">
                <div className="max-w-[92%] rounded-sm rounded-tl-none border border-border bg-surface-elevated px-3 py-2.5">
                  <p className="text-[12px] leading-relaxed text-navy">
                    What customer question came up most today?
                  </p>
                </div>
                <div className="ml-auto max-w-[88%] rounded-sm rounded-tr-none border border-emerald-900/10 bg-emerald-950/[0.05] px-3 py-2.5">
                  <p className="text-[12px] leading-relaxed text-navy">
                    Insurance: whether it covers replacement parts on this
                    model.
                  </p>
                  <p className="mt-1 text-right text-[10px] text-muted">
                    Sarah · Branch 2
                  </p>
                </div>
                <div className="max-w-[92%] rounded-sm rounded-tl-none border border-border bg-surface-elevated px-3 py-2.5">
                  <p className="text-[12px] leading-relaxed text-navy">
                    Got it. Anything blocking service recovery before close?
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center border-b border-border px-4 py-3 lg:col-span-1 lg:border-b-0 lg:border-r">
            <span className="text-2xl text-burgundy" aria-hidden="true">
              →
            </span>
          </div>

          <div className="p-5 md:p-6 lg:col-span-6">
            <PillRow
              pills={["Automotive", "Healthcare", "Field ops"]}
              activeIndex={0}
            />
            <p className="mt-5 text-[11px] uppercase tracking-[0.14em] text-burgundy">
              Daily operating brief
            </p>
            <ul className="mt-4 space-y-3">
              {briefItems.map((item) => (
                <li
                  key={item.title}
                  className={`rounded-sm border px-4 py-3 ${
                    item.tone === "high"
                      ? "border-burgundy/35 bg-burgundy/[0.04]"
                      : "border-border bg-background"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-sm text-navy">{item.title}</p>
                    <span className="shrink-0 text-xs text-muted">{item.meta}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Panel>
      {caption ? <Caption>{caption}</Caption> : null}
    </figure>
  );
}

/** Daily manager outputs: pilot format pattern. */
export function ThirdEyeBuildVisual({ caption }: { caption?: string }) {
  const outputs = [
    {
      number: "01",
      title: "WhatsApp pulse",
      body: "2–3 shift-close questions: lightweight, repeatable, no new employee app.",
    },
    {
      number: "02",
      title: "Web fallback",
      body: "Same check-in via mobile link when WhatsApp delivery or permissions differ.",
    },
    {
      number: "03",
      title: "Morning brief",
      body: "Issues, quotes, and trends grouped across branches, not message dumps.",
    },
    {
      number: "04",
      title: "Action queue",
      body: "Owner-linked follow-ups, training triggers and escalation paths surfaced daily.",
    },
  ];

  return (
    <figure>
      <Panel dark className="!p-0 overflow-hidden">
        <div className="border-b border-background/15 px-5 py-4 md:px-7">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-burgundy-on-dark">
                Pilot format
              </p>
              <h3 className="case-subhead mt-2 !text-background">
                Manager visibility in days, not quarters
              </h3>
              <p className="mt-2 text-sm text-background/65">
                Best for 20–50 frontline employees across 2–5 sites: WhatsApp
                check-ins plus mobile web fallback.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Setup in days", "No employee app rollout"].map((pill) => (
                  <span
                    key={pill}
                    className="rounded-full border border-background/20 px-3 py-1 text-xs text-background/70"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-[11px] uppercase tracking-[0.16em] text-background/50">
              Daily manager outputs
            </p>
          </div>
        </div>

        <div className="grid gap-4 p-5 sm:grid-cols-2 md:p-7">
          {outputs.map((output) => (
            <div
              key={output.number}
              className="rounded-sm border border-background/15 bg-background/5 p-4"
            >
              <span className="text-[11px] uppercase tracking-[0.14em] text-burgundy-on-dark">
                {output.number}
              </span>
              <h4 className="case-subhead mt-2 !text-background">
                {output.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-background/65">
                {output.body}
              </p>
            </div>
          ))}
        </div>
      </Panel>
      {caption ? <Caption>{caption}</Caption> : null}
    </figure>
  );
}

export function ThirdEyeJourneyVisual({ caption }: { caption?: string }) {
  return (
    <figure>
      <JourneySteps
        steps={[
          {
            number: "01",
            label: "Pulse",
            title: "Frontline completes WhatsApp check-in",
            body: "Short shift-close questions capture customer issues, workarounds, branch differences and recovery blockers.",
          },
          {
            number: "02",
            label: "Synthesise",
            title: "Repeated signals grouped automatically",
            body: "Themes like insurance questions, staffing pressure or SOP drift surface across sites, not one message at a time.",
          },
          {
            number: "03",
            label: "Brief",
            title: "Morning brief with owners and context",
            body: "Managers see issues, quotes, trends and affected branches: with explicit next actions, not inbox archaeology.",
          },
          {
            number: "04",
            label: "Act",
            title: "Follow-ups loop back to the field",
            body: "Action queue, training triggers and escalation paths connect dashboard review to frontline recovery.",
          },
        ]}
      />
      {caption ? <Caption>{caption}</Caption> : null}
    </figure>
  );
}

/** Manager-level insight cards: staffing, trend, training gap pattern. */
export function ThirdEyeBriefVisual({ caption }: { caption?: string }) {
  return (
    <figure>
      <Panel className="!p-0 overflow-hidden">
        <div className="border-b border-border px-5 py-4 md:px-7">
          <SectionLabel
            eyebrow="Manager-level insights"
            title="Insights you can act on today"
            subtitle="Issue, affected branches, owner and next action, surfaced each morning."
            badge="Daily brief pattern"
          />
        </div>
        <div className="grid gap-4 p-5 md:grid-cols-3 md:p-7">
          <InsightCard
            tag="Staffing risk"
            issue="3 overlapping leave requests next Friday"
            branches="Branch 4 · Branch 7"
            owner="HR Ops"
            nextAction="Confirm shift coverage by Wednesday"
          />
          <InsightCard
            tag="Customer question trend"
            tagTone="amber"
            issue="32% increase in insurance-related questions this week"
            branches="Region North · 6 branches"
            owner="Regional manager"
            nextAction="Update service desk talking points"
          />
          <InsightCard
            tag="Training gap"
            tagTone="green"
            issue="New joiners asking about warranty procedures"
            branches="Onboarding cohort · Branch 2"
            owner="Training lead"
            nextAction="Trigger warranty SOP micro-training"
          />
        </div>
      </Panel>
      {caption ? <Caption>{caption}</Caption> : null}
    </figure>
  );
}

/** Outcome: scattered updates → daily operating rhythm. */
export function ThirdEyeOutcomeVisual({ caption }: { caption?: string }) {
  const before = [
    "Updates spread across chats and informal reporting",
    "Managers manually reconstructed what mattered",
    "Recurring problems surfaced late",
  ];
  const after = [
    "Lightweight WhatsApp check-ins",
    "Repeated signals grouped into a daily brief",
    "Owners and next actions surfaced for managers",
    "Follow-ups looped back into operations",
  ];

  return (
    <figure>
      <div className="grid gap-4 md:grid-cols-2 md:items-stretch">
        <Panel className="h-full">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
            Before
          </p>
          <ul className="mt-5 space-y-4">
            {before.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm leading-relaxed text-muted"
              >
                <span className="mt-1.5 text-[#54222e]" aria-hidden="true">
                  ·
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Panel>
        <Panel dark className="h-full">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-burgundy-on-dark">
            After
          </p>
          <ul className="mt-5 space-y-4">
            {after.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm leading-relaxed text-background/85"
              >
                <span
                  className="mt-1.5 text-burgundy-on-dark"
                  aria-hidden="true"
                >
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
