import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Footer = styled.footer`
  background: rgb(249, 250, 252);
  padding: 2.5rem 0;
`;

export const Title = styled.h4`
  font-size: 16px;
  text-transform: uppercase;
  color: #000;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;

export const NavLink = styled(Link)`
  display: block;
  font-size: 1rem;
  margin-bottom: 0.625rem;
  transition: all 0.2s ease-in-out;
  &:hover,
  &:active,
  &:focus {
    color: #15418e;
  }
`;

export const Target = styled.a`
  display: block;
  font-size: 1rem;
  margin-bottom: 0.625rem;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    color: #15418e;
  }
`;

export const Extra = styled.section`
  background: rgb(249, 250, 252);
  position: relative;
  width: 100%;
  padding-right: 25px;
  padding-left: 25px;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 2rem;
`;

export const LogoContainer = styled.div`
  display: flex;
  position: relative;
`;

export const Select = styled.div`
  line-height: 24px;

  @media only screen and (min-width: 1024px) {
    padding: 0 10%;
  }
`;

export const Para = styled.div`
  color: rgba(2, 7, 62, 0.8);
  max-width: 340px;
  font-size: 14px;
  width: 100%;
`;

export const Large = styled(Link)`
  font-size: 16px;
  color: rgba(2, 7, 62, 0.8);
  text-align: ${(props) => (props.left ? 'left' : '')};
  padding: ${(props) => (props.left ? '0 10%' : '')};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-transform: capitalize;
  line-height: 24px;
  display: block;
  margin-bottom: 0.625rem;

  &:hover {
    color: rgb(255, 130, 92);
  }
`;

export const Chat = styled.p`
  color: rgba(2, 7, 62, 0.8);
  max-width: 85px;
  border-bottom: 1px solid rgba(2, 7, 62, 0.8);
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    border-bottom: 1px solid rgb(255, 130, 92);
    color: rgb(255, 130, 92);
  }
`;

export const Empty = styled.div`
  position: relative;
  height: 53px;
`;

export const FooterContainer = styled.div`
  max-width: 510px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 414px) {
    padding: 2rem 0;
    padding-right: 50%;
  }

  div {
    cursor: pointer;
    margin-right: 15px;
    width: 25px;
    height: 25px;

    &:hover {
      fill: rgb(255, 130, 92);
    }
  }
`;

export const Hidden = styled.div`
  display: contents;
  width: 100%;

  @media screen and (max-width: 414px) {
    display: none;
  }
`;

export const Language = styled.h4`
  font-size: 16px;
  text-transform: uppercase;
  color: #000;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;

export const Label = styled.label`
  font-size: 16px;
  text-transform: uppercase;
  color: #000;
  display: block;
  margin-bottom: 2rem;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
    margin-bottom: 1rem;
  }
`;

export const LangSelect = styled.select`
  cursor: pointer;
  border: none;
  font-size: 1rem;
  background: rgb(249, 250, 252);
`;
