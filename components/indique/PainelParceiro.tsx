"use client";

import { useEffect, useState } from "react";
import { X, Copy, Check, Share2, Link2 } from "lucide-react";
import {
  type Cidade,
  type Perfil,
  cidadeLabel,
  makeId,
  linkPessoal,
} from "@/app/indiqueData";

const KEY_PERFIL = "rp_profile";

type RefLocal = { nome: string; telefone: string; data: string };

export default function PainelParceiro({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [perfil, setPerfil] = useState<Perfil | null>(null);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cidade, setCidade] = useState<Cidade>("sp");
  const [copiado, setCopiado] = useState(false);
  const [refs, setRefs] = useState<RefLocal[]>([]);

  // Carrega perfil salvo ao abrir
  useEffect(() => {
    if (!open) return;
    try {
      const raw = localStorage.getItem(KEY_PERFIL);
      if (raw) {
        const p = JSON.parse(raw) as Perfil;
        setPerfil(p);
        const r = localStorage.getItem(`rp_refs_${p.id}`);
        setRefs(r ? JSON.parse(r) : []);
      }
    } catch {
      /* ignore */
    }
  }, [open]);

  if (!open) return null;

  function criarPerfil(e: React.FormEvent) {
    e.preventDefault();
    const id = makeId(nome, email);
    const p: Perfil = { id, nome: nome.trim(), email: email.trim(), cidade };
    localStorage.setItem(KEY_PERFIL, JSON.stringify(p));
    setPerfil(p);
    const r = localStorage.getItem(`rp_refs_${id}`);
    setRefs(r ? JSON.parse(r) : []);
  }

  const link = perfil ? linkPessoal(perfil) : "";

  function copiar() {
    navigator.clipboard?.writeText(link).then(() => {
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    });
  }

  function compartilhar() {
    const texto = `Indico a Runner para o seu marketing médico. Faça o seu diagnóstico gratuito pelo meu link: ${link}`;
    window.open(
      `https://wa.me/?text=${encodeURIComponent(texto)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  function trocarParceiro() {
    localStorage.removeItem(KEY_PERFIL);
    setPerfil(null);
    setNome("");
    setEmail("");
  }

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center p-0 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Painel do parceiro"
    >
      <button
        className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Fechar"
      />
      <div className="relative w-full sm:max-w-lg bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[92vh] overflow-y-auto">
        <div className="sticky top-0 flex items-center justify-between px-6 py-4 bg-white border-b border-slate-100">
          <h3 className="text-lg font-bold text-ink">
            {perfil ? "Seu painel de parceiro" : "Vire parceiro Runner"}
          </h3>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100"
            aria-label="Fechar"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          {!perfil ? (
            <form onSubmit={criarPerfil} className="space-y-4">
              <p className="text-sm text-slate-500 mb-2">
                Crie o seu perfil e receba um link pessoal fixo. Toda indicação
                feita por ele fica atrelada a você, para sempre.
              </p>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Seu nome
                </label>
                <input
                  required
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Dr(a). Nome Sobrenome"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  E-mail
                </label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="voce@email.com"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <p className="text-xs text-slate-400 mt-1">
                  O mesmo e-mail gera sempre o mesmo link. Ele nunca se perde.
                </p>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Sua praça
                </label>
                <div className="inline-flex p-1 rounded-xl bg-slate-100">
                  {(["sp", "pv"] as Cidade[]).map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setCidade(c)}
                      className={[
                        "px-4 py-2 rounded-lg text-sm font-semibold transition-colors",
                        cidade === c
                          ? "bg-white text-teal-700 shadow-sm"
                          : "text-slate-500",
                      ].join(" ")}
                    >
                      {cidadeLabel[c]}
                    </button>
                  ))}
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-teal-600 text-white font-semibold hover:bg-teal-700 transition-colors"
              >
                Gerar meu link pessoal
              </button>
            </form>
          ) : (
            <div className="space-y-6">
              <div>
                <p className="text-sm text-slate-500">Olá,</p>
                <p className="text-lg font-bold text-ink">{perfil.nome}</p>
                <p className="text-xs text-slate-400">
                  Código de parceiro: {perfil.id}
                </p>
              </div>

              {/* Link pessoal */}
              <div className="rounded-2xl border border-teal-100 bg-teal-50 p-4">
                <div className="flex items-center gap-2 mb-2 text-teal-700">
                  <Link2 size={16} />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Seu link pessoal
                  </span>
                </div>
                <p className="text-sm text-slate-700 break-all bg-white rounded-lg p-3 border border-teal-100">
                  {link}
                </p>
                <div className="flex gap-2 mt-3">
                  <button
                    onClick={copiar}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-lg border border-teal-200 bg-white text-teal-700 text-sm font-semibold hover:bg-teal-100 transition-colors"
                  >
                    {copiado ? <Check size={16} /> : <Copy size={16} />}
                    {copiado ? "Copiado!" : "Copiar"}
                  </button>
                  <button
                    onClick={compartilhar}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#25D366] text-white text-sm font-semibold hover:bg-[#1ebe5b] transition-colors"
                  >
                    <Share2 size={16} />
                    Compartilhar
                  </button>
                </div>
              </div>

              {/* Indicações registradas neste dispositivo */}
              <div>
                <p className="text-sm font-semibold text-slate-700 mb-2">
                  Indicações deste dispositivo ({refs.length})
                </p>
                {refs.length === 0 ? (
                  <p className="text-sm text-slate-400">
                    Ainda não há indicações registradas aqui. Compartilhe o seu
                    link para começar.
                  </p>
                ) : (
                  <ul className="space-y-2">
                    {refs.map((r, i) => (
                      <li
                        key={i}
                        className="flex justify-between items-center text-sm bg-slate-50 rounded-lg px-3 py-2"
                      >
                        <span className="font-medium text-slate-700">
                          {r.nome}
                        </span>
                        <span className="text-xs text-slate-400">{r.data}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <p className="text-[11px] text-slate-400 mt-3 leading-relaxed">
                  Observação: nesta versão, as indicações são confirmadas pela
                  Runner por WhatsApp. A recompensa é liberada quando o indicado
                  paga o 1º mês.
                </p>
              </div>

              <button
                onClick={trocarParceiro}
                className="text-xs text-slate-400 underline hover:text-slate-600"
              >
                Não é você? Trocar de perfil
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
