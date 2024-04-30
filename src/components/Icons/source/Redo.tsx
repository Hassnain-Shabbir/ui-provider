import React from "react";
import { FC } from "react";

import { IconProps } from "../index";

export const redoIconSource = `
  <svg viewbox="0 0 18 18">
    <polygon class="ql-fill ql-stroke" points="12 10 14 12 16 10 12 10"></polygon>
    <path class="ql-stroke" d="M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5"></path>
  </svg>
`;

const RedoIcon: FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 18 18">
    <polygon points="12 10 14 12 16 10 12 10" />
    <path
      fill="currentColor"
      d="M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5"
    />
  </svg>
);

export default RedoIcon;
