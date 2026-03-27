"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { PRODUCTS, type ProductId } from "@/lib/constants";
import Modal from "../ui/Modal";
import Button from "../ui/Button";

interface ProductModalProps {
  productId: ProductId | null;
  onClose: () => void;
}

export default function ProductModal({ productId, onClose }: ProductModalProps) {
  const t = useTranslations("products");

  const product = PRODUCTS.find((p) => p.id === productId);

  if (!product) return <Modal isOpen={false} onClose={onClose}><div /></Modal>;

  return (
    <Modal isOpen={!!productId} onClose={onClose}>
      <div className="p-8 md:p-10">
        <div className="text-center mb-8">
          <Image
            src={product.icon}
            alt={t(product.id)}
            width={120}
            height={120}
            className="w-24 h-24 object-contain mx-auto mb-4"
          />
          <h3 className="font-serif text-3xl text-cream mb-2">
            {t(product.id)}
          </h3>
          <div className="w-12 h-px bg-gold mx-auto" />
        </div>

        <p className="text-cream-muted text-center leading-relaxed mb-8">
          {t("modal_desc", { product: t(product.id).toLowerCase() })}
        </p>

        <div className="flex justify-center">
          <Button
            variant="primary"
            onClick={() => {
              onClose();
              setTimeout(() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }, 300);
            }}
          >
            {t("request_quote")}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
