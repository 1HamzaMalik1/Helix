import type { MetadataRoute } from "next";
import { companyInfo, siteUrl } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: companyInfo.name,
    short_name: "HelixCore",
    description: companyInfo.description,
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
        src: "/icon",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
