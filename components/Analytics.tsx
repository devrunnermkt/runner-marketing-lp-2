"use client";

import { useEffect } from "react";

const CLARITY_ID = "x7zng8vw0o";
const PIXEL_ID = "2501327540281469";
const COOKIE_NAME = "rp_cookie_consent";

function consentAccepted() {
  return document.cookie
    .split("; ")
    .some((c) => c === `${COOKIE_NAME}=accepted`);
}

function loadPixel() {
  if (typeof window === "undefined") return;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const w = window as any;
  if (w.fbq) return;
  const s = document.createElement("script");
  s.async = true;
  s.src = "https://connect.facebook.net/en_US/fbevents.js";
  s.onload = () => { w.fbq("init", PIXEL_ID); w.fbq("track", "PageView"); };
  document.head.appendChild(s);
  w.fbq = function(...a: unknown[]) { w.fbq.queue = w.fbq.queue || []; w.fbq.queue.push(a); };
  w.fbq.loaded = true; w.fbq.version = "2.0"; w.fbq.queue = [];
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
    if (consentAccepted()) {
      loadClarity();
      loadPixel();
      return;
    }
    const onAccept = () => { loadClarity(); loadPixel(); };
    window.addEventListener("cookie-consent-accepted", onAccept);
    return () => window.removeEventListener("cookie-consent-accepted", onAccept);
  }, []);

  return null;
}
