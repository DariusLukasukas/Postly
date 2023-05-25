import React, { SVGProps } from "react";

interface PencilIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}
const PencilIcon = ({ className, ...props }: PencilIconProps) => (
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
    <path d="M15.1476 5.17537L18.8452 8.83255M19.2372 3.91422L20.0861 4.76321C20.8672 5.54426 20.8672 6.81059 20.0861 7.59164L8.85031 18.8274C8.63076 19.047 8.36311 19.2124 8.06856 19.3106L3.94902 20.6838C3.55814 20.8141 3.18627 20.4422 3.31656 20.0513L4.68974 15.9318C4.78793 15.6372 4.95335 15.3696 5.1729 15.15L16.4087 3.91421C17.1898 3.13317 18.4561 3.13317 19.2372 3.91422Z"></path>
  </svg>
);

export default PencilIcon;
