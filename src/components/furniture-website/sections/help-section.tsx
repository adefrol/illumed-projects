import { Button } from "@/components/ui/button";
import { colors } from "@/constants/colors";
import { imagesFurniture } from "@/constants/images";
import { Title } from "../section-title";

export const HelpSection = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="pl-[208px] flex">
        <img
          src={imagesFurniture.help1}
          alt=""
          className="rounded-lg max-w-[425px] w-full"
        />
        <div className="">
          <img src={imagesFurniture.help3} alt="" className="m-[10px]" />
          <img
            src={imagesFurniture.help2}
            alt=""
            className="relative -left-10"
          />
        </div>
      </div>

      <div className="max-w-[445px] flex flex-col gap-[30px]">
        <Title
          title="Мы поможем вам создать современный дизайн интерьера"
          subtitle="Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was for us to know what was to be done. the this is a long  post for the text.`This small text has to be place here, since this is a place holder. You can also chane it."
        />

        <div className="grid grid-cols-2 gap-[20px] text-[#6A6A6A]">
          <li className="">Donec mattis porta eros,let aliquet finibus ri</li>
          <li>Donec mattis porta eros,let aliquet finibus ri</li>
          <li>Donec mattis porta eros,let aliquet finibus ri</li>
          <li>Donec mattis porta eros,let aliquet finibus ri</li>
        </div>

        <Button
          className="rounded-full font-normal w-fit font-montserrat-alternates"
          style={{ backgroundColor: colors.green }}
          size={"lg"}
        >
          Подробнее
        </Button>
      </div>
    </div>
  );
};
