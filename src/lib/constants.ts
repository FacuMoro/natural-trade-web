export const PRODUCTS = [
  { id: "beef", icon: "/products/beef.png" },
  { id: "pork", icon: "/products/pork.png" },
  { id: "poultry", icon: "/products/poultry.png" },
  { id: "fish", icon: "/products/fish.png" },
  { id: "lamb", icon: "/products/lamb.png" },
  { id: "goat", icon: "/products/goat.png" },
  { id: "buffalo", icon: "/products/buffalo.png" },
  { id: "turkey", icon: "/products/turkey.png" },
] as const;

export type ProductId = (typeof PRODUCTS)[number]["id"];

export const MARKETS = [
  {
    id: "africa",
    lat: 5,
    lng: 20,
    label: "Africa",
  },
  {
    id: "central_america",
    lat: 15,
    lng: -87,
    label: "Central America",
  },
  {
    id: "europe",
    lat: 50,
    lng: 10,
    label: "Europe",
  },
  {
    id: "middle_east",
    lat: 25,
    lng: 45,
    label: "Middle East",
  },
  {
    id: "asia",
    lat: 35,
    lng: 105,
    label: "Asia",
  },
] as const;

export type MarketId = (typeof MARKETS)[number]["id"];

export const ORIGIN = { lat: -34.6, lng: -58.4, label: "Argentina" };

export const NAV_LINKS = [
  { id: "home", href: "#home" },
  { id: "about", href: "#about" },
  { id: "products", href: "#products" },
  { id: "markets", href: "#markets" },
  { id: "blog", href: "#blog" },
  { id: "contact", href: "#contact" },
] as const;

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/company/natural-trade-srl",
  email: "ms@naturaltrade.com.ar",
  website: "https://www.naturaltrade.com.ar",
} as const;

export const COMPANY_ADDRESS = {
  street: "Alicia Moreau de Justo 1848",
  floor: "4th Floor, Office 25",
  postalCode: "C1107AFB",
  city: "Buenos Aires",
  country: "Argentina",
} as const;

export const TICKER_ITEMS = [
  "BEEF",
  "PORK",
  "POULTRY",
  "FISH",
  "LAMB",
  "GOAT",
  "BUFFALO",
  "TURKEY",
] as const;
