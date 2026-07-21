import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/articoli";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pagine: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/percorso`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/lavoro`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/blog`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/contatto`, changeFrequency: "yearly", priority: 0.5 },
  ];

  const articoli: MetadataRoute.Sitemap = getAllPosts().map((a) => ({
    url: `${SITE_URL}/blog/${a.slug}`,
    lastModified: a.data,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...pagine, ...articoli];
}
