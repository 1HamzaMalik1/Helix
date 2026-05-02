import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { servicesIndexJsonLdGraph } from "@/lib/page-jsonld";
import { services, siteUrl } from "@/lib/constants";

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
  return (
    <section className="pt-32 pb-16 md:pb-24 bg-gradient-to-b from-white to-gray-50">
      <PageJsonLd id="jsonld-services-index" graph={servicesIndexJsonLdGraph()} />
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <h1 className="text-3xl lg:text-5xl font-bold mb-4" style={{ color: "#2A2E30" }}>
          Our Services
        </h1>
        <p className="text-base md:text-lg opacity-80 max-w-3xl mb-10 leading-relaxed" style={{ color: "#2A2E30" }}>
          Explore dedicated pages for{" "}
          <Link href="/services/ai-development" className="font-semibold text-[#F46530] hover:underline">
            AI development
          </Link>
          ,{" "}
          <Link href="/services/game-development" className="font-semibold text-[#F46530] hover:underline">
            game development
          </Link>
          , and{" "}
          <Link href="/services/web-development" className="font-semibold text-[#F46530] hover:underline">
            web development
          </Link>{" "}
          —plus specialized offerings below. Each page includes process, tech stack, FAQs, and how we deliver from Lahore for
          international clients.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service) => (
            <article
              key={service.slug}
              className="bg-white border rounded-2xl p-6 transition-all duration-300 hover:shadow-lg"
              style={{ borderColor: "rgba(42, 46, 48, 0.1)" }}
            >
              <h2 className="text-xl font-semibold mb-2" style={{ color: "#2A2E30" }}>
                {service.title}
              </h2>
              <p className="text-sm md:text-base opacity-80 mb-5" style={{ color: "#2A2E30" }}>
                {service.description}
              </p>
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center gap-2 text-sm font-semibold"
                style={{ color: "#F46530" }}
              >
                View service details
                <ArrowRight className="w-4 h-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
