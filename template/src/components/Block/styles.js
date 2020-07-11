import styled from "styled-components";

export const Content = styled.p`
  font-size: 1rem;
  font-family: "Source Sans Pro", sans-serif;
  color: #0a1f44;
  margin-top: 1.5rem;
`;

export const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
  color: #0a1f44;
  line-height: 2.0625rem;
  max-width: 309px;
  font-family: "Source Sans Pro", sans-serif;
  @media only screen and (max-width: 414px) {
    font-size: 1.625rem;
    max-width: 340px;
  }
`;

export const Container = styled.div`
  position: relative;
  max-width: ${(props) => (props.padding ? "450px" : "700px")};
  padding: ${(props) => (props.padding ? "0 0 6rem" : "")};
  @media only screen and (max-width: 768px) {
    padding: ${(props) => (props.padding ? "0 0 4rem" : "")};
  }
  @media only screen and (max-width: 414px) {
    padding: ${(props) => (props.padding ? "0 0 0rem" : "")};
  }
`;

export const TextWrapper = styled.div`
  border-radius: 3rem;
  max-width: 400px;
`;
