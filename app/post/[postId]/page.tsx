import getPost from "@/actions/getPost";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import PostItem from "@/components/posts/PostItem";
import { Suspense } from "react";
import PostFeedSkeleton from "@/components/posts/PostFeedSkeleton";
import PostForm from "@/components/posts/PostForm";
import Header from "@/components/header/Header";
import useCurrentUser from "@/actions/useCurrentUser";

export default async function PostPage({
  params,
}: {
  params: { postId: string };
}) {
  const postData = await getPost(params.postId);
  const sessionData = await getServerSession(authOptions);
  const user = await useCurrentUser();

  const [post, session] = await Promise.all([postData, sessionData]);

  return (
    <>
      <Header label="Thread" showBackButton={true} />
      <Suspense fallback={<PostFeedSkeleton listsToRender={3} />}>
        <PostItem data={post} session={session} />
      </Suspense>
      {session && (
        <PostForm
          placeholder="Leave a reply..."
          profileImage={user?.profileImage}
        />
      )}
    </>
  );
}
