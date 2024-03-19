import { FC } from "react";
import { Logo } from "./logo";

export const Sidebar: FC = () => {
  return (
    <div className="border-r border-[#1b1b1b] h-full">
      <Logo />
    </div>
  );
};
