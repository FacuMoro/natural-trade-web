"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Mail, ExternalLink } from "lucide-react";
import { InstagramIcon, LinkedinIcon } from "../ui/SocialIcons";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import GoldDivider from "../ui/GoldDivider";

export default function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  return (
    <footer className="bg-bg-footer">
      <GoldDivider />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <a href="#home" className="inline-block mb-4">
              <Image
                src="/logo.png"
                alt="Natural Trade"
                width={140}
                height={56}
                className="h-14 w-auto object-contain"
              />
            </a>
            <p className="text-cream-muted text-sm leading-relaxed max-w-xs">
              {t("tagline")}
            </p>
          </div>

          <div>
            <h4 className="text-gold font-semibold uppercase tracking-wider text-sm mb-6">
              {t("quick_links")}
            </h4>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="text-cream-muted hover:text-gold transition-colors text-sm"
                >
                  {nav(link.id)}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-gold font-semibold uppercase tracking-wider text-sm mb-6">
              {t("contact_info")}
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="flex items-center gap-2 text-cream-muted hover:text-gold transition-colors text-sm"
              >
                <Mail size={16} />
                {SOCIAL_LINKS.email}
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cream-muted hover:text-gold transition-colors text-sm"
              >
                <InstagramIcon size={16} />
                @natural.trade
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cream-muted hover:text-gold transition-colors text-sm"
              >
                <LinkedinIcon size={16} />
                Natural Trade SRL
              </a>
              <a
                href={SOCIAL_LINKS.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cream-muted hover:text-gold transition-colors text-sm"
              >
                <ExternalLink size={16} />
                www.naturaltrade.com.ar
              </a>
            </div>
          </div>
        </div>

        <GoldDivider className="my-8 opacity-30" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-cream-dim text-xs">
          <p>{t("rights")}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold transition-colors">
              {t("privacy")}
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              {t("terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
