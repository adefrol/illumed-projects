import { FC } from "react";

interface IProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const Title: FC<IProps> = ({ title, subtitle, className }) => {
  return (
    <div className={className}>
      <p className="text-[34px] font-semibold font-montserrat-alternates text-[#2F2F2F]">{title}</p>

      <p className="text-[14px] text-[#6A6A6A]">{subtitle}</p>
    </div>
  );
};
