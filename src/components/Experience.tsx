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
        <SectionHeading
          id="experience-heading"
          title="Experience"
          description="I'm most useful when a problem is still messy. I get close to the real workflow, understand what is breaking, turn that into something actionable and stay close through implementation."
        />

        <ol className="mt-10 space-y-0 md:mt-12">
          {experience.map((item) => (
            <li
              key={item.id}
              className="grid gap-5 border-t border-border py-8 md:grid-cols-12 md:items-center md:gap-6 md:py-10"
            >
              <div className="min-w-0 md:col-span-4">
                {item.logo ? (
                  <div className="mb-4" aria-hidden="true">
                    <span
                      className="relative block h-6 w-[6.75rem]"
                      style={
                        item.logoScale && item.logoScale !== 1
                          ? {
                              transform: `scale(${item.logoScale})`,
                              transformOrigin: "left center",
                            }
                          : undefined
                      }
                    >
                      <Image
                        src={item.logo}
                        alt=""
                        fill
                        sizes="108px"
                        className="object-contain object-left"
                      />
                    </span>
                  </div>
                ) : null}
                <h3 className="case-subhead">
                  {item.logoHref ? (
                    <Link
                      href={item.logoHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline text-navy transition-colors hover:text-burgundy"
                    >
                      {item.company}
                    </Link>
                  ) : (
                    item.company
                  )}
                </h3>
                <p className="case-meta mt-1 text-muted">{item.role}</p>
                {item.subtitle ? (
                  <p className="case-meta mt-1 text-muted">{item.subtitle}</p>
                ) : null}
                <p className="case-meta mt-2 text-muted md:hidden">
                  {item.period}
                </p>
              </div>
              <div className="hidden md:col-span-2 md:block">
                <p className="case-meta text-muted">{item.period}</p>
              </div>
              <div className="min-w-0 md:col-span-6 md:justify-self-start">
                {item.focus ? (
                  <ul className="flex flex-wrap gap-2">
                    {item.focus.map((focusItem) => (
                      <li
                        key={focusItem}
                        className="tag-chip rounded-sm border border-border px-2.5 py-1 text-muted"
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
