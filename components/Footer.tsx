import { contact, footerLinks, phone } from "@/data/site";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="on-dark relative overflow-hidden bg-navy px-5 pt-20 pb-10 text-white md:px-10 md:pt-28">
      <div className="blueprint absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1400px]">
        <div className="flex flex-wrap items-end justify-between gap-8 border-b border-white/10 pb-14">
          <p className="section-title max-w-[14ch] text-white">
            We build <span className="accent-text">NYC landmarks.</span>
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-electric px-6 py-3.5 text-[12px] font-semibold tracking-[0.14em] uppercase transition-all duration-300 hover:bg-white hover:text-navy active:scale-95"
            >
              Get sign quote
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <path d="M3.5 10.5 10.5 3.5M10.5 3.5H5.2M10.5 3.5V8.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </a>
            <a href={phone.href} className="inline-flex items-center rounded-full border border-white/20 px-6 py-3.5 text-[12px] font-semibold tracking-[0.14em] uppercase transition hover:border-white">
              {phone.display}
            </a>
          </div>
        </div>

        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="inline-block rounded-2xl bg-white px-3 py-2">
              <Image src="/brand/signsny-logo.webp" alt="Signs NYC" width={1080} height={608} className="h-14 w-auto" />
            </span>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/60">
              Plant: 10,000 Sq Ft NYC Production Facility. Licensed & Insured in All 5 Boroughs • 24/7 Emergency Service.
            </p>
          </div>
          <FooterList title="Navigation" items={footerLinks.navigation} className="lg:col-span-2" />
          <FooterList title="Fabrication services" items={footerLinks.services} className="lg:col-span-3" />
          <div className="lg:col-span-3">
            <p className="font-mono text-[10px] tracking-[0.2em] text-bright uppercase">Get in touch</p>
            <a href={`mailto:${contact.infoEmail}`} className="mt-4 block text-sm uppercase transition-colors hover:text-bright">
              {contact.infoEmail}
            </a>
            <a href={contact.officePhone.href} className="mt-2 block text-sm transition-colors hover:text-bright">
              {contact.officePhone.display}
            </a>
            <p className="mt-8 font-mono text-[10px] tracking-[0.2em] text-bright uppercase">Follow our work</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {footerLinks.social.map((item) => (
                <li key={item}>
                  <a href="#top" className="inline-block rounded-full border border-white/15 px-3 py-1.5 text-xs text-white/75 transition hover:border-white hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50">
          <p>© 2026 Signs NYC. Your local sign maker & print shop. All rights reserved.</p>
          <ul className="flex gap-5 uppercase">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <li key={item}>
                <a href="#top" className="transition-colors hover:text-white">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

type Item = { label: string; href: string };

function FooterList({ title, items, className = "" }: { title: string; items: Item[]; className?: string }) {
  return (
    <div className={className}>
      <p className="font-mono text-[10px] tracking-[0.2em] text-bright uppercase">{title}</p>
      <ul className="mt-4 space-y-2.5 text-sm text-white/75">
        {items.map((item) => (
          <li key={item.label}>
            <a href={item.href} className="transition-colors hover:text-white">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
