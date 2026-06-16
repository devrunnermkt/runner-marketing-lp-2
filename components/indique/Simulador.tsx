"use client";

import { useState } from "react";
import {
  type Cidade,
  cidadeLabel,
  nivelDe,
  ganhoUnico,
  recorrenteMes,
  formatBRL,
} from "@/app/indiqueData";

export default function Simulador() {
  const [n, setN] = useState(3);
  const [cidade, setCidade] = useState<Cidade>("sp");

  const nivel = nivelDe(n);
  const unico = ganhoUnico(n, cidade);
  const recorrente = recorrenteMes(n, cidade);

  return (
    <div className="bg-white rounded-3xl border border-slate-100 shadow-lg p-6 sm:p-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Controles */}
        <div>
          {/* Cidade */}
          <p className="text-sm font-semibold text-slate-700 mb-2">
            Sua praça
          </p>
          <div className="inline-flex p-1 rounded-xl bg-slate-100 mb-8">
            {(["sp", "pv"] as Cidade[]).map((c) => (
              <button
                key={c}
                onClick={() => setCidade(c)}
                className={[
                  "px-4 py-2 rounded-lg text-sm font-semibold transition-colors",
                  cidade === c
                    ? "bg-white text-teal-700 shadow-sm"
                    : "text-slate-500 hover:text-slate-700",
                ].join(" ")}
              >
                {cidadeLabel[c]}
              </button>
            ))}
          </div>

          {/* Slider */}
          <div className="flex items-center justify-between mb-2">
            <label htmlFor="sim-n" className="text-sm font-semibold text-slate-700">
              Colegas que você indica por ano
            </label>
            <span className="text-2xl font-bold text-teal-600">{n}</span>
          </div>
          <input
            id="sim-n"
            type="range"
            min={1}
            max={12}
            value={n}
            onChange={(e) => setN(Number(e.target.value))}
            className="w-full accent-teal-600 cursor-pointer"
          />
          <div className="flex justify-between text-xs text-slate-400 mt-1">
            <span>1</span>
            <span>12</span>
          </div>
        </div>

        {/* Resultado */}
        <div className="rounded-2xl bg-gradient-to-br from-teal-50 to-white border border-teal-100 p-6">
          <div className="flex items-center gap-2 mb-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Seu nível
            </span>
            <span className="px-3 py-0.5 rounded-full bg-teal-600 text-white text-xs font-bold">
              {nivel.nome}
            </span>
          </div>

          <p className="text-sm text-slate-500">Você recebe, no total</p>
          <p className="text-4xl sm:text-5xl font-bold text-ink mb-1">
            {formatBRL(unico)}
          </p>
          <p className="text-xs text-slate-400 mb-6">
            soma do bônus do 1º mês de cada indicação
          </p>

          {recorrente > 0 && (
            <div className="rounded-xl bg-white border border-teal-100 p-4">
              <p className="text-sm text-slate-500">
                E mais, como Embaixador
              </p>
              <p className="text-2xl font-bold text-teal-700">
                {formatBRL(recorrente)}
                <span className="text-sm font-medium text-slate-400"> / mês</span>
              </p>
              <p className="text-xs text-slate-400 mt-1">
                comissão recorrente enquanto os indicados forem clientes
              </p>
            </div>
          )}

          <p className="text-[11px] text-slate-400 mt-5 leading-relaxed">
            Simulação ilustrativa baseada em ticket médio de{" "}
            {cidade === "sp" ? "São Paulo" : "Porto Velho"}. Os valores reais são
            confirmados quando cada indicado paga o 1º mês.
          </p>
        </div>
      </div>
    </div>
  );
}
