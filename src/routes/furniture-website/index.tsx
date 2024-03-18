import { Header } from "@/components/furniture-website/header";
import { ChooseUs } from "@/components/furniture-website/sections/choose-us-section";
import { ContactSection } from "@/components/furniture-website/sections/contact-section";
import { Footer } from "@/components/furniture-website/sections/footer";
import { HelpSection } from "@/components/furniture-website/sections/help-section";
import { MainSection } from "@/components/furniture-website/sections/main-section";
import { ProductsSection } from "@/components/furniture-website/sections/products-section";
import { RecentlyBlog } from "@/components/furniture-website/sections/recently-blog-section";
import { Testimonials } from "@/components/furniture-website/sections/testimonials-section";
import { colors } from "@/constants/colors";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/furniture-website/")({
  component: () => <Home />,
});

export const Home = () => {
  return (
    <div className="font-poppins">
      <div style={{ backgroundColor: colors.green }} className=" h-screen">
        <div className="px-[100px] py-[30px]">
          <Header />
        </div>

        <div className="mt-[150px] px-[100px]">
          <MainSection />
        </div>
      </div>

      <div className="bg-[#e2f5ef] px-[100px]">
        <div className="pt-[250px] ">
          <ProductsSection />
        </div>

        <div className="mt-[250px]">
          <ChooseUs />
        </div>

        <div className="mt-[250px]">
          <HelpSection />
        </div>

        <div className="mt-[250px]">
          <Testimonials />
        </div>

        <div className="mt-[250px] pb-[335px]">
          <RecentlyBlog />
        </div>
      </div>

      <div className=" px-[100px]">
        <ContactSection />
      </div>

      <div className="mt-[100px] px-[100px]">
        <Footer />
      </div>
    </div>
  );
};
