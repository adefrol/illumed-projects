import { FC } from "react";
import { Logo } from "./logo";
import { Sidebar } from "./side-bar";
import { HeaderTooltips } from "./header-tooltips";
import { MainSection } from "./sections/main-section";

const navbar = [
  {
    id: 1,
    title: "Магазин",
  },

  {
    id: 2,
    title: "О нас",
  },

  {
    id: 3,
    title: "Продукты",
  },
];

// export const Header: FC = () => {
//   return (
//     <div className="">
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-[90px] w-full">
//           <Sidebar />

//           <div className="flex items-center gap-[90px]">
//             {navbar.map((item) => (
//               <div key={item.id} className="">
//                 <p className="text-lg font-semibold">{item.title}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//         <HeaderTooltips />
//       </div>

//       <MainSection />
//     </div>
//   );
// };

export const Header: FC = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-[90px] w-[80%]">
        {navbar.map((item) => (
          <div key={item.id} className="">
            <p className="text-lg font-semibold">{item.title}</p>
          </div>
        ))}
      </div>

      <div className="w-[20%]">
        <HeaderTooltips />
      </div>
    </div>
  );
};
