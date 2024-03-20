import {lazy} from "react";
import WhoIsRayaContent from "../../content/WhoIsRayaPage/WhoIsRayaConent.json"
import ContentBlock from "../../components/ContentBlock";


const Container = lazy(() => import("../../common/Container"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));

const WhoIsRaya = () => {
    return (
        <Container>
            <MiddleBlock title={WhoIsRayaContent.title} content={WhoIsRayaContent.description}/>
            <ContentBlock
                id="focus-on-value"
                icon=""
                title={WhoIsRayaContent.focusOnValue.title}
                content={WhoIsRayaContent.focusOnValue.description}
                section={WhoIsRayaContent.focusOnValue.section}
                cardSection={true}
                direction="right"
            />
            <ContentBlock
                id="client-centric"
                icon=""
                title={WhoIsRayaContent.clientCentric.title}
                content={WhoIsRayaContent.clientCentric.description}
                section={WhoIsRayaContent.clientCentric.section}
                cardSection={true}
                direction="left"
            />
        </Container>
    )
}

export default WhoIsRaya;