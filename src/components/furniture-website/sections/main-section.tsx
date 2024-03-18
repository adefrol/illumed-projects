import { Button } from "@/components/ui/button";
import { colors } from "@/constants/colors";
import { imagesFurniture } from "@/constants/images";

export const MainSection = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="">
        <p className="max-w-[540px] text-[55px] font-DM text-white drop-shadow-title shadow-black">
          "Transform your space with elegance."
        </p>

        <div className="flex items-center gap-[25px] mt-[70px]">
          <Button
            className="rounded-full text-black text-[20px] font-normal"
            style={{ backgroundColor: colors.yellow }}
            size={"lg"}
          >
            Shop Now
          </Button>

          <Button
            className="rounded-full text-black text-[20px] font-normal"
            style={{ backgroundColor: "transparent" }}
            size={"lg"}
            variant={"outline"}
          >
            Explore
          </Button>
        </div>
      </div>

      <img src={imagesFurniture.mainImage} alt="mainImage" />
    </div>
  );
};
