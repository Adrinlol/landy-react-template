import { lazy } from "react";
import SupportContent from "../../content/CustomerSupportPage/SupportContent.json";
import Overview from "../../content/CustomerSupportPage/OverviewContent.json";
const SupportForm = lazy(() => import("../../components/SupportForm"));
const Container = lazy(() => import("../../common/Container"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));

const Support = () => {
    return (
        <Container>
        <MiddleBlock title={Overview.title} content={Overview.description}/>
        <SupportForm
            title={SupportContent.title}
            content={SupportContent.text}
            id="support"
        />
        </Container>
        )
};

export default Support;