import { useState, useEffect } from "react";
import { notification } from "antd";
import axios from "axios";

export const useForm = (validate: any) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [shouldSubmit, setShouldSubmit] = useState(false);

  const openNotificationWithIcon = () => {
    notification["success"]({
      message: "Success",
      description: "Message sent!",
    });
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors(validate(values));
    // Your url for API
    const url = "";
    if (Object.values(values).every((x) => x !== "")) {
      axios
        .post(url, {
          ...values,
        })
        .then(() => {
          setShouldSubmit(true);
        });
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && shouldSubmit) {
      setValues((values) => (values = { name: "", email: "", subject: "", message: "" }));
      openNotificationWithIcon();
    }
  }, [errors, shouldSubmit]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
    setErrors((errors) => ({ ...errors, [event.target.name]: "" }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export const useFeedbackForm = (validate: any) => {
  const [values, setValues] = useState({
    name: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [shouldSubmit, setShouldSubmit] = useState(false);

  const openNotificationWithIcon = () => {
    notification["success"]({
      message: "Success",
      description: "Feedback sent! Thank you for your feedback.",
    });
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors(validate(values));
    // Your url for API
    const url = "";
    if (Object.values(values).every((x) => x !== "")) {
      axios
        .post(url, {
          ...values,
        })
        .then(() => {
          setShouldSubmit(true);
        });
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && shouldSubmit) {
      setValues((values) => (values = { name: "", message: "" }));
      openNotificationWithIcon();
    }
  }, [errors, shouldSubmit]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
    setErrors((errors) => ({ ...errors, [event.target.name]: "" }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};