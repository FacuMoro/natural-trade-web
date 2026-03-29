"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { PRODUCTS, type ProductId } from "@/lib/constants";
import SectionTitle from "../ui/SectionTitle";
import ScrollReveal from "../ui/ScrollReveal";

const PRODUCT_GRADIENTS: Record<ProductId, string> = {
  beef: "from-red-900/60 to-bg-card",
  pork: "from-rose-900/60 to-bg-card",
  poultry: "from-amber-900/60 to-bg-card",
  fish: "from-blue-900/60 to-bg-card",
  lamb: "from-orange-900/60 to-bg-card",
  goat: "from-stone-700/60 to-bg-card",
  buffalo: "from-zinc-700/60 to-bg-card",
  turkey: "from-yellow-900/60 to-bg-card",
};

export default function ProductsSection() {
  const t = useTranslations("products");
  const locale = useLocale();

  return (
    <section id="products" className="py-24 md:py-32 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title={t("title")} subtitle={t("subtitle")} />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {PRODUCTS.map((product, i) => (
            <ScrollReveal key={product.id} delay={i * 0.08}>
              <Link href={`/${locale}/products/${product.id}`}>
                <motion.div
                  className="relative w-full aspect-square rounded-lg overflow-hidden cursor-pointer border border-border-gold group"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={product.icon}
                    alt={t(product.id)}
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-gold text-xs font-semibold uppercase tracking-wider">
                      {t("view_cuts")}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </motion.div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
