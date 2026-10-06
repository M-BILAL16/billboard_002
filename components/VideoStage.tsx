"use client";

import type { BillboardItem } from "@/data/billboardItems";

type Props = {
  items: BillboardItem[];
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
  const opening = items[0];

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
        <div ref={dockRef} className="video-dock absolute inset-x-0 bottom-0 z-10 p-3 sm:p-5">
          <div className="rounded-2xl border border-white/15 bg-[#071525]/75 p-4 text-white shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)] backdrop-blur-xl sm:p-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-xl" aria-live="polite">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#c5d8ff]">
                  {active.number} · {active.category}
                </p>
                <p className="mt-1 text-lg font-medium tracking-[-0.03em] sm:text-2xl">{active.title}</p>
                <p className="mt-1 max-w-md text-sm leading-relaxed text-white/75">{active.description}</p>
              </div>
              <div className="flex gap-2 overflow-x-auto pb-0.5" role="group" aria-label="Switch story">
                {items.map((item) => {
                  const selected = item.id === active.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => onSelect(item)}
                      aria-pressed={selected}
                      aria-label={`Switch to ${item.title}`}
                      className={`shrink-0 rounded-full border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] transition ${
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
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-white/45">Scroll to continue</p>
          </div>
        </div>
      </div>
    </div>
  );
}
