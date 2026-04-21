"use client";

import { useEffect, useState } from "react";
import { getRefCookie } from "@/components/RefCapture";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { submitLead, resetLead } from "@/store/slices/leads.slice";

export default function ContactForm() {
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

  if (success) {
    return (
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
    );
  }

  return (
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
          <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" className="border border-neutral-300 bg-white rounded-xl px-4 py-3 text-base text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-neutral-600 transition-colors" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-semibold tracking-widest uppercase text-neutral-600">Email</label>
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="john@company.com" className="border border-neutral-300 bg-white rounded-xl px-4 py-3 text-base text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-neutral-600 transition-colors" />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[11px] font-semibold tracking-widest uppercase text-neutral-600">Company / Project name</label>
        <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Acme Inc. (optional)" className="border border-neutral-300 bg-white rounded-xl px-4 py-3 text-base text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-neutral-600 transition-colors" />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[11px] font-semibold tracking-widest uppercase text-neutral-600">Service</label>
        <div className="relative">
          <select required value={service} onChange={(e) => setService(e.target.value)} className="w-full border border-neutral-300 bg-white rounded-xl px-4 py-3 text-base text-neutral-900 outline-none focus:border-neutral-600 transition-colors appearance-none pr-10">
            <option value="" disabled>Select a service</option>
            <option value="Web Application">Web Application</option>
            <option value="Mobile App">Mobile App</option>
            <option value="Product Design">Product Design</option>
            <option value="AI Integration">AI Integration</option>
            <option value="Other">Other</option>
          </select>
          <svg className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[11px] font-semibold tracking-widest uppercase text-neutral-600">Budget range</label>
        <div className="relative">
          <select value={budget} onChange={(e) => setBudget(e.target.value)} className="w-full border border-neutral-300 bg-white rounded-xl px-4 py-3 text-base text-neutral-900 outline-none focus:border-neutral-600 transition-colors appearance-none pr-10">
            <option value="">Select a range (optional)</option>
            <option value="Under ₦1M">Under ₦1,000,000</option>
            <option value="₦1M–₦5M">₦1,000,000 – ₦5,000,000</option>
            <option value="₦5M–₦20M">₦5,000,000 – ₦20,000,000</option>
            <option value="₦20M+">₦20,000,000+</option>
            <option value="Not sure">Not sure yet</option>
          </select>
          <svg className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[11px] font-semibold tracking-widest uppercase text-neutral-600">Message</label>
        <textarea required rows={5} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell us about your project, timeline, and what you need built..." className="border border-neutral-300 bg-white rounded-xl px-4 py-3 text-base text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-neutral-600 transition-colors resize-none" />
      </div>

      <button type="submit" disabled={loading} className="mt-1 bg-neutral-900 text-white font-bold py-3.5 rounded-xl text-sm hover:bg-neutral-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2">
        {loading ? (
          <><svg className="animate-spin" width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="22" strokeDashoffset="10" strokeLinecap="round" /></svg>Sending...</>
        ) : "Send message"}
      </button>
    </form>
  );
}
