"use client";

import { useEffect } from "react";

const CLARITY_ID = "x7zng8vw0o";
const COOKIE_NAME = "rp_cookie_consent";

function consentAccepted() {
  return document.cookie
    .split("; ")
    .some((c) => c === `${COOKIE_NAME}=accepted`);
}

function loadClarity() {
  // Evita carregar duas vezes
  if (typeof window === "undefined") return;
  const w = window as unknown as { clarity?: unknown };
  if (w.clarity) return;

  (function (c: Record<string, unknown>, l: Document, a: string, r: string, i: string) {
    c[a] =
      c[a] ||
      function (...args: unknown[]) {
        ((c[a] as { q?: unknown[] }).q =
          (c[a] as { q?: unknown[] }).q || []).push(args);
      };
    const t = l.createElement(r) as HTMLScriptElement;
    t.async = true;
    t.src = "https://www.clarity.ms/tag/" + i;
    const y = l.getElementsByTagName(r)[0];
    y.parentNode?.insertBefore(t, y);
  })(window as unknown as Record<string, unknown>, document, "clarity", "script", CLARITY_ID);
}

/**
 * Carrega o Microsoft Clarity (heatmap/gravação de sessão) apenas DEPOIS
 * do usuário aceitar os cookies. Respeita a LGPD: nada de tracking não
 * essencial sem consentimento prévio.
 */
export default function Analytics() {
  useEffect(() => {
    const trackLead = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest(".btn-contato");
      if (!el) return;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const fbq = (window as any).fbq;
      if (typeof fbq === "function") fbq("track", "Lead");
    };
    document.addEventListener("click", trackLead);

    if (consentAccepted()) {
      loadClarity();
      return () => document.removeEventListener("click", trackLead);
    }
    const onAccept = () => { loadClarity(); };
    window.addEventListener("cookie-consent-accepted", onAccept);
    return () => {
      document.removeEventListener("click", trackLead);
      window.removeEventListener("cookie-consent-accepted", onAccept);
    };
  }, []);

  return null;
}
