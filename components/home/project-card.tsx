"use client";

import { useRef, type PointerEvent } from "react";
import { ArrowUpRight, Check } from "@/components/icons";
import type { projects } from "@/lib/resume";

type Project = (typeof projects)[number];

function UkbdVisual() {
  const dots = [
    { top: "12%", left: "24%" },
    { top: "28%", right: "10%" },
    { bottom: "16%", left: "18%" },
    { bottom: "26%", right: "18%" },
  ];

  return (
    <div className="relative flex h-full min-h-[300px] items-center justify-center overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(214,176,109,0.16),transparent_62%)]"
      />
      <div
        className="relative flex h-60 w-60 items-center justify-center sm:h-64 sm:w-64"
        style={{ transform: "translateZ(34px)" }}
      >
        <div className="absolute inset-0 rounded-full border border-cream/10" />
        <div className="absolute inset-5 animate-spin-slow rounded-full border border-dashed border-gold/25" />
        <div className="absolute inset-12 rounded-full border border-cream/[0.07]" />
        <div className="absolute inset-[4.5rem] rounded-full border border-gold/20" />

        <div className="relative flex h-20 w-20 flex-col items-center justify-center rounded-full border border-gold/30 bg-[radial-gradient(circle_at_34%_26%,#fff8ec,#d9bc83_38%,#785a2c_78%,#1c1710)] shadow-[0_20px_60px_-18px_rgba(214,176,109,0.65)]">
          <span className="font-display text-[1.35rem] leading-none text-[#1a1409]">
            20K
          </span>
          <span className="mt-0.5 font-mono text-[6px] uppercase tracking-[0.18em] text-[#3d3018]">
            vectors
          </span>
        </div>

        {dots.map((dot, index) => (
          <span
            key={index}
            className="absolute h-2 w-2 rounded-full border border-gold/50 bg-gold/20"
            style={dot}
          />
        ))}

        <svg
          aria-hidden
          viewBox="0 0 240 240"
          className="absolute inset-0 h-full w-full text-gold/20"
        >
          <path d="M52 42 120 120 210 74 58 190 120 120 198 186" fill="none" stroke="currentColor" strokeWidth="0.6" />
        </svg>
      </div>

      <div className="absolute left-5 top-5 flex items-center gap-2 font-mono text-[7px] uppercase tracking-[0.2em] text-cream/35">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
        vector.index / live
      </div>
      <span className="absolute bottom-5 right-5 font-mono text-[7px] uppercase tracking-[0.2em] text-gold/50">
        semantic search
      </span>
    </div>
  );
}

function CabVisual() {
  return (
    <div className="relative flex h-full min-h-[300px] items-center justify-center overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(rgba(243,239,230,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(243,239,230,0.055)_1px,transparent_1px)] bg-[size:34px_34px] [mask-image:radial-gradient(circle_at_50%_50%,black,transparent_78%)]"
      />
      <div
        className="relative h-64 w-full max-w-[280px]"
        style={{ transform: "translateZ(28px)" }}
      >
        <svg viewBox="0 0 280 260" className="h-full w-full" aria-hidden>
          <path
            d="M28 216c34-8 34-62 72-70s32-58 66-64 42-28 66-48"
            fill="none"
            stroke="rgba(214,176,109,0.65)"
            strokeWidth="1.4"
            strokeDasharray="5 7"
            strokeLinecap="round"
          />
          <circle cx="28" cy="216" r="5" fill="#d6b06d" />
          <circle cx="28" cy="216" r="12" fill="none" stroke="rgba(214,176,109,0.35)" />
          <circle cx="232" cy="34" r="5" fill="#f0d49a" />
          <circle cx="232" cy="34" r="13" fill="none" stroke="rgba(240,212,154,0.35)" />
          <circle cx="100" cy="146" r="3.5" fill="rgba(195,216,245,0.9)" />
          <circle cx="166" cy="82" r="2.5" fill="rgba(243,239,230,0.55)" />
        </svg>
        <span className="absolute left-0 bottom-2 font-mono text-[7px] uppercase tracking-[0.18em] text-gold/60">
          pickup · 14:02
        </span>
        <span className="absolute right-0 top-0 font-mono text-[7px] uppercase tracking-[0.18em] text-cream/45">
          drop · 14:26
        </span>
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cream/10 bg-ink/70 px-3 py-1.5 font-mono text-[7px] uppercase tracking-[0.18em] text-cream/70 backdrop-blur">
          socket · connected
        </span>
      </div>
      <div className="absolute left-5 top-5 flex items-center gap-2 font-mono text-[7px] uppercase tracking-[0.2em] text-cream/35">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
        realtime.dispatch
      </div>
      <span className="absolute bottom-5 right-5 font-mono text-[7px] uppercase tracking-[0.2em] text-gold/50">
        cab-finder
      </span>
    </div>
  );
}

