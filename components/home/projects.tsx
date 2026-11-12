import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/home/project-card";
import { projects } from "@/lib/resume";
import { ArrowUpRight } from "@/components/icons";

export function ProjectsSection() {
  return (
    <section id="work" className="section-pad scroll-mt-24 border-t border-cream/[0.06]">
      <div className="container-x">
        <SectionHeading
          index="03"
          label="Selected work"
          title={
            <>
              Work that
              <span className="italic text-gold-bright"> ships.</span>
            </>
          }
          description="Three products, three different constraints: semantic search at catalogue scale, real-time dispatch, and role-based workflows."
          action={
            <Link
              href="/brag-sheet"
              className="group inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-cream/50 transition-colors hover:text-gold-bright"
            >
              Full breakdown in the brag sheet
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          }
        />

        <div className="mt-14 space-y-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              flip={index % 2 === 1}
              delay={index * 60}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
