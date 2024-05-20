import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { getInitialsFromName } from "@repo/shared/lib/utils/getInitialsFromName";

export const ProfileAvatar: React.FC<IProfileAvatarProps> = (props) => {
  return (
    <Avatar
      className={`${props.onClick ? "cursor-pointer" : ""} ${props.className || ""}`}
      onClick={props.onClick}
    >
      <AvatarImage src={props.imageUrl} />
      <AvatarFallback>{getInitialsFromName(props.name)}</AvatarFallback>
    </Avatar>
  );
};

interface IProfileAvatarProps {
  name: string;
  imageUrl: string;
  onClick?: () => void;
  className?: string
}
