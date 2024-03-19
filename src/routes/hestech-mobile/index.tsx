import { Header } from "@/components/hestech-mobile/header";
import { CategorySection } from "@/components/hestech-mobile/sections/category-section";
import { CollectionSection } from "@/components/hestech-mobile/sections/collection-section";
import { FooterBarMenu } from "@/components/hestech-mobile/sections/footer-bar-menu";
import { ProductsSection } from "@/components/hestech-mobile/sections/products-section";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/hestech-mobile/")({
  component: () => <Home />,
});

const Home = () => {
  return (
    <>
      <div className="bg-[#282323]">
        <div className="p-[20px]">
          <Header />

          <div className="my-[30px]">
            <CategorySection />
          </div>
        </div>

        <div className="bg-white px-[20px] py-[40px] rounded-t-3xl">
          <CollectionSection />
        </div>

        <div className="bg-white mb-20">
          <ProductsSection />
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-[#282323] py-4 z-50">
        <FooterBarMenu />
      </div>
    </>
  );
};
