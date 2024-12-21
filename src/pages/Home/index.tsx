import { lazy } from "react";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import HeroContent from "../../content/HeroContent.json";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const About = lazy(() => import("../../components/About"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const HeroBlock = lazy(() => import("../../components/HeroBlock"));

const Home = () => {
  return (
    <>
      <HeroBlock
        title={HeroContent.title}
        subtitle={HeroContent.subtitle}
        buttons={HeroContent.buttons}
        backgroundImages={HeroContent.backgroundImages}
      />
      <Container>
        <ScrollToTop />
        <About
          title={AboutContent.title}
          content={AboutContent.content}
        />
        <ContentBlock
          direction="right"
          title={MissionContent.title}
          content={MissionContent.text}
          icon="product-launch.svg"
          id="mission"
        />
        <ContentBlock
          direction="left"
          title={ProductContent.title}
          content={ProductContent.text}
          icon="waving.svg"
          id="product"
        />
      </Container>
    </>
  );
};

export default Home;
