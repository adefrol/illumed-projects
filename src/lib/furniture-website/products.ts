import { imagesFurniture } from "@/constants/images";
import { IProduct } from "@/interfaces/furniture-website/products.interface";

export const products: IProduct[] = [
  {
    id: 1,
    title: "Modern Chair",
    price: 60,
    img: imagesFurniture.product1,
  },

  {
    id: 2,
    title: "",
    price: 78,
    img: imagesFurniture.product2,
  },

  {
    id: 3,
    title: "",
    price: 88,
    img: imagesFurniture.product3,
  },
];
