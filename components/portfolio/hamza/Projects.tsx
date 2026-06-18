"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import SectionHeading from "./SectionHeading";
import type { ProjectItem } from "./data";
import { featuredProjects } from "./data";

export default function Projects() {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="mx-auto max-w-5xl border-t border-zinc-800/80 px-4 py-20 sm:px-6">
      <SectionHeading title="Case studies" subtitle="Measurable outcomes from recent client work." />

      <div className="grid gap-5 sm:grid-cols-2">
        {featuredProjects.map((project) => (
          <article key={project.title} className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40">
            <div className="relative h-48 overflow-hidden">
              <Image src={project.image} alt={project.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <div className="space-y-3 p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-semibold text-white">{project.title}</h3>
                <span className="shrink-0 text-xs font-medium text-secondary">
                  {project.players ?? project.ctr ?? "Shipped"}
                </span>
              </div>
              <p className="text-xs text-zinc-500">{project.tags.join(" · ")}</p>
              <div className="flex gap-4 pt-1 text-sm">
                <button onClick={() => setActiveProject(project)} className="font-medium text-zinc-300 transition hover:text-white">
                  Details
                </button>
                <a href="#contact" className="font-medium text-secondary transition hover:text-orange-400">
                  Hire for similar
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <AnimatePresence>
        {activeProject ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-950 p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{activeProject.title}</h3>
                  <p className="mt-2 text-sm text-zinc-400">{activeProject.summary}</p>
                </div>
                <button onClick={() => setActiveProject(null)} aria-label="Close">
                  <X className="h-5 w-5 text-zinc-400" />
                </button>
              </div>
              <a
                href="#contact"
                onClick={() => setActiveProject(null)}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-secondary"
              >
                Start a similar project <ExternalLink className="h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
