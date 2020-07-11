import React, { Fragment } from "react";
import { Row, Col } from "antd";

import Container from "../../common/Container";
import SvgIcon from "../../common/SvgIcon";

import * as S from "./styles";

const Footer = () => {
  return (
    <Fragment>
      <S.Footer>
        <Container>
          <S.LogoContainer>
            {/* <SvgIcon src="biolearning-logo.svg" /> */}
          </S.LogoContainer>
          <Row type="flex" justify="space-between">
            <Col lg={4} md={4} sm={12} xs={12}>
              <S.Title>Company</S.Title>
              <S.NavLink to="/">Home</S.NavLink>
              <S.NavLink to="/">About</S.NavLink>
              <S.NavLink to="/">Services</S.NavLink>
            </Col>
            <Col lg={4} md={4} sm={12} xs={12}>
              <S.Title>Social</S.Title>
              <S.Target href="https://twitter.com/Adrinlolx" target="_blank">
                Twitter
              </S.Target>
              <S.Target href="https://github.com/Adrinlol" target="_blank">
                GitHub
              </S.Target>
            </Col>
            <Col lg={4} md={4} sm={12} xs={12}>
              <S.Title>Lorem ipsum</S.Title>
              <S.NavLink to="/">Lorem ipsum</S.NavLink>
              <S.NavLink to="/">Lorem ipsum</S.NavLink>
              <S.NavLink to="/">Lorem ipsum</S.NavLink>
            </Col>
            <Col lg={12} md={8} sm={12} xs={12}>
              <S.Select>
                <S.Title>Lorem ipsum</S.Title>
                <S.NavLink to="/">Lorem ipsum</S.NavLink>
                <S.NavLink to="/">Lorem ipsum</S.NavLink>
                <S.NavLink to="/">Lorem ipsum</S.NavLink>
              </S.Select>
            </Col>
          </Row>
        </Container>
      </S.Footer>
      <S.Extra>
        <Container>
          <Row type="flex" justify="space-between">
            <Col lg={12} md={12} sm={12} xs={24}>
              {window.innerWidth < 414 ? (
                <S.CSite>
                  {new Date().getFullYear()} All Rights Reserved ©
                </S.CSite>
              ) : (
                <S.CSite>
                  {new Date().getFullYear()} All Rights Reserved
                </S.CSite>
              )}
            </Col>
            <Col lg={12} md={12} sm={12} xs={24}>
              <S.CSitee>
                Made with
                <SvgIcon
                  src="Heart.svg"
                  style={{ marginLeft: "0.5rem", marginRight: "0.5rem" }}
                />
                By Adrinlol
              </S.CSitee>
            </Col>
          </Row>
        </Container>
      </S.Extra>
    </Fragment>
  );
};

export default Footer;
