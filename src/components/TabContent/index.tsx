import {Col, Row, Card, Table, List, Divider} from 'antd';
import {Heading, SubHeading, TableTitle} from "./styles";
import {Button} from "../../common/Button";
import React from "react";
import {ContentWrapper} from "../MiddleBlock/styles";
import {Content} from "../Block/styles";

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
        <>
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
                                marginBottom: "20px"
                            }}>
                                <Card title={item.name} hoverable>
                                    {typeof item.target === "string" && <SubHeading>For {item.target}</SubHeading>}
                                    {
                                        <>
                                            <Heading> Includes </Heading>
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
                                    <Divider/>
                                    <SubHeading>{item.priceRange}</SubHeading>
                                    <Button> Request Quotation </Button>
                                </Card>
                            </Col>
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
                            <Table title={() => (
                                <TableTitle>
                                    Add-on Deals to Cater Your Specialized Needs
                                </TableTitle>
                            )}
                                   pagination={false} dataSource={itemsAddOns} columns={addOnTableColumns}/>
                        </>
                    )
                }
            </Row>
        </>
    )
}

export default TabContent;