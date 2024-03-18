import { Header } from "@/components/furniture-website/header";
import { MainSection } from "@/components/furniture-website/sections/main-section";
import { ProductsSection } from "@/components/furniture-website/sections/products-section";
import { colors } from "@/constants/colors";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/furniture-website/")({
  component: () => <Home />,
});

export const Home = () => {
  return (
    <div className="font-poppins">
      <div
        style={{ backgroundColor: colors.green }}
        className="px-[100px] py-[30px] h-screen"
      >
        <Header />

        <div className="mt-[150px]">
          <MainSection />
        </div>

        <div className="mt-[250px]">
          <ProductsSection />
        </div>
      </div>
    </div>
  );
};
