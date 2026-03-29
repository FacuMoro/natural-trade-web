"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { PRODUCTS, type ProductId } from "@/lib/constants";
import type { Cut } from "@/lib/cuts";
import CutCard from "../ui/CutCard";
import Button from "../ui/Button";
import GoldDivider from "../ui/GoldDivider";

interface ProductCutsPageProps {
  productId: ProductId;
  cuts: Cut[];
}

export default function ProductCutsPage({ productId, cuts }: ProductCutsPageProps) {
  const t = useTranslations("products");
  const ct = useTranslations("cuts");
  const cp = useTranslations("cuts_page");
  const locale = useLocale();

  const product = PRODUCTS.find((p) => p.id === productId)!;
  const productName = t(productId);

  return (
    <main className="pt-24">
      {/* Hero header */}
      <section className="relative bg-bg-secondary py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            href={`/${locale}/#products`}
            className="inline-flex items-center gap-2 text-cream-muted hover:text-gold transition-colors text-sm mb-8 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            {cp("back")}
          </Link>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-32 h-32 md:w-40 md:h-40 relative shrink-0"
            >
              <Image
                src={product.icon}
                alt={productName}
                fill
                className="object-contain"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="font-serif text-4xl md:text-5xl text-cream mb-4">
                {cp("title", { product: productName })}
              </h1>
              <div className="w-16 h-px bg-gold mb-4" />
              <p className="text-cream-muted text-lg max-w-2xl">
                {cp("subtitle", { product: productName.toLowerCase() })}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Cuts grid */}
      <section className="py-16 md:py-24 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 md:gap-12 justify-items-center">
            {cuts.map((cut, i) => (
              <motion.div
                key={cut.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <CutCard
                  name={ct(cut.id)}
                  image={cut.image}
                  noImageLabel={cp("no_image")}
                  scientificName={cut.scientificName}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-bg-secondary">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl text-cream mb-6">
            {cp("request_quote")}
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mb-6" />
          <p className="text-cream-muted mb-8">
            {t("modal_desc", { product: productName.toLowerCase() })}
          </p>
          <Link href={`/${locale}/#contact`}>
            <Button variant="primary" size="lg">
              {cp("request_quote")}
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
