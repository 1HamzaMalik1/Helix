import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Calendar, Github, Heart, Linkedin, MapPin, Shield, Users } from "lucide-react";
import { companyInfo, projectsDeliveredCountDisplay, siteUrl, teamMembers } from "@/lib/constants";

const [ceo, cto] = teamMembers;

export const metadata: Metadata = {
  title: `Our team & story | ${companyInfo.name}`,
  description: `Meet ${ceo.name}, CEO of ${companyInfo.name}, and learn how our ${companyInfo.inHouseTeamCount}-person Lahore studio ships AI, games, and web products for clients worldwide—with clear communication and senior-led delivery.`,
  alternates: { canonical: "/team" },
  openGraph: {
    title: `Our team & story | ${companyInfo.name}`,
    description: `Leadership, studio culture, and why teams trust ${companyInfo.name} for remote-first delivery from Lahore.`,
    url: `${siteUrl}/team`,
    type: "website",
    siteName: companyInfo.name,
  },
};

const milestones = [
  {
    title: "Roots in craft",
    body: `We started the way many studios do — late nights on builds we cared about, learning what breaks under real players and real deadlines. That curiosity became a discipline: ship, measure, improve.`,
  },
  {
    title: "Trust across borders",
    body: `Our first international milestones taught us that talent is table stakes; clarity is the multiplier. Written specs, visible progress, and honest scope conversations became non-negotiable — because nothing erodes trust faster than silence.`,
  },
  {
    title: "A studio, not a carousel",
    body: `Today ${companyInfo.inHouseTeamCount} full-time people work in-house in ${companyInfo.addressLocality} — engineers, game developers, web specialists, and QA — led by the same senior faces you meet on day one. No mystery subcontractors on your critical path.`,
  },
];

const trustPoints = [
  {
    icon: Shield,
    title: "Senior-led delivery",
    body: "Your standups and reviews involve the people who own the outcome — not a rotating cast of juniors sold as ‘the team.’",
  },
  {
    icon: Users,
    title: `${companyInfo.inHouseTeamCount} builders, one room`,
    body: "Design, implementation, and QA sit together so feedback loops stay hours, not weeks — especially when UA, store submission, or launch windows tighten.",
  },
  {
    icon: Heart,
    title: "We respect the weight of your runway",
    body: "We say when a shortcut will cost you later. We document trade-offs. We’d rather earn a long partnership than win a sprint on a lie.",
  },
];

