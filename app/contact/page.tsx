"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getRefCookie } from "@/components/RefCapture";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { submitLead, resetLead } from "@/store/slices/leads.slice";

const steps = [
  { num: "01", title: "We review your message",        desc: "We read every inquiry personally — no auto-responses, no gatekeeping VA." },
  { num: "02", title: "You hear back within 24 hrs",   desc: "We'll respond with honest feedback on fit, timeline, and rough budget range." },
  { num: "03", title: "We scope the project together", desc: "A short call to align on goals, constraints, and what success looks like." },
  { num: "04", title: "We get to work",                desc: "Proposal signed, kickoff scheduled. You get a dedicated team from day one." },
];

const channels = [
  {
    label: "Email", value: "hello@viklance.dev", href: "mailto:hello@viklance.dev",
    icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 4.5l6 4.5 6-4.5M2 4.5h12v8H2v-8z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" /></svg>,
  },
  {
    label: "Twitter / X", value: "@viklance", href: "https://twitter.com/viklance",
    icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 2.5h3.5L14 13.5h-3.5L2 2.5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" strokeLinecap="round" /><path d="M2 13.5l4.5-4.5M14 2.5l-4.5 4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>,
  },
  {
    label: "LinkedIn", value: "Viklance", href: "https://linkedin.com/company/viklance",
    icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.3" /><path d="M5 7v4M5 5.5v.01M8 11V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>,
  },
];

export default function ContactPage() {
  const dispatch = useAppDispatch();
  const { loading, success, error } = useAppSelector((s) => s.leads);

  const [refCode, setRefCode] = useState<string | null>(null);
  const [name,    setName]    = useState("");
  const [email,   setEmail]   = useState("");
  const [company, setCompany] = useState("");
  const [service, setService] = useState("");
  const [budget,  setBudget]  = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => { setRefCode(getRefCookie()); }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    await dispatch(submitLead({ name, email, company: company || undefined, service, budget: budget || undefined, message, ref_code: refCode }));
  };

  const reset = () => {
    dispatch(resetLead());
    setName(""); setEmail(""); setCompany(""); setService(""); setBudget(""); setMessage("");
  };

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
              <div>
                {success ? (
                  <div className="flex flex-col items-center justify-center gap-5 py-24 text-center">
                    <div className="w-14 h-14 rounded-full bg-neutral-900 flex items-center justify-center">
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M4 11.5l5 5L18 6.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xl font-black text-neutral-900 mb-1">Message received.</p>
                      <p className="text-sm text-neutral-500">We&apos;ll be in touch within 24 hours.</p>
                    </div>
                    <button onClick={reset} className="mt-2 text-sm font-semibold text-neutral-500 hover:text-neutral-900 underline underline-offset-2 transition-colors">
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={submit} className="flex flex-col gap-4">
                    {error && (
                      <div className="bg-red-50 border border-red-200 text-red-700 text-sm font-medium px-4 py-3 rounded-xl">
                        {error}
                      </div>
                    )}

                    {refCode && (
                      <div className="flex items-center gap-2 bg-neutral-900 text-white text-[11px] font-semibold px-4 py-2.5 rounded-xl">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <circle cx="7" cy="4" r="2.5" stroke="currentColor" strokeWidth="1.2" />
                          <path d="M1.5 12.5c0-2.485 2.462-4.5 5.5-4.5s5.5 2.015 5.5 4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                        </svg>
                        Referred by <span className="text-neutral-300 ml-1 font-black">{refCode}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[11px] font-semibold tracking-widest uppercase text-neutral-600">Name</label>
                        <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" className="border border-neutral-300 bg-white rounded-xl px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-neutral-600 transition-colors" />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[11px] font-semibold tracking-widest uppercase text-neutral-600">Email</label>
                        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="john@company.com" className="border border-neutral-300 bg-white rounded-xl px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-neutral-600 transition-colors" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11px] font-semibold tracking-widest uppercase text-neutral-600">Company / Project name</label>
                      <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Acme Inc. (optional)" className="border border-neutral-300 bg-white rounded-xl px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-neutral-600 transition-colors" />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11px] font-semibold tracking-widest uppercase text-neutral-600">Service</label>
                      <select required value={service} onChange={(e) => setService(e.target.value)} className="border border-neutral-300 bg-white rounded-xl px-4 py-3 text-sm text-neutral-900 outline-none focus:border-neutral-600 transition-colors appearance-none">
                        <option value="" disabled>Select a service</option>
                        <option value="Web Application">Web Application</option>
                        <option value="Mobile App">Mobile App</option>
                        <option value="Product Design">Product Design</option>
                        <option value="AI Integration">AI Integration</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11px] font-semibold tracking-widest uppercase text-neutral-600">Budget range</label>
                      <select value={budget} onChange={(e) => setBudget(e.target.value)} className="border border-neutral-300 bg-white rounded-xl px-4 py-3 text-sm text-neutral-900 outline-none focus:border-neutral-600 transition-colors appearance-none">
                        <option value="">Select a range (optional)</option>
                        <option value="Under ₦1M">Under ₦1,000,000</option>
                        <option value="₦1M–₦5M">₦1,000,000 – ₦5,000,000</option>
                        <option value="₦5M–₦20M">₦5,000,000 – ₦20,000,000</option>
                        <option value="₦20M+">₦20,000,000+</option>
                        <option value="Not sure">Not sure yet</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11px] font-semibold tracking-widest uppercase text-neutral-600">Message</label>
                      <textarea required rows={5} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell us about your project, timeline, and what you need built..." className="border border-neutral-300 bg-white rounded-xl px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-neutral-600 transition-colors resize-none" />
                    </div>

                    <button type="submit" disabled={loading} className="mt-1 bg-neutral-900 text-white font-bold py-3.5 rounded-xl text-sm hover:bg-neutral-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2">
                      {loading ? (
                        <><svg className="animate-spin" width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="22" strokeDashoffset="10" strokeLinecap="round" /></svg>Sending...</>
                      ) : "Send message"}
                    </button>
                  </form>
                )}
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
