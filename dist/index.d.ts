import React from 'react';

interface AppButtonProps {
    children: React.ReactNode;
    [key: string]: any;
}
declare const AppButton: ({ children, ...props }: AppButtonProps) => React.JSX.Element;

export { AppButton };
