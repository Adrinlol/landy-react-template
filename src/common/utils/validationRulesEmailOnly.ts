import { validateEmailProps, validateProps } from "../types";

export default function validateEmail(values: validateEmailProps) {
  let errors = {} as validateEmailProps;

  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  } 
  return errors;
}
