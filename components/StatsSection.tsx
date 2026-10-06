import { stats } from "@/data/site";
import { Reveal } from "./Reveal";

export function StatsSection() {
  return (
    <section className="px-5 pb-24 md:px-10 md:pb-36" aria-label="Impact">
      <div className="mx-auto max-w-[1400px] overflow-hidden rounded-[28px] border border-black/8 bg-white/80">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.05} className="h-full">
              <article className={`h-full px-6 py-10 md:px-8 md:py-14 ${index % 2 === 0 ? "bg-white" : "bg-ice/60"} md:bg-transparent ${index !== 0 ? "md:border-l md:border-line" : ""} ${index > 1 ? "border-t border-line md:border-t-0" : "border-t-0"}`}>
                <p className="text-[clamp(2.6rem,5vw,4.6rem)] font-medium leading-none tracking-[-0.05em] text-ink">
                  {stat.value}
                </p>
                <p className="mt-4 max-w-[12ch] text-sm uppercase tracking-[0.14em] text-mute">{stat.label}</p>
                <span className="mt-6 block h-px w-10 bg-electric" aria-hidden="true" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
