import { experienceContent, siteConfig } from "@/lib/content";
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
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <PillButton href="#contact">{experienceContent.cta}</PillButton>
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-ink"
              >
                {experienceContent.resumeLabel}
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
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
                <ul className="flex flex-col gap-3 pb-8">
                  {row.expanded.bullets.map((bullet) => (
                    <li key={bullet} className="flex max-w-2xl gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span className="text-sm leading-relaxed text-ink/60">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
