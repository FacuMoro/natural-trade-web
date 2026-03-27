"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, ExternalLink, CheckCircle, AlertCircle } from "lucide-react";
import { InstagramIcon, LinkedinIcon } from "../ui/SocialIcons";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { SOCIAL_LINKS, PRODUCTS } from "@/lib/constants";
import SectionTitle from "../ui/SectionTitle";
import ScrollReveal from "../ui/ScrollReveal";
import Button from "../ui/Button";

export default function ContactSection() {
  const t = useTranslations("contact");
  const pt = useTranslations("products");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  async function onSubmit(data: ContactFormData) {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  }

  const inputClasses =
    "w-full bg-bg-card border border-border-gold rounded-md px-4 py-3 text-cream placeholder:text-cream-dim focus:outline-none focus:border-gold transition-colors duration-300 text-sm";

  return (
    <section id="contact" className="py-24 md:py-32 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title={t("title")} subtitle={t("subtitle")} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <ScrollReveal direction="left">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <input
                    {...register("name")}
                    placeholder={t("name")}
                    className={inputClasses}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <input
                    {...register("company")}
                    placeholder={t("company")}
                    className={inputClasses}
                  />
                  {errors.company && (
                    <p className="text-red-400 text-xs mt-1">{errors.company.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder={t("email")}
                    className={inputClasses}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <input
                    {...register("phone")}
                    type="tel"
                    placeholder={t("phone")}
                    className={inputClasses}
                  />
                </div>
              </div>

              <div>
                <select
                  {...register("product")}
                  className={`${inputClasses} appearance-none`}
                  defaultValue=""
                >
                  <option value="" disabled>
                    {t("select_product")}
                  </option>
                  {PRODUCTS.map((p) => (
                    <option key={p.id} value={p.id} className="bg-bg-card">
                      {pt(p.id)}
                    </option>
                  ))}
                </select>
                {errors.product && (
                  <p className="text-red-400 text-xs mt-1">{errors.product.message}</p>
                )}
              </div>

              <div>
                <textarea
                  {...register("message")}
                  rows={5}
                  placeholder={t("message_placeholder")}
                  className={`${inputClasses} resize-none`}
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
                )}
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                loading={status === "loading"}
                className="w-full"
              >
                {status === "loading" ? t("sending") : t("send")}
              </Button>

              {status === "success" && (
                <div className="flex items-center gap-2 text-green-400 text-sm">
                  <CheckCircle size={16} />
                  {t("success")}
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-2 text-red-400 text-sm">
                  <AlertCircle size={16} />
                  {t("error")}
                </div>
              )}
            </form>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <div className="flex flex-col justify-center h-full space-y-8">
              <div>
                <h3 className="font-serif text-2xl text-cream mb-6">
                  {t("subtitle")}
                </h3>
                <p className="text-cream-muted leading-relaxed">
                  {t("description")}
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href={`mailto:${SOCIAL_LINKS.email}`}
                  className="flex items-center gap-3 text-cream-muted hover:text-gold transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <Mail size={18} className="text-gold" />
                  </div>
                  <span>{SOCIAL_LINKS.email}</span>
                </a>

                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-cream-muted hover:text-gold transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <InstagramIcon size={18} className="text-gold" />
                  </div>
                  <span>@natural.trade</span>
                </a>

                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-cream-muted hover:text-gold transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <LinkedinIcon size={18} className="text-gold" />
                  </div>
                  <span>Natural Trade SRL</span>
                </a>

                <a
                  href={SOCIAL_LINKS.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-cream-muted hover:text-gold transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <ExternalLink size={18} className="text-gold" />
                  </div>
                  <span>www.naturaltrade.com.ar</span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
