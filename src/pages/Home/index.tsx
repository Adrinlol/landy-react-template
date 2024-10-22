import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ContactContent from "../../content/ContactContent.json";
import ExpertiseContent from "../../content/ExpertiseContent.json";
import WhyContent from "../../content/WhyContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        icon="developer.svg"
        id="intro"
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
      />
      <ContentBlock
        direction="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="cat_desk.svg"
        id="services"
      />
      <ContentBlock
        direction="right"
        align="right"
        title={MissionContent.title}
        content={MissionContent.text}
        section={MissionContent.section}
        icon="product-launch.svg"
        id="about"
      />
      <ContentBlock
        direction="left"
        title={ExpertiseContent.title}
        content={ExpertiseContent.text}
        section={ExpertiseContent.section}
        icon="graphs.svg"
        id="expertise"
      />
      <MiddleBlock
        title={WhyContent.title}
        content={WhyContent.text}
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
