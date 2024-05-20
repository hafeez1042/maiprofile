import React from "react";

export const UploadIcon: React.FC<IProps> = (props) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 5V15M12 5C11.2998 5 9.99153 6.9943 9.5 7.5M12 5C12.7002 5 14.0085 6.9943 14.5 7.5"
        stroke="#191D28"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 17C20 19.482 19.482 20 17 20H7C4.518 20 4 19.482 4 17"
        stroke="#191D28"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

interface IProps {}
