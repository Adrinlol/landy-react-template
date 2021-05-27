import styled from "styled-components";

export const StyledButton = styled("button")<any>`
  background: ${(p) => p.color || "#2e186a"};
  color: ${(p) => (p.color ? "#2E186A" : "#fff")};
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border: 1px solid #2e186a;
  border-radius: 100px;
  height: 54px;
  outline: none;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 180px;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    color: #fff;
    border: 1px solid rgb(255, 130, 92);
    background-color: rgb(255, 130, 92);
  }

  @media only screen and (max-width: 1024px) {
    width: ${(p) => (p.fixedWidth ? "160px" : "100%")};
  }

  @media only screen and (max-width: 768px) {
    width: ${(p) => (p.fixedWidth ? "140px" : "100%")};
  }

  @media only screen and (max-width: 480px) {
    width: ${(p) => (p.fixedWidth ? "130px" : "100%")};
  }
`;
