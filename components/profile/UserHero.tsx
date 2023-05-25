import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@/actions/useUser";

interface UserHeroProps2 {
  userId: string;
}

export default async function UserHero({ userId }: UserHeroProps2) {
  const user = await useUser(userId);

  return (
    <>
      <div className="relative z-20 h-36 rounded-lg bg-orange-400">
        {user.coverImage && (
          <Image
            src={user.coverImage}
            fill
            alt="Cover Image"
            style={{ objectFit: "cover" }}
          />
        )}
      </div>
      <Avatar className="absolute z-30 -mt-14 ml-4 h-[100px] w-[100px] border-4 border-black">
        <AvatarImage
          src={user?.profileImage || "/images/placeholder.png"}
          alt="Profile"
          className="bg-white dark:bg-black"
        />
        <AvatarFallback className="bg-white text-black dark:invert">
          {user.name[0]}
        </AvatarFallback>
      </Avatar>
    </>
  );
}
