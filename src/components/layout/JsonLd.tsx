import { SOCIAL_LINKS } from "@/lib/constants";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Natural Trade SRL",
    url: "https://www.naturaltrade.com.ar",
    description:
      "Global food trading company specializing in frozen and chilled proteins. 25+ years connecting producers with markets across Africa, Europe, Middle East, and Asia.",
    email: SOCIAL_LINKS.email,
    sameAs: [SOCIAL_LINKS.instagram, SOCIAL_LINKS.linkedin],
    areaServed: [
      { "@type": "Continent", name: "Africa" },
      { "@type": "Continent", name: "Europe" },
      { "@type": "Place", name: "Middle East" },
      { "@type": "Continent", name: "Asia" },
    ],
    knowsAbout: [
      "Frozen Proteins",
      "Chilled Proteins",
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
