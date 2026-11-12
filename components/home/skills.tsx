import { SectionHeading } from "@/components/section-heading";
import { skillGroups } from "@/lib/resume";

export function SkillsSection() {
  return (
    <section id="skills" className="section-pad scroll-mt-24 border-t border-cream/[0.06]">
      <div className="container-x">
        <SectionHeading
          index="04"
          label="Capabilities"
          title={
            <>
              The stack behind
              <span className="block italic text-gold-bright">the systems.</span>
            </>
          }
          description="Backend-first, AI-native. Enough full-stack range to ship the product around the model."
        />

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => (
            <div
              key={group.label}
              className="group relative flex min-h-[11rem] flex-col overflow-hidden rounded-2xl border border-cream/[0.08] bg-gradient-to-b from-surface/60 to-transparent p-5 transition-colors duration-500 hover:border-gold/25"
              data-reveal
              style={{ "--reveal-delay": `${index * 40}ms` } as React.CSSProperties}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] tracking-[0.16em] text-gold/50">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="h-1 w-1 rotate-45 bg-cream/20 transition-colors group-hover:bg-gold" />
              </div>

              <h3 className="mt-7 text-balance font-display text-[1.4rem] leading-tight tracking-tight text-cream/90">
                {group.label}
              </h3>

              <ul className="mt-3 flex flex-wrap gap-x-1.5 gap-y-1">
                {group.items.map((item, itemIndex) => (
                  <li
                    key={item}
                    className="text-[11px] leading-relaxed text-cream/45 transition-colors group-hover:text-cream/60"
                  >
                    {item}
                    {itemIndex < group.items.length - 1 && (
                      <span className="ml-1.5 text-gold/30">·</span>
                    )}
                  </li>
                ))}
              </ul>

              <span className="absolute inset-x-5 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-gold/60 to-transparent transition-transform duration-700 group-hover:scale-x-100" />
            </div>
          ))}
        </div>

        <div
          className="mt-6 flex flex-col gap-4 rounded-2xl border border-cream/[0.07] bg-cream/[0.015] px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
          data-reveal
        >
          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
            Also comfortable with
          </p>
          <p className="text-[11.5px] text-cream/50">
            Python · JavaScript (ES6+) · TypeScript · REST design · microservices ·
            embeddings · model evaluation
          </p>
        </div>
      </div>
    </section>
  );
}
