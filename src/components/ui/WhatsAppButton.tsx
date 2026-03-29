"use client";

import { MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";

const WHATSAPP_NUMBER = "5491161165005";

export default function WhatsAppButton() {
  const t = useTranslations("whatsapp");

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t("message"))}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label={t("aria_label")}
      style={{ animation: "pulse-gold 3s infinite" }}
    >
      <MessageCircle size={28} className="text-white" fill="white" />
    </a>
  );
}
