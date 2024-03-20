import {Row, Col, Collapse, ConfigProvider, Card} from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { ContentBlockProps } from "./types";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import {
  ContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
  StyledRow,
  ButtonWrapper, MinDesc,
} from "./styles";
import {SubHeading} from "../TabContent/styles";
import {Link} from "react-router-dom";

const ContentBlock = ({
  collapseItems,
  icon,
  title,
  content,
  section,
  cardSection = false,
  button,
  destination,
  t,
  id,
  direction,
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <ContentSection>
      <Fade direction={direction} triggerOnce>
        <StyledRow
          justify="space-between"
          align="middle"
          id={id}
          direction={direction}
        >
          <Col lg={11} md={11} sm={12} xs={24}>
            <SvgIcon src={icon} width="100%" height="100%" />
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content>{content}</Content>
              {direction === "right" ? (
                  <>
                    <Link to={destination ?? ""}>
                      <ButtonWrapper>
                        {typeof button === "object" &&
                          button.map(
                            (
                              item: {
                                color?: string;
                                title: string;
                              },
                              id: number
                            ) => {
                              return (
                                    <Button
                                        key={id}
                                        color={item.color}
                                    >
                                      {t(item.title)}
                                    </Button>
                              );
                            }
                          )}
                      </ButtonWrapper>
                    </Link>
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
                                  <Col key={id} xl={11} lg={11} xs={24}>
                                        <Card bordered hoverable style={{ marginBottom: "10px", borderColor: "#349ade", textAlign: "center"}} size="small">
                                          <SubHeading> {t(item.title)}</SubHeading>
                                        </Card>
                                  </Col>
                              );
                            }
                        )}
                  </Row>
                  </>
              ) : (
                <ServiceWrapper>
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
                            <Col key={id} xl={11} lg={11} xs={24}>
                              {item.icon !== "" && <SvgIcon
                                src={item.icon}
                                width="60px"
                                height="60px"
                              />}
                              {
                                cardSection ?
                                    <Card bordered hoverable style={{ marginBottom: "10px", borderColor: "#349ade", textAlign: "center"}} size="small">
                                      <SubHeading> {t(item.title)}</SubHeading>
                                    </Card> :
                                  <>
                                    <MinTitle>{t(item.title)}</MinTitle>
                                    <MinPara>{t(item.content)}</MinPara>
                                  </>
                              }
                            </Col>
                          );
                        }
                      )}
                  </Row>
                </ServiceWrapper>
              )}
            </ContentWrapper>
          </Col>
          {typeof collapseItems === "object" &&
              <Collapse size="large" accordion items={collapseItems}
                        style={{
                          minWidth: "100%",
                          }}/>
          }
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(ContentBlock);
