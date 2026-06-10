import Link from "next/link";
import { CheckCircle2, Zap, Users, Trophy, ArrowRight, Calendar, Star, TrendingUp, Lock, Zap as ZapIcon } from "lucide-react";
import { companyInfo } from "@/lib/constants";

export function ServiceDetailV2({
  serviceName,
  shortDescription,
  stats,
  whatYouGet,
  whyUs,
  process,
  results,
}: {
  serviceName: string;
  shortDescription: string;
  stats: { label: string; value: string }[];
  whatYouGet: { title: string; description: string }[];
  whyUs: { title: string; description: string }[];
  process: { title: string; description: string }[];
  results: { metric: string; description: string }[];
}) {
  return (
    <div className="space-y-0">
      {/* ===== SECTION 1: Quick Trust Metrics ===== */}
      <section className="bg-white py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group rounded-xl border border-zinc-200 bg-white p-5 md:p-6 text-center hover:shadow-md hover:border-[#F46530]/40 transition-all duration-200"
            >
              <p className="text-3xl md:text-4xl font-bold text-[#F46530]">
                {stat.value}
              </p>
              <p className="text-xs md:text-sm text-zinc-600 mt-2 font-semibold uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SECTION 2: What You Get (Primary Value) ===== */}
      <section className="bg-gradient-to-b from-zinc-50 to-white py-16 md:py-24 border-t border-b border-zinc-200">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-950 leading-tight">
            What you're investing in
          </h2>
          <p className="text-lg text-zinc-600 mt-4 max-w-2xl">
            Tangible deliverables that directly impact your business. Not vague promises or placeholder features.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {whatYouGet.map((item, idx) => (
            <div
              key={item.title}
              className="rounded-xl border border-zinc-200 bg-white p-8 hover:shadow-lg hover:border-[#F46530]/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#F46530] to-[#F46530]/80 text-white font-bold text-lg shadow-sm">
                  {idx + 1}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-lg text-zinc-950">{item.title}</h3>
                  <p className="text-sm text-zinc-600 mt-3 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SECTION 3: Why HelixCore (Differentiation) ===== */}
      <section className="bg-white py-16 md:py-24 border-b border-zinc-200">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-950 leading-tight">
            Why teams choose HelixCore
          </h2>
          <p className="text-lg text-zinc-600 mt-4 max-w-2xl">
            We're not the cheapest. But we're the most reliable for high-stakes delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {whyUs.map((item) => (
            <div key={item.title} className="rounded-xl border border-zinc-200 bg-zinc-50 p-8 hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#F46530]/20 mb-4">
                <Star className="h-6 w-6 text-[#F46530]" strokeWidth={2} aria-hidden />
              </div>
              <h3 className="font-bold text-lg text-zinc-950">{item.title}</h3>
              <p className="text-sm text-zinc-700 mt-4 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SECTION 4: Our Process (Visual Timeline) ===== */}
      <section className="bg-zinc-50 py-16 md:py-24 border-b border-zinc-200">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-950 leading-tight">
            Our process
          </h2>
          <p className="text-lg text-zinc-600 mt-4 max-w-2xl">
            Transparent milestones. Weekly visibility. No surprises.
          </p>
        </div>

        {/* Desktop horizontal timeline */}
        <div className="hidden md:block">
          <div className="grid grid-cols-5 gap-4 relative">
            {/* Connection line */}
            <div className="absolute top-10 left-0 right-0 h-1 bg-gradient-to-r from-[#F46530]/40 via-[#F46530]/20 to-zinc-300 -z-10" />

            {process.map((step, idx) => (
              <div key={step.title} className="text-center">
                <div className="relative mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white border-4 border-[#F46530] text-[#F46530] font-bold text-lg mx-auto shadow-sm">
                    {idx + 1}
                  </div>
                </div>
                <h3 className="font-bold text-zinc-950 text-base">{step.title}</h3>
                <p className="text-xs text-zinc-600 mt-2 leading-snug">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="md:hidden space-y-6">
          {process.map((step, idx) => (
            <div key={step.title} className="relative pl-12">
              <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-[#F46530] text-white font-bold text-sm">
                {idx + 1}
              </div>
              {idx < process.length - 1 && (
                <div className="absolute left-5 top-10 w-0.5 h-12 bg-gradient-to-b from-[#F46530]/40 to-transparent" />
              )}
              <h3 className="font-bold text-zinc-950">{step.title}</h3>
              <p className="text-sm text-zinc-600 mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SECTION 5: Proof & Results ===== */}
      {results.length > 0 && (
        <section className="bg-gradient-to-br from-zinc-950 to-zinc-900 py-16 md:py-24 text-white border-b border-zinc-800 relative overflow-hidden">
          {/* Accent gradient */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute -right-40 top-0 w-80 h-80 bg-[#F46530] rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <div className="mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Real results
              </h2>
              <p className="text-lg text-zinc-300 mt-4 max-w-2xl">
                Measurable impact. Not vanity metrics.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {results.map((result) => (
                <div
                  key={result.metric}
                  className="rounded-xl bg-white/10 border border-white/15 p-8 md:p-10 backdrop-blur-sm hover:bg-white/15 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <Trophy className="h-6 w-6 text-[#F46530] mt-1 shrink-0" aria-hidden />
                    <div className="flex-1 min-w-0">
                      <p className="text-4xl md:text-5xl font-bold text-[#F46530] font-mono">{result.metric}</p>
                      <p className="text-sm text-zinc-300 mt-4 leading-relaxed">{result.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== SECTION 6: Risk Reversal / Guarantee ===== */}
      <section className="bg-white py-16 md:py-20 border-b border-zinc-200">
        <div className="max-w-3xl">
          <h3 className="text-2xl md:text-3xl font-bold text-zinc-950 mb-8">
            Our commitment to you
          </h3>

          <div className="space-y-5">
            {[
              { icon: Lock, title: "Fixed scope, no creep", desc: "We quote precisely. No surprise bills or scope expansion." },
              { icon: ZapIcon, title: "Weekly demos & transparency", desc: "You see progress every week. Direct influence on roadmap." },
              { icon: Trophy, title: "Senior team only", desc: "Your project is run by engineers with 10-15 years experience, not junior devs." },
              { icon: Zap, title: "Production-ready from day one", desc: "Code goes to production immediately—testing, monitoring, and docs included." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4 rounded-lg border border-zinc-200 bg-zinc-50 p-5 hover:bg-white hover:shadow-sm transition-all">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#F46530]/15 text-[#F46530] mt-0.5">
                  <Icon className="h-4 w-4" strokeWidth={2} aria-hidden />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-zinc-950">{title}</p>
                  <p className="text-sm text-zinc-600 mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 7: Strong CTA Section ===== */}
      <section className="bg-gradient-to-br from-[#F46530]/12 to-[#F46530]/6 py-16 md:py-20 border-b border-[#F46530]/20">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-950 leading-tight">
            Ready to move forward?
          </h2>
          <p className="text-lg text-zinc-700 mt-4 leading-relaxed">
            Let's talk about your specific needs, budget, and timeline. We'll help you understand what's possible and build a scoped plan together.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href={companyInfo.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#F46530] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#F46530]/25 hover:bg-[#e85e2d] hover:shadow-[#F46530]/40 transition-all duration-200"
            >
              <Calendar className="h-5 w-5" aria-hidden />
              Book a 30-minute call
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-white px-8 py-4 text-base font-bold text-zinc-950 hover:bg-zinc-50 hover:border-zinc-400 transition-all duration-200"
            >
              Email project details
              <ArrowRight className="h-5 w-5" aria-hidden />
            </Link>
          </div>

          <p className="text-sm text-zinc-600 mt-6">
            Typically respond within 24 hours. No sales pitch—just technical depth and honest feedback.
          </p>
        </div>
      </section>

      {/* ===== SECTION 8: Trust Badges ===== */}
      <section className="bg-white py-12 md:py-16 border-b border-zinc-200">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#F46530] mb-3">Global Reach</p>
            <h4 className="text-xl font-bold text-zinc-950">USA • Canada • UAE</h4>
            <p className="text-sm text-zinc-600 mt-2">Remote-first team serving clients worldwide.</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#F46530] mb-3">Standards</p>
            <h4 className="text-xl font-bold text-zinc-950">Production Grade</h4>
            <p className="text-sm text-zinc-600 mt-2">Testing, observability, docs, and CI/CD from day one.</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#F46530] mb-3">Partnership</p>
            <h4 className="text-xl font-bold text-zinc-950">Fully Transparent</h4>
            <p className="text-sm text-zinc-600 mt-2">Weekly visibility. You own all code and decisions.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
