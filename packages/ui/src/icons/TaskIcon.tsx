import React from "react";

export const TaskIcon: React.FC<ITaskIconProps> = (props) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.10001 9.36842C4.10001 5.89491 4.10001 4.15816 5.12513 3.07908C6.15026 2 7.80017 2 11.1 2L14.1 2C17.3998 2 19.0498 2 20.0749 3.07908C21.1 4.15816 21.1 5.89491 21.1 9.36842V14.6316C21.1 18.1051 21.1 19.8418 20.0749 20.9209C19.0498 22 17.3998 22 14.1 22L11.1 22C7.80017 22 6.15026 22 5.12513 20.9209C4.10001 19.8418 4.10001 18.1051 4.10001 14.6316L4.10001 9.36842Z"
        stroke="currentcolor"
        strokeWidth="1.5" 
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.60001 2L8.68221 2.4932C8.88175 3.69044 8.98152 4.28906 9.40113 4.64453C9.82075 5 10.4276 5 11.6414 5L13.5586 5C14.7724 5 15.3793 5 15.7989 4.64453C16.2185 4.28906 16.3183 3.69044 16.5178 2.4932L16.6 2"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.60001 16H12.6M8.60001 11L16.6 11"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

interface ITaskIconProps {}
