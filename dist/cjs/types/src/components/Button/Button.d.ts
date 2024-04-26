import { ButtonProps } from "@mui/material/Button/Button";
import React from "react";
interface Props extends ButtonProps {
    wrapperClassName?: string;
    isLoading?: boolean;
}
declare const Button: ({ className, wrapperClassName, disabled, isLoading, children, ...props }: Props) => React.JSX.Element;
export default Button;
