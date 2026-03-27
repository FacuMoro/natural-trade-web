"use client";

import { useTranslations } from "next-intl";
import SectionTitle from "../ui/SectionTitle";
import ScrollReveal from "../ui/ScrollReveal";

export default function AboutSection() {
  const t = useTranslations("about");

  return (
    <section id="about" className="py-24 md:py-32 bg-bg-primary">
      <div className="max-w-4xl mx-auto px-6">
        <SectionTitle title={t("title")} />
        <div className="space-y-6 text-center">
          <ScrollReveal delay={0.1}>
            <p className="text-cream-muted text-lg leading-relaxed">
              {t("p1")}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-cream-muted text-lg leading-relaxed">
              {t("p2")}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-cream-muted text-lg leading-relaxed font-medium text-cream">
              {t("p3")}
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
