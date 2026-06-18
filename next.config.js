/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "icon.horse",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.helixcorestudio.com",
          },
        ],
        destination: "https://helixcorestudio.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "header",
            key: "x-forwarded-proto",
            value: "http",
          },
        ],
        destination: "https://helixcorestudio.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "helixcore-studio.vercel.app",
          },
        ],
        destination: "https://helixcorestudio.com/:path*",
        permanent: true,
      },
      {
        source: "/blog/mobile-game-development-strategy",
        destination: "/blog/indie-game-monetization-live-ops-2026",
        permanent: true,
      },
      {
        source: "/blog/unity-game-development-guide",
        destination: "/blog/hire-unity-developers-what-to-know-2026",
        permanent: true,
      },
      {
        source: "/blog/playable-ads-development-guide",
        destination: "/blog/indie-game-monetization-live-ops-2026",
        permanent: true,
      },
    ];
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "react-icons"],
  },
};

module.exports = nextConfig;
