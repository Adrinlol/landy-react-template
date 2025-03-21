import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { ContactProps, ValidationTypeProps } from "./types";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import { Button } from "../../common/Button";
import Block from "../Block";
import Input from "../../common/Input";
import TextArea from "../../common/TextArea";
import { ContactContainer, FormGroup, Span, ButtonContainer } from "./styles";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const Contact = ({ title, content, id, t }: ContactProps) => {
  // Remove resetForm since useForm does not return it.
  const { values, errors, handleChange } = useForm(validate);
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!values.name || !values.email || !values.message) {
      setStatus("Please fill in all fields.");
      return;
    }

    emailjs
      .sendForm(
        "service_v8jiyz9",    // Replace with EmailJS Service ID
        "template_chbndee",   // Replace with EmailJS Template ID
        form.current!,
        "99gjYFsiSOqPdUtNH"    // Replace with EmailJS Public Key
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          // Reset the form via the DOM
          form.current?.reset();
        },
        () => {
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type as keyof typeof errors];
    return <Span>{ErrorMessage}</Span>;
  };

  return (
    <ContactContainer id={id}>
      <Row justify="space-between" align="middle">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="left" triggerOnce>
            <Block title={title} content={content} />
          </Slide>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction="right" triggerOnce>
            <FormGroup ref={form} autoComplete="off" onSubmit={sendEmail}>
              <Col span={24}>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={values.name || ""}
                  onChange={handleChange}
                />
                <ValidationType type="name" />
              </Col>
              <Col span={24}>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={values.email || ""}
                  onChange={handleChange}
                />
                <ValidationType type="email" />
              </Col>
              <Col span={24}>
                <TextArea
                  placeholder="Your Message"
                  value={values.message || ""}
                  name="message"
                  onChange={handleChange}
                />
                <ValidationType type="message" />
              </Col>
              <ButtonContainer>
                {/* Use htmlType if your Button component supports it */}
                <Button htmlType="submit">{t("Submit")}</Button>
              </ButtonContainer>
              {status && (
                <p
                  style={{
                    textAlign: "center",
                    marginTop: "10px",
                    color: status.includes("Failed") ? "red" : "green",
                  }}
                >
                  {status}
                </p>
              )}
            </FormGroup>
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);
