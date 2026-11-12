"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("[data-reveal]"));
    if (!elements.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    let frame = 0;

    const revealInView = () => {
      const viewportHeight = window.innerHeight || 800;
      elements.forEach((el) => {
        if (el.classList.contains("is-visible")) return;
        const rect = el.getBoundingClientRect();
        if (rect.top < viewportHeight * 0.96 && rect.bottom > 0) {
          el.classList.add("is-visible");
        }
      });
    };

    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(revealInView);
    };

    const observer =
      typeof IntersectionObserver !== "undefined"
        ? new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  entry.target.classList.add("is-visible");
                  observer?.unobserve(entry.target);
                }
              });
            },
            { rootMargin: "0px 0px 4% 0px", threshold: 0.01 },
          )
        : null;

    elements.forEach((el) => observer?.observe(el));

    const initial = window.setTimeout(revealInView, 120);
    const fallback = window.setTimeout(revealInView, 900);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      observer?.disconnect();
      cancelAnimationFrame(frame);
      window.clearTimeout(initial);
      window.clearTimeout(fallback);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [pathname]);

  return null;
}
