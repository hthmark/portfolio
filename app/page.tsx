import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
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
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
