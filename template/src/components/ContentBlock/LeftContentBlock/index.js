import React from "react";
import { Row, Col } from "antd";
import SvgIcon from "../../../common/SvgIcon";
import { useTranslation } from "react-i18next";
import { Slide } from "react-reveal";

import * as S from "./styles";

const LeftContentBlock = ({ icon, title, content, section }) => {
  const { t } = useTranslation();

  return (
    <S.LeftContentBlock>
      <Row type="flex" justify="space-between" align="middle">
        <Col lg={11} md={11} sm={12} xs={24}>
          <Slide left>
            <SvgIcon src={icon} className="about-block-image" />
          </Slide>
        </Col>
        <Col lg={11} md={11} sm={12} xs={24}>
          <Slide right>
            <S.ContentWrapper>
              <S.Title>{t(title)}</S.Title>
              <S.Content>{t(content)}</S.Content>
              <S.ServiceWrapper>
                <Row type="flex" justify="space-between">
                  {section &&
                    typeof section === "object" &&
                    section.map((item, id) => {
                      return (
                        <Col key={id} lg={12} md={12} sm={12} xs={12}>
                          <SvgIcon src={item.icon} />
                          <S.MinTitle>{t(item.title)}</S.MinTitle>
                          <S.MinPara>{t(item.content)}</S.MinPara>
                        </Col>
                      );
                    })}
                </Row>
              </S.ServiceWrapper>
            </S.ContentWrapper>
          </Slide>
        </Col>
      </Row>
    </S.LeftContentBlock>
  );
};

export default LeftContentBlock;
