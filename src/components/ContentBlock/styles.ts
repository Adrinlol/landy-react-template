import { Row } from "antd";
import styled from "styled-components";

export const ContentSection = styled("section")`
    //display: flex;
    //justify-content: center;
  padding: 10rem 0 8rem;
    width: 100%;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
       
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
     
`;

export const StyledRow = styled(Row)`
  flex-direction: ${({ direction }: { direction: string }) =>
    direction === "left" ? "row" : "row-reverse"};
     
`;

export const ContentWrapper = styled("div")`
  position: relative;
  width: 100%;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`;

export const ServiceWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
     
`;

export const MinTitle = styled("h6")`
  font-size: 15px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
`;

export const MinDesc = styled("p")`
    font-size: 16px;
`;

export const MinPara = styled("p")`
  font-size: 13px;
     
`;

export const ButtonWrapper = styled("div")`
    display: flex;
    justify-content: space-between;
    max-width: 100%;

    @media screen and (min-width: 1024px) {
        max-width: 80%;
    }

    button:last-child {
        margin-left: 20px;
    }
`;

export const PopoverContainer = styled("div")`
    width: 100%;
    max-width: 500px
`
