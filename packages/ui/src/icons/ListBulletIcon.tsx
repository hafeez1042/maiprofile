import React from "react";

export const ListBulletIcon: React.FC<IListBulletIconProps> = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 5L16 5"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M20 5H20.009"
        stroke="currentcolor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 12H20.009"
        stroke="currentcolor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 19H20.009"
        stroke="currentcolor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 12L16 12"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M4 19L16 19"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

interface IListBulletIconProps {}
