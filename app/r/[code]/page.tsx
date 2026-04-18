"use client";

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useAppDispatch } from "@/store/hooks";
import { trackClick } from "@/store/slices/referrals.slice";

export default function ReferralRedirect() {
  const { code } = useParams<{ code: string }>();
  const router   = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (code) {
      document.cookie = `viklance_ref=${code}; max-age=${60 * 60 * 24 * 30}; path=/; SameSite=Lax`;
      dispatch(trackClick(code));
    }
    router.replace("/");
  }, [code, router, dispatch]);

  return (
    <div className="min-h-screen bg-neutral-100 flex items-center justify-center">
      <p className="text-sm text-neutral-400 font-medium">Redirecting…</p>
    </div>
  );
}
