import {Card, Col, Collapse, Row} from "antd";
import {Fade} from "react-awesome-reveal";
import {withTranslation} from "react-i18next";

import {ContentBlockProps} from "./types";
import {ConditionalButtonWrapper} from "../../common/Button";
import {SvgIcon} from "../../common/SvgIcon";
import {
  Content,
  ContentSection,
  ContentWrapper,
  MinDesc,
  MinPara,
  MinTitle,
  ServiceWrapper,
  StyledRow,
} from "./styles";
import {SubHeading} from "../TabContent/styles";
import {Link} from "react-router-dom";

const ContentBlock = ({
  collapseItems,
  icon,
  title,
  content,
  section,
  cardSection,
  button,
  destination,
  t,
  id,
  direction,
}: ContentBlockProps) => {

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
                        {typeof button === "object" &&
                          button.map(
                            (
                              item: {
                                color?: string;
                                title: string;
                              },
                            ) => {
                              return (
                                 <ConditionalButtonWrapper title={item.title} buttonCount={button.length}/>
                              );
                            }
                          )}
                    </Link>
                  <Row justify="space-between">
                    {typeof cardSection === "object" &&
                        cardSection.map(

                            (
                                item: {
                                  title: string;
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
                                  <>
                                    <MinTitle>{t(item.title)}</MinTitle>
                                    <MinPara>{t(item.content)}</MinPara>
                                  </>
                              }
                            </Col>
                          );
                        }
                      )}
                    {typeof cardSection === "object" &&
                        cardSection.map((item: {title: string}) => {
                          return (
                              <Col key={id} xl={11} lg={11} xs={24}>
                                  <Card bordered hoverable size="small" style={{
                                    marginBottom: "1em",
                                    borderColor: "#349ade",
                                    textAlign: "center"}}
                                  >
                                    <MinDesc> {t(item.title)}</MinDesc>
                                  </Card>
                              </Col>
                          )
                        })
                    }
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
