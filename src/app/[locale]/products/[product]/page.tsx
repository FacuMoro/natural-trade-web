import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { PRODUCTS, type ProductId } from "@/lib/constants";
import { CUTS } from "@/lib/cuts";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCutsPage from "@/components/sections/ProductCutsPage";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const VALID_PRODUCTS = PRODUCTS.map((p) => p.id);

interface Props {
  params: Promise<{ locale: string; product: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ product: p.id }));
}

export async function generateMetadata({ params }: Props) {
  const { product } = await params;

  if (!VALID_PRODUCTS.includes(product as ProductId)) return {};

  const t = await getTranslations("products");
  const productName = t(product as ProductId);

  return {
    title: `${productName} Cuts — Natural Trade`,
    description: `Premium ${productName.toLowerCase()} cuts available for export. Explore our full selection of frozen and chilled ${productName.toLowerCase()} products.`,
  };
}

export default async function ProductPage({ params }: Props) {
  const { product } = await params;

  if (!VALID_PRODUCTS.includes(product as ProductId)) {
    notFound();
  }

  const productId = product as ProductId;
  const cuts = CUTS[productId] ?? [];

  return (
    <>
      <Navbar />
      <ProductCutsPage productId={productId} cuts={cuts} />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
