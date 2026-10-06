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
          descriptionWide
          description="I started working in marketing roles, where I learned how to understand an audience, work from feedback and turn business needs into something people could actually respond to. After graduating, that naturally pulled me closer to product and operations, where the same instinct became understanding user problems and figuring out what needed to happen next."
        />

        <ol className="mt-10 space-y-0 md:mt-12">
          {experience.map((item) => (
            <li
              key={item.id}
              className="grid gap-5 border-t border-border py-8 md:grid-cols-12 md:items-start md:gap-6 md:py-10"
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
              <div className="min-w-0 md:col-span-6">
                <ul className="case-meta list-disc space-y-2 pl-4 text-muted marker:text-burgundy/70">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="pl-0.5 leading-relaxed">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
