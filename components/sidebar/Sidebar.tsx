"use client";
import { signOut } from "next-auth/react";
import SidebarItem from "./SidebarItem";
import { LogOut } from "lucide-react";
import TweetButton from "./TweetButton";
import HomeIcon from "../ui/icons/HomeIcon";
import UserIcon from "../ui/icons/UserIcon";
import SearchIcon from "../ui/icons/SearchIcon";
import BellIcon from "../ui/icons/BellIcon";
import LetterIcon from "../ui/icons/LetterIcon";

export default function Sidebar({ session }: any) {
  const isAuthenticated = session ? true : false;

  const navigation = [
    { label: "Home", icon: HomeIcon, href: "/", authRequired: false },
    { label: "Search ⌘K", icon: SearchIcon, authRequired: false },
    { label: "Notifications", icon: BellIcon, authRequired: true },
    { label: "Replies", icon: LetterIcon, authRequired: true },
    {
      label: "Profile",
      icon: UserIcon,
      href: `/user/${session?.user.id}`,
      authRequired: true,
    },
  ];

  return (
    <div className="flex h-full w-full flex-col items-center justify-start text-black">
      {navigation.map((item, i) => {
        if (!item.authRequired || isAuthenticated) {
          return (
            <SidebarItem
              key={i}
              Icon={item.icon}
              label={item.label}
              href={item.href}
            />
          );
        }
      })}
      <div className="ml-auto">{session && <TweetButton />}</div>
    </div>
  );
}