export default function TeamPage() {
  return (
    <>
      <section
        className="relative overflow-hidden border-b border-white/10 bg-zinc-950 pt-28 text-white md:pt-32"
        aria-labelledby="team-hero-heading"
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
        <div className="pointer-events-none absolute -right-24 top-1/4 h-80 w-80 rounded-full bg-[#F46530]/12 blur-[100px]" />

        <div className="container relative mx-auto max-w-6xl px-4 pb-16 md:pb-20 lg:px-8">
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
              <li className="font-medium text-zinc-300">Team & story</li>
            </ol>
          </nav>

          <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">People you can trust</p>
              <h1 id="team-hero-heading" className="mt-3 text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.75rem] lg:leading-tight">
                The studio behind your{" "}
                <span className="text-[#F46530]">milestones</span>
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-zinc-400 md:text-base">
                Building software for the world from {companyInfo.addressLocality} means earning trust without a handshake in
                the lobby. This page introduces who leads that promise — and why {companyInfo.inHouseTeamCount} in-house
                specialists show up every day to keep it.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={companyInfo.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#F46530] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#F46530]/20 transition hover:bg-[#e85e2d]"
                >
                  <Calendar className="h-4 w-4" aria-hidden />
                  Book a strategy call
                </a>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.06] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/25"
                >
                  Message us
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>

            <div className="relative lg:col-span-5">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-[#F46530]/25 to-transparent blur-2xl" aria-hidden />
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-2 shadow-2xl backdrop-blur-sm">
                <div className="relative aspect-[4/5] max-h-[22rem] overflow-hidden rounded-xl bg-zinc-900 sm:mx-auto sm:max-w-sm lg:max-w-none">
                  {ceo.image ? (
                    <Image
                      src={ceo.image}
                      alt={`${ceo.name}, ${ceo.role}`}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 400px"
                      priority
                    />
                  ) : null}
                </div>
                <div className="px-4 py-4 text-center sm:px-5">
                  <p className="text-lg font-bold text-white">{ceo.name}</p>
                  <p className="text-sm text-[#F46530]">{ceo.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-b border-zinc-200/80 bg-gradient-to-b from-zinc-100 to-white py-14 md:py-20">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-[#F46530]" />
            <h2 className="text-2xl font-bold tracking-tight text-zinc-950 md:text-3xl">Meet {ceo.name}</h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-600 md:text-base">{ceo.bio}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {ceo.expertise.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-800"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="mt-8 flex justify-center gap-3">
              {ceo.linkedin ? (
                <a
                  href={ceo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-800 transition hover:border-zinc-900 hover:bg-zinc-950 hover:text-white"
                  aria-label={`${ceo.name} on LinkedIn`}
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              ) : null}
              {ceo.github ? (
                <a
                  href={ceo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-800 transition hover:border-zinc-900 hover:bg-zinc-950 hover:text-white"
                  aria-label={`${ceo.name} on GitHub`}
                >
                  <Github className="h-5 w-5" />
                </a>
              ) : null}
            </div>
          </div>

          <div className="mx-auto mt-14 max-w-4xl rounded-2xl border border-zinc-200/90 bg-white p-6 shadow-sm md:mt-16 md:p-10">
            <div className="flex flex-col gap-8 md:flex-row md:items-center">
              <div className="relative mx-auto h-36 w-36 shrink-0 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 md:mx-0">
                {cto.image ? (
                  <Image src={cto.image} alt={`${cto.name}, ${cto.role}`} fill className="object-cover object-top" sizes="144px" />
                ) : null}
              </div>
              <div className="min-w-0 flex-1 text-center md:text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Technology leadership</p>
                <h3 className="mt-2 text-xl font-bold text-zinc-950 md:text-2xl">{cto.name}</h3>
                <p className="mt-1 text-sm font-medium text-[#F46530]">{cto.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-zinc-600 md:text-base">{cto.bio}</p>
                <div className="mt-5 flex flex-wrap justify-center gap-2 md:justify-start">
                  {cto.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-medium text-zinc-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                {cto.linkedin ? (
                  <a
                    href={cto.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#F46530] underline decoration-[#F46530]/35 underline-offset-2 hover:decoration-[#F46530]"
                  >
                    <Linkedin className="h-4 w-4" aria-hidden />
                    Connect on LinkedIn
                  </a>
                ) : null}
              </div>
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-3xl md:mt-20">
            <h2 className="text-center text-2xl font-bold tracking-tight text-zinc-950 md:text-3xl">Our journey</h2>
            <p className="mx-auto mt-4 text-center text-sm leading-relaxed text-zinc-600 md:text-base">
              Every studio has a résumé. Here is the human version — the one we tell partners when they ask why we care about
              the boring parts: documentation, demos, and doing what we said we would do.
            </p>
            <ol className="mt-12 space-y-6">
              {milestones.map((m, i) => (
                <li key={m.title} className="rounded-2xl border border-zinc-200/90 bg-white p-6 shadow-sm md:flex md:gap-8 md:p-8">
                  <div className="mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-zinc-950 text-sm font-bold text-[#F46530] md:mb-0">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-wide text-[#F46530]">Chapter {i + 1}</p>
                    <h3 className="mt-1 text-lg font-bold text-zinc-950">{m.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-600 md:text-base">{m.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4 md:mt-20 md:gap-4">
            {[
              { value: companyInfo.experience.split(/\s/)[0] ?? "5+", label: "Years building" },
              { value: String(companyInfo.inHouseTeamCount), label: "In-house team" },
              { value: projectsDeliveredCountDisplay, label: "Projects delivered" },
              { value: "10+", label: "Countries served" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border border-zinc-200 bg-white px-4 py-5 text-center shadow-sm">
                <p className="text-2xl font-bold tabular-nums text-zinc-950 md:text-3xl">{s.value}</p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-zinc-500">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-16 grid gap-6 md:mt-20 md:grid-cols-3">
            {trustPoints.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-zinc-200/90 bg-white p-6 shadow-sm transition hover:border-zinc-900/10 hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-950 text-white">
                  <Icon className="h-5 w-5 text-[#F46530]" strokeWidth={1.5} aria-hidden />
                </div>
                <h3 className="mt-4 text-base font-bold text-zinc-950">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">{body}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-16 flex max-w-4xl flex-col items-stretch justify-between gap-6 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950 px-6 py-8 text-white sm:flex-row sm:items-center sm:px-10 md:mt-20">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                <MapPin className="h-5 w-5 text-zinc-300" aria-hidden />
              </div>
              <div>
                <p className="text-sm font-semibold">Lahore studio · global clients</p>
                <p className="mt-1 text-xs leading-relaxed text-zinc-500">
                  {companyInfo.addressLine}, {companyInfo.addressLocality} — overlap-friendly hours for EU &amp; US teams.
                </p>
              </div>
            </div>
            <a
              href={companyInfo.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#F46530] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#e85e2d] sm:self-center"
            >
              <Calendar className="h-4 w-4" aria-hidden />
              Book a call
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </div>

          <p className="mx-auto mt-10 max-w-lg text-center text-sm text-zinc-500">
            Prefer email first?{" "}
            <Link
              href="/#contact"
              className="font-semibold text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-[#F46530]"
            >
              Send a message
            </Link>{" "}
            — we read every inquiry.
          </p>
        </div>
      </div>
    </>
  );
}
