import { imagesFurniture } from "@/constants/images";
import { Title } from "../section-title";
import { ServicesCard } from "../services-card";

export const ChooseUs = () => {
  return (
    <div className="flex items-start justify-between">
      <div className="max-w-[505px]">
        <Title
          title="Почему именно мы"
          subtitle="Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was for us to know what was to be done. the"
        />

        <div className="mt-[30px]">
          <ServicesCard />
        </div>
      </div>
      <img src={imagesFurniture.chooseImage} alt="" />
    </div>
  );
};
