import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";
import {
  AboutSection,
  Content,
  ContentWrapper,
  Title,
  StatsContainer,
  StatCard,
  StatNumber,
  StatLabel
} from "./styles";

interface StatProps {
  number: string;
  label: string;
}

interface AboutProps {
  title: string;
  content: string;
}

const stats: StatProps[] = [
  {
    number: "50+",
    label: "Pre Events"
  },
  {
    number: "100+",
    label: "Collaborating Institutions"
  },
  {
    number: "10K+",
    label: "Student Community"
  },
  {
    number: "1000+",
    label: "Event Participants"
  }
];

const About = ({ title, content }: AboutProps) => {
  return (
    <AboutSection>
      <Fade direction="up" triggerOnce>
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <Title>{title}</Title>
              <Content>{content}</Content>
              <StatsContainer>
                {stats.map((stat, index) => (
                  <StatCard key={index}>
                    <StatNumber>{stat.number}</StatNumber>
                    <StatLabel>{stat.label}</StatLabel>
                  </StatCard>
                ))}
              </StatsContainer>
            </Col>
          </ContentWrapper>
        </Row>
      </Fade>
    </AboutSection>
  );
};

export default withTranslation()(About); 