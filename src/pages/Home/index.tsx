import { lazy } from "react";
import IntroContent from "../../content/HomePage/IntroContent.json";
import About from "../../content/HomePage/AboutContent.json";
import IndustrySolutions from "../../content/HomePage/IndustrySolutionsContent.json";
import ServicesProducts from "../../content/HomePage/ServicesProductsContent.json";
import FrequentlyAskedQuestions from "../../content/HomePage/FaqContent.json";

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
      <MiddleBlock
        title={About.title}
        content={About.description}
      />
      <ContentBlock
        direction="left"
        title={ServicesProducts.title}
        content={ServicesProducts.text}
        section={ServicesProducts.section}
        icon="product-launch.svg"
        id="services-products"
      />
    <MiddleBlock
        title={IndustrySolutions.title}
        content={IndustrySolutions.description}
        section={IndustrySolutions.solutions}/>
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
