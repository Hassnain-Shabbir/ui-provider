import React from "react";
import { FC } from "react";

import { IconProps } from "..";

const LoaderIcon: FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="200px"
    height="200px"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
  >
    <path
      d="M14.1,7.5l8.1,0v14.7c0,0.6,0,1.2,0.1,1.7c-0.1-0.6-0.1-1.2-0.1-1.7V7.5c0,0,63.6,0,63.6,0h-8.1 c0,0,0,14.7,0,14.7c0,7-4.6,13.3-11.7,17.1c-4.2,2.3-6.8,5.9-6.8,9.8v1.9c0,3.9,2.5,7.6,6.8,9.8c7.1,3.8,11.7,10,11.7,17.1 c0,0,0,14.7,0,14.7h8.1h-8.1H50h18V82.3c0-3.8-2.6-7.4-7-9.8c-0.1,0-0.1-0.1-0.2-0.1c-6.6-3.6-14.9-3.6-21.5,0 c-0.1,0-0.1,0.1-0.2,0.1c-4.5,2.4-7,6-7,9.8l0,10.2h18c0,0-18,0-18,0H14.1l8.1,0V77.8c0-7,4.6-13.3,11.7-17.1 c4.2-2.3,6.8-5.9,6.8-9.8v-1.9c0-3.9-2.5-7.6-6.8-9.8c-6.5-3.5-10.9-9-11.6-15.3l9.9,0c0.7,3.1,3,5.9,6.8,8c5.7,3,9.5,7.7,10.9,12.9 c1.4-5.2,5.3-9.9,10.9-12.9c3.8-2,6.2-4.8,6.8-8H32.2"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <animate
        attributeName="stroke-dasharray"
        keyTimes="0;1"
        values="480 100;480 110"
        dur="3.2258064516129035s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="stroke-dashoffset"
        keyTimes="0;1"
        values="0;-1180"
        dur="3.2258064516129035s"
        repeatCount="indefinite"
      />
    </path>
  </svg>
);

export default LoaderIcon;
