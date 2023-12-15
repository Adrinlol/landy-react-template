import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import ServicesContent from "../../content/ServicesContent.json";
import MediaContent from "../../content/MediaContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const MediaBlock = lazy(() => import("../../components/MediaBlock"));
const ImageBlock = lazy(() => import("../../components/ImageBlock"));
const ServiceBlock = lazy(() => import("../../components/ServiceBlock"));

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
        p1={MiddleBlockContent.p1}
        p2={MiddleBlockContent.p2}
        p3={MiddleBlockContent.p3}
        button={MiddleBlockContent.button}
        id="about"
      />
      <ServiceBlock
        direction="left"
        title={ServicesContent.title}
        content={ServicesContent.text1}
        content2={ServicesContent.text2}
        content3={ServicesContent.text3}
        content4={ServicesContent.text4}
        content5={ServicesContent.text5}
        content6={ServicesContent.text6}
        content7={ServicesContent.text7}
        content8={ServicesContent.text8}
        content9={ServicesContent.text9}
        content10={ServicesContent.text10}
        content11={ServicesContent.text11}
        icon="skidsteer.png"
        id="services"
      />
      <MediaBlock
        direction="right"
        title={MediaContent.title}
        content={MediaContent.text}
        instagram="instagram.png"
        facebook="facebook.png"
        youtube="youtube.png"
        id="media"
      />
      <ImageBlock
        id="product"
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
