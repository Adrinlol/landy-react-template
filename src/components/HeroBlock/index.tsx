import { useState, useEffect } from "react";
import { withTranslation } from "react-i18next";
import { Button } from "../../common/Button";
import {
  HeroContainer,
  BackgroundSlider,
  BackgroundImage,
  Overlay,
  ContentWrapper,
  Title,
  Subtitle,
  ButtonGroup
} from "./styles";
import { HeroBlockProps } from "./types";
import { getAssetPath } from "../../utils/paths";

const HeroBlock = ({ title, subtitle, buttons, backgroundImages }: HeroBlockProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <HeroContainer>
      <BackgroundSlider>
        {backgroundImages.map((image, index) => (
          <BackgroundImage 
            key={index}
            src={getAssetPath(image)}
            style={{
              opacity: index === currentImageIndex ? 1 : 0,
              transition: 'opacity 1s ease-in-out'
            }}
          />
        ))}
      </BackgroundSlider>
      <Overlay />
      <ContentWrapper>
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        <ButtonGroup>
          {buttons.map((button, index) => (
            <Button
              key={index}
              color={button.color}
              onClick={() => window.location.href = button.link}
            >
              {button.title}
            </Button>
          ))}
        </ButtonGroup>
      </ContentWrapper>
    </HeroContainer>
  );
};

export default withTranslation()(HeroBlock);
