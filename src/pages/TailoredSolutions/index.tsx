import React, {lazy, useEffect, useState} from "react";
import {Button, Col, Row, Tabs} from "antd";
import {tailoredSolutionsContent} from "./TailoredSolutionsContent";
import {scrollUp} from "../../common/ScrollToTop";
import Container from "../../common/Container";
import {ContentWrapper} from "../../components/TabContent/styles";

const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const TailoredSolutions = () => {
    useEffect(() => {
        scrollUp();
    }, []);
    return (
        <>
            <MiddleBlock title="Tailored Solutions" content=""/>
            <Row justify="center" style={{ marginBottom: "10em"}}>
                <Col span={12}>
                <Tabs
                    size="large"
                    tabPosition={window.innerWidth <= 684 ? "top" : "left"}
                    items={tailoredSolutionsContent}
                />
                </Col>
            </Row>
        </>
    )
}

export default TailoredSolutions;
