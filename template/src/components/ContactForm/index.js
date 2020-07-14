import React from "react";
import { Row, Col } from "antd";
import Zoom from "react-reveal/Zoom";

import Input from "../../common/Input";
import TextArea from "../../common/TextArea";
import Block from "../Block";
import Button from "../../common/Button";
import useForm from "./useForm";
import validate from "./validationRules";

import * as S from "./styles";

const ContactForm = (props) => {
  const { values, errors, handleChange, handleSubmit } = useForm(validate);

  return (
    <S.ContactContainer>
      <S.Contact>
        <Row type="flex" justify="space-between" align="middle">
          <Col lg={12} md={11} sm={24} xs={24}>
            <Block
              padding={true}
              title="Contact form"
              content="As an example, we’ll settle on a regular option with three fields: name, email address, and message. 
              This component is using error validations and Hooks, the only thing you'll have to edit is the API url."
            />
          </Col>
          <Col lg={12} md={12} sm={24} xs={24}>
            <S.FormGroup autoComplete="off" onSubmit={handleSubmit}>
              <Col lg={24} md={24} sm={24} xs={24}>
                <Input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={values.name || ""}
                  onChange={handleChange}
                />
                {errors.name ? (
                  <Zoom cascade>
                    <S.Span>Name is required</S.Span>
                  </Zoom>
                ) : (
                  <S.Span />
                )}{" "}
              </Col>
              <Col lg={24} md={24} sm={24} xs={24}>
                <Input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={values.email || ""}
                  onChange={handleChange}
                />
                {errors.email ? (
                  <Zoom cascade>
                    <S.Span>Email is required</S.Span>
                  </Zoom>
                ) : (
                  <S.Span />
                )}{" "}
              </Col>
              <Col lg={24} md={24} sm={24} xs={24}>
                <TextArea
                  placeholder="Your Message"
                  value={values.message || ""}
                  name="message"
                  onChange={handleChange}
                />
                {errors.message ? (
                  <Zoom cascade>
                    <S.Span>Message is required</S.Span>
                  </Zoom>
                ) : (
                  <S.Span />
                )}{" "}
              </Col>
              <S.ButtonContainer>
                <Button name="submit" type="submit">
                  Submit
                </Button>
              </S.ButtonContainer>
            </S.FormGroup>
          </Col>
        </Row>
      </S.Contact>
    </S.ContactContainer>
  );
};

export default ContactForm;
