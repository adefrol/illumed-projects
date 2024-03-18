import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/course-website/")({
  component: () => <CourseHome />,
});

export const CourseHome = () => {
  return (
    <>
      <div className="fixed w-full min-h-svh bg-cover filter brightness-[.10]  bg-[url('https://img.freepik.com/premium-photo/darken-black-texture-background_34168-920.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710633600&semt=ais')] -z-10"></div>
      <div className="py-10 flex items-center justify-evenly px-20 text-white ">
        <a href="#">Про курс</a>
        <a href="#">Тарифы</a>
        <a href="#">Про нас</a>
        <a href="#">Записаться</a>
        <a href="#">Контакты</a>
      </div>
      <div className="font-unbounded font-[900] text-center text-white text-4xl">Учи Английский Везде</div>
    </>
  );
};
