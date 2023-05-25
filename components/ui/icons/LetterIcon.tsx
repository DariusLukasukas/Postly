import React, { SVGProps } from "react";

interface LetterIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}
const LetterIcon = ({ className, ...props }: LetterIconProps) => (
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
    <path d="M9.42867 14.2333L4.35401 12.6008C3.49818 12.3254 3.41204 11.1486 4.21866 10.7516L19.8407 3.0628C20.6391 2.66985 21.5145 3.4371 21.2297 4.28013L17.196 16.218C17.0121 16.7623 16.4085 17.04 15.8755 16.8257L13.1252 15.7197M9.42867 14.2333V18.3296C9.42867 19.3483 10.7738 19.7147 11.2905 18.8369L13.1252 15.7197M9.42867 14.2333L13.1252 15.7197M9.42867 14.2333L20.8178 3.3834"></path>
  </svg>
);

export default LetterIcon;
