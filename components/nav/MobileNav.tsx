"use client";

import { Bell, Home, Mail, User } from "lucide-react";
import Link from "next/link";
import TweetButton from "../sidebar/TweetButton";
import TweetButtonMobile from "./TweetButtonMobile";

export default function MobileNav({ session }: any) {
  const isAuthenticated = session ? true : false;

  const mobileNavigation = [
    {
      label: "Home",
      icon: Home,
      href: "/",
      authRequired: false,
      disabled: false,
    },
    {
      label: "Notifications",
      icon: Bell,
      href: "/notifications",
      authRequired: true,
      disabled: true,
    },
    {
      label: "Messages",
      icon: Mail,
      href: "/messages",
      authRequired: true,
      disabled: true,
    },
    {
      label: "Profile",
      icon: User,
      href: `/user/${session?.user.id}`,
      authRequired: true,
      disabled: false,
    },
  ];
  return (
    <>
      <TweetButtonMobile />
      <div className="fixed bottom-0 left-0 right-0 flex flex-row items-center justify-between bg-orange-400 px-4 py-1 md:hidden">
        {mobileNavigation.map((item, i) => {
          if (!item.authRequired || isAuthenticated) {
            return (
              <Link
                key={i}
                href={item.href}
                className={`${
                  item.disabled ? "pointer-events-none cursor-not-allowed" : ""
                } disabled flex cursor-pointer items-center justify-center gap-2 rounded-full p-3 text-sm font-semibold text-black hover:bg-black hover:bg-opacity-10`}
              >
                <item.icon size={24} />
              </Link>
            );
          }
        })}
      </div>
    </>
  );
}
