import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { ContactProps, ValidationTypeProps } from "./types";
import { Button } from "../../common/Button";
import Input from "../../common/Input";
import { ContactContainer, FormGroup, Span, ButtonContainer } from "./styles";
import validateEmail from "../../common/utils/validationRulesEmailOnly";
import { useFormMailingList } from "../../common/utils/useFormMailingList";
import { CircularProgress } from "@mui/material";

const MailingList = ({ title, content, id, t }: ContactProps) => {
  const { values, errors, handleChange, handleSubmit, loading } = useFormMailingList(validateEmail);
  values.isMailingList = true;
  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type as keyof typeof errors];
    return <Span>{ErrorMessage}</Span>;
  };

  return (
    <ContactContainer id={id}>
      <Row justify="center" align="middle">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="right" triggerOnce>
            <div style={{ width: "100%", textAlign: "center" }}>
              <h6>{title}</h6>
              <p>{content}</p>
              <Slide direction="left" triggerOnce>
                <FormGroup autoComplete="off" onSubmit={handleSubmit}>
                  <Col span={24}>
                    <Input
                      type="text"
                      name="email"
                      placeholder="Your Email"
                      value={values.email || ""}
                      onChange={handleChange}
                    />
                    <ValidationType type="email" />
                  </Col>
                  <ButtonContainer>
                    {<Button name="submit">{loading ?  <CircularProgress style={{height: "25px", width: "25px"}} /> : t("Submit")}</Button>}
                  </ButtonContainer>
                </FormGroup>
              </Slide>
            </div>
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(MailingList);
