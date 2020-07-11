import React from "react";
import { Row, Col } from "antd";

import SvgIcon from "../../common/SvgIcon";
import Button from "../../common/Button";

import * as S from "./styles";

const Header = () => {
  return (
    <S.Header>
      <S.Container>
        <Row type="flex" justify="space-between" gutter={20}>
          <Col>
            <S.LogoContainer to="/">
              <SvgIcon src="react.svg" />
            </S.LogoContainer>
          </Col>
          <Col>
            <S.WideContainer>
              <S.ContactWrapper>MiddleBlock</S.ContactWrapper>
              <S.ContactWrapper>ContentBlock</S.ContactWrapper>
              <S.ContactWrapper>Button</S.ContactWrapper>
            </S.WideContainer>
            <S.CustomNavLink activeClassName="active">
              <Button>Contact</Button>
            </S.CustomNavLink>
          </Col>
        </Row>
      </S.Container>
    </S.Header>
  );
};

export default Header;
