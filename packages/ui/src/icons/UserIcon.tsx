import React from "react";

export const UserIcon: React.FC<IUserIconProps> = (props) => {
  return (
    <svg
      width="20"
      height="22"
      viewBox="0 0 20 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 20.9999C5.6634 16.1156 14.2865 15.8856 19 20.9999M14.9902 5.99994C14.9902 8.76136 12.7484 10.9999 9.98306 10.9999C7.2177 10.9999 4.97594 8.76136 4.97594 5.99994C4.97594 3.23852 7.2177 0.999939 9.98306 0.999939C12.7484 0.999939 14.9902 3.23852 14.9902 5.99994Z"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

interface IUserIconProps {}
