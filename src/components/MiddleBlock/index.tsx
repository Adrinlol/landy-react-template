import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";
import {MinPara, MinTitle} from "../ContentBlock/styles";
import {SvgIcon} from "../../common/SvgIcon";
import {Link} from "react-router-dom";

interface MiddleBlockProps {
  title: string;
  content: string;
  button?: string;
  destination?: string;
  destinationType?: string;
  section?: {
    title: string,
    content: string,
    icon: string
  }[];
  t: TFunction;
}

const MiddleBlock = ({ title, content, button, destination, destinationType, section, t }: MiddleBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <MiddleBlockSection>
      <Slide triggerOnce>
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              {typeof button === "string" && destinationType === "section" && (
                <Button name="submit" onClick={() => scrollTo(destination ?? "")}>
                  {t(button)}
                </Button>
              )}
              {typeof button === "string" && destinationType === "page" && (
                  <Link to={destination ?? "/"}>
                    <Button>
                      {t(button)}
                    </Button>
                  </Link>
              )}
            </Col>
          </ContentWrapper>
          <Row justify="space-between">
            {typeof section === "object" &&
                section.map(
                    (
                        item: {
                          title: string;
                          content: string;
                          icon: string;
                        },
                        id: number
                    ) => {
                      return (
                          <Col key={id} span={11}>
                            <SvgIcon
                                src={item.icon}
                                width="60px"
                                height="60px"
                            />
                            <MinTitle>{t(item.title)}</MinTitle>
                            <MinPara>{t(item.content)}</MinPara>
                          </Col>
                      );
                    }
                )}
          </Row>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
