import React from "react";

export const NotificationIcon: React.FC<INotificationIconProps> = (props) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.166 2.42385C13.3838 2.14933 12.5424 2 11.666 2C7.51014 2 4.14114 5.35786 4.14114 9.5C4.14105 10.5718 4.07874 11.5793 3.45162 12.5029C2.97285 13.1995 2.32663 13.9129 2.19594 14.7696C1.98328 16.1636 2.93401 17.1312 4.09807 17.6134C8.56082 19.4622 14.7712 19.4622 19.234 17.6134C20.398 17.1312 21.3488 16.1636 21.1361 14.7696C21.0362 14.1149 20.224 12.3118 19.8268 11.768"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path
        d="M22.666 5.5C22.666 7.433 21.099 9 19.166 9C17.233 9 15.666 7.433 15.666 5.5C15.666 3.567 17.233 2 19.166 2C21.099 2 22.666 3.567 22.666 5.5Z"
        fill="#FF362A"
        stroke="transparent"
        strokeWidth="1.5"
      />
      <path
        d="M7.66602 19C8.1245 20.7252 9.74155 22 11.666 22C13.5905 22 15.2075 20.7252 15.666 19"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

interface INotificationIconProps {}
