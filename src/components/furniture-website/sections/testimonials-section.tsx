import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Title } from "../section-title";
import { imagesFurniture } from "@/constants/images";

const testimonials = [
  {
    id: 1,
    title:
      "‘’Donec nibh magna, interdum quis massa sed, rhoncus laoreet quam. Mauris accumsan felis fermentum euismod egestas. Mauris ante augue, cursus sit amet arcu a, maximus suscipit nibh. Integer vel nibh tellus. Pellentesque in risus non dui venenatis sollicitudin sed vitae diam. Fusce tincidunt nisl mi, at molestie odio accumsan non. Pellentesque ma’",
    avatar: "",
    authorName: "Zain Bin Noor",
  },

  {
    id: 2,
    title:
      "‘’Donec nibh magna, interdum quis massa sed, rhoncus laoreet quam. Mauris accumsan felis fermentum euismod egestas. Mauris ante augue, cursus sit amet arcu a, maximus suscipit nibh. Integer vel nibh tellus. Pellentesque in risus non dui venenatis sollicitudin sed vitae diam. Fusce tincidunt nisl mi, at molestie odio accumsan non. Pellentesque ma’",
    avatar: "",
    authorName: "Zain Bin Noor",
  },

  {
    id: 3,
    title:
      "‘’Donec nibh magna, interdum quis massa sed, rhoncus laoreet quam. Mauris accumsan felis fermentum euismod egestas. Mauris ante augue, cursus sit amet arcu a, maximus suscipit nibh. Integer vel nibh tellus. Pellentesque in risus non dui venenatis sollicitudin sed vitae diam. Fusce tincidunt nisl mi, at molestie odio accumsan non. Pellentesque ma’",
    avatar: "",
    authorName: "Zain Bin Noor",
  },

  {
    id: 4,
    title:
      "‘’Donec nibh magna, interdum quis massa sed, rhoncus laoreet quam. Mauris accumsan felis fermentum euismod egestas. Mauris ante augue, cursus sit amet arcu a, maximus suscipit nibh. Integer vel nibh tellus. Pellentesque in risus non dui venenatis sollicitudin sed vitae diam. Fusce tincidunt nisl mi, at molestie odio accumsan non. Pellentesque ma’",
    avatar: "",
    authorName: "Zain Bin Noor",
  },
];

export const Testimonials = () => {
  return (
    <div className="">
      <Title className="text-center" title="Отзывы" />

      <div className="flex justify-center mt-[50px]">
        <Carousel className="w-full max-w-[760px]">
          <CarouselContent className="">
            {testimonials.map((testimonial) => (
              <CarouselItem className="" key={testimonial.id}>
                <p className="text-[18px] text-justify">{testimonial.title}</p>

                <div className="mt-[250px] flex justify-center items-center">
                  <div className="flex flex-col items-center">
                    <img
                      src={imagesFurniture.person}
                      alt=""
                      className="rounded-full"
                    />
                    <p>{testimonial.authorName}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};
