import React from "react";
import { Row, Col } from "antd";

import SvgIcon from "../../../common/SvgIcon";
import Button from "../../../common/Button";

import * as S from "./styles";

const RightBlock = (props) => {
  return (
    <S.BackgroundColor>
      <S.RightBlockContainer id={props.id}>
        <Row type="flex" justify="space-between" align="middle">
          <Col lg={10} md={24} sm={24} xs={24}>
            <S.NoImage>
              <S.Title>{props.title}</S.Title>
              <S.ContentWrapper>
                <S.Content>{props.content}</S.Content>
                <Button name="submit" type="submit">
                  {props.button}
                </Button>
              </S.ContentWrapper>
            </S.NoImage>
          </Col>
          <Col lg={14} md={24} sm={24} xs={24}>
            <SvgIcon src={props.icon} className="about-block-image" />
          </Col>
        </Row>
      </S.RightBlockContainer>
    </S.BackgroundColor>
  );
};

export default RightBlock;
