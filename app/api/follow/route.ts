import { prisma } from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { currentUserId, userIdToFollow } = await req.json();

  try {
    if (
      !currentUserId ||
      !userIdToFollow ||
      typeof currentUserId !== "string" ||
      typeof userIdToFollow !== "string"
    ) {
      throw new Error("Invalid ID");
    }

    const currentUser = await prisma.user.findUnique({
      where: { id: currentUserId },
    });

    if (!currentUser) {
      throw new Error("Invalid current user ID");
    }

    const userToFollow = await prisma.user.findUnique({
      where: { id: userIdToFollow },
    });

    if (!userToFollow) {
      throw new Error("Invalid user ID to follow");
    }

    const currentFollowingIds = currentUser.followingIds || [];

    const isAlreadyFollowing = currentFollowingIds.includes(userIdToFollow);
    const updatedFollowingIds = isAlreadyFollowing
      ? currentFollowingIds
      : [...currentFollowingIds, userIdToFollow];

    const updatedUser = await prisma.user.update({
      where: {
        id: currentUserId,
      },
      data: {
        followingIds: updatedFollowingIds,
      },
    });

    const isFollowing = updatedUser.followingIds.includes(userIdToFollow);

    // Add notifications logic here if needed

    return NextResponse.json({ ...updatedUser, isFollowing });
  } catch (error: any) {
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 400,
    });
  }
}

// UNFOLLOW USING DELETE METHOD WITH QUERY PARAMS, DUE TO NEXT JS request.json() in DELETE ROUTE BUG
function parseQueryParams(url: string) {
  const queryString = url.split("?")[1];
  const queryParams = new URLSearchParams(queryString);

  const params = {};
  for (const [key, value] of queryParams.entries()) {
    params[key] = value;
  }
  return params;
}

export async function DELETE(req: Request) {
  const { currentUserId, userIdToUnfollow } = parseQueryParams(req.url);

  try {
    if (
      !currentUserId ||
      !userIdToUnfollow ||
      typeof currentUserId !== "string" ||
      typeof userIdToUnfollow !== "string"
    ) {
      throw new Error("Invalid ID");
    }

    const currentUser = await prisma.user.findUnique({
      where: { id: currentUserId },
    });

    if (!currentUser) {
      throw new Error("Invalid current user ID");
    }

    const userToUnfollow = await prisma.user.findUnique({
      where: { id: userIdToUnfollow },
    });

    if (!userToUnfollow) {
      throw new Error("Invalid user ID to unfollow");
    }

    const updatedFollowingIds = currentUser.followingIds.filter(
      (followingId) => followingId !== userIdToUnfollow
    );

    const updatedUser = await prisma.user.update({
      where: {
        id: currentUserId,
      },
      data: {
        followingIds: updatedFollowingIds,
      },
    });

    const isFollowing = updatedUser.followingIds.includes(userIdToUnfollow);

    // Add notifications logic here if needed

    return NextResponse.json({ ...updatedUser, isFollowing });
  } catch (error: any) {
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
