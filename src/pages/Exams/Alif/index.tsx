import { lazy } from "react";
import styled from "styled-components";
import { getAssetPath } from "../../../utils/paths";

const Container = lazy(() => import("../../../common/Container"));

const AlifContainer = styled.div`
  padding: 7rem 0 5rem;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 60px);
`;

const Logo = styled.img`
  max-width: 300px;
  height: auto;
  margin-bottom: 2rem;
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 800px;
  height: 800px;
`;

const FormIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

const Alif = () => {
  return (
    <Container>
      <AlifContainer>
        <Logo 
          src={getAssetPath("/img/icons/alifexam.png")} 
          alt="Albayan Logo" 
        />
        <FormContainer>
          <FormIframe
            src="https://forms.gle/HCmT8CetiX1piTBaA"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
          >
            Loading…
          </FormIframe>
        </FormContainer>
      </AlifContainer>
    </Container>
  );
};

export default Alif; 