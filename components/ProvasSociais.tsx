import Image from "next/image";
import { siteConfig } from "@/app/siteConfig";
import { Star, BadgeCheck } from "lucide-react";

/* Logo "G" do Google */
function GoogleG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
      />
      <path
        fill="#34A853"
        d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
      />
      <path
        fill="#FBBC05"
        d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34A21.99 21.99 0 0 0 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"
      />
      <path
        fill="#EA4335"
        d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"
      />
    </svg>
  );
}

/* Ícone WhatsApp */
function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5 0 1.47 1.08 2.9 1.23 3.1.15.2 2.12 3.24 5.13 4.54.72.31 1.28.5 1.71.64.72.23 1.38.2 1.9.12.58-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12 21.5a9.5 9.5 0 0 1-4.85-1.33l-.35-.2-3.6.94.96-3.5-.23-.36A9.5 9.5 0 1 1 12 21.5zM12 2a11.5 11.5 0 0 0-9.9 17.3L1 23l3.78-.99A11.5 11.5 0 1 0 12 2z" />
    </svg>
  );
}

type Avaliacao = (typeof siteConfig.avaliacoes)[number];

function CardAvaliacao({ av }: { av: Avaliacao }) {
  const inicial = av.nome.replace(/[^a-zA-ZÀ-ú]/g, "").charAt(0) || "?";
  const hasFoto = av.foto && av.foto.trim() !== "";
  return (
    <article className="shrink-0 w-[280px] sm:w-[300px] bg-slate-50 rounded-xl p-5 border border-slate-100">
      {/* Topo: avatar + nome + data + G */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          {hasFoto ? (
            <Image
              src={av.foto}
              alt={av.nome}
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
              style={{ backgroundColor: av.cor }}
            >
              <span className="text-white font-semibold text-sm uppercase">
                {inicial}
              </span>
            </div>
          )}
          <div>
            <p className="text-sm font-semibold text-slate-800 leading-tight">
              {av.nome}
            </p>
            <p className="text-xs text-slate-400">{av.data}</p>
          </div>
        </div>
        <GoogleG className="w-5 h-5 shrink-0" />
      </div>

      {/* Estrelas + verificado */}
      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, s) => (
          <Star
            key={s}
            size={16}
            className={
              s < av.nota
                ? "fill-yellow-400 text-yellow-400"
                : "fill-slate-200 text-slate-200"
            }
          />
        ))}
        <BadgeCheck size={15} className="text-sky-500 ml-1" />
      </div>

      {/* Texto */}
      <p className="text-sm text-slate-600 leading-relaxed">{av.texto}</p>
    </article>
  );
}

export default function ProvasSociais() {
  return null;
}
