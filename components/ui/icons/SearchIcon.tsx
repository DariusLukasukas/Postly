import React, { SVGProps } from "react";

interface SearchIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}
const SearchIcon = ({ className, ...props }: SearchIconProps) => (
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
    <path d="M15.9414 15.4585L20.0004 19.5M11 6.5C13.2091 6.5 15 8.29086 15 10.5M18 10.5C18 6.63401 14.866 3.5 11 3.5C7.13401 3.5 4 6.63401 4 10.5C4 14.366 7.13401 17.5 11 17.5C14.866 17.5 18 14.366 18 10.5Z"></path>
  </svg>
);

export default SearchIcon;
