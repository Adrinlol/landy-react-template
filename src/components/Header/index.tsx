import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import Container from "../../common/Container";
import { Button } from "../../common/Button";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from "./styles";
import {PngIcon} from "../../common/PngIcon";
import {Link} from "react-router-dom";

const Header = ({ t }: { t: TFunction }) => {
  const [visible, setVisibility] = useState(false);

  // const navigate = useNavigate();
  const toggleButton = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    return (
      <>
        <Link to={"/services-products"}>
          <CustomNavLinkSmall>
            <Span>{t("Services & Products")}</Span>
          </CustomNavLinkSmall>
        </Link>

        <Link to={"/pricing"}>
          <CustomNavLinkSmall>
            <Span>{t("Pricing")}</Span>
          </CustomNavLinkSmall>
        </Link>

        <Link to={"/support"}>
          <CustomNavLinkSmall>
            <Span>
              <Span>{t("Customer Support")}</Span>
            </Span>
          </CustomNavLinkSmall>
        </Link>

        <Link to={"/contact"}>
          <CustomNavLinkSmall
              style={{ width: "180px" }}>
            <Span>
              <Button>{t("Contact Us")}</Button>
            </Span>
          </CustomNavLinkSmall>
        </Link>
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <PngIcon src="logo.jpg" width="96px" height="96px"/>
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={toggleButton}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} open={visible} onClose={toggleButton}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={toggleButton}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
