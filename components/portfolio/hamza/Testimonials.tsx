"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionHeading from "./SectionHeading";
import { testimonials } from "./data";
import "swiper/css";

export default function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-5xl border-t border-zinc-800/80 px-4 py-20 sm:px-6">
      <SectionHeading title="Client feedback" />

      <Swiper modules={[Autoplay]} autoplay={{ delay: 5000, disableOnInteraction: false }} loop spaceBetween={24}>
        {testimonials.map((item) => (
          <SwiperSlide key={`${item.name}-${item.company}`}>
            <blockquote className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
              <div className="mb-4 flex items-center gap-1">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <FaStar key={i} className="h-3.5 w-3.5 text-secondary" />
                ))}
              </div>
              <p className="text-base leading-relaxed text-zinc-300">&ldquo;{item.quote}&rdquo;</p>
              <footer className="mt-5 flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image src={item.avatar} alt={item.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{item.name}</p>
                  <p className="text-xs text-zinc-500">
                    {item.role}, {item.company}
                  </p>
                </div>
              </footer>
            </blockquote>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
