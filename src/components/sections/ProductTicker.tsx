"use client";

import { TICKER_ITEMS } from "@/lib/constants";

export default function ProductTicker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="relative overflow-hidden border-y border-border-gold bg-bg-secondary/50 py-5">
      <div
        className="flex whitespace-nowrap"
        style={{ animation: "marquee 30s linear infinite" }}
      >
        {items.map((item, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className="text-gold font-semibold text-sm md:text-base uppercase tracking-[0.3em] px-6 md:px-10">
              {item}
            </span>
            <span className="text-gold/40 text-lg">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
