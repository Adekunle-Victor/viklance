"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const dummyStats = [
  { label: "Total Clicks",  value: "47",       sub: "Link visits"        },
  { label: "Leads",         value: "12",        sub: "Contact form fills" },
  { label: "Conversions",   value: "3",         sub: "Signed contracts"   },
  { label: "Total Earned",  value: "₦300,000",  sub: "Pending payout"     },
];

const dummyActivity = [
  { date: "Apr 16, 2026", event: "Lead submitted contact form", status: "Lead",       dot: "bg-neutral-400" },
  { date: "Apr 14, 2026", event: "Client signed contract",      status: "Converted",  dot: "bg-neutral-900" },
  { date: "Apr 10, 2026", event: "Lead submitted contact form", status: "Lead",       dot: "bg-neutral-400" },
  { date: "Apr 7, 2026",  event: "Client signed contract",      status: "Converted",  dot: "bg-neutral-900" },
  { date: "Apr 2, 2026",  event: "Link visited",                status: "Click",      dot: "bg-neutral-200" },
  { date: "Mar 29, 2026", event: "Client signed contract",      status: "Converted",  dot: "bg-neutral-900" },
  { date: "Mar 25, 2026", event: "Lead submitted contact form", status: "Lead",       dot: "bg-neutral-400" },
];

export default function Dashboard() {
  const router = useRouter();
  const [code, setCode]     = useState<string | null>(null);
  const [ready, setReady]   = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem("viklance_ref_owner");
    if (!stored) {
      router.replace("/refer");
    } else {
      setCode(stored);
      setReady(true);
    }
  }, [router]);

  const baseUrl = typeof window !== "undefined" ? window.location.origin : "https://viklance.dev";

  const [copied, setCopied] = useState(false);
  const copy = () => {
    if (!code) return;
    navigator.clipboard.writeText(`${baseUrl}/r/${code}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!ready) return null;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-neutral-50">
        {/* header */}
        <div className="bg-white border-b border-neutral-200 pt-24 pb-8">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <p className="text-[11px] font-semibold tracking-widest uppercase text-neutral-400 mb-2">
              Referrer Dashboard
            </p>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h1 className="text-3xl font-black text-neutral-900 tracking-tight">
                Your referrals
              </h1>
              <div className="flex items-center gap-2 bg-neutral-100 border border-neutral-200 rounded-xl px-4 py-2.5">
                <span className="text-[11px] font-semibold text-neutral-400 tracking-widest uppercase hidden sm:block">
                  Your link
                </span>
                <span className="text-sm font-mono text-neutral-700 truncate max-w-55">
                  {baseUrl}/r/{code}
                </span>
                <button
                  onClick={copy}
                  className={`shrink-0 text-[11px] font-bold px-3 py-1 rounded-lg transition-all ${
                    copied ? "bg-neutral-900 text-white" : "bg-white border border-neutral-200 text-neutral-600 hover:border-neutral-400"
                  }`}
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-10">
          {/* stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {dummyStats.map((s) => (
              <div key={s.label} className="bg-white border border-neutral-200 rounded-2xl p-6">
                <p className="text-[11px] font-semibold tracking-widest uppercase text-neutral-400 mb-3">
                  {s.label}
                </p>
                <p className="text-3xl font-black text-neutral-900 tracking-tight mb-1">{s.value}</p>
                <p className="text-[11px] text-neutral-400">{s.sub}</p>
              </div>
            ))}
          </div>

          {/* activity */}
          <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden mb-6">
            <div className="px-6 py-4 border-b border-neutral-100 flex items-center justify-between">
              <h2 className="text-sm font-bold text-neutral-900">Recent activity</h2>
              <span className="text-[11px] text-neutral-400">Last 30 days</span>
            </div>
            <div className="divide-y divide-neutral-100">
              {dummyActivity.map((a, i) => (
                <div key={i} className="px-6 py-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className={`w-2 h-2 rounded-full shrink-0 ${a.dot}`} />
                    <span className="text-sm text-neutral-700">{a.event}</span>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-neutral-400 hidden sm:block">
                      {a.status}
                    </span>
                    <span className="text-[11px] text-neutral-300">{a.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* payout */}
          <div className="bg-neutral-900 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <p className="text-[11px] font-semibold tracking-widest uppercase text-neutral-500 mb-2">
                Pending payout
              </p>
              <p className="text-4xl font-black text-white tracking-tight">₦300,000</p>
              <p className="text-xs text-neutral-500 mt-1">
                3 conversions × ₦100,000 flat fee
              </p>
            </div>
            <button className="inline-flex items-center justify-center gap-2 bg-white text-neutral-900 font-bold px-6 py-3 rounded-xl text-sm hover:bg-neutral-200 transition-colors">
              Request payout
            </button>
          </div>

          <p className="text-xs text-neutral-400 text-center mt-8">
            Stats shown are sample data. Live tracking connects when the backend is ready. Questions?{" "}
            <a href="mailto:hello@viklance.dev" className="text-neutral-600 hover:underline">
              hello@viklance.dev
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
