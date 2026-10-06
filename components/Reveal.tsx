"use client";

import { gsap, useGSAP } from "@/lib/gsap";
import { useRef } from "react";

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(ref.current, { autoAlpha: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        ref.current,
        { autoAlpha: 0, y: 32 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.95,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 86%",
          },
        },
      );
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
