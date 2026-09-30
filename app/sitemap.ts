import type { MetadataRoute } from "next";
import { pages, site } from "@/lib/site";
import { content } from "@/lib/content";
import { articles } from "@/lib/resources";
export default function sitemap(): MetadataRoute.Sitemap {
  const ready = pages.filter((p) => content[p.slug.join("/")]).map((p) => "/" + p.slug.join("/"));
  const urls = ["", "/pricing", "/demo", "/resources", "/contact", ...ready, ...articles.map((a) => "/resources/" + a.slug)];
  return urls.map((u) => ({ url: site.url + u, lastModified: new Date(), changeFrequency: "weekly", priority: u === "" ? 1 : 0.7 }));
}
