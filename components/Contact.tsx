"use client";

import { useEffect, useState } from "react";
import { getRefCookie } from "@/components/RefCapture";

export default function Contact() {
  const [sent, setSent]       = useState(false);
  const [loading, setLoading] = useState(false);
  const [refCode, setRefCode] = useState<string | null>(null);

  useEffect(() => {
    setRefCode(getRefCookie());
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // refCode is available here to include in the API payload later
    setTimeout(() => { setLoading(false); setSent(true); }, 1200);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24">
          {/* left */}
          <div>
            <p className="text-[11px] font-semibold tracking-widest uppercase text-neutral-600 mb-5">
              Get in touch
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-neutral-900 leading-tight tracking-tight mb-6">
              Ready to build
              <br />something great?
            </h2>
            <p className="text-base text-neutral-700 leading-relaxed mb-10">
              Tell us about your project. We typically respond within a few hours
              and are always honest about fit.
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:hello@viklance.dev"
                className="flex items-center gap-3 text-sm text-neutral-700 hover:text-neutral-900 transition-colors group"
              >
                <span className="w-9 h-9 rounded-full bg-white border border-neutral-200 flex items-center justify-center group-hover:border-neutral-400 transition-colors">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1.5 3.5l5.5 4 5.5-4M1.5 3.5h11v7h-11v-7z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
                  </svg>
                </span>
                hello@viklance.dev
              </a>
            </div>
          </div>

          {/* form */}
          <div>
            {sent ? (
              <div className="flex flex-col items-center justify-center gap-5 py-20 text-center">
                <div className="w-14 h-14 rounded-full bg-neutral-900 flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M4 11.5l5 5L18 6.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-xl font-black text-neutral-900 mb-1">Message received.</p>
                  <p className="text-sm text-neutral-400">We&apos;ll be in touch within 24 hours.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={submit} className="flex flex-col gap-4">
                {/* referral badge */}
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
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      className="border border-neutral-300 bg-white rounded-xl px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-neutral-600 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-semibold tracking-widest uppercase text-neutral-600">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="john@company.com"
                      className="border border-neutral-300 bg-white rounded-xl px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-neutral-600 transition-colors"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-semibold tracking-widest uppercase text-neutral-600">Service</label>
                  <select
                    required
                    defaultValue=""
                    className="border border-neutral-300 bg-white rounded-xl px-4 py-3 text-sm text-neutral-900 outline-none focus:border-neutral-600 transition-colors appearance-none"
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="web">Web Application</option>
                    <option value="mobile">Mobile App</option>
                    <option value="design">Product Design</option>
                    <option value="ai">AI Integration</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-semibold tracking-widest uppercase text-neutral-600">Message</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us about your project, timeline, and budget..."
                    className="border border-neutral-300 bg-white rounded-xl px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-neutral-600 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-1 bg-neutral-900 text-white font-bold py-3.5 rounded-xl text-sm hover:bg-neutral-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {loading ? "Sending..." : "Send message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
