'use client';

import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import {
  Search,
  Palette,
  Code,
  TestTube2,
  Rocket,
  Settings,
  Calendar,
  Clock,
  ArrowRight,
  Check,
} from 'lucide-react';
import { companyInfo } from '@/lib/constants';

const processSteps = [
  {
    id: 1,
    icon: Search,
    title: 'Discovery',
    summary: 'Requirements, constraints, and technical approach.',
    duration: '1–2 weeks',
    deliverables: ['Scope & milestones', 'Architecture notes', 'Risk register'],
  },
  {
    id: 2,
    icon: Palette,
    title: 'Design',
    summary: 'UX flows and UI aligned to your brand and users.',
    duration: '2–3 weeks',
    deliverables: ['Wireframes', 'UI kit', 'Clickable prototype'],
  },
  {
    id: 3,
    icon: Code,
    title: 'Development',
    summary: 'Iterative builds with reviews, CI, and transparent progress.',
    duration: '4–12 weeks',
    deliverables: ['Working increments', 'Repo access', 'Release notes'],
  },
  {
    id: 4,
    icon: TestTube2,
    title: 'Quality',
    summary: 'Functional, performance, and security checks before release.',
    duration: '1–2 weeks',
    deliverables: ['Test plan', 'Defect triage', 'Sign-off criteria'],
  },
  {
    id: 5,
    icon: Rocket,
    title: 'Launch',
    summary: 'Production deploy, monitoring, and handover documentation.',
    duration: '~1 week',
    deliverables: ['Go-live checklist', 'Runbooks', 'Training session'],
  },
  {
    id: 6,
    icon: Settings,
    title: 'Evolve',
    summary: 'Support, tuning, and roadmap for the next iteration.',
    duration: 'Ongoing',
    deliverables: ['SLAs', 'Backlog grooming', 'Metrics review'],
  },
] as const;

const principles = [
  {
    title: 'Clear ownership',
    body: 'A single lead engineer stays accountable from kickoff through delivery.',
  },
  {
    title: 'Documented decisions',
    body: 'Key trade-offs and assumptions are captured so your team can maintain the system.',
  },
  {
    title: 'Predictable rhythm',
    body: 'Weekly demos and written updates — no black-box development.',
  },
  {
    title: 'Production mindset',
    body: 'We ship with observability, rollback paths, and operational readiness in mind.',
  },
] as const;

export default function Process() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });
  const [active, setActive] = useState(0);
  const step = processSteps[active];
  const StepIcon = step.icon;

  return (
    <section
      id="process"
      className="relative overflow-hidden border-t border-white/10 bg-zinc-950 py-20 text-white md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_50%_at_50%_-30%,rgba(255,255,255,0.04),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="container relative mx-auto max-w-full px-4 lg:px-8">
        <header className="mx-auto max-w-2xl text-center" ref={ref}>
          <p
            className={`text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500 transition-all duration-700 ${
              inView ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Process
          </p>
          <h2
            className={`mt-3 text-3xl font-bold tracking-tight md:text-4xl transition-all delay-75 duration-700 ${
              inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            Delivery methodology
          </h2>
          <p
            className={`mt-4 text-sm leading-relaxed text-zinc-400 md:text-base transition-all delay-100 duration-700 ${
              inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            Six connected phases — tap a step to see what you get at each stage.
          </p>
        </header>

        {/* Horizontal stepper */}
        <div
          className={`mx-auto mt-12 max-w-5xl transition-all delay-100 duration-700 md:mt-14 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <div className="relative overflow-x-auto pb-2 md:overflow-visible md:pb-0">
            <div className="flex min-w-max items-center gap-0 px-2 md:min-w-0 md:justify-between md:px-0">
              {processSteps.map((s, i) => {
                const Icon = s.icon;
                const isActive = i === active;
                const isPast = i < active;
                return (
                  <div key={s.id} className="flex items-center md:flex-1 md:min-w-0">
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      className="group flex flex-col items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F46530] focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
                    >
                      <span
                        className={`relative z-[1] flex h-11 w-11 items-center justify-center rounded-full border-2 transition md:h-12 md:w-12 ${
                          isActive
                            ? 'border-[#F46530] bg-[#F46530] text-white shadow-[0_0_20px_-4px_rgba(244,101,48,0.5)]'
                            : isPast
                              ? 'border-white/25 bg-white/10 text-white'
                              : 'border-white/15 bg-zinc-900 text-zinc-500 group-hover:border-white/30 group-hover:text-zinc-300'
                        }`}
                      >
                        {isPast && !isActive ? (
                          <Check className="h-4 w-4" strokeWidth={2.5} aria-hidden />
                        ) : (
                          <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden />
                        )}
                      </span>
                      <span
                        className={`mt-2 hidden max-w-[5.5rem] text-center text-[10px] font-semibold uppercase leading-tight tracking-wide sm:block md:max-w-none md:text-[11px] ${
                          isActive ? 'text-white' : 'text-zinc-600'
                        }`}
                      >
                        {s.title}
                      </span>
                    </button>
                    {i < processSteps.length - 1 ? (
                      <div
                        className="mx-1 h-0.5 w-6 shrink-0 rounded-full md:mx-2 md:flex-1 md:min-w-[1rem]"
                        style={{
                          background:
                            active > i
                              ? 'linear-gradient(90deg, rgba(244,101,48,0.85), rgba(244,101,48,0.35))'
                              : 'rgba(255,255,255,0.1)',
                        }}
                        aria-hidden
                      />
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-zinc-500 sm:hidden">
            {processSteps[active].title} · {processSteps[active].duration}
          </p>
        </div>

        {/* Detail */}
        <div
          className={`mx-auto mt-10 max-w-5xl transition-all delay-150 duration-700 md:mt-12 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-transparent p-6 md:p-10">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-medium text-zinc-400">
                  <span className="font-mono text-[#F46530]">0{active + 1}</span>
                  <span className="text-zinc-500">/</span>
                  <span>06</span>
                </div>
                <h3 className="mt-4 text-2xl font-bold md:text-3xl">{step.title}</h3>
                <p className="mt-2 flex items-center gap-2 text-sm text-zinc-500">
                  <Clock className="h-4 w-4" aria-hidden />
                  Typical duration: {step.duration}
                </p>
                <p className="mt-6 text-sm leading-relaxed text-zinc-400 md:text-base">{step.summary}</p>
              </div>
              <div className="w-full border-t border-white/10 pt-8 lg:w-80 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-2">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-500">Deliverables</p>
                <ul className="mt-4 space-y-3">
                  {step.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-zinc-200"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#F46530]/15 text-[#F46530]">
                        <Check className="h-3 w-3" strokeWidth={3} aria-hidden />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-5xl border-t border-white/10 pt-14 md:mt-20 md:pt-16">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            How we operate
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p) => (
              <li
                key={p.title}
                className="rounded-xl border border-white/10 bg-black/25 p-5 backdrop-blur-sm transition hover:border-white/20"
              >
                <p className="text-sm font-bold text-white">{p.title}</p>
                <p className="mt-2 text-xs leading-relaxed text-zinc-500">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto mt-14 max-w-lg text-center md:mt-16">
          <p className="text-sm text-zinc-500">We will map these phases to your timeline and risk profile.</p>
          <a
            href={companyInfo.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#F46530] px-8 py-3.5 text-sm font-bold text-white transition hover:bg-[#e85e2d]"
          >
            <Calendar className="h-4 w-4" aria-hidden />
            Schedule consultation
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
