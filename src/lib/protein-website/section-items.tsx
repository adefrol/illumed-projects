import { imagesProtein } from "@/constants/images";

export const sectionItems = [
  {
    id: 1,
    content: (
      <div className="mt-[200px] flex items-center gap-[200px]">
        <div className="max-w-[500px] flex flex-col gap-[20px]">
          <p className="uppercase text-xl font-semibold">
            органические & растительные
          </p>

          <p className="text-6xl font-bold uppercase ">
            эффективные протеины &#174;
          </p>

          <p className="text-[#9f9f9f]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
            voluptates beatae sapiente explicabo earum minus dolores nam magnam
            qui aspernatur alias facilis ut hic, tempore iste itaque ex
            perspiciatis ratione? Cum nostrum eveniet obcaecati provident
            accusantium ducimus nihil odio vel. Aut facere facilis atque
            voluptatum provident animi qui delectus quasi possimus nulla quam
            quia eius, dolor suscipit. Consequatur, minus dicta?
          </p>
        </div>

        <div className="relative w-full top-40">
          <img src={imagesProtein.protein} alt="" className="w-[400px]" />
          <img
            src={imagesProtein.circle}
            alt=""
            className="absolute -top-48 -z-10 w-[500px] -translate-x-[51px] inset-x-0"
          />
        </div>
      </div>
    ),
  },

  {
    id: 2,
    content: (
      <div className="mt-[200px] flex items-center gap-[200px]">
        <div className="max-w-[500px] flex flex-col gap-[20px]">
          <p className="uppercase text-xl font-semibold">органические</p>

          <p className="text-6xl font-bold uppercase ">
            эффективные протеины &#174;
          </p>

          <p className="text-[#9f9f9f]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
            voluptates beatae sapiente explicabo earum minus dolores nam magnam
            qui aspernatur alias facilis ut hic, tempore iste itaque ex
            perspiciatis ratione? Cum nostrum eveniet obcaecati provident
            accusantium ducimus nihil odio vel. Aut facere facilis atque
            voluptatum provident animi qui delectus quasi possimus nulla quam
            quia eius, dolor suscipit. Consequatur, minus dicta?
          </p>
        </div>

        <div className="relative w-full top-40">
          <img
            src={imagesProtein.protein}
            alt=""
            className="w-[400px] filter hue-rotate-[160deg]"
          />
          <img
            src={imagesProtein.circle}
            alt=""
            className="absolute -top-48 -z-10 w-[500px] -translate-x-[51px] inset-x-0 filter
            hue-rotate-[160deg] saturate-50 brightness-90 contrast-75"
          />
        </div>
      </div>
    ),
  },

  {
    id: 2,
    content: (
      <div className="mt-[200px] flex items-center gap-[200px]">
        <div className="max-w-[500px] flex flex-col gap-[20px]">
          <p className="uppercase text-xl font-semibold">растительные</p>

          <p className="text-6xl font-bold uppercase ">
            эффективные протеины &#174;
          </p>

          <p className="text-[#9f9f9f]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
            voluptates beatae sapiente explicabo earum minus dolores nam magnam
            qui aspernatur alias facilis ut hic, tempore iste itaque ex
            perspiciatis ratione? Cum nostrum eveniet obcaecati provident
            accusantium ducimus nihil odio vel. Aut facere facilis atque
            voluptatum provident animi qui delectus quasi possimus nulla quam
            quia eius, dolor suscipit. Consequatur, minus dicta?
          </p>
        </div>

        <div className="relative w-full top-40">
          <img
            src={imagesProtein.protein}
            alt=""
            className="w-[400px] filter hue-rotate-[280deg]"
          />
          <img
            src={imagesProtein.circle}
            alt=""
            className="absolute -top-48 -z-10 w-[500px] -translate-x-[51px] inset-x-0
                filter hue-rotate-[280deg] saturate-50 brightness-90 contrast-75
            "
          />
        </div>
      </div>
    ),
  },
];
