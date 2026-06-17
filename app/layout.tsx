import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { siteConfig } from "./siteConfig";
import CookieConsent from "@/components/CookieConsent";

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
    url: siteConfig.siteUrl,
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
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.siteName,
  description: siteConfig.siteDescription,
  url: siteConfig.siteUrl,
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
        {/* Clarity carrega após o conteúdo para não bloquear renderização */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "x7zng8vw0o");`,
          }}
        />
      </body>
    </html>
  );
}
