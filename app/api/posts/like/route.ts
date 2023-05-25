import { prisma } from "@/lib/prismadb";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function PUT(req: Request) {
  try {
    const sesion: any = await getServerSession(authOptions);
    const userId = sesion?.user?.id;

    if (!sesion) {
      return new Response("Unauthorized", { status: 403 });
    }

    const body = await req.json();
    const { postId } = body;

    const post = await prisma.post.findUnique({
      where: { id: postId },
      select: { likeIds: true },
    });

    if (!post) {
      return NextResponse.next();
    }

    // Check if the user has already liked the post
    const hasLiked = post.likeIds.includes(userId);

    // If the user has already liked the post, remove the like
    if (hasLiked) {
      const updatedPost = await prisma.post.update({
        where: { id: postId },
        data: { likeIds: { set: post.likeIds.filter((id) => id !== userId) } },
      });
      return NextResponse.json(updatedPost);
    }
    // If the user has not liked the post yet, add the like
    const updatedPost = await prisma.post.update({
      where: { id: postId },
      data: { likeIds: { push: userId } },
    });

    return NextResponse.json(updatedPost);
  } catch (error: any) {
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
