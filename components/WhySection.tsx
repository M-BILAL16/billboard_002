"use client";

import { gsap, useGSAP } from "@/lib/gsap";
import { useRef } from "react";

const lines = ["Not a feed.", "A street.", "A second they can't skip."];

export function WhySection() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!rootRef.current) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.from(".why-line", {
        yPercent: 110,
        duration: 1.05,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 72%",
        },
      });
    },
    { scope: rootRef },
  );

  return (
    <section ref={rootRef} className="px-5 py-28 md:px-10 md:py-40" aria-labelledby="why-title">
      <div className="mx-auto max-w-[1400px]">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-electric">Why digital billboards</p>
        <h2 id="why-title" className="sr-only">
          Why digital billboards
        </h2>
        <div className="mt-6">
          {lines.map((line) => (
            <div key={line} className="overflow-hidden">
              <p className="why-line text-[clamp(3rem,8.2vw,8.2rem)] font-medium leading-[0.9] tracking-[-0.055em]">
                {line}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-10 max-w-lg text-lg leading-relaxed text-mute">
          Digital visibility, built for the physical world. Your brand deserves more than a scroll — it deserves the moment between here and there.
        </p>
      </div>
    </section>
  );
}
