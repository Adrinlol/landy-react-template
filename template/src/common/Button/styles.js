import styled from "styled-components";

export const Button = styled.button`
  border: none;
  margin: auto !important;
  background: ${(props) => props.color || 'rgba(63,44,175,1)'};
  color: #ffffff;
  font-size: 0.875rem;
  font-weight: 700;
  font-family: "Source Sans Pro", sans-serif;
  width: 100%;
  height: 42px;
  border-radius: 2rem;
  transition: all 0.2s ease-in;
  outline: none;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 180px;

  @media only screen and (max-width: 768px) {
    width: 130px;
  }

  @media only screen and (max-width: 480px) {
    width: 130px;
  }
`;
