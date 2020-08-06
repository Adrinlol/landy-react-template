import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) => props.color || "#111B47"};
  color: ${props => props.color ? '#000' : '#fff'};
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border: 2px solid #111B47;
  height: 42px;
  outline: none;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 180px;

  @media only screen and (max-width: 1024px) {
    width: ${(props) => (props.width ? "160px" : "100%")};
  }

  @media only screen and (max-width: 768px) {
    width: ${(props) => (props.width ? "140px" : "100%")};
  }

  @media only screen and (max-width: 480px) {
    width: ${(props) => (props.width ? "130px" : "100%")};
  }
`;
