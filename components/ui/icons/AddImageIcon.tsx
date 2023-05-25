import React, { SVGProps } from "react";

interface AddImageProps extends SVGProps<SVGSVGElement> {
  className?: string;
}
const AddImageIcon = ({ className, ...props }: AddImageProps) => (
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
    <path d="M3 11C3 7.22876 3 5.34315 4.17157 4.17157C5.34315 3 7.22876 3 11 3H13C16.7712 3 18.6569 3 19.8284 4.17157C21 5.34315 21 7.22876 21 11V13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V11Z"></path>
    <path d="M10 16L14.2929 11.7071C14.6834 11.3166 15.3166 11.3166 15.7071 11.7071L18.5 14.5M10 16L11 17M10 16L8.20711 14.2071C7.81658 13.8166 7.18342 13.8166 6.79289 14.2071L5.5 15.5M11 9C11 10.1046 10.1046 11 9 11C7.89543 11 7 10.1046 7 9C7 7.89543 7.89543 7 9 7C10.1046 7 11 7.89543 11 9Z"></path>
  </svg>
);

export default AddImageIcon;
