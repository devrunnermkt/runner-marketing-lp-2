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
      "Mais de 400 mil mortes por doenças cardiovasculares mostram uma demanda clara: pacientes com pressão alta, dor no peito e histórico familiar precisam encontrar um cardiologista antes da urgência.",
    metricas: [
      { valor: "+34", rotulo: "novas consultas no mês" },
      { valor: "R$ 39", rotulo: "custo por agendamento" },
      { valor: "6,8x", rotulo: "retorno sobre o investimento" },
    ],
    icone: (
      <svg {...svg}>
        <path
          pathLength={1}
          d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
        />
        <path pathLength={1} d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
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
      "O câncer de pele representa cerca de 30% dos tumores no Brasil. Quem percebe manchas, acne, queda de cabelo ou sinais na pele busca um especialista em quem possa confiar.",
    metricas: [
      { valor: "+48", rotulo: "novas consultas no mês" },
      { valor: "R$ 31", rotulo: "custo por agendamento" },
      { valor: "7,5x", rotulo: "retorno sobre o investimento" },
    ],
    icone: (
      <svg {...svg}>
        <path
          pathLength={1}
          d="M12 3l1.6 5.2a3 3 0 0 0 1.9 1.9L20.7 12l-5.2 1.6a3 3 0 0 0-1.9 1.9L12 20.7l-1.6-5.2a3 3 0 0 0-1.9-1.9L3.3 12l5.2-1.6a3 3 0 0 0 1.9-1.9z"
        />
        <path pathLength={1} d="M19 4.5v3M20.5 6h-3M5 16.5v2M6 17.5H4" />
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
      "Dor na coluna, joelho e articulações limita trabalho, treino e rotina. O ortopedista que aparece com autoridade vira a escolha de quem quer voltar a se movimentar.",
    metricas: [
      { valor: "+29", rotulo: "novas consultas no mês" },
      { valor: "R$ 44", rotulo: "custo por agendamento" },
      { valor: "6,1x", rotulo: "retorno sobre o investimento" },
    ],
    icone: (
      <svg {...svg}>
        <path
          pathLength={1}
          d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z"
        />
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
      "Ansiedade, insônia e esgotamento fazem parte da rotina de milhões de pessoas. O psiquiatra precisa aparecer para quem já decidiu que não quer lidar com isso sozinho.",
    metricas: [
      { valor: "+26", rotulo: "novas consultas no mês" },
      { valor: "R$ 47", rotulo: "custo por agendamento" },
      { valor: "5,9x", rotulo: "retorno sobre o investimento" },
    ],
    icone: (
      <svg {...svg}>
        <circle pathLength={1} cx="12" cy="12" r="8.5" />
        <path
          pathLength={1}
          d="M12 16.2s-3.6-2.2-3.6-4.7a1.95 1.95 0 0 1 3.6-1.05 1.95 1.95 0 0 1 3.6 1.05c0 2.5-3.6 4.7-3.6 4.7z"
        />
      </svg>
    ),
  },
  {
    id: "psicanalise",
    nome: "Psicanálise",
    cor: "#9333ea",
    headline:
      "Psicanalista com presença digital profunda para atrair pacientes alinhados ao processo.",
    anuncio:
      "Muita gente não busca apenas aliviar sintomas. Busca entender padrões, relações e conflitos internos. O psicanalista que comunica profundidade vira ponto de confiança.",
    metricas: [
      { valor: "+22", rotulo: "novas consultas no mês" },
      { valor: "R$ 43", rotulo: "custo por agendamento" },
      { valor: "5,8x", rotulo: "retorno sobre o investimento" },
    ],
    icone: (
      <svg {...svg}>
        <path
          pathLength={1}
          d="M12 4.5c-3.6 0-6.5 2.6-6.5 6.1 0 2.3 1.2 4.2 3 5.3v3.6l3.2-2.7H12c3.6 0 6.5-2.6 6.5-6.2S15.6 4.5 12 4.5z"
        />
        <path pathLength={1} d="M9 10.5c.6-.8 1.5-1.2 3-1.2s2.4.4 3 1.2" />
        <path pathLength={1} d="M9.5 13.5h5" />
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
      "Saúde bucal também é autoestima. Quem sente dor, insegurança ao sorrir ou busca estética precisa encontrar uma clínica que transmita cuidado e segurança.",
    metricas: [
      { valor: "+63", rotulo: "avaliações no mês" },
      { valor: "R$ 22", rotulo: "custo por avaliação" },
      { valor: "11x", rotulo: "retorno sobre o investimento" },
    ],
    icone: (
      <svg {...svg}>
        <path
          pathLength={1}
          d="M6.5 3.5C4.6 3.5 3.5 5.2 3.5 7.6c0 1.5.3 3.2.8 5 .6 2.2 1.4 4.5 2.3 5.9.3.5.7.8 1.2.8.9 0 1.1-1.2 1.2-2.6.1-1.4.2-2.8 1-2.8s.9 1.4 1 2.8c.1 1.4.3 2.6 1.2 2.6.5 0 .9-.3 1.2-.8.9-1.4 1.7-3.7 2.3-5.9.5-1.8.8-3.5.8-5 0-2.4-1.1-4.1-3-4.1-1.3 0-2 .7-2.7.7s-1.4-.7-2.8-.7z"
        />
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
      "Prevenção, exames, fertilidade e saúde íntima fazem parte da rotina de milhares de mulheres. A ginecologista que educa com clareza se torna referência.",
    metricas: [
      { valor: "+41", rotulo: "novas consultas no mês" },
      { valor: "R$ 34", rotulo: "custo por agendamento" },
      { valor: "7,2x", rotulo: "retorno sobre o investimento" },
    ],
    icone: (
      <svg {...svg}>
        <circle pathLength={1} cx="12" cy="8.5" r="5.5" />
        <path pathLength={1} d="M12 14v7M8.5 18h7" />
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
      "Pais procuram confiança antes de escolher quem vai cuidar dos filhos. O pediatra bem posicionado aparece nas decisões mais importantes da família.",
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
      "Mais de 2 bilhões de pessoas vivem com algum problema visual no mundo. Quem sente dificuldade para enxergar busca resposta rápida e um especialista confiável.",
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
      "Dor de cabeça constante, tontura, esquecimentos e sintomas neurológicos geram medo. O neurologista precisa aparecer no momento em que o paciente busca orientação.",
    metricas: [
      { valor: "+24", rotulo: "novas consultas no mês" },
      { valor: "R$ 51", rotulo: "custo por agendamento" },
      { valor: "5,6x", rotulo: "retorno sobre o investimento" },
    ],
    icone: (
      <svg {...svg}>
        <path
          pathLength={1}
          d="M12 5.5a3 3 0 0 0-5.7-1.2A3 3 0 0 0 4 9a3 3 0 0 0 1 5.6A2.6 2.6 0 0 0 8.5 18a2.6 2.6 0 0 0 3.5-.6z"
        />
        <path
          pathLength={1}
          d="M12 5.5a3 3 0 0 1 5.7-1.2A3 3 0 0 1 20 9a3 3 0 0 1-1 5.6A2.6 2.6 0 0 1 15.5 18a2.6 2.6 0 0 1-3.5-.6z"
        />
        <path pathLength={1} d="M12 5.5v12" />
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
      "Excesso de peso, diabetes, tireoide e alterações hormonais afetam a rotina todos os dias. O endocrinologista aparece como o próximo passo para tratar a causa.",
    metricas: [
      { valor: "+33", rotulo: "novas consultas no mês" },
      { valor: "R$ 40", rotulo: "custo por agendamento" },
      { valor: "6,5x", rotulo: "retorno sobre o investimento" },
    ],
    icone: (
      <svg {...svg}>
        <circle pathLength={1} cx="12" cy="12" r="2.5" />
        <circle pathLength={1} cx="12" cy="4.5" r="1.8" />
        <circle pathLength={1} cx="5.5" cy="17" r="1.8" />
        <circle pathLength={1} cx="18.5" cy="17" r="1.8" />
        <path pathLength={1} d="M12 9.5V6.3M10 13.6l-3 2.2M14 13.6l3 2.2" />
      </svg>
    ),
  },
];
