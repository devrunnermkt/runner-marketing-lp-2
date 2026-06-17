import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { siteConfig } from "./siteConfig";
import CookieConsent from "@/components/CookieConsent";
import Analytics from "@/components/Analytics";

// URL pública do site (defina NEXT_PUBLIC_SITE_URL na Vercel, ex: https://lp.runner.com.br)
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://runnermarketing.com.br";
// Só permite indexação no ambiente de produção (previews ficam noindex)
const isProd = process.env.VERCEL_ENV === "production" || process.env.NEXT_PUBLIC_ALLOW_INDEX === "true";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${siteConfig.siteName} | Marketing Médico que Enche a Agenda, sem Risco no CFM`,
  description: siteConfig.siteDescription,
  keywords: [
    "marketing médico",
    "marketing para clínicas",
    "marketing para médicos",
    "CFM 2.336",
    "tráfego pago para médicos",
    "agência de marketing médico São Paulo",
    "agência de marketing médico Porto Velho",
    "marketing digital saúde",
  ],
  authors: [{ name: siteConfig.siteName }],
  openGraph: {
    title: `${siteConfig.siteName} | Marketing Médico que Enche a Agenda, sem Risco no CFM`,
    description: siteConfig.siteDescription,
    url: SITE_URL,
    siteName: siteConfig.siteName,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.siteName} | Marketing Médico que Enche a Agenda, sem Risco no CFM`,
    description: siteConfig.siteDescription,
  },
  robots: {
    index: isProd,
    follow: isProd,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.siteName,
  description: siteConfig.siteDescription,
  url: SITE_URL,
  areaServed: ["São Paulo", "Porto Velho"],
  serviceType: "Marketing Digital para Saúde",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${sora.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-white text-slate-900">
        {children}
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
