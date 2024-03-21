import { StyledButton } from "./styles";
import { ButtonProps } from "../types";
import {ButtonWrapper} from "../../components/ContentBlock/styles";

export const Button = ({ color, children, onClick }: ButtonProps) => (
  <StyledButton color={color} onClick={onClick}>
    {children}
  </StyledButton>
)
export const ConditionalButtonWrapper = (
    item: {
      color?: string;
      title: string;
      buttonCount: number;
    },
    id: number) => {
  return (
      item.buttonCount > 1 ?
          <ButtonWrapper>
            <Button
                key={id}
                color={item.color}>
              {item.title}
            </Button>
          </ButtonWrapper> :
          <Button
              key={id}
              color={item.color}>
            {item.title}
          </Button>
  )
}
