import React, { SVGProps } from "react";

interface ReTweetProps extends SVGProps<SVGSVGElement> {
  className?: string;
}
const ReTweet = ({ className, ...props }: ReTweetProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
    strokeLinejoin="round"
    strokeWidth="1.2"
    strokeLinecap="round"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path d="M18 15V7C18 5.89543 17.1046 5 16 5H10.5M18 15L15 12M18 15L21 12M6 9V17C6 18.1046 6.89543 19 8 19H13.5M6 9L9 12M6 9L3 12"></path>
  </svg>
);

export default ReTweet;
