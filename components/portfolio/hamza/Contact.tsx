"use client";

import { useState } from "react";
import { Calendar } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { calendlyUrl, trustLinks } from "./data";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl border-t border-zinc-800/80 px-4 py-20 sm:px-6">
      <SectionHeading title="Start a project" subtitle="Fill the form — I reply within 24–48 hours." />

      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <ContactForm />

        <aside className="space-y-6 text-sm">
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl border border-zinc-800 p-4 transition hover:border-secondary"
          >
            <Calendar className="h-5 w-5 text-secondary" />
            <span className="font-medium text-white">Book a free call</span>
          </a>

          {trustLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl border border-zinc-800 p-4 transition hover:border-secondary"
            >
              <link.icon className="h-5 w-5 text-secondary" />
              <span className="font-medium text-white">Hire on {link.name}</span>
            </a>
          ))}

          <div className="space-y-3 border-t border-zinc-800 pt-6 text-zinc-400">
            <p>
              <span className="text-zinc-500">Email </span>
              <a href="mailto:hamzahakim12235@gmail.com" className="text-white hover:text-secondary">
                hamzahakim12235@gmail.com
              </a>
            </p>
            <p>
              <span className="text-zinc-500">Phone </span>
              <a href="tel:+923164935823" className="text-white hover:text-secondary">
                +92 316 4935823
              </a>
            </p>
            <p>
              <span className="text-zinc-500">LinkedIn </span>
              <a href="https://linkedin.com/in/hamza-hakim1" target="_blank" rel="noreferrer" className="text-white hover:text-secondary">
                hamza-hakim1
              </a>
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
