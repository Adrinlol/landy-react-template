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
                cardSection={WhoIsRayaContent.focusOnValue.cardSection}
                direction="right"
            />
            <ContentBlock
                id="client-centric"
                icon=""
                title={WhoIsRayaContent.clientCentric.title}
                content={WhoIsRayaContent.clientCentric.description}
                cardSection={WhoIsRayaContent.clientCentric.cardSection}
                direction="left"
            />
            <ContentBlock
                id="future-ready"
                icon=""
                title={WhoIsRayaContent.futureReady.title}
                content={WhoIsRayaContent.futureReady.description}
                cardSection={WhoIsRayaContent.futureReady.cardSection}
                direction="right"
            />
            <ContentBlock
                id="trust-and-reliability"
                icon=""
                title={WhoIsRayaContent.trustAndReliability.title}
                content={WhoIsRayaContent.trustAndReliability.description}
                cardSection={WhoIsRayaContent.trustAndReliability.cardSection}
                direction="left"
            />
        </Container>
    )
}

export default WhoIsRaya;