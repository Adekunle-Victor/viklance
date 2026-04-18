"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { signupReferrer, resetReferral } from "@/store/slices/referrals.slice";

const steps = [
  {
    num: "01",
    title: "Sign up below",
    desc: "Enter your name and email. We'll generate a unique referral link just for you.",
  },
  {
    num: "02",
    title: "Share your link",
    desc: "Send it to founders, businesses, or anyone who needs software built. Post it anywhere.",
  },
  {
    num: "03",
    title: "Get paid",
    desc: "When your referral signs a contract with Viklance, we send you ₦100,000. No cap, no expiry.",
  },
];

const faqs = [
  {
    q: "When do I get paid?",
    a: "Within 7 days of your referred client signing their contract with us.",
  },
  {
    q: "Is there a limit on how many people I can refer?",
    a: "No limit at all. Refer 1 or refer 100 — you earn ₦100,000 for every single one that converts.",
  },
  {
    q: "What counts as a conversion?",
    a: "A conversion is when the person you referred signs a paid engagement contract with Viklance.",
  },
  {
    q: "How do you track my referrals?",
    a: "Your unique link includes a referral code. Anyone who visits via your link and submits a project inquiry is tagged to you.",
  },
  {
    q: "What payment methods do you support?",
    a: "Bank transfer, Paystack, or PayPal — whichever works best for you.",
  },
];


export default function ReferPage() {
  const dispatch = useAppDispatch();
  const { code: reduxCode, loading, error } = useAppSelector((s) => s.referrals);

  const [name, setName]       = useState("");
  const [email, setEmail]     = useState("");
  const [copied, setCopied]   = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const baseUrl =
    typeof window !== "undefined" ? window.location.origin : "https://viklance.dev";

  const code = reduxCode;
  const referralUrl = code ? `${baseUrl}/r/${code}` : "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await dispatch(signupReferrer({ name, email }));
    if (signupReferrer.fulfilled.match(result)) {
      sessionStorage.setItem("viklance_ref_owner", result.payload);
    }
  };

  const copy = () => {
    navigator.clipboard.writeText(referralUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
              Referral Program
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-neutral-900 leading-tight tracking-tight mb-6 max-w-3xl">
              Refer a client.
              <br />
              <span className="text-neutral-400">Earn ₦100,000.</span>
            </h1>
            <p className="text-base sm:text-lg text-neutral-700 max-w-xl leading-relaxed">
              Know someone who needs software built? Share your unique link —
              earn a flat ₦100,000 for every client that signs a contract. No limits.
            </p>
          </div>
          <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        </section>

        {/* How it works */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <p className="text-[11px] font-semibold tracking-widest uppercase text-neutral-600 mb-12">
              How it works
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200">
              {steps.map((s) => (
                <div key={s.num} className="bg-white p-8 sm:p-10">
                  <span className="block text-[11px] font-bold tracking-widest text-neutral-300 mb-5">
                    {s.num}
                  </span>
                  <h3 className="text-base font-bold text-neutral-900 mb-3">{s.title}</h3>
                  <p className="text-sm text-neutral-700 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sign up */}
        <section className="py-24 bg-neutral-50 border-y border-neutral-200">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-start">
              <div>
                <p className="text-[11px] font-semibold tracking-widest uppercase text-neutral-600 mb-5">
                  Get your link
                </p>
                <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 leading-tight tracking-tight mb-4">
                  Start earning today.
                </h2>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  Fill in your details and we&apos;ll generate your personal referral
                  link instantly. No account needed.
                </p>
              </div>

              <div>
                {!code ? (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {error && (
                      <div className="bg-red-50 border border-red-200 text-red-700 text-sm font-medium px-4 py-3 rounded-xl">
                        {error}
                      </div>
                    )}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11px] font-semibold tracking-widest uppercase text-neutral-600">
                        Full name
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="border border-neutral-300 bg-white rounded-xl px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-neutral-600 transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11px] font-semibold tracking-widest uppercase text-neutral-600">
                        Email address
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="border border-neutral-300 bg-white rounded-xl px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-neutral-600 transition-colors"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="mt-1 bg-neutral-900 text-white font-bold py-3.5 rounded-xl text-sm hover:bg-neutral-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <><svg className="animate-spin" width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="22" strokeDashoffset="10" strokeLinecap="round" /></svg>Generating...</>
                      ) : "Generate my referral link"}
                    </button>
                  </form>
                ) : (
                  <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-2 bg-neutral-900 text-white text-[11px] font-semibold px-4 py-2.5 rounded-xl w-fit">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M9 1.5h3.5v3.5M12.5 1.5L7 7M6 2.5H2.5a1 1 0 00-1 1v8a1 1 0 001 1h8a1 1 0 001-1V8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Your link is ready
                    </div>

                    <div>
                      <p className="text-[11px] font-semibold tracking-widest uppercase text-neutral-600 mb-2">
                        Your referral link
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 border border-neutral-200 bg-white rounded-xl px-4 py-3 text-sm text-neutral-600 font-mono truncate">
                          {referralUrl}
                        </div>
                        <button
                          onClick={copy}
                          className={`shrink-0 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                            copied
                              ? "bg-neutral-900 text-white"
                              : "border border-neutral-200 bg-white text-neutral-700 hover:border-neutral-400"
                          }`}
                        >
                          {copied ? "Copied!" : "Copy"}
                        </button>
                      </div>
                    </div>

                    <div className="border border-neutral-200 bg-white rounded-xl p-5 flex flex-col gap-1">
                      <p className="text-[11px] font-semibold tracking-widest uppercase text-neutral-600">
                        Your code
                      </p>
                      <p className="text-2xl font-black text-neutral-900 tracking-tight">{code}</p>
                    </div>

                    <p className="text-xs text-neutral-400 leading-relaxed">
                      Save this link — it&apos;s unique to you. Share it anywhere and
                      we&apos;ll track every inquiry that comes through it.
                    </p>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => { dispatch(resetReferral()); setName(""); setEmail(""); }}
                        className="flex-1 border border-neutral-200 bg-white text-neutral-700 font-semibold py-3 rounded-xl text-sm hover:border-neutral-400 hover:text-neutral-900 transition-all"
                      >
                        Generate different link
                      </button>
                      <a
                        href="/refer/dashboard"
                        className="flex-1 bg-neutral-900 text-white font-bold py-3 rounded-xl text-sm hover:bg-neutral-700 transition-colors text-center"
                      >
                        View dashboard
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24">
              <div>
                <p className="text-[11px] font-semibold tracking-widest uppercase text-neutral-600 mb-5">
                  FAQ
                </p>
                <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 leading-tight tracking-tight">
                  Questions?
                  <br />We&apos;ve got answers.
                </h2>
              </div>
              <div className="flex flex-col divide-y divide-neutral-200">
                {faqs.map((f, i) => (
                  <div key={i} className="py-5">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="flex items-center justify-between w-full text-left gap-4"
                    >
                      <span className="text-sm font-bold text-neutral-900">{f.q}</span>
                      <svg
                        width="16" height="16" viewBox="0 0 16 16" fill="none"
                        className={`shrink-0 transition-transform ${openFaq === i ? "rotate-45" : ""}`}
                      >
                        <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </button>
                    {openFaq === i && (
                      <p className="text-sm text-neutral-700 leading-relaxed mt-3">{f.a}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
