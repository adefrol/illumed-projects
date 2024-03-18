import { FC, useState } from "react";
import { Logo } from "./logo";
import { LinkProps } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { ShoppingCart } from "lucide-react";

const navbar = [
  {
    id: 1,
    title: "Главная",
    href: "/" as LinkProps["to"],
  },

  {
    id: 2,
    title: "О нас",
    href: "/" as LinkProps["to"],
  },

  {
    id: 3,
    title: "Сервисы",
    href: "/" as LinkProps["to"],
  },

  {
    id: 4,
    title: "Блог",
    href: "/" as LinkProps["to"],
  },

  {
    id: 5,
    title: "Связаться с нами",
    href: "/" as LinkProps["to"],
  },
];

export const Header: FC = () => {
  const [focus, setFocus] = useState(navbar[0].title);

  return (
    <div className="flex items-center justify-between">
      <Logo />

      <div className="flex items-center gap-[35px]">
        {navbar.map((nav) => (
          <div
            onClick={() => setFocus(nav.title)}
            key={nav.id}
            className="cursor-pointer"
          >
            <p
              className={cn("text-white text-[20px]", {
                "underline underline-offset-8 decoration-yellow-500 decoration-4":
                  focus === nav.title,
              })}
            >
              {nav.title}
            </p>
          </div>
        ))}

        <ShoppingCart className="cursor-pointer" color="white" />
      </div>
    </div>
  );
};
