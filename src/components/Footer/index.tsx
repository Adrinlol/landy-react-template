import { Row } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import {
  Extra,
  FooterContainer,
 
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {


  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <Extra id="social">
        <Container border={false}>
          <Row
            justify="space-around"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <FooterContainer>
              <SocialLink
                href="https://github.com/leandrodalbo"
                src="github.svg"
              />
              <SocialLink
                href="https://x.com/JunglelogicLab"
                src="twitter.svg"
              />
              <SocialLink
                href="https://www.linkedin.com/in/leandrodlb/"
                src="linkedin.svg"
              />
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
