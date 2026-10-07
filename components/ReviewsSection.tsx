"use client";

import { reviews } from "@/data/signsCatalog";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowButton } from "./PortfolioSection";
import { SectionHeading } from "./SectionHeading";

const initials = (name: string) =>
  name
    .replace(/^Dr\.\s*/, "")
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

export function ReviewsSection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const list = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const review = reviews[index];

  useEffect(() => {
    if (paused || reduce) return;
    const timer = window.setTimeout(() => setIndex((value) => (value + 1) % reviews.length), 7000);
    return () => window.clearTimeout(timer);
  }, [index, paused, reduce]);

  useEffect(() => {
    const row = list.current?.children[index] as HTMLElement | undefined;
    if (row && list.current) {
      list.current.scrollTo({ top: row.offsetTop - list.current.clientHeight / 2 + row.clientHeight / 2, behavior: "smooth" });
    }
  }, [index]);

  const go = (next: number) => setIndex((next + reviews.length) % reviews.length);

  return (
    <section className="overflow-hidden py-24 md:py-36" aria-labelledby="reviews-title">
      <div className="mx-auto max-w-[1480px] px-5 md:px-10">
        <SectionHeading
          index="07"
          label="Client reviews"
          id="reviews-title"
          lines={["The proof is"]}
          accent="in the words."
          copy="Real feedback from business owners, general contractors, landmark architects, and operations directors who trusted Signs NYC."
        />
      </div>

      <div className="marquee relative mt-12 border-y border-line bg-white/50 py-4" aria-hidden="true">
        <div className="marquee-track flex w-max gap-10">
          {[...reviews, ...reviews].map((item, itemIndex) => (
            <span key={`${item.id}-${itemIndex}`} className="flex items-center gap-10 font-mono text-[11px] tracking-[0.2em] whitespace-nowrap text-mute uppercase">
              {item.company}
              <span className="h-1 w-1 rounded-full bg-electric" />
            </span>
          ))}
        </div>
      </div>

      <div
        className="mx-auto mt-12 grid max-w-[1480px] gap-6 px-5 md:px-10 lg:grid-cols-12"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <div className="relative overflow-hidden rounded-[32px] bg-navy p-7 text-white md:p-12 lg:col-span-8">
          <div className="blueprint absolute inset-0 opacity-60" aria-hidden="true" />
          <svg className="absolute top-8 right-8 text-electric/40" width="96" height="76" viewBox="0 0 48 38" fill="currentColor" aria-hidden="true">
            <path d="M0 38V22C0 9.5 6.3 2.2 19 0l2 5.4C13.8 7.3 10.6 11.4 10.4 18H19v20H0Zm29 0V22C29 9.5 35.3 2.2 48 0l-1 5.4C42.8 7.3 39.6 11.4 39.4 18H48v20H29Z" />
          </svg>
          <AnimatePresence mode="wait" initial={false}>
            <motion.figure
              key={review.id}
              className="relative flex min-h-[420px] flex-col"
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="flex gap-0.5 text-bright" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }, (_, star) => (
                    <svg key={star} width="15" height="15" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="m10 1.5 2.6 5.4 5.9.8-4.3 4.1 1 5.8L10 14.8l-5.2 2.8 1-5.8L1.5 7.7l5.9-.8L10 1.5Z" />
                    </svg>
                  ))}
                </span>
                <span className="font-mono text-[11px] tracking-[0.16em] text-white/70">5.0 RATING</span>
                <span className="rounded-full border border-white/15 px-3 py-1 font-mono text-[10px] tracking-[0.14em] text-white/70 uppercase">{review.borough}</span>
              </div>
              <p className="mt-8 max-w-[24ch] text-[clamp(1.6rem,2.8vw,2.4rem)] leading-[1.05] font-semibold tracking-[-0.04em]">
                “{review.highlight}”
              </p>
              <blockquote className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">{review.quote}</blockquote>
              <div className="mt-6 flex flex-wrap gap-2 font-mono text-[10px] tracking-[0.14em] uppercase">
                <span className="rounded-full bg-white/10 px-3 py-1.5 text-white/80">{review.specs}</span>
                <span className="rounded-full bg-electric/25 px-3 py-1.5 text-bright">{review.result}</span>
              </div>
              <figcaption className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
                <span className="flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-electric to-bright font-semibold">{initials(review.name)}</span>
                  <span>
                    <span className="block font-semibold">{review.name}</span>
                    <span className="block text-sm text-white/60">
                      {review.role} • <span className="text-bright">{review.company}</span>
                    </span>
                  </span>
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 font-mono text-[10px] tracking-[0.16em] text-white/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                  VERIFIED NYC CLIENT
                </span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
          {!paused && !reduce ? (
            <span key={index} className="absolute bottom-0 left-0 h-[3px] w-full origin-left animate-[review-progress_7s_linear_forwards] bg-electric" aria-hidden="true" />
          ) : null}
        </div>

        <div className="flex flex-col rounded-[32px] border border-black/8 bg-white/80 p-4 lg:col-span-4">
          <div className="flex items-center justify-between px-3 pt-2 pb-4">
            <p className="font-mono text-sm tracking-[0.1em] text-mute">
              <span className="text-lg text-ink">{String(index + 1).padStart(2, "0")}</span> / {String(reviews.length).padStart(2, "0")} reviews
            </p>
            <div className="flex gap-2">
              <ArrowButton label="Previous testimonial" onClick={() => go(index - 1)} flip />
              <ArrowButton label="Next testimonial" onClick={() => go(index + 1)} />
            </div>
          </div>
          <ol ref={list} className="no-scrollbar relative max-h-[420px] space-y-1 overflow-y-auto" aria-label="All reviews">
            {reviews.map((item, itemIndex) => {
              const on = itemIndex === index;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    aria-current={on ? "true" : undefined}
                    onClick={() => setIndex(itemIndex)}
                    className={`flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left transition-colors duration-300 ${on ? "bg-ice" : "hover:bg-mist"}`}
                  >
                    <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full text-xs font-semibold ${on ? "bg-electric text-white" : "bg-mist text-ink"}`}>
                      {initials(item.name)}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-semibold">{item.name}</span>
                      <span className="block truncate text-xs text-mute">{item.category}</span>
                    </span>
                    <span className="shrink-0 font-mono text-[10px] text-mute">{item.year}</span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
