import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 py-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 flex flex-col sm:flex-row items-center justify-between gap-6">
        <span className="text-[15px] font-black tracking-widest uppercase text-white">
          Viklance Orbit
        </span>
        <p className="text-[12px] text-neutral-600">
          © {new Date().getFullYear()} Viklance Orbit. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <Link href="/refer" className="text-[12px] text-neutral-400 hover:text-white transition-colors font-semibold">
            Referral Program
          </Link>
          <Link href="/careers" className="text-[12px] text-neutral-400 hover:text-white transition-colors font-semibold">
            Careers
          </Link>
          {["Twitter", "LinkedIn", "GitHub"].map((s) => (
            <a key={s} href="#" className="text-[12px] text-neutral-600 hover:text-white transition-colors">
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
