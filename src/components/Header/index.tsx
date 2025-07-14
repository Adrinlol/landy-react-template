import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import CloseIcon from '@mui/icons-material/Close'
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
import { useMsal } from "@azure/msal-react";
import { InteractionStatus } from "@azure/msal-browser";

const Header = ({ t }: { t: TFunction }) => {
  const { instance, accounts, inProgress } = useMsal();
  const [visible, setVisibility] = useState(false);
  const toggleButton = () => {
    setVisibility(!visible);
  };
  const HandleLogout = async () => {
    const allAccounts = instance.getAllAccounts();

  if (allAccounts.length > 1) {
    await instance.logoutPopup();
  } else if (allAccounts.length === 1) {
    await instance.logout();
  } else {
    console.log("No accounts found to log out.");
  }
    window.location.href = "/login"
};
  
  const MenuItem = () => {
    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };
    return (
      <>
      {accounts[0] && inProgress == InteractionStatus.None && <CustomNavLinkSmall onClick={() => window.location.href = "/dashboard/organization-manager"}>
      <Span>{t("Manage")}</Span>
      </CustomNavLinkSmall>}
      <CustomNavLinkSmall onClick={() => window.location.href = "/pricing"}>
      <Span>{t("Pricing")}</Span>
      </CustomNavLinkSmall>
      {accounts[0] && inProgress == InteractionStatus.None &&<CustomNavLinkSmall onClick={() => window.location.href = "/dashboard"}>
      <Span>{t("Dashboard")}</Span>
      </CustomNavLinkSmall>}
        {!accounts[0] && inProgress == InteractionStatus.None && <CustomNavLinkSmall onClick={() => window.location.href = "/login"}>
          <Span>{t("Login / Signup")}</Span>
        </CustomNavLinkSmall>}
        {accounts[0] && inProgress == InteractionStatus.None && <CustomNavLinkSmall onClick={HandleLogout}>
          <Span>{t("Logout")}</Span>
        </CustomNavLinkSmall>}
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="teamSpend.png" width="151px" height="151px" />
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
              </Col>
              <Col span={12}>
              <CloseIcon />
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
