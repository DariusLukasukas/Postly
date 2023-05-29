"use client";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import ArrowBack from "../ui/icons/ArrowBack";
import ProfileOperations from "./ProfileOperations";

interface HeaderProps {
  label: string;
  showBackButton?: boolean;
}

export default function Header({ label, showBackButton }: HeaderProps) {
  const router = useRouter();

  const handleBack = useCallback(() => {
    router.back();
    router.refresh();
  }, [router]);

  return (
    <div className="relative z-10 h-14 border-b-[1px] border-neutral-100 px-4 dark:border-neutral-700">
      <div className="flex h-full flex-row items-center gap-2">
        {showBackButton && (
          <button
            onClick={handleBack}
            className="z-20 ml-2 w-14 transition hover:text-opacity-70"
          >
            <ArrowBack className="h-6 w-6 text-black dark:text-white" />
          </button>
        )}
        <h1 className="text-sm">{label}</h1>

        <div className="ml-auto">
          <ProfileOperations />
        </div>
      </div>
    </div>
  );
}
