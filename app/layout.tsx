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
  title: `${siteConfig.siteName} | Marketing Médico`,
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
    title: `${siteConfig.siteName} | Marketing Médico`,
    description: siteConfig.siteDescription,
    url: SITE_URL,
    siteName: siteConfig.siteName,
    locale: "pt_BR",
    type: "website",
    images: [{ url: siteConfig.openGraphImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.siteName} | Marketing Médico`,
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
        {/* Meta Pixel */}
        <script dangerouslySetInnerHTML={{ __html: `
          !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
          n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
          (window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init','2501327540281469');fbq('track','PageView');
        `}} />
      </head>
      <body className="antialiased bg-white text-slate-900">
        {children}
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
