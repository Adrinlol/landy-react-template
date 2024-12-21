import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import Container from "../../common/Container";
import { getAssetPath } from "../../utils/paths";
import {
  FooterSection,
  NavLink,
  Extra,
  LogoContainer,
  FooterContainer,
  SocialLinksContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  icon: any;
}

const Footer = ({ t }: { t: TFunction }) => {
  const SocialLink = ({ href, icon }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ fontSize: '24px', color: '#005893' }}
      >
        <FontAwesomeIcon icon={icon} />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="center" align="middle">
            <Col>
              <img
                src={getAssetPath("/img/footer/footer.png")}
                alt="Footer Banner"
                style={{ 
                  maxWidth: '100%',
                  height: 'auto',
                  marginBottom: '2rem'
                }}
              />
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <img
                  src={getAssetPath("/img/svg/logo.svg")}
                  alt="KSC Logo"
                  width="121px"
                  height="84px"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLinksContainer>
                <SocialLink
                  href="https://www.facebook.com/wisdomstudents/"
                  icon={faFacebook}
                />
                <SocialLink
                  href="https://www.instagram.com/wisdomstudents/"
                  icon={faInstagram}
                />
                <SocialLink
                  href="https://www.youtube.com/@WisdomGlobalTV"
                  icon={faYoutube}
                />
                <SocialLink
                  href="https://x.com/Wisdom_Students"
                  icon={faTwitter}
                />
              </SocialLinksContainer>
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
