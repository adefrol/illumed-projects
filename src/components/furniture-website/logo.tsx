import { FC } from "react";

interface IProps {
  color?: string;
}

export const Logo: FC<IProps> = ({ color = "#FFD748" }) => {
  return (
    <div className="">
      <svg
        width="100"
        height="100"
        viewBox="0 0 60 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.255859 37.9463V0.402344H19.8066V7.92188H7.8291V15.5488H14.7578V23.1221H7.8291V37.9463H0.255859ZM23.459 38V0.402344H31.0322V38H23.459ZM35.5439 38V11.5742H35.9736L43.1172 23.0684V38H35.5439ZM35.5439 5.34375V0.402344H41.7207L59.4453 28.9766V38H55.8467L35.5439 5.34375ZM51.8721 11.252V0.402344H59.4453V22.7461H59.0156L51.8721 11.252Z"
          fill={color}
        />
      </svg>
    </div>
  );
};
