import { SectionHeading } from "@/components/section-heading";
import { Sparkle } from "@/components/icons";
import { profile } from "@/lib/resume";

const snapshot = [
  { label: "Based in", value: "Dhaka, Bangladesh" },
  { label: "Focus", value: "AI search · RecSys · Backend architecture" },
  { label: "Last role", value: "Backend Engineer, Ai2 Technologies" },
  { label: "Education", value: "B.Sc. CSE, Sonargaon University" },
  { label: "Algorithms", value: "120+ LeetCode problems solved" },
  { label: "Certified", value: "Complete AI/ML — Apna College" },
];

const focus = [
  "LLM systems",
  "Recommendation engines",
  "Real-time infrastructure",
  "Query optimization",
];

export function About() {
  return (
    <section id="about" className="section-pad relative scroll-mt-24">
      <div className="container-x">
        <SectionHeading
          index="01"
          label="Profile"
          title={
            <>
              Backend depth,
              <span className="block italic text-gold-bright">AI instinct.</span>
            </>
          }
          description="A backend engineer who treats AI as an engineering problem: data in, retrieval, evaluation, latency — and a product at the other end."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div className="space-y-6" data-reveal>
            <p className="text-pretty text-lg leading-relaxed text-cream/75 sm:text-xl">
              I started on the backend and stayed there on purpose. Most AI
              products succeed or fail on the unglamorous layer:{" "}
              <span className="text-cream">
                retrieval, data freshness, query cost, and the contract between
                the model and the product.
              </span>
            </p>
            <p className="text-pretty text-[15px] leading-relaxed text-cream/55">
              At Ai2 Technologies I built an MCP server and LLM chatbot for
              product search, an embeddings-based recommender over a 20K+
              product catalogue, a local LLM data crawler with scheduled
              updates, and the real-time backend for a ride-sharing platform. I
              also maintained the parent API powering the company&apos;s CMS and
              e-commerce clients.
            </p>
            <p className="text-pretty text-[15px] leading-relaxed text-cream/55">
              I&apos;m deepening the ML side — PyTorch, model evaluation, RAG —
              while shipping systems a business can actually run on.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {focus.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-cream/10 bg-cream/[0.02] px-3.5 py-2 font-mono text-[9px] uppercase tracking-[0.14em] text-cream/60"
                >
                  <span className="h-1 w-1 rounded-full bg-gold" />
                  {item}
                </span>
              ))}
            </div>

            <figure className="mt-10 border-l border-gold/40 pl-6">
              <blockquote className="font-display text-2xl italic leading-snug text-cream/80 sm:text-[1.75rem]">
                “A model is only as good as the system around it.”
              </blockquote>
              <figcaption className="mt-3 font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
                My working principle
              </figcaption>
            </figure>
          </div>

          <aside
            className="relative self-start rounded-2xl border border-cream/10 bg-gradient-to-b from-surface/80 to-ink p-6 sm:p-7"
            data-reveal
            style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
          >
            <div className="flex items-center justify-between">
              <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-muted">
                Snapshot
              </p>
              <Sparkle className="h-4 w-4 text-gold/70" />
            </div>
            <div className="mt-5">
              <p className="font-display text-3xl tracking-tight text-cream">
                {profile.name}
              </p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-gold/80">
                {profile.title}
              </p>
            </div>

            <dl className="mt-7 space-y-4 border-t border-cream/[0.08] pt-6">
              {snapshot.map((item) => (
                <div
                  key={item.label}
                  className="grid grid-cols-[5.5rem_1fr] gap-3 text-[12px] leading-relaxed"
                >
                  <dt className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
                    {item.label}
                  </dt>
                  <dd className="text-cream/75">{item.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-7 flex items-center justify-between rounded-xl border border-gold/15 bg-gold/[0.04] px-4 py-3">
              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-gold/80">
                Latest signal
              </span>
              <span className="text-[11px] text-cream/60">AI/ML certified · 2026</span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
