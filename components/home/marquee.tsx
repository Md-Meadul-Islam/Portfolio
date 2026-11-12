import { marqueeItems } from "@/lib/resume";

export function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="marquee relative border-y border-cream/[0.08] bg-coal/40 py-4">
      <div className="fade-edges overflow-hidden">
        <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
          {items.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="flex items-center gap-10 font-mono text-[10px] uppercase tracking-[0.2em] text-cream/40"
              aria-hidden={index >= marqueeItems.length}
            >
              {item}
              <span className="h-1 w-1 rotate-45 bg-gold/50" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
