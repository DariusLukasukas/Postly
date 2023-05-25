import getPosts from "@/actions/getPosts";
import PostItem from "./PostItem";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

interface PostFeedProps {
  userId?: string;
}

export default async function PostFeed({ userId }: PostFeedProps) {
  const posts = await getPosts(userId);
  const session = await getServerSession(authOptions);

  return (
    <>
      {posts.map((post: any) => (
        <PostItem key={post.id} data={post} session={session} />
      ))}
    </>
  );
}
