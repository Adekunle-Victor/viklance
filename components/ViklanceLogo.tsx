export default function ViklanceLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 82"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Viklance Orbit"
      role="img"
    >
      <text
        x="210"
        y="48"
        textAnchor="middle"
        fill="currentColor"
        fontSize="46"
        fontFamily="var(--font-logo), sans-serif"
        fontWeight="700"
        letterSpacing="3"
      >
        VIKLANCE ORBIT
      </text>

      {/* left rule */}
      <line x1="10" y1="63" x2="108" y2="63" stroke="currentColor" strokeWidth="0.8" />

      {/* tagline */}
      <text
        x="210"
        y="68"
        textAnchor="middle"
        fill="currentColor"
        fontSize="9.5"
        fontFamily="inherit"
        fontWeight="300"
        letterSpacing="4.5"
      >
        LAUNCH. GROW. LEAD.
      </text>

      {/* right rule */}
      <line x1="312" y1="63" x2="410" y2="63" stroke="currentColor" strokeWidth="0.8" />
    </svg>
  );
}
