"use client";

import ScrollReveal from "./ScrollReveal";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  className = "",
}: SectionTitleProps) {
  return (
    <ScrollReveal className={`text-center mb-16 ${className}`}>
      <h2 className="font-serif text-4xl md:text-5xl text-cream mb-4">
        {title}
      </h2>
      <div className="w-16 h-px bg-gold mx-auto mb-6" />
      {subtitle && (
        <p className="text-cream-muted text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
    </ScrollReveal>
  );
}
