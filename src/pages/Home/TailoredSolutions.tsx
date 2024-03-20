import {Collapse, CollapseProps} from "antd";
import {MinDesc} from "../../components/ContentBlock/styles";
import React from "react";


const RetailSolutions: CollapseProps['items'] = [
    {
        key: '1',
        label: 'Omnichannel Retailing',
        children: <MinDesc> Seamlessly integrate online and offline sales channels to provide a unified shopping experience for customers. </MinDesc>,
    },
    {
        key: '2',
        label: 'Inventory Optimization',
        children: <MinDesc>
            Optimize inventory levels, track stock movement in real-time,
            and automate replenishment processes to minimize stockouts and overstock situations.
        </MinDesc>
    },
    {
        key: '3',
        label: 'Customer Relationship Management',
        children: <MinDesc>
            Capture and analyze customer data to personalize marketing campaigns, promotions,
            and loyalty programs, driving customer engagement and retention.
        </MinDesc>
    },
    {
        key: '4',
        label: 'Point of Sale Integration',
        children: <MinDesc>
            Streamline checkout processes and improve cashier efficiency with integrated POS systems,
            enabling faster transactions and enhanced customer experiences.
        </MinDesc>
    },
    {
        key: '5',
        label: 'Business Intelligence',
        children: <MinDesc>
            Gain actionable insights into sales performance, inventory trends, and customer behavior with advanced
            reporting and analytics capabilities, empowering retailers to
            make informed decisions and drive business growth.
        </MinDesc>
    },
]

const ManufacturingSolutions: CollapseProps['items'] = [
    {
        key: '1',
        label: 'Production Planning and Scheduling',
        children: <MinDesc>Plan and schedule production activities, allocate resources, and track progress against production targets to ensure on-time delivery and maximize capacity utilization.</MinDesc>
    },
    {
        key: '2',
        label: 'Quality Control Management',
        children: <MinDesc>Implement stringent quality control processes, track product quality throughout the production lifecycle, and identify and address defects or deviations from standards in real-time, ensuring compliance with quality standards and customer satisfaction.</MinDesc>
    },
    {
        key: '3',
        label: 'Supply Chain Optimization',
        children: <MinDesc>Manage complex supply chains, coordinate with suppliers, and optimize inventory levels to minimize lead times, reduce costs, and improve supply chain visibility and responsiveness.</MinDesc>
    },
    {
        key: '4',
        label: 'Advanced Planning and Forecasting',
        children: <MinDesc>Utilize advanced planning and forecasting tools to anticipate demand, optimize production schedules, and align production with market requirements, enabling manufacturers to adapt quickly to changing market conditions and customer needs.</MinDesc>
    },
    {
        key: '5',
        label: 'Compliance and Regulatory Reporting',
        children: <MinDesc>Ensure compliance with regulatory requirements related to product safety, environmental sustainability, and industry standards, and generate comprehensive reports and documentation for regulatory authorities and stakeholders.</MinDesc>
    }
]

const ConstructionSolutions: CollapseProps['items'] = [
    {
        key: '1',
        label: 'Project Management',
        children: <MinDesc>Streamline project planning, scheduling, and execution, and track progress against milestones and deliverables to ensure timely completion and adherence to project budgets and timelines.</MinDesc>
    },
    {
        key: '2',
        label: 'Resource Allocation and Equipment Management',
        children: <MinDesc>Allocate resources, including labor, equipment, and materials, based on project requirements and availability, and track resource usage and costs in real-time to maximize efficiency and minimize waste.</MinDesc>
    },
    {
        key: '3',
        label: 'Subcontractor Management',
        children: <MinDesc>Manage subcontractor relationships, track subcontractor performance, and ensure compliance with contractual agreements and project specifications, minimizing delays and disruptions to project schedules.</MinDesc>
    },
    {
        key: '4',
        label: 'Budgeting and Cost Control',
        children: <MinDesc>Develop accurate project budgets, track project costs against budget targets, and implement cost control measures to minimize cost overruns and optimize project profitability.</MinDesc>
    },
    {
        key: '5',
        label: 'Document Management and Collaboration',
        children: <MinDesc>Centralize project documentation, facilitate document sharing and collaboration among project teams, and ensure version control and document security to improve communication and decision-making.</MinDesc>
    }
]

