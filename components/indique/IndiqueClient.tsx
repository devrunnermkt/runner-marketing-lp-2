"use client";

import { useEffect, useState } from "react";
import {
  Gift,
  UserPlus,
  Link2,
  Share2,
  Wallet,
  CheckCircle2,
  ArrowRight,
  Trophy,
  Star,
  ShieldCheck,
} from "lucide-react";
import { niveis, decToken, cidadeLabel } from "@/app/indiqueData";
import Simulador from "./Simulador";
import PainelParceiro from "./PainelParceiro";
import FormularioIndicado, { type IndicadoPor } from "./FormularioIndicado";

type Modal = "none" | "painel" | "form";

const passos = [
  {
    icon: UserPlus,
    titulo: "Crie o seu perfil",
    texto: "Leva 30 segundos. Você recebe um link pessoal fixo, que nunca se perde.",
  },
  {
    icon: Share2,
    titulo: "Indique um colega",
    texto: "Compartilhe o seu link no WhatsApp com médicos que confiam em você.",
  },
  {
    icon: CheckCircle2,
    titulo: "Ele fecha com a Runner",
    texto: "Cuidamos de tudo. A indicação é validada quando o colega paga o 1º mês.",
  },
  {
    icon: Wallet,
    titulo: "Você é recompensado",
    texto: "Recebe em dinheiro e em serviço. Quanto mais indica, maior o seu nível.",
  },
];

const vantagens = [
  {
    icon: Wallet,
    titulo: "Recompensa em dinheiro",
    texto: "Um percentual do 1º mês de cada indicado, que cresce conforme o seu nível.",
  },
  {
    icon: Gift,
    titulo: "Recompensa em serviço",
    texto: "Vídeos extras, verba em tráfego, página de vendas nova e mais.",
  },
  {
    icon: Trophy,
    titulo: "Níveis que sobem",
    texto: "De Bronze a Embaixador. Quanto mais você indica, maior a recompensa.",
  },
  {
    icon: Link2,
    titulo: "Link que nunca se perde",
    texto: "O seu link é fixo e atrelado a você. As indicações sempre voltam para o seu nome.",
  },
];

const regras = [
  "Pode indicar todo médico cliente da Runner, inclusive quem entra agora.",
  "A indicação é validada quando o colega paga o primeiro mês.",
  "Janela de 90 dias entre a indicação e o fechamento.",
  "Os níveis são contados por ano e reiniciam a cada ciclo anual.",
  "Em Porto Velho, há um piso de R$ 300 por indicação válida.",
  "A recompensa de Embaixador é recorrente enquanto o indicado for cliente.",
];

export default function IndiqueClient() {
  const [modal, setModal] = useState<Modal>("none");
  const [indicadoPor, setIndicadoPor] = useState<IndicadoPor>(null);

  // Detecta ?ref= no carregamento e abre o formulário do indicado
  useEffect(() => {
    const ref = new URLSearchParams(window.location.search).get("ref");
    if (ref) {
      const dec = decToken(ref);
      if (dec) {
        setIndicadoPor({ id: dec.id, nome: dec.nome });
        setModal("form");
      }
    }
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-gradient-to-br from-ink to-ink-light overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-teal-100 uppercase tracking-wider">
            <Gift size={14} /> Indique e ganhe
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Indique um colega.{" "}
            <span className="text-teal-300">Ganhe em dinheiro e em serviço.</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-200 leading-relaxed mb-10 max-w-2xl mx-auto">
            Todo médico cliente da Runner vira parceiro. Cada colega que você
            traz gera recompensa, com níveis que sobem conforme o volume. O seu
            link pessoal é fixo, então a indicação nunca se perde.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setModal("painel")}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-teal-500 text-white text-base sm:text-lg font-semibold rounded-xl hover:bg-teal-400 transition-colors shadow-lg"
            >
              Quero indicar e ganhar
              <ArrowRight size={20} />
            </button>
            <button
              onClick={() => setModal("form")}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/10 text-white text-base sm:text-lg font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
            >
              Fui indicado por alguém
            </button>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-4">
              Como funciona
            </h2>
            <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto">
              Quatro passos simples entre indicar um colega e receber a sua
              recompensa.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {passos.map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={i} className="relative bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <span className="absolute top-4 right-5 text-4xl font-bold text-slate-100">
                    {i + 1}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-4">
                    <Icon size={22} className="text-teal-600" />
                  </div>
                  <h3 className="text-base font-bold text-ink mb-2">{p.titulo}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{p.texto}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SIMULADOR */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-4">
              Simule o quanto você pode ganhar
            </h2>
            <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto">
              Arraste e veja a sua recompensa crescer conforme você indica mais
              colegas.
            </p>
          </div>
          <Simulador />
        </div>
      </section>

      {/* NÍVEIS */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-4">
              Quatro níveis, recompensas que crescem
            </h2>
            <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto">
              Quanto mais você indica no ano, maior o percentual e melhores os
              bônus em serviço.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {niveis.map((nv) => (
              <article
                key={nv.id}
                className={[
                  "relative rounded-2xl p-6 border transition-shadow hover:shadow-lg",
                  nv.destaque
                    ? "border-teal-300 bg-teal-50 shadow-md"
                    : "border-slate-100 bg-white shadow-sm",
                ].join(" ")}
              >
                {nv.destaque && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-teal-600 text-white text-xs font-bold flex items-center gap-1">
                    <Star size={12} className="fill-white" /> Mais popular
                  </span>
                )}
                <h3 className="text-lg font-bold text-ink">{nv.nome}</h3>
                <p className="text-xs text-slate-400 mb-3">{nv.faixa}</p>
                <p className="text-2xl font-bold text-teal-700 mb-4">
                  {nv.percentual}
                </p>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between gap-2">
                    <dt className="text-slate-400">{cidadeLabel.sp}</dt>
                    <dd className="font-semibold text-slate-700">{nv.sp}</dd>
                  </div>
                  <div className="flex justify-between gap-2">
                    <dt className="text-slate-400">{cidadeLabel.pv}</dt>
                    <dd className="font-semibold text-slate-700">{nv.pv}</dd>
                  </div>
                </dl>
                <p className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-500">
                  {nv.servico}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VANTAGENS */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-4">
              Por que vale a pena indicar
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {vantagens.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-4">
                    <Icon size={22} className="text-teal-600" />
                  </div>
                  <h3 className="text-base font-bold text-ink mb-2">{v.titulo}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{v.texto}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* REGRAS */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-4">
              Regras simples e transparentes
            </h2>
          </div>
          <ul className="space-y-4">
            {regras.map((r, i) => (
              <li key={i} className="flex items-start gap-3">
                <ShieldCheck size={20} className="text-teal-600 shrink-0 mt-0.5" />
                <span className="text-slate-600 leading-relaxed">{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-teal-700 to-teal-900">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Comece a indicar hoje
          </h2>
          <p className="text-base sm:text-lg text-teal-100 mb-10">
            Crie o seu perfil, pegue o seu link pessoal e transforme a sua
            indicação em recompensa.
          </p>
          <button
            onClick={() => setModal("painel")}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-teal-700 text-base sm:text-lg font-bold rounded-xl hover:bg-teal-50 transition-colors shadow-md"
          >
            Gerar meu link de parceiro
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* MODAIS */}
      <PainelParceiro open={modal === "painel"} onClose={() => setModal("none")} />
      <FormularioIndicado
        open={modal === "form"}
        onClose={() => setModal("none")}
        indicadoPor={indicadoPor}
      />
    </>
  );
}
