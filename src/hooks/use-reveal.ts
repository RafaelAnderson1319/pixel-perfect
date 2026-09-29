import { useEffect, useRef, useState } from "react";

/**
 * Adds a fade-in + slide-up entrance once the element scrolls into view.
 * Usage: const { ref, className } = useReveal(); <div ref={ref} className={className} />
 */
export function useReveal(delayMs = 0) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return {
    ref,
    className: visible ? "reveal reveal-visible" : "reveal",
    style: { transitionDelay: `${delayMs}ms` },
  };
}
