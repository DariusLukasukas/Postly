import React, { SVGProps } from "react";

interface BellIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}
const BellIcon = ({ className, ...props }: BellIconProps) => (
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
    <path d="M11.9999 3C9.49494 3 7.46431 5.06638 7.46431 7.61538C7.46431 8.57589 7.64454 9.35217 7.11214 11.0769C6.91612 11.7119 6.11934 13.0006 5.27859 14.2581C4.3664 15.6225 5.32154 17.5 6.96275 17.5C10.3208 17.5 13.6789 17.5 17.037 17.5C18.6782 17.5 19.6333 15.6225 18.7211 14.2581C17.8804 13.0006 17.0836 11.7119 16.8876 11.0769C16.3552 9.35217 16.5354 8.57589 16.5354 7.61538C16.5354 5.06638 14.5048 3 11.9999 3ZM11.9999 3V1.5M14.9999 17.5V18C14.9999 19.9882 13.6567 21 11.9999 21C10.343 21 8.99985 19.9882 8.99985 18V17.5"></path>
  </svg>
);

export default BellIcon;
