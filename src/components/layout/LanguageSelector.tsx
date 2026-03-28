"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { routing, type Locale } from "@/i18n/routing";

const LOCALE_CONFIG: Record<Locale, { label: string; flag: string; name: string }> = {
  en: { label: "EN", flag: "🇺🇸", name: "English" },
  es: { label: "ES", flag: "🇦🇷", name: "Español" },
  fr: { label: "FR", flag: "🇫🇷", name: "Français" },
  pt: { label: "PT", flag: "🇧🇷", name: "Português" },
  zh: { label: "ZH", flag: "🇨🇳", name: "中文" },
};

export default function LanguageSelector() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function switchLocale(newLocale: Locale) {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
    setIsOpen(false);
  }

  const current = LOCALE_CONFIG[locale];

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 text-cream-muted hover:text-gold transition-colors text-sm uppercase tracking-wider cursor-pointer"
        aria-label="Select language"
      >
        <span className="text-base leading-none">{current.flag}</span>
        <span>{current.label}</span>
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 bg-bg-card border border-border-gold rounded-md shadow-lg overflow-hidden min-w-[160px] z-50">
          {routing.locales.map((loc) => {
            const config = LOCALE_CONFIG[loc];
            return (
              <button
                key={loc}
                onClick={() => switchLocale(loc)}
                className={`w-full px-4 py-2.5 text-left text-sm transition-colors cursor-pointer flex items-center gap-3 ${
                  loc === locale
                    ? "text-gold bg-gold/10"
                    : "text-cream-muted hover:text-cream hover:bg-white/5"
                }`}
              >
                <span className="text-base leading-none">{config.flag}</span>
                <span>{config.name}</span>
                <span className="text-xs opacity-50 ml-auto">{config.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
