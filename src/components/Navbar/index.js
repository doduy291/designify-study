import React, { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
} from "./styles";

import imgLogo from "../../assets/images/logo.svg";
import { navbarData } from "../../data/NavbarData";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  const closeMobileMenu = (id) => {
    scrollTo(id);
    setShow(false);
  };
  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon src={imgLogo} alt="logo" />
            esignify
          </NavLogo>
          <MobileIcon onClick={() => setShow(!show)}>
            {show ? <FaTimes /> : <CgMenuRight />}
          </MobileIcon>
          <NavMenu show={show}>
            {navbarData.map((element, i) => (
              <NavItem key={i}>
                <NavLinks to="/" onClick={() => closeMobileMenu(element.to)}>
                  {element.text}
                </NavLinks>
              </NavItem>
            ))}
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
