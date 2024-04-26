import { FC } from "react";

import { IconProps } from "..";

export const undoIconSource = `
  <svg viewbox="0 0 18 18">
    <polygon class="ql-fill ql-stroke" points="6 10 4 12 2 10 6 10"></polygon>
    <path class="ql-stroke" d="M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9"></path>
  </svg>
`;

const UndoIcon: FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 18 18">
    <polygon points="6 10 4 12 2 10 6 10" />
    <path
      fill="currentColor"
      d="M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9"
    />
  </svg>
);

export default UndoIcon;
