"use client";

import { catalog } from "@/data/signsCatalog";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useId, useState } from "react";
import { SectionHeading } from "./SectionHeading";

export function CatalogSection() {
  const [categoryId, setCategoryId] = useState(catalog[0].id);
  const [query, setQuery] = useState("");
  const reduce = useReducedMotion();
  const searchId = useId();
  const category = catalog.find((item) => item.id === categoryId) ?? catalog[0];
  const term = query.trim().toLowerCase();
  const items = term
    ? category.items.filter((item) => `${item.name} ${item.description}`.toLowerCase().includes(term))
    : category.items;

  return (
    <section id="catalog" className="px-5 py-24 md:px-10" aria-labelledby="catalog-title">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          index="05"
          label="Catalog"
          id="catalog-title"
          lines={["Find the exact sign"]}
          accent="for your NYC space."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          <aside className="min-w-0 lg:col-span-3">
            <div className="lg:sticky lg:top-32">
              <label htmlFor={searchId} className="sr-only">
                Search {category.name}
              </label>
              <div className="relative">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-mute" aria-hidden="true">
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3.5-3.5" />
                </svg>
                <input
                  id={searchId}
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder={`Search ${category.name.toLowerCase()}`}
                  className="w-full rounded-full border border-black/10 bg-white/80 py-3 pr-4 pl-11 text-sm outline-none transition focus:border-electric focus:bg-white"
                />
              </div>

              <div className="no-scrollbar -mx-5 mt-4 flex gap-2 overflow-x-auto px-5 lg:mx-0 lg:flex-col lg:gap-1 lg:overflow-visible lg:px-0" role="tablist" aria-label="Sign categories">
                {catalog.map((item, index) => {
                  const on = item.id === category.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      role="tab"
                      aria-selected={on}
                      onClick={() => {
                        setCategoryId(item.id);
                        setQuery("");
                      }}
                      className={`group relative flex shrink-0 items-center gap-3 rounded-full px-4 py-2.5 text-left text-sm font-medium whitespace-nowrap transition-colors duration-300 lg:rounded-2xl lg:py-3 ${
                        on ? "text-white" : "bg-white/60 text-ink hover:text-electric lg:bg-transparent lg:hover:bg-white/70"
                      }`}
                    >
                      {on ? (
                        <motion.span
                          layoutId="catalog-tab"
                          className="absolute inset-0 rounded-full bg-navy lg:rounded-2xl"
                          transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 36 }}
                        />
                      ) : null}
                      <span className={`relative font-mono text-[10px] ${on ? "text-bright" : "text-mute"}`}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="relative flex-1">{item.name}</span>
                      <span className={`relative rounded-full px-2 py-0.5 font-mono text-[10px] ${on ? "bg-electric text-white" : "bg-ice text-electric"}`}>
                        {item.items.length}
                      </span>
                    </button>
                  );
                })}
              </div>

              <a
                href="#contact"
                className="mt-6 hidden items-center justify-between rounded-2xl border border-electric/20 bg-ice p-4 text-sm transition-colors hover:border-electric lg:flex"
              >
                <span>
                  <span className="block font-semibold">Not sure what you need?</span>
                  <span className="text-mute">Request a free quote</span>
                </span>
                <span className="grid h-9 w-9 place-items-center rounded-full bg-electric text-white" aria-hidden="true">
                  →
                </span>
              </a>
            </div>
          </aside>

          <div className="min-w-0 lg:col-span-9" role="tabpanel" aria-label={category.name}>
            <div className="mb-5 flex items-baseline justify-between gap-4">
              <p className="text-2xl font-semibold tracking-[-0.04em] uppercase">{category.name}</p>
              <p className="font-mono text-[11px] tracking-[0.16em] text-mute uppercase">
                {items.length} {items.length === 1 ? "subcategory" : "subcategories"}
              </p>
            </div>

            <motion.ul layout={!reduce} className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              <AnimatePresence mode="popLayout" initial={false}>
                {items.map((item, index) => (
                  <motion.li
                    key={`${category.id}-${item.name}`}
                    layout={!reduce}
                    initial={reduce ? false : { opacity: 0, y: 24, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={reduce ? undefined : { opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.45, delay: reduce ? 0 : Math.min(index, 8) * 0.03, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <a
                      href="#contact"
                      className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-black/[0.06] bg-white shadow-[0_24px_50px_-40px_rgba(16,42,92,0.6)] transition-all duration-500 hover:-translate-y-1 hover:border-electric/30 hover:shadow-[0_34px_70px_-40px_rgba(47,107,255,0.65)]"
                    >
                      <span className="relative block aspect-[4/3] overflow-hidden bg-mist">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="(min-width: 1280px) 22vw, (min-width: 640px) 45vw, 92vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                        />
                        <span className="absolute top-3 left-3 rounded-full bg-white/90 px-2.5 py-1 font-mono text-[10px] tracking-[0.12em] text-ink backdrop-blur">
                          {item.designs} designs
                        </span>
                      </span>
                      <span className="flex flex-1 flex-col p-5">
                        <span className="flex items-start justify-between gap-3">
                          <span className="text-lg leading-tight font-semibold tracking-[-0.03em]">{item.name}</span>
                          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-ice text-electric transition-all duration-300 group-hover:bg-electric group-hover:text-white" aria-hidden="true">
                            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                              <path d="M3.5 10.5 10.5 3.5M10.5 3.5H5.2M10.5 3.5V8.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                            </svg>
                          </span>
                        </span>
                        <span className="mt-2 line-clamp-3 text-sm leading-relaxed text-mute">{item.description}</span>
                        {item.types > 0 ? (
                          <span className="mt-auto pt-4 font-mono text-[10px] tracking-[0.16em] text-electric uppercase">
                            {item.types} types & mini-categories
                          </span>
                        ) : null}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </AnimatePresence>
            </motion.ul>

            {items.length === 0 ? (
              <p className="rounded-[24px] border border-dashed border-black/15 p-10 text-center text-mute">
                No {category.name.toLowerCase()} match “{query}”.
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
