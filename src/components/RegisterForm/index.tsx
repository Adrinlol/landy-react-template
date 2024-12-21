import { Row, Col, Select } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { RegisterFormProps, ValidationTypeProps } from "./types";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import { Button } from "../../common/Button";
import Block from "../Block";
import Input from "../../common/Input";
import { RegisterContainer, FormGroup, Span, ButtonContainer, LeftColumn, LeftColumnWrapper } from "./styles";

const { Option } = Select;

const RegisterForm = ({ title, content, id, t }: RegisterFormProps) => {
  const { values, errors, handleChange: originalHandleChange, handleSubmit } = useForm(validate);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | { target: { name: string; value: any } }) => {
    originalHandleChange(e as React.ChangeEvent<HTMLInputElement>);
  };

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type as keyof typeof errors];
    return <Span>{ErrorMessage}</Span>;
  };

  return (
    <RegisterContainer id={id}>
      <Row justify="space-between" align="top">
        <Col lg={12} md={11} sm={24} xs={24}>
          <LeftColumnWrapper>
            <LeftColumn>
              <Slide direction="left" triggerOnce>
                <Block title={title} content={content} />
              </Slide>
            </LeftColumn>
          </LeftColumnWrapper>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction="right" triggerOnce>
            <FormGroup autoComplete="off" onSubmit={handleSubmit}>
              <Col span={24}>
                <Input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={values.name || ""}
                  onChange={handleChange}
                />
                <ValidationType type="name" />
              </Col>
              
              <Col span={24}>
                <Select
                  style={{ width: '100%', marginBottom: '15px' }}
                  placeholder="Select Gender"
                  onChange={(value) => handleChange({ target: { name: 'gender', value }})}
                >
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                  <Option value="other">Other</Option>
                </Select>
                <ValidationType type="gender" />
              </Col>

              <Row gutter={16}>
                <Col span={12}>
                  <Input
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={values.age || ""}
                    onChange={handleChange}
                  />
                  <ValidationType type="age" />
                </Col>
                <Col span={12}>
                  <Input
                    type="text"
                    name="standard"
                    placeholder="Standard/Course"
                    value={values.standard || ""}
                    onChange={handleChange}
                  />
                </Col>
              </Row>

              <Col span={24}>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={values.subject || ""}
                  onChange={handleChange}
                />
              </Col>

              <Col span={24}>
                <Input
                  type="text"
                  name="institution"
                  placeholder="Institution"
                  value={values.institution || ""}
                  onChange={handleChange}
                />
              </Col>

              <Row gutter={16}>
                <Col span={12}>
                  <Input
                    type="text"
                    name="yearOfStudy"
                    placeholder="Year of Study"
                    value={values.yearOfStudy || ""}
                    onChange={handleChange}
                  />
                </Col>
                <Col span={12}>
                  <Input
                    type="text"
                    name="yearOfCompletion"
                    placeholder="Year of Completion"
                    value={values.yearOfCompletion || ""}
                    onChange={handleChange}
                  />
                </Col>
              </Row>

              <Row gutter={16}>
                <Col span={12}>
                  <Input
                    type="text"
                    name="district"
                    placeholder="District"
                    value={values.district || ""}
                    onChange={handleChange}
                  />
                </Col>
                <Col span={12}>
                  <Input
                    type="text"
                    name="localBody"
                    placeholder="Local Body"
                    value={values.localBody || ""}
                    onChange={handleChange}
                  />
                </Col>
              </Row>

              <Col span={24}>
                <Input
                  type="text"
                  name="pinCode"
                  placeholder="Pin Code"
                  value={values.pinCode || ""}
                  onChange={handleChange}
                />
              </Col>

              <Row gutter={16}>
                <Col span={12}>
                  <Input
                    type="tel"
                    name="contactNumber"
                    placeholder="Contact Number"
                    value={values.contactNumber || ""}
                    onChange={handleChange}
                  />
                </Col>
                <Col span={12}>
                  <Input
                    type="tel"
                    name="whatsappNumber"
                    placeholder="WhatsApp Number"
                    value={values.whatsappNumber || ""}
                    onChange={handleChange}
                  />
                </Col>
              </Row>

              <Col span={24}>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={values.email || ""}
                  onChange={handleChange}
                />
                <ValidationType type="email" />
              </Col>

              <ButtonContainer>
                <Button name="submit">{t("Register")}</Button>
              </ButtonContainer>
            </FormGroup>
          </Slide>
        </Col>
      </Row>
    </RegisterContainer>
  );
};

export default withTranslation()(RegisterForm); 