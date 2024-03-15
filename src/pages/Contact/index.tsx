import { lazy } from "react";
import Overview from "../../content/ContactPage/OverviewContent.json";

const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));


const Contact = () => {
    return (
        <Container>
            <MiddleBlock title={Overview.title} content={Overview.description}/>
        </Container>
    );
};

export default Contact;
