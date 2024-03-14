import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import ServicesProducts from "../../content/ServicesProductsContent.json";
import FrequentlyAskedQuestions from "../../content/FaqContent.json";
import ContactContent from "../../content/ContactContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

// TODO:
//  follow raya color scheme from their logo
//  features:
//   FAQ:
//      collapse component : https://ant.design/components/collapse
//          question
//          answer

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
      {/*<MiddleBlock*/}
      {/*  title={MiddleBlockContent.title}*/}
      {/*  content={MiddleBlockContent.text}*/}
      {/*  button={MiddleBlockContent.button}*/}
      {/*/>*/}
      <ContentBlock
        direction="left"
        title={ServicesProducts.title}
        content={ServicesProducts.text}
        section={ServicesProducts.section}
        icon="product-launch.svg"
        id="services-products"
      />
      {/*<ContentBlock*/}
      {/*  direction="right"*/}
      {/*  title={ServicesProducts.title}*/}
      {/*  content={ServicesProducts.text}*/}
      {/*  icon="graphs.svg"*/}
      {/*  id="services-products"*/}
      {/*/>*/}
      <ContentBlock
        direction="right"
        title={FrequentlyAskedQuestions.title}
        content={FrequentlyAskedQuestions.text}
        icon="waving.svg"
        id="faq"
      />
    </Container>
  );
};

export default Home;
