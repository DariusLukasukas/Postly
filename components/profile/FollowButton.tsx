"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import useFollow from "@/hooks/useFollow";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

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
        <Button></Button>
      ) : (
        <Button
          onClick={handleClick}
          className="rounded-full text-sm font-semibold text-neutral-400 hover:text-neutral-300"
        >
          {isFollowing ? "Unfollow" : "Follow"}
        </Button>
      )}
    </>
  );
}
