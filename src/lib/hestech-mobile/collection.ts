import { imagesHestech } from "@/constants/images";
import { ICollection } from "@/interfaces/hestech-mobile/collection.interface";

export const collection: ICollection[] = [
  {
    id: 1,
    name: "коллекция толстовок",
    img: imagesHestech.hoody,
  },

  {
    id: 2,
    name: "коллекция курток",
    img: imagesHestech.jacket,
  },

  {
    id: 3,
    name: "коллекция костюмов",
    img: imagesHestech.costume,
  },
];
