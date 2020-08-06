import React, { Fragment } from "react";
import { Row, Col, Select } from "antd";
import i18n from "i18next";
import { useTranslation } from "react-i18next";

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
      <S.Footer>
        <Container>
          <Col>
            <S.LogoContainer to="/">
              <SvgIcon src="landy.svg" />
            </S.LogoContainer>
          </Col>
          <Row type="flex" justify="space-between">
            <Col lg={6} md={6} sm={12} xs={12}>
              <S.Title>Company</S.Title>
              <S.NavLink to="/">{t("About")}</S.NavLink>
              <S.NavLink to="/">{t("Mission")}</S.NavLink>
              <S.NavLink to="/">{t("Product")}</S.NavLink>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <S.Title>Social</S.Title>
              <S.Target href="https://twitter.com" target="_blank">
                Twitter
              </S.Target>
              <S.Target href="https://facebook.com" target="_blank">
                Facebook
              </S.Target>
              <S.Target href="https://linkedin.com" target="_blank">
                LinkedIn
              </S.Target>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <S.Title>{t("Products")}</S.Title>
              <S.NavLink to="/">Lorem ipsum</S.NavLink>
              <S.NavLink to="/">Lorem ipsum</S.NavLink>
              <S.NavLink to="/">Lorem ipsum</S.NavLink>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <S.Select>
                <S.Title>{t("Language")}</S.Title>
                <Select defaultValue="en" onChange={handleChange}>
                  <Option value="en">English</Option>
                  <Option value="es">Spanish</Option>
                </Select>
              </S.Select>
            </Col>
          </Row>
        </Container>
      </S.Footer>
      <S.Extra>
        <Container border="true">
          <Row type="flex" justify="space-between">
            <Col lg={12} md={12} sm={12} xs={24}>
              <S.CSite>
                {new Date().getFullYear()} All Rights Reserved © Landy
              </S.CSite>
              <S.CSite>
                This web application was created by
                <S.Target href="https://github.com/Adrinlol/create-react-app-adrinlol" target="_blank">
                   @Adrinlol
                </S.Target>
              </S.CSite>
            </Col>
          </Row>
        </Container>
      </S.Extra>
    </Fragment>
  );
};

export default Footer;
