import "./styles.css"
import React, {lazy} from "react";
import WhoIsRayaContent from "../../content/WhoIsRayaPage/WhoIsRayaConent.json"
import ContentBlock from "../../components/ContentBlock";
import {MinSubtitle, MinTitle} from "../TailoredSolutions/styles";
import {Button, Carousel} from "antd";
import {LeftCircleFilled, LeftCircleTwoTone, RightCircleFilled, RightCircleTwoTone} from "@ant-design/icons";
import {MinPara} from "../../components/ContentBlock/styles";


const Container = lazy(() => import("../../common/Container"));
const styleDefaults = {
    height: 300,
    color: "white",
    fontSize: 100,
    textAlign: "center"
};

const WhoIsRaya = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
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