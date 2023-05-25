import React, { SVGProps } from "react";

interface UserIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

const UserIcon = ({ className, ...props }: UserIconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
    strokeLinejoin="round"
    strokeWidth="1"
    strokeLinecap="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M11.9997 13.5C8.5419 13.5 5.63061 15.84 4.76307 19.0229C4.4726 20.0886 5.39517 21 6.49974 21H17.4997C18.6043 21 19.5269 20.0886 19.2364 19.0229C18.3689 15.84 15.4576 13.5 11.9997 13.5Z"></path>
    <path d="M15.4997 7C15.4997 8.933 13.9327 10.5 11.9997 10.5C10.0667 10.5 8.49974 8.933 8.49974 7C8.49974 5.067 10.0667 3.5 11.9997 3.5C13.9327 3.5 15.4997 5.067 15.4997 7Z"></path>
  </svg>
);

export default UserIcon;
