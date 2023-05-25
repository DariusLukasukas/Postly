import React, { SVGProps } from "react";

interface DeleteIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}
const DeleteIcon = ({ className, ...props }: DeleteIconProps) => (
  <svg
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
    <path d="M18 7H18.5C19.0523 7 19.5 6.55228 19.5 6V5.5C19.5 4.94772 19.0523 4.5 18.5 4.5H15.5M18 7V19C18 20.1046 17.1046 21 16 21H8C6.89543 21 6 20.1046 6 19V7M18 7H6M6 7H5.5C4.94772 7 4.5 6.55228 4.5 6V5.5C4.5 4.94772 4.94772 4.5 5.5 4.5H8.5M10 10.5V17.5M14 10.5V17.5M15.5 4.5V4C15.5 2.89543 14.6046 2 13.5 2H10.5C9.39543 2 8.5 2.89543 8.5 4V4.5M15.5 4.5H8.5"></path>
  </svg>
);

export default DeleteIcon;
