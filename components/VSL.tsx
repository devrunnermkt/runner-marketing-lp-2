import { siteConfig } from "@/app/siteConfig";
import { ArrowRight, PlayCircle } from "lucide-react";

export default function VSL() {
  const isPlaceholder =
    !siteConfig.videoUrl || siteConfig.videoUrl === "[VIDEO_URL]";

  return (
    <section className="py-20 md:py-28 bg-ink">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Assista antes de investir mais um real em anúncios
        </h2>
        <p className="text-base sm:text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
          Em 2 minutos você entende por que clínicas com ótima reputação ainda
          têm horários vagos, e o que muda quando o marketing é feito por quem
          entende de medicina.
        </p>

        {/* Player */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl mb-10 bg-slate-800">
          {isPlaceholder ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <PlayCircle size={72} className="text-teal-400 opacity-70" />
              <span className="text-slate-400 text-sm">
                [VIDEO_URL]: substitua em siteConfig.ts
              </span>
            </div>
          ) : (
            <iframe
              src={siteConfig.videoUrl}
              title="Vídeo de vendas Runner Marketing"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          )}
        </div>

        <a
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-contato="whatsapp"
          data-local="vsl"
          className="btn-contato inline-flex items-center gap-2 px-7 py-4 bg-teal-500 text-white text-base sm:text-lg font-semibold rounded-xl hover:bg-teal-400 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-ink"
        >
          Falar agora com a Runner
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}
