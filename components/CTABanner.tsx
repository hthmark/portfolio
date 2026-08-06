import Image from "next/image";
import { ctaBannerContent } from "@/lib/content";
import { FadeIn } from "./FadeIn";
import { PillButton } from "./PillButton";

export function CTABanner() {
  return (
    <section className="bg-cream px-6 py-16 md:px-10 md:py-24">
      <FadeIn className="container-portfolio">
        <div className="relative overflow-hidden rounded-card bg-ink px-6 py-20 text-center md:py-28">
          <Image
            src={ctaBannerContent.backgroundImage}
            alt=""
            fill
            sizes="1200px"
            className="object-cover opacity-30"
          />
          <div className="relative z-10 mx-auto max-w-xl">
            <p className="text-sm text-cream/70">{ctaBannerContent.eyebrow}</p>
            <h2 className="mt-4 text-2xl font-semibold leading-snug text-cream md:text-4xl">
              {ctaBannerContent.heading}
            </h2>
            <div className="mt-8 flex justify-center">
              <PillButton href="#contact" variant="light">
                {ctaBannerContent.cta}
              </PillButton>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
