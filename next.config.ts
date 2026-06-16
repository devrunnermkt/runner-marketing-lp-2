import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Permite servir a logo .svg da marca via next/image
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
