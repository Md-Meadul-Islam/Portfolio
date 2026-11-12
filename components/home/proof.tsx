import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import {
  achievements,
  certificates,
  education,
  profile,
} from "@/lib/resume";
import { ArrowUpRight, Graduation, Trophy } from "@/components/icons";

const bars = [22, 30, 26, 38, 33, 44, 37, 49, 42, 55, 47, 60, 52, 66, 58, 71, 63, 76, 68, 84, 74, 90];

export function ProofSection() {
  const leetcode = profile.links.find((link) => link.label === "LeetCode");

  return (
    <section id="proof" className="section-pad scroll-mt-24 border-t border-cream/[0.06]">
      <div className="container-x">
        <SectionHeading
          index="05"
          label="Proof"
          title={
            <>
              Receipts, not
              <span className="italic text-gold-bright"> adjectives.</span>
            </>
          }
          description="The verifiable parts: problems solved, a professional certificate, and two degrees finished while building."
          action={
            <Link
              href="/brag-sheet"
              className="group inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-cream/50 transition-colors hover:text-gold-bright"
            >
              Open the full brag sheet
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          }
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <div
            className="relative flex flex-col overflow-hidden rounded-2xl border border-cream/10 bg-gradient-to-br from-surface/80 via-coal to-ink p-6 sm:p-9"
            data-reveal
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(214,176,109,0.16),transparent_68%)] blur-2xl"
            />
            <div className="relative flex items-start justify-between">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-gold/70">
                  Problem solving
                </p>
                <p className="mt-4 font-display text-[5.4rem] leading-[0.82] tracking-tightest text-cream">
                  120<span className="text-gold-bright">+</span>
                </p>
                <p className="mt-3 max-w-[17rem] text-[13px] leading-relaxed text-cream/55">
                  algorithmic problems solved on LeetCode, across graphs, trees,
                  dynamic programming, and arrays.
                </p>
              </div>
              <Trophy className="h-7 w-7 text-gold/50" />
            </div>

            <div className="relative mt-8 flex h-16 items-end gap-[5px]" aria-hidden>
              {bars.map((height, index) => (
                <span
                  key={index}
                  className={`w-full rounded-t-[1px] ${
                    index > bars.length - 8
                      ? "bg-gradient-to-t from-gold/30 to-gold-bright/90"
                      : "bg-cream/10"
                  }`}
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>

            <div className="relative mt-6 flex flex-wrap gap-1.5">
              {["Graphs", "Trees", "Dynamic programming", "Arrays"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-cream/[0.08] px-2 py-1 font-mono text-[8px] uppercase tracking-[0.1em] text-cream/45"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="relative mt-auto flex items-end justify-between gap-4 border-t border-cream/[0.08] pt-5">
              <ul className="space-y-1.5">
                {achievements.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[11px] text-cream/50">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold/60" />
                    {item}
                  </li>
                ))}
              </ul>
              {leetcode && (
                <a
                  href={leetcode.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex shrink-0 items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-cream/60 transition-colors hover:text-gold-bright"
                >
                  Profile
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </div>

          <div
            className="flex flex-col gap-4"
            data-reveal
            style={{ "--reveal-delay": "100ms" } as React.CSSProperties}
          >
            {certificates.map((certificate) => (
              <div
                key={certificate.name}
                className="group rounded-2xl border border-gold/20 bg-gold/[0.04] p-6 transition-colors hover:border-gold/40"
              >
                <div className="flex items-center justify-between">
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-gold/70">
                    Professional certificate
                  </p>
                  <Trophy className="h-4 w-4 text-gold/60" />
                </div>
                <h3 className="mt-4 text-balance font-display text-2xl leading-tight tracking-tight text-cream">
                  {certificate.name}
                </h3>
                <p className="mt-2 text-[12px] text-cream/55">{certificate.issuer}</p>
                <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
                  {certificate.period}
                </p>
              </div>
            ))}

            <div className="flex-1 rounded-2xl border border-cream/[0.08] bg-surface/40 p-6">
              <div className="flex items-center justify-between">
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
                  Education
                </p>
                <Graduation className="h-4 w-4 text-cream/40" />
              </div>
              <div className="mt-5 divide-y divide-cream/[0.07]">
                {education.map((entry) => (
                  <div key={entry.degree} className="py-4 first:pt-0 last:pb-0">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-balance font-display text-[1.35rem] leading-tight tracking-tight text-cream/90">
                        {entry.degree}
                      </h3>
                      <span className="shrink-0 rounded-full border border-gold/20 bg-gold/[0.06] px-2 py-1 font-mono text-[8px] uppercase tracking-[0.08em] text-gold/80">
                        {entry.result}
                      </span>
                    </div>
                    <p className="mt-1.5 text-[11.5px] text-cream/45">{entry.school}</p>
                    <p className="mt-1.5 font-mono text-[8px] uppercase tracking-[0.14em] text-muted">
                      {entry.period}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
