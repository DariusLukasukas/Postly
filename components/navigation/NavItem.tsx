"use client";

import { NavigationItem } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Session as NextAuthSession } from "next-auth";
import HoverCard from "../ui/hover-card";

interface User {
  name?: string | null;
  email?: string | null;
  image?: string | null;
  id: string;
}

export interface Session extends NextAuthSession {
  user?: User;
}

interface NavItemProps {
  item: NavigationItem;
  session: Session | null;
  isAuthenticated: boolean;
  isMobile: boolean;
}

export default function NavItem({
  item,
  session,
  isAuthenticated,
  isMobile,
}: NavItemProps) {
  const pathname = usePathname();

  const itemHref =
    item.label === "Profile" && isAuthenticated && session?.user
      ? `/user/${session?.user.id}`
      : item.href;
  const isActive = pathname === itemHref;

  return (
    <div
      key={item.label}
      className="group relative flex h-14 items-center justify-center p-2"
      aria-current={isActive ? "page" : undefined}
    >
      {!item.authRequired || isAuthenticated ? (
        <Link
          href={itemHref}
          className={cn(
            item.available && "cursor-pointer",
            !item.available && "cursor-not-allowed"
          )}
        >
          <item.icon
            className={cn(
              "z-20",
              isMobile ? "h-7 w-7" : "h-6 w-6",
              "dark:invert",
              {
                "fill-current text-black": isActive,
                "text-neutral-950": !isActive,
              }
            )}
          />
        </Link>
      ) : (
        <span>
          <item.icon
            className={
              isMobile
                ? "h-6 w-6 text-black dark:invert"
                : "h-6 w-6 text-black dark:invert"
            }
          />
        </span>
      )}
      <HoverCard label={item.label} />
    </div>
  );
}
