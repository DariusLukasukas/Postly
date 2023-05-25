"use client";

import { UserPlus } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import MoreHorizontal from "../ui/icons/MoreHorizontal";
import HoverCard from "../ui/hover-card";
import { signOut } from "next-auth/react";
import RocketIcon from "../ui/icons/RocketIcon";
import SettingsIcon from "../ui/icons/SettingsIcon";

export default function ProfileOperations() {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="group relative flex h-5 w-5 items-center justify-center">
          <MoreHorizontal className="h-5 w-5 text-black dark:invert" />
          <HoverCard label="Settings" />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="bg-white shadow-lg dark:bg-neutral-700"
        >
          <DropdownMenuItem className="flex cursor-pointer items-center">
            <div className="flex flex-row gap-2">
              <SettingsIcon className="h-5 w-5" />
              <div>Settings</div>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
              event.stopPropagation();
              signOut();
            }}
            className="flex cursor-pointer items-center text-destructive"
          >
            <div className="flex h-full flex-row items-center gap-2 text-red-600">
              <RocketIcon className="h-5 w-5" />
              <div>Sign out</div>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
