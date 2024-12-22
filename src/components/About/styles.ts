import styled from "styled-components";

export const AboutSection = styled("section")`
  position: relative;
  padding: 7.5rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 5.5rem 0 3rem;
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

export const Content = styled("p")`
  font-family: "ML TT Thunchan", "Manjari", "Noto Sans Malayalam", system-ui;
  padding: 0.75rem 0 2.5rem;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.125rem;
  line-height: 1.6;
  color: #18216d;
`;

export const ContentWrapper = styled("div")`
  max-width: 1200px;
  padding: 0 1.5rem;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const StatsContainer = styled("div")`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 2rem;
  padding: 0 1rem;

  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled("div")`
  background: #ffffff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const StatNumber = styled("h3")`
  font-size: 2.5rem;
  font-weight: bold;
  color: #005893;
  margin-bottom: 0.5rem;
`;

export const StatLabel = styled("p")`
  font-size: 1rem;
  color: #18216d;
  margin: 0;
`; 