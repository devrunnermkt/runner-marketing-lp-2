"use client";

import { useState, useEffect } from "react";
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
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isAtTop = scrollY === 0;
  const scrollOpacity = Math.min(scrollY / 100, 1);
  const bgOpacity = isAtTop ? 0 : Math.max(0.8, scrollOpacity);

  const isScrolled = bgOpacity > 0.3;
  const shadowIntensity = bgOpacity > 0.5 ? 0.15 : bgOpacity * 0.3;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pt-2 px-3 sm:px-5 transition-all duration-300"
      style={{
        opacity: 1
      }}
    >
      <header
        className="backdrop-blur-md transition-all duration-300 rounded-xl"
        style={{
          backgroundColor: `rgba(255, 255, 255, ${bgOpacity})`,
          boxShadow: bgOpacity > 0.5
            ? `0 4px 12px rgba(0, 0, 0, ${shadowIntensity * 0.6})`
            : 'none'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center group cursor-pointer border-none bg-none p-0"
              aria-label="Runner Marketing, voltar ao topo"
            >
              <Image
                src="/logo-runner.svg"
                alt="Runner Marketing"
                width={220}
                height={57}
                priority
                className="h-11 sm:h-12 w-auto transition-all duration-300"
                style={{
                  opacity: isAtTop ? 0.6 : 1,
                  filter: isAtTop ? 'brightness(1.5) saturate(0.7)' : 'brightness(1)'
                }}
              />
            </button>

            {/* Nav desktop */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold transition-all duration-300"
                  style={{
                    color: isScrolled ? '#1e293b' : 'rgba(255, 255, 255, 0.8)',
                    textShadow: isAtTop ? '0 1px 2px rgba(0, 0, 0, 0.3)' : 'none'
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA desktop */}
            <a
              href="/#contato"
              className="hidden md:inline-flex items-center px-6 py-2.5 text-base font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{
                backgroundColor: isScrolled ? '#0d9488' : 'rgba(13, 148, 136, 0.9)',
                color: '#ffffff',
                boxShadow: isScrolled
                  ? '0 4px 12px rgba(13, 148, 136, 0.3)'
                  : '0 2px 6px rgba(0, 0, 0, 0.2)'
              }}
            >
              Diagnóstico gratuito
            </a>

            {/* Hambúrguer mobile */}
            <button
              className="md:hidden p-2 rounded-lg transition-colors duration-300"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              style={{
                color: isScrolled ? '#1e293b' : 'rgba(255, 255, 255, 0.9)',
                backgroundColor: isScrolled ? 'rgba(100, 116, 139, 0.1)' : 'transparent'
              }}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {menuOpen && (
          <div
            className="md:hidden transition-all duration-300"
            style={{
              backgroundColor: `rgba(255, 255, 255, ${bgOpacity === 0 ? 0.05 : bgOpacity * 0.05})`,
            }}
          >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-base font-semibold py-3 px-3 rounded-md transition-all duration-300"
                  style={{
                    color: isScrolled ? '#1e293b' : '#1e293b',
                    backgroundColor: isScrolled ? 'rgba(100, 116, 139, 0.08)' : 'transparent'
                  }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/#contato"
                onClick={() => setMenuOpen(false)}
                className="block w-full text-center mt-3 px-5 py-3 text-base font-semibold rounded-lg transition-all duration-300 text-white"
                style={{
                  backgroundColor: isScrolled ? '#0d9488' : '#0d9488',
                  boxShadow: isScrolled
                    ? '0 4px 12px rgba(13, 148, 136, 0.3)'
                    : '0 2px 6px rgba(0, 0, 0, 0.2)'
                }}
              >
                Diagnóstico gratuito
              </a>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
