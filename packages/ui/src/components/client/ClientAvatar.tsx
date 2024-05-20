import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { getInitialsFromName } from "@repo/shared/lib/utils/getInitialsFromName";

export const ClientAvatar: React.FC<IClientAvatarProps> = (props) => {
  return (
    <Avatar
      className={`${props.onClick ? "cursor-pointer" : ""}`}
      onClick={props.onClick}
    >
      <AvatarFallback>{getInitialsFromName(props.name)}</AvatarFallback>
    </Avatar>
  );
};

interface IClientAvatarProps {
  name: string;
  onClick?: () => void;
}
