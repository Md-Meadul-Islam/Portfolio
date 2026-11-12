import type { Metadata } from "next";
import Link from "next/link";
import {
  achievements,
  bragMetrics,
  certificates,
  education,
  impactStories,
  principles,
  profile,
  skillGroups,
  skillMatrix,
} from "@/lib/resume";
import { MedalScene } from "@/components/three/medal-scene";
import { PrintButton } from "@/components/brag/print-button";
import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Trophy,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Brag Sheet",
  description:
    "A working record of what Md. Meadul Islam has built: impact stories, skill depth, and verifiable evidence.",
};

const sheetSections = [
  { href: "#snapshot", label: "Snapshot" },
  { href: "#impact", label: "Impact ledger" },
  { href: "#principles", label: "How I work" },
  { href: "#depth", label: "Skill depth" },
  { href: "#evidence", label: "Evidence" },
];

function SheetSection({
  id,
  index,
  title,
  note,
  children,
}: {
  id: string;
  index: string;
  title: string;
  note: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-36 border-t border-[#161511]/15 pt-8">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-[9px] tracking-[0.16em] text-[#8a6420]">
            {index}
          </span>
          <h2 className="font-display text-[1.9rem] leading-none tracking-tight text-[#161511]">
            {title}
          </h2>
        </div>
        <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#8a8171]">
          {note}
        </p>
      </div>
      <div className="mt-6">{children}</div>
    </section>
  );
}

export default function BragSheetPage() {
  return (
    <>
      <section className="no-print relative isolate overflow-hidden pb-16 pt-28 sm:pt-32 lg:pt-36">
        <div aria-hidden className="absolute inset-0 bg-grid opacity-60" />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-[16%] top-0 h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(214,176,109,0.14),transparent_64%)] blur-2xl"
        />

        <div className="container-x relative">
          <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
            <Link href="/" className="transition-colors hover:text-cream">
              Home
            </Link>
            <span className="text-cream/25">/</span>
            <span className="text-gold/80">Brag sheet</span>
          </div>

          <div className="mt-8 grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="eyebrow">Document 01 · Updated Nov 2026</p>
              <h1 className="mt-6 font-display text-[clamp(3.4rem,8vw,6.6rem)] leading-[0.86] tracking-tightest text-cream">
                The
                <span className="block italic text-gold-bright">brag sheet.</span>
              </h1>
              <p className="mt-7 max-w-lg text-pretty text-[15px] leading-relaxed text-cream/60 sm:text-base">
                A working record of what I&apos;ve built, what it changed, and the
                evidence behind it. Specific, verifiable, and short — the way
                I&apos;d want to read a candidate&apos;s.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <PrintButton />
                <a href={profile.resume} download className="btn-ghost">
                  <Download className="h-4 w-4" />
                  Original résumé
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="group inline-flex items-center gap-1.5 px-2 font-mono text-[9px] uppercase tracking-[0.16em] text-cream/45 transition-colors hover:text-gold-bright"
                >
                  <Mail className="h-3.5 w-3.5" />
                  Email
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-cream/[0.08] pt-5 font-mono text-[9px] uppercase tracking-[0.15em] text-muted">
                <span>4 impact stories</span>
                <span className="h-1 w-1 rounded-full bg-gold/50" />
                <span>120+ problems solved</span>
                <span className="h-1 w-1 rounded-full bg-gold/50" />
                <span>20K+ products indexed</span>
              </div>
            </div>

            <div className="relative mx-auto aspect-square w-full max-w-[32rem] lg:max-w-none">
              <div
                aria-hidden
                className="absolute inset-[10%] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(214,176,109,0.2),transparent_66%)] blur-xl"
              />
              <div
                aria-hidden
                className="absolute left-1/2 top-1/2 h-[62%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_34%_26%,#fff3d2,#d9b25f_36%,#6c4f21_72%,#191307)] opacity-20 blur-[1px]"
              />
              <div className="absolute inset-0">
                <MedalScene />
              </div>

              <div className="pointer-events-none absolute left-0 top-[16%] rounded-xl glass px-3.5 py-2.5">
                <span className="block font-display text-xl leading-none text-gold-bright">
                  120+
                </span>
                <span className="mt-1 block font-mono text-[7px] uppercase tracking-[0.16em] text-cream/50">
                  problems solved
                </span>
              </div>
              <div className="pointer-events-none absolute right-0 top-[42%] rounded-xl glass px-3.5 py-2.5 text-right">
                <span className="block font-display text-xl leading-none text-cream">
                  20K+
                </span>
                <span className="mt-1 block font-mono text-[7px] uppercase tracking-[0.16em] text-cream/50">
                  vectors indexed
                </span>
              </div>
              <div className="pointer-events-none absolute bottom-[13%] left-[4%] rounded-xl glass px-3.5 py-2.5">
                <span className="block font-display text-xl leading-none text-cream">
                  3
                </span>
                <span className="mt-1 block font-mono text-[7px] uppercase tracking-[0.16em] text-cream/50">
                  products shipped
                </span>
              </div>
              <p className="absolute bottom-1 right-1 font-mono text-[8px] uppercase tracking-[0.2em] text-cream/30">
                Live 3D · move cursor
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="no-print sticky top-[4.6rem] z-40 border-y border-cream/[0.08] bg-ink/85 backdrop-blur-xl">
        <div className="container-x flex h-12 items-center justify-between gap-4">
          <nav
            aria-label="Brag sheet sections"
            className="flex items-center gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {sheetSections.map((section) => (
              <a
                key={section.href}
                href={section.href}
                className="shrink-0 rounded-full px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-cream/45 transition-colors hover:bg-cream/[0.04] hover:text-cream"
              >
                {section.label}
              </a>
            ))}
          </nav>
          <a
            href={profile.resume}
            download
            className="hidden shrink-0 items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-cream/45 transition-colors hover:text-gold-bright sm:inline-flex"
          >
            <Download className="h-3 w-3" />
            PDF
          </a>
        </div>
      </div>

      <section className="relative bg-coal/50 pb-24 pt-10 md:pb-32 print:bg-white print:pb-0 print:pt-0">
        <div className="container-x">
          <div className="paper relative mx-auto max-w-[1040px] overflow-hidden rounded-[5px] px-5 py-9 shadow-[0_50px_140px_-40px_rgba(0,0,0,0.95)] sm:px-10 sm:py-12 lg:px-14 print:max-w-none print:rounded-none print:px-0 print:py-0 print:shadow-none">
            <div
              aria-hidden
              className="absolute right-0 top-0 h-16 w-16 bg-[linear-gradient(225deg,rgba(22,21,17,0.09)_50%,transparent_50%)] print:hidden"
            />

            <header className="flex flex-col gap-6 border-b-2 border-[#161511]/80 pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex items-start gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#161511]/20 bg-[#161511] font-display text-lg text-[#f2ede2]">
                  MI
                </span>
                <div>
                  <p className="font-display text-[2rem] leading-none tracking-tight text-[#161511]">
                    {profile.name}
                  </p>
                  <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.16em] text-[#6b665a]">
                    {profile.title} · {profile.location}
                  </p>
                  <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.12em] text-[#8a8171]">
                    {profile.email} · {profile.phone}
                  </p>
                </div>
              </div>
              <div className="flex items-end justify-between gap-5 sm:flex-col sm:items-end">
                <div className="text-left font-mono text-[8px] uppercase leading-relaxed tracking-[0.14em] text-[#8a8171] sm:text-right">
                  <p>Document / 01</p>
                  <p>Updated Nov 2026</p>
                </div>
                <span className="stamp">Proof of work</span>
              </div>
            </header>

            <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 py-3 font-mono text-[8px] uppercase tracking-[0.1em] text-[#6b665a]">
              <a
                href="https://github.com/Md-Meadul-Islam"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1 hover:text-[#161511]"
              >
                <Github className="h-3 w-3" />
                github.com/Md-Meadul-Islam
              </a>
              <span className="hidden h-2.5 w-px bg-[#161511]/15 sm:block" />
              <a
                href="https://www.linkedin.com/in/md-meadul-islam-497738178"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1 hover:text-[#161511]"
              >
                <Linkedin className="h-3 w-3" />
                linkedin/md-meadul-islam
              </a>
              <span className="hidden h-2.5 w-px bg-[#161511]/15 sm:block" />
              <a
                href="https://leetcode.com/u/mdmeadulislam/"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1 hover:text-[#161511]"
              >
                leetcode/u/mdmeadulislam
              </a>
            </div>

            <div className="mt-6 space-y-10">
              <SheetSection
                id="snapshot"
                index="01"
                title="At a glance"
                note="The short version"
              >
                <div className="grid grid-cols-2 divide-y divide-[#161511]/10 border-y border-[#161511]/15 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
                  {bragMetrics.map((metric) => (
                    <div key={metric.label} className="px-1 py-5 sm:px-5">
                      <p className="font-display text-[2.6rem] leading-none tracking-tight text-[#161511]">
                        {metric.value}
                      </p>
                      <p className="mt-2 text-[11px] font-medium text-[#3e3a32]">
                        {metric.label}
                      </p>
                      <p className="mt-1 font-mono text-[7.5px] uppercase tracking-[0.1em] text-[#8a8171]">
                        {metric.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </SheetSection>

              <SheetSection
                id="impact"
                index="02"
                title="Impact ledger"
                note="Problem → action → receipt"
              >
                <div className="space-y-0">
                  {impactStories.map((story) => (
                    <article
                      key={story.id}
                      className="print-break-avoid border-t border-[#161511]/12 py-7 first:border-t-0 first:pt-0"
                    >
                      <div className="flex gap-4">
                        <span className="mt-1 shrink-0 font-display text-[1.35rem] leading-none text-[#8a6420]">
                          {story.id}
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                            <h3 className="text-balance font-display text-[1.55rem] leading-tight tracking-tight text-[#161511]">
                              {story.title}
                            </h3>
                            <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-[#8a8171]">
                              {story.project}
                            </span>
                          </div>

                          <div className="mt-4 grid gap-4 sm:grid-cols-3">
                            <div>
                              <p className="font-mono text-[7.5px] uppercase tracking-[0.16em] text-[#8a8171]">
                                Problem
                              </p>
                              <p className="mt-1.5 text-[11.5px] leading-relaxed text-[#514c43]">
                                {story.problem}
                              </p>
                            </div>
                            <div>
                              <p className="font-mono text-[7.5px] uppercase tracking-[0.16em] text-[#8a8171]">
                                Action
                              </p>
                              <p className="mt-1.5 text-[11.5px] leading-relaxed text-[#514c43]">
                                {story.action}
                              </p>
                            </div>
                            <div className="border-l-2 border-[#8a6420] bg-[#e7dcc4]/70 px-3 py-2">
                              <p className="font-mono text-[7.5px] uppercase tracking-[0.16em] text-[#8a6420]">
                                Receipt
                              </p>
                              <p className="mt-1.5 text-[11.5px] font-medium leading-relaxed text-[#2b2822]">
                                {story.receipt}
                              </p>
                            </div>
                          </div>

                          <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
                            {story.tags.map((tag) => (
                              <span
                                key={tag}
                                className="font-mono text-[7.5px] uppercase tracking-[0.1em] text-[#8a8171]"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </SheetSection>

              <SheetSection
                id="principles"
                index="03"
                title="How I work"
                note="Operating principles"
              >
                <div className="grid gap-6 border-y border-[#161511]/15 py-6 sm:grid-cols-3">
                  {principles.map((principle, index) => (
                    <div key={principle.title} className="print-break-avoid">
                      <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-[#8a8171]">
                        0{index + 1}
                      </p>
                      <h3 className="mt-2 text-balance font-display text-[1.35rem] leading-tight text-[#161511]">
                        {principle.title}
                      </h3>
                      <p className="mt-2 text-[11.5px] leading-relaxed text-[#514c43]">
                        {principle.body}
                      </p>
                    </div>
                  ))}
                </div>
              </SheetSection>

              <SheetSection
                id="depth"
                index="04"
                title="Skill depth"
                note="What I reach for, and how deep"
              >
                <div className="grid gap-8 lg:grid-cols-2">
                  <div className="space-y-3.5">
                    {skillMatrix.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex items-baseline justify-between gap-3">
                          <span className="text-[11px] font-medium text-[#3e3a32]">
                            {skill.name}
                          </span>
                          <span className="font-mono text-[8px] tracking-[0.08em] text-[#8a8171]">
                            {skill.level}
                          </span>
                        </div>
                        <div className="mt-1.5 h-[3px] w-full bg-[#161511]/10">
                          <div
                            className="h-full bg-[#161511]"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                    <p className="pt-2 font-mono text-[7.5px] uppercase tracking-[0.1em] text-[#8a8171]">
                      Self-assessed, calibrated by shipped work
                    </p>
                  </div>

                  <div>
                    <div className="divide-y divide-[#161511]/10 border-y border-[#161511]/15">
                      {skillGroups.map((group) => (
                        <div key={group.label} className="grid grid-cols-[6.5rem_1fr] gap-3 py-2.5">
                          <p className="font-mono text-[7.5px] uppercase leading-relaxed tracking-[0.1em] text-[#8a8171]">
                            {group.label}
                          </p>
                          <p className="text-[10.5px] leading-relaxed text-[#514c43]">
                            {group.items.join(" · ")}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </SheetSection>

              <SheetSection
                id="evidence"
                index="05"
                title="Evidence"
                note="The verifiable parts"
              >
                <div className="grid gap-8 sm:grid-cols-2">
                  <div>
                    <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-[#8a8171]">
                      Achievements
                    </p>
                    <ul className="mt-3 space-y-2.5">
                      {achievements.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rotate-45 bg-[#8a6420]" />
                          <span className="text-[11.5px] leading-relaxed text-[#3e3a32]">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <p className="mt-7 font-mono text-[8px] uppercase tracking-[0.16em] text-[#8a8171]">
                      Certification
                    </p>
                    {certificates.map((certificate) => (
                      <div
                        key={certificate.name}
                        className="mt-3 flex items-start gap-3 border-l-2 border-[#8a6420] pl-3"
                      >
                        <Trophy className="mt-0.5 h-4 w-4 shrink-0 text-[#8a6420]" />
                        <div>
                          <p className="text-[12px] font-medium text-[#161511]">
                            {certificate.name}
                          </p>
                          <p className="mt-0.5 text-[10.5px] text-[#6b665a]">
                            {certificate.issuer}
                          </p>
                          <p className="mt-0.5 font-mono text-[7.5px] uppercase tracking-[0.1em] text-[#8a8171]">
                            {certificate.period}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div>
                    <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-[#8a8171]">
                      Education
                    </p>
                    <div className="mt-3 divide-y divide-[#161511]/10 border-y border-[#161511]/15">
                      {education.map((entry) => (
                        <div key={entry.degree} className="py-4">
                          <div className="flex items-start justify-between gap-3">
                            <p className="text-balance text-[12px] font-medium leading-snug text-[#161511]">
                              {entry.degree}
                            </p>
                            <span className="shrink-0 font-mono text-[7.5px] uppercase tracking-[0.08em] text-[#8a6420]">
                              {entry.result}
                            </span>
                          </div>
                          <p className="mt-1 text-[10.5px] text-[#6b665a]">
                            {entry.school}
                          </p>
                          <p className="mt-1 font-mono text-[7.5px] uppercase tracking-[0.1em] text-[#8a8171]">
                            {entry.period}
                          </p>
                        </div>
                      ))}
                    </div>

                    <p className="mt-6 border border-[#161511]/15 p-3 text-[10px] leading-relaxed text-[#6b665a]">
                      References and project walkthroughs available on request.
                      Code samples for the AI search and recommendation work can
                      be shared in a technical interview.
                    </p>
                  </div>
                </div>
              </SheetSection>
            </div>

            <div className="mt-10 flex flex-col justify-between gap-6 border-t-2 border-[#161511]/80 pt-6 sm:flex-row sm:items-end">
              <div>
                <p className="font-display text-[1.8rem] italic leading-none text-[#161511]">
                  Md. Meadul Islam
                </p>
                <p className="mt-2 font-mono text-[7.5px] uppercase tracking-[0.14em] text-[#8a8171]">
                  Backend & AI engineer · Dhaka, Bangladesh
                </p>
              </div>
              <div className="font-mono text-[8px] uppercase leading-relaxed tracking-[0.1em] text-[#6b665a] sm:text-right">
                <p>{profile.email}</p>
                <p>{profile.phone}</p>
                <p className="mt-1 text-[#8a8171]">
                  End of document · Sheet 01 of 01
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
