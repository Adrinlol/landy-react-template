import {Col, Row, Card, Table, List, Divider, Flex, ConfigProvider, Button} from 'antd';
import {Heading, PriceText, SubHeading, TableTitle} from "./styles";
import React from "react";
import {ContentWrapper} from "../MiddleBlock/styles";
import {Content} from "../Block/styles";
import {Link} from "react-router-dom";

interface CardGridProps {
    items: {
        target?: string,
        name: string,
        includedServices: string[],
        includedFeatures?: string[],
        priceRange: string,
    }[],
    itemsAddOns?: {
        name: string,
        description: string,
        pricingModel?: string
    }[]
}
const addOnTableColumns = [
    {
        title: 'Add-on',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: 'Pricing Model',
        dataIndex: 'pricingModel',
        key: 'pricing-model',
    },
];

const TabContent = ({items, itemsAddOns} : CardGridProps) => {
    const colSpanFromItemsLength = items.length < 3 ? 12 : 8
    return (
        <ConfigProvider theme={{
            components: {
                Button: {
                    defaultBg: "#349ade",
                    colorText: "#FFFFFF"
                }
            },
            token: {
                colorBorderSecondary: "#000000"
            }
        }}>
            <Row gutter={16} justify="center">
                {
                    items.map((item : {
                        target?: string,
                        name: string,
                        includedServices: string[],
                        includedFeatures?: string[],
                        priceRange: string,
                    }) => {
                        return (
                            <Col xs={24} lg={colSpanFromItemsLength} xl={colSpanFromItemsLength} style={{
                                padding: "20px"
                            }}>
                                <Card title={item.name.toUpperCase()} hoverable style={{
                                    height: "100%"
                                }}>
                                    {typeof item.target === "string" && <SubHeading>For {item.target}</SubHeading>}
                                    {
                                        <>
                                            <List bordered size="small" dataSource={item.includedServices}
                                                  renderItem={(item) => <List.Item>{item}</List.Item>}/>
                                        </>
                                    }
                                    {typeof item.includedFeatures === "object" &&
                                        <>
                                            <Divider/>
                                            <Heading>Features</Heading>
                                            <List bordered size="small" dataSource={item.includedFeatures}
                                                  renderItem={(item) => <List.Item>{item}</List.Item>}/>
                                        </>
                                    }
                                    { window.innerWidth <= 684 &&
                                                <Flex vertical justify="center" align="center">
                                                    <PriceText>{item.priceRange}</PriceText>
                                                    <Link to="/contact">
                                                        <Button> Request Quotation</Button>
                                                    </Link>
                                                </Flex>
                                    }
                                </Card>
                            </Col>
                        )
                    })
                }
                </Row>
            <Row justify="space-around" style={{ }}>
                { window.innerWidth > 684 &&
                    items.map((item : {
                        target?: string,
                        name: string,
                        includedServices: string[],
                        includedFeatures?: string[],
                        priceRange: string}) => {
                        return (
                            <Flex vertical justify="center" align="center" style={{paddingBottom: "3em"}}>
                                <PriceText>{item.priceRange}</PriceText>
                                <Link to="/contact">
                                    <Button size="large"> Request Quotation</Button>
                                </Link>
                            </Flex>
                        )
                    })
                }
            </Row>

            <Row gutter={16}>
                {typeof itemsAddOns === "object" &&
                    (
                        <>
                            {/*TODO: add data field for add ons title and description*/}
                            <ContentWrapper>
                                <Content title="Add On Deals" content="Add-on Services for ERP Implementation "/>
                            </ContentWrapper>
                            <Table
                                style={{
                                    width: "100%"
                                }}
                                title={() => (
                                <TableTitle>
                                    Add-on Deals to Cater Your Specialized Needs
                                </TableTitle>
                            )}
                                   pagination={false} dataSource={itemsAddOns} columns={addOnTableColumns}/>
                        </>
                    )
                }
            </Row>
        </ConfigProvider>
    )
}

export default TabContent;