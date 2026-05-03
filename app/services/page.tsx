import type { Metadata } from "next";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Brain,
  Calendar,
  Code,
  Cog,
  Gamepad2,
  Globe,
  Megaphone,
  ShoppingCart,
  Smartphone,
} from "lucide-react";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { servicesIndexJsonLdGraph } from "@/lib/page-jsonld";
import { companyInfo, services, siteUrl } from "@/lib/constants";
import { getNavServiceGroups } from "@/lib/site-nav";

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

export const metadata: Metadata = {
  title: "Software Development Services | HelixCore",
  description:
    "HelixCore Studio services: AI development, game development, web apps, Unity, playables, ecommerce, and automation—delivered from Lahore for global clients.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Software Development Services | HelixCore",
    description:
      "AI, games, and web services with clear milestones. Explore all offerings and book a strategy call with HelixCore Studio.",
    url: `${siteUrl}/services`,
    type: "website",
    siteName: "HelixCore Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Services | HelixCore",
    description:
      "AI development, game development, and web services from HelixCore Studio. Based in Lahore, shipping worldwide.",
  },
};

export default function ServicesPage() {
  const groups = getNavServiceGroups();

  return (
    <>
      <PageJsonLd id="jsonld-services-index" graph={servicesIndexJsonLdGraph()} />

      <section
        className="relative overflow-hidden border-b border-white/10 bg-zinc-950 pt-32 pb-16 text-white md:pb-20"
        aria-labelledby="services-index-heading"
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
        <div className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-[#F46530]/12 blur-[100px]" />

        <div className="container relative mx-auto px-4 lg:px-8">
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
              <li className="font-medium text-zinc-300">Services</li>
            </ol>
          </nav>

          <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">Services index</p>
              <h1
                id="services-index-heading"
                className="mt-3 text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.75rem] lg:leading-tight"
              >
                Build with a team that ships{" "}
                <span className="text-[#F46530]">AI, games, and web</span>
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-zinc-400 md:text-base">
                Every offering has a dedicated page with scope, stack, deliverables, and FAQs. Start with{" "}
                <Link href="/services/ai-development" className="font-semibold text-[#F46530] underline decoration-[#F46530]/30 underline-offset-2 hover:decoration-[#F46530]">
                  AI
                </Link>
                ,{" "}
                <Link href="/services/game-development" className="font-semibold text-[#F46530] underline decoration-[#F46530]/30 underline-offset-2 hover:decoration-[#F46530]">
                  games
                </Link>
                , or{" "}
                <Link href="/services/web-development" className="font-semibold text-[#F46530] underline decoration-[#F46530]/30 underline-offset-2 hover:decoration-[#F46530]">
                  web
                </Link>{" "}
                — then drill into specialized builds below. Based in {companyInfo.addressLocality}, working with teams
                worldwide.
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
                Book a strategy call
              </a>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.06] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/25"
              >
                Contact form
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>

          <dl className="mt-14 grid gap-4 border-t border-white/10 pt-10 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4">
              <dt className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Offerings</dt>
              <dd className="mt-1 text-2xl font-bold tabular-nums text-white">{services.length}</dd>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4">
              <dt className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Practice areas</dt>
              <dd className="mt-1 text-2xl font-bold tabular-nums text-white">{groups.length}</dd>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4">
              <dt className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Delivery</dt>
              <dd className="mt-1 text-sm font-semibold leading-snug text-zinc-200">Milestones, demos, production handoff</dd>
            </div>
          </dl>
        </div>
      </section>

      <div className="bg-gradient-to-b from-zinc-100 to-white">
        {groups.map((group, gi) => (
          <section
            key={group.title}
            className={`border-zinc-200/80 py-16 md:py-20 ${gi > 0 ? "border-t" : ""}`}
            aria-labelledby={`service-group-${gi}`}
          >
            <div className="container mx-auto px-4 lg:px-8">
              <div className="mb-10 max-w-2xl md:mb-12">
                <div className="mb-3 h-1 w-10 rounded-full bg-[#F46530]" />
                <h2 id={`service-group-${gi}`} className="text-2xl font-bold tracking-tight text-zinc-950 md:text-3xl">
                  {group.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 md:text-base">{group.description}</p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {group.items.map((service) => {
                  const Icon = SERVICE_ICONS[service.icon];
                  return (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200/90 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-900/15 hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,0.18)] md:p-7"
                    >
                      <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 translate-x-10 -translate-y-10 rounded-full bg-zinc-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      <div className="relative flex items-start justify-between gap-3">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-zinc-950 text-white transition group-hover:bg-zinc-900">
                          {Icon ? <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden /> : null}
                        </div>
                        <ArrowUpRight
                          className="h-5 w-5 shrink-0 text-zinc-300 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#F46530]"
                          aria-hidden
                        />
                      </div>

                      <h3 className="relative mt-5 text-lg font-bold leading-snug text-zinc-950">{service.title}</h3>
                      <p className="relative mt-2 flex-1 text-sm leading-relaxed text-zinc-600">{service.description}</p>

                      <ul className="relative mt-5 flex flex-wrap gap-2">
                        {service.features.slice(0, 3).map((f) => (
                          <li
                            key={f}
                            className="rounded-lg border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-medium text-zinc-700"
                          >
                            {f}
                          </li>
                        ))}
                      </ul>

                      <span className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#F46530]">
                        View details
                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden />
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="border-t border-white/10 bg-zinc-950 py-16 text-white md:py-20" aria-labelledby="services-cta-heading">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h2 id="services-cta-heading" className="text-2xl font-bold tracking-tight md:text-3xl">
            Not sure which service fits?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-zinc-400 md:text-base">
            Tell us about your product and constraints — we will recommend a stack, timeline, and the right specialists
            from our team.
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
