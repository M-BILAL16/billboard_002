import { Reveal } from "./Reveal";

type Props = {
  index: string;
  label: string;
  lines: string[];
  accent: string;
  id: string;
  copy?: string;
  aside?: React.ReactNode;
  dark?: boolean;
};

export function SectionHeading({ index, label, lines, accent, id, copy, aside, dark = false }: Props) {
  return (
    <Reveal>
      <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-6">
        <div className="max-w-[18ch] md:max-w-none">
          <p className={`eyebrow flex items-center gap-3 ${dark ? "text-bright" : ""}`}>
            <span>{index}</span>
            <span className={`h-px w-8 ${dark ? "bg-bright/50" : "bg-electric/40"}`} aria-hidden="true" />
            <span>{label}</span>
          </p>
          <h2 id={id} className={`section-title mt-5 ${dark ? "text-white" : ""}`}>
            {lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
            <span className="accent-text block">{accent}</span>
          </h2>
        </div>
        {copy || aside ? (
          <div className="max-w-md">
            {copy ? (
              <p className={`text-base leading-relaxed md:text-lg ${dark ? "text-white/65" : "text-mute"}`}>{copy}</p>
            ) : null}
            {aside}
          </div>
        ) : null}
      </div>
    </Reveal>
  );
}
