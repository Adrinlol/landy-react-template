import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import Hook1 from "../../content/Hook1.json";
import Hook2 from "../../content/Hook2.json";
import Hook3 from "../../content/Hook3.json";
import ContactContent from "../../content/ContactContent.json";
import MailingListContent from "../../content/MailingListContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MailingList = lazy(() => import("../../components/MailingList"));
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
        button={IntroContent.button}
        icon="developer.svg"
        id="intro"
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
      <ContentBlock
        direction="left"
        title={Hook1.title}
        content={Hook1.text}
        section={Hook1.section}
        icon="graphs.svg"
        id="about"
      />
      <ContentBlock
        direction="right"
        title={Hook2.title}
        content={Hook2.text}
        icon="product-launch.svg"
        id="mission"
      />
      <ContentBlock
        direction="left"
        title={Hook3.title}
        content={Hook3.text}
        icon="waving.svg"
        id="product"
      />
      <MailingList
        title={MailingListContent.title}
        content={MailingListContent.text}
        id="mailing" />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
