import { SliderProvider } from "@/components/protein-website/context/slider-context";
import { Header } from "@/components/protein-website/header";
import { Footer } from "@/components/protein-website/sections/footer";
import { MainSection } from "@/components/protein-website/sections/main-section";
import { Sidebar } from "@/components/protein-website/side-bar";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/protein-website/")({
  component: () => <Home />,
});

const Home = () => {
  return (
    <SliderProvider>
      <div className="">
        <div className="flex items-start h-svh gap-[90px]">
          <Sidebar />
          <div className="w-full py-[90px]">
            <Header />

            <MainSection />
          </div>
        </div>
        <div className="">
          <Footer />
        </div>
      </div>
    </SliderProvider>
  );
};
