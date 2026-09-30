import type { MetadataRoute } from "next";
import { pages, site } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/pricing", "/demo", ...pages.map((p) => "/" + p.slug.join("/"))].map((u) => ({ url: site.url + u, lastModified: new Date() }));
}
