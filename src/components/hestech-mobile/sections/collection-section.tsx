import { FC } from "react";
import { CarouselCard } from "../carousel-card";
import { collection } from "@/lib/hestech-mobile/collection";

export const CollectionSection: FC = () => {
  return (
    <div className="px-10">
      <p className="text-[#252424] uppercase text-4xl font-bold font-poppins text-center">
        коллекции
      </p>

      <div className="flex justify-center mt-[20px]">
        <CarouselCard collection={collection} />
      </div>
    </div>
  );
};
