import styled from "styled-components";

export const LeftContentBlock = styled.section`
  padding: 0rem 0 2rem;
  position: relative;
  max-width: 1280px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: ${(props) => (props.margin ? "-12rem" : "")};
  @media only screen and (max-width: 480px) {
    overflow: hidden;
  }
  @media only screen and (max-width: 768px) {
    padding: 2rem 0 10rem;
  }
  @media only screen and (max-width: 414px) {
    padding: 0rem 0 10rem;
  }
`;

export const ContentContainer = styled.div`
  padding-bottom: 3em;
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding-bottom: 0rem;
  }
`;

export const Title = styled.h1`
  font-size: 1.875rem;
  line-height: 2.0625rem;
  font-weight: 700;
  color: #0a1f44;
  max-width: 480px;
  font-family: "Source Sans Pro", sans-serif;
  padding-left: 4rem;
  @media only screen and (max-width: 414px) {
    font-size: 1.625rem;
    max-width: 264px;
    padding: 1.25rem 0rem 0px 0.25rem;
  }
  @media only screen and (max-width: 768px) {
    padding-top: 2rem;
  }
`;

export const Content = styled.p`
  font-size: 1rem;
  font-family: "Source Sans Pro", sans-serif;
  color: #0a1f44;
  padding-left: 4rem;
  @media only screen and (min-width: 1024px) {
    max-width: 406px;
  }
  @media only screen and (max-width: 414px) {
    padding-left: 0;
  }
`;

export const ContentWrapper = styled.div`
  @media only screen and (max-width: 768px) {
    max-width: 480px;
  }
  @media only screen and (max-width: 414px) {
    max-width: 264px;
  }
`;

export const IconContainer = styled.div`
  padding-top: ${(props) => (props.padding ? "10rem" : "")};
  @media only screen and (max-width: 414px) {
    padding-top: ${(props) => (props.padding ? "0rem" : "")};
  }
`;
