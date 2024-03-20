import { lazy } from "react";
import IntroContent from "../../content/HomePage/IntroContent.json";
import About from "../../content/HomePage/AboutContent.json";
import IndustrySolutions from "../../content/HomePage/IndustrySolutionsContent.json";
import ServicesProducts from "../../content/HomePage/ServicesProductsContent.json";
import TailoredSolutions from "../../content/HomePage/TailoredSolutionsContent.json";
import FrequentlyAskedQuestions from "../../content/HomePage/FaqContent.json";
import {tailoredSolutions} from "./TailoredSolutions";
import {ConfigProvider} from "antd";

const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

// TODO:
//  follow raya color scheme from their logo
//  features:
//   Tailored Solutions:
//      collapse component : https://ant.design/components/collapse
//          nested collapse (accordion mode)
//              title
//              content

const Home = () => {
  return (
      <>
          <ConfigProvider
            theme={{
                components: {
                    Collapse: {
                        headerBg: "#349ade",
                        contentBg: "#FFFFFF"
                    }
                },
                token: {
                    colorTextHeading: "#FFFFFF"
                }
            }}>
            <Container>
                  <ScrollToTop />
                  <ContentBlock
                    cardSection={false}
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
                <MiddleBlock
                    title={ServicesProducts.title}
                    content={ServicesProducts.text}
                    section={ServicesProducts.section}/>
                  <ContentBlock
                    direction="right"
                    title={TailoredSolutions.title}
                    content={TailoredSolutions.content}
                    collapseItems={tailoredSolutions}
                    icon="graphs.svg"
                    cardSection={false}
                    id="faq"
                  />
            </Container>
          </ConfigProvider>
      </>
  );
};

export default Home;
