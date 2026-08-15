import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { CTABanner } from "@/components/CTABanner";
import { LatestWorks } from "@/components/LatestWorks";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LatestWorks />
        <About />
        <Experience />
        <CTABanner />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
