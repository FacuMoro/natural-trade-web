"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useTranslations } from "next-intl";
import { NAV_LINKS } from "@/lib/constants";
import LanguageSelector from "./LanguageSelector";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const t = useTranslations("nav");

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed top-0 right-0 h-full w-72 bg-bg-secondary border-l border-border-gold z-50 lg:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
          >
            <div className="flex items-center justify-between p-6 border-b border-border-gold">
              <span className="font-serif text-gold text-lg">Menu</span>
              <button
                onClick={onClose}
                className="text-cream-muted hover:text-gold transition-colors cursor-pointer"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col p-6 gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  onClick={onClose}
                  className="text-cream hover:text-gold transition-colors py-3 text-lg uppercase tracking-wider border-b border-border-gold"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  {t(link.id)}
                </motion.a>
              ))}
            </nav>

            <div className="p-6 border-t border-border-gold">
              <LanguageSelector />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
