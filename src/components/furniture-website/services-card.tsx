import { colors } from "@/constants/colors";
import { Clock, GitCompareArrows, ShoppingBag, Truck } from "lucide-react";
import { FC } from "react";

const services = [
  {
    id: 1,
    icon: <Truck size={30} />,
    title: "Быстрая и бесплатная доставка",
    description:
      "Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was",
  },

  {
    id: 2,
    icon: <ShoppingBag size={30} />,
    title: "Простая покупка",
    description:
      "Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was",
  },

  {
    id: 3,
    icon: <Clock size={30} />,
    title: "24/7 Поддержка",
    description:
      "Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was",
  },

  {
    id: 4,
    icon: <GitCompareArrows size={30} />,
    title: "Возврат без проблем",
    description:
      "Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was",
  },
];

export const ServicesCard: FC = () => {
  return (
    <div className="grid grid-cols-2 gap-[25px]">
      {services.map((service) => (
        <div key={service.id} className="flex flex-col gap-[10px]">
          <div className="relative">
            {service.icon}
            <div
              className="w-[32px] h-[32px] rounded-full absolute top-1.5 left-2"
              style={{ backgroundColor: colors.green, opacity: 0.2 }}
            />
          </div>

          <p className="text-[14px] text-[#2F2F2F] font-semibold">
            {service.title}
          </p>

          <p className="text-[14px] text-[#6A6A6A]">{service.description}</p>
        </div>
      ))}
    </div>
  );
};
