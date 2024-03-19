import { IProduct } from "@/interfaces/hestech-mobile/product.interface";
import { Heart } from "lucide-react";
import { FC } from "react";
import { toast } from "sonner";

interface IProps {
  products: IProduct[];
}

export const ProductCard: FC<IProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-2 place-items-center gap-4">
      {products.map((product) => (
        <div key={product.id} className="py-5">
          <div className="bg-[#ebebeb] w-[150px] rounded-xl h-fit py-10 relative">
            <img src={product.img} alt="" />
            <div className="absolute top-4 right-2">
              <Heart onClick={() => toast.success("Добавлено в избранное")} />
            </div>
          </div>

          <p className="uppercase text-sm font-semibold">{product.name}</p>
          <p className="uppercase text-sm font-semibold">
            {parseFloat(product.price.toString()).toLocaleString("ru-RU", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
              style: "currency",
              currency: "RUB",
            })}
          </p>
        </div>
      ))}
    </div>
  );
};
