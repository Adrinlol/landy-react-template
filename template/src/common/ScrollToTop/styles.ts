import styled from "styled-components";

export const ScrollUpContainer = styled("div")<any>`
  padding: 10px;
  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 10;
  cursor: pointer;
  background: rgb(241, 242, 243);
  text-align: center;
  align-items: center;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
  visibility: ${(p) => (p.show ? "visible" : "hidden")};
  opacity: ${(p) => (p.show ? "1" : "0")};
  display: flex;

  &:hover,
  &:active,
  &:focus {
    background: rgb(224, 224, 224);
  }

  @media screen and (max-width: 1240px) {
    display: none;
  }
`;
