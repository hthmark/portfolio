import Image from "next/image";
import { aboutContent } from "@/lib/content";
import { FadeIn } from "./FadeIn";

export function About() {
  return (
    <section id="about" className="bg-cream py-24 md:py-32">
      <div className="container-portfolio grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
        {/* Left: heading + copy */}
        <FadeIn className="md:col-span-1">
          <h2 className="font-display text-4xl italic md:text-5xl">{aboutContent.heading}</h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink/70">
            {aboutContent.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="mt-10 flex items-center gap-4">
            <svg
              width="56"
              height="40"
              viewBox="0 0 56 40"
              fill="none"
              className="text-ink/30"
              aria-hidden
            >
              <path
                d="M2 4C20 2 44 10 50 30"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="3 4"
              />
              <path d="M44 24L50 30L45 36" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>
        </FadeIn>

        {/* Middle: stat card cluster */}
        <FadeIn delay={0.1} className="relative md:col-span-1">
          <div className="relative rounded-card border border-ink/10 bg-white/60 p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-cream">
              {aboutContent.badgeIcon}
            </div>
            <p className="mt-6 text-4xl font-semibold tracking-tight">{aboutContent.statValue}</p>
            <p className="mt-2 text-xs leading-relaxed text-ink/60">{aboutContent.statCaption}</p>

            <div className="relative mt-6 aspect-[4/5] w-full overflow-hidden rounded-2xl">
              <Image
                src={aboutContent.primaryPortrait}
                alt="Portrait"
                fill
                sizes="(max-width: 768px) 100vw, 360px"
                className="duotone object-cover"
              />
            </div>

            <div className="absolute -right-4 -top-4 h-16 w-16 overflow-hidden rounded-2xl border-4 border-cream shadow-lg">
              <Image
                src={aboutContent.floatingHeadshot}
                alt="Headshot"
                fill
                sizes="64px"
                className="duotone object-cover"
              />
            </div>
          </div>
        </FadeIn>

        {/* Right: blurbs */}
        <FadeIn delay={0.2} className="flex flex-col justify-center gap-8 md:col-span-1">
          {aboutContent.blurbs.map((blurb) => (
            <div key={blurb.text} className="flex gap-4">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
              <p className="text-sm leading-relaxed text-ink/70">{blurb.text}</p>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
