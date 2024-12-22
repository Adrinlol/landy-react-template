import styled from "styled-components";

export const HeroContainer = styled.div`
  position: relative;
  height: 100vh;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0;
  padding-top: 0;
  box-sizing: border-box;
`;

export const BackgroundSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); // Adjust opacity here
`;

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 60px 20px 0;
  max-width: 800px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-family: "ML TT Thunchan", "Manjari", "Noto Sans Malayalam", system-ui;
  color: #ffffff;
  font-size: 4rem;
  margin-bottom: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Description = styled.p`
  font-family: "ML TT Thunchan", "Manjari", "Noto Sans Malayalam", system-ui;
  color: #ffffff;
  font-size: 1.5rem;
  margin-bottom: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 1.25rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const Subtitle = styled.p`
  font-family: "ML TT Thunchan", "Manjari", "Noto Sans Malayalam", system-ui;
  color: #ffffff;
  font-size: 2rem;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  
  button {
    color: #fff;
    border: ${props => props.color === 'transparent' ? '2px solid #fff' : 'none'};
    
    &:hover {
      color: #fff;
      opacity: 0.9;
    }
  }
  
  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    
    button {
      width: 200px;
    }
  }
`;
