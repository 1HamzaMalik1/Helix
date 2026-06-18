"use client";

import { ArrowRight } from "lucide-react";
import { preselectService } from "./ContactForm";
import SectionHeading from "./SectionHeading";
import { processSteps, serviceOffers } from "./data";

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-5xl border-t border-zinc-800/80 px-4 py-20 sm:px-6">
      <SectionHeading title="What I build for clients" subtitle="Pick a service and send your scope in the form below." />

      <div className="grid gap-6 md:grid-cols-3">
        {serviceOffers.map((service) => (
          <article key={service.title} className="flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
            <div className="mb-4 flex items-center justify-between">
              <service.icon className="h-6 w-6 text-secondary" />
              <span className="text-xs font-medium text-secondary">{service.metric}</span>
            </div>
            <h3 className="text-lg font-semibold text-white">{service.title}</h3>
            <ul className="mt-4 flex-1 space-y-2 text-sm text-zinc-400">
              {service.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={() => preselectService(service.serviceKey)}
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary transition hover:text-orange-400"
            >
              Get quote <ArrowRight className="h-4 w-4" />
            </a>
          </article>
        ))}
      </div>

      <ol className="mt-14 grid gap-6 sm:grid-cols-4">
        {processSteps.map((step, idx) => (
          <li key={step.title}>
            <p className="text-xs font-medium text-secondary">0{idx + 1}</p>
            <p className="mt-2 font-medium text-white">{step.title}</p>
            <p className="mt-1 text-sm text-zinc-500">{step.detail}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
