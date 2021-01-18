import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';

export const Header = styled.header`
  padding: 1rem 0.5rem;
`;

export const LogoContainer = styled(Link)`
  display: flex;
  padding-top: 1rem;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 1280px;
  padding-right: 25px;
  padding-left: 25px;
  margin-right: auto;
  margin-left: auto;
`;

export const NavLink = styled.div`
  display: inline-block;
  text-align: center;
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
  cursor: pointer;
  width: ${(props) => (props.width ? '100%' : '110px')};
  font-weight: 700;
  text-align: center;
  border-radius: 1.25rem;
  display: inline-block;
`;

export const Burger = styled.div`
  @media only screen and (max-width: 768px) {
    display: block !important;
  }
  padding: 1.25rem 1.25rem;
  display: none;
`;

export const NotHidden = styled.div`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const Menu = styled.h5`
  font-size: 1.37rem;
  margin-top: -0.45rem;
  padding: 0 1.56rem 0 0;
  font-weight: 600;
  border-bottom: 5px solid #111b47;
`;

export const CustomNavLinkSmall = styled(NavLink)`
  font-size: 1rem;
  color: #000000;
  transition: color 0.2s ease-in;
  margin: 0.25rem 2rem;

  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
  }
`;

export const Label = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: #404041;
  text-align: right;
  display: flex;
`;

export const Outline = styled(MenuOutlined)`
  font-size: 22px;
  padding-right: ${(props) => (props.padding ? '10px' : '')};
`;

export const Span = styled.span`
  cursor: pointer;
`;
