import Image from "next/image";
import { blogContent } from "@/lib/content";
import { FadeIn } from "./FadeIn";

export function Blog() {
  return (
    <section id="blog" className="bg-cream py-24 md:py-32">
      <div className="container-portfolio">
        <FadeIn className="flex flex-col items-center text-center">
          <p className="flex items-center gap-2 text-sm text-ink/60">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {blogContent.eyebrow.replace("• ", "")}
          </p>
          <h2 className="mt-3 font-display text-4xl italic md:text-5xl">{blogContent.heading}</h2>
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {blogContent.posts.map((post, i) => (
            <FadeIn key={post.title} delay={i * 0.1}>
              <article>
                <div className="relative aspect-square w-full overflow-hidden rounded-card">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover"
                  />
                  <div className="absolute left-4 top-4 flex gap-2">
                    <span className="rounded-pill bg-cream px-3 py-1 text-xs font-medium text-ink">
                      {post.category}
                    </span>
                    <span className="rounded-pill bg-ink/60 px-3 py-1 text-xs font-medium text-cream">
                      {post.readTime}
                    </span>
                  </div>
                </div>
                <h3 className="mt-5 text-base font-medium leading-snug">{post.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{post.excerpt}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
