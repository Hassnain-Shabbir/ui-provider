import React from 'react';
import { ButtonProps } from '@mui/material/Button/Button';

interface AppButtonProps {
    children: React.ReactNode;
    variant: "text" | "contained" | "outlined";
    href: string;
    disabled: boolean;
    color: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
}
declare const AppButton: ({ children, variant, href, disabled, color, }: AppButtonProps) => React.JSX.Element;

interface Props extends ButtonProps {
    wrapperClassName?: string;
    isLoading?: boolean;
}
declare const Button: ({ className, wrapperClassName, disabled, isLoading, children, ...props }: Props) => React.JSX.Element;

export { AppButton, Button };
