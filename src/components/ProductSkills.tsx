import { SectionHeading } from "@/components/SectionHeading";
import { skillGroups } from "@/data/skills";

export function ProductSkills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24"
      aria-labelledby="skills-heading"
    >
      <div className="container-page section-space">
        <SectionHeading
          id="skills-heading"
          eyebrow="Capabilities"
          title="What I bring into the work."
          description="Product judgment, delivery discipline, AI tooling and cross-functional coordination."
        />

        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {skillGroups.map((group) => (
            <div key={group.title} className="border-t border-border pt-5">
              <h3 className="font-serif text-xl text-navy md:text-2xl">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm leading-relaxed text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
