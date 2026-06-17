import type { MetadataRoute } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://runnermarketing.com.br";
const isProd =
  process.env.VERCEL_ENV === "production" ||
  process.env.NEXT_PUBLIC_ALLOW_INDEX === "true";

export default function robots(): MetadataRoute.Robots {
  // Em previews/desenvolvimento, bloqueia todos os robôs (evita indexar a campanha)
  if (!isProd) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
