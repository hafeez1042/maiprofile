import React from "react";

export const ArrowLeftIcon: React.FC<IArrowLeftIconProps> = (props) => {
  return (
    <svg
      width="8"
      height="14"
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.99995 1L2.4142 5.58583C1.74754 6.2525 1.41421 6.58583 1.41421 7.00004C1.41421 7.41426 1.74755 7.74759 2.41421 8.41425L7 13"
        stroke="currentcolor"
        strokeOpacity="0.6"
        strokeWidth="1.5"
        strokeMiterlimit="16"
        strokeLinecap="round"
      />
    </svg>
  );
};

interface IArrowLeftIconProps {}
