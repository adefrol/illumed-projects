import { Input } from "@/components/ui/input";
import { colors } from "@/constants/colors";
import { imagesFurniture } from "@/constants/images";
import { Mail } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export const ContactSection = () => {
  const schema = z.object({
    username: z.string().min(5, { message: "Это поле обязательно" }),
    email: z.string().email({ message: "Некорректная почта" }),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<z.infer<typeof schema>>({
    defaultValues: {
      username: "",
      email: "",
    },
    resolver: zodResolver(schema),
  });

  const handleOnSubmit = (data: z.infer<typeof schema>) => {
    new Promise((res) => {
      res(console.log(data));
      toast.success("Вы успешно подписались на обновления", {
        description: `Ваша почта: ${data.email}`,
      });
    }).then(() => {
      reset({ email: "", username: "" });
    });
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col gap-[25px]">
        <div className="flex items-center gap-[10px]">
          <Mail color="#CFCFCF" size={30} />
          <p className="text-[#2F2F2F] text-[18px] font-semibold font-montserrat-alternates">
            Подписаться на новостную рассылку
          </p>
        </div>

        <form
          onSubmit={handleSubmit(handleOnSubmit)}
          className="flex items-center gap-[20px]"
        >
          <div className="relative">
            <Input
              {...register("username")}
              placeholder="Ваше имя"
              className={cn(
                "focus-visible:border-black transition duration-300",
                {
                  "border-red-500 focus-visible:border-red-500":
                    errors.username,
                }
              )}
            />
            {errors.username && (
              <p className="text-red-500 absolute">{errors.username.message}</p>
            )}
          </div>

          <div className="relative">
            <Input
              {...register("email")}
              placeholder="Ваша почта"
              className={cn(
                "focus-visible:border-black transition duration-300",
                {
                  "border-red-500 focus-visible:border-red-500": errors.email,
                }
              )}
            />
            {errors.email && (
              <p className="text-red-500 absolute">{errors.email.message}</p>
            )}
          </div>

          <Button
            type="submit"
            style={{ backgroundColor: colors.green }}
            className="rounded-[10px] cursor-pointer"
            size={"icon"}
          >
            <img src={imagesFurniture.tg} alt="" className="max-w-[60px]" />
          </Button>
        </form>
      </div>

      <img
        src={imagesFurniture.contactImg}
        alt=""
        className="relative -top-24"
      />
    </div>
  );
};
