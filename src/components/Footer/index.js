import React from "react";
import {
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./styles";
import imgLogo from "../../assets/images/logo.svg";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <SocialLogo to="/">
          <SocialIcon src={imgLogo} alt="logo" />
          esignify
        </SocialLogo>
        <FooterSubHeading>Interested working with us?</FooterSubHeading>
      </FooterSubscription>
      <SocialMedia>
        <SocialMediaWrap>
          <WebsiteRights>
            © Copyright 2021, Designify. All Rights Reserved
          </WebsiteRights>
          <SocialIcons>
            <SocialIconLink href="/" target="blank" aria-label="Facebook">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href="/" target="blank" aria-label="Twitter">
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href="/" target="blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href="/" target="blank" aria-label="Youtube">
              <FaYoutube />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
