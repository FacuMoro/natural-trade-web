import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "es", "fr", "pt", "zh"],
  defaultLocale: "en",
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
