import { lazy } from "react";
import Container from "../../common/Container";

const RegisterForm = lazy(() => import("../../components/RegisterForm"));

const Register = () => {
  return (
    <Container>
      <RegisterForm
        title="Register for the Conference"
        content="Join us for an enriching experience at the Kerala Students Conference. Fill out the form below to secure your spot."
        id="register-form"
      />
    </Container>
  );
};

export default Register; 