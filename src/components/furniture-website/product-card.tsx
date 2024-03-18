import { IProduct } from "@/interfaces/furniture-website/products.interface";
import { cn } from "@/lib/utils";
import { FC, useState } from "react";

interface IProps {
  products: IProduct[];
}

export const ProductCard: FC<IProps> = ({ products }) => {
  const [visible, setVisible] = useState<number | null>(null);

  return (
    <div className="flex items-center gap-[42px] h-fit">
      {products.map((product) => (
        <div
          key={product.id}
          onMouseEnter={() => setVisible(product.id)}
          onMouseLeave={() => setVisible(null)}
          className="text-center relative bg-[#dde5e4] rounded-[20px] w-[300px] min-h-fit hover:shadow-[0px_5px_5px] hover:shadow-black/50
            transition duration-300
          "
        >
          <div className="relative -top-20">
            <div className="flex items-center justify-center">
              <img src={product.img} alt="" className="" />
            </div>
            <p className="font-bold text-base">{product.title}</p>
            <p className="font-bold text-[18px]">
              {parseFloat(product.price.toString()).toLocaleString("ru-RU", {
                currency: "RUB",
                minimumFractionDigits: 2,
                style: "currency",
              })}
            </p>
          </div>

          <div
            className={cn(
              "bg-[#2F2F2F] opacity-0 transition-opacity duration-300 w-[35px] h-[35px] rounded-full absolute left-[50%] right-[50%] -translate-y-[50%] -translate-x-[50%]",
              {
                "opacity-100 transition-opacity duration-300":
                  visible === product.id,
              }
            )}
          />
        </div>
      ))}
    </div>
  );
};
