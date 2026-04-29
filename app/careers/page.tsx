import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "No open roles right now, but we're always interested in exceptional people. Send us your CV and tell us what you're great at.",
  openGraph: {
    type: "website",
    url: "https://www.viklanceorbit.com/careers",
    title: "Careers | Viklance Orbit",
    description:
      "No open roles right now, but we're always interested in exceptional people. Send us your CV and tell us what you're great at.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Viklance Orbit" }],
  },
  twitter: {
    title: "Careers | Viklance Orbit",
    description:
      "No open roles right now, but we're always interested in exceptional people. Send us your CV and tell us what you're great at.",
    images: ["/og.png"],
  },
};

const traits = [
  {
    num: "01",
    title: "You care about the craft",
    desc: "You sweat the details other people skip. Clean code, clear thinking, and pride in what you ship.",
  },
  {
    num: "02",
    title: "You communicate well",
    desc: "You keep people informed, raise blockers early, and write clearly. Remote work lives and dies on communication.",
  },
  {
    num: "03",
    title: "You take ownership",
    desc: "You don't wait to be told what to do next. You see what needs doing and do it.",
  },
  {
    num: "04",
    title: "You're honest",
    desc: "You say when something won't work, when you're stuck, or when you disagree. No politics, no performance.",
  },
];

export default function CareersPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative bg-neutral-100 overflow-hidden">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(#d4d4d4 1px, transparent 1px), linear-gradient(90deg, #d4d4d4 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_40%_50%,#f5f5f5,transparent)]" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-40 pb-24">
            <p className="inline-flex items-center gap-3 text-[11px] font-black tracking-widest uppercase text-neutral-500 mb-6">
              <span className="w-8 h-px bg-neutral-400" />
              Careers
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-neutral-900 leading-tight tracking-tight mb-6 max-w-3xl">
              No open roles
              <br />
              <span className="text-neutral-400">right now.</span>
            </h1>
            <p className="text-base sm:text-lg text-neutral-700 max-w-xl leading-relaxed">
              We&apos;re a small, intentional team and we hire slowly. There are no open
              positions at the moment but we&apos;re always interested in hearing from
              exceptional people.
            </p>
          </div>
          <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        </section>

        {/* What we look for */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <p className="text-[11px] font-semibold tracking-widest uppercase text-neutral-600 mb-12">
              What we look for
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-neutral-200 border border-neutral-200">
              {traits.map((t) => (
                <div key={t.num} className="bg-white p-8 sm:p-10">
                  <span className="block text-[11px] font-bold tracking-widest text-neutral-300 mb-5">
                    {t.num}
                  </span>
                  <h3 className="text-base font-bold text-neutral-900 mb-3">{t.title}</h3>
                  <p className="text-sm text-neutral-700 leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Speculative applications */}
        <section className="py-24 bg-neutral-50 border-y border-neutral-200">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-start">
              <div>
                <p className="text-[11px] font-semibold tracking-widest uppercase text-neutral-600 mb-5">
                  Speculative applications
                </p>
                <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 leading-tight tracking-tight mb-4">
                  Think you&apos;d
                  <br />fit in here?
                </h2>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  If you think you&apos;d be a great fit, we want to hear from you even
                  when there&apos;s nothing posted. Send your CV, a note on what you do
                  and what you&apos;re looking for, and we&apos;ll keep you in mind when
                  something opens up.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <div className="border border-neutral-200 bg-white rounded-2xl p-6 sm:p-8 flex flex-col gap-5">
                  <div>
                    <p className="text-[11px] font-semibold tracking-widest uppercase text-neutral-600 mb-1">
                      Send your CV to
                    </p>
                    <a
                      href="mailto:hello@viklance.com?subject=Speculative Application"
                      className="text-xl font-black text-neutral-900 hover:underline underline-offset-4 tracking-tight"
                    >
                      hello@viklance.com
                    </a>
                  </div>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    Include what role you&apos;d be going for, links to work you&apos;re
                    proud of, and a short note on what you&apos;re looking for. No cover
                    letter template needed just be direct.
                  </p>
                  <a
                    href="mailto:hello@viklance.com?subject=Speculative Application"
                    className="self-start inline-flex items-center gap-2 bg-neutral-900 text-white font-bold px-6 py-3.5 rounded-full text-sm hover:bg-neutral-700 transition-colors"
                  >
                    Send application
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-neutral-900">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight tracking-tight mb-3">
                Have a project instead?
              </h2>
              <p className="text-base text-neutral-400 leading-relaxed">
                If you&apos;re looking to build something, not join us we&apos;d love to hear about it.
              </p>
            </div>
            <a
              href="/contact"
              className="shrink-0 inline-flex items-center gap-2 bg-white text-neutral-900 font-bold px-8 py-4 rounded-full text-sm hover:bg-neutral-200 transition-colors"
            >
              Let&apos;s talk
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
