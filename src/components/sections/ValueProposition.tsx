"use client";

import { useTranslations } from "next-intl";
import { ShieldCheck, Globe, Headphones } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import ScrollReveal from "../ui/ScrollReveal";

const VALUE_CARDS = [
  {
    titleKey: "years_title",
    descKey: "years_desc",
    Icon: ShieldCheck,
  },
  {
    titleKey: "network_title",
    descKey: "network_desc",
    Icon: Globe,
  },
  {
    titleKey: "service_title",
    descKey: "service_desc",
    Icon: Headphones,
  },
] as const;

export default function ValueProposition() {
  const t = useTranslations("value");

  return (
    <section className="py-24 md:py-32 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title={t("title")} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VALUE_CARDS.map((card, i) => (
            <ScrollReveal key={card.titleKey} delay={i * 0.15}>
              <div className="group relative bg-bg-card border border-border-gold rounded-lg p-8 text-center transition-all duration-300 hover:border-border-gold-hover hover:shadow-[0_0_30px_rgba(201,169,110,0.1)] hover:-translate-y-1">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                  <card.Icon size={32} className="text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-cream mb-3 uppercase tracking-wider">
                  {t(card.titleKey)}
                </h3>
                <p className="text-cream-muted text-sm leading-relaxed">
                  {t(card.descKey)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
