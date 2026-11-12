import { profile } from "@/lib/resume";
import { CopyEmail } from "@/components/copy-email";
import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Code,
  Mail,
  MapPin,
  Phone,
  Terminal,
} from "@/components/icons";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  code: Code,
  terminal: Terminal,
} as const;

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 pb-24 pt-4 md:pb-32">
      <div className="container-x">
        <div
          className="relative overflow-hidden rounded-[28px] border border-gold/20 bg-gradient-to-br from-[#15130e] via-coal to-ink px-6 py-12 sm:px-10 sm:py-16 lg:px-16"
          data-reveal
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(243,239,230,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(243,239,230,0.035)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(circle_at_70%_50%,black,transparent_75%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(214,176,109,0.18),transparent_66%)] blur-2xl"
          />

          <div
            aria-hidden
            className="pointer-events-none absolute bottom-8 right-10 hidden h-64 w-64 lg:block"
          >
            <div className="absolute inset-4 rounded-full bg-[radial-gradient(circle_at_30%_24%,#fff8e8,#e7c783_30%,#a67c34_62%,#2c200d_92%)] shadow-[inset_-18px_-24px_45px_rgba(30,20,5,0.55),0_40px_80px_-20px_rgba(0,0,0,0.9)]" />
            <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-gold/20" />
            <div className="absolute -inset-5 rounded-full border border-gold/10" />
          </div>

          <div className="relative max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] tracking-[0.2em] text-gold">06</span>
              <span className="h-px w-8 bg-cream/20" />
              <span className="eyebrow">Contact</span>
            </div>

            <h2 className="mt-6 text-balance font-display text-[clamp(2.6rem,5.6vw,4.8rem)] leading-[0.94] tracking-tight text-cream">
              Let&apos;s build
              <span className="block italic text-gold-bright">
                something that thinks.
              </span>
            </h2>

            <p className="mt-6 max-w-md text-pretty text-[14px] leading-relaxed text-cream/55">
              Backend that needs AI, or an AI product that needs a backend — I&apos;d
              like to hear about the hard part. I reply fastest by email.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a href={`mailto:${profile.email}`} className="btn-gold group">
                <Mail className="h-4 w-4" />
                Email me
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <CopyEmail />
              <a
                href={profile.resume}
                download
                className="inline-flex items-center gap-2 px-2 py-3 font-mono text-[9px] uppercase tracking-[0.16em] text-cream/45 transition-colors hover:text-cream"
              >
                <Download className="h-3.5 w-3.5" />
                Résumé PDF
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-cream/[0.08] pt-6 font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
              <a
                href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-cream"
              >
                <Phone className="h-3.5 w-3.5 text-gold/60" />
                {profile.phone}
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-gold/60" />
                {profile.location}
              </span>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              {profile.links.map((link) => {
                const Icon = iconMap[link.icon as keyof typeof iconMap] ?? Github;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-full border border-cream/10 px-3.5 py-2 text-[11px] text-cream/60 transition-colors hover:border-gold/40 hover:text-gold-bright"
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
