import { services } from "@/data/site";
import { Reveal } from "./Reveal";

export function WhatWeDo() {
  return (
    <section id="work" className="px-5 pb-24 md:px-10 md:pb-36" aria-labelledby="work-title">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="flex items-end justify-between gap-6 border-b border-line pb-8">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-electric">What we do</p>
              <h2 id="work-title" className="mt-4 max-w-[14ch] text-[clamp(2.2rem,4.5vw,4.4rem)] font-medium leading-[0.94] tracking-[-0.045em]">
                The physical world, programmed.
              </h2>
            </div>
            <p className="hidden max-w-xs text-sm leading-relaxed text-mute md:block">
              Five practices. One network. Built for brands that want more than a scroll.
            </p>
          </div>
        </Reveal>
        <div>
          {services.map((service, index) => (
            <Reveal key={service.number} delay={index * 0.03}>
              <article className="group grid grid-cols-12 items-baseline gap-x-4 border-b border-line py-7 transition-colors duration-300 hover:bg-white/70 md:py-9">
                <span className="col-span-2 font-mono text-xs text-electric md:col-span-1">{service.number}</span>
                <h3 className="col-span-10 text-[1.65rem] font-medium tracking-[-0.04em] transition-transform duration-500 group-hover:translate-x-1 md:col-span-5 md:text-[2.15rem]">
                  {service.title}
                </h3>
                <p className="col-span-12 mt-3 text-base leading-relaxed text-mute md:col-span-6 md:mt-0 md:text-lg">
                  {service.copy}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
