"use client";

import { useTranslations, useLocale } from "next-intl";
import { Calendar, ArrowRight } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import ScrollReveal from "../ui/ScrollReveal";

const PLACEHOLDER_POSTS = [
  {
    id: 1,
    date: "2026-03-20",
    titleKey: "Global Beef Demand Surges in Middle Eastern Markets",
    excerpt:
      "Discover how shifting consumer preferences and economic growth are driving unprecedented demand for premium beef imports across the Middle East.",
    image: null,
  },
  {
    id: 2,
    date: "2026-03-10",
    titleKey: "Natural Trade Expands Network to Southeast Asia",
    excerpt:
      "Our growing presence in Southeast Asian markets opens new opportunities for protein suppliers looking to diversify their export destinations.",
    image: null,
  },
  {
    id: 3,
    date: "2026-02-28",
    titleKey: "Cold Chain Innovation: Ensuring Quality from Source to Shelf",
    excerpt:
      "How advances in cold chain logistics are revolutionizing the frozen protein trade and guaranteeing product integrity across continents.",
    image: null,
  },
];

export default function BlogSection() {
  const t = useTranslations("blog");
  const locale = useLocale();

  return (
    <section id="blog" className="py-24 md:py-32 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title={t("title")} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PLACEHOLDER_POSTS.map((post, i) => (
            <ScrollReveal key={post.id} delay={i * 0.15}>
              <article className="group bg-bg-card border border-border-gold rounded-lg overflow-hidden hover:border-border-gold-hover transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-video bg-gradient-to-br from-bg-secondary to-bg-card flex items-center justify-center">
                  <span className="text-gold/30 text-sm uppercase tracking-wider">
                    Image Coming Soon
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-cream-dim text-xs mb-3">
                    <Calendar size={14} />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString(locale, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>

                  <h3 className="text-cream font-semibold text-lg mb-3 line-clamp-2 group-hover:text-gold transition-colors duration-300">
                    {post.titleKey}
                  </h3>

                  <p className="text-cream-muted text-sm leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>

                  <span className="inline-flex items-center gap-1 text-gold text-sm font-medium group-hover:gap-2 transition-all duration-300">
                    {t("read_more")}
                    <ArrowRight size={14} />
                  </span>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
