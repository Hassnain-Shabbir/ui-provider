import { Button as MuiButton } from "@mui/material"
import { ButtonProps } from "@mui/material/Button/Button"
import classNames from "classnames"
import { FC } from "react"
import React from "react"

import Loader from "../Loader"

// import "./styles.module.scss"

// export type Props = ButtonProps & {
//   wrapperClassName?: string
//   isLoading?: boolean
//   className: string
// }

interface Props extends ButtonProps {
  wrapperClassName?: string
  isLoading?: boolean
}

const Button = ({
  className,
  wrapperClassName,
  disabled,
  isLoading,
  children,
  ...props
}: Props) => {
  return (
    <div
      // className={
      //     classNames(styles["btn-wrapper"], wrapperClassName, {[styles["disabled"]]: disabled,})}
      className={classNames("btn-wrapper", wrapperClassName, {
        '"disabled"': disabled,
      })}
    >
      <MuiButton
        {...props}
        className={classNames("button", className, {
          "'disabled'": disabled,
        })}
        disabled={disabled}
      >
        {isLoading && <Loader className={"'loader'"} absolute />}
        <div
          className={classNames("content", {
            "'loading'": isLoading,
          })}
        >
          {children}
        </div>
      </MuiButton>
    </div>
  )
}

export default Button
