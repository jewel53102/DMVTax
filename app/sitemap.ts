import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { getAllPosts } from "@/lib/blog";
import { locations } from "@/lib/locations";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/locations`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/blog`, changeFrequency: "weekly", priority: 0.6 },
    { url: `${SITE_URL}/contact`, changeFrequency: "yearly", priority: 0.6 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((svc) => ({
    url: `${SITE_URL}/services/${svc.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const locationRoutes: MetadataRoute.Sitemap = locations.map((loc) => ({
    url: `${SITE_URL}/locations/${loc.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const blogRoutes: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...serviceRoutes, ...locationRoutes, ...blogRoutes];
}
