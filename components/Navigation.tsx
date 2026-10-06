"use client";

import { navLinks } from "@/data/site";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Logo } from "./Logo";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();

  useGSAP(() => {
    const bar = document.querySelector<HTMLElement>("[data-progress]");
    if (!bar) return;

    const progress = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        gsap.set(bar, { scaleX: self.progress });
      },
    });

    const fade = ScrollTrigger.create({
      start: 24,
      onEnter: () => setScrolled(true),
      onLeaveBack: () => setScrolled(false),
    });

    return () => {
      progress.kill();
      fade.kill();
    };
  });

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        data-progress
        className="h-[2px] origin-left scale-x-0 bg-electric"
        aria-hidden="true"
      />
      <div
        className={`flex items-center justify-between px-5 py-4 transition-colors duration-300 md:px-8 ${
          scrolled || open ? "bg-white/75 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <a href="#top" aria-label="Vantage, back to start" onClick={() => setOpen(false)}>
          <Logo />
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] tracking-[-0.01em] text-ink/80 transition-colors hover:text-electric"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-full bg-electric px-4 py-2 text-[13px] font-medium text-white transition hover:bg-[#1f5af0] md:inline-flex"
        >
          Plan a campaign
        </a>
        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white/70 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close" : "Menu"}</span>
          <span className="flex w-4 flex-col gap-1.5" aria-hidden="true">
            <span className={`h-px bg-ink transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`h-px bg-ink transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile"
            className="border-t border-black/5 bg-white/90 px-5 py-4 backdrop-blur-xl md:hidden"
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block py-3 text-lg tracking-[-0.03em]"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
