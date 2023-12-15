import styled from "styled-components";
import { Row } from "antd";

export const MiddleBlockSection = styled("section")`
  position: relative;
  padding: 1rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const StyledRow = styled(Row)`
  flex-direction: ${({ direction }: { direction: string }) =>
    direction === "left" ? "row" : "row-reverse"};
`;

export const Content = styled("p")`
  padding: 0.75rem 0 0.75rem;
`;

export const ContentWrapper = styled("div")`
  max-width: 800px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
