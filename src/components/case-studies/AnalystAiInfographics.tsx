import {
  ApproachCards,
  BeforeAfter,
  BuildPillars,
  Caption,
  JourneySteps,
  Panel,
  PillRow,
  ProblemCards,
  SectionLabel,
  StatStrip,
} from "@/components/case-studies/InfographicPrimitives";
import { AnalystAiLogo } from "@/components/AnalystAiLogo";

export function AnalystAiHeroVisual({ caption }: { caption?: string }) {
  return (
    <figure className="@container min-w-0">
      <Panel className="!p-0 overflow-visible">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3 @[28rem]:px-5 @[42rem]:px-7">
          <AnalystAiLogo size="sm" showWordmark />
          <span className="text-xs text-muted">Enterprise · DDQ · Data room</span>
        </div>
        <div className="grid @[42rem]:grid-cols-12">
          <div className="border-b border-border p-4 @[28rem]:p-5 @[42rem]:col-span-7 @[42rem]:border-b-0 @[42rem]:border-r @[42rem]:p-7">
            <SectionLabel
              eyebrow="Document Q&A"
              title="Answer with evidence attached"
              subtitle="Investment teams need traceable outputs, not fluent summaries alone."
            />
            <div className="mt-5 space-y-3">
              <div className="rounded-sm border border-border bg-background px-4 py-3">
                <p className="text-[11px] uppercase tracking-[0.12em] text-muted">
                  Question
                </p>
                <p className="mt-2 text-sm leading-relaxed text-navy">
                  What are the key revenue drivers and margin risks in the
                  management presentation?
                </p>
              </div>
              <div className="rounded-sm border border-burgundy/30 bg-burgundy/[0.04] px-4 py-3">
                <p className="text-[11px] uppercase tracking-[0.12em] text-burgundy">
                  Source-linked answer
                </p>
                <p className="mt-2 text-sm leading-relaxed text-navy">
                  Revenue growth is attributed to enterprise expansion and
                  pricing mix; margin pressure is flagged around implementation
                  cost and vendor concentration.
                </p>
                <div className="mt-3">
                  <PillRow
                    pills={[
                      "Mgmt deck p.12",
                      "Financial appendix p.4",
                      "Q&A memo p.2",
                    ]}
                    activeIndex={0}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-navy p-4 text-background @[28rem]:p-5 @[42rem]:col-span-5 @[42rem]:p-7">
            <SectionLabel
              eyebrow="Citation panel"
              title="Verify before you share"
              dark
            />
            <div className="mt-5 space-y-3">
              {[
                {
                  source: "Management presentation · p.12",
                  excerpt: "Enterprise segment +34% YoY; mix shift noted",
                  status: "Linked",
                },
                {
                  source: "Financial appendix · p.4",
                  excerpt: "Gross margin sensitivity to vendor terms",
                  status: "Linked",
                },
                {
                  source: "Investor Q&A memo · p.2",
                  excerpt: "Implementation cost overrun risk flagged",
                  status: "Review",
                },
              ].map((item) => (
                <div
                  key={item.source}
                  className="rounded-sm border border-background/15 bg-background/5 px-3 py-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-xs leading-relaxed text-background/80">
                      {item.source}
                    </p>
                    <span className="shrink-0 text-[10px] uppercase tracking-[0.12em] text-burgundy-on-dark">
                      {item.status}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-background/70">
                    {item.excerpt}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs leading-relaxed text-background/55">
              Source validation tested as core behaviour, not a secondary display
              detail.
            </p>
          </div>
        </div>
      </Panel>
      {caption ? <Caption>{caption}</Caption> : null}
    </figure>
  );
}

export function AnalystAiProblemVisual({ caption }: { caption?: string }) {
  return (
    <figure>
      <ProblemCards
        cards={[
          {
            number: "01",
            title: "Fluent answers without evidence erode trust",
            body: "In diligence contexts, an unsupported summary creates risk even when it reads well. Teams need citation clarity before they act.",
          },
          {
            number: "02",
            title: "DDQ and data room state drifted apart",
            body: "When tasks, documents and reporting live in separate surfaces, follow-ups get lost and teams redo work across the diligence cycle.",
          },
          {
            number: "03",
            title: "Demos hid implementation friction",
            body: "Client onboarding often surfaced workflow gaps that feature-complete demos alone did not reveal. Lived usage defines enterprise quality.",
          },
        ]}
      />
      {caption ? <Caption>{caption}</Caption> : null}
    </figure>
  );
}

export function AnalystAiApproachVisual({ caption }: { caption?: string }) {
  return (
    <figure>
      <ApproachCards
        dark
        cards={[
          {
            title: "Treat source linkage as product behaviour",
            body: "Every AI output should be inspectable: citations, confidence boundaries and failure states are part of the core experience.",
          },
          {
            title: "Connect documents, tasks and reporting",
            body: "DDQ paths, data rooms, libraries and task state stay linked as one operating system rather than adjacent feature tabs.",
          },
          {
            title: "Feed client sessions into product priority",
            body: "Onboarding feedback and implementation friction become actionable issues, not notes that disappear after the demo.",
          },
        ]}
      />
      {caption ? <Caption>{caption}</Caption> : null}
    </figure>
  );
}

export function AnalystAiBuildVisual({ caption }: { caption?: string }) {
  return (
    <figure>
      <BuildPillars
        columns={2}
        pillars={[
          {
            label: "Ask",
            title: "Document Q&A",
            body: "Question flows tested for usefulness, source linkage, multilingual documents and graceful failure when evidence is missing.",
          },
          {
            label: "Work",
            title: "DDQ & data room",
            body: "Structured diligence paths with document context, task assignment and progress visible across the workspace.",
          },
          {
            label: "Organize",
            title: "Libraries & tasks",
            body: "Shared evidence, follow-up ownership and libraries that match how investment teams actually coordinate diligence.",
          },
          {
            label: "Report",
            title: "Outputs & onboarding",
            body: "Reporting captures diligence progress; demos and onboarding narratives stay aligned with shipped product behaviour.",
          },
        ]}
      />
      {caption ? <Caption>{caption}</Caption> : null}
    </figure>
  );
}

export function AnalystAiJourneyVisual({ caption }: { caption?: string }) {
  return (
    <figure>
      <JourneySteps
        columns={3}
        steps={[
          {
            number: "01",
            label: "Ingest",
            title: "Documents enter workspace / data room",
            body: "Deal materials, DDQ templates and supporting files indexed with clear ownership and access boundaries.",
          },
          {
            number: "02",
            label: "Query",
            title: "Team asks questions or works DDQ paths",
            body: "AI assists within structured diligence flows, not as a disconnected chat window.",
          },
          {
            number: "03",
            label: "Verify",
            title: "Outputs traced to underlying evidence",
            body: "Citations inspected, confidence gaps flagged and tasks created for follow-up where sources are incomplete.",
          },
          {
            number: "04",
            label: "Coordinate",
            title: "Tasks and libraries organise next steps",
            body: "Shared context persists so teams revisit evidence without rebuilding the thread.",
          },
          {
            number: "05",
            label: "Report",
            title: "Diligence progress captured",
            body: "Reporting surfaces what is answered, what is open and what still needs source validation.",
          },
        ]}
      />
      {caption ? <Caption>{caption}</Caption> : null}
    </figure>
  );
}

export function AnalystAiWorkspaceVisual({ caption }: { caption?: string }) {
  return (
    <figure>
      <Panel className="!p-0 overflow-hidden">
        <div className="border-b border-border px-5 py-4 md:px-7">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <AnalystAiLogo size="sm" showWordmark />
            <span className="rounded-sm border border-border px-2.5 py-1 text-xs text-muted">
              Enterprise pattern
            </span>
          </div>
          <SectionLabel
            eyebrow="Diligence workspace"
            title="One operating system"
            subtitle="Data room, DDQ, tasks and libraries: linked, not adjacent."
          />
        </div>
        <StatStrip
          items={[
            { label: "Data room", value: "142 docs" },
            { label: "DDQ progress", value: "68%" },
            { label: "Open tasks", value: "12" },
            { label: "Sources linked", value: "89%" },
          ]}
        />
        <div className="grid lg:grid-cols-12">
          <aside className="border-b border-border bg-surface p-5 lg:col-span-3 lg:border-b-0 lg:border-r md:p-6">
            <p className="text-[11px] uppercase tracking-[0.14em] text-burgundy">
              DDQ sections
            </p>
            <nav className="mt-4 space-y-1 text-sm">
              {[
                ["Commercial", "Complete"],
                ["Financial", "In review"],
                ["Legal", "Open"],
                ["Technology", "Blocked"],
              ].map(([section, status], index) => (
                <div
                  key={section}
                  className={`flex items-center justify-between rounded-sm px-3 py-2 ${
                    index === 1 ? "bg-navy text-background" : "text-muted"
                  }`}
                >
                  <span>{section}</span>
                  <span className="text-[10px] uppercase tracking-[0.12em]">
                    {status}
                  </span>
                </div>
              ))}
            </nav>
          </aside>
          <div className="p-5 lg:col-span-5 md:p-7">
            <p className="text-[11px] uppercase tracking-[0.14em] text-muted">
              Active question
            </p>
            <p className="mt-2 font-serif text-xl text-navy">
              Customer concentration above 20%?
            </p>
            <div className="mt-4 rounded-sm border border-border bg-background p-4">
              <p className="text-sm text-navy">
                Top three customers represent ~38% of revenue per management
                accounts: concentration risk flagged.
              </p>
              <p className="mt-3 text-[11px] text-burgundy">
                Source · Financial appendix p.7 · Revenue note p.3
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Assign task", "Add to report", "Flag for IC"].map((action) => (
                <span
                  key={action}
                  className="rounded-sm border border-border px-2.5 py-1 text-xs text-muted"
                >
                  {action}
                </span>
              ))}
            </div>
          </div>
          <div className="border-t border-border bg-navy p-5 text-background lg:col-span-4 lg:border-t-0 lg:border-l md:p-7">
            <p className="text-[11px] uppercase tracking-[0.14em] text-burgundy-on-dark">
              Open tasks
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                "Verify customer contract terms · Legal",
                "Cross-check AR aging · Financial",
                "Schedule mgmt follow-up · Commercial",
              ].map((task) => (
                <li
                  key={task}
                  className="rounded-sm border border-background/15 bg-background/5 px-3 py-2"
                >
                  {task}
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

export function AnalystAiOutcomeVisual({ caption }: { caption?: string }) {
  return (
    <figure>
      <BeforeAfter
        before={[
          "AI outputs sounded confident but were hard to verify against sources",
          "DDQ progress, documents and tasks lived in fragmented surfaces",
          "Client friction surfaced late: after demos promised completeness",
        ]}
        after={[
          "Document Q&A returns inspectable, source-linked answers by default",
          "Data room, DDQ, tasks and libraries operate as one diligence workspace",
          "Onboarding feedback flows directly into product issues and priorities",
        ]}
      />
      {caption ? <Caption>{caption}</Caption> : null}
    </figure>
  );
}
