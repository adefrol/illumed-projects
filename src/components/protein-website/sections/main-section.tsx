import { sectionItems } from "@/lib/protein-website/section-items";
import { FC } from "react";
import { useSlider } from "../context/slider-context";

export const MainSection: FC = () => {
  const { slideIndex } = useSlider();

  return (
    <>
      {
        sectionItems.map((item) => (
          <div key={item.id} className="">
            {item.content}
          </div>
        ))[slideIndex]
      }
    </>
  );
};
