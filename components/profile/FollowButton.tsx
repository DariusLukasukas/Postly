"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import useFollow from "@/actions/useFollow";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { cn } from "@/lib/utils";

interface FollowButtonProps {
  currentUserId?: string;
  userIdToFollow: string;
  followingIds: string[];
}

export default function FollowButton({
  currentUserId,
  userIdToFollow,
  followingIds,
}: FollowButtonProps) {
  const router = useRouter();
  const [isFollowing, setIsFollowing] = useState(false);
  const [loading, setLoading] = useState(true);
  const { followUser, unfollowUser } = useFollow();

  useEffect(() => {
    setLoading(true);
    if (currentUserId) {
      setIsFollowing(followingIds.includes(userIdToFollow));
    }
    setLoading(false);
  }, [currentUserId, userIdToFollow, followingIds]);

  async function handleClick() {
    if (!currentUserId) return;

    if (isFollowing) {
      await unfollowUser(currentUserId, userIdToFollow);
      toast.success("Unfollowed!");
      router.refresh();
    } else {
      await followUser(currentUserId, userIdToFollow);
      toast.success("Followed!");
      router.refresh();
    }

    setIsFollowing(!isFollowing);
  }
  return (
    <>
      {loading ? (
        <div></div>
      ) : (
        <Button
          onClick={handleClick}
          size={"sm"}
          className={cn(
            "rounded-lg text-sm",
            isFollowing
              ? "bg-transparent text-black outline outline-neutral-100 hover:bg-white hover:text-black dark:bg-neutral-700"
              : ""
          )}
        >
          {isFollowing ? "Following" : "Follow"}
        </Button>
      )}
    </>
  );
}
