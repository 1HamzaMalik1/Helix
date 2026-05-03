/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://helixcorestudio.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/api/*", "/icon", "/apple-icon", "/opengraph-image", "/twitter-image", "/manifest.webmanifest"],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Bytespider", allow: "/" },
    ],
    host: "https://helixcorestudio.com",
  },
  transform: async (config, path) => {
    const base = String(config.siteUrl).replace(/\/$/, "");
    const rel = path === "" || path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
    const loc = `${base}${rel}`;

    let priority = 0.65;
    let changefreq = "weekly";
    if (rel === "" || rel === "/") {
      priority = 1;
      changefreq = "weekly";
    } else if (rel.startsWith("/services/")) {
      priority = 0.88;
      changefreq = "weekly";
    } else if (rel === "/services" || rel === "/blog") {
      priority = 0.92;
      changefreq = "weekly";
    } else if (rel.startsWith("/blog/")) {
      priority = 0.78;
      changefreq = "monthly";
    } else if (rel === "/privacy-policy") {
      priority = 0.45;
      changefreq = "yearly";
    }

    return {
      loc,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
  additionalPaths: async (config) => {
    const base = String(config.siteUrl).replace(/\/$/, "");
    const now = new Date().toISOString();
    return [
      {
        loc: `${base}/llms.txt`,
        changefreq: "weekly",
        priority: 0.95,
        lastmod: now,
      },
      {
        loc: `${base}/privacy-policy`,
        changefreq: "yearly",
        priority: 0.45,
        lastmod: now,
      },
    ];
  },
};
