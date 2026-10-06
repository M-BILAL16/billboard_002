import { campaignItems } from "@/data/billboardItems";
import { BillboardScene } from "./BillboardScene";

export function CampaignShowcase() {
  return (
    <section id="campaigns" aria-labelledby="campaigns-title">
      <div className="mx-auto max-w-[1400px] px-5 pb-4 pt-8 md:px-10 md:pt-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-electric">Campaigns</p>
        <h2
          id="campaigns-title"
          className="mt-4 max-w-[16ch] text-[clamp(2.4rem,5vw,5rem)] font-medium leading-[0.92] tracking-[-0.048em]"
        >
          Stories written at the size of a city.
        </h2>
        <p className="mt-5 max-w-md text-lg text-mute">
          Choose another film. The same gesture — shrink, select, expand — carries the next chapter.
        </p>
      </div>
      <BillboardScene sceneId="campaigns" items={campaignItems} scrollFactor={2.15} />
    </section>
  );
}
