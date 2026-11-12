import { Hero } from "@/components/home/hero";
import { Marquee } from "@/components/home/marquee";
import { About } from "@/components/home/about";
import { ExperienceSection } from "@/components/home/experience";
import { ProjectsSection } from "@/components/home/projects";
import { SkillsSection } from "@/components/home/skills";
import { ProofSection } from "@/components/home/proof";
import { ContactSection } from "@/components/home/contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ProofSection />
      <ContactSection />
    </>
  );
}
