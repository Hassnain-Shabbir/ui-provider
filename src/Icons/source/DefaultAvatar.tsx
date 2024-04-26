import { FC } from "react";

import { IconProps } from "..";

const DefaultAvatarIcon: FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    width="20"
    height="20"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
  >
    <path
      id="avatar-user-solid"
      d="M10-17.5A10,10,0,0,0,0-7.5a10,10,0,0,0,10,10,10,10,0,0,0,10-10A10,10,0,0,0,10-17.5Zm0,5a2.812,2.812,0,0,1,2.813,2.813A2.812,2.812,0,0,1,10-6.875,2.813,2.813,0,0,1,7.188-9.687,2.812,2.812,0,0,1,10-12.5ZM10,0A7.48,7.48,0,0,1,4.7-2.2,4.348,4.348,0,0,1,8.75-5h2.5A4.343,4.343,0,0,1,15.3-2.2,7.477,7.477,0,0,1,10,0Z"
      transform="translate(0 17.5)"
      fill="#ffffff"
    />
  </svg>
);

export default DefaultAvatarIcon;
