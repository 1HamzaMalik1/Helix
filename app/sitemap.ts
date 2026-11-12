import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";
import { services, siteUrl } from "@/lib/constants";

const pages = ["/", "/services", "/blog", "/team", "/hamza-hakim", "/smash-fest", "/privacy-policy", "/terms-and-conditions"];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...pages,
    ...services.map(({ slug }) => `/services/${slug}`),
    ...blogPosts.map(({ slug }) => `/blog/${slug}`),
  ].map((path) => ({ url: new URL(path, siteUrl).href }));
}
