import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserHeroProps {
  profileImage?: string;
  coverImage?: string;
}

export default function UserHero({ profileImage, coverImage }: UserHeroProps) {
  return (
    <>
      <div className="relative z-20 h-36 rounded-lg bg-orange-400">
        {coverImage && (
          <Image
            src={coverImage}
            fill
            alt="Cover Image"
            style={{ objectFit: "cover" }}
          />
        )}
      </div>
      <Avatar className="absolute z-30 -mt-14 ml-4 h-[100px] w-[100px] border-4 border-black">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </>
  );
}
