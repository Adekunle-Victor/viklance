"use client";

import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import ViklanceLogo from "@/components/ViklanceLogo";

const links = [
  { label: "Services", href: "#services" },
  { label: "About",    href: "/about"    },
  { label: "Work",     href: "#work"     },
  { label: "Referral", href: "/refer"    },
  { label: "Contact",  href: "/contact"  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const go = (href: string) => {
    setOpen(false);
    if (href.startsWith("/")) {
      window.location.href = href;
      return;
    }
    // anchor link — if not on home page, navigate there first
    if (window.location.pathname !== "/") {
      window.location.href = `/${href}`;
      return;
    }
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, open ? 320 : 0);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled || open
            ? "bg-white/90 backdrop-blur-md border-b border-neutral-200 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 h-16 flex items-center justify-between">
          <button onClick={() => go("/")}>
            <ViklanceLogo className="h-8 w-auto text-neutral-900" />
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <button
                key={l.label}
                onClick={() => go(l.href)}
                className={`text-[13px] font-medium transition-colors hover:opacity-50 ${
                  scrolled ? "text-neutral-700" : "text-neutral-700"
                }`}
              >
                {l.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => go("/contact")}
            className={`hidden md:inline-flex items-center text-[13px] font-semibold px-5 py-2 rounded-full transition-all ${
              scrolled
                ? "bg-neutral-900 text-white hover:bg-neutral-700"
                : "bg-neutral-900 text-white hover:bg-neutral-700"
            }`}
          >
            Let&apos;s talk
          </button>

          {/* hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex flex-col gap-1.25 p-1"
            aria-label="menu"
          >
            <span className={`block w-5 h-[1.5px] transition-all bg-neutral-900 ${open ? "rotate-45 translate-y-[6.5px]" : ""}`} />
            <span className={`block w-5 h-[1.5px] transition-all bg-neutral-900 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-[1.5px] transition-all bg-neutral-900 ${open ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
          </button>
        </div>
      </header>

      {/* mobile overlay — sits at z-50 so the header above renders on top naturally */}
      {open && (
        <div className="fixed inset-0 z-40 bg-neutral-950 flex flex-col pt-16">
          {/* nav links */}
          <div className="flex-1 flex flex-col justify-center px-6 gap-2">
            {links.map((l) => (
              <button
                key={l.label}
                onClick={() => go(l.href)}
                className="text-left text-4xl font-black text-white hover:text-neutral-400 transition-colors tracking-tight py-2"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => go("/contact")}
              className="mt-6 self-start px-8 py-3 rounded-full bg-white text-neutral-900 text-sm font-bold hover:bg-neutral-200 transition-colors"
            >
              Let&apos;s talk
            </button>
          </div>

          <Footer />
        </div>
      )}
    </>
  );
}
