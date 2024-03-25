import {Row, Col, CollapseProps} from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";
import {MinPara, MinTitle, ServiceContainer, ServiceContentContainer, Title} from "../ContentBlock/styles";
import {SvgIcon} from "../../common/SvgIcon";
import {Link} from "react-router-dom";

interface MiddleBlockProps {
  title: string;
  content: string;
  button?: string;
  border?: string;
  destination?: string;
  destinationType?: string;
  collapseItems?: CollapseProps['items'];
  section?: {
    title: string,
    content: string,
    icon: string
  }[];
  t: TFunction;
}

const middleBlockContentStyles = (border : string | undefined) => {
  return {
    borderColor: border ?? "#FFFFFF",
    borderStyle: "solid",
    width: "100%",
    padding: typeof border === "string" ? "3em" : "",
    borderRadius: "20px"
  }
}

const MiddleBlock = (
    {
      title,
      content,
      button,
      destination,
      destinationType,
      section,
      t,
      border
    }: MiddleBlockProps) => {
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
              <Title>{t(title)}</Title>
            <Col lg={24} md={24} sm={24} xs={24} style={middleBlockContentStyles(border)}>
              <Content>
                {t(content)}
              </Content>
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
                          <Col key={id} xs={24} lg={12} xl={12}>
                              <ServiceContainer>
                                <SvgIcon
                                    src={item.icon}
                                    width="75px"
                                    height="75px"
                                />
                                  <ServiceContentContainer style={{
                                      maxWidth: "400px",
                                      textAlign: "justify"
                                  }}>
                                    <MinTitle>{t(item.title)}</MinTitle>
                                    <MinPara>{t(item.content)}</MinPara>
                                  </ServiceContentContainer>
                              </ServiceContainer>
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
