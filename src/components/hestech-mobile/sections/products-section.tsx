import { FC } from "react";
import { ProductCard } from "../product-card";
import { prodcuts } from "@/lib/hestech-mobile/products";

export const ProductsSection: FC = () => {
  return (
    <div className="">
      <ProductCard products={prodcuts} />
    </div>
  );
};
