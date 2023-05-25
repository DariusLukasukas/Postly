import { useUser } from "@/actions/useUser";
import { formatDate } from "@/lib/formatDate";
import EditProfileButton from "./EditProfileButton";
import FollowButton from "./FollowButton";
import useCurrentUser from "@/actions/useCurrentUser";
import CalendarIcon from "../ui/icons/CalendarIcon";

interface UserBioProps {
  userId: string;
}

export default async function UserBio({ userId }: UserBioProps) {
  const currentUserDATA = useCurrentUser();
  const fetchedUserData = useUser(userId);

  const [currentUser, fetchedUser] = await Promise.all([
    currentUserDATA,
    fetchedUserData,
  ]);

  const userCreatedAt = formatDate(fetchedUser.createdAt);

  function prepareUserData(user: any) {
    const { id, name, bio, username, profileImage, coverImage, followingIds } =
      user;
    return {
      id,
      name,
      bio,
      username,
      profileImage,
      coverImage,
      followingIds,
    };
  }

  return (
    <div className="pb-4">
      <div className="flex justify-end py-2">
        {currentUser?.id === userId && (
          <EditProfileButton currentUser={prepareUserData(currentUser)} />
        )}
        {currentUser && currentUser?.id !== userId && (
          <FollowButton
            currentUserId={currentUser.id}
            userIdToFollow={fetchedUser.user.id}
            followingIds={currentUser.followingIds || []}
          />
        )}
        {!currentUser && <div className="mb-10"></div>}
      </div>
      <div className="px-4">
        <div className="flex flex-col">
          <div className="font-medium">{fetchedUser.name}</div>
          <div className="-mt-1 text-sm text-neutral-400">
            @{fetchedUser.username}
          </div>
        </div>
        <div className="mt-2 flex flex-col text-sm">
          <div>{fetchedUser.bio}</div>
          <div className="mt-2 flex flex-row items-center gap-2 text-neutral-500">
            {/* <CalendarDays size={16} className="shrink-0" /> */}
            <CalendarIcon className="h-5 w-5" />
            <div className="text-sm font-light">Joined {userCreatedAt}</div>
          </div>
        </div>
        <div className="mt-2 flex flex-row items-center gap-6 font-light">
          <div className="flex flex-row items-center gap-1 text-sm">
            <div>{fetchedUser.followingIds?.length}</div>
            <div className="text-neutral-500">Following</div>
          </div>
          <div className="flex flex-row items-center gap-1 text-sm">
            <div>{fetchedUser.followersCount || 0}</div>
            <div className="text-neutral-500">Followers</div>
          </div>
        </div>
      </div>
    </div>
  );
}
