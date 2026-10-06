"use client";

import { locations } from "@/data/site";
import { useState } from "react";

export function BillboardNetwork() {
  const [activeId, setActiveId] = useState(locations[0].id);
  const active = locations.find((location) => location.id === activeId) ?? locations[0];

  return (
    <section id="network" className="px-5 pb-28 md:px-10 md:pb-40" aria-labelledby="network-title">
      <div className="mx-auto grid max-w-[1400px] gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-stretch">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-electric">Network</p>
          <h2 id="network-title" className="mt-4 max-w-[14ch] text-[clamp(2.2rem,4.6vw,4.6rem)] font-medium leading-[0.94] tracking-[-0.045em]">
            Where the city already looks.
          </h2>
          <div className="relative mt-10 h-[520px] overflow-hidden rounded-[28px] bg-navy sm:h-[580px]">
            <div
              className="absolute inset-0 opacity-70"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
              aria-hidden="true"
            />
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <path d="M8 20 C 30 28, 40 10, 62 22 S 90 18, 96 36" fill="none" stroke="rgba(143,180,255,0.35)" strokeWidth="0.4" />
              <path d="M4 62 C 24 48, 40 70, 58 58 S 82 46, 98 72" fill="none" stroke="rgba(143,180,255,0.28)" strokeWidth="0.35" />
              <path d="M18 90 C 36 74, 52 88, 70 76" fill="none" stroke="rgba(143,180,255,0.2)" strokeWidth="0.3" />
            </svg>
            {locations.map((location) => {
              const selected = location.id === active.id;
              return (
                <button
                  key={location.id}
                  type="button"
                  className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full p-2"
                  style={{ left: `${location.x}%`, top: `${location.y}%` }}
                  aria-pressed={selected}
                  aria-label={`${location.name}, ${location.city}`}
                  onMouseEnter={() => setActiveId(location.id)}
                  onFocus={() => setActiveId(location.id)}
                  onClick={() => setActiveId(location.id)}
                >
                  <span className="relative grid h-3.5 w-3.5 place-items-center">
                    <span className={`ping absolute inset-0 rounded-full bg-bright/80 ${selected ? "opacity-100" : "opacity-60"}`} />
                    <span className={`relative h-2.5 w-2.5 rounded-full ${selected ? "bg-white" : "bg-bright"}`} />
                  </span>
                </button>
              );
            })}
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-white/10 p-5 text-white backdrop-blur-md sm:right-auto sm:max-w-sm">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#c5d8ff]">{active.city}</p>
              <p className="mt-1 text-2xl font-medium tracking-[-0.04em]">{active.name}</p>
              <p className="mt-2 text-sm text-white/75">{active.note}</p>
            </div>
          </div>
        </div>
        <ul className="flex flex-col justify-center divide-y divide-line rounded-[28px] border border-line bg-white/70">
          {locations.map((location) => {
            const selected = location.id === active.id;
            return (
              <li key={location.id}>
                <button
                  type="button"
                  className={`flex w-full items-baseline justify-between gap-4 px-5 py-4 text-left transition ${selected ? "bg-ice" : "hover:bg-white"}`}
                  aria-pressed={selected}
                  onMouseEnter={() => setActiveId(location.id)}
                  onFocus={() => setActiveId(location.id)}
                  onClick={() => setActiveId(location.id)}
                >
                  <span>
                    <span className="block text-sm font-medium tracking-[-0.02em]">{location.name}</span>
                    <span className="mt-0.5 block text-xs text-mute">{location.city}</span>
                  </span>
                  <span className={`h-1.5 w-1.5 rounded-full ${selected ? "bg-electric" : "bg-black/15"}`} aria-hidden="true" />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
