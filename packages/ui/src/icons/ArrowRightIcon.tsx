import React from "react";

export const ArrowRightIcon: React.FC<IArrowRightIconProps> = (props) => {
  return (
    <svg
      width="8"
      height="14"
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.00005 13L5.5858 8.41417C6.25246 7.7475 6.58579 7.41417 6.58579 6.99996C6.58579 6.58574 6.25245 6.25241 5.58579 5.58575L1 0.999999"
        stroke="currentcolor"
        strokeOpacity="0.6"
        strokeWidth="1.5"
        strokeMiterlimit="16"
        strokeLinecap="round"
      />
    </svg>
  );
};

interface IArrowRightIconProps {}
