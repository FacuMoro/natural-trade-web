"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { MapPin } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import ScrollReveal from "../ui/ScrollReveal";
import GlobeVisualization from "./GlobeVisualization";
import type { MarketId } from "@/lib/constants";

const MARKET_KEYS = ["africa", "central_america", "europe", "middle_east", "asia"] as const;

export default function GlobalReach() {
  const t = useTranslations("markets");
  const [hoveredMarket, setHoveredMarket] = useState<MarketId | null>(null);

  return (
    <section id="markets" className="py-24 md:py-32 bg-bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title={t("title")} subtitle={t("subtitle")} />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <ScrollReveal className="lg:col-span-3" delay={0.1}>
            <GlobeVisualization hoveredMarket={hoveredMarket} />
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
                  onMouseEnter={() => setHoveredMarket(key)}
                  onMouseLeave={() => setHoveredMarket(null)}
                  className={`flex items-center gap-4 p-4 rounded-lg border transition-all duration-300 cursor-pointer group ${
                    hoveredMarket === key
                      ? "border-gold bg-gold/10 scale-[1.02] shadow-lg shadow-gold/10"
                      : "border-border-gold bg-bg-card/50 hover:border-border-gold-hover"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      hoveredMarket === key
                        ? "bg-gold/30"
                        : "bg-gold/10 group-hover:bg-gold/20"
                    }`}
                  >
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
