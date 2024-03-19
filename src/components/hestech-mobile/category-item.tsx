import { ICategory } from "@/interfaces/hestech-mobile/category.interface";
import { FC } from "react";

interface IProps {
  category: ICategory[];
}

export const CategoryItem: FC<IProps> = ({ category }) => {
  return (
    <div className="flex items-center gap-[10px]">
      {category.map((category) => (
        <div
          key={category.id}
          className="flex items-center gap-[10px] bg-white rounded-full px-2 py-1"
        >
          <div className="bg-[#d9d9d9] rounded-full p-1">
            <img src={category.img} alt="" className="w-[15px]" />
          </div>
          <p className="capitalize">{category.name}</p>
        </div>
      ))}
    </div>
  );
};
