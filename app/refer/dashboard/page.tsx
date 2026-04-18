"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchDashboard } from "@/store/slices/referrals.slice";

export default function Dashboard() {
  const router   = useRouter();
  const dispatch = useAppDispatch();
  const { dashboard, loading, error } = useAppSelector((s) => s.referrals);

  const [code, setCode]     = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const baseUrl = typeof window !== "undefined" ? window.location.origin : "https://viklance.dev";

  useEffect(() => {
    const stored = sessionStorage.getItem("viklance_ref_owner");
    if (!stored) {
      router.replace("/refer");
    } else {
      setCode(stored);
      dispatch(fetchDashboard(stored));
    }
  }, [router, dispatch]);

  const copy = () => {
    if (!code) return;
    navigator.clipboard.writeText(`${baseUrl}/r/${code}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!code) return null;

  const stats = dashboard
    ? [
        { label: "Total Clicks",  value: dashboard.clicks.toString(),                                       sub: "Link visits"        },
        { label: "Leads",         value: dashboard.leads.toString(),                                         sub: "Contact form fills" },
        { label: "Conversions",   value: dashboard.conversions.toString(),                                   sub: "Signed contracts"   },
        { label: "Total Earned",  value: dashboard.earned > 0 ? `₦${dashboard.earned.toLocaleString()}` : "₦0", sub: "Pending payout" },
      ]
    : Array(4).fill(null);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-neutral-50">
        {/* Header */}
        <div className="bg-white border-b border-neutral-200 pt-24 pb-8">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <p className="text-[11px] font-semibold tracking-widest uppercase text-neutral-400 mb-2">
              Referrer Dashboard
            </p>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h1 className="text-3xl font-black text-neutral-900 tracking-tight">
                {dashboard ? `Welcome, ${dashboard.referrer.name.split(" ")[0]}` : "Your referrals"}
              </h1>
              <div className="flex items-center gap-2 bg-neutral-100 border border-neutral-200 rounded-xl px-4 py-2.5">
                <span className="text-[11px] font-semibold text-neutral-400 tracking-widest uppercase hidden sm:block">Your link</span>
                <span className="text-sm font-mono text-neutral-700 truncate max-w-55">{baseUrl}/r/{code}</span>
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
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 text-sm font-medium px-4 py-3 rounded-xl mb-6">
              {error}
            </div>
          )}

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((s, i) => (
              <div key={i} className="bg-white border border-neutral-200 rounded-2xl p-6">
                <p className="text-[11px] font-semibold tracking-widest uppercase text-neutral-400 mb-3">
                  {s?.label ?? <span className="h-2 w-20 bg-neutral-100 rounded block animate-pulse" />}
                </p>
                {loading || !s ? (
                  <div className="h-8 w-16 bg-neutral-100 rounded animate-pulse mt-1 mb-2" />
                ) : (
                  <p className="text-3xl font-black text-neutral-900 tracking-tight mb-1">{s.value}</p>
                )}
                <p className="text-[11px] text-neutral-400">{s?.sub ?? ""}</p>
              </div>
            ))}
          </div>

          {/* Payout */}
          <div className="bg-neutral-900 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <p className="text-[11px] font-semibold tracking-widest uppercase text-neutral-500 mb-2">Pending payout</p>
              {loading || !dashboard ? (
                <div className="h-10 w-32 bg-neutral-800 rounded animate-pulse" />
              ) : (
                <>
                  <p className="text-4xl font-black text-white tracking-tight">
                    {dashboard.earned > 0 ? `₦${dashboard.earned.toLocaleString()}` : "₦0"}
                  </p>
                  <p className="text-xs text-neutral-500 mt-1">
                    {dashboard.conversions} conversion{dashboard.conversions !== 1 ? "s" : ""} × ₦100,000 flat fee
                  </p>
                </>
              )}
            </div>
            <a
              href="mailto:hello@viklance.dev?subject=Payout Request"
              className="inline-flex items-center justify-center gap-2 bg-white text-neutral-900 font-bold px-6 py-3 rounded-xl text-sm hover:bg-neutral-200 transition-colors"
            >
              Request payout
            </a>
          </div>

          <p className="text-xs text-neutral-400 text-center mt-8">
            Questions?{" "}
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
