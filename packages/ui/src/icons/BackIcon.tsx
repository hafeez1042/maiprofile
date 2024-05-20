import React from "react";

export const BackIcon: React.FC<IBackIconProps> = (props) => {
  return (
    <svg
      width="18"
      height="12"
      viewBox="0 0 18 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.47314 12L7.88116 10.5858L4.31172 7.00059L17.4999 7.00065V5.00065L4.31128 5.00059L7.88126 1.41422L6.47326 0L0.499878 6.00034L6.47314 12Z"
        fill="currentcolor"
      />
    </svg>
  );
};

interface IBackIconProps {}
