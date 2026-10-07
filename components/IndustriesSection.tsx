"use client";

import { industries, industriesCopy } from "@/data/site";
import Image from "next/image";
import { useRef, useState } from "react";
import { ArrowButton } from "./PortfolioSection";
import { SectionHeading } from "./SectionHeading";

export function IndustriesSection() {
  const [active, setActive] = useState(0);
  const rail = useRef<HTMLUListElement>(null);

  const go = (next: number) => {
    const index = (next + industries.length) % industries.length;
    setActive(index);
    const item = rail.current?.children[index] as HTMLElement | undefined;
    if (item && rail.current && rail.current.scrollWidth > rail.current.clientWidth) {
      item.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    }
  };

  return (
    <section id="industries" className="py-24" aria-labelledby="industries-title">
      <div className="mx-auto max-w-[1480px] px-5 md:px-10">
        <SectionHeading
          index="06"
          label="Industries"
          id="industries-title"
          lines={["Every industry", "deserves the"]}
          accent="right landmark."
          copy={industriesCopy}
          aside={
            <div className="mt-6 flex items-center gap-4">
              <p className="font-mono text-sm tracking-[0.1em] text-mute">
                <span className="text-lg text-ink">{String(active + 1).padStart(2, "0")}</span> / {String(industries.length).padStart(2, "0")}
              </p>
              <div className="flex gap-2">
                <ArrowButton label="Previous industry" onClick={() => go(active - 1)} flip />
                <ArrowButton label="Next industry" onClick={() => go(active + 1)} />
              </div>
            </div>
          }
        />
      </div>

      <ul
        ref={rail}
        className="no-scrollbar mx-auto mt-12 flex max-w-[1480px] snap-x snap-mandatory scroll-px-5 gap-3 overflow-x-auto px-5 md:scroll-px-10 md:px-10 lg:h-[560px] lg:snap-none lg:gap-2 lg:overflow-visible"
        aria-label="Industries"
      >
        {industries.map((industry, index) => {
          const on = index === active;
          return (
            <li
              key={industry.id}
              className={`relative h-[420px] w-[72vw] shrink-0 snap-start overflow-hidden rounded-[24px] bg-navy transition-[flex-grow] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] sm:w-[320px] lg:h-full lg:w-auto lg:min-w-0 lg:basis-0 ${
                on ? "lg:grow-[9]" : "lg:grow"
              }`}
              onMouseEnter={() => setActive(index)}
            >
              <button
                type="button"
                aria-pressed={on}
                aria-label={industry.title}
                onClick={() => setActive(index)}
                onFocus={() => setActive(index)}
                className="group absolute inset-0 text-left"
              >
                <Image
                  src={industry.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 40vw, 72vw"
                  className={`object-cover transition-all duration-700 ${on ? "scale-100 saturate-100" : "scale-110 saturate-[0.4] lg:brightness-75"}`}
                />
                <span className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" aria-hidden="true" />
                <span className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.2em] text-white/70">{String(index + 1).padStart(2, "0")}</span>
                <span
                  className={`absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 -rotate-90 font-mono text-[11px] tracking-[0.24em] whitespace-nowrap text-white uppercase transition-opacity duration-300 lg:block ${
                    on ? "opacity-0" : "opacity-100"
                  }`}
                  aria-hidden="true"
                >
                  {industry.title}
                </span>
                <span className={`absolute right-5 bottom-5 left-5 transition-all duration-500 ${on ? "opacity-100 lg:translate-y-0" : "lg:translate-y-4 lg:opacity-0"}`}>
                  <span className="block text-[clamp(1.8rem,3vw,2.8rem)] leading-none font-semibold tracking-[-0.045em] text-white uppercase">
                    {industry.title}
                  </span>
                  <span className="mt-3 inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] text-white/75 uppercase">
                    <span className="h-px w-6 bg-bright" aria-hidden="true" />
                    Signage for {industry.title.toLowerCase()}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
