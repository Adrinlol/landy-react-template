import styled from "styled-components";

export const ContactContainer = styled.div`
  background: #f8f9fb;
  padding-top: 4rem;
`;

export const Contact = styled.section`
  padding: 1rem 0 4rem;
  position: relative;
  width: 100%;
  max-width: 1280px;
  padding-left: 8rem;
  padding-right: 8rem;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  align-items: center;
  padding: ${(props) => (props.padding ? "8rem 0rem" : "")};
  @media only screen and (max-width: 768px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

export const IconContainer = styled.div`
  @media only screen and (min-width: 980px) {
    padding: 10rem 7rem;
  }
`;

export const FormGroup = styled.form`
  width: 100%;
  max-width: 520px;
  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`;

export const Span = styled.span`
  display: block;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 600;
  color: rgb(255, 101, 132);
  height: 0.775rem;
  padding: 0 0.675rem;
`;

export const ButtonContainer = styled.div`
  text-align: end;
  position: relative;
  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`;
