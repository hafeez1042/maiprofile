import React from "react";

export const AttachmentIcon: React.FC<IAttachmentIconProps> = (props) => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.85281 10.5L3.56602 9.2132C2.14466 7.79185 2.14466 5.48737 3.56602 4.06602C4.98737 2.64466 7.29185 2.64466 8.7132 4.06602L16.434 11.7868C17.8553 13.2082 17.8553 15.5126 16.434 16.934C15.0126 18.3553 12.7082 18.3553 11.2868 16.934L8.3915 14.0387C7.50316 13.1503 7.50316 11.71 8.3915 10.8217C9.27985 9.93335 10.7201 9.93335 11.6085 10.8217L13.217 12.4302"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

interface IAttachmentIconProps {}
