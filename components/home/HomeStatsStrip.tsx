import { homePageStats } from "@/lib/constants";

export default function HomeStatsStrip() {
  return (
    <section
      className="relative overflow-x-hidden border-t border-zinc-200 bg-gradient-to-b from-zinc-50 to-white py-12 text-zinc-900 md:py-16"
      aria-label="Studio at a glance"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(24,24,27,0.04),transparent_55%)]" />
      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 divide-y divide-zinc-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:divide-zinc-200">
          {homePageStats.map((stat) => (
            <div key={stat.line1} className="py-6 text-center first:pt-0 last:pb-0 sm:px-4 sm:py-0 sm:text-left sm:first:pl-0 sm:last:pr-0">
              <p className="text-4xl font-bold tracking-tight text-zinc-950 md:text-5xl">{stat.value}</p>
              <p className="mb-1 mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">{stat.line1}</p>
              <p className="text-sm font-medium uppercase tracking-wide text-zinc-700">{stat.line2}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
