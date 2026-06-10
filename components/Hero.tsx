"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import BookingWidget from "./BookingWidget";

const heroSlides = [
  {
    src: "/images/studio.png",
    alt: "Studio apartment interior at Zangem BnBs",
  },
  {
    src: "/images/kitchen.png",
    alt: "Modern kitchenette in a Zangem BnBs apartment",
  },
  {
    src: "/images/sitting.png",
    alt: "Stylish sitting area at Zangem BnBs",
  },
  {
    src: "/images/bedroom.png",
    alt: "One bedroom apartment interior at Zangem BnBs",
  },
];

const HERO_SLIDE_DURATION = 5600;

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, HERO_SLIDE_DURATION);

    return () => window.clearInterval(intervalId);
  }, []);

  function handleSelectSlide(index: number) {
    setActiveSlide(index);
  }

  return (
    <section className="relative isolate flex min-h-[640px] items-center overflow-hidden">
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === activeSlide ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={index !== activeSlide}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover object-center brightness-[0.72] saturate-[1.02] scale-105"
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(13,8,7,0.86)_0%,rgba(30,16,10,0.74)_34%,rgba(24,11,7,0.40)_100%)]" />
        <div className="orb orb-ember left-[8%] top-[14%] h-40 w-40" />
        <div className="orb orb-copper bottom-[14%] left-[48%] h-56 w-56 [animation-delay:1.8s]" />
        <div className="orb orb-teal right-[8%] top-[22%] h-32 w-32 [animation-delay:3.2s]" />
      </div>

      <div className="relative z-10 container mx-auto grid grid-cols-1 items-center gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:py-20">
        <div className="max-w-2xl text-white">
          <span className="mb-5 inline-flex items-center rounded-full border border-[#f08a24]/38 bg-[#f08a24]/14 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#ffd3a8] sm:px-4 sm:text-sm sm:tracking-[0.28em]">
            Boutique stays in Membley, Ruiru
          </span>

          <h1 className="font-poppins text-3xl font-semibold leading-tight tracking-tight text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.28)] sm:text-4xl md:text-5xl lg:text-6xl">
            A refined stay experience
            <span className="mt-4 block max-w-2xl text-base font-inter font-semibold leading-7 tracking-[0.01em] text-[#ffe5c8] sm:text-lg sm:leading-8 md:text-xl md:leading-9">
              Thoughtfully furnished apartments for comfortable stays, modern
              convenience, and elevated living in Ruiru.
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-white/92 sm:text-lg sm:leading-8 md:text-xl">
            Discover furnished apartments with a polished atmosphere, warm
            interiors, and a premium hospitality experience designed for
            comfort, clarity, and style.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/#booking"
              className="inline-flex items-center justify-center rounded-md bg-[#d97706] px-5 py-3 font-semibold text-white shadow-lg shadow-black/25 transition hover:translate-y-[-1px] hover:bg-[#c96a04]"
            >
              Book Your Stay
            </Link>
            <Link
              href="/properties"
              className="inline-flex items-center justify-center rounded-md border border-[#f08a24]/40 bg-[#20120d]/82 px-5 py-3 font-semibold text-[#ffe5c8] shadow-lg shadow-black/20 transition hover:translate-y-[-1px] hover:bg-[#2a1710]/92"
            >
              Explore Apartments
            </Link>
            <Link
              href="/investments"
              className="inline-flex items-center justify-center rounded-md border border-white/22 bg-black/22 px-5 py-3 font-semibold text-white transition hover:translate-y-[-1px] hover:border-[#f08a24]/45 hover:text-[#ffe5c8]"
            >
              Investment Opportunities
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-2">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => handleSelectSlide(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeSlide
                    ? "w-10 bg-[#f08a24]"
                    : "w-2.5 bg-white/55"
                }`}
                aria-label={`Show slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div id="booking" className="relative scroll-mt-24">
          <div className="rounded-[28px] border border-[#f08a24]/24 bg-[linear-gradient(160deg,rgba(17,10,8,0.95),rgba(35,20,14,0.90))] p-6 shadow-2xl shadow-black/35">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <div className="font-poppins text-2xl text-white">
                  Reserve your stay
                </div>
                <div className="text-sm text-[#ffe5c8]/90">
                  Fast booking request for Zangem guests
                </div>
              </div>
              <div className="h-12 w-12 rounded-full border border-[#f08a24]/30 bg-[#f08a24]/10" />
            </div>
            <BookingWidget />
          </div>
        </div>
      </div>
    </section>
  );
}
