import Image from "next/image";
import { WorkItem } from "@/lib/content";
import { ArrowUpRight } from "./icons/ArrowUpRight";

export function WorkCard({ item }: { item: WorkItem }) {
  return (
    <div className="group relative overflow-hidden rounded-card">
      <div className="relative aspect-[4/5] w-full">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, 380px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/20" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-cream text-ink">
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </div>
      </div>
      <p className="mt-4 text-sm text-ink/70">
        {item.title} <span className="text-ink/40">→{item.agency}</span>
      </p>
    </div>
  );
}
