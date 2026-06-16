"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Especialidades", href: "/#especialidades" },
  { label: "Resultados", href: "/#resultados" },
  { label: "Projetos", href: "/#projetos" },
  { label: "Indique e Ganhe", href: "/indique" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center group" aria-label="Runner Marketing, ir para o início">
            <Image
              src="/logo-runner.svg"
              alt="Runner Marketing"
              width={220}
              height={57}
              priority
              className="h-11 sm:h-12 w-auto"
            />
          </a>

          {/* Nav desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA desktop */}
          <a
            href="/#contato"
            className="hidden md:inline-flex items-center px-6 py-3 bg-teal-600 text-white text-base font-semibold rounded-lg hover:bg-teal-700 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Diagnóstico gratuito
          </a>

          {/* Hambúrguer mobile */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-base font-medium text-slate-700 hover:text-teal-600 py-2 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#contato"
              onClick={() => setMenuOpen(false)}
              className="block w-full text-center mt-2 px-5 py-3.5 bg-teal-600 text-white text-base font-semibold rounded-lg hover:bg-teal-700 transition-colors"
            >
              Diagnóstico gratuito
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
