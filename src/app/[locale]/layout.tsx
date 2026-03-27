import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Inter, Playfair_Display } from "next/font/google";
import { routing } from "@/i18n/routing";
import Analytics from "@/components/layout/Analytics";
import JsonLd from "@/components/layout/JsonLd";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Natural Trade — Global Protein Trading | Frozen & Chilled Proteins",
  description:
    "Natural Trade SRL — 25+ years moving protein globally. Beef, pork, poultry, fish, lamb, goat, buffalo & turkey. Your trusted partner in Africa, Europe, Middle East & Asia.",
  keywords: [
    "protein trading",
    "frozen meat",
    "chilled proteins",
    "beef export",
    "global food trading",
    "meat broker",
    "Argentina meat export",
    "Natural Trade",
  ],
  openGraph: {
    title: "Natural Trade — We Move Protein. Globally.",
    description:
      "Your Trusted Global Protein Partner. 25+ years of expertise in frozen & chilled proteins.",
    url: "https://www.naturaltrade.com.ar",
    siteName: "Natural Trade",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Natural Trade — We Move Protein. Globally.",
    description: "Your Trusted Global Protein Partner.",
  },
  robots: { index: true, follow: true },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen bg-bg-primary text-cream font-sans antialiased overflow-x-hidden">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
