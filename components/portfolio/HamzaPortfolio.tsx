"use client";

import Hero from "./hamza/Hero";
import Services from "./hamza/Services";
import Projects from "./hamza/Projects";
import GamePortfolio from "./hamza/GamePortfolio";
import Testimonials from "./hamza/Testimonials";
import Contact from "./hamza/Contact";
import StickyCta from "./hamza/StickyCta";

export default function HamzaPortfolio() {
  return (
    <main className="relative min-h-screen bg-[#030305] pb-20 text-zinc-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,101,48,0.08),transparent_40%)]" />

      <Hero />
      <Services />
      <Projects />
      <GamePortfolio />
      <Testimonials />
      <Contact />
      <StickyCta />
    </main>
  );
}
