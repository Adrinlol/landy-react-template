import {lazy} from "react";
import Overview from "../../content/PricingPage/OverviewContent.json";
import Packages from "../../content/PricingPage/PackagesContent.json";
import {Tabs} from "antd";
import type {TabsProps} from "antd";
import TabContent from "../../components/TabContent";

const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));

const items: TabsProps['items'] = [
    {
        key: '1',
        label: 'Microsoft Dynamics 365',
        children: <TabContent items={Packages.microsoft365Deals}/>
    },
    {
        key: '2',
        label: 'ERPNext',
        children: <TabContent items={Packages.erpnextDeals}/>
    },
    {
        key: '3',
        label: 'Raya ERP - Developed by Raya Solutions',
        children: <TabContent items={Packages.rayaERPDeals.base} itemsAddOns={Packages.rayaERPDeals.addOns}/>
    },
    {
        key: '4',
        label: 'Tailored ERP for SMBs',
        children: <TabContent items={Packages.tailoredERP.base} itemsAddOns={Packages.tailoredERP.addOns}/>
    },
    {
        key: '5',
        label: 'Raya Point-of-Sale System',
        children: <TabContent items={Packages.rayaPOS.base} itemsAddOns={Packages.rayaPOS.addOns}/>
    },
    {
        key: '6',
        label: 'Raya CRM',
        children: <TabContent items={Packages.rayaCRM.base} itemsAddOns={Packages.rayaCRM.addOns}/>
    },
    {
        key: '7',
        label: 'Raya ERP for BPOs',
        children: <TabContent items={Packages.rayaBPO.base} itemsAddOns={Packages.rayaBPO.addOns}/>
    },
];

const Pricing = () => {
    return (
        <Container>
            <MiddleBlock title={Overview.title} content={Overview.description} />
            <Tabs defaultActiveKey="1" items={items} centered/>
        </Container>
    );
};

export default Pricing;
