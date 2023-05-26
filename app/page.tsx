import useCurrentUser from "@/actions/useCurrentUser";
import SignInOrRegister from "@/components/home/SignInOrRegister";
import PostFeed from "@/components/posts/PostFeed";
import PostFeedSkeleton from "@/components/posts/PostFeedSkeleton";
import PostForm from "@/components/posts/PostForm";
import { Suspense } from "react";

export default async function Home() {
  const session = await useCurrentUser();

  return (
    <>
      {!session && <SignInOrRegister />}
      {session && (
        <PostForm
          placeholder={"What's on your mind..."}
          profileImage={session.profileImage}
        />
      )}
      <Suspense fallback={<PostFeedSkeleton listsToRender={4} />}>
        {/* @ts-expect-error Async Server Component */}
        <PostFeed />
      </Suspense>
    </>
  );
}
