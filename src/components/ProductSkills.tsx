import { SectionHeading } from "@/components/SectionHeading";
import { skillGroups } from "@/data/skills";

export function ProductSkills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24"
      aria-labelledby="skills-heading"
    >
      <div className="container-page py-20 md:py-28">
        <SectionHeading
          id="skills-heading"
          eyebrow="Capabilities"
          title="Product skills"
          description="A restrained view of how I work across product, execution, tools and business context."
        />

        <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.title} className="border-t border-border pt-5">
              <h3 className="font-serif text-2xl text-navy">{group.title}</h3>
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
