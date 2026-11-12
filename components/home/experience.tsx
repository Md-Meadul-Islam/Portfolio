import { SectionHeading } from "@/components/section-heading";
import { experience } from "@/lib/resume";
import { ArrowUpRight, MapPin } from "@/components/icons";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="section-pad scroll-mt-24 border-t border-cream/[0.06]"
    >
      <div className="container-x">
        <SectionHeading
          index="02"
          label="Experience"
          title={
            <>
              Where the systems
              <span className="block italic text-gold-bright">went live.</span>
            </>
          }
          description="Production work across AI search, commerce infrastructure, real-time platforms, and billing."
        />

        <div className="mt-14 space-y-6">
          {experience.map((role) => (
            <article
              key={role.company}
              className="group relative overflow-hidden rounded-[26px] border border-cream/10 bg-gradient-to-br from-surface/80 via-coal to-ink"
              data-reveal
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(214,176,109,0.1),transparent_70%)] blur-2xl transition-opacity duration-700 group-hover:opacity-100 md:opacity-60"
              />
              <div className="relative grid lg:grid-cols-[0.38fr_1fr]">
                <div className="border-b border-cream/[0.08] p-6 sm:p-9 lg:border-b-0 lg:border-r">
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/25 bg-gold/[0.07] font-display text-xl text-gold-bright">
                      A2
                    </span>
                    <span className="rounded-full border border-cream/10 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.16em] text-cream/50">
                      Most recent
                    </span>
                  </div>

                  <h3 className="mt-6 text-balance font-display text-[1.85rem] leading-[1.02] tracking-tight text-cream">
                    {role.role}
                  </h3>
                  <p className="mt-2 text-[13px] text-gold/85">{role.company}</p>

                  <div className="mt-5 space-y-2 font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
                    <p className="flex items-center gap-2">
                      <MapPin className="h-3 w-3" />
                      {role.location}
                    </p>
                    <p>{role.period}</p>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-1.5">
                    {role.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-cream/[0.08] bg-cream/[0.025] px-2 py-1 font-mono text-[8px] uppercase tracking-[0.1em] text-cream/50"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 sm:p-9">
                  <p className="max-w-xl text-pretty text-[14px] leading-relaxed text-cream/55">
                    {role.context}
                  </p>
                  <ul className="mt-7 grid gap-x-10 gap-y-0 sm:grid-cols-2">
                    {role.bullets.map((bullet, index) => (
                      <li
                        key={bullet}
                        className="group/item flex gap-3.5 border-t border-cream/[0.07] py-4"
                      >
                        <span className="mt-[3px] font-mono text-[9px] tracking-[0.12em] text-gold/60">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <p className="text-[13px] leading-relaxed text-cream/70 transition-colors group-hover/item:text-cream/90">
                          {bullet}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="relative flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-cream/[0.08] px-6 py-4 font-mono text-[8px] uppercase tracking-[0.16em] text-muted sm:px-9">
                <span className="text-gold/70">Impact areas</span>
                <span>LLM search</span>
                <span className="h-1 w-1 rounded-full bg-cream/20" />
                <span>20K+ catalogue</span>
                <span className="h-1 w-1 rounded-full bg-cream/20" />
                <span>Real-time APIs</span>
                <span className="h-1 w-1 rounded-full bg-cream/20" />
                <span>Stripe billing</span>
                <a
                  href="https://github.com/Md-Meadul-Islam"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="ml-auto inline-flex items-center gap-1.5 text-cream/60 transition-colors hover:text-gold-bright"
                >
                  GitHub
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
