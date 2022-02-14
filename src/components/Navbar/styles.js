import styled from "@emotion/styled";
import { Container } from "../../globalStyles";
import { Link } from "react-router-dom";

export const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  width: 100%;
  height: 80px;
  background: transparent;
  margin-bottom: -80px;
  z-index: 99;
`;
export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: start;
  height: 80px;
`;
export const NavLogo = styled(Link)`
  display: flex;
  justify-self: flex-start;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  z-index: 99;
  color: #fff;
`;

export const NavIcon = styled.img`
  margin-right: 0.2rem;
  width: 3rem;
`;

export const MobileIcon = styled.div`
  display: none;
  z-index: 99;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  width: 100%;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: fixed;
    padding-top: 30%;
    top: 0;
    left: 0;
    opacity: ${({ show }) => (show ? 1 : 0)};
    visibility: ${({ show }) => (show ? "visible" : "hidden")};
    transition: opacity 0.5s ease;
    background-color: #41d0e1;
  }
  & > li:first-of-type {
    margin-left: auto;
  }
`;
export const NavItem = styled.li`
  height: 50px;
  cursor: pointer;

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;
export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  &:hover {
    border-bottom: 2px solid #ec421d;
  }

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      border-bottom: none;
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8xp 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;
