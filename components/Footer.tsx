import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="px-5 py-12 md:px-10 md:py-16">
      <div className="mx-auto grid max-w-[1400px] gap-10 border-t border-line pt-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-mute">
            Out-of-home media for brands that intend to be remembered.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-mute">Studio</p>
          <p className="mt-3 text-sm leading-relaxed">
            New York
            <br />
            Los Angeles
            <br />
            Chicago
          </p>
        </div>
        <div className="md:col-span-2">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-mute">Visit</p>
          <p className="mt-3 text-sm leading-relaxed">
            12 Mercer Street
            <br />
            New York, NY
          </p>
        </div>
        <div className="md:col-span-2">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-mute">Contact</p>
          <a href="mailto:plan@vantage.studio" className="mt-3 block text-sm hover:text-electric">
            plan@vantage.studio
          </a>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-[1400px] flex-wrap items-center justify-between gap-3 text-xs text-mute">
        <p>© 2026 Vantage Outdoor.</p>
        <p>Digital visibility, built for the physical world.</p>
      </div>
    </footer>
  );
}
