"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import HoverCard from "../ui/hover-card";
import clsx from "clsx";

interface sidebarItems {
  label: string;
  href?: string;
  Icon: any;
}

export default function SidebarItem({ label, href, Icon }: sidebarItems) {
  const router = useRouter();
  const pathName = usePathname();
  const isActive = pathName === href;

  const handleClick = () => {
    href?.length && router.push(href);
  };

  return (
    <div
      className="group relative ml-auto h-14 cursor-pointer dark:invert"
      onClick={handleClick}
    >
      <div className="flex h-14 w-14 items-center justify-center">
        <Icon
          className={clsx("z-20", "h-7", "w-7", {
            "fill-current text-black": isActive,
            "text-neutral-950": !isActive,
          })}
        />
        <HoverCard label={label} />
      </div>
    </div>
  );
}
