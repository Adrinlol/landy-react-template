import {Flex, Row} from "antd";
import styled from "styled-components";

export const StyledFlex = styled(Flex)`
    @media only screen and (max-width: 1024px) {
       align-items: center; 
    }
`
export const ContentSection = styled("section")`
  padding: 10rem 0 8rem;
  width: 100%;
  @media only screen and (max-width: 1024px) {
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
  text-align: justify;

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`;

export const ServiceWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  text-align: justify;
  max-width: 100%;
     
`;

export const Title = styled("h6")`
  width: 100%;
  padding: 0.5rem 0;
  margin-bottom: 2rem;
  margin-top: 2rem;
  color: #000;
  font-family: "Poppins Bold"
`;

export const MinTitle = styled("p")`
  font-size: 16px;
  line-height: 1rem;
  color: #000;
  font-family: "Poppins Regular", sans-serif;
`;

export const MinDesc = styled("p")`
    font-size: 16px;
`;

export const MinPara = styled("p")`
  font-size: 13px;
     
`;

export const ButtonWrapper = styled("div")`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1em;
    width: 100%;

    @media screen and (max-width: 1024px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 100%;
    }

    button:last-child {
        margin-left: 20px;
    }
`;

export const ServiceContainer = styled("div")`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    @media only screen and (max-width: 1024px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
export const ServiceContentContainer = styled("div")`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    @media only screen and (max-width: 1024px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const PopoverContainer = styled("div")`
    width: 100%;
    max-width: 500px
`
