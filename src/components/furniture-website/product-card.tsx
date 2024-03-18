import { IProduct } from "@/interfaces/furniture-website/products.interface";
import { FC } from "react";

interface IProps {
  products: IProduct[];
}

export const ProductCard: FC<IProps> = ({ products }) => {
  return <div className=""></div>;
};
