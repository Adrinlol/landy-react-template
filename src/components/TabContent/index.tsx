import { Row, Card, Table, List, Divider, Flex, ConfigProvider, Button} from 'antd';
import {Heading, PriceText, SubHeading, TableTitle} from "./styles";
import React from "react";
import {ContentWrapper} from "../MiddleBlock/styles";
import {Content} from "../Block/styles";
import {Link} from "react-router-dom";
import {ColumnsType} from "antd/es/table";

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
const addOnTableColumns : ColumnsType<{
    name: string;
    description: string;
    pricingModel?: string;
}> = [
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
    return (
        <ConfigProvider theme={{
            components: {
                Button: {
                    defaultBg: "#349ade",
                    colorText: "#FFFFFF"
                },
                List: {
                    colorBorder: "#000000",
                }
            },
            token: {
                colorBorderSecondary: "#000000"
            }
        }}>
            <Flex wrap="wrap" justify="space-evenly" style={{
                width: "100%"
            }}>
                    {
                        items.map((item : {
                            target?: string,
                            name: string,
                            includedServices: string[],
                            includedFeatures?: string[],
                            priceRange: string,
                        }) => {
                            return (
                                <Flex vertical>
                                    <Card title={item.name.toUpperCase()} hoverable style={{
                                        width: "100%",
                                        height: "100%",
                                        minWidth: "350px",
                                        maxWidth: "350px"
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
                                    </Card>
                                    <Flex vertical justify="center" align="center" style={{ padding: "2em"}}>
                                        <PriceText>{item.priceRange}</PriceText>
                                        <Link to="/contact">
                                            <Button> Request Quotation</Button>
                                        </Link>
                                    </Flex>
                                </Flex>
                            )
                        })
                    }
            </Flex>

            <Row gutter={16} justify="center">
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
                                    width: "100%",
                                    paddingBottom: "5em"
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