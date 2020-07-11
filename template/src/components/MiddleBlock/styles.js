import styled from "styled-components";

export const MiddleBlock = styled.section`
  position: relative;
  padding: ${(props) => (props.last ? "7em 0 6.5rem" : "8rem 0 2rem")};
  text-align: center;
  display: flex;
  justify-content: center;
  background: ${(props) => (props.last ? "#f8f9fb" : "")};
  @media only screen and (max-width: 414px) {
    padding: ${(props) => (props.last ? "5rem 0 6.5rem" : "3rem 0 2rem")};
  }
`;

export const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
  color: #0a1f44;
  line-height: 2.0625rem;
  max-width: 480px;
  font-family: "Source Sans Pro", sans-serif;
  @media only screen and (max-width: 414px) {
    font-size: 1.625rem;
    max-width: 340px;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const Content = styled.p`
  font-size: 1rem;
  font-family: "Source Sans Pro", sans-serif;
  color: #0a1f44;
  max-width: 480px;
  padding: 0.75rem 0 0.75rem;

  @media only screen and (max-width: 414px) {
    max-width: ${(props) => (props.last ? "" : "264px")};
  }
`;

export const ContentWrapper = styled.div`
  background-color: #ffff;
  border-radius: 3rem;
  max-width: 480px;
  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
