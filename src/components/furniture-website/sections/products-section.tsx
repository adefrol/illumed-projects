import { Button } from "@/components/ui/button";
import { colors } from "@/constants/colors";
import { ProductCard } from "../product-card";
import { products } from "@/lib/furniture-website/products";

export const ProductsSection = () => {
  return (
    <div className="flex items-center">
      <div className="max-w-[228px]">
        <p className="text-[34px] font-semibold text-[#2F2F2F]">
          Crafted with excellent material.
        </p>

        <p className="text-[14px] text-[#6A6A6A]">
          Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
          vivethe as it was for us to know what was to be done.
        </p>

        <Button
          className="rounded-full max-w-[160px] w-full mt-[5px]"
          size={"lg"}
          style={{ backgroundColor: colors.green }}
        >
          Explore
        </Button>
      </div>

      <div className="">
        <ProductCard products={products} />
      </div>
    </div>
  );
};
