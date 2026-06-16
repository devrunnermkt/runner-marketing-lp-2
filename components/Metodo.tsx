"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/app/siteConfig";
import CountUp from "./CountUp";
import { Check } from "lucide-react";

const etapas = [
  {
    numero: "01",
    titulo: "Diagnóstico",
    descricao:
      "Auditamos seu marketing atual, sua presença digital e seus riscos de conformidade com o CFM. Você descobre exatamente onde está perdendo paciente.",
  },
  {
    numero: "02",
    titulo: "Posicionamento",
    descricao:
      "Definimos sua marca, sua mensagem e seu público ideal. Paramos de falar com todo mundo para começar a atrair o paciente certo.",
  },
  {
    numero: "03",
    titulo: "Captação",
    descricao:
      "Colocamos tráfego e conteúdo para rodar, sempre dentro das normas. Lead qualificado entrando de forma constante.",
  },
  {
    numero: "04",
    titulo: "Conversão e acompanhamento",
    descricao:
      "Acompanhamos cada lead, organizamos o follow-up e medimos o retorno em relatórios claros. Agenda cheia com dado, não com achismo.",
  },
];

export default function Metodo() {
  const [ativo, setAtivo] = useState(0);
  const refs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number((e.target as HTMLElement).dataset.idx);
            setAtivo(idx);
          }
        });
      },
      // Faixa fina no centro da tela: a etapa que cruza o centro vira a ativa
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const progresso = (ativo / (etapas.length - 1)) * 100;

  return (
    <section id="resultados" className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-4">
            Previsibilidade, não sorte
          </h2>
          <p className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto">
            Um método em 4 etapas que tira a sua clínica da dependência do boca
            a boca e coloca a sua agenda no controle.
          </p>
        </div>

        {/* Timeline vertical que avança com o scroll */}
        <div className="relative pl-16 sm:pl-24">
          {/* Trilho */}
          <div
            className="absolute left-7 sm:left-10 top-2 bottom-2 w-1 rounded-full bg-slate-100"
            aria-hidden="true"
          />
          {/* Preenchimento (progresso) */}
          <div
            className="absolute left-7 sm:left-10 top-2 w-1 rounded-full bg-teal-500 transition-[height] duration-500 ease-out"
            style={{ height: `calc(${progresso}% )` }}
            aria-hidden="true"
          />

          <ol className="space-y-12 sm:space-y-16">
            {etapas.map((etapa, i) => {
              const concluida = i < ativo;
              const atual = i === ativo;
              return (
                <li
                  key={etapa.numero}
                  ref={(el) => {
                    refs.current[i] = el;
                  }}
                  data-idx={i}
                  className="relative"
                >
                  {/* Bolinha numerada */}
                  <span
                    className={[
                      "absolute -left-[3.25rem] sm:-left-[4.25rem] top-0 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border-4 border-white shadow-md transition-all duration-500",
                      atual
                        ? "bg-teal-500 text-white scale-110"
                        : concluida
                          ? "bg-teal-600 text-white"
                          : "bg-slate-100 text-slate-400",
                    ].join(" ")}
                  >
                    {concluida ? (
                      <Check size={22} strokeWidth={3} />
                    ) : (
                      <span className="text-base sm:text-lg font-bold">
                        {etapa.numero}
                      </span>
                    )}
                  </span>

                  {/* Conteúdo */}
                  <div
                    className={[
                      "transition-all duration-500",
                      atual
                        ? "opacity-100 translate-y-0"
                        : "opacity-60 translate-y-1",
                    ].join(" ")}
                  >
                    <h3 className="text-xl sm:text-2xl font-bold text-ink mb-2">
                      {etapa.titulo}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-xl">
                      {etapa.descricao}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Métricas com contagem animada */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.metricas.map((m) => (
            <div
              key={m.label}
              className="text-center p-8 rounded-2xl bg-teal-50 border border-teal-100"
            >
              <p className="text-4xl sm:text-5xl font-bold text-teal-700 mb-2">
                <CountUp value={m.valor} />
              </p>
              <p className="text-sm text-slate-600">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
