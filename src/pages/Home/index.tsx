import {lazy, useEffect} from "react";
import IntroContent from "../../content/HomePage/IntroContent.json";
import About from "../../content/HomePage/AboutContent.json";
import ServicesProducts from "../../content/HomePage/ServicesProductsContent.json";
import TailoredSolutions from "../../content/HomePage/TailoredSolutionsContent.json";
import {scrollUp} from "../../common/ScrollToTop";

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
const TailorSolutionButtonContent = [
    {
        "title": "See More"
    }
]

const Home = () => {
    useEffect(() => {
        scrollUp()
    }, []);
  return (
      <>
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
                    title={About.title}
                    content={About.description}
                  />
                <MiddleBlock
                    title={ServicesProducts.title}
                    content=""
                    section={ServicesProducts.section}/>
                  <ContentBlock
                    direction="left"
                    icon="graphs.svg"
                    id="tailored-solutions"
                    content=""
                    title={TailoredSolutions.title}
                    section={TailoredSolutions.section}
                    button={TailorSolutionButtonContent}
                    destination="/tailored-solutions"
                  />
            </Container>
      </>
  );
};

export default Home;
