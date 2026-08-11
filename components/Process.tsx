'use client';

import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { companyInfo } from '@/lib/constants';

const processSteps = [
  {
    id: 1,
    title: 'Discovery',
    summary: 'Scope, constraints, and technical approach.',
    duration: '1–2 weeks',
    deliverables: ['Scope & milestones', 'Architecture notes', 'Risk register'],
  },
  {
    id: 2,
    title: 'Design',
    summary: 'UX flows and UI aligned to your brand.',
    duration: '2–3 weeks',
    deliverables: ['Wireframes', 'UI kit', 'Prototype'],
  },
  {
    id: 3,
    title: 'Development',
    summary: 'Iterative builds with reviews and CI.',
    duration: '4–12 weeks',
    deliverables: ['Working increments', 'Repo access', 'Release notes'],
  },
  {
    id: 4,
    title: 'Quality',
    summary: 'Functional, performance, and security checks.',
    duration: '1–2 weeks',
    deliverables: ['Test plan', 'Defect triage', 'Sign-off'],
  },
  {
    id: 5,
    title: 'Launch',
    summary: 'Production deploy, monitoring, and handover.',
    duration: '~1 week',
    deliverables: ['Go-live checklist', 'Runbooks', 'Training'],
  },
  {
    id: 6,
    title: 'Evolve',
    summary: 'Support, tuning, and next iteration.',
    duration: 'Ongoing',
    deliverables: ['SLAs', 'Backlog grooming', 'Metrics review'],
  },
] as const;

const principles = [
  { title: 'Clear ownership', body: 'One lead engineer from kickoff to delivery.' },
  { title: 'Documented decisions', body: 'Trade-offs captured for your team.' },
  { title: 'Predictable rhythm', body: 'Weekly demos and written updates.' },
  { title: 'Production mindset', body: 'Observability and operational readiness.' },
] as const;

export default function Process() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });
  const [active, setActive] = useState(0);
  const step = processSteps[active];

  return (
    <section
      id="process"
      className="border-t border-zinc-200 bg-zinc-50 py-16 md:py-20"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <header className="mx-auto max-w-2xl text-center" ref={ref}>
          <p
            className={`text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 transition-all duration-700 ${
              inView ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Delivery
          </p>
          <h2
            className={`mt-2 text-3xl font-bold tracking-tight text-zinc-950 md:text-4xl transition-all delay-75 duration-700 ${
              inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            How we work
          </h2>
          <p
            className={`mt-3 text-sm text-zinc-600 md:text-base transition-all delay-100 duration-700 ${
              inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            A structured delivery model used across AI, game, and web engagements.
          </p>
        </header>

        <div
          className={`mx-auto mt-10 max-w-4xl transition-all delay-100 duration-700 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <div className="flex flex-wrap justify-center gap-1 border-b border-zinc-200">
            {processSteps.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setActive(i)}
                className={`px-4 py-3 text-sm font-medium transition ${
                  i === active
                    ? 'border-b-2 border-zinc-950 text-zinc-950'
                    : 'text-zinc-500 hover:text-zinc-800'
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-zinc-200 bg-white p-6 md:p-8">
            <div className="flex flex-col gap-8 md:flex-row md:justify-between">
              <div className="max-w-lg">
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Phase {active + 1} of {processSteps.length}
                </p>
                <h3 className="mt-2 text-xl font-bold text-zinc-950 md:text-2xl">{step.title}</h3>
                <p className="mt-2 flex items-center gap-2 text-sm text-zinc-500">
                  <Clock className="h-4 w-4" aria-hidden />
                  {step.duration}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-zinc-600">{step.summary}</p>
              </div>
              <div className="md:w-64 md:shrink-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Deliverables</p>
                <ul className="mt-3 space-y-2">
                  {step.deliverables.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-zinc-700">
                      <span className="h-1 w-1 shrink-0 rounded-full bg-zinc-400" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <ul className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p) => (
            <li key={p.title} className="text-center">
              <p className="text-sm font-semibold text-zinc-950">{p.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-zinc-600">{p.body}</p>
            </li>
          ))}
        </ul>

        <div className="mx-auto mt-10 max-w-lg text-center">
          <a
            href={companyInfo.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-zinc-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
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
