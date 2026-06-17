import type { NextConfig } from "next";

// Content-Security-Policy equilibrada: restringe origens externas sem quebrar
// o Next (scripts inline de hidratação), o Microsoft Clarity, as fontes do
// Google e o embed de vídeo da VSL. Revisar se adicionar novos scripts.
const csp = [
  "default-src 'self'",
  // 'unsafe-inline'/'unsafe-eval' são necessários para o runtime do Next e o Clarity.
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.clarity.ms https://*.clarity.ms",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com data:",
  "img-src 'self' data: blob: https:",
  // Clarity (analytics) + Cloudflare R2 (fragmentos do vídeo HLS da VSL)
  "connect-src 'self' https://*.clarity.ms https://c.bing.com https://*.r2.dev",
  // Vídeo HLS: blob para o MediaSource (hls.js) e r2.dev para o Safari (HLS nativo)
  "media-src 'self' blob: https://*.r2.dev",
  "frame-src https://www.youtube.com https://www.youtube-nocookie.com https://player.vimeo.com",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains",
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    // Permite servir a logo .svg da marca via next/image
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
