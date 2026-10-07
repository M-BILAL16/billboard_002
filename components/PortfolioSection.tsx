"use client";

import { transformations } from "@/data/site";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { SectionHeading } from "./SectionHeading";

export function PortfolioSection() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const project = transformations[index];

  const select = (next: number) => setIndex((next + transformations.length) % transformations.length);

  return (
    <section id="portfolio" className="px-5 py-24 md:px-10 md:py-36" aria-labelledby="portfolio-title">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          index="03"
          label="Portfolio"
          id="portfolio-title"
          lines={["From the shop"]}
          accent="to the street."
          copy="Seven installations. The finished piece, the street it went to, and what the site looked like when the crew arrived."
          aside={
            <div className="mt-6 flex items-center gap-4">
              <p className="font-mono text-sm tracking-[0.1em] text-mute">
                <span className="text-lg text-ink">{String(index + 1).padStart(2, "0")}</span>
                {" / "}
                {String(transformations.length).padStart(2, "0")}
              </p>
              <div className="flex gap-2">
                <ArrowButton label="Previous job" onClick={() => select(index - 1)} flip />
                <ArrowButton label="Next job" onClick={() => select(index + 1)} />
              </div>
            </div>
          }
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-10">
          <ol className="no-scrollbar -mx-5 flex min-w-0 gap-2 overflow-x-auto px-5 lg:col-span-4 lg:mx-0 lg:block lg:space-y-1 lg:overflow-visible lg:px-0" aria-label="Jobs">
            {transformations.map((item, itemIndex) => {
              const on = itemIndex === index;
              return (
                <li key={item.id} className="shrink-0 lg:shrink">
                  <button
                    type="button"
                    aria-current={on ? "true" : undefined}
                    onClick={() => setIndex(itemIndex)}
                    className={`flex w-full items-center gap-4 rounded-2xl px-4 py-3 text-left transition-colors duration-300 lg:py-3.5 ${
                      on ? "bg-navy text-white" : "text-ink hover:bg-white"
                    }`}
                  >
                    <span className={`font-mono text-[11px] ${on ? "text-bright" : "text-mute"}`}>
                      {String(itemIndex + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-medium whitespace-nowrap lg:whitespace-normal">{item.category}</span>
                      <span className={`mt-0.5 hidden text-sm lg:block ${on ? "text-white/60" : "text-mute"}`}>{item.borough}</span>
                    </span>
                    <span className={`font-mono text-sm ${on ? "text-bright" : "text-electric"}`}>{item.stat}</span>
                  </button>
                </li>
              );
            })}
          </ol>

          <div className="min-w-0 lg:col-span-8">
            <AnimatePresence mode="wait" initial={false}>
              <motion.article
                key={project.id}
                initial={reduce ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-[28px] bg-navy">
                  <Image
                    src={project.after}
                    alt={`${project.title}, installed`}
                    fill
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/80 to-transparent p-5 md:p-7">
                    <p className="font-mono text-[11px] tracking-[0.16em] text-white/70 uppercase">{project.borough}</p>
                    <p className="mt-1 max-w-[18ch] text-[clamp(1.6rem,3vw,2.4rem)] leading-[0.98] font-semibold tracking-[-0.04em] text-white uppercase">
                      {project.title}
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid gap-5 md:grid-cols-5">
                  <div className="rounded-[24px] border border-black/8 bg-white p-5 md:col-span-3 md:p-6">
                    <p className="eyebrow">{project.category}</p>
                    <p className="mt-3 text-sm text-mute">{project.subtitle}</p>
                    <p className="mt-5 flex items-end gap-3">
                      <span className="accent-text text-[clamp(2.6rem,4vw,3.6rem)] leading-none font-semibold tracking-[-0.05em]">
                        {project.stat}
                      </span>
                      <span className="pb-1 font-mono text-[11px] tracking-[0.14em] text-mute uppercase">{project.statLabel}</span>
                    </p>
                    <p className="mt-5 text-base leading-relaxed">{project.afterDesc}</p>
                    <dl className="mt-6 grid grid-cols-2 gap-x-5 gap-y-4 border-t border-line pt-5 text-sm">
                      {project.specs.map((spec) => (
                        <div key={spec.label}>
                          <dt className="font-mono text-[10px] tracking-[0.16em] text-mute uppercase">{spec.label}</dt>
                          <dd className="mt-1 leading-snug font-medium">{spec.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  <aside className="flex flex-col rounded-[24px] border border-black/8 bg-mist p-3 md:col-span-2">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] bg-navy">
                      <Image
                        src={project.before}
                        alt={`${project.title}, the site before installation`}
                        fill
                        sizes="(min-width: 768px) 20vw, 90vw"
                        className="object-cover"
                      />
                    </div>
                    <p className="mt-4 px-2 font-mono text-[10px] tracking-[0.18em] text-electric uppercase">When the crew arrived</p>
                    <p className="mt-2 px-2 pb-2 text-sm leading-relaxed text-mute">{project.beforeDesc}</p>
                  </aside>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ArrowButton({ label, onClick, flip = false }: { label: string; onClick: () => void; flip?: boolean }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white text-ink shadow-sm transition-all duration-300 hover:border-electric hover:bg-electric hover:text-white active:scale-95"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={flip ? "rotate-180" : ""}>
        <path d="M3 8h10M9 4l4 4-4 4" />
      </svg>
    </button>
  );
}
