import { PngIconProps } from "../types";

export const PngIcon = ({ src, width, height }: PngIconProps ) => (
    <img src={`/img/svg/${src}`} alt={src} width={width} height={height} />
);
