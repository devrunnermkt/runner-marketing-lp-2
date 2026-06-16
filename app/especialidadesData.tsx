// ============================================================
// DADOS DO SELETOR DE ESPECIALIDADE
// Para adicionar/remover especialidade, edite a lista abaixo.
// Cada item carrega os mesmos campos — o bloco se monta sozinho.
// ============================================================
import type { ReactNode } from "react";

export type Metrica = { valor: string; rotulo: string };

export type Especialidade = {
  id: string;
  nome: string;
  cor: string; // cor tema (hex)
  headline: string;
  anuncio: string;
  metricas: [Metrica, Metrica, Metrica];
  icone: ReactNode; // SVG de traço (anima "se desenhando")
};

// Props comuns dos ícones — todos de traço, leves, com pathLength p/ animar o desenho.
const svg = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "esp-icon-svg",
};

export const especialidades: Especialidade[] = [
  {
    id: "cardiologia",
    nome: "Cardiologia",
    cor: "#e11d48",
    headline:
      "Cardiologista com a agenda cheia de pacientes que já chegam decididos a tratar.",
    anuncio:
      "Pressão alta ou dor no peito? Agende sua avaliação cardiológica ainda esta semana.",
    metricas: [
      { valor: "+34", rotulo: "novas consultas no mês" },
      { valor: "R$ 39", rotulo: "custo por agendamento" },
      { valor: "6,8x", rotulo: "retorno sobre o investimento" },
    ],
    icone: (
      <svg {...svg}>
        <path pathLength={1} d="M2 12h4l2-6 4 12 2-6h8" />
      </svg>
    ),
  },
  {
    id: "dermatologia",
    nome: "Dermatologia",
    cor: "#ec4899",
    headline:
      "Dermatologista com a agenda preenchida de pacientes certos para estética e clínica.",
    anuncio:
      "Manchas, acne ou check-up de pele? Agende sua avaliação dermatológica.",
    metricas: [
      { valor: "+48", rotulo: "novas consultas no mês" },
      { valor: "R$ 31", rotulo: "custo por agendamento" },
      { valor: "7,5x", rotulo: "retorno sobre o investimento" },
    ],
    icone: (
      <svg {...svg}>
        <circle pathLength={1} cx="12" cy="12" r="4" />
        <path pathLength={1} d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6L17 7M7 17l-1.4 1.4" />
      </svg>
    ),
  },
  {
    id: "ortopedia",
    nome: "Ortopedia",
    cor: "#2563eb",
    headline:
      "Ortopedista com a agenda cheia de pacientes prontos para investir no tratamento.",
    anuncio:
      "Dor no joelho, coluna ou ombro? Agende sua avaliação ortopédica.",
    metricas: [
      { valor: "+29", rotulo: "novas consultas no mês" },
      { valor: "R$ 44", rotulo: "custo por agendamento" },
      { valor: "6,1x", rotulo: "retorno sobre o investimento" },
    ],
    icone: (
      <svg {...svg}>
        <path pathLength={1} d="M9 9a2 2 0 1 0-2-2 2 2 0 1 0-1 3l7 7a2 2 0 1 0 1 2 2 2 0 1 0 2-1z" />
      </svg>
    ),
  },
  {
    id: "psiquiatria",
    nome: "Psiquiatria",
    cor: "#7c3aed",
    headline:
      "Psiquiatra com a agenda equilibrada de pacientes comprometidos com o acompanhamento.",
    anuncio:
      "Ansiedade, insônia ou desânimo? Agende uma conversa com um psiquiatra.",
    metricas: [
      { valor: "+26", rotulo: "novas consultas no mês" },
      { valor: "R$ 47", rotulo: "custo por agendamento" },
      { valor: "5,9x", rotulo: "retorno sobre o investimento" },
    ],
    icone: (
      <svg {...svg}>
        <path pathLength={1} d="M15.5 3A6.5 6.5 0 0 0 9 9.5c0 1-1 2-2 3.5h2v3a3 3 0 0 0 3 3h1" />
        <path pathLength={1} d="M14 11c1-1 3-1 3 1s-3 3-3 1" />
      </svg>
    ),
  },
  {
    id: "odontologia",
    nome: "Odontologia",
    cor: "#0d9488",
    headline:
      "Clínica odontológica com a cadeira ocupada de implante e ortodontia.",
    anuncio:
      "Implante, clareamento ou aparelho? Agende sua avaliação odontológica gratuita.",
    metricas: [
      { valor: "+63", rotulo: "avaliações no mês" },
      { valor: "R$ 22", rotulo: "custo por avaliação" },
      { valor: "11x", rotulo: "retorno sobre o investimento" },
    ],
    icone: (
      <svg {...svg}>
        <path pathLength={1} d="M7 3c-2 0-3 2-3 5 0 4 1 13 3 13 1.5 0 1-5 3-5s1.5 5 3 5c2 0 3-9 3-13 0-3-1-5-3-5-1.5 0-2 1-3 1s-1.5-1-3-1z" />
      </svg>
    ),
  },
  {
    id: "ginecologia",
    nome: "Ginecologia",
    cor: "#db2777",
    headline:
      "Ginecologista com a agenda cheia de pacientes que valorizam o acompanhamento.",
    anuncio:
      "Está em dia com seu check-up? Agende sua consulta ginecológica.",
    metricas: [
      { valor: "+41", rotulo: "novas consultas no mês" },
      { valor: "R$ 34", rotulo: "custo por agendamento" },
      { valor: "7,2x", rotulo: "retorno sobre o investimento" },
    ],
    icone: (
      <svg {...svg}>
        <circle pathLength={1} cx="12" cy="8" r="5" />
        <path pathLength={1} d="M12 13v8M9 18h6" />
      </svg>
    ),
  },
  {
    id: "pediatria",
    nome: "Pediatria",
    cor: "#f59e0b",
    headline:
      "Pediatra com a agenda cheia de famílias que buscam acompanhamento de confiança.",
    anuncio:
      "Seu filho precisa de acompanhamento? Agende a consulta com o pediatra.",
    metricas: [
      { valor: "+52", rotulo: "novas consultas no mês" },
      { valor: "R$ 27", rotulo: "custo por agendamento" },
      { valor: "8,9x", rotulo: "retorno sobre o investimento" },
    ],
    icone: (
      <svg {...svg}>
        <circle pathLength={1} cx="12" cy="13" r="6" />
        <circle pathLength={1} cx="6.5" cy="7.5" r="2" />
        <circle pathLength={1} cx="17.5" cy="7.5" r="2" />
        <path pathLength={1} d="M10 13h.01M14 13h.01M10 16c.7.6 1.3.6 2 .6s1.3 0 2-.6" />
      </svg>
    ),
  },
  {
    id: "oftalmologia",
    nome: "Oftalmologia",
    cor: "#06b6d4",
    headline:
      "Oftalmologista com a agenda cheia de pacientes prontos para cuidar da visão.",
    anuncio:
      "Vista cansada ou exame em atraso? Agende sua consulta oftalmológica.",
    metricas: [
      { valor: "+45", rotulo: "novas consultas no mês" },
      { valor: "R$ 30", rotulo: "custo por agendamento" },
      { valor: "7,8x", rotulo: "retorno sobre o investimento" },
    ],
    icone: (
      <svg {...svg}>
        <path pathLength={1} d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z" />
        <circle pathLength={1} cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    id: "neurologia",
    nome: "Neurologia",
    cor: "#4f46e5",
    headline:
      "Neurologista com a agenda cheia de pacientes que buscam diagnóstico de confiança.",
    anuncio:
      "Dores de cabeça frequentes ou esquecimentos? Agende sua avaliação neurológica.",
    metricas: [
      { valor: "+24", rotulo: "novas consultas no mês" },
      { valor: "R$ 51", rotulo: "custo por agendamento" },
      { valor: "5,6x", rotulo: "retorno sobre o investimento" },
    ],
    icone: (
      <svg {...svg}>
        <path pathLength={1} d="M12 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 3 1 3 3 0 0 0 3-1 3 3 0 0 0 2-5 3 3 0 0 0-2-5 3 3 0 0 0-3-3z" />
        <path pathLength={1} d="M12 4v14" />
      </svg>
    ),
  },
  {
    id: "endocrinologia",
    nome: "Endocrinologia",
    cor: "#16a34a",
    headline:
      "Endocrinologista com a agenda cheia de pacientes comprometidos com o tratamento.",
    anuncio:
      "Tireoide, diabetes ou hormônios? Agende sua avaliação endocrinológica.",
    metricas: [
      { valor: "+33", rotulo: "novas consultas no mês" },
      { valor: "R$ 40", rotulo: "custo por agendamento" },
      { valor: "6,5x", rotulo: "retorno sobre o investimento" },
    ],
    icone: (
      <svg {...svg}>
        <path pathLength={1} d="M12 3l7 4v8l-7 4-7-4V7z" />
        <circle pathLength={1} cx="12" cy="11" r="2.5" />
      </svg>
    ),
  },
];
