import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { getNavServiceGroups } from "@/lib/site-nav";

export default function HomeServicesOverview() {
  const groups = getNavServiceGroups();

  return (
    <section
      className="relative overflow-hidden border-t border-zinc-200 bg-zinc-950 py-20 text-white md:py-28"
      aria-labelledby="home-services-overview-heading"
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
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F46530]/35 to-transparent" />
      <div className="pointer-events-none absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-[#F46530]/10 blur-[100px]" />

      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">Capabilities</p>
            <h2
              id="home-services-overview-heading"
              className="mt-3 text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.75rem] lg:leading-tight"
            >
              What we{" "}
              <span className="text-[#F46530]">build</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-400 md:text-base">
              Three practice areas — each link opens a full service page with scope, stack, deliverables, and FAQs so
              you can evaluate fit before we talk.
            </p>
          </div>
          <Link
            href="/services"
            className="group inline-flex shrink-0 items-center gap-2 self-start rounded-xl border border-white/15 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-[#F46530]/50 hover:bg-[#F46530]/10 lg:self-auto"
          >
            Full services index
            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 md:mt-16 md:grid-cols-3 md:gap-5 lg:gap-6">
          {groups.map((group, index) => (
            <div
              key={group.title}
              className="group/card relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-6 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.8)] backdrop-blur-sm transition hover:border-[#F46530]/35 md:p-7"
            >
              <div className="absolute right-5 top-5 font-mono text-4xl font-bold leading-none text-white/[0.06] transition group-hover/card:text-[#F46530]/15 md:text-5xl">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="mb-5 h-1 w-10 rounded-full bg-[#F46530]" />
              <h3 className="pr-16 text-lg font-bold text-white md:text-xl">{group.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{group.description}</p>
              <ul className="mt-6 flex flex-1 flex-col gap-0 border-t border-white/10 pt-5">
                {group.items.map((item) => (
                  <li key={item.slug} className="border-b border-white/[0.06] last:border-0">
                    <Link
                      href={`/services/${item.slug}`}
                      className="flex items-center justify-between gap-3 py-2.5 text-sm font-medium text-zinc-200 transition first:pt-0 last:pb-0 hover:text-white"
                    >
                      <span className="min-w-0">{item.title}</span>
                      <ArrowRight
                        className="h-4 w-4 shrink-0 text-zinc-600 transition group-hover/card:text-[#F46530]"
                        aria-hidden
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
