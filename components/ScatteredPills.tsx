"use client";

import type { BillboardItem } from "@/data/billboardItems";
import { BillboardPill } from "./BillboardPill";

type Props = {
  items: BillboardItem[];
  activeId: string;
  engaged: boolean;
  layerRef: React.RefObject<HTMLDivElement | null>;
  onSelect: (item: BillboardItem) => void;
  onNudge: (el: HTMLElement, active: boolean) => void;
  register: (id: string, node: HTMLDivElement | null) => void;
};

export function ScatteredPills({
  items,
  activeId,
  engaged,
  layerRef,
  onSelect,
  onNudge,
  register,
}: Props) {
  return (
    <div
      ref={layerRef}
      className="pills-layer pointer-events-none absolute inset-0"
      role="group"
      aria-label="Choose a film"
    >
      {items.map((item) => (
        <div
          key={item.id}
          ref={(node) => register(item.id, node)}
          className="pill-anchor pointer-events-auto"
          style={{ ["--pill-x" as string]: `${item.x}%`, ["--pill-y" as string]: `${item.y}%` }}
          onPointerEnter={(event) => onNudge(event.currentTarget, true)}
          onPointerLeave={(event) => onNudge(event.currentTarget, false)}
        >
          <BillboardPill item={item} active={engaged && item.id === activeId} onSelect={onSelect} />
        </div>
      ))}
    </div>
  );
}
