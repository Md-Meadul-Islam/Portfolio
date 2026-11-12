"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { profile } from "@/lib/resume";
import { ArrowUpRight, Close, Download, Menu } from "@/components/icons";

const links = [
  { href: "/#work", label: "Work", id: "work" },
  { href: "/#experience", label: "Experience", id: "experience" },
  { href: "/#skills", label: "Skills", id: "skills" },
  { href: "/brag-sheet", label: "Brag Sheet", id: "brag" },
];

export function SiteNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24);
        const height =
          document.documentElement.scrollHeight - window.innerHeight;
        setProgress(height > 0 ? Math.min(window.scrollY / height, 1) : 0);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-[2px]">
        <div
          className="h-full bg-gold origin-left transition-transform duration-150"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      <header className="fixed inset-x-0 top-0 z-[60] px-3 pt-3 sm:px-5 sm:pt-4">
        <nav
          aria-label="Primary"
          className={`container-x flex h-14 items-center justify-between rounded-full border px-3 transition-all duration-500 sm:px-4 ${
            scrolled
              ? "border-cream/10 bg-ink/75 shadow-[0_18px_60px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl"
              : "border-transparent bg-transparent"
          }`}
        >
          <Link
            href="/"
            className="group flex items-center gap-3 rounded-full pr-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
            aria-label={`${profile.name} — home`}
          >
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-gold/45 bg-gold/[0.06] font-display text-[15px] text-gold-bright transition-colors group-hover:border-gold group-hover:bg-gold/10">
              {profile.monogram}
              <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_10px_rgba(214,176,109,0.9)]" />
            </span>
            <span className="text-[13px] font-medium tracking-tight text-cream/90">
              Meadul Islam
              <span className="ml-2 hidden font-mono text-[9px] uppercase tracking-[0.18em] text-muted sm:inline">
                Backend · AI
              </span>
            </span>
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((link) => {
              const active = pathname === "/brag-sheet" && link.id === "brag";
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative rounded-full px-3.5 py-2 text-[12px] tracking-tight transition-colors ${
                      active
                        ? "text-gold-bright"
                        : "text-cream/60 hover:text-cream"
                    }`}
                  >
                    {link.label}
                    {active && (
                      <span className="absolute inset-x-3.5 -bottom-0.5 h-px bg-gold/70" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={profile.resume}
              download
              className="group hidden items-center gap-2 rounded-full border border-cream/15 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-cream/80 transition-all hover:border-gold/60 hover:text-gold-bright sm:inline-flex"
            >
              <Download className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
              Resume
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="group hidden items-center gap-1.5 rounded-full bg-cream px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-ink transition-colors hover:bg-gold-bright lg:inline-flex"
            >
              Let&apos;s talk
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-cream transition-colors hover:border-gold/50 hover:text-gold-bright md:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <Close /> : <Menu />}
            </button>
          </div>
        </nav>
      </header>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[55] transition-all duration-500 md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-ink/96 backdrop-blur-2xl" />
        <div className="relative flex h-full flex-col justify-between px-6 pb-10 pt-24">
          <ul className="space-y-1">
            {links.map((link, index) => (
              <li
                key={link.href}
                className={`border-b border-cream/[0.07] transition-all duration-500 ${
                  open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: open ? `${100 + index * 60}ms` : "0ms" }}
              >
                <Link
                  href={link.href}
                  className="group flex items-baseline justify-between py-4"
                >
                  <span className="font-display text-[2.35rem] leading-none tracking-tight text-cream">
                    {link.label}
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-gold/60">
                    0{index + 1}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="space-y-5">
            <a
              href={profile.resume}
              download
              className="btn-gold w-full"
            >
              <Download className="h-4 w-4" />
              Download resume
            </a>
            <div className="flex items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
              <a
                href={`mailto:${profile.email}`}
                className="link-underline min-w-0 truncate"
              >
                {profile.email}
              </a>
              <span className="shrink-0">{profile.location}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
