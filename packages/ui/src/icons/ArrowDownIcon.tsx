import React from "react";

export const ArrowDownIcon: React.FC<IArrowDownIconProps> = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 9.00005L12 15L18 9"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeMiterlimit="16"
      />
    </svg>
  );
};

interface IArrowDownIconProps {}
