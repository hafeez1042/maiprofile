import React, { HTMLAttributes } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { getInitialsFromName } from "@repo/shared/lib/utils/getInitialsFromName";
import { cn } from "../../lib/utils";

// import style from "./clientButton.module.scss";

export const ClientButton: React.FC<IClientButtonProps> = ({
  src,
  name,
  className,
  isSelected,
  ...buttonAttr
}) => {
  return (
      <button {...buttonAttr} className={cn(["clientbtn h-[48px] flex items-center border p-1 rounded-full pl-1 pr-[22px] py-1 bg-white border-white justify-center gap-2 focus:outline-none focus:border-0", className, isSelected ? "bg-gray-200" : ""])}>
        <Avatar className="w-10 h-10 rounded-full">
          <AvatarImage src={src} />
          <AvatarFallback className="bg-gray-200">{getInitialsFromName(name)}</AvatarFallback>
        </Avatar>
        <div className="text-gray-900 text-[15px] font-medium text-nowrap">{name}</div>
      </button>
  );
};

interface IClientButtonProps extends HTMLAttributes<HTMLButtonElement> {
  src?: string;
  name: string;
  isSelected?: boolean;
}
