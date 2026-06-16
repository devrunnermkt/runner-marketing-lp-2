"use client";

import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { especialidades } from "@/app/especialidadesData";
import { buildWhatsapp } from "@/app/siteConfig";

export default function SeletorEspecialidade() {
  const [id, setId] = useState<string>("");
  const sel = especialidades.find((e) => e.id === id) || null;
  const cor = sel?.cor ?? "#05bbcd";

  return (
    <section
      id="especialidade"
      className="py-20 md:py-28 transition-colors duration-500"
      style={
        {
          // Tema do bloco inteiro controlado por uma variável de cor (CSS var)
          "--esp": cor,
          backgroundColor: sel ? `${cor}0f` : "#f8fafc",
        } as React.CSSProperties
      }
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pergunta */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-3">
            Qual é a sua área de atuação?
          </h2>
          <p className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto">
            Escolha a sua especialidade e veja, na hora, o tipo de resultado que
            a Runner entrega para a sua área.
          </p>
        </div>

        {/* Dropdown */}
        <div className="max-w-md mx-auto mb-12">
          <label htmlFor="esp-select" className="sr-only">
            Selecione a sua especialidade
          </label>
          <div className="relative">
            <select
              id="esp-select"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="w-full appearance-none rounded-xl border-2 bg-white px-5 py-4 text-base sm:text-lg font-semibold text-ink shadow-sm focus:outline-none focus:ring-2 transition-colors cursor-pointer"
              style={{ borderColor: sel ? cor : "#e2e8f0" }}
            >
              <option value="">Selecione a sua especialidade…</option>
              {especialidades.map((e) => (
                <option key={e.id} value={e.id}>
                  {e.nome}
                </option>
              ))}
            </select>
            <ChevronDown
              size={22}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
          </div>
        </div>

        {/* Palco */}
        {!sel ? (
          <div className="text-center py-16 rounded-2xl border-2 border-dashed border-slate-200">
            <p className="text-slate-400 text-lg">
              Selecione uma especialidade para montar o seu cenário.
            </p>
          </div>
        ) : (
          <div
            key={sel.id}
            className="esp-fade grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center bg-white rounded-3xl border border-slate-100 shadow-lg p-7 sm:p-10"
          >
            {/* Texto */}
            <div className="order-2 lg:order-1">
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white mb-4"
                style={{ backgroundColor: cor }}
              >
                {sel.nome}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-ink leading-snug mb-6">
                {sel.headline}
              </h3>

              {/* Métricas */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6">
                {sel.metricas.map((m, i) => (
                  <div
                    key={i}
                    className="rounded-xl p-3 sm:p-4 text-center"
                    style={{ backgroundColor: `${cor}14` }}
                  >
                    <p
                      className="text-xl sm:text-3xl font-bold leading-tight"
                      style={{ color: cor }}
                    >
                      {m.valor}
                    </p>
                    <p className="text-[11px] sm:text-xs text-slate-500 mt-1 leading-tight">
                      {m.rotulo}
                    </p>
                  </div>
                ))}
              </div>

              {/* Exemplo de anúncio */}
              <div
                className="rounded-xl border-l-4 bg-slate-50 px-4 py-3 mb-7"
                style={{ borderColor: cor }}
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                  Exemplo de anúncio
                </p>
                <p className="text-sm sm:text-base text-slate-700 italic">
                  &ldquo;{sel.anuncio}&rdquo;
                </p>
              </div>

              {/* CTA */}
              <a
                href={buildWhatsapp(
                  `Olá! Sou da área de ${sel.nome} e quero um diagnóstico gratuito do meu marketing.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                data-contato="whatsapp"
                data-local="seletor-especialidade"
                className="btn-contato inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-white text-base sm:text-lg font-semibold shadow-md hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{ backgroundColor: cor }}
              >
                Quero esse resultado na minha agenda
                <ArrowRight size={20} />
              </a>
            </div>

            {/* Ícone */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div
                className="esp-icon-wrap relative flex items-center justify-center w-40 h-40 sm:w-52 sm:h-52 rounded-full"
                style={{
                  color: cor,
                  backgroundColor: `${cor}12`,
                  boxShadow: `0 0 60px 0 ${cor}33`,
                }}
              >
                <div className="esp-icon w-24 h-24 sm:w-32 sm:h-32">
                  {sel.icone}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
