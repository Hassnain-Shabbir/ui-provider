import React from "react";
import classNames from "classnames";
import { FC } from "react";

import { LoaderIcon } from "../Icons";
import "./styles.module.scss";

export type Props = {
  fullPage?: boolean;
  absolute?: boolean;
  backdrop?: boolean;
  className?: string;
};

const Loader: FC<Props> = ({ fullPage, absolute, backdrop, className }) => {
  return (
    <div
      className={classNames(className, "loader", {
        "page-loader-wrapper": fullPage,
        "loader-wrapper": !fullPage,
        "'absolute'": absolute && !fullPage,
        "'backdrop'": backdrop,
      })}
    >
      <LoaderIcon
        className={classNames("icon", "icon", {
          "full-page": fullPage,
        })}
      />
    </div>
  );
};

export default Loader;
