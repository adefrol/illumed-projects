import { imagesFurniture } from "@/constants/images";
import { FC } from "react";

export const Logo: FC = () => {
  return (
    <div className="">
      <img src={imagesFurniture.logo} alt="logo" width={100} height={100} />
    </div>
  );
};
