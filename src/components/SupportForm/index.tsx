import { Row, Col, Select } from "antd";
import { SelectValue } from "antd/lib/select";
import { withTranslation } from "react-i18next";
import { Slide, Zoom } from "react-awesome-reveal";
import { ContactProps, ValidationTypeProps } from "./types";
import { useSupportForm } from "../../common/utils/useForm";
import validateSupport from "../../common/utils/validationRules";
import { Button } from "../../common/Button";
import Block from "../Block";
import Input from "../../common/Input";
import SelectInput from "../../common/Select";
import UploadInput from "../../common/UploadDragger";
import TextArea from "../../common/TextArea";
import { ContactContainer, Span, ButtonContainer } from "./styles";
import {FormGroup} from "../ContactForm/styles";

//const { Option } = Select;
const Contact = ({ title, content, id, t }: ContactProps) => {
  const { values, errors, handleChange, handleSubmit } = useSupportForm(validateSupport);
  
  const handleSelectChange = (value: string) => {
      values.category = value;
  }
  
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
      <Row justify="space-between" align="middle">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="left" triggerOnce>
            <Block title={title} content={content} />
          </Slide>
        </Col>
        <Col lg={12} md={12} sm={18} xs={18}>
          <Slide direction="right" triggerOnce>
            <FormGroup autoComplete="off" onSubmit={handleSubmit}>
              <Col span={24}>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={values.name || ""}
                  onChange={(e) => (handleChange(e.target.name, e.target.value))}
                />
                <ValidationType type="name" />
              </Col>
              <Col span={24}>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={values.email || ""}
                  onChange={(e) => (handleChange(e.target.name, e.target.value))}
                />
              </Col>
              <ValidationType type="email" />
              <Col span={24}>
                <Input
                  type="phone"
                  name="phone"
                  placeholder="Phone number"
                  value={values.phone || ""}
                  onChange={(e) => (handleChange(e.target.name, e.target.value))}
                />
              </Col>
              <ValidationType type="phone" />
              <Col span={24}>
                <Select
                    onChange={(value) => {handleChange("category", value.toString());}}
                    defaultValue="account"
                    value={values.category as SelectValue}>
                    {/** TODO: make this dynamic. **/ }
                    <Select.Option value="account">Account assistance</Select.Option>
                    <Select.Option value="billing">Billing inquiries</Select.Option>
                    <Select.Option value="product">Product feedback</Select.Option>
                    <Select.Option value="technical">Technical support</Select.Option>
                </Select>
              </Col>
              <Col span={24}>
                <UploadInput
                    name="attachment"
                    onChange={(e) => (handleChange(e.target.name, e.target.value))}
                    multiple={false} />
              </Col>
              <Col span={24}>
                <TextArea
                  placeholder="Describe your inquiry"
                  value={values.description || ""}
                  name="description"
                  onChange={(e) => (handleChange(e.target.name, e.target.value))}
                />
                <ValidationType type="message" />
              </Col>
              <ButtonContainer>
                <Button name="submit">{t("Submit a ticket")}</Button>
              </ButtonContainer>
            </FormGroup>
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);
