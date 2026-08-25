import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
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
      <About />
      <ProductSkills />
      <Contact />
    </>
  );
}
