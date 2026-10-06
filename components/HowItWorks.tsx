"use client";

import { steps } from "@/data/site";
import { gsap, useGSAP } from "@/lib/gsap";
import { useRef } from "react";

export function HowItWorks() {
  const rootRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!lineRef.current || !rootRef.current) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.from(lineRef.current, {
        scaleX: 0,
        transformOrigin: "left center",
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 70%",
          end: "bottom 55%",
          scrub: 0.6,
        },
      });
    },
    { scope: rootRef },
  );

  return (
    <section ref={rootRef} id="approach" className="px-5 pb-28 md:px-10 md:pb-40" aria-labelledby="approach-title">
      <div className="mx-auto max-w-[1400px]">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-electric">How it works</p>
        <h2 id="approach-title" className="mt-4 max-w-[12ch] text-[clamp(2.2rem,4.6vw,4.6rem)] font-medium leading-[0.94] tracking-[-0.045em]">
          From audience to afterglow.
        </h2>
        <div className="relative mt-14">
          <div ref={lineRef} className="absolute left-0 right-0 top-3 hidden h-px origin-left bg-electric/70 md:block" />
          <ol className="grid gap-10 md:grid-cols-4 md:gap-8">
            {steps.map((step) => (
              <li key={step.number} className="relative">
                <span className="relative z-10 grid h-6 w-6 place-items-center rounded-full border border-electric bg-paper font-mono text-[10px] text-electric">
                  {step.number}
                </span>
                <h3 className="mt-6 text-2xl font-medium tracking-[-0.04em]">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mute md:text-base">{step.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