const HospitalitySolutions: CollapseProps['items'] = [
    {
        key: '1',
        label: 'Property Management System (PMS) Integration',
        children: <MinDesc>Seamlessly integrate with PMS systems to manage reservations, room allocations, guest check-ins, and billing processes, ensuring smooth operations and efficient guest service delivery.</MinDesc>
    },
    {
        key: '2',
        label: 'Food and Beverage Management',
        children: <MinDesc>Manage menu items, inventory levels, pricing, and ordering processes for food and beverage outlets, optimize stock levels, and minimize wastage to maximize profitability and customer satisfaction.</MinDesc>
    },
    {
        key: '3',
        label: 'Customer Relationship Management',
        children: <MinDesc>Capture guest preferences and feedback, personalize guest interactions and marketing communications, and implement loyalty programs and promotions to drive repeat business and enhance guest loyalty.</MinDesc>
    },
    {
        key: '4',
        label: 'Event Management',
        children: <MinDesc>Plan and manage events, conferences, and banquets, from initial inquiry to final billing, track event-related expenses and revenues, and ensure seamless coordination and execution to exceed guest expectations.</MinDesc>
    },
    {
        key: '5',
        label: 'Business Intelligence and Reporting',
        children: <MinDesc>Generate insightful reports and analytics on key performance metrics, such as occupancy rates, revenue per available room (RevPAR), and average daily rate (ADR), to monitor performance, identify trends, and make data-driven decisions to improve operational efficiency and profitability.</MinDesc>
    }
]

const ServicesSolutions : CollapseProps['items'] = [
    {
        key: '1',
        label: 'Project and Engagement Management',
        children: <MinDesc>Plan and manage client projects and engagements, allocate resources, track time and expenses, and monitor project progress and profitability to ensure successful project delivery and client satisfaction.</MinDesc>
    },
    {
        key: '2',
        label: 'Resource Planning and Allocation',
        children: <MinDesc>Optimize resource allocation and utilization across client engagements, match skills and expertise with project requirements, and identify staffing gaps or surpluses to maximize billable hours and profitability.</MinDesc>
    },
    {
        key: '3',
        label: 'Client Relationship Management',
        children: <MinDesc>Capture and manage client information, track client interactions and communications, and provide personalized service and support to build strong, long-lasting client relationships and drive repeat business and referrals.</MinDesc>
    },
    {
        key: '4',
        label: 'Billing and Invoicing',
        children: <MinDesc>Streamline billing and invoicing processes, generate accurate invoices based on time and expenses incurred, automate invoice delivery and payment reminders, and track invoice status and payment collections to improve cash flow and financial management.</MinDesc>
    },
    {
        key: '5',
        label: 'Performance Analytics and KPI Tracking',
        children: <MinDesc>Monitor key performance indicators (KPIs) such as billable hours, client satisfaction scores, and revenue per client to assess performance, identify areas for improvement, and drive operational efficiency and profitability.</MinDesc>
    }
]


export const tailoredSolutions: CollapseProps['items'] = [
    {
        key: '1',
        label: 'Raya for Retail',
        children: <>
            <MinDesc>
                Raya for Retail is a comprehensive solution tailored to meet the unique needs of retail businesses.
                With Microsoft Dynamics 365 and ERPNext, Raya for Retail offers retailers a unified platform to manage all aspects of their operations,
                including inventory management, sales tracking, customer relationship management, and financial management. Key features include:
            </MinDesc>
            <Collapse accordion items={RetailSolutions}/>
        </>
    },
    {
        key: '2',
        label: 'Raya for Manufacturing',
        children: <>
            <MinDesc>
                Raya for Manufacturing is a robust solution designed to address the complex needs of manufacturing businesses. Powered by Microsoft Dynamics 365 and ERPNext, Raya for Manufacturing enables manufacturers to streamline their operations, optimize production processes, and drive efficiency and innovation. Key features include:
            </MinDesc>
            <Collapse accordion items={ManufacturingSolutions}/>
        </>
    },
    {
        key: '3',
        label: 'Raya for Construction',
        children: <>
            <MinDesc>
                Raya for Construction is a comprehensive solution tailored to meet the unique needs of construction firms. Leveraging the power of Microsoft Dynamics 365 and ERPNext, Raya for Construction enables construction companies to manage projects more efficiently, optimize resource allocation, and improve collaboration and communication across project teams. Key features include:
            </MinDesc>
            <Collapse accordion items={ConstructionSolutions}/>
        </>
    },
    {
        key: '4',
        label: 'Raya for Hospitality',
        children: <>
            <MinDesc>
                Raya for Hospitality is a tailored solution designed to address the unique needs of hospitality businesses, including hotels, restaurants, and resorts. Built on Microsoft Dynamics 365 and ERPNext, Raya for Hospitality offers hospitality companies a comprehensive platform to streamline operations, enhance guest experiences, and drive revenue growth. Key features include:
            </MinDesc>
            <Collapse accordion items={HospitalitySolutions}/>
        </>
    },
    {
        key: '5',
        label: 'Raya for Services',
        children: <>
            <MinDesc>
                Raya for Services is a tailored solution designed to meet the unique needs of service-based businesses, including consulting firms, professional services firms, and service contractors. Powered by Microsoft Dynamics 365 and ERPNext, Raya for Services enables service providers to streamline service delivery, optimize resource allocation, and improve client satisfaction and retention. Key features include:
            </MinDesc>
            <Collapse accordion items={ServicesSolutions}/>
        </>
    },
]