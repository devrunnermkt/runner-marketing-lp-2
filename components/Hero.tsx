import { ArrowRight, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden bg-slate-900">
      {/* Vídeo de fundo */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-bg-poster.jpg"
        aria-hidden="true"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Overlay para legibilidade, mais forte à esquerda */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/80 to-ink/40"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-ink/30 md:bg-transparent"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
            <ShieldCheck size={14} className="text-teal-300" />
            <span className="text-xs font-semibold text-teal-100 uppercase tracking-wider">
              Agência de marketing para médicos e clínicas
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Encha a sua agenda de pacientes.{" "}
            <span className="text-teal-300">Sem risco com o CFM.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-slate-200 leading-relaxed mb-10 max-w-2xl">
            Agências comuns vendem o seu consultório como loja — escassez,
            antes e depois, promessas que viram processo no Conselho. A Runner
            atrai pacientes que já querem se tratar, dentro de cada linha da{" "}
            <strong className="text-white">Resolução CFM 2.336/2023</strong>.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contato"
              data-contato="cta"
              data-local="hero"
              className="btn-contato inline-flex items-center justify-center gap-2 px-7 py-4 bg-teal-500 text-white text-base sm:text-lg font-semibold rounded-xl hover:bg-teal-400 transition-colors shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-ink"
            >
              Quero minha agenda cheia e sem risco
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Microcopy */}
          <p className="mt-4 text-sm text-slate-300">
            Diagnóstico gratuito e sem compromisso. Você sai da conversa com um
            plano de ação, mesmo que não feche com a gente.
          </p>
        </div>
      </div>
    </section>
  );
}
