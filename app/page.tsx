import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { homePageJsonLdGraph } from "@/lib/page-jsonld";
import { seoContent, siteUrl } from "@/lib/constants";

const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  loading: () => (
    <section
      id="testimonials"
      className="min-h-[28rem] py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-x-hidden"
      aria-busy="true"
      aria-label="Loading testimonials"
    />
  ),
});

const Services = dynamic(() => import("@/components/Services"), {
  loading: () => (
    <section
      id="services"
      className="min-h-[36rem] py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 overflow-x-hidden"
      aria-busy="true"
      aria-label="Loading services"
    />
  ),
});

const Process = dynamic(() => import("@/components/Process"), {
  loading: () => (
    <section
      id="process"
      className="min-h-[32rem] py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-x-hidden"
      aria-busy="true"
      aria-label="Loading process"
    />
  ),
});

const Team = dynamic(() => import("@/components/Team"), {
  loading: () => (
    <section
      id="team"
      className="min-h-[36rem] py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 overflow-x-hidden"
      aria-busy="true"
      aria-label="Loading team"
    />
  ),
});

const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => (
    <section
      id="contact"
      className="min-h-[28rem] py-16 md:py-24 bg-white overflow-x-hidden"
      aria-busy="true"
      aria-label="Loading contact"
    />
  ),
});

export const metadata: Metadata = {
  title: seoContent.title,
  description: seoContent.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: seoContent.title,
    description: seoContent.description,
    url: `${siteUrl}/`,
    type: "website",
    siteName: "HelixCore Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: seoContent.title,
    description: seoContent.description,
  },
};

export default function HomePage() {
  return (
    <>
      <PageJsonLd id="jsonld-home" graph={homePageJsonLdGraph()} />
      <Hero />
      <Testimonials />
      <Services />
      <Process />
      <Team />
      <Contact />
    </>
  );
}
