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
  Description,
  ButtonGroup,
  CountdownContainer,
  CountdownItem,
  CountdownNumber,
  CountdownLabel
} from "./styles";
import { HeroBlockProps } from "./types";
import { getAssetPath } from "../../utils/paths";

const HeroBlock = ({ title, subtitle, description, buttons, backgroundImages }: HeroBlockProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(imageInterval);
  }, [backgroundImages.length]);

  useEffect(() => {
    const targetDate = new Date('2025-05-11T10:30:00Z'); // 4:00 PM IST in UTC

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleClick = (link: string) => {
    if (link.startsWith('/')) {
      // Route navigation
      window.location.hash = link;
    } else if (link.startsWith('#')) {
      // Smooth scroll to section
      const element = document.getElementById(link.substring(1));
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <HeroContainer id="hero">
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
        {description && <Description>{description}</Description>}
        <CountdownContainer>
          <CountdownItem>
            <CountdownNumber>{timeLeft.days}</CountdownNumber>
            <CountdownLabel>Days</CountdownLabel>
          </CountdownItem>
          <CountdownItem>
            <CountdownNumber>{timeLeft.hours}</CountdownNumber>
            <CountdownLabel>Hours</CountdownLabel>
          </CountdownItem>
          <CountdownItem>
            <CountdownNumber>{timeLeft.minutes}</CountdownNumber>
            <CountdownLabel>Minutes</CountdownLabel>
          </CountdownItem>
          <CountdownItem>
            <CountdownNumber>{timeLeft.seconds}</CountdownNumber>
            <CountdownLabel>Seconds</CountdownLabel>
          </CountdownItem>
        </CountdownContainer>
        <ButtonGroup>
          {buttons.map((button, index) => (
            <Button
              key={index}
              color={button.color}
              onClick={() => handleClick(button.link)}
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
