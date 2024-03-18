import { imagesFurniture } from "@/constants/images";
import { FC } from "react";

const blogs = [
  {
    id: 1,
    title: "Идеи для первого домовладельца",
    author: "Нана Ама, 18 ноября 2022 г.",
    img: imagesFurniture.blog1,
  },

  {
    id: 2,
    title: "Идеи для первого домовладельца",
    author: "Нана Ама, 18 ноября 2022 г.",
    img: imagesFurniture.blog2,
  },

  {
    id: 3,
    title: "Идеи для первого домовладельца",
    author: "Нана Ама, 18 ноября 2022 г.",
    img: imagesFurniture.blog3,
  },
];

export const BlogCard: FC = () => {
  return (
    <div className="flex items-center gap-[30px]">
      {blogs.map((blog) => (
        <div key={blog.id} className="flex flex-col gap-[45px]">
          <img src={blog.img} alt="" />

          <div className="">
            <p className="text-[18px] font-semibold font-montserrat-alternates">
              {blog.title}
            </p>
            <p className="text-[14px]">{blog.author}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
