"use client";

import { useEffect, useRef } from "react";

const stats = [
  { value: "50+",  label: "Projects shipped"  },
  { value: "30+",  label: "Happy clients"     },
  { value: "5yrs", label: "In the game"       },
  { value: "99%",  label: "Satisfaction rate" },
];

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    const COUNT = 55;
    const squares = Array.from({ length: COUNT }, () => ({
      x:    Math.random() * canvas.width,
      y:    Math.random() * canvas.height,
      size: Math.random() * 5 + 2,
      vx:   (Math.random() - 0.5) * 0.35,
      vy:   (Math.random() - 0.5) * 0.35,
      opacity: Math.random() * 0.25 + 0.05,
    }));

    let raf: number;
    const draw = () => {
      raf = requestAnimationFrame(draw);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const s of squares) {
        s.x += s.vx;
        s.y += s.vy;
        if (s.x < -10) s.x = canvas.width + 10;
        if (s.x > canvas.width + 10) s.x = -10;
        if (s.y < -10) s.y = canvas.height + 10;
        if (s.y > canvas.height + 10) s.y = -10;

        ctx.save();
        ctx.globalAlpha = s.opacity;
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 0.8;
        ctx.strokeRect(s.x, s.y, s.size, s.size);
        ctx.restore();
      }
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-neutral-900 overflow-hidden">
      <ParticleCanvas />

      {/* subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent,rgba(0,0,0,0.45))] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <p className="text-[11px] font-semibold tracking-widest uppercase text-neutral-400 mb-16">
          About us
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* text */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight mb-8">
              Built by engineers
              <br />
              <span className="text-neutral-500">who give a damn.</span>
            </h2>
            <p className="text-base text-neutral-300 leading-relaxed mb-4">
              Viklance Orbit is a close-knit team of engineers and non-tech teams who are obsessed with
              over craft. We partner with startups and scale-ups to turn ambitious
              ideas into reliable, beautifully executed software.
            </p>
            <p className="text-base text-neutral-300 leading-relaxed">
              We write clean code, ship on time, and stay involved long after
              launch because the best software is never truly finished.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-10 text-sm font-semibold text-white group"
            >
              <span className="border-b border-neutral-600 pb-px group-hover:border-white transition-colors">
                Work with us
              </span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-0.5 transition-transform">
                <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="border border-neutral-700/60 bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8"
              >
                <p className="text-4xl sm:text-5xl font-black text-white mb-2 tracking-tight">
                  {s.value}
                </p>
                <p className="text-[11px] font-semibold tracking-widest uppercase text-neutral-400">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
