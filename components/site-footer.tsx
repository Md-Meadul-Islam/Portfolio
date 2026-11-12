import Link from "next/link";
import { profile } from "@/lib/resume";
import { ArrowUpRight } from "@/components/icons";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-cream/[0.08]">
      <div className="container-x pb-10 pt-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="eyebrow">// End of transmission</p>
            <p className="mt-5 max-w-xs font-display text-[2rem] leading-[1.05] tracking-tight text-cream">
              Good systems are quiet.
              <span className="block italic text-gold/90">Great ones get noticed.</span>
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.08em] text-cream/70 transition-colors hover:text-gold-bright"
            >
              {profile.email}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
              Index
            </p>
            <ul className="mt-4 space-y-2.5 text-[13px]">
              {[
                { href: "/#work", label: "Selected work" },
                { href: "/#experience", label: "Experience" },
                { href: "/#skills", label: "Skills" },
                { href: "/brag-sheet", label: "Brag sheet" },
                { href: profile.resume, label: "Résumé (PDF)" },
              ].map((item) => (
                <li key={item.href}>
                  {item.href.startsWith("/") && !item.href.endsWith(".pdf") ? (
                    <Link href={item.href} className="link-underline">
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      download={item.href.endsWith(".pdf")}
                      className="link-underline"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
              Elsewhere
            </p>
            <ul className="mt-4 space-y-2.5 text-[13px]">
              {profile.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="link-underline inline-flex items-center gap-1.5"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-50" />
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
              {profile.location}
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-cream/[0.07] pt-6 font-mono text-[10px] uppercase tracking-[0.14em] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <p className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
            Built with Next.js · Three.js · Tailwind
          </p>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none select-none overflow-hidden border-t border-cream/[0.05]"
      >
        <p className="-mb-[0.24em] whitespace-nowrap text-center font-display text-[19vw] leading-none tracking-tightest text-cream/[0.035]">
          MEADUL
        </p>
      </div>
    </footer>
  );
}
