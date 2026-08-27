import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24"
      aria-labelledby="experience-heading"
    >
      <div className="container-page section-space">
        <SectionHeading id="experience-heading" title="Experience" />

        <p className="case-meta mt-8 text-muted md:mt-10">
          AnalystAI and GA Capital were concurrent roles across the same AI and
          advisory ecosystem: product delivery at AnalystAI and live M&amp;A
          execution at GA Capital.
        </p>

        <ol className="mt-10 space-y-0 md:mt-12">
          {experience.map((item) => (
            <li
              key={item.id}
              className="grid gap-4 border-t border-border py-8 md:grid-cols-12 md:gap-6 md:py-10"
            >
              <div className="min-w-0 md:col-span-4">
                <div className="flex items-start justify-between gap-4 md:block">
                  <div className="flex min-w-0 items-start gap-3">
                    {item.logo ? (
                      <Link
                        href={item.logoHref ?? "#"}
                        target={item.logoHref ? "_blank" : undefined}
                        rel={item.logoHref ? "noopener noreferrer" : undefined}
                        className="mt-0.5 shrink-0 transition-opacity hover:opacity-80"
                        aria-label={`${item.company} (opens in new tab)`}
                      >
                        {(() => {
                          const height = item.logoHeight ?? 22;
                          const aspect = item.logoAspect ?? 984 / 421;
                          const width = Math.round(height * aspect);
                          return (
                            <Image
                              src={item.logo}
                              alt=""
                              width={width}
                              height={height}
                              className="max-w-full object-contain"
                              style={{ width, height, maxWidth: "100%" }}
                            />
                          );
                        })()}
                      </Link>
                    ) : null}
                    <div className="min-w-0">
                      <h3 className="case-subhead">{item.company}</h3>
                      <p className="case-meta mt-1 text-muted">{item.role}</p>
                      {item.subtitle ? (
                        <p className="case-meta mt-1 text-muted">
                          {item.subtitle}
                        </p>
                      ) : null}
                    </div>
                  </div>
                  <p className="case-meta shrink-0 text-muted md:hidden">
                    {item.period}
                  </p>
                </div>
              </div>
              <div className="hidden md:col-span-2 md:block">
                <p className="case-meta text-muted">{item.period}</p>
              </div>
              <div className="min-w-0 md:col-span-6">
                {item.focus ? (
                  <ul className="flex flex-wrap gap-2">
                    {item.focus.map((focusItem) => (
                      <li
                        key={focusItem}
                        className="rounded-sm border border-border px-2.5 py-1 text-xs text-muted"
                      >
                        {focusItem}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
