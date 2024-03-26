import React, {lazy, useEffect} from "react";
import {Col, ConfigProvider, Flex, Row, Tabs} from "antd";
import {tailoredSolutionsContent} from "./TailoredSolutionsContent";
import {scrollUp} from "../../common/ScrollToTop";
import {useLocation} from "react-router-dom";

const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));

const TailoredSolutions = () => {
    useEffect(() => {
        scrollUp();
    }, []);

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const activeKey = searchParams.get('key');
    return (
        <ConfigProvider
            theme={{
                components: {
                    Tabs: {
                        // itemColor: "#20e5f6",
                        // inkBarColor: "#FFFFFF",
                        // itemSelectedColor: "#FFFFFF",
                        // itemHoverColor: "#FFFFFF"
                    }
                },
                token: {
                    controlItemBgActive: "#349ade"
                }
            }}
        >
            <Flex vertical style={{
                // <img src={`/img/svg/${src}`} alt={src} width={width} height={height} />
            }}>
                <MiddleBlock title="Tailored Solutions" content=""/>
                <Row justify="center" style={{
                    marginBottom: "10em",
                }}>
                    <Col span={12} style={{
                        backgroundImage: "url(/img/svg/tailored-bg.svg)",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "300px 300px",
                    }}>
                    <Tabs
                        size="large"
                        tabPosition={window.innerWidth <= 684 ? "top" : "left"}
                        items={tailoredSolutionsContent}
                    />
                    </Col>
                </Row>
            </Flex>
        </ConfigProvider>
    )
}

export default TailoredSolutions;
