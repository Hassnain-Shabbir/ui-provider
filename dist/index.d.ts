import React, { FC } from 'react';
import { ButtonProps } from '@mui/material/Button/Button';

interface AppButtonProps {
    children: React.ReactNode;
    variant: "text" | "contained" | "outlined";
    href: string;
    disabled: boolean;
    color: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
}
declare const AppButton: ({ children, variant, href, disabled, color, }: AppButtonProps) => React.JSX.Element;

type Props$1 = ButtonProps & {
    wrapperClassName?: string;
    isLoading?: boolean;
};
declare const Button: FC<Props$1>;

type Props = {
    fullPage?: boolean;
    absolute?: boolean;
    backdrop?: boolean;
    className?: string;
};
declare const Loader: FC<Props>;

export { AppButton, Button, Loader };
