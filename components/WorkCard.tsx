import Image from "next/image";
import { PortfolioItem, youtubeThumbnail, youtubeUrl } from "@/lib/content";
import { ArrowUpRight } from "./icons/ArrowUpRight";
import { Play } from "./icons/Play";

export function WorkCard({ item }: { item: PortfolioItem }) {
  const href = item.kind === "video" ? youtubeUrl(item.videoId) : item.href;
  const thumbnail = item.kind === "video" ? youtubeThumbnail(item.videoId) : item.image;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-card"
    >
      <div className="relative aspect-[4/5] w-full bg-ink/5">
        <Image
          src={thumbnail}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, 380px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/20" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-cream text-ink">
            {item.kind === "video" ? (
              <Play className="h-5 w-5 translate-x-0.5" />
            ) : (
              <ArrowUpRight className="h-5 w-5" />
            )}
          </span>
        </div>
      </div>
      <p className="mt-4 text-sm text-ink/70">{item.title}</p>
    </a>
  );
}
