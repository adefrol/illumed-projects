import { BlogCard } from "../blog-card";
import { Title } from "../section-title";

export const RecentlyBlog = () => {
  return (
    <div className="">
      <div className="flex items-center justify-between">
        <Title title="Последние публикации" />
        <p className="text-base font-montserrat-alternates text-[#2F2F2F] underline underline-offset-4 decoration-yellow-500 decoration-4">
          Посмотреть все
        </p>
      </div>

      <div className="mt-[90px]">
        <BlogCard />
      </div>
    </div>
  );
};
