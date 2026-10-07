"use client";

import { steps } from "@/data/signsCatalog";
import { gsap, useGSAP } from "@/lib/gsap";
import { useRef } from "react";

const icons = [
  <path key="survey" d="M4 20h16M6 20V9l6-5 6 5v11M10 20v-5h4v5" />,
  <path key="design" d="M4 4h10l6 6v10H4zM14 4v6h6M8 14h8M8 17h5" />,
  <path key="fab" d="M3 20h18M5 20V10l5 3V10l5 3V6h4v14" />,
  <path key="install" d="M12 3v12m0 0-4-4m4 4 4-4M5 21h14" />,
];

export function ProcessSection() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".process-fill",
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: { trigger: ".process-list", start: "top 70%", end: "bottom 60%", scrub: 0.5 },
          },
        );

        gsap.utils.toArray<HTMLElement>(".process-step").forEach((step) => {
          gsap.fromTo(
            step,
            { autoAlpha: 0.25, x: 24 },
            {
              autoAlpha: 1,
              x: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: step,
                start: "top 72%",
                toggleClass: { targets: step, className: "is-live" },
              },
            },
          );
        });
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} id="services" className="px-5 py-24 md:px-10" aria-labelledby="process-title">
      <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <p className="eyebrow flex items-center gap-3">
              <span>02</span>
              <span className="h-px w-8 bg-electric/40" aria-hidden="true" />
              <span>How we work</span>
            </p>
            <h2 id="process-title" className="section-title mt-5">
              <span className="block">Four steps.</span>
              <span className="block">One New York</span>
              <span className="accent-text block">landmark.</span>
            </h2>
            <a
              href="#contact"
              className="group mt-10 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-[12px] font-semibold tracking-[0.14em] text-white uppercase transition-all duration-300 hover:bg-electric active:scale-95"
            >
              Get sign quote
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <path d="M3.5 10.5 10.5 3.5M10.5 3.5H5.2M10.5 3.5V8.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </a>
          </div>
        </div>

        <ol className="process-list relative lg:col-span-7">
          <span className="absolute top-2 bottom-2 left-[1.375rem] w-px bg-line md:left-[1.875rem]" aria-hidden="true" />
          <span
            className="process-fill absolute top-2 bottom-2 left-[1.375rem] w-px origin-top bg-electric md:left-[1.875rem]"
            aria-hidden="true"
          />
          {steps.map((step, index) => (
            <li key={step.number} className="process-step group relative flex gap-6 pb-14 last:pb-0 md:gap-10 md:pb-20">
              <span className="relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-black/10 bg-white text-electric shadow-[0_12px_30px_-18px_rgba(47,107,255,0.8)] transition-colors duration-500 group-[.is-live]:border-electric group-[.is-live]:bg-electric group-[.is-live]:text-white md:h-[3.75rem] md:w-[3.75rem]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {icons[index]}
                </svg>
              </span>
              <div className="pt-1 md:pt-3">
                <p className="font-mono text-xs tracking-[0.2em] text-electric">Step {step.number}</p>
                <h3 className="mt-3 text-[clamp(1.5rem,2.6vw,2.4rem)] leading-[1.02] font-semibold tracking-[-0.04em] uppercase">
                  {step.title}
                </h3>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-mute md:text-lg">{step.copy}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
