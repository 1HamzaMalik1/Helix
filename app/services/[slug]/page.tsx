import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, CheckCircle, ArrowLeft } from "lucide-react";
import type { Service } from "@/lib/constants";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { serviceDetailJsonLdGraph } from "@/lib/page-jsonld";
import { companyInfo, services, siteUrl } from "@/lib/constants";
import { getServiceFaqs, ServiceDetailBody } from "@/components/services/detail/registry";

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

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      type: "website",
      url: `${siteUrl}/services/${service.slug}`,
      siteName: companyInfo.name,
    },
    twitter: {
      card: "summary_large_image",
      title: service.seoTitle,
      description: service.seoDescription,
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

  return (
    <section className="pt-32 pb-16 md:pb-24 bg-gradient-to-b from-white to-gray-50">
      <PageJsonLd
        id={`jsonld-service-${service.slug}`}
        graph={serviceDetailJsonLdGraph(service, faqs)}
      />
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-semibold mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:underline" style={{ color: "#F46530" }}>
            Home
          </Link>
          <span className="opacity-40" style={{ color: "#2A2E30" }}>/</span>
          <Link href="/services" className="hover:underline" style={{ color: "#F46530" }}>
            Services
          </Link>
          <span className="opacity-40" style={{ color: "#2A2E30" }}>/</span>
          <Link href="/#contact" className="hover:underline" style={{ color: "#F46530" }}>
            Contact
          </Link>
        </nav>

        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm font-semibold mb-6"
          style={{ color: "#F46530" }}
        >
          <ArrowLeft className="w-4 h-4" />
          All services
        </Link>

        <h1 className="text-3xl lg:text-5xl font-bold mb-4" style={{ color: "#2A2E30" }}>
          {service.title}
        </h1>
        <p className="text-base md:text-lg opacity-80 mb-10 leading-relaxed" style={{ color: "#2A2E30" }}>
          {service.longDescription}
        </p>

        <div className="mb-12">
          <ServiceDetailBody slug={service.slug} />
        </div>

        <div className="bg-white border rounded-2xl p-6 md:p-8 mb-10" style={{ borderColor: "rgba(42, 46, 48, 0.1)" }}>
          <h2 className="text-xl font-semibold mb-4" style={{ color: "#2A2E30" }}>
            What you get
          </h2>
          <ul className="space-y-3">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm md:text-base" style={{ color: "#2A2E30" }}>
                <CheckCircle className="w-5 h-5 mt-0.5 text-emerald-500" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {related.length > 0 ? (
          <div className="bg-white border rounded-2xl p-6 md:p-8 mb-10" style={{ borderColor: "rgba(42, 46, 48, 0.1)" }}>
            <h2 className="text-xl font-semibold mb-4" style={{ color: "#2A2E30" }}>
              Related services
            </h2>
            <ul className="space-y-2">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link href={`/services/${item.slug}`} className="text-sm font-semibold hover:underline" style={{ color: "#F46530" }}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {faqs.length > 0 ? (
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#2A2E30" }}>
              Frequently asked questions
            </h2>
            <div className="space-y-6">
              {faqs.map((item) => (
                <div
                  key={item.question}
                  className="bg-white border rounded-2xl p-5 md:p-6"
                  style={{ borderColor: "rgba(42, 46, 48, 0.1)" }}
                >
                  <h3 className="text-lg font-semibold mb-2" style={{ color: "#2A2E30" }}>
                    {item.question}
                  </h3>
                  <p className="text-sm md:text-base opacity-85 leading-relaxed" style={{ color: "#2A2E30" }}>
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        <div className="rounded-2xl p-6 md:p-8 mb-10" style={{ backgroundColor: "rgba(244, 101, 48, 0.04)", border: "1px solid rgba(244, 101, 48, 0.15)" }}>
          <h2 className="text-xl font-semibold mb-2" style={{ color: "#2A2E30" }}>
            Start your project in Lahore or remotely
          </h2>
          <p className="text-sm md:text-base opacity-80 mb-0 leading-relaxed" style={{ color: "#2A2E30" }}>
            Book a strategy call to align scope, timeline, and success metrics. We serve clients in Pakistan and worldwide
            with the same delivery standards—whether you need a focused sprint or a multi-quarter roadmap spanning{" "}
            <Link href="/services/ai-development" className="font-semibold" style={{ color: "#F46530" }}>
              AI solutions
            </Link>
            ,{" "}
            <Link href="/services/game-development" className="font-semibold" style={{ color: "#F46530" }}>
              game development
            </Link>
            , and{" "}
            <Link href="/services/web-development" className="font-semibold" style={{ color: "#F46530" }}>
              web development
            </Link>
            .
          </p>
        </div>

        <div className="rounded-2xl p-6 md:p-8" style={{ backgroundColor: "rgba(244, 101, 48, 0.06)" }}>
          <h2 className="text-xl font-semibold mb-2" style={{ color: "#2A2E30" }}>
            Need this service for your project?
          </h2>
          <p className="text-sm md:text-base opacity-80 mb-5" style={{ color: "#2A2E30" }}>
            Book a strategy call and get a tailored implementation plan from HelixCore Studio.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <a
              href={companyInfo.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold"
              style={{ backgroundColor: "#F46530", color: "#FFFFFF" }}
            >
              <Calendar className="w-5 h-5" />
              Book a meeting
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold border-2 bg-white"
              style={{ borderColor: "#F46530", color: "#F46530" }}
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
