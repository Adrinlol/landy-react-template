import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import Container from "../../common/Container";

import {
  FooterSection,
  Title,
  Para,
  Large,
  Empty,
  Language,
} from "./styles";


const Footer = ({ t }: { t: TFunction }) => {
  return (
      <>
        <FooterSection>
          <Container>
            <Row justify="space-between">
              <Col lg={10} md={10} sm={12} xs={12}>
                <Language>{t("Contact")}</Language>
                <Large to="/support">{t("Tell us everything")}</Large>
                <Large to="/support">{t("Customer Support")}</Large>
                <Para>
                  {t(`Do you have any question? Feel free to reach out.`)}
                </Para>
              </Col>
              <Col lg={8} md={8} sm={12} xs={12}>
                <Title>{t("Company")}</Title>
                <Large to="/who-is-raya">{t("About")}</Large>
              </Col>
              <Col lg={6} md={6} sm={12} xs={12}>
                <Empty />
              </Col>
            </Row>
            <Row justify="space-between">
              <Col lg={10} md={10} sm={12} xs={12}>
                <Empty />
                <Language>{t("Address")}</Language>
                <Para>Cityland Mega Plaza</Para>
                <Para>San Antonio, Pasig City</Para>
                <Para>Metro Manila, Philippines</Para>
              </Col>
            </Row>
          </Container>
        </FooterSection>
      </>
  );
};

export default withTranslation()(Footer);
