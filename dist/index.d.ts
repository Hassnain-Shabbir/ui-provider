import { ButtonProps } from '@mui/material/Button/Button';
import { FC } from 'react';

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

export { Button, Loader };
