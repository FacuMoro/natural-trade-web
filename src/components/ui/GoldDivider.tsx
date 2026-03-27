"use client";

import { motion } from "framer-motion";

interface GoldDividerProps {
  className?: string;
  animated?: boolean;
}

export default function GoldDivider({
  className = "",
  animated = false,
}: GoldDividerProps) {
  if (animated) {
    return (
      <motion.div
        className={`h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto ${className}`}
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
        style={{ maxWidth: "200px" }}
      />
    );
  }

  return (
    <div
      className={`h-px bg-gradient-to-r from-transparent via-gold to-transparent ${className}`}
    />
  );
}
