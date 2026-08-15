import { latestWorksContent } from "@/lib/content";
import { FadeIn } from "./FadeIn";
import { WorkCard } from "./WorkCard";
import { ArrowUpRight } from "./icons/ArrowUpRight";
import Link from "next/link";
import { youtubeChannel, youtubeVideos } from "@/lib/youtube";

export function LatestWorks() {
  const websiteItems = latestWorksContent.items.filter(
    (item) => item.kind === "website",
  );
  const items = [...youtubeVideos, ...websiteItems];

  return (
    <section id="portfolio" className="bg-cream py-24 md:py-32">
      <div className="container-portfolio">
        <FadeIn className="flex flex-col items-center text-center">
          <p className="flex items-center gap-2 text-sm text-ink/60">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {latestWorksContent.eyebrow.replace("• ", "")}
          </p>
          <h2 className="mt-3 font-display text-4xl italic md:text-5xl">
            {latestWorksContent.heading}
          </h2>
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
          {items.map((item, i) => (
            <FadeIn
              key={item.kind === "video" ? item.videoId : item.href}
              delay={i * 0.1}
            >
              <WorkCard item={item} />
            </FadeIn>
          ))}
        </div>

        {youtubeChannel.url && (
          <FadeIn className="mt-14 flex justify-center">
            <Link
              href={youtubeChannel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm font-medium text-ink"
            >
              {latestWorksContent.viewMore}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
