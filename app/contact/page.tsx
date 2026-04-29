import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { channels } from "@/lib/contact-channels";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us about your project. We typically respond within a few hours and we're always honest about fit.",
  openGraph: {
    type: "website",
    url: "https://www.viklanceorbit.com/contact",
    title: "Contact | Viklance Orbit",
    description:
      "Tell us about your project. We typically respond within a few hours and we're always honest about fit.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Viklance Orbit" }],
  },
  twitter: {
    title: "Contact | Viklance Orbit",
    description:
      "Tell us about your project. We typically respond within a few hours and we're always honest about fit.",
    images: ["/og.png"],
  },
};

const steps = [
  { num: "01", title: "We review your message",        desc: "We read every inquiry personally, no auto-responses, no gatekeeping VA." },
  { num: "02", title: "You hear back within 24 hrs",   desc: "We'll respond with honest feedback on fit, timeline, and rough budget range." },
  { num: "03", title: "We scope the project together", desc: "A short call to align on goals, constraints, and what success looks like." },
  { num: "04", title: "We get to work",                desc: "Proposal signed, kickoff scheduled. You get a dedicated team from day one. Then follow ups meetings will be constant too." },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-neutral-100 overflow-hidden">
          <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "linear-gradient(#d4d4d4 1px, transparent 1px), linear-gradient(90deg, #d4d4d4 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_40%_50%,#f5f5f5,transparent)]" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-40 pb-24">
            <p className="inline-flex items-center gap-3 text-[11px] font-black tracking-widest uppercase text-neutral-500 mb-6">
              <span className="w-8 h-px bg-neutral-400" />Contact
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-neutral-900 leading-tight tracking-tight mb-6 max-w-3xl">
              Let&apos;s build<br /><span className="text-neutral-400">something great.</span>
            </h1>
            <p className="text-base sm:text-lg text-neutral-700 max-w-xl leading-relaxed">
              Tell us about your project. We typically respond within a few hours and we&apos;re always honest about fit.
            </p>
          </div>
          <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        </section>

        {/* Form + sidebar */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-start">

              {/* Sidebar */}
              <div className="flex flex-col gap-12">
                <div>
                  <p className="text-[11px] font-semibold tracking-widest uppercase text-neutral-600 mb-6">Reach us directly</p>
                  <div className="flex flex-col gap-4">
                    {channels.map((c) => (
                      <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="flex items-center gap-4 group">
                        <span className="w-10 h-10 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-600 group-hover:border-neutral-400 group-hover:text-neutral-900 transition-all">
                          {c.icon}
                        </span>
                        <div>
                          <p className="text-[11px] font-semibold tracking-widest uppercase text-neutral-500">{c.label}</p>
                          <p className="text-sm font-semibold text-neutral-900 group-hover:underline underline-offset-2">{c.value}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[11px] font-semibold tracking-widest uppercase text-neutral-600 mb-6">What happens next</p>
                  <div className="flex flex-col gap-6">
                    {steps.map((s) => (
                      <div key={s.num} className="flex gap-4">
                        <span className="text-[11px] font-bold tracking-widest text-neutral-300 pt-0.5 shrink-0">{s.num}</span>
                        <div>
                          <p className="text-sm font-bold text-neutral-900 mb-1">{s.title}</p>
                          <p className="text-sm text-neutral-600 leading-relaxed">{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Form */}
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
