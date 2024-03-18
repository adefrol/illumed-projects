import { Button } from "@/components/ui/button";
import { colors } from "@/constants/colors";
import { ProductCard } from "../product-card";
import { products } from "@/lib/furniture-website/products";
import { Title } from "../section-title";

export const ProductsSection = () => {
  return (
    <div className="flex items-start justify-between">
      <div className="max-w-[228px]">
        <Title
          subtitle="Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
          vivethe as it was for us to know what was to be done."
          title="Изготовлен из превосходного материала"
        />

        <Button
          className="rounded-full font-montserrat-alternates max-w-[160px] w-full mt-[5px]"
          size={"lg"}
          style={{ backgroundColor: colors.green }}
        >
          Подробнее
        </Button>
      </div>

      <div className="">
        <ProductCard products={products} />
      </div>
    </div>
  );
};
