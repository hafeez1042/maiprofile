import React from "react";

export const PlusIcon: React.FC<IPlusIconProps> = (props) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.751 3.9585C10.751 3.54428 10.4152 3.2085 10.001 3.2085C9.58676 3.2085 9.25098 3.54428 9.25098 3.9585V9.25074H3.95898C3.54477 9.25074 3.20898 9.58653 3.20898 10.0007C3.20898 10.415 3.54477 10.7507 3.95898 10.7507H9.25098V16.0425C9.25098 16.4567 9.58676 16.7925 10.001 16.7925C10.4152 16.7925 10.751 16.4567 10.751 16.0425V10.7507H16.043C16.4572 10.7507 16.793 10.415 16.793 10.0007C16.793 9.58653 16.4572 9.25074 16.043 9.25074H10.751V3.9585Z"
        fill="currentcolor"
      />
    </svg>
  );
};

interface IPlusIconProps {}
