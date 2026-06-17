"use client";

import { useState } from "react";
import { X, Gift } from "lucide-react";
import { RUNNER_WHATSAPP } from "@/app/indiqueData";

export type IndicadoPor = { id: string; nome: string } | null;

export default function FormularioIndicado({
  open,
  onClose,
  indicadoPor,
}: {
  open: boolean;
  onClose: () => void;
  indicadoPor: IndicadoPor;
}) {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const [cidade, setCidade] = useState("");
  const [mensagem, setMensagem] = useState("");

  if (!open) return null;

  function enviar(e: React.FormEvent) {
    e.preventDefault();
    const linhas = [
      "Olá! Quero conhecer o marketing médico da Runner.",
      "",
      indicadoPor
        ? `Indicado por: ${indicadoPor.nome} (cód: ${indicadoPor.id})`
        : "",
      `Nome: ${nome}`,
      `WhatsApp: ${telefone}`,
      especialidade ? `Especialidade: ${especialidade}` : "",
      cidade ? `Cidade: ${cidade}` : "",
      mensagem ? `Mensagem: ${mensagem}` : "",
    ].filter(Boolean);

    // Registra localmente para o parceiro (MVP, mesmo dispositivo)
    if (indicadoPor) {
      try {
        const k = `rp_refs_${indicadoPor.id}`;
        const atuais = JSON.parse(localStorage.getItem(k) || "[]");
        atuais.push({
          nome,
          telefone,
          data: new Date().toLocaleDateString("pt-BR"),
        });
        localStorage.setItem(k, JSON.stringify(atuais));
      } catch {
        /* ignore */
      }
    }

    window.open(
      `https://wa.me/${RUNNER_WHATSAPP}?text=${encodeURIComponent(linhas.join("\n"))}`,
      "_blank",
      "noopener,noreferrer"
    );
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center p-0 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Formulário de indicação"
    >
      <button
        className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Fechar"
      />
      <div className="relative w-full sm:max-w-lg bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[92vh] overflow-y-auto">
        <div className="sticky top-0 flex items-center justify-between px-6 py-4 bg-white border-b border-slate-100">
          <h3 className="text-lg font-bold text-ink">Diagnóstico gratuito</h3>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100"
            aria-label="Fechar"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          {indicadoPor && (
            <div className="flex items-center gap-3 mb-5 rounded-xl bg-teal-50 border border-teal-100 p-4">
              <div className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center shrink-0">
                <Gift size={18} className="text-white" />
              </div>
              <p className="text-sm text-slate-700">
                Você foi indicado por{" "}
                <strong className="text-teal-700">{indicadoPor.nome}</strong>.
                Capriche nos dados para a gente já chegar com tudo.
              </p>
            </div>
          )}

          <form onSubmit={enviar} className="space-y-4">
            <Campo label="Nome" value={nome} onChange={setNome} required placeholder="Seu nome" />
            <Campo
              label="WhatsApp"
              value={telefone}
              onChange={setTelefone}
              required
              type="tel"
              placeholder="(11) 99999-9999"
            />
            <Campo
              label="Especialidade"
              value={especialidade}
              onChange={setEspecialidade}
              placeholder="Ex: Dermatologia"
            />
            <Campo
              label="Cidade"
              value={cidade}
              onChange={setCidade}
              placeholder="Ex: São Paulo"
            />
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                Mensagem (opcional)
              </label>
              <textarea
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                rows={3}
                maxLength={500}
                placeholder="Conte rapidamente sobre a sua clínica"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <button
              type="submit"
              data-contato="form"
              data-local="indique"
              className="btn-contato w-full py-3.5 rounded-xl bg-[#25D366] text-white font-semibold hover:bg-[#1ebe5b] transition-colors"
            >
              Enviar pelo WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function Campo({
  label,
  value,
  onChange,
  required,
  type = "text",
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-700 mb-1.5">
        {label}
      </label>
      <input
        type={type}
        required={required}
        maxLength={120}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
      />
    </div>
  );
}
