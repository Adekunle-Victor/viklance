export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-neutral-100 flex items-center overflow-hidden"
    >
      {/* subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(#d4d4d4 1px, transparent 1px), linear-gradient(90deg, #d4d4d4 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* radial fade that wipes grid from center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_40%_50%,#f5f5f5,transparent)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-32 w-full">
        <p className="inline-flex items-center gap-3 text-[11px] font-black tracking-[0.2em] uppercase text-neutral-700 mb-8">
          <span className="w-8 font-bold h-px bg-neutral-400" />
          Software Development Agency
        </p>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-neutral-900 leading-[1.04] tracking-tight mb-6 max-w-4xl">
          We build
          <br />
          <span className="text-neutral-500">software that</span>
          <br />
          scales.
        </h1>

        <p className="text-base sm:text-lg text-neutral-700 max-w-md leading-relaxed mb-10">
          From zero to production, we design, engineer, and scale digital products
          that drive real business outcomes.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="#work"
            className="inline-flex items-center justify-center gap-2 bg-neutral-900 text-white text-sm font-bold px-7 py-3.5 rounded-full hover:bg-neutral-700 transition-colors"
          >
            See our work
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center border border-neutral-300 text-neutral-700 text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-neutral-200 hover:border-neutral-400 transition-all"
          >
            Start a project
          </a>
        </div>

        {/* tech badges */}
        <div className="hidden lg:flex items-center gap-3 mt-20">
          {["Next.js", "React Native", "Node.js", "AWS", "OpenAI", "TypeScript"].map((t) => (
            <span
              key={t}
              className="text-[11px] font-semibold text-neutral-500 border border-neutral-300 bg-white/60 px-3 py-1.5 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* bottom fade into white */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
