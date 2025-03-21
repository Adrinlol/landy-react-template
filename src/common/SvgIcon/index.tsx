import { SvgIconProps } from "../types";

export const SvgIcon = ({ src, width, height }: SvgIconProps) => (
  <img 
    src={`/img/svg/${src}`} 
    alt={src} 
    width={width} 
    height={height}
    style={{
      borderRadius: "15px", // Rounded corners
      maxWidth: "100%", // Prevent stretching
      objectFit: "cover", // Keep aspect ratio
    }} 
  />
);
