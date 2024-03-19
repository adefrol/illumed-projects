import { sectionItems } from "@/lib/protein-website/section-items";
import { FC, createContext, useContext, useState } from "react";

type SliderContextType = {
  slideIndex: number;
  setSlideIndex: (index: number) => void;
  slideLeft: () => void;
  slideRight: () => void;
};

const SliderContext = createContext<SliderContextType>({
  slideIndex: 0,
  setSlideIndex: (index: number) => {},
  slideLeft: () => {},
  slideRight: () => {},
});

const SliderProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const slideLeft = () => {
    if (slideIndex > 0) {
      setSlideIndex((prev) => prev - 1);
    }
  };

  const slideRight = () => {
    if (slideIndex < sectionItems.length - 1) {
      setSlideIndex((prev) => prev + 1);
    }
  };

  return (
    <SliderContext.Provider
      value={{
        slideIndex,
        setSlideIndex,
        slideLeft,
        slideRight,
      }}
    >
      {children}
    </SliderContext.Provider>
  );
};

export const useSlider = () => {
  const context = useContext(SliderContext);

  if (!context) {
    throw new Error("useSlider must be used within a SliderProvider");
  }

  return context;
};

export { SliderContext, SliderProvider };
