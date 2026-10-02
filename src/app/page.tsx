import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { HowIWork } from "@/components/HowIWork";
import { ProductSkills } from "@/components/ProductSkills";
import { SelectedWork } from "@/components/SelectedWork";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <HowIWork />
      <Experience />
      <Education />
      <ProductSkills />
      <Contact />
    </>
  );
}
