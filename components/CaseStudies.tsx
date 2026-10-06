import { caseStudies } from "@/data/site";
import Image from "next/image";
import { Reveal } from "./Reveal";

export function CaseStudies() {
  const [lead, ...rest] = caseStudies;

  return (
    <section className="px-5 pb-28 md:px-10 md:pb-40" aria-labelledby="cases-title">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-electric">Case studies</p>
          <h2 id="cases-title" className="mt-4 max-w-[14ch] text-[clamp(2.2rem,4.6vw,4.6rem)] font-medium leading-[0.94] tracking-[-0.045em]">
            Proof, at street scale.
          </h2>
        </Reveal>
        <Reveal className="mt-12">
          <article className="grid overflow-hidden rounded-[28px] border border-line bg-white md:grid-cols-2">
            <div className="relative min-h-[280px] md:min-h-[460px]">
              <Image src={lead.image} alt="" fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
            </div>
            <div className="flex flex-col justify-between p-7 md:p-12">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-electric">
                  {lead.client} · {lead.place}
                </p>
                <h3 className="mt-4 text-[clamp(1.8rem,3vw,3rem)] font-medium leading-[1.02] tracking-[-0.04em]">
                  {lead.title}
                </h3>
                <p className="mt-4 max-w-md text-mute">{lead.detail}</p>
              </div>
              <p className="mt-10 text-sm uppercase tracking-[0.16em] text-ink">{lead.result}</p>
            </div>
          </article>
        </Reveal>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {rest.map((study) => (
            <Reveal key={study.id}>
              <article className="overflow-hidden rounded-[28px] border border-line bg-white">
                <div className="relative h-64">
                  <Image src={study.image} alt="" fill className="object-cover" sizes="(min-width: 768px) 40vw, 100vw" />
                </div>
                <div className="p-6 md:p-8">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-electric">
                    {study.client} · {study.place}
                  </p>
                  <h3 className="mt-3 text-2xl font-medium tracking-[-0.04em]">{study.title}</h3>
                  <p className="mt-3 text-sm text-mute">{study.detail}</p>
                  <p className="mt-6 text-xs uppercase tracking-[0.16em]">{study.result}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
