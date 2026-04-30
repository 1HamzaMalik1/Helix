import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Software Services | HelixCore Studio",
  description:
    "Explore HelixCore Studio services including game development, AI agents, automation, ecommerce, and full-stack web development.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <section className="pt-32 pb-16 md:pb-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <h1 className="text-3xl lg:text-5xl font-bold mb-4" style={{ color: "#2A2E30" }}>
          Our Services
        </h1>
        <p className="text-base md:text-lg opacity-80 max-w-3xl mb-10" style={{ color: "#2A2E30" }}>
          Explore dedicated service pages with detailed capabilities, delivery focus, and outcomes.
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
