import React, { Fragment } from "react";
import { Row, Col, Select } from "antd";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import { Fade } from "react-reveal";

import Container from "../../common/Container";
import SvgIcon from "../../common/SvgIcon";

import * as S from "./styles";

const Footer = () => {
  const { Option } = Select;
  const { t } = useTranslation();
  const handleChange = (event) => {
    i18n.changeLanguage(event);
  };

  return (
    <Fragment>
      <Fade bottom>
        <S.Footer>
          <Container>
            <Row type="flex" justify="space-between">
              <Col lg={10} md={10} sm={12} xs={24}>
                <S.Language>{t("Contact")}</S.Language>
                <S.Large to="/">{t("Tell us everything")}</S.Large>
                <S.Para>
                  {t(
                    `Do you have any question regarding the project? Fell free to reach out.`
                  )}
                </S.Para>
                <a href="mailto:l.qqbadze@gmail.com">
                  <S.Chat>{t(`Let's Chat`)}</S.Chat>
                </a>
              </Col>
              <Col lg={8} md={8} sm={12} xs={24}>
                <S.Title>{t("Policy")}</S.Title>
                <S.Large to="/" left="true">
                  {t("Application Security")}
                </S.Large>
                <S.Large left="true" to="/">
                  {t("Software Principles")}
                </S.Large>
              </Col>
              <Col lg={6} md={6} sm={12} xs={24}>
                <S.Empty />
                <S.Large left="true" to="/">
                  {t("Support Center")}
                </S.Large>
                <S.Large left="true" to="/">
                  {t("Customer Support")}
                </S.Large>
              </Col>
            </Row>
            <Row type="flex" justify="space-between">
              <Col lg={10} md={10} sm={12} xs={24}>
                <S.Empty />
                <S.Language>{t("ADDRESS")}</S.Language>
                <S.Para>Rancho Santa Margarita</S.Para>
                <S.Para>2131 Elk Street</S.Para>
                <S.Para>California</S.Para>
              </Col>
              <Col lg={8} md={8} sm={12} xs={24}>
                <S.Title>{t("Company")}</S.Title>
                <S.Large left="true" to="/">
                  {t("About")}
                </S.Large>
                <S.Large left="true" to="/">
                  {t("Blog")}
                </S.Large>
                <S.Large left="true" to="/">
                  {t("Press")}
                </S.Large>
                <S.Large left="true" to="/">
                  {t("Careers & Culture")}
                </S.Large>
              </Col>
              <Col lg={6} md={6} sm={12} xs={24}>
                <S.Select>
                  <S.Language>{t("Language")}</S.Language>
                  <Select
                    defaultValue="en"
                    onChange={handleChange}
                    value={i18n.language}
                  >
                    <Option value="en">English</Option>
                    <Option value="es">Español</Option>
                  </Select>
                </S.Select>
              </Col>
            </Row>
          </Container>
        </S.Footer>
        <S.Extra>
          <Container border="true">
            <Row
              type="flex"
              justify="space-between"
              align="middle"
              style={{ paddingTop: "3rem" }}
            >
              <S.NavLink to="/">
                <S.LogoContainer>
                  <SvgIcon src="logo.svg" />
                </S.LogoContainer>
              </S.NavLink>
              <S.FooterContainer>
                <a
                  href="https://github.com/Adrinlol/create-react-app-adrinlol"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SvgIcon src="github.svg" />
                </a>
                <a
                  href="https://twitter.com/Adrinlolx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SvgIcon src="twitter.svg" />
                </a>
                <a
                  href="https://www.linkedin.com/in/lasha-kakabadze//"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SvgIcon src="linkedin.svg" />
                </a>
                <a
                  href="https://github.com/Adrinlol/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SvgIcon src="instagram.svg" />
                </a>
                <a
                  href="https://medium.com/@lashakakabadze/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SvgIcon src="medium.svg" />
                </a>
              </S.FooterContainer>
            </Row>
            <Row type="flex" justify="space-between">
              <Col lg={12} md={12} sm={12} xs={24}>
                <S.CSite>
                  All Rights Reserved - Landy © {new Date().getFullYear()}
                </S.CSite>
              </Col>
            </Row>
          </Container>
        </S.Extra>
      </Fade>
    </Fragment>
  );
};

export default Footer;
