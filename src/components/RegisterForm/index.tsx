import { Row, Col, Select } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { RegisterFormProps, ValidationTypeProps } from "./types";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import { Button } from "../../common/Button";
import Block from "../Block";
import Input from "../../common/Input";
import DistrictCities from '../../content/DistrictCities.json';
import { RegisterContainer, FormGroup, Span, ButtonContainer, LeftColumn, LeftColumnWrapper, Label, StyledSelect } from "./styles";

const { Option } = Select;

const RegisterForm = ({ title, content, id, t }: RegisterFormProps) => {
  const { values, errors, handleChange: originalHandleChange, handleSubmit } = useForm(validate, 'registration');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | { target: { name: string; value: any } }) => {
    originalHandleChange(e as React.ChangeEvent<HTMLInputElement>);
  };

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type as keyof typeof errors];
    return <Span>{ErrorMessage}</Span>;
  };

  const educationLevels = [
    "High School",
    "Higher Secondary",
    "UG",
    "PG",
    "MPhil",
    "PhD",
    "Others"
  ];

  const shouldShowYearFields = (standard: string) => {
    return ["UG", "PG", "MPhil", "PhD", "Others"].includes(standard);
  };

  const yearOfStudyOptions = [1, 2, 3, 4, 5];

  const getYearSuffix = (year: number) => {
    if (year === 1) return "st";
    if (year === 2) return "nd";
    if (year === 3) return "rd";
    return "th";
  };

  const districts = [...Object.keys(DistrictCities), "Others"];

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
                <Label>Gender</Label>
                <StyledSelect
                  placeholder="Select Gender"
                  onChange={(value) => handleChange({ target: { name: 'gender', value }})}
                >
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                </StyledSelect>
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
                  <Label>Standard/Course</Label>
                  <StyledSelect
                    placeholder="Standard/Course"
                    onChange={(value) => handleChange({ target: { name: 'standard', value }})}
                    value={values.standard || undefined}
                  >
                    {educationLevels.map((level) => (
                      <Option key={level} value={level}>{level}</Option>
                    ))}
                  </StyledSelect>
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

              {values.standard && shouldShowYearFields(values.standard) && (
                <Row gutter={16}>
                  <Col span={12}>
                    <Label>Year of Study</Label>
                    <StyledSelect
                      placeholder="Year of Study"
                      onChange={(value) => handleChange({ target: { name: 'yearOfStudy', value }})}
                      value={values.yearOfStudy || undefined}
                    >
                      {yearOfStudyOptions.map((year) => (
                        <Option key={year} value={year}>{`${year}${getYearSuffix(year)} Year`}</Option>
                      ))}
                    </StyledSelect>
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
              )}

              <Row gutter={16}>
                <Col span={12}>
                  <Label>District</Label>
                  <StyledSelect
                    placeholder="Select District"
                    onChange={(value) => handleChange({ target: { name: 'district', value }})}
                    value={values.district || undefined}
                  >
                    {districts.map((district) => (
                      <Option key={district} value={district}>{district}</Option>
                    ))}
                  </StyledSelect>
                  <ValidationType type="district" />
                </Col>
                <Col span={12}>
                  {values.district === 'Others' ? (
                    <div>
                      <Input
                        type="text"
                        name="otherDistrict"
                        placeholder="Enter District Name"
                        value={values.otherDistrict || ""}
                        onChange={handleChange}
                      />
                    </div>
                  ) : (
                    <>
                      <Label>Local Body</Label>
                      <StyledSelect
                        placeholder="Select Local Body"
                        onChange={(value) => handleChange({ target: { name: 'localBody', value }})}
                        value={values.localBody || undefined}
                      >
                        {values.district && DistrictCities[values.district as keyof typeof DistrictCities]?.map((city: string) => (
                          <Option key={city} value={city}>{city}</Option>
                        ))}
                      </StyledSelect>
                    </>
                  )}
                </Col>
              </Row>

              <Row gutter={16}>
                <Col span={12}>
                  <Input
                    type="tel"
                    name="contactNumber"
                    placeholder="Contact Number"
                    value={values.contactNumber || ""}
                    onChange={handleChange}
                  />
                  <ValidationType type="contactNumber" />
                </Col>
                <Col span={12}>
                  <Label>Is WhatsApp number different?</Label>
                  <StyledSelect
                    placeholder="Select Yes/No"
                    onChange={(value) => handleChange({ target: { name: 'isDifferentWhatsApp', value }})}
                    value={values.isDifferentWhatsApp || undefined}
                  >
                    <Option value="no">No</Option>
                    <Option value="yes">Yes</Option>
                  </StyledSelect>
                </Col>
              </Row>

              {values.isDifferentWhatsApp === 'yes' && (
                <Col span={24}>
                  <Input
                    type="tel"
                    name="whatsappNumber"
                    placeholder="WhatsApp Number"
                    value={values.whatsappNumber || ""}
                    onChange={handleChange}
                  />
                  {values.isDifferentWhatsApp === 'yes' && <ValidationType type="whatsappNumber" />}
                </Col>
              )}

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