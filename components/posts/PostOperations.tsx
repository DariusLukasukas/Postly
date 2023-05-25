"use client";

import { UserPlus } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import MoreHorizontal from "../ui/icons/MoreHorizontal";
import DeleteIcon from "../ui/icons/DeleteIcon";

export default function PostOperations(props: {
  isCurrentUserPost: any;
  handleDelete: any;
}) {
  const { isCurrentUserPost, handleDelete } = props;
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex h-5 w-5 items-center justify-center">
          <MoreHorizontal className="h-5 w-5 text-neutral-500" />
          <span className="sr-only">Open</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="bg-white shadow-lg dark:bg-neutral-700"
        >
          {isCurrentUserPost && (
            <DropdownMenuItem
              onClick={(
                event: React.MouseEvent<HTMLDivElement, MouseEvent>
              ) => {
                event.stopPropagation();
                handleDelete();
              }}
              className="flex cursor-pointer items-center text-destructive"
            >
              <div className="flex h-full flex-row items-center gap-2 text-red-600">
                <DeleteIcon className="h-5 w-5" />
                <div>Delete post</div>
              </div>
            </DropdownMenuItem>
          )}
          {!isCurrentUserPost && (
            <DropdownMenuItem className="pointer-events-none flex cursor-pointer items-center text-destructive focus:text-destructive">
              <div className="flex flex-row gap-2">
                <UserPlus size={20} />
                <div>Follow User</div>
              </div>
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
