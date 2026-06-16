// ============================================================
// PROGRAMA "INDIQUE E GANHE" — dados, regras e lógica
// Edite tickets, níveis e textos aqui sem mexer no layout.
// ============================================================

export const RUNNER_WHATSAPP = "5511997188406";

// Ticket médio do 1º mês por praça (usado no simulador)
export const tickets = { pv: 3500, sp: 5000 } as const;
export type Cidade = keyof typeof tickets;

export const cidadeLabel: Record<Cidade, string> = {
  pv: "Porto Velho",
  sp: "São Paulo",
};

// Piso por indicação em Porto Velho
const PISO_PV = 300;

export type Nivel = {
  id: string;
  nome: string;
  faixa: string; // ex: "1ª e 2ª indicação"
  percentual: string; // ex: "10% do 1º mês"
  pv: string;
  sp: string;
  servico: string;
  destaque?: boolean;
};

export const niveis: Nivel[] = [
  {
    id: "bronze",
    nome: "Bronze",
    faixa: "1ª e 2ª indicação",
    percentual: "10% do 1º mês",
    pv: "R$ 300 a 400",
    sp: "R$ 400 a 600",
    servico: "1 vídeo ou edição extra",
  },
  {
    id: "prata",
    nome: "Prata",
    faixa: "3ª e 4ª indicação",
    percentual: "15% do 1º mês",
    pv: "R$ 450 a 600",
    sp: "R$ 600 a 900",
    servico: "Verba bônus em tráfego ou desconto no fee",
  },
  {
    id: "ouro",
    nome: "Ouro",
    faixa: "5ª indicação em diante",
    percentual: "20% do 1º mês",
    pv: "R$ 600 a 800",
    sp: "R$ 800 a 1.200",
    servico: "Página de vendas nova por ano e prioridade",
    destaque: true,
  },
  {
    id: "embaixador",
    nome: "Embaixador",
    faixa: "8ª indicação em diante",
    percentual: "+5% recorrente",
    pv: "R$ 150 a 200/mês",
    sp: "R$ 200 a 300/mês",
    servico: "Comissão enquanto for cliente e co-branding",
  },
];

// ── Lógica do simulador ─────────────────────────────────────
// Percentual por POSIÇÃO da indicação (1ª, 2ª, 3ª...)
export function pct(i: number): number {
  if (i <= 2) return 0.1;
  if (i <= 4) return 0.15;
  return 0.2;
}

export function nivelDe(n: number): Nivel {
  if (n >= 8) return niveis[3];
  if (n >= 5) return niveis[2];
  if (n >= 3) return niveis[1];
  return niveis[0];
}

// Ganho único (soma do 1º mês de cada indicação), com piso em PV
export function ganhoUnico(n: number, cidade: Cidade): number {
  const ticket = tickets[cidade];
  let total = 0;
  for (let i = 1; i <= n; i++) {
    let valor = ticket * pct(i);
    if (cidade === "pv") valor = Math.max(valor, PISO_PV);
    total += valor;
  }
  return Math.round(total);
}

// Comissão recorrente mensal (a partir de 8 indicações: 5% por cliente ativo)
export function recorrenteMes(n: number, cidade: Cidade): number {
  if (n < 8) return 0;
  return Math.round(tickets[cidade] * 0.05 * n);
}

// Receita gerada para a Runner em 1 ano (referência de contexto)
export function receitaRunnerAno(n: number, cidade: Cidade): number {
  return n * tickets[cidade] * 12;
}

export function formatBRL(v: number): string {
  return v.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  });
}

// ── Perfil + link pessoal (o link que nunca se perde) ───────
export type Perfil = { id: string; nome: string; email: string; cidade: Cidade };

export function slugify(t: string): string {
  return (t || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "") // remove acentos
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function tinyHash(t: string): string {
  let h = 0;
  t = (t || "").toLowerCase();
  for (let i = 0; i < t.length; i++) {
    h = (h << 5) - h + t.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h).toString(36);
}

// Mesmo nome + e-mail geram sempre o mesmo ID (link estável)
export function makeId(nome: string, email: string): string {
  return slugify(nome).slice(0, 22) + "-" + tinyHash(email);
}

export function encToken(p: { id: string; nome: string; cidade: Cidade }): string {
  return btoa(
    unescape(
      encodeURIComponent(JSON.stringify({ i: p.id, n: p.nome, c: p.cidade }))
    )
  );
}

export function decToken(
  t: string
): { id: string; nome: string; cidade: Cidade } | null {
  try {
    const o = JSON.parse(decodeURIComponent(escape(atob(t))));
    return { id: o.i, nome: o.n, cidade: o.c };
  } catch {
    return null;
  }
}

export function linkPessoal(p: { id: string; nome: string; cidade: Cidade }): string {
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  return `${origin}/indique?ref=${encodeURIComponent(encToken(p))}`;
}
