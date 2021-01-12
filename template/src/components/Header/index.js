import React, { useState, Fragment } from 'react';
import { Row, Col, Drawer } from 'antd';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { withTranslation } from 'react-i18next';
import loadable from '@loadable/component';

import * as S from './styles';

const SvgIcon = loadable(() => import('../../common/SvgIcon'));
const Button = loadable(() => import('../../common/Button'));

const Header = ({ t }) => {
  const [isNavVisible] = useState(false);
  const [isSmallScreen] = useState(false);
  const [visible, setVisibility] = useState(false);

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    return (
      <Fragment>
        <S.CustomNavLinkSmall>
          <Link to="/">{t('About')}</Link>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall>
          <Link to="/">{t('Mission')}</Link>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall>
          <Link to="/">{t('Product')}</Link>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall style={{ width: '180px' }}>
          <Link to="/">
            <Button>{t('Contact')}</Button>
          </Link>
        </S.CustomNavLinkSmall>
      </Fragment>
    );
  };

  return (
    <S.Header>
      <S.Container>
        <Row type="flex" justify="space-between" gutter={20}>
          <S.LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="logo.svg" />
          </S.LogoContainer>
          <S.NotHidden>
            <MenuItem />
          </S.NotHidden>
          <S.Burger onClick={showDrawer}>
            <S.Outline />
          </S.Burger>
        </Row>
        <CSSTransition
          in={!isSmallScreen || isNavVisible}
          timeout={350}
          classNames="NavAnimation"
          unmountOnExit
        >
          <Drawer closable={false} visible={visible} onClose={onClose}>
            <Col style={{ marginBottom: '2.5rem' }}>
              <S.Label onClick={onClose}>
                <Col span={12}>
                  <S.Menu>Menu</S.Menu>
                </Col>
                <Col span={12}>
                  <S.Outline padding="true" />
                </Col>
              </S.Label>
            </Col>
            <MenuItem />
          </Drawer>
        </CSSTransition>
      </S.Container>
    </S.Header>
  );
};

export default withTranslation()(Header);
