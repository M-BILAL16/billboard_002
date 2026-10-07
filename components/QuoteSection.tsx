"use client";

import { contact, phone, quoteOptions, quoteReceives } from "@/data/site";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "./SectionHeading";

type Status = "idle" | "sending" | "sent";

const field =
  "w-full rounded-2xl border border-black/10 bg-mist px-4 py-3.5 text-[15px] outline-none transition placeholder:text-mute/70 focus:border-electric focus:bg-white";

export function QuoteSection() {
  const [borough, setBorough] = useState(quoteOptions.boroughs[0]);
  const [signType, setSignType] = useState(quoteOptions.signTypes[0]);
  const [timeline, setTimeline] = useState(quoteOptions.timelines[1]);
  const [name, setName] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const reduce = useReducedMotion();

  return (
    <section id="contact" className="px-5 py-24 md:px-10" aria-labelledby="quote-title">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          index="08"
          label="Get sign quote"
          id="quote-title"
          lines={["Where is your"]}
          accent="next NYC project?"
          copy="Configure your custom sign requirements and receive an instant fabrication scope and DOB code assessment."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <div className="rounded-[32px] border border-black/8 bg-white p-6 shadow-[0_40px_90px_-60px_rgba(16,42,92,0.7)] md:p-10 lg:col-span-8">
            <AnimatePresence mode="wait" initial={false}>
              {status === "sent" ? (
                <motion.div
                  key="sent"
                  className="flex min-h-[560px] flex-col items-center justify-center text-center"
                  initial={reduce ? false : { opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduce ? undefined : { opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  role="status"
                >
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-electric text-white shadow-[0_20px_40px_-16px_rgba(47,107,255,0.9)]">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m5 12 5 5 9-10" />
                    </svg>
                  </span>
                  <p className="eyebrow mt-8">Specification received</p>
                  <p className="mt-4 max-w-[22ch] text-[clamp(1.8rem,3vw,2.6rem)] leading-[1.02] font-semibold tracking-[-0.04em] uppercase">
                    Thanks{name ? `, ${name.split(" ")[0]}` : ""}. Your scope is on its way.
                  </p>
                  <p className="mt-4 max-w-md text-mute">
                    A project manager is reviewing your <span className="text-ink">{signType}</span> request in{" "}
                    <span className="text-ink">{borough}</span>. Expect a reply within 2 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-8 rounded-full border border-black/10 px-6 py-3 text-[12px] font-semibold tracking-[0.14em] uppercase transition hover:border-electric hover:text-electric"
                  >
                    Start another quote
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={reduce ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={reduce ? undefined : { opacity: 0 }}
                  onSubmit={(event) => {
                    event.preventDefault();
                    setStatus("sending");
                    window.setTimeout(() => setStatus("sent"), 900);
                  }}
                >
                  <ChoiceGroup label="Project borough" options={quoteOptions.boroughs} value={borough} onChange={setBorough} />
                  <ChoiceGroup label="Signage type needed" options={quoteOptions.signTypes} value={signType} onChange={setSignType} />

                  <fieldset className="mt-8">
                    <legend className="font-mono text-[11px] tracking-[0.18em] text-mute uppercase">Contact & specifications</legend>
                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                      <Field label="Your Name *">
                        <input required name="name" autoComplete="name" placeholder="e.g. Alex Rivera" className={field} value={name} onChange={(event) => setName(event.target.value)} />
                      </Field>
                      <Field label="Company / Brand Name *">
                        <input required name="company" autoComplete="organization" placeholder="e.g. Lumina Hospitality Group" className={field} />
                      </Field>
                      <Field label="Email Address *">
                        <input required type="email" name="email" autoComplete="email" placeholder="alex@company.com" className={field} />
                      </Field>
                      <Field label="Phone Number *">
                        <input required type="tel" name="phone" autoComplete="tel" placeholder="(212) 555-0199" className={field} />
                      </Field>
                    </div>
                  </fieldset>

                  <ChoiceGroup label="Required timeline" options={quoteOptions.timelines} value={timeline} onChange={setTimeline} />

                  <Field label="Project Details, Dimensions, or NYC Address (Optional)" className="mt-8">
                    <textarea
                      name="details"
                      rows={3}
                      placeholder="e.g. 5th Avenue storefront, need illuminated channel letters, blade sign, and full DOB permit management..."
                      className={`${field} resize-none`}
                    />
                  </Field>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group mt-8 flex w-full items-center justify-center gap-3 rounded-full bg-navy px-6 py-4.5 text-[12px] font-semibold tracking-[0.14em] text-white uppercase transition-all duration-300 hover:bg-electric active:scale-[0.99] disabled:opacity-70"
                  >
                    {status === "sending" ? "Transmitting scope..." : "Submit specification for instant scope & quote"}
                    <svg width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
                      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <p className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-mute">
                    <Check /> No Obligation Free Quote <span aria-hidden="true">•</span> <Check /> 2-Hour Estimate Turnaround
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          <aside className="flex flex-col gap-6 lg:col-span-4">
            <div className="on-dark relative overflow-hidden rounded-[32px] bg-navy p-7 text-white md:p-8">
              <div className="blueprint absolute inset-0 opacity-70" aria-hidden="true" />
              <div className="relative">
                <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-5">
                  <p className="font-mono text-[11px] tracking-[0.2em] text-bright uppercase">What you receive</p>
                  <span className="rounded-full bg-electric/25 px-3 py-1 font-mono text-[10px] text-bright">Reply within 2 hours</span>
                </div>
                <ul className="mt-6 space-y-6">
                  {quoteReceives.map((item, index) => (
                    <li key={item.title} className="flex gap-4">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/15 font-mono text-[11px] text-bright">
                        0{index + 1}
                      </span>
                      <span>
                        <span className="block font-semibold">{item.title}</span>
                        <span className="mt-1 block text-sm leading-relaxed text-white/60">{item.copy}</span>
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 rounded-2xl bg-white/[0.06] p-5">
                  <p className="font-mono text-[10px] tracking-[0.18em] text-white/50 uppercase">Signs NYC headquarters & plant</p>
                  <a href={phone.href} className="mt-3 block text-lg font-semibold transition-colors hover:text-bright">
                    {phone.display} <span className="text-sm font-normal text-white/50">(Direct Estimating Line)</span>
                  </a>
                  <a href={`mailto:${contact.salesEmail}`} className="mt-1 block text-white/80 transition-colors hover:text-bright">
                    {contact.salesEmail}
                  </a>
                  <p className="mt-3 text-sm text-white/50">{contact.plant}</p>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-[32px] border border-electric/20 bg-ice p-7 md:p-8">
              <p className="font-semibold">What happens next</p>
              <p className="mt-3 text-sm leading-relaxed text-mute">
                Send the form and a project manager reviews your borough, sign type, and specs. You get a written quote with fabrication notes and the permit steps needed to install in New York City.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function ChoiceGroup({ label, options, value, onChange }: { label: string; options: string[]; value: string; onChange: (value: string) => void }) {
  return (
    <fieldset className="mt-8 first:mt-0">
      <legend className="font-mono text-[11px] tracking-[0.18em] text-mute uppercase">{label}</legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((option) => {
          const on = option === value;
          return (
            <label
              key={option}
              className={`cursor-pointer rounded-full border px-4 py-2.5 text-sm transition-all duration-200 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-electric ${
                on ? "border-electric bg-electric text-white shadow-[0_12px_24px_-14px_rgba(47,107,255,0.9)]" : "border-black/10 bg-mist hover:border-electric/40 hover:text-electric"
              }`}
            >
              <input type="radio" name={label} value={option} checked={on} onChange={() => onChange(option)} className="sr-only" />
              {option}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

function Field({ label, children, className = "" }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-xs font-medium text-ink">{label}</span>
      {children}
    </label>
  );
}

function Check() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#2f6bff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m5 12 5 5 9-10" />
    </svg>
  );
}
