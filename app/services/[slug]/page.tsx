import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { LucideIcon } from "lucide-react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Brain,
  Calendar,
  Check,
  Code,
  Cog,
  Gamepad2,
  Globe,
  Megaphone,
  ShoppingCart,
  Smartphone,
} from "lucide-react";
import type { Service } from "@/lib/constants";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { serviceDetailJsonLdGraph } from "@/lib/page-jsonld";
import { companyInfo, services, siteUrl } from "@/lib/constants";
import { metaDescription } from "@/lib/seo-meta";
import { openGraphShareImages, twitterSummaryLarge } from "@/lib/share-metadata";
import { getServiceFaqs, ServiceDetailBody } from "@/components/services/detail/registry";

const SERVICE_ICONS: Record<string, LucideIcon> = {
  Gamepad2,
  Globe,
  Brain,
  Megaphone,
  Code,
  Smartphone,
  ShoppingCart,
  Bot,
  Cog,
};

type ServicePageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found | HelixCore Studio",
      description: "The requested service page could not be found.",
    };
  }

  const share = openGraphShareImages("/opengraph-image", `${service.title} | ${companyInfo.name}`);

  return {
    title: service.seoTitle,
    description: metaDescription(service.seoDescription),
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: service.seoTitle,
      description: metaDescription(service.seoDescription),
      type: "website",
      url: `${siteUrl}/services/${service.slug}`,
      siteName: companyInfo.name,
      ...share.openGraph,
    },
    twitter: {
      ...twitterSummaryLarge,
      title: service.seoTitle,
      description: metaDescription(service.seoDescription),
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const related = (service.relatedSlugs ?? [])
    .map((s) => services.find((item) => item.slug === s))
    .filter((item): item is Service => item != null && item.slug !== service.slug);

  const faqs = getServiceFaqs(service.slug);
  const Icon = SERVICE_ICONS[service.icon];

  return (
    <>
      <PageJsonLd id={`jsonld-service-${service.slug}`} graph={serviceDetailJsonLdGraph(service, faqs)} />

      <section
        className="relative overflow-hidden border-b border-white/10 bg-zinc-950 pt-28 text-white md:pt-32"
        aria-labelledby="service-hero-heading"
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
        <div className="pointer-events-none absolute -right-20 top-1/3 h-72 w-72 rounded-full bg-[#F46530]/12 blur-[100px]" />

        <div className="container relative mx-auto max-w-6xl px-4 pb-14 md:pb-16 lg:px-8">
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
                <Link href="/services" className="transition hover:text-white">
                  Services
                </Link>
              </li>
              <li className="text-zinc-600" aria-hidden>
                /
              </li>
              <li className="max-w-[min(100%,14rem)] truncate font-medium text-zinc-300 md:max-w-none">{service.title}</li>
            </ol>
          </nav>

          <Link
            href="/services"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#F46530] transition hover:text-[#ff7a4d]"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            All services
          </Link>

          <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
            <div className="flex shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-sm lg:p-5">
              {Icon ? (
                <Icon className="h-10 w-10 text-[#F46530] md:h-12 md:w-12" strokeWidth={1.5} aria-hidden />
              ) : (
                <span className="flex h-10 w-10 items-center justify-center font-mono text-lg font-bold text-[#F46530] md:h-12 md:w-12">
                  H
                </span>
              )}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">Service detail</p>
              <h1 id="service-hero-heading" className="mt-2 text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.5rem] lg:leading-tight">
                {service.title}
              </h1>
              <p className="mt-5 max-w-3xl text-sm leading-relaxed text-zinc-400 md:text-base">{service.longDescription}</p>
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
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-semibold text-white">Clear delivery plans</p>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                    Get service guidance that turns your brief into scoped milestones, budget expectations, and honest technical trade-offs.
                  </p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-semibold text-white">Client-ready proposals</p>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                    We help you compare vendors on the right criteria: outcomes, launch speed, and long-term product support.
                  </p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-semibold text-white">Global delivery confidence</p>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                    Remote engineering with collaboration processes designed for international teams and high-stakes launches.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#F46530]/15 bg-[#F46530]/5 py-12">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F46530]">Proven outcomes</p>
              <h3 className="mt-4 text-xl font-bold text-zinc-950">Launch-ready clarity</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                We map the right scope, dependencies, and milestone review points so every service page visitor sees a clear path to delivery.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F46530]">Client confidence</p>
              <h3 className="mt-4 text-xl font-bold text-zinc-950">Reduced vendor risk</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                Remote delivery with milestone demos and transparent acceptance criteria builds trust with global buyers.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F46530]">Traffic to leads</p>
              <h3 className="mt-4 text-xl font-bold text-zinc-950">Lead-ready messaging</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                Service pages now support commercial intent visitors with stronger proposal-focused messaging and contact paths.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-200/80 bg-white py-14 md:py-16">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F46530]">Case study</p>
              <h3 className="mt-4 text-xl font-bold text-zinc-950">Modern launch velocity</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                We helped a global team turn a complex product ambition into a precise delivery plan and launch schedule with fewer vendor review rounds.
              </p>
            </div>
            <div className="rounded-3xl border border-zinc-200 bg-white p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F46530]">Testimonial</p>
              <h3 className="mt-4 text-xl font-bold text-zinc-950">“They made vendor selection feel easy.”</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                “HelixCore turned a vague brief into a scoped proposal with clear milestones, budget guardrails, and confidence for our board.”
              </p>
              <p className="mt-5 text-sm font-semibold text-zinc-900">– Head of Product, enterprise buyer</p>
            </div>
            <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F46530]">Conversion signal</p>
              <h3 className="mt-4 text-xl font-bold text-zinc-950">Fast proposal readiness</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                Traffic converts better when buyers see deliverables, risks, and timelines up front — not just service features.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="border-b border-zinc-200/80 bg-white py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8">
          {/* Full width content section */}
          <div className="rounded-2xl border border-zinc-200/90 bg-white p-6 shadow-sm md:p-9 lg:p-10">
            <ServiceDetailBody slug={service.slug} />
          </div>

          {/* Features and Related Services - Full Width Below */}
          <div className="mt-16 grid gap-12 lg:grid-cols-2">
            {/* Features */}
            <div className="rounded-2xl border border-zinc-200/90 bg-zinc-50 p-8">
              <div className="mb-6 h-1 w-12 rounded-full bg-[#F46530]" />
              <h2 className="text-2xl font-bold text-zinc-950">What you get</h2>
              <ul className="mt-6 space-y-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm leading-snug text-zinc-700">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#F46530]/12 text-[#F46530]">
                      <Check className="h-3 w-3" strokeWidth={3} aria-hidden />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Related Services */}
            {related.length > 0 ? (
              <div className="rounded-2xl border border-zinc-200/90 bg-zinc-50 p-8">
                <h2 className="text-2xl font-bold text-zinc-950">Related services</h2>
                <p className="mt-2 text-sm text-zinc-600">Explore adjacent work we often pair with this offering.</p>
                <ul className="mt-6 space-y-3">
                  {related.map((item) => {
                    const RIcon = SERVICE_ICONS[item.icon];
                    return (
                      <li key={item.slug}>
                        <Link
                          href={`/services/${item.slug}`}
                          className="group flex items-center justify-between gap-3 rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm font-semibold text-zinc-900 transition hover:border-[#F46530]/30 hover:bg-[#F46530]/5"
                        >
                          <span className="flex min-w-0 items-center gap-3">
                            {RIcon ? (
                              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-zinc-950 text-white">
                                <RIcon className="h-4 w-4" strokeWidth={1.6} aria-hidden />
                              </span>
                            ) : null}
                            <span className="truncate">{item.title}</span>
                          </span>
                          <ArrowRight
                            className="h-4 w-4 shrink-0 text-zinc-400 transition group-hover:translate-x-0.5 group-hover:text-[#F46530]"
                            aria-hidden
                          />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <div className="border-b border-zinc-200/80 bg-white py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8">
          <div className="mx-auto mt-0 max-w-3xl rounded-3xl border border-[#F46530]/20 bg-[#F46530]/5 p-8 text-zinc-950 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F46530]">Ready to move forward?</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">Turn this service page into a scoped proposal</h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-700">
              Share your goals and we will help you turn this service into a practical plan with scope, timeline, and cost clarity.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={companyInfo.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#F46530] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#e85e2d]"
              >
                <Calendar className="h-4 w-4" aria-hidden />
                Book a scope call
              </a>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#F46530]/40 bg-white/90 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-white"
              >
                Send project details
              </Link>
            </div>
          </div>

          {faqs.length > 0 ? (
            <div className="mx-auto mt-14 max-w-3xl md:mt-16 lg:mx-0">
              <div className="mb-8 max-w-2xl lg:mb-10">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">FAQ</p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-950 md:text-3xl">Frequently asked questions</h2>
              </div>
              <div className="space-y-4">
                {faqs.map((item) => (
                  <div
                    key={item.question}
                    className="rounded-2xl border border-zinc-200/90 bg-white p-6 shadow-sm md:p-7"
                  >
                    <h3 className="text-base font-bold leading-snug text-zinc-950 md:text-lg">{item.question}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-600 md:text-base">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <section className="border-t border-white/10 bg-zinc-950 py-14 text-white md:py-20" aria-labelledby="service-cta-heading">
        <div className="container mx-auto max-w-4xl px-4 text-center lg:px-8">
          <h2 id="service-cta-heading" className="text-2xl font-bold tracking-tight md:text-3xl">
            Turn service interest into a scoped proposal
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 md:text-base">
            Book a strategy call to align scope, timeline, and success metrics. We work with teams in USA, Canada, UAE, and
            worldwide with the same delivery standards — whether you need{" "}
            <Link href="/services/ai-development" className="font-semibold text-[#F46530] underline decoration-[#F46530]/35 underline-offset-2 hover:decoration-[#F46530]">
              AI
            </Link>
            ,{" "}
            <Link href="/services/game-development" className="font-semibold text-[#F46530] underline decoration-[#F46530]/35 underline-offset-2 hover:decoration-[#F46530]">
              games
            </Link>
            , or{" "}
            <Link href="/services/web-development" className="font-semibold text-[#F46530] underline decoration-[#F46530]/35 underline-offset-2 hover:decoration-[#F46530]">
              web
            </Link>{" "}
            (or a mix).
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={companyInfo.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#F46530] px-8 py-3.5 text-sm font-bold text-white transition hover:bg-[#e85e2d] sm:w-auto"
            >
              <Calendar className="h-4 w-4" aria-hidden />
              Book a meeting
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <Link
              href="/#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.06] px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/30 sm:w-auto"
            >
              Contact us
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
