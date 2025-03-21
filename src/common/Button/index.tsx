import { StyledButton } from "./styles";
import { ButtonProps } from "../types";

export const Button = ({ color, children, onClick, htmlType }: ButtonProps) => (
  <StyledButton type={htmlType || "button"} color={color} onClick={onClick}>
    {children}
  </StyledButton>
);
