import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { TFunction } from "i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";
import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Contact Us")}</Language>
              <Large to="/">{t("We’d Love to Hear from You!")}</Large>
              <Para>
                {t("Have questions or need help? Reach out to us anytime.")}
              </Para>
              <a href="mailto:support@homemademeals.com">
                <Chat>{t("Get in Touch")}</Chat>
              </a>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Our Services")}</Title>
              <Large to="/">{t("How It Works")}</Large>
              <Large to="/">{t("Subscription Plans")}</Large>
              <Large to="/">{t("Why Choose Us?")}</Large>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Label htmlFor="select-lang">{t("Language")}</Label>
              <LanguageSwitchContainer>
                <LanguageSwitch onClick={() => handleChange("en")}>
                  <SvgIcon
                    src="united-states.svg"
                    aria-label="English"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
                <LanguageSwitch onClick={() => handleChange("hi")}>
                  <SvgIcon
                    src="india.svg"
                    aria-label="Hindi"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
              </LanguageSwitchContainer>
            </Col>
          </Row>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Empty />
              <Language>{t("Our Kitchen")}</Language>
              <Para>Kolkata, India</Para>
              <Para>123 Food Street</Para>
              <Para>West Bengal</Para>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Company")}</Title>
              <Large to="/">{t("About Us")}</Large>
              <Large to="/">{t("Meet Our Home Chefs")}</Large>
              <Large to="/">{t("Sustainability")}</Large>
              <Large to="/">{t("Join Our Team")}</Large>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              {/* Removed social links and coffee buy section */}
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="logo.svg"
                  aria-label="homepage"
                  width="101px"
                  height="64px"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              {/* Removed any social links or coffee buy section */}
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
