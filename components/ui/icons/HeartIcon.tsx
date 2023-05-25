import React, { SVGProps } from "react";

interface HeartIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}
const HeartIcon = ({ className, ...props }: HeartIconProps) => (
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
    <path d="M16.1644 4C14.4385 4 13.354 4.85903 12.7342 5.61386C12.4423 5.9694 11.6543 5.96934 11.3624 5.61378C10.7427 4.85897 9.65829 4 7.93201 4C4.85416 4 3 6.93434 3 9.35257C3 12.5197 8.52599 16.9845 10.941 18.7844C11.6011 19.2765 12.4954 19.2766 13.1556 18.7846C15.5706 16.985 21.0965 12.5214 21.0965 9.35329C21.0965 6.93434 19.2437 4 16.1644 4Z"></path>
  </svg>
);

export default HeartIcon;
