"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Anima um número de 0 até o valor final quando entra na tela.
 * Aceita prefixo/sufixo: "120+", "8,4x", "97%". Mantém a vírgula decimal.
 */
export default function CountUp({
  value,
  duration = 1600,
}: {
  value: string;
  duration?: number;
}) {
  const match = value.match(/^(\D*)([\d.,]+)(.*)$/);
  const ref = useRef<HTMLSpanElement>(null);
  const done = useRef(false);
  const [display, setDisplay] = useState(
    match ? `${match[1]}0${match[3]}` : value
  );

  useEffect(() => {
    if (!match) return;
    const prefix = match[1];
    const numStr = match[2];
    const suffix = match[3];
    const hasComma = numStr.includes(",");
    const decimals = (numStr.split(/[.,]/)[1] || "").length;
    const target = parseFloat(numStr.replace(/\./g, "").replace(",", "."));

    const format = (n: number) => {
      let s = decimals > 0 ? n.toFixed(decimals) : Math.round(n).toString();
      if (hasComma) s = s.replace(".", ",");
      return `${prefix}${s}${suffix}`;
    };

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDisplay(format(target));
      return;
    }

    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !done.current) {
            done.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
              setDisplay(format(target * eased));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration, match]);

  return <span ref={ref}>{display}</span>;
}
