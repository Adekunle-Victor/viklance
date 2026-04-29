import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Viklance Orbit is a close-knit team of engineers obsessed with craft. 50+ projects shipped across fintech, SaaS, e-commerce, and AI.",
  openGraph: {
    type: "website",
    url: "https://www.viklanceorbit.com/about",
    title: "About Us | Viklance Orbit",
    description:
      "Viklance Orbit is a close-knit team of engineers obsessed with craft. 50+ projects shipped across fintech, SaaS, e-commerce, and AI.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Viklance Orbit" }],
  },
  twitter: {
    title: "About Us | Viklance Orbit",
    description:
      "Viklance Orbit is a close-knit team of engineers obsessed with craft. 50+ projects shipped across fintech, SaaS, e-commerce, and AI.",
    images: ["/og.png"],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
