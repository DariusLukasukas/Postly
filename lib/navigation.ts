import BellIcon from "@/components/ui/icons/BellIcon";
import HomeIcon from "@/components/ui/icons/HomeIcon";
import LetterIcon from "@/components/ui/icons/LetterIcon";
import SearchIcon from "@/components/ui/icons/SearchIcon";
import UserIcon from "@/components/ui/icons/UserIcon";

export type NavigationItem = {
  label: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  href: string;
  authRequired: boolean;
  available: boolean;
};

export const navigation: NavigationItem[] = [
  {
    label: "Home",
    icon: HomeIcon,
    href: "/",
    authRequired: false,
    available: true,
  },
  {
    label: "Search ⌘K",
    icon: SearchIcon,
    href: "/search",
    authRequired: false,
    available: false,
  },
  {
    label: "Notifications",
    icon: BellIcon,
    href: "/notifications",
    authRequired: true,
    available: false,
  },
  {
    label: "Replies",
    icon: LetterIcon,
    href: "/replies",
    authRequired: true,
    available: false,
  },
  {
    label: "Profile",
    icon: UserIcon,
    href: "/user/",
    authRequired: true,
    available: true,
  },
];
