import { heroHeadline, heroItems, heroOpeningId } from "@/data/billboardItems";
import { BillboardScene } from "./BillboardScene";

export function InteractiveHero() {
  return (
    <BillboardScene
      sceneId="hero"
      anchorId="top"
      items={heroItems}
      openingId={heroOpeningId}
      headline={heroHeadline}
      priority
      eyebrow="Out-of-home, reimagined"
      title="Make your message"
      emphasis="impossible to miss."
      scrollFactor={1.35}
    />
  );
}
