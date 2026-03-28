import { SOCIAL_LINKS, COMPANY_ADDRESS } from "@/lib/constants";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Natural Trade SRL",
    url: "https://www.naturaltrade.com.ar",
    description:
      "Global food trading company specializing in frozen and chilled products. 25+ years connecting producers with markets across Africa, Central America, Europe, Middle East, and Asia.",
    email: SOCIAL_LINKS.email,
    sameAs: [SOCIAL_LINKS.linkedin],
    address: {
      "@type": "PostalAddress",
      streetAddress: `${COMPANY_ADDRESS.street}, ${COMPANY_ADDRESS.floor}`,
      addressLocality: COMPANY_ADDRESS.city,
      postalCode: COMPANY_ADDRESS.postalCode,
      addressCountry: COMPANY_ADDRESS.country,
    },
    areaServed: [
      { "@type": "Continent", name: "Africa" },
      { "@type": "Place", name: "Central America" },
      { "@type": "Continent", name: "Europe" },
      { "@type": "Place", name: "Middle East" },
      { "@type": "Continent", name: "Asia" },
    ],
    knowsAbout: [
      "Frozen Products",
      "Chilled Products",
      "Beef Trading",
      "Pork Trading",
      "Poultry Trading",
      "Fish Trading",
      "Lamb Trading",
      "Global Food Trade",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
