import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { FeaturedWork } from "@/components/FeaturedWork";
import { Experience } from "@/components/Experience";
import { CTABanner } from "@/components/CTABanner";
import { LatestWorks } from "@/components/LatestWorks";
import { Blog } from "@/components/Blog";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedWork />
        <Experience />
        <CTABanner />
        <LatestWorks />
        <Blog />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
