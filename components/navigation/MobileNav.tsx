"use client";
import { navigation } from "@/lib/navigation";
import NavItem from "./NavItem";

import { Session } from "next-auth";
import { useEffect, useState } from "react";

interface MobileNavProps {
  session: Session | null;
}

export default function MobileNav({ session }: MobileNavProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(!!session);

  useEffect(() => {
    setIsAuthenticated(!!session);
  }, [session]);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex flex-row items-center justify-between border-t-[1px] border-neutral-700 bg-white px-4 dark:bg-neutral-800 md:hidden">
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
    </div>
  );
}
