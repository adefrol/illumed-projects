import { Menu, Search } from "lucide-react";
import { FC } from "react";

export const HeaderTooltips: FC = () => {
  return (
    <div className="flex items-center gap-[60px]">
      <Search />
      <Menu />
    </div>
  );
};
