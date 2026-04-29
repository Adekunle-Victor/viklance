import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Referral Program",
  description:
    "Refer a client to Viklance Orbit and earn ₦100,000 flat when they sign a contract. No limits, no expiry.",
  openGraph: {
    type: "website",
    url: "https://www.viklanceorbit.com/refer",
    title: "Referral Program | Viklance Orbit",
    description:
      "Refer a client to Viklance Orbit and earn ₦100,000 flat when they sign a contract. No limits, no expiry.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Viklance Orbit" }],
  },
  twitter: {
    title: "Referral Program | Viklance Orbit",
    description:
      "Refer a client to Viklance Orbit and earn ₦100,000 flat when they sign a contract. No limits, no expiry.",
    images: ["/og.png"],
  },
};

export default function ReferLayout({ children }: { children: React.ReactNode }) {
  return children;
}
