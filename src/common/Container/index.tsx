import { StyledContainer } from "./styles";
import { ContainerProps } from "../types";

const Container = ({ border, children }: ContainerProps) => (
  <StyledContainer $border={border}>{children}</StyledContainer> // ✅ Pass $border instead of border
);

export default Container;
