"use client";

import type { BillboardItem } from "@/data/billboardItems";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { useRef, useState } from "react";
import { ScatteredPills } from "./ScatteredPills";
import { VideoStage } from "./VideoStage";

type Mode = "scroll" | "expanding" | "focus" | "collapsing";

type Runtime = {
  mode: Mode;
  focusProgress: number;
  shown: 0 | 1;
  introDone: boolean;
  booted: boolean;
};

type Props = {
  sceneId: string;
  anchorId?: string;
  items: BillboardItem[];
  priority?: boolean;
  eyebrow?: string;
  title?: string;
  emphasis?: string;
  /** Extra scroll distance, in viewport heights, while the scene is pinned. */
  scrollFactor?: number;
};

const clamp01 = gsap.utils.clamp(0, 1);
const drift = gsap.parseEase("power2.inOut");

export function BillboardScene({
  sceneId,
  anchorId,
  items,
  priority = false,
  eyebrow,
  title,
  emphasis,
  scrollFactor = 2.45,
}: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const videoARef = useRef<HTMLVideoElement>(null);
  const videoBRef = useRef<HTMLVideoElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const dockRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLParagraphElement>(null);
  const pillsLayerRef = useRef<HTMLDivElement>(null);
  const pillMap = useRef(new Map<string, HTMLDivElement>());
  const runtime = useRef<Runtime>({
    mode: "scroll",
    focusProgress: 0,
    shown: 0,
    introDone: false,
    booted: false,
  });
  const selectRef = useRef<(item: BillboardItem) => void>(() => {});
  const nudgeRef = useRef<(el: HTMLElement, active: boolean) => void>(() => {});

  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const [engaged, setEngaged] = useState(false);
  const active = items.find((item) => item.id === activeId) ?? items[0];

  useGSAP(
    () => {
      const frame = frameRef.current;
      const stage = stageRef.current;
      const pin = pinRef.current;
      const root = rootRef.current;
      const opening = items[0];
      if (!frame || !stage || !pin || !root || !opening || !active) return;

      const triggerId = `billboard-${sceneId}`;
      const mm = gsap.matchMedia();

      const pills = () => Array.from(pillMap.current.values());

      const ensureMuted = (video: HTMLVideoElement | null) => {
        if (video) video.muted = true;
      };

      const finalScale = () => {
        const base = frame.offsetWidth || 1;
        const mobile = window.innerWidth < 768;
        const tile = mobile
          ? Math.min(96, window.innerWidth * 0.26)
          : Math.min(132, Math.max(96, window.innerWidth * 0.072));
        return tile / base;
      };

      const visual = (progress: number) => {
        const endScale = finalScale();
        const shrinkT = clamp01((progress - 0.08) / 0.5);
        const eased = drift(shrinkT);
        const scale = gsap.utils.interpolate(1, endScale, eased);
        const endRadius = Math.min(420, 22 / Math.max(endScale, 0.04));
        const radius = gsap.utils.interpolate(28, endRadius, eased);
        const appear = clamp01((progress - 0.52) / 0.16);
        const copyAlpha = clamp01(1 - progress / 0.18);
        const hintAlpha = clamp01(1 - progress / 0.14);
        const mobile = window.innerWidth < 768;
        const y = mobile ? gsap.utils.interpolate(0, -window.innerHeight * 0.18, eased) : 0;
        return { scale, radius, appear, copyAlpha, hintAlpha, y };
      };

      const paintPills = (appear: number, resetShift: boolean) => {
        pills().forEach((node, index) => {
          const local = clamp01((appear * (1 + index * 0.08) - index * 0.07) / 0.62);
          if (resetShift) gsap.set(node, { autoAlpha: local, x: 0, y: 0 });
          else gsap.set(node, { autoAlpha: local });
        });
      };

      const applyScroll = (progress: number) => {
        const state = visual(progress);
        gsap.set(frame, { scale: state.scale, borderRadius: state.radius, autoAlpha: 1 });
        gsap.set(stage, { y: state.y });
        if (copyRef.current) gsap.set(copyRef.current, { autoAlpha: state.copyAlpha });
        if (hintRef.current) gsap.set(hintRef.current, { autoAlpha: state.hintAlpha });
        if (glowRef.current) gsap.set(glowRef.current, { autoAlpha: gsap.utils.interpolate(1, 0.4, drift(clamp01((progress - 0.08) / 0.5))) });
        if (dockRef.current && runtime.current.mode === "scroll") gsap.set(dockRef.current, { autoAlpha: 0 });
        paintPills(state.appear, true);
      };

      const swapTo = (item: BillboardItem) => {
        const first = videoARef.current;
        const second = videoBRef.current;
        if (!first || !second) return;
        ensureMuted(first);
        ensureMuted(second);
        const current = runtime.current.shown === 0 ? first : second;
        const next = runtime.current.shown === 0 ? second : first;
        if (current.dataset.item === item.id && current.getAttribute("src")) {
          current.play().catch(() => undefined);
          return;
        }

        const reveal = () => {
          ensureMuted(next);
          next.play().catch(() => undefined);
          gsap.to(next, { autoAlpha: 1, duration: 0.5, ease: "power2.out", overwrite: "auto" });
          gsap.to(current, {
            autoAlpha: 0,
            duration: 0.5,
            ease: "power2.out",
            overwrite: "auto",
            onComplete: () => current.pause(),
          });
          runtime.current.shown = runtime.current.shown === 0 ? 1 : 0;
        };

        next.poster = item.poster;
        next.dataset.item = item.id;
        if (next.getAttribute("src") !== item.video) {
          next.src = item.video;
          next.load();
        }
        if (next.readyState >= 3) reveal();
        else next.addEventListener("canplay", reveal, { once: true });
      };

      ensureMuted(videoARef.current);
      ensureMuted(videoBRef.current);
      if (videoARef.current) gsap.set(videoARef.current, { autoAlpha: 1 });
      if (videoBRef.current) gsap.set(videoBRef.current, { autoAlpha: 0 });

      const mountMotion = (mobile: boolean) => {
        runtime.current.mode = "scroll";
        gsap.set(stage, { xPercent: -50, yPercent: -50, zIndex: 20 });
        gsap.set(frame, { transformOrigin: "50% 50%", force3D: true });
        pills().forEach((node) => {
          gsap.set(node, {
            autoAlpha: 0,
            x: 0,
            y: 0,
            xPercent: mobile ? 0 : -50,
            yPercent: mobile ? 0 : -50,
          });
        });
        if (dockRef.current) gsap.set(dockRef.current, { autoAlpha: 0, y: 12 });

        let intro: gsap.core.Tween | null = null;
        let copyIntro: gsap.core.Tween | null = null;
        let hintIntro: gsap.core.Tween | null = null;
        if (!runtime.current.booted) {
          runtime.current.booted = true;
          intro = gsap.fromTo(
            frame,
            { scale: 0.965, autoAlpha: 0 },
            { scale: 1, autoAlpha: 1, duration: 1.15, ease: "power3.out", delay: priority ? 0.12 : 0 },
          );
          if (copyRef.current && title) {
            copyIntro = gsap.fromTo(
              copyRef.current,
              { autoAlpha: 0, y: 16 },
              { autoAlpha: 1, y: 0, duration: 0.9, delay: 0.32, ease: "power2.out" },
            );
          }
          if (hintRef.current) {
            hintIntro = gsap.to(hintRef.current, { autoAlpha: 1, duration: 0.6, delay: 0.7, ease: "power2.out" });
          }
        } else {
          runtime.current.introDone = true;
          gsap.set(frame, { autoAlpha: 1, scale: 1, borderRadius: 28 });
        }

        const st = ScrollTrigger.create({
          id: triggerId,
          trigger: pin,
          start: "top top",
          end: () => `+=${Math.round(window.innerHeight * (mobile ? 1.8 : scrollFactor))}`,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          refreshPriority: priority ? 2 : 1,
          onLeave: () => {
            const mode = runtime.current.mode;
            if (mode === "focus" || mode === "expanding" || mode === "collapsing") {
              runtime.current.mode = "scroll";
              gsap.to(frame, {
                scale: finalScale(),
                duration: 0.55,
                ease: "power3.inOut",
                overwrite: "auto",
              });
            }
          },
          onUpdate: (self) => {
            const rt = runtime.current;
            if (!rt.introDone) {
              if (self.progress < 0.004) return;
              intro?.kill();
              copyIntro?.kill();
              hintIntro?.kill();
              gsap.set(frame, { autoAlpha: 1 });
              rt.introDone = true;
            }

            const progress = self.progress;
            if (rt.mode === "expanding") return;

            if (rt.mode === "focus" || rt.mode === "collapsing") {
              const delta = Math.abs(progress - rt.focusProgress);
              const t = clamp01((delta - 0.012) / 0.22);
              if (t <= 0) {
                rt.mode = "focus";
                gsap.set(frame, { scale: 1, borderRadius: 28 });
                gsap.set(stage, { y: 0, zIndex: 40 });
                if (dockRef.current) gsap.set(dockRef.current, { autoAlpha: 1 });
                if (copyRef.current) gsap.set(copyRef.current, { autoAlpha: 0 });
                pills().forEach((node) => gsap.set(node, { autoAlpha: 0 }));
                return;
              }

              rt.mode = "collapsing";
              const eased = drift(t);
              const state = visual(progress);
              gsap.set(frame, {
                scale: gsap.utils.interpolate(1, state.scale, eased),
                borderRadius: gsap.utils.interpolate(28, state.radius, eased),
              });
              gsap.set(stage, { y: gsap.utils.interpolate(0, state.y, eased) });
              if (dockRef.current) gsap.set(dockRef.current, { autoAlpha: 1 - eased });
              paintPills(state.appear * eased, true);
              if (t < 1) return;
              rt.mode = "scroll";
              gsap.set(stage, { zIndex: 20 });
              applyScroll(progress);
              return;
            }

            applyScroll(progress);
          },
        });

        selectRef.current = (item) => {
          const progress = st.progress;
          const open = runtime.current.mode === "focus" || runtime.current.mode === "expanding";
          if (!open && progress < 0.5) return;

          setActiveId(item.id);
          setEngaged(true);
          swapTo(item);
          if (open) return;

          runtime.current.mode = "expanding";
          const selected = pillMap.current.get(item.id) ?? null;
          const others = pills().filter((node) => node !== selected);
          const distance = mobile ? 42 : 96;

          const timeline = gsap.timeline({
            defaults: { overwrite: "auto" },
            onComplete: () => {
              runtime.current.mode = "focus";
              runtime.current.focusProgress = st.progress;
            },
          });

          timeline.set(stage, { zIndex: 40 }, 0);
          others.forEach((node) => {
            const rect = node.getBoundingClientRect();
            const dx = rect.left + rect.width / 2 - window.innerWidth / 2;
            const dy = rect.top + rect.height / 2 - window.innerHeight / 2;
            const length = Math.hypot(dx, dy) || 1;
            timeline.to(
              node,
              {
                x: (dx / length) * distance,
                y: (dy / length) * distance * 0.62,
                autoAlpha: 0,
                duration: 0.7,
                ease: "power3.inOut",
              },
              0,
            );
          });

          if (selected) {
            const rect = selected.getBoundingClientRect();
            const dx = window.innerWidth / 2 - (rect.left + rect.width / 2);
            const dy = window.innerHeight / 2 - (rect.top + rect.height / 2);
            timeline.to(
              selected,
              { x: dx * 0.32, y: dy * 0.32, autoAlpha: 0, duration: 0.5, ease: "power3.in" },
              0,
            );
          }

          timeline.to(frame, { scale: 1, borderRadius: 28, duration: 0.98, ease: "power3.inOut" }, 0.05);
          timeline.to(stage, { y: 0, duration: 0.98, ease: "power3.inOut" }, 0.05);
          if (copyRef.current) timeline.to(copyRef.current, { autoAlpha: 0, duration: 0.3 }, 0);
          if (hintRef.current) timeline.to(hintRef.current, { autoAlpha: 0, duration: 0.25 }, 0);
          if (dockRef.current) {
            timeline.fromTo(
              dockRef.current,
              { autoAlpha: 0, y: 18 },
              { autoAlpha: 1, y: 0, duration: 0.55, ease: "power2.out" },
              0.42,
            );
          }
        };

        nudgeRef.current = (element, on) => {
          if (mobile || runtime.current.mode !== "scroll") return;
          if (!window.matchMedia("(pointer: fine)").matches) return;
          const origin = element.getBoundingClientRect();
          pills().forEach((node) => {
            if (node === element) return;
            if (!on) {
              gsap.to(node, { x: 0, y: 0, duration: 0.55, ease: "power3.out", overwrite: "auto" });
              return;
            }
            const rect = node.getBoundingClientRect();
            const dx = rect.left + rect.width / 2 - (origin.left + origin.width / 2);
            const dy = rect.top + rect.height / 2 - (origin.top + origin.height / 2);
            const dist = Math.hypot(dx, dy) || 1;
            const push = Math.max(0, 20 - dist / 30);
            gsap.to(node, {
              x: (dx / dist) * push,
              y: (dy / dist) * push,
              duration: 0.55,
              ease: "power3.out",
              overwrite: "auto",
            });
          });
        };

        let lazy: IntersectionObserver | undefined;
        if (!priority && videoARef.current && !videoARef.current.getAttribute("src")) {
          lazy = new IntersectionObserver(
            (entries) => {
              if (!entries.some((entry) => entry.isIntersecting) || !videoARef.current) return;
              videoARef.current.src = opening.video;
              videoARef.current.dataset.item = opening.id;
              videoARef.current.muted = true;
              videoARef.current.play().catch(() => undefined);
              lazy?.disconnect();
            },
            { rootMargin: "600px" },
          );
          lazy.observe(root);
        } else if (priority && videoARef.current) {
          videoARef.current.play().catch(() => undefined);
        }

        const visibility = new IntersectionObserver(
          (entries) => {
            const seen = entries.some((entry) => entry.isIntersecting);
            [videoARef.current, videoBRef.current].forEach((video) => {
              if (!video?.getAttribute("src")) return;
              const opacity = Number(gsap.getProperty(video, "opacity"));
              if (!seen || opacity < 0.05) video.pause();
              else video.play().catch(() => undefined);
            });
          },
          { threshold: 0.12 },
        );
        visibility.observe(root);

        return () => {
          lazy?.disconnect();
          visibility.disconnect();
          st.kill();
        };
      };

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(frame, { autoAlpha: 1, scale: 1, borderRadius: 28, clearProps: "transform" });
        gsap.set(stage, { clearProps: "transform,x,y,xPercent,yPercent" });
        pills().forEach((node) => gsap.set(node, { autoAlpha: 1, x: 0, y: 0, clearProps: "transform" }));
        if (copyRef.current) gsap.set(copyRef.current, { autoAlpha: 1, y: 0 });
        if (dockRef.current) gsap.set(dockRef.current, { autoAlpha: 1, y: 0 });
        if (hintRef.current) gsap.set(hintRef.current, { autoAlpha: 0 });
        if (videoARef.current && !videoARef.current.getAttribute("src")) {
          videoARef.current.src = opening.video;
          videoARef.current.dataset.item = opening.id;
        }
        videoARef.current?.play().catch(() => undefined);
        selectRef.current = (item) => {
          setActiveId(item.id);
          setEngaged(true);
          swapTo(item);
        };
        nudgeRef.current = () => undefined;
      });

      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => mountMotion(false));
      mm.add("(max-width: 767px) and (prefers-reduced-motion: no-preference)", () => mountMotion(true));

      return () => mm.revert();
    },
    { scope: rootRef, dependencies: [sceneId, priority, scrollFactor] },
  );

  if (!active) return null;

  return (
    <div
      ref={rootRef}
      id={anchorId}
      role="region"
      aria-label={title ? "Opening film" : "Campaign films"}
      className="relative"
    >
      <div ref={pinRef} className="scene-pin relative h-[100svh] overflow-hidden">
        <div className="scene-grid pointer-events-none absolute inset-0" aria-hidden="true" />
        <div
          ref={glowRef}
          className="pointer-events-none absolute left-1/2 top-1/2 h-[70vh] w-[min(80vw,900px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(47,107,255,0.16),transparent_68%)]"
          aria-hidden="true"
        />
        <VideoStage
          items={items}
          active={active}
          priority={priority}
          eyebrow={eyebrow}
          title={title}
          emphasis={emphasis}
          stageRef={stageRef}
          frameRef={frameRef}
          videoARef={videoARef}
          videoBRef={videoBRef}
          copyRef={copyRef}
          dockRef={dockRef}
          onSelect={(item) => selectRef.current(item)}
        />
        <ScatteredPills
          items={items}
          activeId={activeId}
          engaged={engaged}
          layerRef={pillsLayerRef}
          onSelect={(item) => selectRef.current(item)}
          onNudge={(element, on) => nudgeRef.current(element, on)}
          register={(id, node) => {
            if (node) pillMap.current.set(id, node);
            else pillMap.current.delete(id);
          }}
        />
        <p
          ref={hintRef}
          className="scene-hint pointer-events-none absolute bottom-6 left-1/2 z-20 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.22em] text-mute"
        >
          Scroll
        </p>
        <p className="sr-only">
          Scroll to shrink the film into the field of stories. Choose a story to expand it. Scroll again to continue.
        </p>
      </div>
    </div>
  );
}
