"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

interface CutCardProps {
  name: string;
  image: string;
  noImageLabel: string;
  scientificName?: string;
}

export default function CutCard({ name, image, noImageLabel, scientificName }: CutCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      className="flex flex-col items-center gap-4 group"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative w-40 h-40 md:w-48 md:h-48">
        <div className="absolute inset-0 rounded-full border-[3px] border-gold/70 group-hover:border-gold transition-colors duration-300" />

        <div className="absolute inset-[6px] rounded-full bg-white overflow-hidden flex items-center justify-center">
          {!imgError ? (
            <Image
              src={image}
              alt={name}
              fill
              className="object-contain p-4"
              onError={() => setImgError(true)}
            />
          ) : (
            <span className="text-stone-400 text-xs text-center px-4">
              {noImageLabel}
            </span>
          )}
        </div>
      </div>

      <div className="text-center">
        <span className="text-cream font-semibold text-sm md:text-base uppercase tracking-wider group-hover:text-gold transition-colors duration-300 block">
          {name}
        </span>
        {scientificName && (
          <span className="text-cream-muted text-xs italic block mt-1">
            ({scientificName})
          </span>
        )}
      </div>
    </motion.div>
  );
}
