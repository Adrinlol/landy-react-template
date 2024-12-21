import { useState } from "react";
import { notification } from "antd";
import { db } from "../../config/firebase";
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useHistory } from "react-router-dom";

interface IValues {
  name?: string;
  email?: string;
  age?: string;
  standard?: string;
  gender?: string;
  subject?: string;
  institution?: string;
  yearOfStudy?: string;
  yearOfCompletion?: string;
  district?: string;
  localBody?: string;
  pinCode?: string;
  contactNumber?: string;
  whatsappNumber?: string;
}

const initialValues: IValues = {
  name: "",
  email: "",
  age: "",
  standard: "",
  gender: "",
  subject: "",
  institution: "",
  yearOfStudy: "",
  yearOfCompletion: "",
  district: "",
  localBody: "",
  pinCode: "",
  contactNumber: "",
  whatsappNumber: "",
};

export const useForm = (validate: { (values: IValues): IValues }) => {
  const history = useHistory();
  const [formState, setFormState] = useState<{
    values: IValues;
    errors: IValues;
  }>({
    values: { ...initialValues },
    errors: { ...initialValues },
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const values = formState.values;
    const errors = validate(values);
    setFormState((prevState) => ({ ...prevState, errors }));

    try {
      if (Object.values(errors).every((error) => error === "")) {
        // Add registration data to Firestore
        const registrationsRef = collection(db, 'registrations');
        await addDoc(registrationsRef, {
          ...values,
          timestamp: serverTimestamp()
        });

        // Reset form state
        setFormState({
          values: { ...initialValues },
          errors: { ...initialValues },
        });

        // Scroll to top first
        scrollToTop();

        // Show success notification after scrolling
        setTimeout(() => {
          notification["success"]({
            message: "Registration Successful",
            description: "Thank you for registering! We'll contact you soon.",
            duration: 3,
          });
        }, 500);

        // Redirect to home page after notification
        setTimeout(() => {
          history.push('/');
        }, 2500);
      }
    } catch (error) {
      console.error('Registration error:', error);
      notification["error"]({
        message: "Error",
        description: "Failed to submit registration. Please try again later.",
      });
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | { target: { name: string; value: string } }
  ) => {
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
  };
};
