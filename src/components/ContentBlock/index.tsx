import {Col, Flex, Row} from "antd";
import {Fade} from "react-awesome-reveal";
import {withTranslation} from "react-i18next";
import {ContentBlockProps} from "./types";
import {Button} from "../../common/Button";
import {SvgIcon} from "../../common/SvgIcon";
import {
  Content,
  ContentSection,
  ContentWrapper,
  MinPara,
  MinTitle,
  ServiceWrapper,
  StyledRow, Title,
} from "./styles";
import {Link} from "react-router-dom";


interface TailoredSolutionsNavProps {
  buttons: {
    title: string
    key?: string
    color?: string
  }[] | undefined
}

interface SectionItemsBlockProps {
  items: {
    title: string;
    content: string;
    icon: string;
  }[] | undefined
}


const TailoredSolutionsNav = ({buttons} : TailoredSolutionsNavProps) => {
  return (
        <>
          {
            buttons?.map((item: { color?: string; title: string; key?: string; }) => {
              const url = `/tailored-solutions?activeKey=${item.key ?? ""}`;
                  return (
                      <Link to={url}>
                        <Button color={item.color}>
                            {item.title}
                        </Button>
                      </Link>
                  )
                })
          }
        </>
  )
}

const SectionItemsBlock = ({items}: SectionItemsBlockProps) => {
  return (
      <>
        {
          items?.map((item: { title: string; content: string; icon: string; }) => {
          return (
                <Flex vertical align={window.innerWidth < 684 ? "center" : ""}>
                  {item.icon !== "" && <SvgIcon
                      src={item.icon}
                      width="60px"
                      height="60px"
                  />}
                  <MinTitle>{item.title}</MinTitle>
                  <MinPara>{item.content}</MinPara>
                </Flex>
          );
        })
        }
      </>
  )
}


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
          direction={direction}>
          {
            icon !== "" &&
            <Col lg={11} md={11} sm={12} xs={24}>
            <SvgIcon src={icon} width="100%" height="100%" />
          </Col>
          }
          <Col lg={11} md={11} sm={11} xs={24}>
            <Flex vertical align={window.innerWidth < 684 ? "center" : ""}>
              <Title>{title}</Title>
            </Flex>
            <ContentWrapper>
                <Content>{content}</Content>
              {direction === "right" && icon === "" &&
                  <>
                    <Row justify="space-between">
                    </Row>
                  </>
              }
              <ServiceWrapper>
                <Row justify="space-between">
                  <SectionItemsBlock items={section}/>
                </Row>
              </ServiceWrapper>
            </ContentWrapper>
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <TailoredSolutionsNav buttons={button}/>
          </Col>
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(ContentBlock);
