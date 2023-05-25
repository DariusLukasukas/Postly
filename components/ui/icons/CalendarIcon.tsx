import React, { SVGProps } from "react";

interface CalendarIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}
const CalendarIcon = ({ className, ...props }: CalendarIconProps) => (
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
    <path d="M21 8.00001H3M8 5.00001V3.00001M16 5V3M5 4.00001H4.9C3.85066 4.00001 3 4.85067 3 5.90001V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V5.90001C21 4.85067 20.1493 4.00001 19.1 4.00001H19M11 4.00001H13"></path>
  </svg>
);

export default CalendarIcon;
