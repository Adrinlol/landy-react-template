import { Content } from "../Block/styles";
import {Col, Flex, Row, Space} from "antd";
import ImageCardLink from "../../components/ImageCardLink";
import Container from "../../common/Container";

import {
    ContentWrapper, MinDesc
} from "../ContentBlock/styles";
import {Heading} from "../TabContent/styles";

interface Props {
  fb: string;
  x: string;
  email: string;
  phone: string;
  line1: string;
  line2: string;
  line3: string;
}
// TODO: $evamp the code to use the props properly.
const BusinessInfo = ({ fb, x, email, phone, line1, line2, line3 }: Props) => {
  return (
    <Container>
        <Space direction="vertical">
        <Row align="middle" justify="space-between" gutter={4}>
            <Col xs={24} md={8}>
                <ImageCardLink
                    image="svgrepo_fb.svg"
                    link="https://www.facebook.com/RayaSolutionsPH"
                    title="Facebook"
                    subtitle="/RayaSolutionsPH"
                />
            </Col>
            <Col xs={24} md={8} >
                <ImageCardLink
                    image="svgrepo_instagram.svg"
                    link="https://www.instagram.com/solutionsraya/"
                    title="Instagram"
                    subtitle="/solutionsraya"
                />
            </Col>
            <Col xs={24} md={8} >
                <ImageCardLink
                    image="svgrepo_youtube.svg"
                    link="https://youtube.com/@RayaSolutionsPh"
                    title="Youtube"
                    subtitle="/@RayaSolutionsPh"
                />
            </Col>
        </Row>
        <Row gutter={4} align="middle" justify="space-between">
            <Col xs={24} md={12} >
                 <ImageCardLink
                    image="svgrepo_phone.svg"
                    link="tel:09088180855"
                    title="Phone number"
                    subtitle="(+63)908-818-0855"
                />
            </Col>
            <Col xs={24} md={12} >
                <ImageCardLink
                    image="svgrepo_email.svg"
                    link="mailto:developer@rayasolutionsph.com"
                    title="Email"
                    subtitle="developer@rayasolutionsph.com"
                />
            </Col>
        </Row>
        <Row align="middle" justify="space-between">
            <Col md={12} xs={24}>
                <Flex vertical>
                    <Heading> Our Address </Heading>
                    <MinDesc>{line1}</MinDesc>
                    <MinDesc>{line2}</MinDesc>
                    <MinDesc>{line3}</MinDesc>
                </Flex>
            </Col>
            <Col md={12} xs={24}>
                {/* Content for the second column containing the iframe */}
                <ContentWrapper>
                    <Content>
                        <iframe title="map" width="100%" height={350}
                        src="https://www.openstreetmap.org/export/embed.html?bbox=121.06013327836992%2C14.588865828256386%2C121.0610988736153%2C14.589634162876383&amp;layer=mapnik"
                        />
                    </Content>
                </ContentWrapper>
            </Col>
        </Row>
        </Space>
    </Container>
  );
};

export default BusinessInfo;