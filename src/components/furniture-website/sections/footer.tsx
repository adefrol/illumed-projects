import { colors } from "@/constants/colors";
import { Logo } from "../logo";
import { navbar } from "../header";
import { FooterColItem } from "../footer-col-item";

const col2 = [
  {
    id: 1,
    title: "Помощь",
  },

  {
    id: 2,
    title: "База знаний",
  },

  {
    id: 3,
    title: "Живое общение",
  },
];

const col3 = [
  {
    id: 1,
    title: "Работы",
  },

  {
    id: 2,
    title: "Наша команда",
  },

  {
    id: 3,
    title: "Руководство",
  },

  {
    id: 4,
    title: "Политика Конфиденциальности",
  },
];

const col4 = [
  {
    id: 1,
    title: "Nordic Chair",
  },

  {
    id: 2,
    title: "Kruzo Aero",
  },

  {
    id: 3,
    title: "Ergonomic",
  },
];

export const Footer = () => {
  return (
    <div className="">
      <div className="flex items-end gap-[65px]">
        <div className="">
          <Logo color={colors.green} />
          <p className="max-w-[380px] text-[#6A6A6A]">
            Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
            vivethe as it was for us to know what was to be done. the this is a
            long post for the text.`This small text has to be place here, since
            this is
          </p>
        </div>

        <div className="grid grid-cols-4 text-[#6A6A6A] gap-[65px]">
          <FooterColItem col={navbar} />
          <FooterColItem col={col2} />
          <FooterColItem col={col3} />
          <FooterColItem col={col4} />
        </div>
      </div>

      <hr className=" mt-[100px]" />

      <div className="mt-[30px] float-end">
        <div className="flex items-center gap-[40px] text-[#6A6A6A]">
          <p>Условия использования</p>
          <p>Политика Конфиденциальности</p>
        </div>
      </div>

      <p className="text-[#6A6A6A] mt-[80px] text-center">
        Copyright 2024 example@mail.ru. Все права защищены
      </p>
    </div>
  );
};
