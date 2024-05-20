import React from "react";

export const MealPrepIcon: React.FC<IMealPrepIconProps> = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 17C18.2386 17 16 14.7614 16 12C16 9.23858 18.2386 7 21 7"
        stroke="currentcolor"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M21 21C16.0294 21 12 16.9706 12 12C12 7.02944 16.0294 3 21 3"
        stroke="currentcolor"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M6 3L6 8M6 21L6 11"
        stroke="currentcolor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.5 8L8.5 8"
        stroke="currentcolor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9 3V7.35224C9 12.216 3 12.2159 3 7.35207L3 3"
        stroke="currentcolor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

interface IMealPrepIconProps {}
