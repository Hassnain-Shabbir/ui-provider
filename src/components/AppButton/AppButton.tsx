import React from "react"
import { Button } from "@mui/material"

interface AppButtonProps {
  children: React.ReactNode
  variant: "text" | "contained" | "outlined"
  href: string
  disabled: boolean
  color:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning"
}

const AppButton = ({
  children,
  variant,
  href,
  disabled,
  color,
}: AppButtonProps) => {
  return (
    <Button variant={variant} color={color} href={href} disabled={disabled}>
      {children}
    </Button>
  )
}

export default AppButton
