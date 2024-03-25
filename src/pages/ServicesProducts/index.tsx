// TODO:
//  directory for page contents
//  refactor to use directory/content.json

// TODO:
//  sections
//
import { lazy } from "react";
import ProductCategories from "../../content/ServicesProductsPage/ProductCategoriesContent.json";

const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));

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
            <MiddleBlock
              title={ProductCategories.title}
              content={ProductCategories.text}
              section={ProductCategories.section}/>
        </Container>
    );
};

export default ServicesProducts;
