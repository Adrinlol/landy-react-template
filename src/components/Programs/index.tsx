import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faComments, faUserGroup, faMask, faPeopleGroup, 
  faUsers, faStreetView, faPersonWalking, faGraduationCap,
  faLightbulb, faTrophy, faDisplay, faFile
} from '@fortawesome/free-solid-svg-icons';
import {
  ProgramsSection,
  Title,
  ProgramsGrid,
  ProgramCard,
  ProgramIcon,
  ProgramTitle,
  ProgramsContainer
} from "./styles";

const iconMap: { [key: string]: any } = {
  faComments, faUserGroup, faMask, faPeopleGroup, 
  faUsers, faStreetView, faPersonWalking, faGraduationCap,
  faLightbulb, faTrophy, faDisplay, faFile
};

interface ProgramProps {
  title: string;
  programs: Array<{
    title: string;
    icon: string;
  }>;
}

const Programs = ({ title, programs }: ProgramProps) => {
  return (
    <ProgramsSection id="programs">
      <ProgramsContainer>
        <Fade direction="up" triggerOnce>
          <Row justify="center" align="middle">
            <Col span={24}>
              <Title>{title}</Title>
              <ProgramsGrid>
                {programs.map((program, index) => (
                  <Fade 
                    direction="up" 
                    delay={index * 100} 
                    triggerOnce 
                    key={index}
                  >
                    <ProgramCard>
                      <ProgramIcon>
                        <FontAwesomeIcon 
                          icon={iconMap[program.icon]} 
                          size="2x"
                        />
                      </ProgramIcon>
                      <ProgramTitle>{program.title}</ProgramTitle>
                    </ProgramCard>
                  </Fade>
                ))}
              </ProgramsGrid>
            </Col>
          </Row>
        </Fade>
      </ProgramsContainer>
    </ProgramsSection>
  );
};

export default Programs; 