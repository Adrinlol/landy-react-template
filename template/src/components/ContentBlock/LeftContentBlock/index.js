import React from "react";
import { Row, Col } from "antd";
import SvgIcon from "../../../common/SvgIcon";

import * as S from "./styles";

const LeftContentBlock = (props) => {
  return (
    <S.LeftContentBlock margin={props.margin}>
      <Row type="flex" justify="space-between" align="middle">
        <Col lg={14} md={16} sm={18} xs={18}>
          <S.IconContainer padding={props.padding}>
            <SvgIcon src={props.icon} className="about-block-image" />
          </S.IconContainer>
        </Col>
        <Col lg={10} md={24} sm={24} xs={24}>
          <S.ContentContainer>
            <S.Title>{props.title}</S.Title>
            <S.ContentWrapper>
              <S.Content>{props.content}</S.Content>
            </S.ContentWrapper>
          </S.ContentContainer>
        </Col>
      </Row>
    </S.LeftContentBlock>
  );
};

export default LeftContentBlock;
