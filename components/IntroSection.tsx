import { Reveal } from "./Reveal";

export function IntroSection() {
  return (
    <section className="px-5 py-28 md:px-10 md:py-40" aria-labelledby="intro-title">
      <div className="mx-auto grid max-w-[1400px] items-end gap-12 md:grid-cols-12 md:gap-8">
        <Reveal className="md:col-span-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-electric">The point</p>
          <h2
            id="intro-title"
            className="mt-5 max-w-[11ch] text-[clamp(2.7rem,6.4vw,6.5rem)] font-medium leading-[0.9] tracking-[-0.05em]"
          >
            Advertising should be <span className="text-electric">impossible</span> to ignore.
          </h2>
        </Reveal>
        <Reveal className="md:col-span-4 md:pb-3" delay={0.08}>
          <p className="text-lg leading-relaxed text-mute md:text-xl">
            People don&apos;t live inside a feed. They move through cities. Vantage puts brands in that path — large, timed, and impossible to scroll past.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-ink">
            Turn empty space into attention.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
