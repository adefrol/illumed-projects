import { Button } from "@/components/ui/button";
import { colors } from "@/constants/colors";
import { imagesFurniture } from "@/constants/images";

export const MainSection = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="">
        <p className="max-w-[540px] text-[55px] font- text-white drop-shadow-title shadow-black font-montserrat-alternates">
          «Преобразуйте свое пространство элегантно».
        </p>

        <div className="flex items-center gap-[25px] mt-[70px]">
          <Button
            className="rounded-full font-montserrat-alternates text-black text-[20px] font-normal"
            style={{ backgroundColor: colors.yellow }}
            size={"lg"}
          >
            Купить сейчас
          </Button>

          <Button
            className="rounded-full font-montserrat-alternates text-white text-[20px] font-normal"
            style={{ backgroundColor: "transparent" }}
            size={"lg"}
            variant={"outline"}
          >
            Подробнее
          </Button>
        </div>
      </div>

      <img src={imagesFurniture.mainImage} alt="mainImage" />
    </div>
  );
};
