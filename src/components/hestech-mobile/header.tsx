import { Search, ShoppingBag } from "lucide-react";
import { FC } from "react";
import { Logo } from "./logo";

export const Header: FC = () => {
  return (
    <div className="flex items-center justify-between">
      <Search color="white" />
      <Logo />
      <div className="relative">
        <ShoppingBag color="white" />
        <div className="w-2 h-2 rounded-full bg-red-500 absolute top-0 right-0" />
      </div>
    </div>
  );
};
