import Link from "next/link";
import { heroStats, profile } from "@/lib/resume";
import { HeroScene } from "@/components/three/hero-scene";
import { ArrowDown, ArrowRight, ArrowUpRight, Download } from "@/components/icons";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden pb-10 pt-28 sm:pt-32 lg:pt-36">
      <div aria-hidden className="absolute inset-0 bg-grid opacity-70" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[20%] top-[4%] h-[46rem] w-[46rem] rounded-full bg-[radial-gradient(circle,rgba(214,176,109,0.11),transparent_62%)] blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[24%] bottom-[-10%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(120,146,186,0.08),transparent_65%)] blur-2xl"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute left-5 top-1/2 hidden -translate-y-1/2 xl:block"
      >
        <div className="flex flex-col items-center gap-4">
          <span className="h-16 w-px bg-gradient-to-b from-transparent to-cream/25" />
          <span className="font-mono text-[9px] uppercase tracking-[0.32em] text-muted [writing-mode:vertical-rl]">
            Portfolio — 2026
          </span>
          <span className="h-16 w-px bg-gradient-to-t from-transparent to-cream/25" />
        </div>
      </div>

      <div className="container-x relative flex flex-1 flex-col justify-center">
        <div className="grid items-center gap-6 lg:grid-cols-[1.04fr_0.96fr] lg:gap-2">
          <div className="relative z-10 max-w-[44rem]">
            <div
              className="inline-flex items-center gap-2.5 rounded-full border border-cream/10 bg-cream/[0.03] py-1.5 pl-2 pr-4 backdrop-blur"
              data-reveal
            >
              <span className="flex h-6 items-center rounded-full bg-gold/15 px-2 font-mono text-[9px] uppercase tracking-[0.18em] text-gold-bright">
                AI · Backend
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-cream/60">
                Dhaka, Bangladesh
              </span>
            </div>

            <h1
              className="mt-7 font-display text-[clamp(3.1rem,7.2vw,6.35rem)] leading-[0.9] tracking-tightest text-cream"
              data-reveal
              style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
            >
              Engineering
              <span className="relative mt-1 block italic text-gold-bright">
                intelligence
                <svg
                  aria-hidden
                  viewBox="0 0 420 14"
                  className="absolute -bottom-1 left-0 h-3 w-[70%] text-gold/35"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 9C92 3 190 12 418 4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <span className="block">into products that ship.</span>
            </h1>

            <p
              className="mt-8 max-w-[34rem] text-[15px] leading-relaxed text-cream/60 sm:text-base"
              data-reveal
              style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
            >
              I&apos;m {profile.shortName} — a backend engineer with an AI/ML edge.
              I build LLM-powered search, recommendation systems, and real-time
              platforms, then tune them until they hold up in production.
            </p>

            <div
              className="mt-9 flex flex-wrap items-center gap-3"
              data-reveal
              style={{ "--reveal-delay": "240ms" } as React.CSSProperties}
            >
              <Link href="/#work" className="btn-gold group">
                Explore my work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/brag-sheet" className="btn-ghost group">
                Open the brag sheet
                <ArrowUpRight className="h-4 w-4 text-gold transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <a
                href={profile.resume}
                download
                className="ml-1 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-cream/45 transition-colors hover:text-cream"
              >
                <Download className="h-3.5 w-3.5" />
                Résumé
              </a>
            </div>
          </div>

          <div
            className="relative mx-auto aspect-square w-full max-w-[34rem] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:max-w-none lg:self-center"
            data-reveal
            style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
          >
            <div
              aria-hidden
              className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle_at_50%_45%,rgba(214,176,109,0.16),rgba(7,8,10,0)_68%)] blur-xl"
            />
            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_34%_28%,#ffffff,#b8bbc4_26%,#51565f_55%,#0b0c0f_78%)] opacity-30 blur-[1px]"
            />
            <div className="absolute inset-0">
              <HeroScene />
            </div>

            <div className="pointer-events-none absolute left-0 top-[14%] flex items-center gap-2 rounded-full glass px-3 py-2 sm:left-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-cream/70">
                Live 3D render
              </span>
            </div>

            <div className="pointer-events-none absolute right-0 top-[38%] rounded-xl glass px-3.5 py-2.5 text-right">
              <span className="block font-display text-lg leading-none text-gold-bright">
                20K+
              </span>
              <span className="mt-1 block font-mono text-[8px] uppercase tracking-[0.16em] text-cream/50">
                vectors indexed
              </span>
            </div>

            <div className="pointer-events-none absolute bottom-[12%] left-0 max-w-[12rem] rounded-xl glass px-3.5 py-3 sm:left-2">
              <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-gold/70">
                Currently building with
              </p>
              <p className="mt-1.5 text-[11px] leading-relaxed text-cream/70">
                MCP servers · RAG pipelines · vector search
              </p>
            </div>

            <p className="absolute bottom-1 right-1 font-mono text-[8px] uppercase tracking-[0.2em] text-cream/30">
              Move cursor to explore
            </p>
          </div>

          <dl
            className="mt-2 grid max-w-[34rem] grid-cols-2 gap-y-6 border-t border-cream/[0.08] pt-6 sm:grid-cols-4 lg:col-start-1 lg:row-start-2 lg:mt-12"
            data-reveal
            style={{ "--reveal-delay": "320ms" } as React.CSSProperties}
          >
            {heroStats.map((stat) => (
              <div key={stat.label} className="pr-3">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-2xl tracking-tight text-cream sm:text-[1.7rem]">
                    {stat.value}
                  </span>
                  <span
                    aria-hidden
                    className="mt-1 block font-mono text-[9px] uppercase leading-relaxed tracking-[0.14em] text-muted"
                  >
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-cream/[0.07] pt-5 sm:mt-14">
          <a
            href="#about"
            className="group inline-flex items-center gap-2.5 font-mono text-[9px] uppercase tracking-[0.2em] text-muted transition-colors hover:text-cream"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-cream/15 transition-colors group-hover:border-gold/60">
              <ArrowDown className="h-3 w-3 transition-transform group-hover:translate-y-0.5" />
            </span>
            Scroll to explore
          </a>
          <p className="hidden font-mono text-[9px] uppercase tracking-[0.2em] text-cream/30 sm:block">
            Node.js / Python / LLM systems
          </p>
        </div>
      </div>
    </section>
  );
}
