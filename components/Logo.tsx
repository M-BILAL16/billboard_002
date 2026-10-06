export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${inverted ? "text-white" : "text-ink"}`}>
      <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
        <rect x="1" y="3" width="20" height="16" rx="4" fill={inverted ? "#ffffff" : "#2f6bff"} />
        <rect x="4.2" y="6.2" width="13.6" height="7.6" rx="1.4" fill={inverted ? "#2f6bff" : "#ffffff"} />
      </svg>
      <span className="text-[13px] font-medium tracking-[0.2em]">VANTAGE</span>
    </span>
  );
}
