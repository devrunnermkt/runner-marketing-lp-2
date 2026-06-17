"use client";

import { useEffect, useRef, useState } from "react";
import type HlsType from "hls.js";
import { siteConfig } from "@/app/siteConfig";
import { ArrowRight, Volume2, VolumeX } from "lucide-react";

export default function VSL() {
  const url = siteConfig.vslHlsUrl;
  const isPlaceholder = !url;

  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const startedRef = useRef(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    if (isPlaceholder) return;
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;

    let hls: HlsType | undefined;
    let cancelled = false;

    // Só inicializa (e baixa o hls.js + vídeo) quando o bloco entra na tela.
    const start = async () => {
      if (startedRef.current) return;
      startedRef.current = true;

      if (video.canPlayType("application/vnd.apple.mpegurl")) {
        // Safari / iOS reproduzem HLS nativamente
        video.src = url;
      } else {
        const { default: Hls } = await import("hls.js");
        if (cancelled) return;
        if (Hls.isSupported()) {
          hls = new Hls({ maxBufferLength: 30 });
          hls.loadSource(url);
          hls.attachMedia(video);
        } else {
          video.src = url;
        }
      }
      // Tenta tocar COM som ao entrar no bloco. Se o navegador bloquear
      // (autoplay com áudio sem interação prévia), cai pra mudo + botão.
      video.muted = false;
      try {
        await video.play();
        setMuted(false);
      } catch {
        video.muted = true;
        setMuted(true);
        video.play().catch(() => {});
      }
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            if (!startedRef.current) start();
            else if (video.paused) video.play().catch(() => {});
          } else if (startedRef.current) {
            video.pause();
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(container);

    return () => {
      cancelled = true;
      io.disconnect();
      hls?.destroy();
    };
  }, [isPlaceholder, url]);

  const ativarSom = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    setMuted(false);
    video.play().catch(() => {});
  };

  const tirarSom = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    setMuted(true);
  };

  // Sem URL configurada: não renderiza a seção (evita mostrar bloco vazio).
  if (isPlaceholder) return null;

  return (
    <section className="py-20 md:py-28 bg-ink">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Comece por aqui
        </h2>
        <p className="text-base sm:text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
          Em 2 minutos você entende por que clínicas com ótima reputação ainda
          têm horários vagos, e o que muda quando o marketing é feito por quem
          entende de medicina.
        </p>

        {/* Player */}
        <div
          ref={containerRef}
          className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl mb-10 bg-slate-800"
        >
          <video
            ref={videoRef}
            poster="/vsl-poster.webp"
            playsInline
            muted
            loop={false}
            preload="none"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay "Ativar som" enquanto mudo */}
          {muted && (
            <button
              onClick={ativarSom}
              aria-label="Ativar som do vídeo"
              className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group"
            >
              <span className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white/95 text-ink text-base sm:text-lg font-bold shadow-xl group-hover:scale-105 transition-transform">
                <Volume2 size={22} className="text-teal-600" />
                Ativar som
              </span>
            </button>
          )}

          {/* Botão pequeno pra mutar de novo, quando com som */}
          {!muted && (
            <button
              onClick={tirarSom}
              aria-label="Desativar som do vídeo"
              className="absolute bottom-3 right-3 flex items-center justify-center w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
            >
              <VolumeX size={18} />
            </button>
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
