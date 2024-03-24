import { validateProps, feedbackProps, supportProps } from "../../common/types";

export default function validate(values: validateProps) {
  let errors = {} as validateProps;

  if (!values.name) {
    errors.name = "Name is required";
  }
  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.subject) {
      errors.subject = "Subject is required";
  }
  if (!values.message) {
    errors.message = "Message is required";
  }
  return errors;
}

export function validateFeedback (values: feedbackProps) {
    let errors = {} as feedbackProps;
    
    if (!values.message) {
        errors.message = "Message is required";
    }
    
    return errors;
}

export function validateSupport (values: supportProps) {
    let errors = {} as supportProps;
    console.log(values.message);
    
    if (!values.name) {
        errors.name = "Name is required";
      }
      if (!values.email) {
        errors.email = "Email address is required";
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email address is invalid";
      }
      if (!values.phone) {
          errors.phone = "Phone number is invalid";
      } // TODO: Create regex for contact.
      if (!values.message) {
        errors.message = "Description is required";
      }
    
    return errors;
}