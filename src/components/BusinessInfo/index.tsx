import { withTranslation, TFunction } from "react-i18next";
import { Container, TextWrapper, Content } from "../Block/styles";
import { Col, Row, Space } from "antd";
import { lazy } from "react";
import ImageCardLink from "../../components/ImageCardLink";


import {
  ContentSection,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
  StyledRow,
  ButtonWrapper,
} from "../../components/ContentBlock/styles";

const Contact = lazy(() => import("../../components/ContactForm"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

interface Props {
  fb: string;
  x: string;
  email: string;
  phone: string;
  line1: string;
  line2: string;
  line3: string;
}

const BusinessInfo = ({ fb, x, email, phone, line1, line2, line3 }: Props) => {
  return (
    <Container>
      <p>Lorem ipsum dolor</p>
        <Row>
            <Space>
            <Col>
                <ImageCardLink
                    image="svgrepo_fb.svg"
                    link="https://www.facebook.com/"
                    title="Facebook"
                    subtitle="/raya"
                />
            </Col>
            <Col>
                <ImageCardLink
                    image="svrepo_twitter.svg"
                    link="https://www.twitter.com/"
                    title="Twitter"
                    subtitle="/raya"
                />
            </Col>
            <Col>
                <ImageCardLink
                    image="svgrepo_phone.svg"
                    link="tel:123456789"
                    title="Phone number"
                    subtitle="(+63)9XXXXXXXXX"
                />
            </Col>
            <Col>
                <ImageCardLink
                    image="svgrepo_email.svg"
                    link="mailto:example@example.com"
                    title="Email"
                    subtitle="example@example.com"
                />
            </Col>
            </Space>
        </Row>
        <Row align="middle" justify="space-between">
    <Col lg={11} md={11} sm={11} xs={24}>
        <span>
        <p>{line1}, {line2}, {line3}</p>
        <p>Weekdays @ 9:00AM – 6:00PM PhST</p>
        </span>
    </Col>
    <Col lg={11} md={11} sm={24} xs={24}>
        {/* Content for the second column containing the iframe */}
        <ContentWrapper>
            <Content>
                <iframe width="100%" height={350}
                src="https://www.openstreetmap.org/export/embed.html?bbox=121.06013327836992%2C14.588865828256386%2C121.0610988736153%2C14.589634162876383&amp;layer=mapnik"
                />
            </Content>
        </ContentWrapper>
    </Col>
</Row>
        <Contact
            title="Got any questions?"
            content="We're here to help."
            id="contact"
        />
        {/** Placeholder for feedback form **/}
        <Contact
            title="Give us some feedback"
            content="It'll help improve our services."
            id="feedback"
        />
    </Container>
  );
};

export default BusinessInfo;
