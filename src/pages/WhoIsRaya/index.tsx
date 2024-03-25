import {lazy} from "react";
import WhoIsRayaContent from "../../content/WhoIsRayaPage/WhoIsRayaConent.json"
import ContentBlock from "../../components/ContentBlock";


const Container = lazy(() => import("../../common/Container"));

const WhoIsRaya = () => {
    return (
        <Container>
            {/*<MiddleBlock title={WhoIsRayaContent.title} content={WhoIsRayaContent.description}/>*/}
            <ContentBlock
                id="focus-on-value"
                icon=""
                direction="right"
                title={WhoIsRayaContent.focusOnValue.title}
                content={WhoIsRayaContent.focusOnValue.description}
                cardSection={WhoIsRayaContent.focusOnValue.cardSection}
            />
            <ContentBlock
                id="client-centric"
                icon=""
                direction="left"
                title={WhoIsRayaContent.clientCentric.title}
                content={WhoIsRayaContent.clientCentric.description}
                cardSection={WhoIsRayaContent.clientCentric.cardSection}
            />
            <ContentBlock
                id="future-ready"
                direction="right"
                icon=""
                title={WhoIsRayaContent.futureReady.title}
                content={WhoIsRayaContent.futureReady.description}
                cardSection={WhoIsRayaContent.futureReady.cardSection}
            />
            <ContentBlock
                id="trust-and-reliability"
                icon=""
                direction="left"
                title={WhoIsRayaContent.trustAndReliability.title}
                content={WhoIsRayaContent.trustAndReliability.description}
                cardSection={WhoIsRayaContent.trustAndReliability.cardSection}
            />
        </Container>
    )
}

export default WhoIsRaya;