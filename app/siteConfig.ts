// ============================================================
// ARQUIVO CENTRAL DE CONTEÚDO — edite aqui sem tocar no layout
// (Veja o README para o racional bloco a bloco)
// ============================================================

// ── WhatsApp ────────────────────────────────────────────────
// Número no formato internacional só com dígitos (DDI + DDD + número).
const WHATSAPP_NUMERO = "5511997188406"; // +55 11 99718-8406
// Mensagem que já vem preenchida quando o lead clica em qualquer botão de WhatsApp:
const WHATSAPP_MENSAGEM =
  "Olá! Vim pelo site da Runner e quero um diagnóstico gratuito do meu marketing.";

// Monta a URL do WhatsApp. Use buildWhatsapp("texto extra") para sobrescrever a mensagem.
export function buildWhatsapp(mensagem: string = WHATSAPP_MENSAGEM): string {
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`;
}

export const siteConfig = {
  // ── Identidade ──────────────────────────────────────────
  siteName: "Runner Marketing",
  siteDescription:
    "Agência de marketing para médicos e clínicas. Enchemos a sua agenda com os pacientes certos, dentro da Resolução CFM nº 2.336/2023. Diagnóstico gratuito.",
  siteUrl: "[SITE_URL]", // ex: https://runnermarketing.com.br
  openGraphImage: "[OG_IMAGE_URL]",
  logoText: "Runner",

  // ── Contato / CTAs ──────────────────────────────────────
  whatsappNumero: WHATSAPP_NUMERO,
  whatsappMensagem: WHATSAPP_MENSAGEM,
  whatsappUrl: buildWhatsapp(),
  whatsappDisplay: "+55 11 99718-8406",
  email: "runnermarketing01@gmail.com",
  instagram: "@runnermkt",
  instagramUrl: "https://instagram.com/runnermkt",
  linkedinUrl: "[LINKEDIN_URL]",
  endpointForm: "[ENDPOINT_FORM]", // URL do backend ou deixar vazio para abrir WhatsApp
  prazoDias: "24", // ex: 24

  // ── Google Business ──────────────────────────────────────
  notaGoogle: "[NOTA_GOOGLE]", // ex: 4.9
  qtdAvaliacoes: "[QTD_AVALIACOES]", // ex: 47
  linkGoogleBusiness: "[LINK_GOOGLE_BUSINESS]",

  // ── Vídeo de vendas ─────────────────────────────────────
  videoUrl: "[VIDEO_URL]", // URL do YouTube/Vimeo

  // ── Avaliações Google (estilo card do Google) ────────────
  // Manter como placeholder — não inventar depoimentos reais.
  // foto: opcional (ex: "/avaliacoes/nome.jpg"). Sem foto, usa inicial colorida.
  avaliacoes: [
    { nome: "[NOME_1]", data: "[DATA_1]", nota: 5, texto: "[DEPOIMENTO_1]", foto: "", cor: "#7c3aed" },
    { nome: "[NOME_2]", data: "[DATA_2]", nota: 5, texto: "[DEPOIMENTO_2]", foto: "", cor: "#0ea5e9" },
    { nome: "[NOME_3]", data: "[DATA_3]", nota: 5, texto: "[DEPOIMENTO_3]", foto: "", cor: "#475569" },
    { nome: "[NOME_4]", data: "[DATA_4]", nota: 5, texto: "[DEPOIMENTO_4]", foto: "", cor: "#0d9488" },
    { nome: "[NOME_5]", data: "[DATA_5]", nota: 5, texto: "[DEPOIMENTO_5]", foto: "", cor: "#db2777" },
  ],

  // ── Métricas (valores fictícios, troque pelos reais) ─────
  metricas: [
    { valor: "120+", label: "Clínicas e profissionais atendidos" },
    { valor: "8,4x", label: "Retorno médio sobre o investimento em mídia" },
    { valor: "97%", label: "Dos clientes seguem com a Runner após 6 meses" },
    { valor: "18 meses", label: "Tempo médio de parceria do cliente com a Runner" },
  ],

  // ── Projetos Runner (portfólio / cases) ──────────────────
  // foto: foto de perfil em public/projetos/ (já baixadas do Instagram).
  // instagram: link do perfil (abre em nova aba pelo botão do card).
  projetos: [
    {
      nome: "Dra. Julia Justo",
      categoria: "Identidade visual",
      descricao:
        "Presença digital sofisticada, identidade profissional e comunicação focada em performance.",
      foto: "/projetos/justojulia.jpg",
      instagram: "https://www.instagram.com/justojulia/",
      behance: "https://www.behance.net/gallery/251238183/Julia-Justo-Medicina-Esportiva",
    },
    {
      nome: "Dr. Frederico Pessoa",
      categoria: "Social media completa",
      descricao:
        "Gestão completa de redes sociais: conteúdo, roteiro e posicionamento de autoridade.",
      foto: "/projetos/dr.fredericopessoa.jpg",
      instagram: "https://www.instagram.com/dr.fredericopessoa/",
      behance: "https://www.behance.net/gallery/251240145/Dr-Frederico-Pessoa",
    },
    {
      nome: "Dr. Yan Campos",
      categoria: "Social media completa",
      descricao:
        "Identidade visual, landing page, materiais de marca e conteúdo estratégico.",
      foto: "/projetos/dryancampos.jpg",
      instagram: "https://www.instagram.com/dryancampos/",
      behance: "https://www.behance.net/gallery/251238713/Yan-Campos-Tricologia",
    },
  ],

  // ── Time ─────────────────────────────────────────────────
  // foto: coloque o arquivo em public/time/ (ex: "/time/flavio.jpg").
  // Deixe "" para exibir o avatar placeholder com ícone.
  time: [
    {
      nome: "Flávio Jr.",
      funcao: "Direção criativa",
      tag: "Estratégia",
      descricao: "Posicionamento, estética e estratégia de marca.",
      foto: "/time/flavio.jpg",
    },
    {
      nome: "Gabriel Rubney",
      funcao: "Gestão e atendimento",
      tag: "Conteúdo",
      descricao: "Rotina, relacionamento e clareza nas entregas.",
      foto: "/time/gabriel.jpg",
    },
    {
      nome: "Membro Runner",
      funcao: "Performance",
      tag: "Tráfego",
      descricao: "Campanhas, dados e melhoria contínua.",
      foto: "",
    },
    {
      nome: "Membro Runner",
      funcao: "Produção",
      tag: "Design",
      descricao: "Roteiro, captação, edição e design.",
      foto: "",
    },
  ],

  // ── SEO / Meta ────────────────────────────────────────────
  cidades: "São Paulo e Porto Velho",
  anoAtual: new Date().getFullYear(),
};
