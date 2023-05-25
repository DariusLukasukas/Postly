"use client";

import UserHero from "@/components/profile/UserHero";

export default function Error({ error }: { error: Error }) {
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <UserHero userId="" />
      <div className="mt-52 flex w-full flex-col items-center justify-center">
        <h2 className="text-2xl font-bold">
          This account doesn&apos;t exist.{" "}
        </h2>
        <h3 className="text-lg">Try searching for another.</h3>
      </div>
    </>
  );
}
