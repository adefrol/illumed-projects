import { FC } from "react";

interface IProps {
  col: {
    id: number;
    title: string;
  }[];
}

export const FooterColItem: FC<IProps> = ({ col }) => {
  return (
    <div className="leading-[28px]">
      {col.map((item) => (
        <p className="cursor-pointer" key={item.id}>
          {item.title}
        </p>
      ))}
    </div>
  );
};
