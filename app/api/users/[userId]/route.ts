import { prisma } from "@/lib/prismadb";
import { NextResponse } from "next/server";

interface userId {
  userId: string;
}

export async function GET(req: Request, { params }: { params: userId }) {
  const userId = params.userId;

  try {
    if (!userId || typeof userId !== "string") {
      throw new Error("Invalid ID");
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    const followersCount = await prisma.user.count({
      where: {
        followingIds: {
          has: userId,
        },
      },
    });

    return NextResponse.json({ ...existingUser, followersCount });
  } catch (error: any) {
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}

export async function PATCH(req: Request, { params }: { params: userId }) {
  const userId = params.userId;

  const { profileImage, coverImage, name, username, bio } = await req.json();

  if (!userId || typeof userId !== "string") {
    throw new Error("Invalid ID");
  }

  const existingUser = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!existingUser) {
    throw new Error("User not found");
  }
  try {
    const updatedUser = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        profileImage,
        coverImage,
        name,
        username,
        bio,
      },
    });
    return NextResponse.json(updatedUser);
  } catch (error: any) {
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
