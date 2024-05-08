import { ButtonProps } from "@mui/material/Button/Button";
import { FC } from "react";
import "./styles.module.scss";
export type Props = ButtonProps & {
    wrapperClassName?: string;
    isLoading?: boolean;
};
declare const Button: FC<Props>;
export default Button;
