import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, CheckCircle, ArrowLeft } from "lucide-react";
import { companyInfo, services } from "@/lib/constants";

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
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      type: "website",
      url: `https://helixcorestudio.com/services/${service.slug}`,
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

  return (
    <section className="pt-32 pb-16 md:pb-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <Link
          href="/#services"
          className="inline-flex items-center gap-2 text-sm font-semibold mb-8"
          style={{ color: "#F46530" }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to services
        </Link>

        <h1 className="text-3xl lg:text-5xl font-bold mb-4" style={{ color: "#2A2E30" }}>
          {service.title}
        </h1>
        <p className="text-base md:text-lg opacity-80 mb-8 leading-relaxed" style={{ color: "#2A2E30" }}>
          {service.longDescription}
        </p>

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

        <div className="rounded-2xl p-6 md:p-8" style={{ backgroundColor: "rgba(244, 101, 48, 0.06)" }}>
          <h2 className="text-xl font-semibold mb-2" style={{ color: "#2A2E30" }}>
            Need this service for your project?
          </h2>
          <p className="text-sm md:text-base opacity-80 mb-5" style={{ color: "#2A2E30" }}>
            Book a strategy call and get a tailored implementation plan from HelixCore Studio.
          </p>
          <a
            href={companyInfo.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold"
            style={{ backgroundColor: "#F46530", color: "#FFFFFF" }}
          >
            <Calendar className="w-5 h-5" />
            Book a meeting
          </a>
        </div>
      </div>
    </section>
  );
}
