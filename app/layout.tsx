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

export const metadata: Metadata = {
  title: "Viklance Orbit | Software Development Agency",
  description:
    "We build exceptional digital products. From concept to launch, we craft software that drives growth.",
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
