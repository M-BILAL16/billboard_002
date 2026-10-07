"use client";

import { credentials, intro } from "@/data/site";
import { gsap, useGSAP } from "@/lib/gsap";
import { useRef } from "react";

const format = (value: number) => Math.round(value).toLocaleString("en-US");

export function AboutSection() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".reveal-word",
          { opacity: 0.14 },
          {
            opacity: 1,
            ease: "none",
            stagger: 0.08,
            scrollTrigger: { trigger: ".about-statement", start: "top 82%", end: "bottom 45%", scrub: 0.6 },
          },
        );

        gsap.utils.toArray<HTMLElement>("[data-count]").forEach((node) => {
          const target = Number(node.dataset.count);
          const state = { value: 0 };
          node.textContent = "0";
          gsap.to(state, {
            value: target,
            duration: 1.6,
            ease: "power3.out",
            scrollTrigger: { trigger: node, start: "top 88%", once: true },
            onUpdate: () => {
              node.textContent = format(state.value);
            },
          });
        });

        gsap.fromTo(
          ".credential",
          { y: 40, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.08,
            scrollTrigger: { trigger: ".credentials", start: "top 85%" },
          },
        );
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} id="about" className="px-5 pt-24 pb-24 md:px-10 md:pt-36 md:pb-32" aria-labelledby="about-title">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="eyebrow flex items-center gap-3">
              <span>01</span>
              <span className="h-px w-8 bg-electric/40" aria-hidden="true" />
              <span>About Signs NYC</span>
            </p>
            <p className="mt-5 max-w-[22ch] text-sm leading-relaxed text-mute">
              Licensed & Insured in All 5 Boroughs. Serving NYC since 1989.
            </p>
          </div>
          <div className="lg:col-span-9">
            <h2 id="about-title" className="sr-only">
              About Signs NYC
            </h2>
            <p className="about-statement text-[clamp(1.9rem,4.1vw,4rem)] leading-[1.04] font-medium tracking-[-0.045em] text-ink">
              {intro.split(" ").map((word, index) => (
                <span key={`${word}-${index}`} className="reveal-word">
                  {word}
                  {"\u00a0"}
                </span>
              ))}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-[12px] font-semibold tracking-[0.14em] text-white uppercase transition-all duration-300 hover:bg-electric active:scale-95"
              >
                Request a free quote
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <path d="M3.5 10.5 10.5 3.5M10.5 3.5H5.2M10.5 3.5V8.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-6 py-3.5 text-[12px] font-semibold tracking-[0.14em] text-ink uppercase backdrop-blur transition-all duration-300 hover:border-electric/40 hover:text-electric"
              >
                Explore our work (gallery)
              </a>
            </div>
          </div>
        </div>

        <div className="credentials on-dark relative mt-20 overflow-hidden rounded-[32px] bg-navy text-white md:mt-28">
          <div className="blueprint absolute inset-0" aria-hidden="true" />
          <div className="absolute -top-40 right-[-10%] h-[420px] w-[620px] rounded-full bg-electric/30 blur-[120px]" aria-hidden="true" />
          <ul className="relative grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {credentials.map((item, index) => (
              <li key={item.label} className="credential flex flex-col justify-between gap-12 bg-navy/90 p-7 md:p-9">
                <span className="font-mono text-[11px] tracking-[0.2em] text-bright">0{index + 1}</span>
                <div>
                  <p className="flex items-baseline gap-2">
                    <span className="text-[clamp(3rem,5vw,4.6rem)] leading-none font-semibold tracking-[-0.055em]">
                      <span data-count={item.value}>{format(item.value)}</span>
                      {item.suffix}
                    </span>
                    <span className="font-mono text-[11px] tracking-[0.18em] text-white/55 uppercase">{item.unit}</span>
                  </p>
                  <p className="mt-5 text-sm font-semibold tracking-[0.12em] uppercase">{item.label}</p>
                  <p className="mt-2 text-sm text-white/55">{item.note}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
