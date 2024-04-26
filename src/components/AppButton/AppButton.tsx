import React from "react"
import { Button } from "@mui/material"

interface AppButtonProps {
  children: React.ReactNode
  [key: string]: any
}

const AppButton = ({ children, ...props }: AppButtonProps) => {
  return <Button {...props}>{children}</Button>
}

export default AppButton
