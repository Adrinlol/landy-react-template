import { useState } from "react";
import { notification } from "antd";
import axios from "axios";
import { config } from "../../services/config";

interface IValues {
  name: string;
  email: string;
  message: string;
  employees: string;
}

const initialValues: IValues = {
  name: "",
  email: "",
  message: "",
  employees: "",
};

export const useForm = (validate: { (values: IValues): IValues }) => {
  const [loading, setLoading] = useState(false)
  const [formState, setFormState] = useState<{
    values: IValues;
    errors: IValues;
  }>({
    values: { ...initialValues },
    errors: { ...initialValues },
  });

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const values = formState.values;
    const errors = validate(values);
    setFormState((prevState) => ({ ...prevState, errors }));

    const url = config.url.API_URL;

    try {
      if (Object.values(errors).every((error) => error === "")) {
        setLoading(true)
        const response = await axios.post(`${url}/email`, 
          values, 
          {
              headers: {
                  "Content-Type": "application/json",
              },
              withCredentials: true,
          }
      ).then(resp => {
        setLoading(false)
          if (resp.status != 200) {
            notification["error"]({
              message: "Error",
              description:
                "There was an error sending your message, please try again later.",
            });
          } else {
            event.target.reset();
          setFormState(() => ({
            values: { ...initialValues },
            errors: { ...initialValues },
          }));

          notification["success"]({
            message: "Success",
            description: "Your message has been sent!",
          });
          }});
      }
    } catch (error) {
      setLoading(false)
      notification["error"]({
        message: "Error",
        description: "Failed to submit form. Please try again later.",
      });
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.persist();
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      values: {
        ...prevState.values,
        [name]: value,
      },
      errors: {
        ...prevState.errors,
        [name]: "",
      },
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values: formState.values,
    errors: formState.errors,
    loading: loading
  };
};
