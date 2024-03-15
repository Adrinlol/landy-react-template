import { lazy } from "react";
import Overview from "../../content/PricingPage/OverviewContent.json";

const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));


const Pricing = () => {
    return (
        <Container>
            <MiddleBlock title={Overview.title} content={Overview.description}/>
        </Container>
    );
};

export default Pricing;
