import { heroItems } from "@/data/billboardItems";
import { BillboardScene } from "./BillboardScene";

export function InteractiveHero() {
  return (
    <BillboardScene
      sceneId="hero"
      anchorId="top"
      items={heroItems}
      priority
      eyebrow="Out-of-home, reimagined"
      title="Make your message"
      emphasis="impossible to miss."
      scrollFactor={2.55}
    />
  );
}
