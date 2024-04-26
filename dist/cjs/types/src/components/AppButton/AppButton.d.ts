import React from "react";
interface AppButtonProps {
    children: React.ReactNode;
    variant: "text" | "contained" | "outlined";
    href: string;
    disabled: boolean;
    color: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
}
declare const AppButton: ({ children, variant, href, disabled, color, }: AppButtonProps) => React.JSX.Element;
export default AppButton;
