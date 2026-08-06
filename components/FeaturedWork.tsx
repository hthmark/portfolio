import { featuredWork } from "@/lib/content";
import { FadeIn } from "./FadeIn";
import { WorkCard } from "./WorkCard";

export function FeaturedWork() {
  return (
    <section className="bg-cream pb-24 md:pb-32">
      <div className="container-portfolio grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
        {featuredWork.map((item, i) => (
          <FadeIn key={item.title + i} delay={i * 0.1}>
            <WorkCard item={item} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
