import { FC } from "react";
import { CategoryItem } from "../category-item";
import { category } from "@/lib/hestech-mobile/category";
import { Settings2 } from "lucide-react";

export const CategorySection: FC = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="">
        <p className="uppercase font-semibold text-white text-md font-roboto">
          категории
        </p>
        <div className="mt-2">
          <CategoryItem category={category} />
        </div>
      </div>

      <div className="bg-white p-5 rounded-full border border-transparent">
        <Settings2 size={30} />
      </div>
    </div>
  );
};
