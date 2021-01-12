import React from 'react';
import { Row, Col } from 'antd';
import { withTranslation } from 'react-i18next';
import { Slide } from 'react-reveal';
import loadable from '@loadable/component';

import * as S from './styles';

const SvgIcon = loadable(() => import('../../../common/SvgIcon'));

const LeftContentBlock = ({ icon, title, content, section, t }) => {
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
              <h6>{t(title)}</h6>
              <S.Content>{t(content)}</S.Content>
              <S.ServiceWrapper>
                <Row type="flex" justify="space-between">
                  {section &&
                    typeof section === 'object' &&
                    section.map((item, id) => {
                      return (
                        <Col key={id} span={12}>
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

export default withTranslation()(LeftContentBlock);
