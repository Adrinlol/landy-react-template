import {Row, Col, Form} from "antd";
import { withTranslation } from "react-i18next";
import { Slide, Zoom } from "react-awesome-reveal";
import { ContactProps, ValidationTypeProps } from "./types";
import { useSupportForm } from "../../common/utils/useForm";
import validateSupport from "../../common/utils/validationRules";
import { Button } from "../../common/Button";
import Block from "../Block";
import Input from "../../common/Input";
import TextArea from "../../common/TextArea";
import { ContactContainer, Span, ButtonContainer } from "./styles";

const Contact = ({ title, content, id, t }: ContactProps) => {
  const { values, errors, handleChange, handleSubmit } = useSupportForm(validateSupport);

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type as keyof typeof errors];
    return (
      <Zoom direction="left">
        <Span>{ErrorMessage}</Span>
      </Zoom>
    );
  };

  return (
    <ContactContainer id={id}>
      <Row justify="space-between">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="left" triggerOnce>
            <Block title={title} content={content} />
          </Slide>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction="right" triggerOnce>
            <Form autoComplete="off" onFinish={handleSubmit}>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={values.name || ""}
                  onChange={handleChange}
                />
                <ValidationType type="name" />
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={values.email || ""}
                  onChange={handleChange}
                />

              <ValidationType type="email" />
                <Input
                  type="phone"
                  name="phone"
                  placeholder="Phone number"
                  value={values.phone || ""}
                  onChange={handleChange}
                />
              <ValidationType type="phone" />
                <Input
                  type="text"
                  name="category"
                  placeholder="Choose a category"
                  value={values.category || ""}
                  onChange={handleChange}
                />
                <TextArea
                  placeholder="Describe your inquiry"
                  value={values.description || ""}
                  name="description"
                  onChange={handleChange}
                />
                <ValidationType type="description" />

              <ButtonContainer>
                <Button name="submit">{t("Submit a ticket")}</Button>
              </ButtonContainer>
            </Form>
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);
