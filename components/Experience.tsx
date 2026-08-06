import Image from "next/image";
import { experienceContent } from "@/lib/content";
import { FadeIn } from "./FadeIn";
import { ArrowUpRight } from "./icons/ArrowUpRight";
import { PillButton } from "./PillButton";

export function Experience() {
  return (
    <section id="services" className="bg-cream py-24 md:py-32">
      <div className="container-portfolio">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <FadeIn>
            <p className="flex items-center gap-2 text-sm text-ink/60">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {experienceContent.eyebrow.replace("• ", "")}
            </p>
            <h2 className="mt-3 max-w-xl font-display text-4xl italic md:text-5xl">
              {experienceContent.heading}
            </h2>
          </FadeIn>
          <FadeIn delay={0.1} className="max-w-sm">
            <p className="text-sm leading-relaxed text-ink/60">{experienceContent.paragraph}</p>
            <PillButton href="#contact" className="mt-4">
              {experienceContent.cta}
            </PillButton>
          </FadeIn>
        </div>

        <div className="mt-16 divide-y divide-ink/10 border-t border-ink/10">
          {experienceContent.rows.map((row, i) => (
            <FadeIn key={row.company} delay={i * 0.05}>
              <div className="flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
                <div className="md:w-2/5">
                  <p className="font-medium">{row.company}</p>
                  <p className="mt-1 text-xs text-ink/50">{row.dateRange}</p>
                </div>
                <p className="text-sm text-ink/70 md:w-1/3">{row.role}</p>
                <div className="flex flex-wrap gap-2">
                  {row.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-pill border border-ink/15 px-3 py-1 text-xs text-ink/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {row.expanded && (
                <div className="flex flex-col gap-6 pb-8 md:flex-row md:items-center">
                  <div className="flex gap-3">
                    {row.expanded.images.map((img, idx) => (
                      <div
                        key={img + idx}
                        className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl md:h-24 md:w-24"
                      >
                        <Image
                          src={img}
                          alt=""
                          fill
                          sizes="96px"
                          className="duotone object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <p className="max-w-xl text-sm leading-relaxed text-ink/60">
                    {row.expanded.paragraph}
                  </p>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink/60">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              )}
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
