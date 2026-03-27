"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";
import LanguageSelector from "./LanguageSelector";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-black ${
          scrolled
            ? "border-b border-border-gold shadow-lg"
            : ""
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          <a href="#home" className="shrink-0">
            <Image
              src="/logo.png"
              alt="Natural Trade"
              width={140}
              height={56}
              className="h-14 w-auto object-contain"
              priority
            />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-cream-muted hover:text-gold transition-colors text-sm uppercase tracking-wider font-medium relative group"
              >
                {t(link.id)}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden lg:block">
              <LanguageSelector />
            </div>
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden text-cream hover:text-gold transition-colors cursor-pointer"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
