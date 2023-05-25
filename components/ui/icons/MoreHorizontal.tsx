import React, { SVGProps } from "react";

interface MoreHorizontalProps extends SVGProps<SVGSVGElement> {
  className?: string;
}
const MoreHorizontal = ({ className, ...props }: MoreHorizontalProps) => (
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
    <path d="M17 13C16.4477 13 16 12.5523 16 12C16 11.4477 16.4477 11 17 11C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13Z"></path>
    <path d="M12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13Z"></path>
    <path d="M7 13C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11C7.55228 11 8 11.4477 8 12C8 12.5523 7.55228 13 7 13Z"></path>
  </svg>
);

export default MoreHorizontal;
