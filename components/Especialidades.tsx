"use client";

import { useState } from "react";
import Image from "next/image";
import {
  TrendingUp,
  Shield,
  Video,
  Palette,
  Globe,
  BarChart3,
  ChevronLeft,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";

type Servico = {
  icon: LucideIcon;
  titulo: string;
  tags: string;
  descricao: string;
  imagem?: string;
  imagemPos?: string; // classe de object-position (ex: "object-top")
};

const servicos: Servico[] = [
  {
    icon: TrendingUp,
    titulo: "Tráfego pago para clínicas",
    tags: "Google · Meta · Conversão",
    descricao:
      "Campanhas para atrair o paciente com real intenção de marcar, não o curioso atrás de preço. Mais agenda e menos faltas.",
    imagem: "/servicos/gestao-de-trafego.webp",
  },
  {
    icon: Shield,
    titulo: "Redes sociais com conformidade CFM",
    tags: "Instagram · CFM · Autoridade",
    descricao:
      "Conteúdo que constrói autoridade, com revisão de cada peça antes de publicar. Você cresce sem cruzar nenhuma linha da Resolução 2.336.",
    imagem: "/servicos/cfm.webp",
  },
  {
    icon: Video,
    titulo: "Conteúdo e roteiro de Reels",
    tags: "Roteiro · Gravação · Edição",
    descricao:
      "Roteiro, gravação orientada e edição para quem não tem tempo de virar produtor de vídeo. Você grava em minutos e a gente cuida do resto.",
    imagem: "/servicos/roteiros.webp",
  },
  {
    icon: Palette,
    titulo: "Identidade visual e posicionamento",
    tags: "Branding · Identidade · Posicionamento",
    descricao:
      "Uma marca de clínica que transmite confiança e diferencia você de quem só compete por preço.",
    imagem: "/servicos/identidade-visual.webp",
  },
  {
    icon: Globe,
    titulo: "Sites e landing pages que convertem",
    tags: "Sites · Landing pages · SEO",
    descricao:
      "Páginas rápidas, no padrão de quem busca um especialista e construídas para transformar a visita em consulta marcada.",
    imagem: "/servicos/landing-page.webp",
    imagemPos: "object-top",
  },
  {
    icon: BarChart3,
    titulo: "Relatórios e acompanhamento",
    tags: "Dados · Relatórios · ROI",
    descricao:
      "Você enxerga de onde vem cada paciente e o retorno de cada real investido. Decisão com dado, não com achismo.",
    imagem: "/servicos/relatorio.webp",
  },
];

// Posição de cada card conforme a distância (offset) até o card central.
function estiloCard(offset: number): React.CSSProperties {
  const abs = Math.abs(offset);
  const sign = Math.sign(offset);
  const map: Record<number, { tx: number; scale: number; op: number; z: number }> = {
    0: { tx: 0, scale: 1, op: 1, z: 30 },
    1: { tx: 64, scale: 0.82, op: 0.55, z: 20 },
    2: { tx: 112, scale: 0.66, op: 0.25, z: 10 },
  };
  const p = map[abs] ?? { tx: 150, scale: 0.55, op: 0, z: 0 };
  return {
    transform: `translateX(-50%) translateX(${sign * p.tx}%) scale(${p.scale})`,
    opacity: p.op,
    zIndex: p.z,
    pointerEvents: abs === 0 ? "auto" : abs <= 2 ? "auto" : "none",
  };
}

export default function Especialidades() {
  const n = servicos.length;
  const [active, setActive] = useState(0);

  const go = (dir: number) => setActive((a) => (a + dir + n) % n);

  // offset circular (menor caminho) entre o card i e o ativo
  const offsetDe = (i: number) => {
    let o = i - active;
    if (o > n / 2) o -= n;
    if (o < -n / 2) o += n;
    return o;
  };

  return (
    <section id="especialidades" className="py-20 md:py-28 bg-slate-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-teal-600 mb-4">
            <span className="w-6 h-px bg-teal-500" />O que fazemos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-4">
            Tudo que a sua clínica precisa,{" "}
            <span className="text-teal-600">em um só lugar</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto">
            Cada entrega é pensada para posicionar a sua marca com ética,
            autoridade e <strong className="text-slate-700">resultado mensurável</strong>.
          </p>
        </div>

        {/* Carrossel coverflow */}
        <div className="relative flex items-center justify-center">
          {/* Seta esquerda */}
          <button
            onClick={() => go(-1)}
            aria-label="Serviço anterior"
            className="absolute left-0 sm:left-4 z-40 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white shadow-md text-ink hover:bg-teal-50 hover:text-teal-600 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Palco */}
          <div className="relative h-[460px] sm:h-[480px] w-full">
            {servicos.map((s, i) => {
              const offset = offsetDe(i);
              const Icon = s.icon;
              const isActive = offset === 0;
              return (
                <article
                  key={s.titulo}
                  onClick={() => setActive(i)}
                  style={estiloCard(offset)}
                  className={[
                    "absolute left-1/2 top-2 w-72 sm:w-80 rounded-3xl bg-white overflow-hidden transition-all duration-500 ease-out",
                    isActive
                      ? "shadow-2xl cursor-default"
                      : "shadow-lg cursor-pointer",
                  ].join(" ")}
                  aria-hidden={!isActive}
                >
                  {/* Topo: imagem do serviço (ou gradiente + ícone como fallback) */}
                  <div className="relative h-40 sm:h-44 bg-gradient-to-br from-teal-400 via-teal-500 to-ink flex items-center justify-center">
                    {s.imagem ? (
                      <Image
                        src={s.imagem}
                        alt={s.titulo}
                        fill
                        sizes="(max-width: 640px) 288px, 320px"
                        className={`object-cover ${s.imagemPos ?? ""}`}
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_30%,white,transparent_60%)]" />
                        <Icon size={56} className="relative text-white" strokeWidth={1.5} />
                      </>
                    )}
                  </div>

                  {/* Corpo */}
                  <div className="p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-ink mb-1.5">
                      {s.titulo}
                    </h3>
                    <p className="text-xs font-semibold text-teal-600 mb-4">
                      {s.tags}
                    </p>
                    <p className="text-sm text-slate-500 leading-relaxed italic">
                      {s.descricao}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Seta direita */}
          <button
            onClick={() => go(1)}
            aria-label="Próximo serviço"
            className="absolute right-0 sm:right-4 z-40 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white shadow-md text-ink hover:bg-teal-50 hover:text-teal-600 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {servicos.map((s, i) => (
            <button
              key={s.titulo}
              onClick={() => setActive(i)}
              aria-label={`Ir para ${s.titulo}`}
              aria-current={i === active}
              className={[
                "h-2 rounded-full transition-all",
                i === active
                  ? "w-7 bg-teal-500"
                  : "w-2 bg-slate-300 hover:bg-slate-400",
              ].join(" ")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
