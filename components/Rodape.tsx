import Image from "next/image";
import { siteConfig } from "@/app/siteConfig";
import { MessageCircle, Mail } from "lucide-react";

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

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Especialidades", href: "/#especialidades" },
  { label: "Projetos", href: "/#projetos" },
  { label: "Indique e Ganhe", href: "/indique" },
  { label: "Política de Cookies", href: "/politica-de-cookies" },
];

export default function Rodape() {
  return (
    <footer className="bg-ink text-slate-400 pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Identidade */}
          <div>
            <Image
              src="/logo-runner.svg"
              alt="Runner Marketing"
              width={160}
              height={42}
              className="h-9 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm leading-relaxed mb-3">
              Marketing para clínicas e profissionais da saúde
            </p>
            <p className="text-sm text-slate-500">{siteConfig.cidades}</p>
          </div>

          {/* Contato */}
          <div>
            <p className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Contato
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-contato="whatsapp"
                  data-local="rodape"
                  className="btn-contato flex items-center gap-2 text-sm hover:text-teal-400 transition-colors"
                >
                  <MessageCircle size={15} />
                  {siteConfig.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  data-contato="email"
                  data-local="rodape"
                  className="btn-contato flex items-center gap-2 text-sm hover:text-teal-400 transition-colors"
                >
                  <Mail size={15} />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:text-teal-400 transition-colors"
                >
                  <InstagramIcon className="w-[15px] h-[15px]" />
                  {siteConfig.instagram}
                </a>
              </li>
            </ul>
          </div>

          {/* Navegação */}
          <div>
            <p className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Navegação
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-teal-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 space-y-2">
          <p className="text-xs text-slate-500 text-center">
            Marketing médico em conformidade com a Resolução CFM nº 2.336/2023.
          </p>
          <p className="text-xs text-slate-600 text-center">
            © {siteConfig.anoAtual} Runner Marketing. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
