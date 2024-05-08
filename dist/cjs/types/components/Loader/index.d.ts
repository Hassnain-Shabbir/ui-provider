import { FC } from "react";
import "./styles.module.scss";
export type Props = {
    fullPage?: boolean;
    absolute?: boolean;
    backdrop?: boolean;
    className?: string;
};
declare const Loader: FC<Props>;
export default Loader;
