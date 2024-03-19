import { ICollection } from "@/interfaces/hestech-mobile/collection.interface";
import { FC } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";
import { Heart } from "lucide-react";

interface IProps {
  collection: ICollection[];
}

export const CarouselCard: FC<IProps> = ({ collection }) => {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {collection.map((collection, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <div className="relative">
                <img
                  src={collection.img}
                  alt=""
                  width={1000}
                  height={1000}
                  className="h-full w-full rounded-lg"
                />
                <div className="bg-white rounded-full p-2 absolute top-4 right-4">
                  <Heart />
                </div>

                <div className="bg-white rounded-full p-2 absolute bottom-4 left-4">
                  <p className="uppercase text-[#252424] font-bold">
                    {collection.name}
                  </p>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
