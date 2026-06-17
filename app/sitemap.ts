import type { MetadataRoute } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://runnermarketing.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: SITE_URL, lastModified: now, priority: 1 },
    { url: `${SITE_URL}/indique`, lastModified: now, priority: 0.8 },
    {
      url: `${SITE_URL}/politica-de-privacidade`,
      lastModified: now,
      priority: 0.2,
    },
    {
      url: `${SITE_URL}/politica-de-cookies`,
      lastModified: now,
      priority: 0.2,
    },
  ];
}
