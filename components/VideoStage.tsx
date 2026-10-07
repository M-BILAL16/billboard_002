"use client";

import type { BillboardItem } from "@/data/billboardItems";

type Props = {
  items: BillboardItem[];
  opening: BillboardItem;
  active: BillboardItem;
  priority: boolean;
  eyebrow?: string;
  title?: string;
  emphasis?: string;
  stageRef: React.RefObject<HTMLDivElement | null>;
  frameRef: React.RefObject<HTMLDivElement | null>;
  videoARef: React.RefObject<HTMLVideoElement | null>;
  videoBRef: React.RefObject<HTMLVideoElement | null>;
  copyRef: React.RefObject<HTMLDivElement | null>;
  dockRef: React.RefObject<HTMLDivElement | null>;
  onSelect: (item: BillboardItem) => void;
};

export function VideoStage({
  items,
  opening,
  active,
  priority,
  eyebrow,
  title,
  emphasis,
  stageRef,
  frameRef,
  videoARef,
  videoBRef,
  copyRef,
  dockRef,
  onSelect,
}: Props) {
  return (
    <div ref={stageRef} className="video-stage">
      <div ref={frameRef} className="video-frame">
        <video
          ref={videoARef}
          poster={opening.poster}
          src={priority ? opening.video : undefined}
          data-item={priority ? opening.id : undefined}
          muted
          autoPlay={priority}
          playsInline
          loop
          preload={priority ? "auto" : "none"}
          aria-hidden="true"
        />
        <video
          ref={videoBRef}
          muted
          playsInline
          loop
          preload="none"
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/25" />
        {title ? (
          <div ref={copyRef} className="scene-copy pointer-events-none absolute left-0 top-0 z-10 max-w-[16rem] p-5 sm:max-w-sm sm:p-7 md:max-w-md md:p-9">
            {eyebrow ? (
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/75">{eyebrow}</p>
            ) : null}
            <h1 className="mt-3 text-[clamp(1.7rem,3.1vw,3.15rem)] font-medium leading-[0.92] tracking-[-0.045em] text-white">
              {title}{" "}
              {emphasis ? <span className="text-[#d6e6ff]">{emphasis}</span> : null}
            </h1>
          </div>
        ) : (
          <div ref={copyRef} className="scene-copy" />
        )}
        <div ref={dockRef} className="video-dock absolute inset-x-0 bottom-0 z-10 p-2 sm:p-5">
          <div className="rounded-xl border border-white/15 bg-[#071525]/75 px-3 py-2.5 text-white shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)] backdrop-blur-xl sm:rounded-2xl sm:p-5">
            <div className="flex flex-col gap-2 sm:gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-xl" aria-live="polite">
                <p className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-[#c5d8ff] sm:block">
                  {active.number} · {active.category}
                </p>
                <p className="text-sm font-medium tracking-[-0.02em] sm:mt-1 sm:text-2xl sm:tracking-[-0.03em]">
                  <span className="mr-2 font-mono text-[10px] tracking-[0.12em] text-[#c5d8ff] sm:hidden">{active.number}</span>
                  {active.title}
                </p>
                <p className="mt-1 hidden max-w-md text-sm leading-relaxed text-white/75 sm:block">{active.description}</p>
              </div>
              <div className="flex gap-1.5 overflow-x-auto pb-0.5 sm:gap-2" role="group" aria-label="Switch story">
                {items.map((item) => {
                  const selected = item.id === active.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => onSelect(item)}
                      aria-pressed={selected}
                      aria-label={`Switch to ${item.title}`}
                      className={`shrink-0 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] transition sm:px-3 sm:py-1.5 ${
                        selected
                          ? "border-white bg-white text-navy"
                          : "border-white/25 bg-white/10 text-white hover:bg-white/20"
                      }`}
                    >
                      {item.number}
                    </button>
                  );
                })}
              </div>
            </div>
            <p className="mt-3 hidden font-mono text-[10px] uppercase tracking-[0.16em] text-white/45 sm:block">
              Scroll to continue
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
