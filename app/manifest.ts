import type { MetadataRoute } from "next";
import { companyInfo, siteUrl } from "@/lib/constants";
import { metaDescription } from "@/lib/seo-meta";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: companyInfo.name,
    short_name: "HelixCore",
    description: metaDescription(companyInfo.description),
    id: siteUrl,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#F46530",
    categories: ["business", "developer tools", "games"],
    lang: "en",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
        purpose: "any",
      },
    ],
  };
}
