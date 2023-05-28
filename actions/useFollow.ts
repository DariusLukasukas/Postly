import { useCallback } from "react";

export async function followUser(
  currentUserId: string,
  userIdToFollow: string
) {
  const response = await fetch("/api/follow", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ currentUserId, userIdToFollow }),
  });

  if (!response.ok) {
    throw new Error("Error following user");
  }

  const result = await response.json();
  return result.isFollowing;
}

export async function unfollowUser(
  currentUserId: string,
  userIdToUnfollow: string
) {
  const response = await fetch(
    `/api/follow?currentUserId=${currentUserId}&userIdToUnfollow=${userIdToUnfollow}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Error unfollowing user");
  }

  const result = await response.json();
  return result.isFollowing;
}

export default function useFollow() {
  return {
    followUser: useCallback(followUser, []),
    unfollowUser: useCallback(unfollowUser, []),
    checkFollowing: useCallback(checkFollowing, []),
  };
}

export async function checkFollowing(
  currentUserId: string,
  userIdToFollow: string
) {
  try {
    const response = await fetch(
      `/api/follow/${currentUserId}/${userIdToFollow}`
    );
    const data = await response.json();
    return data.isFollowing;
  } catch (error) {
    console.error("Error checking following status:", error);
  }
}
