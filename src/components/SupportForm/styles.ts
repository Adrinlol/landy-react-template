import styled from "styled-components";

export const ContactContainer = styled("div")`
    display: flex;
    justify-content: center; 
    width: 100%;
  padding: 5rem 0;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0;
    flex-direction: column;
      justify-content: center;
      align-items: center;
  }
`;

export const Span = styled("span")`
  display: block;
  font-weight: 600;
  color: rgb(255, 130, 92);
  height: 0.775rem;
  padding: 0 0.675rem;
`;

export const ButtonContainer = styled("div")`
  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`;
