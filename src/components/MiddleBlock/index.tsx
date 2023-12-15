import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper, StyledRow } from "./styles";
import { SvgIcon } from "../../common/SvgIcon";

interface MiddleBlockProps {
  title: string;
  p1: string;
  p2: string;
  p3: string;
  button: string;
  id: string
  t: TFunction;
}

const MiddleBlock = ({ title, p1, p2, p3, button, id, t }: MiddleBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <MiddleBlockSection>
      <Slide direction="up" triggerOnce>
        <Row 
          justify="center" 
          align="middle"
          id={id}
          >
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
            <SvgIcon style = "border-radius: 50%" src={"aboutme.png"} width="35%" height="20%" />
              <h6>{t(title)}</h6>
              <Content>{t(p1)}</Content>
              <Content>{t(p2)}</Content>
              <Content>{t(p3)}</Content>
              {button && (
                <Button name="submit" onClick={() => scrollTo("media")}>
                  {t(button)}
                </Button>
              )}
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
