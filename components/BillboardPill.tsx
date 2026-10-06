"use client";

import type { BillboardItem, PillAccent } from "@/data/billboardItems";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const shells: Record<PillAccent, string> = {
  white: "border-black/8 bg-white/92 text-ink shadow-[0_18px_40px_-26px_rgba(16,42,92,0.65)]",
  ice: "border-[#c5d7fb] bg-[#e7f0ff] text-ink shadow-[0_18px_40px_-26px_rgba(47,107,255,0.45)]",
  sky: "border-[#b9d2ff] bg-[#d5e6ff] text-[#16325c] shadow-[0_18px_40px_-26px_rgba(47,107,255,0.4)]",
  blue: "border-[#2a62f0] bg-[#2f6bff] text-white shadow-[0_18px_40px_-22px_rgba(47,107,255,0.7)]",
  navy: "border-[#10233f] bg-[#10233f] text-white shadow-[0_18px_40px_-22px_rgba(7,21,37,0.55)]",
};

const dots: Record<PillAccent, string> = {
  white: "bg-electric",
  ice: "bg-electric",
  sky: "bg-[#1d4ed8]",
  blue: "bg-white",
  navy: "bg-[#8eb4ff]",
};

const metas: Record<PillAccent, string> = {
  white: "text-electric/80",
  ice: "text-[#2456d6]",
  sky: "text-[#1d4ed8]",
  blue: "text-white/75",
  navy: "text-[#b9d0ff]",
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
  const [live, setLive] = useState(false);

  useEffect(() => {
    setLive(true);
  }, []);

  // Motion props change tabindex. Keep the first paint identical to the server.
  const interactive = live && !reduce;
  const className = [
    "group flex max-w-full items-center gap-2.5 rounded-full border py-1.5 pl-2 pr-2.5 text-left backdrop-blur-md transition-[box-shadow,border-color,background-color] duration-300",
    "hover:border-electric/50 hover:shadow-[0_22px_50px_-24px_rgba(47,107,255,0.55)]",
    shells[item.accent],
    active ? "ring-2 ring-electric/70 ring-offset-2 ring-offset-paper" : "",
  ].join(" ");

  const inner = (
    <>
      <span className={`h-2 w-2 shrink-0 rounded-full ${dots[item.accent]}`} aria-hidden="true" />
      <Image
        src={item.image}
        alt=""
        width={64}
        height={64}
        className="h-7 w-7 shrink-0 rounded-full object-cover"
      />
      <span className="min-w-0">
        <span className="block truncate text-[13px] font-medium leading-none tracking-[-0.02em] md:text-sm">
          {item.title}
        </span>
        <span className={`mt-1 block font-mono text-[9px] uppercase tracking-[0.16em] ${metas[item.accent]}`}>
          {item.category}
        </span>
      </span>
      <span
        className={`ml-1 grid h-6 w-6 shrink-0 place-items-center rounded-full opacity-0 transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 ${arrows[item.accent]}`}
        aria-hidden="true"
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M3 9L9 3M9 3H4.2M9 3V7.8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      </span>
    </>
  );

  return (
    <motion.button
      type="button"
      className={className}
      aria-pressed={active}
      aria-label={`Play story: ${item.title}`}
      onClick={() => onSelect(item)}
      whileHover={interactive ? { scale: 1.045 } : undefined}
      whileTap={interactive ? { scale: 0.985 } : undefined}
      transition={{ type: "spring", stiffness: 460, damping: 28, mass: 0.6 }}
    >
      {inner}
    </motion.button>
  );
}
