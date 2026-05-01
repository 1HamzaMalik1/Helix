import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { blogPosts } from "@/lib/blog";
import { blogIndexJsonLdGraph } from "@/lib/page-jsonld";
import { companyInfo, siteUrl, seoContent } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Insights & Guides | ${companyInfo.name}`,
  description: `${companyInfo.name} shares practical guides on Unity development, playable ads, and mobile games—with links to our professional services.`,
  alternates: { canonical: "/blog" },
  openGraph: {
    title: `Insights & Guides | ${companyInfo.name}`,
    description: `Expert articles on game development, UA creatives, and mobile strategy from ${companyInfo.name}.`,
    url: `${siteUrl}/blog`,
    type: "website",
    siteName: companyInfo.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `Insights & Guides | ${companyInfo.name}`,
    description: seoContent.description,
  },
};

export default function BlogIndexPage() {
  return (
    <section className="pt-32 pb-16 md:pb-24 bg-gradient-to-b from-white to-gray-50 min-h-screen">
      <PageJsonLd id="jsonld-blog-index" graph={blogIndexJsonLdGraph()} />
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <div className="flex items-center gap-2 text-sm font-semibold mb-6" style={{ color: "#F46530" }}>
          <BookOpen className="w-4 h-4" />
          <span>Blog</span>
        </div>
        <h1 className="text-3xl lg:text-5xl font-bold mb-4" style={{ color: "#2A2E30" }}>
          Game development insights
        </h1>
        <p className="text-base md:text-lg opacity-80 max-w-2xl mb-12 leading-relaxed" style={{ color: "#2A2E30" }}>
          Deep dives on Unity, playable ads, and mobile strategy—each article links to our{" "}
          <Link href="/services" className="font-semibold underline decoration-[#F46530]/40" style={{ color: "#F46530" }}>
            services
          </Link>{" "}
          so you can go from reading to planning a project with {companyInfo.name}.
        </p>

        <ul className="space-y-6">
          {blogPosts.map((post) => (
            <li key={post.slug}>
              <article
                className="bg-white border rounded-2xl p-6 md:p-8 transition-shadow hover:shadow-lg"
                style={{ borderColor: "rgba(42, 46, 48, 0.1)" }}
              >
                <time
                  dateTime={post.publishedAt}
                  className="text-xs font-semibold uppercase tracking-wide opacity-70"
                  style={{ color: "#2A2E30" }}
                >
                  {post.publishedAt} · {post.readingTimeMinutes} min read
                </time>
                <h2 className="text-xl md:text-2xl font-bold mt-3 mb-3" style={{ color: "#2A2E30" }}>
                  <Link href={`/blog/${post.slug}`} className="hover:underline decoration-[#F46530]/50">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-sm md:text-base opacity-80 mb-5 leading-relaxed" style={{ color: "#2A2E30" }}>
                  {post.description}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold"
                  style={{ color: "#F46530" }}
                >
                  Read article
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            </li>
          ))}
        </ul>

        <div
          className="mt-12 rounded-2xl p-6 md:p-8 border"
          style={{ backgroundColor: "rgba(244, 101, 48, 0.06)", borderColor: "rgba(244, 101, 48, 0.2)" }}
        >
          <p className="font-semibold mb-2" style={{ color: "#2A2E30" }}>
            Want help shipping?
          </p>
          <p className="text-sm opacity-80 mb-4" style={{ color: "#2A2E30" }}>
            Explore <Link href="/services" className="font-semibold" style={{ color: "#F46530" }}>all services</Link> or{" "}
            <Link href="/#contact" className="font-semibold" style={{ color: "#F46530" }}>
              contact us
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
