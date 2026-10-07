"use client";

import { navLinks, phone } from "@/data/site";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const easeOut = [0.16, 1, 0.3, 1] as const;

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#top");
  const reduce = useReducedMotion();

  useGSAP(() => {
    const bar = document.querySelector<HTMLElement>("[data-progress]");
    const progress = bar
      ? ScrollTrigger.create({
          start: 0,
          end: "max",
          onUpdate: (self) => {
            gsap.set(bar, { scaleX: self.progress });
          },
        })
      : null;

    let current = "#top";
    let down = false;
    const spy = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: () => {
        const nextDown = window.scrollY > 40;
        if (nextDown !== down) {
          down = nextDown;
          setScrolled(nextDown);
        }
        const mark = window.scrollY + 140;
        let next = "#top";
        for (const link of navLinks) {
          const section = document.getElementById(link.href.slice(1));
          if (section && section.offsetTop <= mark) next = link.href;
        }
        if (next !== current) {
          current = next;
          setActive(next);
        }
      },
    });

    return () => {
      progress?.kill();
      spy.kill();
    };
  });

  return (
    <>
      <div data-progress className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left scale-x-0 bg-electric" aria-hidden="true" />

      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 hidden justify-center px-5 pt-4 xl:flex">
        <motion.nav
          aria-label="Primary"
          initial={reduce ? false : { y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: easeOut }}
          className={`pointer-events-auto flex w-full max-w-[1280px] items-center justify-between rounded-full border transition-all duration-300 ${
            scrolled
              ? "border-black/10 bg-white/85 px-3 py-2 shadow-sm shadow-black/5 backdrop-blur-xl"
              : "border-black/8 bg-white/60 px-4 py-2.5 shadow-sm backdrop-blur-md"
          }`}
        >
          <a href="#top" aria-label="Signs NYC, back to start" className="group shrink-0 pl-1">
            <Image
              src="/brand/signsny-logo.webp"
              alt="Signs NYC"
              width={1080}
              height={608}
              priority
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </a>

          <div className="flex items-center gap-1 rounded-full border border-black/5 bg-black/[0.03] p-1">
            {navLinks.map((link) => {
              const on = active === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={on ? "true" : undefined}
                  className={`rounded-full px-3.5 py-1.5 text-[13px] font-medium whitespace-nowrap transition-all duration-200 ${
                    on
                      ? "bg-navy text-white shadow-sm"
                      : "text-ink hover:bg-white/80 hover:text-electric"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-2 pr-1">
            <a
              href={phone.href}
              className="inline-flex items-center gap-2 rounded-full px-2 py-1.5 text-[13px] font-medium text-ink transition-colors duration-200 hover:text-electric"
            >
              <span className="grid h-7 w-7 place-items-center rounded-full bg-ice text-electric" aria-hidden="true">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path
                    d="M2.4 1.8h2L5.5 4.2 4.3 5.4a7.2 7.2 0 0 0 3.3 3.3l1.2-1.2 2.4 1.1v2a1 1 0 0 1-1.1 1A9.2 9.2 0 0 1 1.4 2.9a1 1 0 0 1 1-1.1Z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              {phone.display}
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-1.5 rounded-full bg-navy px-4 py-2.5 text-[12px] font-semibold tracking-[0.12em] text-white uppercase shadow-sm transition-all duration-300 hover:bg-electric active:scale-95"
            >
              Get sign quote
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                <path d="M3.5 10.5 10.5 3.5M10.5 3.5H5.2M10.5 3.5V8.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </a>
          </div>
        </motion.nav>
      </header>

      <header className="fixed inset-x-0 top-0 z-50 xl:hidden">
        <div
          className={`border-b transition-colors duration-300 ${
            scrolled || open
              ? "border-black/8 bg-white/88 shadow-[0_16px_40px_-28px_rgba(16,42,92,0.55)] backdrop-blur-xl"
              : "border-transparent bg-white/55 backdrop-blur-md"
          }`}
        >
          <div className="mx-auto flex h-[4.25rem] max-w-[1440px] items-center gap-3 px-4">
            <a href="#top" aria-label="Signs NYC, back to start" className="shrink-0" onClick={() => setOpen(false)}>
              <Image
                src="/brand/signsny-logo.webp"
                alt="Signs NYC"
                width={1080}
                height={608}
                priority
                className="h-11 w-auto"
              />
            </a>
            <div className="ml-auto flex items-center gap-2">
              <a
                href="#contact"
                className="inline-flex items-center rounded-full bg-electric px-3 py-2 text-[11px] font-semibold tracking-[0.12em] text-white uppercase"
              >
                Get sign quote
              </a>
              <button
                type="button"
                className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white/80"
                aria-expanded={open}
                aria-controls="mobile-nav"
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((value) => !value)}
              >
                <span className="flex w-4 flex-col gap-1.5" aria-hidden="true">
                  <span className={`h-px bg-ink transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
                  <span className={`h-px bg-ink transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
                </span>
              </button>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {open ? (
            <motion.nav
              id="mobile-nav"
              aria-label="Mobile"
              className="border-b border-black/8 bg-white/95 px-4 py-4 shadow-[0_24px_40px_-32px_rgba(16,42,92,0.6)] backdrop-blur-xl"
              initial={reduce ? false : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <ul className="mx-auto grid max-w-[1440px] gap-1 sm:grid-cols-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="block rounded-2xl px-3 py-3 text-lg tracking-[-0.03em] transition hover:bg-ice hover:text-electric"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mx-auto mt-3 flex max-w-[1440px] flex-col gap-2 border-t border-black/6 pt-3 sm:flex-row">
                <a
                  href={phone.href}
                  className="inline-flex flex-1 items-center justify-center rounded-full border border-black/10 px-4 py-3 text-sm font-medium"
                >
                  {phone.display}
                </a>
                <a
                  href="#contact"
                  className="inline-flex flex-1 items-center justify-center rounded-full bg-electric px-4 py-3 text-[12px] font-semibold tracking-[0.14em] text-white uppercase"
                  onClick={() => setOpen(false)}
                >
                  Get sign quote
                </a>
              </div>
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </header>
    </>
  );
}
