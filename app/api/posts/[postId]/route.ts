import { prisma } from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { postId: string } }
) {
  const postId = params.postId;

  const post = await prisma.post.findUnique({
    where: {
      id: postId,
    },
    include: {
      user: true,
      comments: {
        include: {
          user: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });
  return NextResponse.json(post);
}

export async function DELETE(
  req: Request,
  { params }: { params: { postId: string } }
) {
  const postId = params.postId;

  const deleted = await prisma.post.delete({
    where: {
      id: postId,
    },
  });

  return NextResponse.json(deleted);
}
