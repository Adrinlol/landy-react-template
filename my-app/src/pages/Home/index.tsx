import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import why1 from "../../content/why1.json";
import why2 from "../../content/why2.json";
import why3 from "../../content/why3.json";
import why4 from "../../content/why4.json";
import why5 from "../../content/why5.json";
import ContactContent from "../../content/ContactContent.json";

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
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="landing-banner.svg"
        id="intro"
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
      {
      /*<MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />*/
      } 
      <ContentBlock
        type="left"
        title={why1.title}
        content={why1.text}
        //section={why1.section}
        icon="graphs.svg"
        id="why1"
      />
      <ContentBlock
        type="right"
        title={why2.title}
        content={why2.text}
        icon="product-launch.svg"
        id="why2"
      />
      <ContentBlock
        type="left"
        title={why3.title}
        content={why3.text}
        icon="waving.svg"
        id="why3"
      />
      <ContentBlock
        type="right"
        title={why4.title}
        content={why4.text}
        icon="product-launch.svg"
        id="why4"
      />
      <ContentBlock
        type="left"
        title={why5.title}
        content={why5.text}
        icon="waving.svg"
        id="why5"
      />
    </Container>
  );
};

export default Home;
