import React from "react"

interface AppButtonProps {
  children: React.ReactNode
}

const AppButton = ({ children }: AppButtonProps) => {
  return <div>{children}</div>
}

export default AppButton
