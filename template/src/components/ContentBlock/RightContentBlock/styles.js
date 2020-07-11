import styled from "styled-components";

export const BackgroundColor = styled.div`
  background: #f8f9fb;
`;
export const RightBlockContainer = styled.section`
  position: relative;
  padding: 2rem 0 0;
  position: relative;
  width: 100%;
  max-width: 1280px;
  padding-left: 50px;
  margin-right: auto;
  margin-left: auto;
  @media only screen and (max-width: 480px) {
    overflow: hidden;
    padding-left: 0;
  }
`;

export const Title = styled.h1`
  font-size: 1.875rem;
  line-height: 2.0625rem;
  color: #0a1f44;
  font-weight: 700;
  font-family: "Source Sans Pro", sans-serif;
  @media only screen and (max-width: 414px) {
    font-size: 1.625rem;
    max-width: 264px;
  }
`;

export const Content = styled.p`
  font-size: 1rem;
  margin: 1.5rem 0 1.5rem 0;
  font-family: "Source Sans Pro", sans-serif;
  ${"" /* line-height: 2; */}
  color: #0A1F44;
`;

export const ContentWrapper = styled.div`
  max-width: 350px;
  @media only screen and (max-width: 768px) {
    max-width: 480px;
  }
  @media only screen and (max-width: 414px) {
    max-width: 264px;
  }
`;

export const NoImage = styled.div`
  padding-left: 25px;
`;
