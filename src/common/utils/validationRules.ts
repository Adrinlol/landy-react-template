import { RegisterValues } from "../../components/RegisterForm/types";

const validate = (values: RegisterValues): RegisterValues => {
  let errors: RegisterValues = {};
  
  if (!values.name) {
    errors.name = "Name is required";
  }

  if (!values.gender) {
    errors.gender = "Gender is required";
  }

  if (!values.age) {
    errors.age = "Age is required";
  } else if (isNaN(Number(values.age)) || Number(values.age) < 0) {
    errors.age = "Please enter a valid age";
  }

  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.contactNumber) {
    errors.contactNumber = "Contact number is required";
  } else if (!/^\d{10}$/.test(values.contactNumber)) {
    errors.contactNumber = "Please enter a valid 10-digit number";
  }

  if (values.whatsappNumber && !/^\d{10}$/.test(values.whatsappNumber)) {
    errors.whatsappNumber = "Please enter a valid 10-digit number";
  }

  return errors;
};

export const validateContact = (values: any) => {
  let errors: any = {};

  if (!values.name) {
    errors.name = "Name is required";
  }
  if (!values.contactNumber) {
    errors.contactNumber = "Contact number is required";
  }

  return errors;
};

export default validate;
