import type { ReactNode } from "react";

export function SectionHeading({
  index,
  label,
  title,
  description,
  action,
}: {
  index: string;
  label: string;
  title: ReactNode;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div
      className="flex flex-col gap-7 border-t border-cream/10 pt-7 md:flex-row md:items-end md:justify-between"
      data-reveal
    >
      <div>
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] tracking-[0.2em] text-gold">
            {index}
          </span>
          <span className="h-px w-8 bg-cream/20" />
          <span className="eyebrow">{label}</span>
        </div>
        <h2 className="mt-5 text-balance font-display text-[clamp(2.35rem,4.6vw,4rem)] leading-[0.98] tracking-tight text-cream">
          {title}
        </h2>
      </div>
      <div className="flex shrink-0 flex-col gap-4 md:items-end">
        {description && (
          <p className="max-w-sm text-pretty text-[13.5px] leading-relaxed text-cream/50 md:text-right">
            {description}
          </p>
        )}
        {action}
      </div>
    </div>
  );
}
