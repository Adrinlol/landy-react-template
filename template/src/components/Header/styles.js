import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  background: #f8f9fb;
  padding: 2rem 0.5rem;
`;

export const LogoContainer = styled(Link)`
  display: flex;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 1280px;
  ${"" /* padding-right: 25px; */}
  padding-left: 42px;
  margin-right: auto;
  margin-left: auto;
  @media only screen and (max-width: 480px) {
    overflow: hidden;
    padding-right: 0px;
    padding-left: 0px;
  }
`;

export const NavLink = styled.div`
  font-weight: 0.875rem;
  display: inline-block;
  font-family: "Source Sans Pro", sans-serif;
`;

export const CustomNavLink = styled.div`
  width: 203px;
  display: inline-block;
  @media only screen and (max-width: 411px) {
    width: 150px;
  }
  @media only screen and (max-width: 320px) {
    width: 118px;
  }
`;

export const ContactWrapper = styled.div`
  font-family: "Source Sans Pro", sans-serif;
  color: #0a1f44;
  cursor: pointer;
  width: ${(props) => (props.width ? "100%" : "110px")};
  font-weight: 700;
  text-align: center;
  border-radius: 1.25rem;
  display: inline-block;
  &:hover,
  &:active,
  &:focus {
    color: #15418e;
  }
`;

export const WideContainer = styled.span`
  padding-right: 30px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
