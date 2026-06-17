"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";

const COOKIE_NAME = "rp_cookie_consent";

function setConsent(value: "accepted" | "rejected") {
  const umAno = 60 * 60 * 24 * 365;
  document.cookie = `${COOKIE_NAME}=${value}; max-age=${umAno}; path=/; SameSite=Lax`;
}

function hasConsent() {
  return document.cookie
    .split("; ")
    .some((c) => c.startsWith(`${COOKIE_NAME}=`));
}

export default function CookieConsent() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    // Mostra o banner só se ainda não houve escolha
    if (!hasConsent()) setVisivel(true);
  }, []);

  function decidir(value: "accepted" | "rejected") {
    setConsent(value);
    setVisivel(false);
    if (value === "accepted") {
      // Avisa o componente de Analytics para carregar o Clarity na hora
      window.dispatchEvent(new Event("cookie-consent-accepted"));
    }
  }

  if (!visivel) return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="fixed inset-x-0 bottom-0 z-[60] p-4 sm:p-5"
    >
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-slate-100 p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex items-start gap-3 flex-1">
          <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center shrink-0">
            <Cookie size={20} className="text-teal-600" />
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            Usamos cookies para melhorar a sua experiência, analisar o tráfego e
            personalizar conteúdo. Você pode aceitar ou recusar. Saiba mais na
            nossa{" "}
            <Link
              href="/politica-de-cookies"
              className="font-semibold text-teal-700 underline underline-offset-2 hover:text-teal-600"
            >
              Política de Cookies
            </Link>
            .
          </p>
        </div>

        <div className="flex gap-3 w-full sm:w-auto shrink-0">
          <button
            onClick={() => decidir("rejected")}
            className="flex-1 sm:flex-none px-5 py-2.5 rounded-lg border border-slate-200 text-slate-600 text-sm font-semibold hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-300"
          >
            Recusar
          </button>
          <button
            onClick={() => decidir("accepted")}
            className="flex-1 sm:flex-none px-6 py-2.5 rounded-lg bg-teal-600 text-white text-sm font-semibold hover:bg-teal-700 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Aceitar cookies
          </button>
        </div>
      </div>
    </div>
  );
}
