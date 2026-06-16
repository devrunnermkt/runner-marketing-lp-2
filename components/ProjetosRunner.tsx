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

export default function ProjetosRunner() {
  const { projetos } = siteConfig;

  return (
    <section id="projetos" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-4">
            Projetos Runner
          </h2>
          <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto">
            Marcas de saúde que a gente ajudou a comunicar melhor. Toque para
            ver cada uma no Instagram.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projetos.map((proj, i) => (
            <article key={i} className="group flex flex-col">
              {/* Imagem */}
              <a
                href={proj.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block aspect-[4/3] overflow-hidden rounded-2xl bg-slate-200 shadow-sm"
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
                  href={proj.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-start text-sm font-semibold text-teal-700 underline underline-offset-4 decoration-2 hover:text-teal-600 mb-4"
                >
                  {proj.categoria}
                </a>
                <p className="text-sm sm:text-base text-slate-500 leading-relaxed mb-6">
                  {proj.descricao}
                </p>

                {/* Botão com identidade visual do Instagram */}
                <a
                  href={proj.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#4f5bd5] hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2"
                >
                  <InstagramIcon className="w-4 h-4" />
                  Ver no Instagram
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
