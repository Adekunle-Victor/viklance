"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export function getRefCookie(): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(/(?:^|;\s*)viklance_ref=([^;]+)/);
  return match ? decodeURIComponent(match[1]) : null;
}

export default function RefCapture() {
  const params = useSearchParams();

  useEffect(() => {
    const ref = params.get("ref");
    if (ref) {
      document.cookie = `viklance_ref=${ref}; max-age=${60 * 60 * 24 * 30}; path=/; SameSite=Lax`;
    }
  }, [params]);

  return null;
}
