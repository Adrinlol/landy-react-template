import "./styles.css"
import React, {lazy} from "react";
import WhoIsRayaContent from "../../content/WhoIsRayaPage/WhoIsRayaConent.json"
import {MinSubtitle} from "../TailoredSolutions/styles";
import {Carousel} from "antd";
import {LeftCircleFilled, RightCircleFilled} from "@ant-design/icons";
import {MinPara} from "../../components/ContentBlock/styles";


const Container = lazy(() => import("../../common/Container"));

const WhoIsRaya = () => {
    return (
        <Container>
            <Carousel
                arrows
                prevArrow={<LeftCircleFilled/>}
                nextArrow={<RightCircleFilled/>}
            >
                {
                    WhoIsRayaContent.qualities.map((
                        quality: {
                            title: string,
                            description: string,
                            cardSection : {title: string,  description: string}[]
                        }
                    ) => {
                        return (
                            <div>
                                <MinSubtitle>{quality.title}</MinSubtitle>
                                <MinPara>{quality.description}</MinPara>
                            </div>
                        )
                    })
                }

            </Carousel>

        </Container>
    )
}

export default WhoIsRaya;