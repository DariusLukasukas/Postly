"use client";
import { navigation } from "@/lib/navigation";
import NavItem from "../navigation/NavItem";
import TweetButton from "./TweetButton";

import { Session } from "next-auth";
import { useEffect, useState } from "react";

interface MobileNavProps {
  session: Session | null;
}

export default function Sidebar({ session }: MobileNavProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(!!session);

  useEffect(() => {
    setIsAuthenticated(!!session);
  }, [session]);

  return (
    <div className="flex h-full w-full flex-col items-center justify-start text-black">
      {navigation.map((item) => {
        if (item.authRequired && !isAuthenticated) {
          return null; // Don't render the item if it requires authentication and the user isn't authenticated
        }
        return (
          <NavItem
            key={item.label}
            item={item}
            session={session}
            isAuthenticated={isAuthenticated}
            isMobile={true}
          />
        );
      })}
      <div className="ml-auto">{session && <TweetButton />}</div>
    </div>
  );
}
