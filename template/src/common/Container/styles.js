import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 1280px;
  padding-right: 25px;
  padding-left: 25px;
  margin-right: auto;
  margin-left: auto;

  @media only screen and (max-width: 480px) {
    overflow: hidden;
    max-width: ;
  }

  @media only screen and (max-width: 1024px) {
    overflow: hidden;
    max-width: 950px;
  }

  @media only screen and (max-width: 768px) {
    overflow: hidden;
    max-width: 700px;
  }

  @media only screen and (max-width: 414px) {
    overflow: hidden;
    max-width: 370px;
  }
`;
