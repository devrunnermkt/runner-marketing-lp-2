import { siteConfig } from "@/app/siteConfig";
import TeamPhoto from "./TeamPhoto";

export default function Time() {
  const { time } = siteConfig;

  return (
    <section id="time" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-4">
            Quem entende de medicina e de marketing
          </h2>
          <p className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto">
            A Runner nasceu da obsessão por conteúdo que comunica de verdade e
            se especializou em quem cuida de vidas.
          </p>
        </div>

        {/* Grid do time */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {time.map((membro, i) => {
            return (
              <article
                key={i}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-shadow"
              >
                {/* Foto / placeholder */}
                <div className="relative aspect-[3/5] bg-teal-50 overflow-hidden">
                  <TeamPhoto
                    src={membro.foto}
                    alt={`${membro.nome}, ${membro.funcao} na Runner Marketing`}
                  />

                  {/* Badge */}
                  <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-teal-500 text-white text-xs font-semibold shadow-sm">
                    {membro.tag}
                  </span>
                </div>

                {/* Corpo do card */}
                <div className="p-5">
                  <h3 className="text-base font-bold text-ink">{membro.nome}</h3>
                  <p className="text-sm font-semibold text-teal-700 mb-2">
                    {membro.funcao}
                  </p>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {membro.descricao}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <p className="text-center mt-12 text-slate-500 text-sm max-w-lg mx-auto">
          Um time pequeno, especialista e que responde, sem você virar mais um
          número numa agência grande.
        </p>
      </div>
    </section>
  );
}
