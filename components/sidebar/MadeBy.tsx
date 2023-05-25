"use client";

import Link from "next/link";

export default function MadeBy() {
  return (
    <div className="text-xs">
      <div>Postly</div>
      <div className="text-neutral-500">
        <div>A community app by</div>
        <Link
          href={"https://github.com/DariusLukasukas"}
          prefetch={false}
          className="hover:underline"
        >
          Darius Lukasukas
        </Link>
      </div>
    </div>
  );
}
