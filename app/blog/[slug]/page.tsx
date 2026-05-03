import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Calendar, ChevronRight } from "lucide-react";
import BlogPostBody from "@/components/blog/BlogPostBody";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { blogPostJsonLdGraph } from "@/lib/page-jsonld";
import {
  blogPosts,
  getBlogPost,
  getBlogPostFaqs,
  getBlogSidebarServiceLinks,
  getOtherPosts,
} from "@/lib/blog";
import { companyInfo, siteUrl } from "@/lib/constants";
import { metaDescription } from "@/lib/seo-meta";

function formatPostDate(iso: string) {
  try {
    return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(
      new Date(`${iso}T12:00:00Z`),
    );
  } catch {
    return iso;
  }
}

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
    description: metaDescription(post.description),
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: metaDescription(post.description),
      type: "article",
      publishedTime: post.publishedAt,
      url: `${siteUrl}/blog/${post.slug}`,
      siteName: companyInfo.name,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: metaDescription(post.description),
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
  const faqs = getBlogPostFaqs(post.slug);

  return (
    <>
      <PageJsonLd id={`jsonld-blog-${post.slug}`} graph={blogPostJsonLdGraph(post, faqs)} />

      <section
        className="relative overflow-hidden border-b border-white/10 bg-zinc-950 pt-28 text-white md:pt-32"
        aria-labelledby="blog-post-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F46530]/40 to-transparent" />
        <div className="pointer-events-none absolute -right-20 top-1/4 h-72 w-72 rounded-full bg-[#F46530]/10 blur-[100px]" />

        <div className="container relative mx-auto max-w-6xl px-4 pb-12 md:pb-14 lg:px-8">
          <nav className="text-sm text-zinc-500" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="transition hover:text-white">
                  Home
                </Link>
              </li>
              <li className="text-zinc-600" aria-hidden>
                /
              </li>
              <li>
                <Link href="/blog" className="transition hover:text-white">
                  Blog
                </Link>
              </li>
              <li className="text-zinc-600" aria-hidden>
                /
              </li>
              <li className="max-w-[min(100%,12rem)] truncate font-medium text-zinc-300 md:max-w-md">{post.title}</li>
            </ol>
          </nav>

          <Link
            href="/blog"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#F46530] transition hover:text-[#ff7a4d]"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            All articles
          </Link>

          <header className="mt-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">Article</p>
            <time dateTime={post.publishedAt} className="mt-3 block text-sm font-medium text-zinc-400">
              {formatPostDate(post.publishedAt)} · {post.readingTimeMinutes} min read
            </time>
            <h1 id="blog-post-heading" className="mt-3 text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-[2.5rem]">
              {post.title}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-zinc-400 md:text-lg">{post.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={companyInfo.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#F46530] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#F46530]/20 transition hover:bg-[#e85e2d]"
              >
                <Calendar className="h-4 w-4" aria-hidden />
                Book a strategy call
              </a>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/25"
              >
                Contact
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </header>
        </div>
      </section>

      <div className="border-b border-zinc-200/80 bg-gradient-to-b from-zinc-100 to-white py-12 md:py-16">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-8">
              <div className="rounded-2xl border border-zinc-200/90 bg-white p-6 shadow-sm md:p-9 lg:p-10">
                <BlogPostBody slug={post.slug} />
              </div>

              <footer className="mt-10 rounded-2xl border border-zinc-200/90 bg-white p-6 shadow-sm md:p-8">
                <div className="mb-4 h-1 w-10 rounded-full bg-[#F46530]" />
                <h2 className="text-lg font-bold text-zinc-950">More articles</h2>
                <ul className="mt-5 divide-y divide-zinc-100">
                  {otherPosts.map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/blog/${p.slug}`}
                        className="group flex items-center justify-between gap-3 py-4 text-sm font-semibold text-zinc-800 transition first:pt-0 last:pb-0 hover:text-[#F46530]"
                      >
                        <span className="min-w-0 leading-snug">{p.title}</span>
                        <ChevronRight className="h-4 w-4 shrink-0 text-zinc-400 transition group-hover:translate-x-0.5 group-hover:text-[#F46530]" aria-hidden />
                      </Link>
                    </li>
                  ))}
                </ul>
              </footer>
            </div>

            <aside className="lg:col-span-4">
              <div className="rounded-2xl border border-zinc-200/90 bg-white p-6 shadow-sm md:p-7 lg:sticky lg:top-28">
                <div className="mb-4 h-1 w-10 rounded-full bg-[#F46530]" />
                <h2 className="text-lg font-bold text-zinc-950">Related services</h2>
                <p className="mt-2 text-sm text-zinc-600">Explore offerings that match this topic.</p>
                <ul className="mt-5 space-y-2">
                  {sidebarLinks.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="group flex items-center justify-between gap-2 rounded-xl border border-zinc-200 bg-zinc-50/80 px-4 py-3 text-sm font-semibold text-zinc-900 transition hover:border-zinc-900/15 hover:bg-white"
                      >
                        <span className="min-w-0 leading-snug">{item.label}</span>
                        <ArrowRight className="h-4 w-4 shrink-0 text-zinc-400 transition group-hover:translate-x-0.5 group-hover:text-[#F46530]" aria-hidden />
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-zinc-700 underline decoration-zinc-300 underline-offset-2 transition hover:text-zinc-950 hover:decoration-zinc-950"
                >
                  View all services
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link
                  href="/#contact"
                  className="mt-4 block text-sm font-semibold text-[#F46530] underline decoration-[#F46530]/35 underline-offset-2 hover:decoration-[#F46530]"
                >
                  Contact {companyInfo.name}
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <section className="border-t border-white/10 bg-zinc-950 py-14 text-white md:py-20" aria-labelledby="blog-post-cta">
        <div className="container mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2 id="blog-post-cta" className="text-2xl font-bold tracking-tight md:text-3xl">
            Turn insight into a roadmap
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-zinc-400 md:text-base">
            Book a short strategy call — we will map next steps to your timeline and stack, whether you need AI, games, web, or
            a mix.
          </p>
          <a
            href={companyInfo.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#F46530] px-8 py-3.5 text-sm font-bold text-white transition hover:bg-[#e85e2d]"
          >
            <Calendar className="h-4 w-4" aria-hidden />
            Schedule consultation
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </section>
    </>
  );
}
