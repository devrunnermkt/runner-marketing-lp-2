"use client";

import { useState } from "react";
import Image from "next/image";
import { User } from "lucide-react";

/**
 * Foto do membro do time com fallback gracioso:
 * se o arquivo não existir (ou foto vazia), mostra o avatar placeholder
 * em vez de uma imagem quebrada.
 */
export default function TeamPhoto({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const [erro, setErro] = useState(false);
  const mostrarFoto = src && src.trim() !== "" && !erro;

  if (!mostrarFoto) {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <User size={56} className="text-teal-500/70" aria-hidden="true" />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
      className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
      onError={() => setErro(true)}
    />
  );
}
