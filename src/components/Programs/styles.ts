import styled from "styled-components";

export const ProgramsSection = styled("section")`
  position: relative;
  padding: 7.5rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const ProgramsContainer = styled("div")`
  max-width: 1200px;
  padding: 0 1.5rem;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Title = styled("h2")`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  color: #18216d;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const ProgramsGrid = styled("div")`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 0 1rem;

  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const ProgramCard = styled("div")`
  background: #ffffff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const ProgramIcon = styled("div")`
  margin-bottom: 1rem;

  svg {
    color: #005893;
    font-size: 2rem;
  }
`;

export const ProgramTitle = styled("h3")`
  font-size: 1.1rem;
  color: #18216d;
  margin: 0;
  font-weight: 500;
  line-height: 1.4;
`; 