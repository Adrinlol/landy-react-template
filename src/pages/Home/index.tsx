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
        title: "Retail",
        key: "1"
    },
    {
        title: "Manufacturing",
        key: "2"
    },
    {
        title: "Construction",
        key: "3"
    },
    {
        title: "Services",
        key: "4"
    },
    {
        title: "Hospitality",
        key: "5"
    },
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
                    icon="logo.svg"
                    id="intro"
                  />
                  <MiddleBlock
                    title=""
                    border="#37e7e1"
                    content={About.description}
                  />
                <MiddleBlock
                    title={ServicesProducts.title}
                    content=""
                    section={ServicesProducts.section}/>
                  <ContentBlock
                    direction="right"
                    icon=""
                    id="tailored-solutions"
                    content={TailoredSolutions.content}
                    title={TailoredSolutions.title}
                    button={TailorSolutionButtonContent}
                    destination="/tailored-solutions"
                  />
            </Container>
      </>
  );
};

export default Home;
