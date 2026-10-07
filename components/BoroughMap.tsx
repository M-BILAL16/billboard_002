"use client";

import { boroughsCopy } from "@/data/site";
import { pins, type Borough, type Pin } from "@/data/signsCatalog";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "./SectionHeading";

const boroughs: Borough[] = ["Manhattan", "Brooklyn", "Queens", "The Bronx", "Staten Island"];

const mapsHref = (pin: Pin) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${pin.name} ${pin.address}`)}`;

export function BoroughMap() {
  const [borough, setBorough] = useState<Borough>("Manhattan");
  const [activeId, setActiveId] = useState(pins[0].id);
  const reduce = useReducedMotion();
  const jobs = pins.filter((pin) => pin.borough === borough);
  const active = jobs.find((pin) => pin.id === activeId) ?? jobs[0];
  const busiest = Math.max(...boroughs.map((name) => pins.filter((pin) => pin.borough === name).length));

  const chooseBorough = (name: Borough) => {
    setBorough(name);
    const first = pins.find((pin) => pin.borough === name);
    if (first) setActiveId(first.id);
  };

  return (
    <section className="px-5 py-24 md:px-10" aria-labelledby="boroughs-title">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          index="04"
          label="Installations"
          id="boroughs-title"
          lines={["Five boroughs."]}
          accent="No two jobs alike."
          copy={boroughsCopy}
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="min-w-0 lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <p className="font-mono text-[11px] tracking-[0.18em] text-mute uppercase">Choose a borough</p>
              <ul className="no-scrollbar -mx-5 mt-3 flex gap-2 overflow-x-auto px-5 lg:mx-0 lg:flex-col lg:gap-1.5 lg:overflow-visible lg:px-0" role="list">
                {boroughs.map((name, index) => {
                  const count = pins.filter((pin) => pin.borough === name).length;
                  const on = name === borough;
                  return (
                    <li key={name} className="shrink-0 lg:shrink">
                      <button
                        type="button"
                        aria-pressed={on}
                        onClick={() => chooseBorough(name)}
                        className={`flex w-full items-center gap-4 rounded-2xl px-4 py-3 text-left transition-colors duration-300 lg:py-4 ${
                          on ? "bg-navy text-white" : "bg-white/70 text-ink hover:bg-white"
                        }`}
                      >
                        <span className={`font-mono text-[11px] ${on ? "text-bright" : "text-mute"}`}>
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-lg font-semibold tracking-[-0.03em] whitespace-nowrap">{name}</span>
                          <span className={`mt-2 hidden h-1 overflow-hidden rounded-full lg:block ${on ? "bg-white/15" : "bg-ice"}`}>
                            <span
                              className={`block h-full rounded-full ${on ? "bg-bright" : "bg-electric/70"}`}
                              style={{ width: `${(count / busiest) * 100}%` }}
                            />
                          </span>
                        </span>
                        <span className={`font-mono text-sm ${on ? "text-white" : "text-electric"}`}>{count}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
              <p className="mt-5 hidden text-sm leading-relaxed text-mute lg:block">
                NYC DOB & LPC licensed sign hanger. 3,240+ completed installations.
              </p>
            </div>
          </div>

          <div className="min-w-0 lg:col-span-8">
            <AnimatePresence mode="wait" initial={false}>
              <motion.article
                key={active.id}
                className="rounded-[28px] border border-black/8 bg-white p-6 shadow-[0_30px_70px_-50px_rgba(16,42,92,0.55)] md:p-9"
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                aria-live="polite"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="eyebrow">
                    {active.borough} · {active.neighborhood}
                  </p>
                  <p className="rounded-full bg-ice px-3 py-1 font-mono text-[11px] tracking-[0.14em] text-electric uppercase">
                    Installed {active.installed}
                  </p>
                </div>
                <h3 className="mt-5 max-w-[16ch] text-[clamp(2rem,4vw,3.4rem)] leading-[0.95] font-semibold tracking-[-0.045em] uppercase">
                  {active.name}
                </h3>
                <p className="mt-3 text-sm text-mute">{active.clientType}</p>
                <div className="mt-7 rounded-2xl bg-mist p-5">
                  <p className="font-mono text-[10px] tracking-[0.18em] text-mute uppercase">Fabricated & installed</p>
                  <p className="mt-2 text-lg leading-snug font-medium">{active.signType}</p>
                </div>
                <div className="mt-6 flex flex-wrap items-end justify-between gap-5 border-t border-line pt-6">
                  <div>
                    <p className="text-base">{active.address}</p>
                    <p className="mt-2 font-mono text-[11px] tracking-[0.12em] text-electric uppercase">DOB permitted · {active.permit}</p>
                  </div>
                  <a
                    href={mapsHref(active)}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full bg-navy px-5 py-3 text-[12px] font-semibold tracking-[0.14em] text-white uppercase transition-all duration-300 hover:bg-electric active:scale-95"
                  >
                    View on Google Maps
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <path d="M3.5 10.5 10.5 3.5M10.5 3.5H5.2M10.5 3.5V8.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                  </a>
                </div>
              </motion.article>
            </AnimatePresence>

            <ul className="mt-3 overflow-hidden rounded-[24px] border border-black/8 bg-white/80" aria-label={`${borough} installations`}>
              {jobs.map((pin, index) => {
                const on = pin.id === active.id;
                return (
                  <li key={pin.id} className={index > 0 ? "border-t border-line" : ""}>
                    <button
                      type="button"
                      aria-current={on ? "true" : undefined}
                      onClick={() => setActiveId(pin.id)}
                      className={`flex w-full items-center gap-4 px-4 py-4 text-left transition-colors duration-200 md:px-6 ${
                        on ? "bg-ice" : "hover:bg-mist"
                      }`}
                    >
                      <span className={`font-mono text-[11px] ${on ? "text-electric" : "text-mute"}`}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate font-medium">{pin.name}</span>
                        <span className="block truncate text-sm text-mute">{pin.neighborhood}</span>
                      </span>
                      <span className="hidden shrink-0 font-mono text-[11px] text-mute sm:block">{pin.installed}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
