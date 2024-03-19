import { cn } from "@/lib/utils";
import { icons } from "lucide-react";
import { FC, useState } from "react";

const NavIcon = ({
  icon,
  color,
}: {
  icon: keyof typeof icons;
  color: string;
}) => {
  const Icon = icons[icon];

  return (
    <div className="">
      <Icon color={color} />
    </div>
  );
};

const navbar: { id: number; icon: keyof typeof icons }[] = [
  {
    id: 1,
    icon: "Home",
  },

  {
    id: 2,
    icon: "Heart",
  },

  {
    id: 3,
    icon: "User",
  },

  {
    id: 4,
    icon: "ShoppingBag",
  },
];

export const FooterBarMenu: FC = () => {
  const [focus, setFocus] = useState(navbar[0].id);

  return (
    <div className="flex items-center justify-between px-[20px]">
      {navbar.map((item) => (
        <div
          onClick={() => setFocus(item.id)}
          key={item.id}
          className={cn("transition duration-300 ease-linear rounded-full", {
            "bg-white rounded-full p-2 transition duration-300 ease-linear":
              focus === item.id,
          })}
        >
          <NavIcon
            icon={item.icon}
            color={focus === item.id ? "#252424" : "#ebebeb"}
          />
        </div>
      ))}
    </div>
  );
};
