import { useState, useEffect } from "react";
import { notification} from "antd";
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

export const useSupportForm = (validate: any) => {
  // TODO: handle upload.
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    category: "account",
    description: ""
  });
  const [errors, setErrors] = useState({});
  const [shouldSubmit, setShouldSubmit] = useState(false);

  const openNotificationWithIcon = () => {
    notification["success"]({
      message: "Success",
      description: "Support ticket created.",
    });
  };

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors(validate(values));
    // Your url for API
    const apikey = process.env.REACT_APP_AUTH_KEY;
    const url = "https://rayaerp.rayasolutions.store/api/method/rayaerp_app.api.contact_response";
    const headers = { 
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }};

        //

      //   {
      //     "name": "Ranzelle Manalo",
      //     "email": "ranz@rayasolutionsph.com",
      //     "phone": "09171758812",
      //     "category": "billing",
      //     "description": "klhdkl"
      // }

      const {name,email,phone,category,description} = values

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('category', category);
        formData.append('description', description);

        console.log({values})
        const response = axios.post('https://rayaerp.rayasolutions.store/api/method/rayaerp_app.api.handle_webhook', formData, {
          headers: {
              'Content-Type': 'multipart/form-data'
          }
      })
      .then(response => console.log(response.data))
      .catch(error => console.error(error));
    // const response = await axios.post('https://rayaerp.rayasolutions.store/api/method/rayaerp_app.api.handle_webhook', {
    //   ...values
    // }, {
    //   headers: {
    //     // Add any necessary headers here
    //     'Content-Type': 'application/json',
    //   },}).catch(e=>console.log({e}))
    // console.log({response})
    // console.log("Submit: " + values); // testing lang
    /**axios.post(url, {alues}, headers).then((res) => {
        console.log(res);
    })**/
    // if (Object.values(values).every((x) => x !== "")) {
    //   axios
    //     .post(url, {values}, headers)
    //     .then((response) => {
    //         console.log(response);
    //         setShouldSubmit(true);
    //     });
    // }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && shouldSubmit) {
      setValues((values) => (values = { name: "", email: "", phone: "",
      category: "", description: "" }));
      openNotificationWithIcon();
    }
  }, [errors, shouldSubmit]);

  const handleChange = (
    //event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | { value: SelectValue } >
    name: string,
    value: string
  ) => {
    setValues(values => ({
        ...values,
        [name]: value
    }));
    console.log(values);
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

