import React from "react"
import { AddBox } from "@mui/icons-material"
import Button from "../Button"

interface IconButtonProps {
  children: React.ReactNode
}

const IconButton = ({ children }: IconButtonProps) => {
  return (
    <Button>
      {children}
      <span>
        <AddBox />
      </span>
    </Button>
  )
}

export default IconButton
