import React, { SVGProps } from "react";

interface HomeIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}
const HomeIcon = ({ className, ...props }: HomeIconProps) => (
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
    <path d="M19 18V9.82842C19 9.29799 18.7794 8.80146 18.369 8.46531C17.2908 7.58195 15.0968 5.82622 13.3509 4.26565C12.5717 3.56917 11.3873 3.52517 10.5938 4.2053L5.69842 8.40135C5.25513 8.78131 5 9.33601 5 9.91986V18C5 19.1046 5.89543 20 7 20H7.5C8.60457 20 9.5 19.1046 9.5 18V16C9.5 14.8954 10.3954 14 11.5 14H12.5C13.6046 14 14.5 14.8954 14.5 16V18C14.5 19.1046 15.3954 20 16.5 20H17C18.1046 20 19 19.1046 19 18Z"></path>
  </svg>
);

export default HomeIcon;
