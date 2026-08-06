import { finalCtaContent } from "@/lib/content";
import { FadeIn } from "./FadeIn";
import { PillButton } from "./PillButton";

export function FinalCTA() {
  return (
    <section id="contact" className="bg-cream pb-24 pt-8 md:pb-32">
      <FadeIn className="container-portfolio flex flex-col items-center text-center">
        <h2 className="max-w-2xl font-display text-4xl italic md:text-6xl">
          {finalCtaContent.heading}
        </h2>
        <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-ink/60">
          {finalCtaContent.subtext}
        </p>
        <div className="mt-8">
          <PillButton href="#contact">{finalCtaContent.cta}</PillButton>
        </div>
      </FadeIn>
    </section>
  );
}
