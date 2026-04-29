import type { Metadata } from "next";
import { Inter, Big_Shoulders_Inline } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import StoreProvider from "@/components/StoreProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const bigShoulders = Big_Shoulders_Inline({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-logo",
});

const SITE_URL = "https://www.viklanceorbit.com";
const DEFAULT_TITLE = "Viklance Orbit | Software Development Agency";
const DEFAULT_DESCRIPTION =
  "We build exceptional digital products. From concept to launch, we craft software that drives growth.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | Viklance Orbit",
  },
  description: DEFAULT_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Viklance Orbit",
    url: SITE_URL,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Viklance Orbit" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@viklance",
    creator: "@viklance",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${bigShoulders.variable}`}>
        <StoreProvider>{children}</StoreProvider>
        <Analytics />
      </body>
    </html>
  );
}
