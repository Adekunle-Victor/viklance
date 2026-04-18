import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import About from "@/components/About";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import RefCapture from "@/components/RefCapture";

export default function Home() {
  return (
    <>
      <Suspense>
        <RefCapture />
      </Suspense>
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <About />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}
