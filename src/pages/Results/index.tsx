import results from "../../content/ResultsPage/ResultsContent.json"
import React, {lazy} from "react";
import {Card, Col, Flex, Row, Tabs, TabsProps} from "antd";
import {MinDesc} from "../../components/ContentBlock/styles";
import {Heading} from "../../components/TabContent/styles";
import {SvgIcon} from "../../common/SvgIcon";
import Container from "../../common/Container";
import {useLocation} from "react-router-dom";

const MiddleBlock = lazy(() => import("../../components/MiddleBlock"))

function demoResultChildren(items: {
    clientIndustry: string,
    industryName: string
    description: string,
    clients: {
        name: string,
        icon: string
    }[]
}[], industryFilter: string) {
    return (
        items.map((item: {
            clientIndustry: string,
            industryName: string,
            description: string,
            clients: {
                name: string,
                icon: string
            }[]
        }) => {
            return (item.clientIndustry === industryFilter &&
                <>
                    <Row justify="center" gutter={24}>
                        {
                            item.clients.map((client: {name: string, icon: string}) => {
                                return (
                                    <Col span={11} style={{
                                        marginBottom: "2em"
                                    }}>
                                        <Card size="small">
                                            <Flex vertical align="center">
                                                <SvgIcon src={client.icon} width="75px" height="75px"/>
                                                <Heading> {client.name} </Heading>
                                            </Flex>
                                        </Card>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                    <Row justify="center">
                        <Heading>
                            {`Demonstrating Results Raya for ${item.industryName}`}
                        </Heading>
                        <MinDesc> {item.description} </MinDesc>
                    </Row>
                </>
            )
        })
    )
}

const DemoResultTabs: TabsProps['items'] = [
    {
        key: "1",
        label: "Retail",
        children: demoResultChildren(results.content, "retail")
    },
    {
        key: "2",
        label: "Construction",
        children: demoResultChildren(results.content, "construction")
    },
    {
        key: "3",
        label: "Services",
        children: demoResultChildren(results.content, "services")
    },
    {
        key: "4",
        label: "Hospitality",
        children: demoResultChildren(results.content, "hospitality")
    },
    {
        key: "5",
        label: "Food and Services",
        children: demoResultChildren(results.content, "foodAndBeverages")
    },
]

const Results = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const activeKey = searchParams.get('activeKey');

    return (
        <Container >
            <MiddleBlock title="Demonstrating Results" content=""/>
            <Tabs centered defaultActiveKey={activeKey ?? "1"} items={DemoResultTabs} style={{
                marginBottom: "2em"
            }}/>
        </Container>
    )
}

export default Results;
