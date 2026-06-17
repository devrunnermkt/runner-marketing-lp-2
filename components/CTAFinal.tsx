import { siteConfig } from "@/app/siteConfig";
import { ArrowRight } from "lucide-react";

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5 0 1.47 1.08 2.9 1.23 3.1.15.2 2.12 3.24 5.13 4.54.72.31 1.28.5 1.71.64.72.23 1.38.2 1.9.12.58-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12 21.5a9.5 9.5 0 0 1-4.85-1.33l-.35-.2-3.6.94.96-3.5-.23-.36A9.5 9.5 0 1 1 12 21.5zM12 2a11.5 11.5 0 0 0-9.9 17.3L1 23l3.78-.99A11.5 11.5 0 1 0 12 2z" />
    </svg>
  );
}

export default function CTAFinal() {
  return (
    <section
      id="contato"
      className="py-20 md:py-28 bg-gradient-to-br from-teal-700 to-teal-900"
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          A sua agenda lotada é apenas uma decisão.
        </h2>
        <p className="text-base sm:text-lg text-teal-100 mb-10 max-w-xl mx-auto">
          Agende o seu diagnóstico gratuito. Vamos desenhar o plano de ação que
          levará a sua clínica para o próximo nível de previsibilidade e
          faturamento.
        </p>

        <a
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-contato="whatsapp"
          data-local="cta-final"
          className="btn-contato inline-flex items-center justify-center gap-3 px-8 py-5 bg-[#25D366] hover:bg-[#1ebe5b] text-white text-lg sm:text-xl font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-teal-800"
        >
          <WhatsAppIcon className="w-6 h-6" />
          Quero meu diagnóstico gratuito
          <ArrowRight size={20} />
        </a>

        <p className="mt-5 text-sm text-teal-200">
          Resposta em até 30min · Sem compromisso
        </p>
      </div>
    </section>
  );
}
