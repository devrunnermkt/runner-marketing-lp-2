"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/app/siteConfig";
import { ArrowRight } from "lucide-react";

export default function CTAFinal() {
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [especialidade, setEspecialidade] = useState("");

  function buildWhatsappUrl() {
    const msg = `Olá, quero um diagnóstico gratuito do meu marketing.%0ANome: ${encodeURIComponent(nome)}%0AWhatsApp: ${encodeURIComponent(whatsapp)}%0AEspecialidade/Clínica: ${encodeURIComponent(especialidade)}`;
    const base = siteConfig.whatsappUrl.split("?")[0];
    return `${base}?text=${msg}`;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    window.open(buildWhatsappUrl(), "_blank", "noopener,noreferrer");
  }

  return (
    <section
      id="contato"
      className="py-20 md:py-28 bg-gradient-to-br from-teal-700 to-teal-900"
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          A sua agenda pode estar cheia já no próximo mês
        </h2>
        <p className="text-base sm:text-lg text-teal-100 mb-10">
          Faça um diagnóstico gratuito e descubra onde você está perdendo
          paciente e onde está correndo risco sem perceber. Leva poucos minutos
          e não custa nada.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl p-8 shadow-xl text-left space-y-5"
          noValidate
        >
          <div>
            <label
              htmlFor="cta-nome"
              className="block text-sm font-semibold text-slate-700 mb-1.5"
            >
              Nome
            </label>
            <input
              id="cta-nome"
              type="text"
              required
              maxLength={80}
              autoComplete="name"
              placeholder="Seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
            />
          </div>

          <div>
            <label
              htmlFor="cta-whatsapp"
              className="block text-sm font-semibold text-slate-700 mb-1.5"
            >
              WhatsApp
            </label>
            <input
              id="cta-whatsapp"
              type="tel"
              required
              maxLength={20}
              inputMode="tel"
              autoComplete="tel"
              placeholder="(11) 99999-9999"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
            />
          </div>

          <div>
            <label
              htmlFor="cta-especialidade"
              className="block text-sm font-semibold text-slate-700 mb-1.5"
            >
              Especialidade / Clínica
            </label>
            <input
              id="cta-especialidade"
              type="text"
              required
              maxLength={120}
              placeholder="Ex: Dermatologia · Clínica Santa Clara"
              value={especialidade}
              onChange={(e) => setEspecialidade(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
            />
          </div>

          <button
            type="submit"
            data-contato="form"
            data-local="cta-final"
            className="btn-contato w-full flex items-center justify-center gap-2 py-4 bg-teal-600 text-white font-bold text-base sm:text-lg rounded-xl hover:bg-teal-700 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Quero meu diagnóstico gratuito
            <ArrowRight size={20} />
          </button>

          <p className="text-center text-xs text-slate-400">
            Resposta em até {siteConfig.prazoDias}h úteis. Sem compromisso.
          </p>
          <p className="text-center text-xs text-slate-400">
            Ao enviar, você concorda em ser contatado pela Runner e com a nossa{" "}
            <Link
              href="/politica-de-privacidade"
              className="underline underline-offset-2 hover:text-slate-600"
            >
              Política de Privacidade
            </Link>
            .
          </p>
        </form>
      </div>
    </section>
  );
}
