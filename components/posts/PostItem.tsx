"use client";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { timeSince } from "@/lib/timeSince";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { useMemo } from "react";
import PostOperations from "./PostOperations";
import DialogIcon from "../ui/icons/DialogIcon";
import HeartIcon from "../ui/icons/HeartIcon";
import ReTweet from "../ui/icons/ReTweet";

export default function PostItem({ data, session }: any) {
  const router = useRouter();
  const [likes, setLikes] = useState(data.likeIds);

  const userId = session?.user?.id ?? "";

  const isCurrentUserPost = useMemo(
    () => userId === data.userId,
    [userId, data.userId]
  );

  const handleAvatarClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      event.stopPropagation();
      if (isCurrentUserPost) {
        router.push("/user/" + data.userId);
      } else {
        const userId = data.user.id;
        if (userId) {
          router.push(`/user/${userId}`);
        } else {
          console.log("User ID is undefined or not accessible");
        }
      }
    },
    [data, router, isCurrentUserPost]
  );

  const handlePostClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      event.stopPropagation();
      if (data && data.user) {
        router.push(`/post/${data.id}`);
      }
    },
    [router, data]
  );

  const handleLikeClick = useCallback(
    async (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      event.stopPropagation();

      if (!session) {
        return toast.error("You must be logged in to like a post");
      }
    },
    [session]
  );

  const handleDelete = useCallback(async () => {
    try {
      const res = await fetch(`/api/posts/${data.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        toast.success("Post deleted successfully");
        router.refresh();
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    }
  }, [router, data]);

  return (
    <div
      onClick={handlePostClick}
      className="w-full cursor-pointer border-b-[1px] border-neutral-100 px-4 pb-4 pt-6 transition dark:border-neutral-700"
    >
      <div className="flex flex-row items-start gap-4">
        <Avatar className="h-12 w-12" onClick={handleAvatarClick}>
          <AvatarImage
            src={data.user.profileImage || "/images/placeholder.png"}
            alt={data.user.name + "profile"}
            placeholder="blur"
          />
        </Avatar>

        <div className="flex w-full flex-col">
          <div className="flex flex-row items-center gap-1">
            <div className="cursor-pointer text-sm font-medium">
              {data.user.name}
            </div>
            <div className="flex cursor-pointer flex-row gap-1 text-sm font-semibold text-neutral-400">
              <div className="max-w-[7rem] md:max-w-[12rem]">
                <div className="block truncate font-normal">
                  @{data.user.username}
                </div>
              </div>
              <div className="font-normal">
                • {timeSince(new Date(data.createdAt))}
              </div>
            </div>
          </div>
          <div>
            <div className="mt-1 text-sm font-light dark:text-neutral-300">
              {data.body}
            </div>
          </div>
          <div className="mt-4 flex w-full flex-row items-center justify-between gap-10 px-4">
            <button className="flex cursor-pointer flex-row items-center gap-2 transition hover:text-sky-500">
              <DialogIcon className="h-5 w-5 text-neutral-500 dark:text-neutral-500" />
              <div className="text-sm">{data.comments?.length || ""}</div>
            </button>
            <button onClick={() => {}} className="">
              <ReTweet className="h-5 w-5 text-neutral-500" />
            </button>
            <button
              //   onClick={handleLikeClick}
              className="flex cursor-pointer flex-row items-center gap-2 transition hover:text-red-500"
            >
              <HeartIcon className="h-5 w-5 text-neutral-500" />
              <div className="text-sm">
                {likes.length > 0 ? likes.length : ""}
              </div>
            </button>
            {session && (
              <PostOperations
                isCurrentUserPost={isCurrentUserPost}
                handleDelete={handleDelete}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
