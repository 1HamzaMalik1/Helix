import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BookOpen, Calendar, PenLine } from "lucide-react";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { getSortedBlogPosts } from "@/lib/blog";
import { blogIndexJsonLdGraph } from "@/lib/page-jsonld";
import { companyInfo, siteUrl, seoContent } from "@/lib/constants";
import { metaDescription } from "@/lib/seo-meta";
import { openGraphShareImages, twitterSummaryLarge } from "@/lib/share-metadata";

const blogIndexOgAlt = `Insights & guides | ${companyInfo.name}`;
const blogIndexShare = openGraphShareImages("/blog/opengraph-image", blogIndexOgAlt);

function formatPostDate(iso: string) {
  try {
    return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(
      new Date(`${iso}T12:00:00Z`),
    );
  } catch {
    return iso;
  }
}

export const metadata: Metadata = {
  title: `Insights & Guides | ${companyInfo.name}`,
  description: metaDescription(
    `${companyInfo.name} blog: AI, games, web apps, MVP costs, outsourcing to Pakistan, Unity hiring, and AI chatbots—guides for founders with links to software development services.`,
  ),
  alternates: { canonical: "/blog" },
  openGraph: {
    title: `Insights & Guides | ${companyInfo.name}`,
    description: metaDescription(
      `AI adoption, game economics, web strategy, MVPs, offshore delivery, and chatbots—actionable articles with links to software development services.`,
    ),
    url: `${siteUrl}/blog`,
    type: "website",
    siteName: companyInfo.name,
    ...blogIndexShare.openGraph,
  },
  twitter: {
    ...twitterSummaryLarge,
    title: `Insights & Guides | ${companyInfo.name}`,
    description: metaDescription(seoContent.description),
  },
};

export default function BlogIndexPage() {
  return (
    <>
      <PageJsonLd id="jsonld-blog-index" graph={blogIndexJsonLdGraph()} />

      <section
        className="relative overflow-hidden border-b border-white/10 bg-zinc-950 pt-28 text-white md:pt-32"
        aria-labelledby="blog-index-heading"
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
        <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-[#F46530]/12 blur-[100px]" />

        <div className="container relative mx-auto max-w-5xl px-4 pb-14 md:pb-16 lg:px-8">
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
              <li className="font-medium text-zinc-300">Blog</li>
            </ol>
          </nav>

          <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
                <BookOpen className="h-3.5 w-3.5 text-[#F46530]" aria-hidden />
                Insights
              </p>
              <h1
                id="blog-index-heading"
                className="mt-3 text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.75rem] lg:leading-tight"
              >
                AI, games &amp; the{" "}
                <span className="text-[#F46530]">modern web</span>
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-zinc-400 md:text-base">
                Practical articles for founders and product teams. Each post links to our{" "}
                <Link href="/services" className="font-semibold text-[#F46530] underline decoration-[#F46530]/35 underline-offset-2 hover:decoration-[#F46530]">
                  services
                </Link>{" "}
                so you can move from reading to planning with {companyInfo.name}.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
              <a
                href={companyInfo.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#F46530] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#F46530]/20 transition hover:bg-[#e85e2d]"
              >
                <Calendar className="h-4 w-4" aria-hidden />
                Book a call
              </a>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.06] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/25"
              >
                Contact
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>

          <dl className="mt-12 grid gap-4 border-t border-white/10 pt-10 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4">
              <dt className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Articles</dt>
              <dd className="mt-1 text-2xl font-bold tabular-nums text-white">{getSortedBlogPosts().length}</dd>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4">
              <dt className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Focus</dt>
              <dd className="mt-1 text-sm font-semibold leading-snug text-zinc-200">AI adoption, game budgets, web strategy</dd>
            </div>
          </dl>
        </div>
      </section>

      <div className="border-b border-zinc-200/80 bg-gradient-to-b from-zinc-100 to-white py-14 md:py-20">
        <div className="container mx-auto max-w-5xl px-4 lg:px-8">
          <ul className="space-y-5">
            {getSortedBlogPosts().map((post, index) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col gap-4 overflow-hidden rounded-2xl border border-zinc-200/90 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-900/15 hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,0.14)] sm:flex-row sm:items-stretch sm:gap-0 sm:p-0"
                >
                  <div className="flex shrink-0 flex-col items-center justify-center border-zinc-100 bg-zinc-50 px-6 py-4 sm:w-28 sm:border-r sm:py-6 md:w-32">
                    <PenLine className="h-6 w-6 text-[#F46530] opacity-90 transition group-hover:scale-105" aria-hidden />
                    <span className="mt-2 font-mono text-xs font-bold text-zinc-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1 sm:p-6 md:p-7">
                    <time
                      dateTime={post.publishedAt}
                      className="text-xs font-semibold uppercase tracking-wide text-zinc-500"
                    >
                      {formatPostDate(post.publishedAt)} · {post.readingTimeMinutes} min read
                    </time>
                    <h2 className="mt-2 text-xl font-bold leading-snug tracking-tight text-zinc-950 transition group-hover:text-[#F46530] md:text-2xl">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-600 md:text-base">{post.description}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#F46530]">
                      Read article
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <section className="border-t border-white/10 bg-zinc-950 py-14 text-white md:py-20" aria-labelledby="blog-cta-heading">
        <div className="container mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2 id="blog-cta-heading" className="text-2xl font-bold tracking-tight md:text-3xl">
            Want help shipping?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-zinc-400 md:text-base">
            Explore our{" "}
            <Link href="/services" className="font-semibold text-[#F46530] underline decoration-[#F46530]/35 underline-offset-2 hover:decoration-[#F46530]">
              services index
            </Link>{" "}
            or reach out — we work with teams in {companyInfo.addressLocality} and worldwide.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/services"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.06] px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/30 sm:w-auto"
            >
              All services
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="/#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#F46530] px-8 py-3.5 text-sm font-bold text-white transition hover:bg-[#e85e2d] sm:w-auto"
            >
              Contact us
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
