import Image from "next/image";
import { siteConfig } from "@/app/siteConfig";

/* Ícone do Instagram (lucide não exporta nesta versão) */
function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

/* Ícone do Behance */
function BehanceIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M8.8 7.1c.6 0 1.1.05 1.6.16.5.1.9.27 1.2.5.34.24.6.55.78.95.18.4.27.88.27 1.46 0 .62-.14 1.14-.43 1.55-.28.42-.7.76-1.26 1.02.76.22 1.33.6 1.7 1.15.38.54.57 1.2.57 1.96 0 .62-.12 1.15-.36 1.6-.24.45-.56.82-.97 1.1-.4.3-.87.5-1.4.64-.52.13-1.05.2-1.6.2H2V7.1h6.8zM8.43 11.4c.5 0 .9-.12 1.22-.35.32-.24.48-.62.48-1.15 0-.3-.05-.54-.16-.73a1.16 1.16 0 0 0-.43-.44 1.8 1.8 0 0 0-.62-.22 4 4 0 0 0-.73-.06H5v2.95h3.43zM8.6 15.9c.28 0 .54-.03.78-.08.24-.05.46-.14.64-.27.18-.13.33-.3.44-.52.1-.22.16-.5.16-.83 0-.65-.18-1.12-.55-1.4-.37-.28-.86-.42-1.46-.42H5v3.52h3.6zM16.4 15.8c.34.33.83.5 1.47.5.46 0 .85-.12 1.18-.35.33-.23.53-.48.6-.73h2.2c-.35 1.1-.9 1.88-1.62 2.35-.73.47-1.6.7-2.63.7-.72 0-1.36-.11-1.94-.34a4.1 4.1 0 0 1-1.47-.97 4.3 4.3 0 0 1-.92-1.5 5.5 5.5 0 0 1-.32-1.92c0-.68.11-1.31.34-1.9.22-.59.54-1.1.95-1.52.41-.43.9-.76 1.47-1 .57-.24 1.2-.36 1.9-.36.77 0 1.45.15 2.02.45.58.3 1.05.7 1.42 1.2.37.5.64 1.08.8 1.73.16.65.22 1.33.17 2.04h-6.6c0 .72.18 1.27.51 1.6zM18.96 11.4c-.27-.3-.7-.46-1.28-.46-.38 0-.7.06-.95.2-.25.12-.45.28-.6.47-.16.18-.26.38-.32.59-.06.2-.1.39-.1.55h4.07c-.06-.64-.27-1.04-.54-1.34zM15 8.1h5.07V9.4H15V8.1z" />
    </svg>
  );
}

export default function ProjetosRunner() {
  const { projetos } = siteConfig;

  return (
    <section id="projetos" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-4">
            Imagem de alto valor atrai pacientes de alto valor.
          </h2>
          <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto">
            Veja como o nosso design e edições de vídeo elevam o status da sua
            clínica logo no primeiro contato.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projetos.map((proj, i) => {
            const isBehance = Boolean(proj.behance);
            const link = proj.behance || proj.instagram;
            return (
              <article key={i} className="group flex flex-col">
                {/* Imagem */}
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block aspect-[3/4] overflow-hidden rounded-2xl bg-slate-200 shadow-sm"
                >
                  <Image
                    src={proj.foto}
                    alt={`Projeto da Runner: ${proj.nome}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
                  />
                </a>

                {/* Conteúdo */}
                <div className="pt-5 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-ink mb-1">{proj.nome}</h3>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start text-sm font-semibold text-teal-700 underline underline-offset-4 decoration-2 hover:text-teal-600 mb-4"
                  >
                    {proj.categoria}
                  </a>
                  <p className="text-sm sm:text-base text-slate-500 leading-relaxed mb-6">
                    {proj.descricao}
                  </p>

                  {/* Botão: Behance (azul) ou Instagram (gradiente) */}
                  {isBehance ? (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold bg-[#1769FF] hover:bg-[#0055E4] transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                    >
                      <BehanceIcon className="w-4 h-4" />
                      Ver no Behance
                    </a>
                  ) : (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#4f5bd5] hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2"
                    >
                      <InstagramIcon className="w-4 h-4" />
                      Ver no Instagram
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
