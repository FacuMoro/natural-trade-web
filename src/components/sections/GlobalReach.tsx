"use client";

import { useTranslations } from "next-intl";
import { MapPin } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import ScrollReveal from "../ui/ScrollReveal";
import GlobeVisualization from "./GlobeVisualization";

const MARKET_KEYS = ["africa", "central_america", "europe", "middle_east", "asia"] as const;

export default function GlobalReach() {
  const t = useTranslations("markets");

  return (
    <section id="markets" className="py-24 md:py-32 bg-bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title={t("title")} subtitle={t("subtitle")} />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <ScrollReveal className="lg:col-span-3" delay={0.1}>
            <GlobeVisualization />
          </ScrollReveal>

          <ScrollReveal
            className="lg:col-span-2"
            direction="right"
            delay={0.3}
          >
            <div className="space-y-6">
              {MARKET_KEYS.map((key) => (
                <div
                  key={key}
                  className="flex items-center gap-4 p-4 rounded-lg border border-border-gold bg-bg-card/50 hover:border-border-gold-hover transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                    <MapPin size={20} className="text-gold" />
                  </div>
                  <span className="text-cream font-semibold text-lg uppercase tracking-wider">
                    {t(key)}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
