"use client";

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

export default function ReferralRedirect() {
  const { code } = useParams<{ code: string }>();
  const router = useRouter();

  useEffect(() => {
    if (code) {
      // 30-day cookie
      document.cookie = `viklance_ref=${code}; max-age=${60 * 60 * 24 * 30}; path=/; SameSite=Lax`;
    }
    router.replace("/");
  }, [code, router]);

  return (
    <div className="min-h-screen bg-neutral-100 flex items-center justify-center">
      <p className="text-sm text-neutral-400 font-medium">Redirecting…</p>
    </div>
  );
}