function MessVisual() {
  return (
    <div className="relative flex h-full min-h-[300px] items-center justify-center overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(120,146,186,0.12),transparent_62%)]"
      />
      <div
        className="relative h-64 w-full max-w-[260px]"
        style={{ transform: "translateZ(30px)" }}
      >
        {[
          { top: "top-10", rotate: "-8deg", opacity: "opacity-40", z: "translateZ(-20px)" },
          { top: "top-5", rotate: "-3deg", opacity: "opacity-70", z: "translateZ(8px)" },
          { top: "top-0", rotate: "2deg", opacity: "opacity-100", z: "translateZ(40px)" },
        ].map((layer, index) => (
          <div
            key={index}
            className={`absolute inset-x-6 rounded-xl border border-cream/10 bg-gradient-to-b from-surface/90 to-ink/95 p-4 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.9)] ${layer.top} ${layer.opacity}`}
            style={{ transform: `rotate(${layer.rotate}) ${layer.z}` }}
          >
            <div className="flex items-center justify-between">
              <span className="h-2 w-16 rounded-full bg-cream/20" />
              <span className="rounded-full border border-gold/30 px-2 py-0.5 font-mono text-[6px] uppercase tracking-[0.14em] text-gold/70">
                {index === 2 ? "manager" : "member"}
              </span>
            </div>
            <div className="mt-4 space-y-2.5">
              <div className="flex items-center gap-2">
                <span className="h-4 w-4 rounded-md bg-gold/15" />
                <span className="h-1.5 flex-1 rounded-full bg-cream/10" />
                <span className="h-1.5 w-6 rounded-full bg-emerald-400/30" />
              </div>
              <div className="flex items-center gap-2">
                <span className="h-4 w-4 rounded-md bg-cream/10" />
                <span className="h-1.5 w-2/3 rounded-full bg-cream/[0.08]" />
                <span className="h-1.5 w-6 rounded-full bg-gold/25" />
              </div>
              <div className="flex items-center gap-2">
                <span className="h-4 w-4 rounded-md bg-cream/10" />
                <span className="h-1.5 w-1/2 rounded-full bg-cream/[0.08]" />
                <span className="h-1.5 w-6 rounded-full bg-cream/15" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute left-5 top-5 font-mono text-[7px] uppercase tracking-[0.2em] text-cream/35">
        role.based / approvals
      </div>
      <span className="absolute bottom-5 right-5 font-mono text-[7px] uppercase tracking-[0.2em] text-gold/50">
        mess-manager
      </span>
    </div>
  );
}

function ProjectVisual({ slug }: { slug: string }) {
  if (slug === "ukbd") return <UkbdVisual />;
  if (slug === "cab-finder") return <CabVisual />;
  return <MessVisual />;
}

export function ProjectCard({
  project,
  flip,
  delay,
}: {
  project: Project;
  flip: boolean;
  delay: number;
}) {
  const ref = useRef<HTMLElement>(null);

  const handleMove = (event: PointerEvent<HTMLElement>) => {
    const element = ref.current;
    if (!element || event.pointerType === "touch") return;
    const rect = element.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    element.style.setProperty("--ry", `${(x - 0.5) * 6}deg`);
    element.style.setProperty("--rx", `${-(y - 0.5) * 5}deg`);
    element.style.setProperty("--mx", `${x * 100}%`);
    element.style.setProperty("--my", `${y * 100}%`);
    element.classList.add("is-tilting");
  };

  const handleLeave = () => {
    const element = ref.current;
    if (!element) return;
    element.style.setProperty("--ry", "0deg");
    element.style.setProperty("--rx", "0deg");
    element.classList.remove("is-tilting");
  };

  return (
    <article
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className="tilt-card group relative overflow-hidden rounded-[26px] border border-cream/10 bg-gradient-to-br from-surface/70 via-coal to-ink"
      data-reveal
      style={
        {
          "--reveal-delay": `${delay}ms`,
        } as React.CSSProperties
      }
    >
      <div className="tilt-glare pointer-events-none absolute inset-0 z-20" />

      <div className="relative grid lg:grid-cols-[1.1fr_0.9fr]">
        <div className={`relative z-10 p-6 sm:p-9 ${flip ? "lg:order-2" : ""}`}>
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="font-display text-xl text-gold/70">{project.index}</span>
              <span className="h-3 w-px bg-cream/15" />
              <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-muted">
                {project.kind}
              </span>
            </div>
            <span className="shrink-0 whitespace-nowrap font-mono text-[8px] uppercase tracking-[0.12em] text-cream/35">
              {project.period}
            </span>
          </div>

          <h3 className="mt-5 font-display text-[2.15rem] leading-none tracking-tight text-cream sm:text-[2.6rem]">
            {project.name}
          </h3>
          <p className="mt-1.5 font-mono text-[8px] uppercase tracking-[0.16em] text-gold/60">
            {project.company}
          </p>

          <p className="mt-5 max-w-lg text-pretty text-[13px] leading-relaxed text-cream/55">
            {project.description}
          </p>

          <ul className="mt-6 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
            {project.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold/70" />
                <span className="text-[11.5px] leading-relaxed text-cream/60">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-cream/[0.08] pt-5">
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-cream/[0.08] bg-cream/[0.02] px-2 py-1 font-mono text-[8px] uppercase tracking-[0.1em] text-cream/45"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-cream/70 transition-colors hover:text-gold-bright"
              >
                {project.linkLabel}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>

        <div
          className={`relative min-h-[280px] border-t border-cream/[0.08] bg-ink/40 lg:min-h-0 lg:border-l lg:border-t-0 ${
            flip ? "lg:order-1 lg:border-l-0 lg:border-r" : ""
          }`}
          style={{ transformStyle: "preserve-3d" }}
        >
          <ProjectVisual slug={project.slug} />
        </div>
      </div>
    </article>
  );
}
