import { Reveal } from "./Reveal";

export function CTASection() {
  return (
    <section id="contact" className="px-5 pb-8 md:px-10" aria-labelledby="cta-title">
      <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[32px] bg-navy px-6 py-20 text-white md:px-16 md:py-28">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(circle at 12% 20%, rgba(47,107,255,0.55), transparent 36%), radial-gradient(circle at 90% 80%, rgba(120,168,255,0.35), transparent 32%)",
          }}
        />
        <Reveal className="relative max-w-4xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#c5d8ff]">Start a placement</p>
          <h2 id="cta-title" className="mt-5 text-[clamp(2.6rem,6.4vw,6.2rem)] font-medium leading-[0.9] tracking-[-0.05em]">
            Put your brand where people can&apos;t look away.
          </h2>
          <p className="mt-6 max-w-md text-lg text-white/75">
            Tell us the audience. We&apos;ll find the corners, the hours, and the screens that make it physical.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="mailto:plan@vantage.studio"
              className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-navy transition hover:-translate-y-0.5 hover:bg-ice"
            >
              Plan your campaign
            </a>
            <a
              href="#network"
              className="inline-flex items-center rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              View the network
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
