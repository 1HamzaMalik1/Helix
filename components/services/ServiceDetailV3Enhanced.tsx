"use client";

import Link from "next/link";
import { Calendar, Trophy, Check, ArrowRight, Star } from "lucide-react";
import { companyInfo } from "@/lib/constants";

interface ServiceDetailV3Props {
  serviceName: string;
  shortDescription: string;
  stats: { label: string; value: string }[];
  whatYouGet: { title: string; description: string }[];
  whyUs: { title: string; description: string }[];
  process: { title: string; description: string }[];
  results: { metric: string; description: string }[];
  serviceSlug: string;
  keyValuePropositions?: string[];
  commonObjections?: { question: string; answer: string }[];
  competitorComparison?: { feature: string; you: string; agencyA: string; agencyB?: string }[];
  caseStudies?: { title: string; client: string; challenge: string; solution: string; result: string; metric: string }[];
  faqs?: { question: string; answer: string }[];
  trustBadges?: { icon: string; title: string; description: string }[];
}

export function ServiceDetailV3Enhanced(props: ServiceDetailV3Props) {
  const {
    serviceName,
    shortDescription,
    stats,
    whatYouGet,
    whyUs,
    process,
    results,
    serviceSlug,
    keyValuePropositions = [],
    commonObjections = [],
    competitorComparison = [],
    caseStudies = [],
    faqs = [],
    trustBadges = [],
  } = props;

  return (
    <div className="space-y-0">
      {/* ===== SECTION 1: Sticky Trust Bar ===== */}
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-sm border-b border-zinc-200 py-3">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Trophy className="h-4 w-4 text-[#F46530]" />
              <span className="text-sm font-semibold text-zinc-900">
                #1 Choice for {serviceName} in North America
              </span>
            </div>
            <div className="flex gap-2">
              <a
                href={companyInfo.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F46530] text-white text-sm font-semibold hover:bg-[#e85e2d] transition-colors"
              >
                <Calendar className="h-4 w-4" />
                Book now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ===== SECTION 2: Stats Grid ===== */}
      <section className="bg-zinc-950 text-white py-12 md:py-16 border-b border-zinc-800">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#F46530] mb-2">{stat.value}</div>
                <div className="text-sm text-zinc-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: What You Get ===== */}
      <section className="bg-white py-12 md:py-16 border-b border-zinc-200">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-950 mb-8">What You Get</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {whatYouGet.map((item, idx) => (
              <div key={idx} className="flex gap-4 p-6 rounded-lg border border-zinc-200 bg-zinc-50">
                <Check className="h-6 w-6 text-[#F46530] shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-zinc-950 mb-2">{item.title}</h3>
                  <p className="text-sm text-zinc-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: Why Choose Us ===== */}
      <section className="bg-gradient-to-b from-zinc-50 to-white py-12 md:py-16 border-b border-zinc-200">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-950 mb-8">Why {serviceName} Projects Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {whyUs.map((item, idx) => (
              <div key={idx} className="p-6 rounded-lg border border-zinc-200 bg-white hover:shadow-md transition-all">
                <h3 className="font-semibold text-zinc-950 mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: Our Process ===== */}
      <section className="bg-white py-12 md:py-16 border-b border-zinc-200">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-950 mb-8">Our Process</h2>
          <div className="space-y-6">
            {process.map((step, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F46530] text-white font-bold">
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-zinc-950 mb-2">{step.title}</h3>
                  <p className="text-sm text-zinc-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: Results ===== */}
      <section className="bg-zinc-950 text-white py-12 md:py-16 border-b border-zinc-800">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Results You Can Expect</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {results.map((item, idx) => (
              <div key={idx} className="p-6 rounded-lg border border-zinc-700 bg-zinc-900">
                <div className="text-2xl font-bold text-[#F46530] mb-2">{item.metric}</div>
                <p className="text-sm text-zinc-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 7: Common Objections ===== */}
      {commonObjections.length > 0 && (
        <section className="bg-white py-12 md:py-16 border-b border-zinc-200">
          <div className="container mx-auto max-w-6xl px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-950 mb-8">Common Questions</h2>
            <div className="space-y-4 max-w-3xl">
              {commonObjections.map((item, idx) => (
                <div key={idx} className="p-6 rounded-lg border border-zinc-200 bg-zinc-50">
                  <h3 className="font-semibold text-zinc-950 mb-2">{item.question}</h3>
                  <p className="text-sm text-zinc-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== SECTION 8: Competitor Comparison ===== */}
      {competitorComparison.length > 0 && (
        <section className="bg-zinc-50 py-12 md:py-16 border-b border-zinc-200">
          <div className="container mx-auto max-w-6xl px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-950 mb-2">How We Compare</h2>
            <p className="text-zinc-600 mb-8">Side-by-side comparison with typical alternatives</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-zinc-300">
                    <th className="text-left p-4 font-semibold text-zinc-950">Feature</th>
                    <th className="text-left p-4 font-semibold text-[#F46530]">Our Approach</th>
                    <th className="text-left p-4 font-semibold text-zinc-600">Typical Agency</th>
                    {competitorComparison.some(row => row.agencyB) && (
                      <th className="text-left p-4 font-semibold text-zinc-600">Freelancer</th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {competitorComparison.map((row, idx) => (
                    <tr key={idx} className="border-b border-zinc-200 hover:bg-white transition-colors">
                      <td className="p-4 font-semibold text-zinc-900">{row.feature}</td>
                      <td className="p-4 text-[#F46530]">{row.you}</td>
                      <td className="p-4 text-zinc-600">{row.agencyA}</td>
                      {row.agencyB && (
                        <td className="p-4 text-zinc-600">{row.agencyB}</td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* ===== SECTION 9: Case Studies ===== */}
      {caseStudies.length > 0 && (
        <section className="bg-white py-12 md:py-16 border-b border-zinc-200">
          <div className="container mx-auto max-w-6xl px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-950 mb-8">Case Studies</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {caseStudies.map((study, idx) => (
                <div key={idx} className="p-6 rounded-lg border border-zinc-200 bg-zinc-50">
                  <div className="text-xs font-semibold uppercase tracking-widest text-[#F46530] mb-2">Case Study</div>
                  <h3 className="text-lg font-bold text-zinc-950 mb-2">{study.title}</h3>
                  <p className="text-sm font-semibold text-zinc-700 mb-3">Client: {study.client}</p>
                  <div className="space-y-3 text-sm text-zinc-600">
                    <p><span className="font-semibold text-zinc-900">Challenge:</span> {study.challenge}</p>
                    <p><span className="font-semibold text-zinc-900">Solution:</span> {study.solution}</p>
                    <p><span className="font-semibold text-zinc-900">Result:</span> {study.result}</p>
                    <p className="text-[#F46530] font-semibold">{study.metric}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== SECTION 10: FAQs ===== */}
      {faqs.length > 0 && (
        <section className="bg-zinc-50 py-12 md:py-16 border-b border-zinc-200">
          <div className="container mx-auto max-w-3xl px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-950 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="p-6 rounded-lg border border-zinc-200 bg-white">
                  <h3 className="font-semibold text-zinc-950 mb-2">{faq.question}</h3>
                  <p className="text-sm text-zinc-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== SECTION 11: Final CTA ===== */}
      <section className="bg-[#F46530] text-white py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-sm text-white/90 mb-6">Book a free 30-minute strategy call with our team.</p>
          <a
            href={companyInfo.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-[#F46530] font-semibold hover:bg-zinc-100 transition-colors"
          >
            <Calendar className="h-4 w-4" />
            Schedule a Call
          </a>
        </div>
      </section>
    </div>
  );
}
