import styled from "styled-components";

export const RegisterContainer = styled("div")`
  padding: 7rem 0 5rem;
  margin-top: 60px;
  display: flex;
  min-height: calc(100vh - 60px);

  @media only screen and (max-width: 1024px) {
    padding: 5rem 0 3rem;
  }
`;

export const LeftColumnWrapper = styled("div")`
  height: calc(100vh - 120px);
  position: relative;
  padding-right: 2rem;

  @media only screen and (max-width: 1024px) {
    height: auto;
    padding-right: 0;
  }
`;

export const LeftColumn = styled("div")`
  position: sticky;
  top: 40%;
  width: 100%;
  max-width: 600px;
  background: white;

  @media only screen and (max-width: 1024px) {
    position: relative;
    top: 0;
    width: 100%;
  }
`;

export const FormGroup = styled("form")`
  width: 100%;
  max-width: 600px;
  overflow-y: auto;
  margin-left: auto;

  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
    padding-left: 0;
  }

  .ant-col {
    margin-bottom: 1rem;
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
  text-align: end;
  position: relative;
  margin-top: 2rem;

  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`; 