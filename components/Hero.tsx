import Image from "next/image";
import { heroContent } from "@/lib/content";
import { FadeIn } from "./FadeIn";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#EDECE7] pb-20 pt-32 md:pb-28 md:pt-40">
      <div className="container-portfolio flex flex-col items-center text-center">
        <FadeIn>
          <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
            {heroContent.pageTitle}
          </h2>
        </FadeIn>
      </div>

      <FadeIn delay={0.15} y={40}>
        <div className="container-portfolio mt-14">
          {/* Laptop bezel */}
          <div className="mx-auto max-w-5xl rounded-[28px] bg-ink p-3 shadow-2xl md:rounded-[32px] md:p-4">
            {/* Screen */}
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-cream md:aspect-[16/9]">
              {/* Left rotated label */}
              <span className="absolute left-4 top-1/2 z-10 hidden -translate-y-1/2 -rotate-90 whitespace-nowrap text-xs font-medium tracking-widest text-ink/50 md:left-6 md:block">
                {heroContent.sideLabel}
              </span>

              {/* Stats top-left */}
              <div className="absolute left-6 top-6 z-10 flex gap-6 sm:left-16 sm:top-8 md:left-20">
                {heroContent.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-lg font-semibold md:text-xl">{stat.value}</p>
                    <p className="max-w-[7.5rem] text-[10px] leading-tight text-ink/60 md:text-xs">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Portrait bleeding right */}
              <div className="absolute inset-y-0 right-0 w-1/2 sm:w-[55%]">
                <Image
                  src={heroContent.portraitImage}
                  alt="Portrait"
                  fill
                  priority
                  sizes="(max-width: 768px) 50vw, 600px"
                  className="duotone object-cover object-center"
                />
              </div>

              {/* Giant headline */}
              <div className="absolute inset-x-0 bottom-10 left-6 z-10 sm:bottom-14 sm:left-16 md:left-20">
                <h1 className="font-display text-[64px] italic leading-none text-ink sm:text-[96px] md:text-[140px]">
                  {heroContent.headline}
                </h1>
                <p className="mt-2 max-w-[16rem] text-xs text-ink/60 sm:text-sm">
                  {heroContent.tagline}
                </p>
              </div>

              {/* Scroll down */}
              <div className="absolute bottom-6 left-6 z-10 flex items-center gap-2 text-xs text-ink/60 sm:left-16 md:left-20">
                <span>{heroContent.scrollLabel}</span>
                <span aria-hidden>↓</span>
              </div>
            </div>
          </div>

          {/* Hinge */}
          <div className="mx-auto h-3 w-[70%] rounded-b-md bg-gradient-to-b from-ink to-ink/70 md:h-4" />
          {/* Base */}
          <div className="mx-auto h-2 w-[85%] rounded-b-2xl bg-gradient-to-b from-ink/70 to-ink/40 md:h-3" />
        </div>
      </FadeIn>
    </section>
  );
}
