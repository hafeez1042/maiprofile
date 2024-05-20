import React from "react";

export const UserMultiIcon: React.FC<IUserMultiIconProps> = (props) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.2161 20H19.7063C20.8561 20 21.7707 19.4761 22.5919 18.7436C24.678 16.8826 19.7741 15 18.1 15M16.1 5.06877C16.3271 5.02373 16.5629 5 16.8048 5C18.6247 5 20.1 6.34315 20.1 8C20.1 9.65685 18.6247 11 16.8048 11C16.5629 11 16.3271 10.9763 16.1 10.9312"
        stroke="currentcolor"
        strokeWidth="1.5" 
        strokeLinecap="round"
      />
      <path
        d="M5.08132 16.1112C3.90234 16.743 0.811143 18.0331 2.69389 19.6474C3.6136 20.436 4.63791 21 5.92573 21H13.2743C14.5621 21 15.5864 20.436 16.5061 19.6474C18.3889 18.0331 15.2977 16.743 14.1187 16.1112C11.354 14.6296 7.84599 14.6296 5.08132 16.1112Z"
        stroke="currentcolor"
        strokeWidth="1.5"
      />
      <path
        d="M13.6 7.5C13.6 9.70914 11.8091 11.5 9.60001 11.5C7.39087 11.5 5.60001 9.70914 5.60001 7.5C5.60001 5.29086 7.39087 3.5 9.60001 3.5C11.8091 3.5 13.6 5.29086 13.6 7.5Z"
        stroke="currentcolor"
        strokeWidth="1.5"
      />
    </svg>
  );
};

interface IUserMultiIconProps {}
