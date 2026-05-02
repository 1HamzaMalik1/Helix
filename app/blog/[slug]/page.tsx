import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import BlogPostBody from "@/components/blog/BlogPostBody";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { blogPostJsonLdGraph } from "@/lib/page-jsonld";
import {
  blogPosts,
  getBlogPost,
  getBlogSidebarServiceLinks,
  getOtherPosts,
} from "@/lib/blog";
import { companyInfo, siteUrl } from "@/lib/constants";

type BlogPostPageProps = { params: { slug: string } };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPost(params.slug);
  if (!post) {
    return { title: "Post not found" };
  }
  return {
    title: post.metaTitle ?? `${post.title} | ${companyInfo.name}`,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
      url: `${siteUrl}/blog/${post.slug}`,
      siteName: companyInfo.name,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug);
  if (!post) {
    notFound();
  }

  const sidebarLinks = getBlogSidebarServiceLinks(post.slug);
  const otherPosts = getOtherPosts(post.slug);

  return (
    <>
      <PageJsonLd id={`jsonld-blog-${post.slug}`} graph={blogPostJsonLdGraph(post)} />
      <article className="pt-32 pb-16 md:pb-24 bg-gradient-to-b from-white to-gray-50 min-h-screen">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-[1fr_280px] gap-12 lg:gap-16">
            <div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold mb-8"
                style={{ color: "#F46530" }}
              >
                <ArrowLeft className="w-4 h-4" />
                All articles
              </Link>

              <header className="mb-10">
                <time
                  dateTime={post.publishedAt}
                  className="text-xs font-semibold uppercase tracking-wide opacity-70"
                  style={{ color: "#2A2E30" }}
                >
                  {post.publishedAt} · {post.readingTimeMinutes} min read
                </time>
                <h1 className="text-3xl lg:text-4xl font-bold mt-3 mb-4 leading-tight" style={{ color: "#2A2E30" }}>
                  {post.title}
                </h1>
                <p className="text-base md:text-lg opacity-80 leading-relaxed" style={{ color: "#2A2E30" }}>
                  {post.description}
                </p>
              </header>

              <BlogPostBody slug={post.slug} />

              <footer className="mt-14 pt-10 border-t" style={{ borderColor: "rgba(42, 46, 48, 0.1)" }}>
                <h2 className="text-lg font-bold mb-4" style={{ color: "#2A2E30" }}>
                  More articles
                </h2>
                <ul className="space-y-3">
                  {otherPosts.map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/blog/${p.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
                        style={{ color: "#F46530" }}
                      >
                        {p.title}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </footer>
            </div>

            <aside className="lg:pt-14">
              <div
                className="sticky top-28 rounded-2xl border p-6"
                style={{ borderColor: "rgba(42, 46, 48, 0.1)", backgroundColor: "rgba(255,255,255,0.9)" }}
              >
                <h2 className="text-sm font-bold uppercase tracking-wide mb-4" style={{ color: "#2A2E30" }}>
                  Related services
                </h2>
                <ul className="space-y-2 mb-6">
                  {sidebarLinks.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="text-sm font-semibold hover:underline" style={{ color: "#F46530" }}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services"
                  className="text-sm font-semibold block mb-3 hover:underline"
                  style={{ color: "#2A2E30" }}
                >
                  View all services →
                </Link>
                <Link href="/#contact" className="text-sm font-semibold hover:underline" style={{ color: "#F46530" }}>
                  Contact {companyInfo.name}
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}
