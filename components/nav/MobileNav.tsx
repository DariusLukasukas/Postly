"use client";

import Link from "next/link";
import { navigation } from "@/lib/navigation";

export default function MobileNav({ session }: any) {
  const isAuthenticated = session ? true : false;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 flex flex-row items-center justify-between border-t-[1px] border-neutral-700 bg-white px-4 py-1 dark:bg-neutral-800 md:hidden">
        {navigation.map((item, i) => (
          <div
            key={i}
            className={`${
              item.available ? "" : "pointer-events-none cursor-not-allowed"
            } disabled flex cursor-pointer items-center justify-center gap-2 rounded-full p-2 text-sm font-semibold text-black hover:bg-black hover:bg-opacity-10`}
          >
            {!item.authRequired || isAuthenticated ? (
              <Link
                href={
                  item.label === "Profile" && isAuthenticated
                    ? `/user/${session?.user.id}`
                    : item.href
                }
              >
                <item.icon className="h-6 w-6 text-black dark:invert" />
              </Link>
            ) : (
              <div>
                <item.icon className="h-6 w-6 text-black dark:invert" />
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
