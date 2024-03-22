import styled from "styled-components";

export const StyledContainer = styled("div")<{
  border?: boolean;
}>`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  //padding-right: inherit;
  //padding-left: inherit;
  border-top: ${(p) => (p.border ? "1px solid #CDD1D4" : "")};

  @media only screen and (max-width: 1024px) {
    max-width: calc(100% - 68px);
    padding: 0 30px;
    margin-right: 0;
    margin-left: 0;
  }

  @media only screen and (max-width: 768px) {
    //max-width: calc(100% - 38px);
    //padding: 0 18px;
  }

  @media only screen and (max-width: 414px) {
    //max-width: 100%;
    //padding: 0 18px;
  }
`;
