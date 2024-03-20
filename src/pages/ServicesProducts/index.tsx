// TODO:
//  directory for page contents
//  refactor to use directory/content.json

// TODO:
//  sections
//
import { lazy } from "react";
import Overview from "../../content/ServicesProductsPage/OverviewContent.json";
import ProductCategories from "../../content/ServicesProductsPage/ProductCategoriesContent.json";
import IndividualProducts from "../../content/ServicesProductsPage/IndividualServicesProductsContent.json";
import IndustrySolutions from "../../content/HomePage/IndustrySolutionsContent.json";
import CallToAction from "../../content/ServicesProductsPage/CallToActionContent.json";
import Testimonials from "../../content/ServicesProductsPage/TestimonialsContent.json";
import Faq from "../../content/ServicesProductsPage/FaqContent.json";

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

const ServicesProducts = () => {
    return (
        <Container>
            <ScrollToTop />
            <MiddleBlock
              title={Overview.title}
              content={Overview.description}
              button={Overview.button}/>
            <ContentBlock
                direction="right"
                cardSection={false}
                icon="product-launch.svg"
                title={ProductCategories.title}
                content={ProductCategories.description}
                section={ProductCategories.categories}
                id="product-categories"/>
            <ContentBlock
                direction="left"
                cardSection={false}
                title={IndividualProducts.title}
                content={IndividualProducts.text}
                section={IndividualProducts.section}
                icon=""
                id="services-products"/>
            <MiddleBlock
                title={IndustrySolutions.title}
                content={IndustrySolutions.description}
                section={IndustrySolutions.solutions}/>
            <MiddleBlock
                title={CallToAction.title}
                content={CallToAction.content}
                button={CallToAction.button}
                destination="contact"
                destinationType="page"/>
            <MiddleBlock
                title={Testimonials.title}
                content={Testimonials.description}
                section={Testimonials.testimonials}/>
            <ContentBlock
                direction="right"
                cardSection={false}
                title={Faq.title}
                content={Faq.description}
                section={Faq.questions}
                icon=""
                id="faq"/>
        </Container>
    );
};

export default ServicesProducts;
