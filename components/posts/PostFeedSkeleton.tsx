"use client";
import { Skeleton } from "../ui/skeleton";

interface PostFeedSkeletonProps {
  listsToRender: number;
}
export default function PostFeedSkeleton({
  listsToRender,
}: PostFeedSkeletonProps) {
  const bgColors = [
    "bg-neutral-300",
    "bg-neutral-200",
    "bg-neutral-100",
    "bg-neutral-50",
  ];
  return (
    <>
      {Array(listsToRender)
        .fill(1)
        .map((item, index) => (
          <div key={index} className="flex flex-row gap-4 p-5">
            <Skeleton
              className={`h-12 w-12 rounded-full ${
                bgColors[index % bgColors.length]
              }`}
            />
            <div className="w-full space-y-2">
              <Skeleton
                className={`h-4 w-32 ${bgColors[index % bgColors.length]}`}
              />
              <Skeleton
                className={`h-4 w-full ${bgColors[index % bgColors.length]}`}
              />
              <Skeleton
                className={`h-4 w-80 ${bgColors[index % bgColors.length]}`}
              />
              <Skeleton
                className={`h-4 w-64 ${bgColors[index % bgColors.length]}`}
              />
            </div>
          </div>
        ))}
    </>
  );
}
