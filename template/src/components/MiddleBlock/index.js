import React from "react";
import { Row, Col } from "antd";

import Button from "../../common/Button";

import * as S from "./styles";

const MiddleBlock = (props) => {
  return (
    <S.MiddleBlock last={props.last}>
      <Row type="flex" justify="center" align="middle">
        <Col lg={24} md={24} sm={24} xs={24}>
          <S.Title>{props.title}</S.Title>
          <S.Content last={props.last}>{props.content}</S.Content>
          {props.button ? (
            <Button name="submit" type="submit">
              {props.button}
            </Button>
          ) : (
            ""
          )}
        </Col>
      </Row>
    </S.MiddleBlock>
  );
};

export default MiddleBlock;
