import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FC } from "react";
import { useSlider } from "../context/slider-context";
import { cn } from "@/lib/utils";
import { sectionItems } from "@/lib/protein-website/section-items";

export const Footer: FC = () => {
  const { slideRight, slideLeft, slideIndex } = useSlider();

  return (
    <div className="flex items-center justify-between">
      <div className="bg-[#1b1b1b] h-40 w-1/2">
        <div className="w-1/5 mx-[120px]">
          <p className="text-4xl  pt-[30px] text-[#d0d0d0] font-light w-fit">
            Связаться
          </p>

          <div className="w-full h-0.5 bg-[#d0d0d0] mt-[10px]" />
        </div>

        <div className="font-extralight mt-[20px] flex items-center mx-[120px] gap-[90px]">
          <p className="text-[#d0d0d0] ">example@mail.ru</p>
          <p className="text-[#d0d0d0] ">+44 236 293 42 40</p>
        </div>
      </div>

      <div className="flex flex-col">
        <Button
          onClick={() => slideLeft()}
          className={cn("p-10 bg-[#d1d1d1] hover:bg-[#d1d1d1]", {
            "bg-[#1b1b1b] hover:bg-[#1b1b1]": slideIndex !== 0,
          })}
        >
          <ChevronLeft className="" />
        </Button>

        <Button
          variant={"default"}
          onClick={() => slideRight()}
          className={cn("bg-[#d1d1d1] p-10 hover:bg-[#d1d1d1]", {
            "bg-[#1b1b1b] hover:bg-[#1b1b1]":
              slideIndex < sectionItems.length - 1,
          })}
        >
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
};
