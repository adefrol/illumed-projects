import { imagesHestech } from "@/constants/images";
import { ICategory } from "@/interfaces/hestech-mobile/category.interface";

export const category: ICategory[] = [
  {
    id: 1,
    name: "men",
    img: imagesHestech.tShirt,
  },

  {
    id: 2,
    name: "women",
    img: imagesHestech.dress,
  },

  {
    id: 3,
    name: "kids",
    img: imagesHestech.cap,
  },
];
