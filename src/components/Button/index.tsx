import React from "react";
import { Button as MuiButton } from "@mui/material";
import { ButtonProps } from "@mui/material/Button/Button";
import classNames from "classnames";
import { FC } from "react";
import Loader from "src/components/Loader";

import "./styles.module.scss";

export type Props = ButtonProps & {
  wrapperClassName?: string;
  isLoading?: boolean;
};

const Button: FC<Props> = ({
  className,
  wrapperClassName,
  disabled,
  isLoading,
  children,
  ...props
}) => {
  return (
    <div
      className={classNames("btn-wrapper", wrapperClassName, {
        "'disabled'": disabled,
      })}
    >
      <MuiButton
        {...props}
        className={classNames("button", className, {
          "'disabled'": disabled,
        })}
        disabled={disabled}
      >
        {isLoading && <Loader className={"loader"} absolute />}
        <div
          className={classNames("content", {
            "'loading'": isLoading,
          })}
        >
          {children}
        </div>
      </MuiButton>
    </div>
  );
};

export default Button;
