import { prisma } from "@/lib/prismadb";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET(req: Request) {
  const posts = await prisma.post.findMany({
    include: {
      user: {
        select: {
          id: true,
          username: true,
          name: true,
          profileImage: true,
        },
      },
      comments: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(posts);
}

export async function POST(req: Request) {
  try {
    const session: any = await getServerSession(authOptions);
    const userId = session?.user?.id;

    if (!session) {
      return new Response("Unauthorized", { status: 403 });
    }
    const { body } = await req.json();

    const newPost = await prisma.post.create({
      data: {
        body,
        userId: userId,
      },
    });

    return NextResponse.json(newPost);
  } catch (error: any) {
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
