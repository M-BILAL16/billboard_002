"use client";

import type { BillboardItem, PillAccent } from "@/data/billboardItems";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useSyncExternalStore } from "react";

const noop = () => () => {};

const shells: Record<PillAccent, string> = {
  white: "border-black/[0.07] bg-white/90 text-ink shadow-[0_20px_44px_-28px_rgba(16,42,92,0.7)]",
  ice: "border-[#c9daf9] bg-[#eaf2ff]/95 text-ink shadow-[0_20px_44px_-28px_rgba(47,107,255,0.5)]",
  sky: "border-[#b6cff9] bg-[#d6e6ff]/95 text-[#13305a] shadow-[0_20px_44px_-28px_rgba(47,107,255,0.45)]",
  blue: "border-[#2a62f0] bg-[#2f6bff] text-white shadow-[0_22px_46px_-24px_rgba(47,107,255,0.75)]",
  navy: "border-[#132a4a] bg-[#0d2140] text-white shadow-[0_22px_46px_-24px_rgba(7,21,37,0.6)]",
};

const numbers: Record<PillAccent, string> = {
  white: "text-electric",
  ice: "text-[#2456d6]",
  sky: "text-[#1d4ed8]",
  blue: "text-white/70",
  navy: "text-[#8eb4ff]",
};

const lines: Record<PillAccent, string> = {
  white: "text-mute",
  ice: "text-[#4a6487]",
  sky: "text-[#35588c]",
  blue: "text-white/75",
  navy: "text-white/60",
};

const arrows: Record<PillAccent, string> = {
  white: "bg-ice text-electric",
  ice: "bg-white text-electric",
  sky: "bg-white text-[#1d4ed8]",
  blue: "bg-white/15 text-white",
  navy: "bg-white/10 text-white",
};

type Props = {
  item: BillboardItem;
  active: boolean;
  onSelect: (item: BillboardItem) => void;
};

export function BillboardPill({ item, active, onSelect }: Props) {
  const reduce = useReducedMotion();
  // Motion props change tabindex. Keep the first paint identical to the server.
  const live = useSyncExternalStore(noop, () => true, () => false);
  const interactive = live && !reduce;

  return (
    <motion.button
      type="button"
      className={[
        "group flex max-w-full items-center gap-3 rounded-full border p-1.5 pr-2 text-left backdrop-blur-md transition-[box-shadow,border-color,background-color] duration-300",
        "hover:border-electric/50 hover:shadow-[0_26px_56px_-26px_rgba(47,107,255,0.6)]",
        shells[item.accent],
        active ? "ring-2 ring-electric/70 ring-offset-2 ring-offset-paper" : "",
      ].join(" ")}
      aria-pressed={active}
      aria-label={`Play film: ${item.title}. ${item.description}`}
      onClick={() => onSelect(item)}
      whileHover={interactive ? { scale: 1.045 } : undefined}
      whileTap={interactive ? { scale: 0.985 } : undefined}
      transition={{ type: "spring", stiffness: 460, damping: 28, mass: 0.6 }}
    >
      <span className="relative h-8 w-12 shrink-0 overflow-hidden rounded-full bg-navy md:h-10 md:w-16">
        {item.preview ? (
          <video
            data-src={item.preview}
            poster={item.image}
            muted
            loop
            playsInline
            preload="none"
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <Image
            src={item.image}
            alt=""
            fill
            sizes="64px"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        )}
        <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/25" aria-hidden="true" />
        <span
          className="absolute inset-0 grid place-items-center bg-[#071525]/35 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
          aria-hidden="true"
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="white">
            <path d="M2.5 1.6v6.8L8.4 5z" />
          </svg>
        </span>
      </span>
      <span className="min-w-0 pr-1">
        <span className="flex items-baseline gap-2">
          <span className={`font-mono text-[10px] tracking-[0.12em] ${numbers[item.accent]}`}>{item.number}</span>
          <span className="truncate text-[13px] font-medium leading-tight tracking-[-0.02em] md:text-[14px]">
            {item.title}
          </span>
        </span>
        <span
          className={`mt-0.5 hidden truncate text-[12px] leading-snug tracking-[-0.01em] min-[1400px]:block ${lines[item.accent]}`}
        >
          {item.description}
        </span>
      </span>
      <span
        className={`hidden h-7 w-7 shrink-0 place-items-center rounded-full opacity-0 transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 md:grid ${arrows[item.accent]}`}
        aria-hidden="true"
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M3 9L9 3M9 3H4.2M9 3V7.8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      </span>
    </motion.button>
  );
}
