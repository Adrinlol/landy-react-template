import { SocialIconProps } from "../types";

export const SocialIcon = ({ link, src, width, height }: SocialIconProps) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <img src={`/img/svg/${src}`} alt={src} width={width} height={height} />
  </a>
);
